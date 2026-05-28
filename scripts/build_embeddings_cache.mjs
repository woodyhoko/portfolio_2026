#!/usr/bin/env node
// =============================================================================
// build_embeddings_cache.mjs
//
// Precompute EmbeddingGemma 128-D Matryoshka embeddings for every project
// in projects.js and every experience in experiences.js, and write the
// result to ./embeddings_cache.json.
//
// The page loads that JSON at boot and treats it as a frozen first-load
// cache, so the very first visit doesn't have to download the ~150 MB ONNX
// model or run 27 forward passes before the galaxy can position its nodes.
// IndexedDB still serves as the runtime cache for any docs that change or
// get added after the JSON was generated.
//
// Re-run whenever you edit a project, add a new one, or change the
// embedding model:
//
//   npm install              # ensure @huggingface/transformers is present
//   npm run build:embeddings # writes ./embeddings_cache.json
//
// The hash function, text format, max_length and Matryoshka slice MUST
// match index.html's hashDoc() / getDocText() / applyMatryoshka() /
// matryoshkaSlice() exactly, or the page will see cache misses and
// recompute on first load. Keep the constants below in sync if you tweak
// the page-side ones.
// =============================================================================

import { pipeline } from '@huggingface/transformers';
import { readFile, writeFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import vm from 'node:vm';

// ── Constants — must match the page-side values exactly. ────────────────
const EMBEDDING_DIMS = 128;
const MAX_SEQUENCE_LENGTH = 256;
const MODEL_ID = 'onnx-community/embeddinggemma-300m-ONNX';
const MODEL_DTYPE = 'q4';
const MODEL_DEVICE = 'cpu';   // Node-side; the page will use webgpu/wasm

// ── Document hash + text format — must match index.html. ────────────────
function hashDoc(doc) {
    const parts = [];
    if (doc.title) parts.push(doc.title);
    if (doc.role) parts.push(doc.role);
    if (doc.company) parts.push(doc.company);
    if (doc.category) parts.push(doc.category);
    if (doc.description) parts.push(doc.description);
    if (doc.details) parts.push(doc.details);
    if (Array.isArray(doc.technologies)) parts.push(doc.technologies.join(','));
    if (doc.challenges) parts.push(doc.challenges);
    if (doc.results) parts.push(doc.results);
    if (Array.isArray(doc.responsibilities)) parts.push(doc.responsibilities.join('|'));
    if (Array.isArray(doc.highlights)) parts.push(doc.highlights.join('|'));
    return createHash('sha256').update(parts.join('\n'), 'utf8').digest('hex');
}

function getDocText(doc) {
    let title = doc.title || doc.role || '';
    if (doc.role && doc.company) title = `${doc.role} @ ${doc.company}`;
    const parts = [];
    if (doc.category) parts.push(doc.category);
    if (doc.description) parts.push(doc.description);
    if (doc.details) parts.push(doc.details);
    if (Array.isArray(doc.technologies) && doc.technologies.length) parts.push(doc.technologies.join(', '));
    if (doc.challenges) parts.push(doc.challenges);
    if (doc.results) parts.push(doc.results);
    if (Array.isArray(doc.responsibilities)) parts.push(doc.responsibilities.join(' '));
    if (Array.isArray(doc.highlights)) parts.push(doc.highlights.join(' '));
    return `title: ${title} | text: ${parts.join(' ')}`;
}

function matryoshkaSlice(arr) {
    const n = Math.min(EMBEDDING_DIMS, arr.length);
    const out = new Array(n);
    let mag = 0;
    for (let i = 0; i < n; i++) { out[i] = arr[i]; mag += arr[i] * arr[i]; }
    mag = Math.sqrt(mag) || 1;
    for (let i = 0; i < n; i++) out[i] = roundFloat(out[i] / mag);
    return out;
}

// Trim the embeddings to 6 decimal places before JSON-encoding — the
// model only emits ~3-4 significant digits of useful precision after
// Matryoshka truncation, so the full-precision string form just bloats
// the file. 6 decimals keeps cosine accuracy well within model noise
// while shrinking the JSON about 30%.
function roundFloat(x) {
    return Math.round(x * 1e6) / 1e6;
}

// ── Load projects.js + experiences.js (browser globals via vm). ─────────
async function loadDataFiles(projectRoot) {
    const projectsSrc = await readFile(resolve(projectRoot, 'projects.js'), 'utf8');
    const expSrc      = await readFile(resolve(projectRoot, 'experiences.js'), 'utf8');
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(projectsSrc, ctx, { filename: 'projects.js' });
    vm.runInContext(expSrc,      ctx, { filename: 'experiences.js' });
    return {
        projects:    ctx.window.projectsData    || [],
        experiences: ctx.window.experienceData  || []
    };
}

// ── Main. ───────────────────────────────────────────────────────────────
async function main() {
    const here = dirname(fileURLToPath(import.meta.url));
    const projectRoot = resolve(here, '..');

    console.log('[build] loading projects + experiences...');
    const { projects, experiences } = await loadDataFiles(projectRoot);
    const allDocs = [...projects, ...experiences];
    console.log(`[build] ${projects.length} projects + ${experiences.length} experiences = ${allDocs.length} docs`);

    // Try to read any existing cache so we only recompute changed/added
    // docs (incremental builds re-run in seconds instead of minutes).
    const outPath = resolve(projectRoot, 'embeddings_cache.json');
    let existing = {};
    try {
        existing = JSON.parse(await readFile(outPath, 'utf8'));
        console.log(`[build] existing cache: ${Object.keys(existing).length} entries`);
    } catch (e) {
        console.log('[build] no existing cache, computing all docs');
    }

    // Hash every doc first so we know which need recomputing.
    const targets = allDocs.map(doc => ({
        doc,
        hash: hashDoc(doc),
        label: doc.title || `${doc.role} @ ${doc.company}` || '(untitled)'
    }));
    const fresh = targets.filter(t => !existing[t.hash]);
    const reused = targets.filter(t =>  existing[t.hash]);
    console.log(`[build] ${reused.length} cache hits, ${fresh.length} to compute`);

    let pipe = null;
    if (fresh.length > 0) {
        console.log(`[build] loading ${MODEL_ID} (${MODEL_DTYPE}) on ${MODEL_DEVICE}...`);
        pipe = await pipeline('feature-extraction', MODEL_ID, {
            device: MODEL_DEVICE,
            dtype:  MODEL_DTYPE
        });
        console.log('[build] model loaded');
    }

    // Build the new cache. Carry forward old entries unchanged so we
    // don't lose embeddings for docs that aren't currently in
    // projects.js (e.g., temporarily disabled) — but normally targets
    // covers everything.
    const out = { ...existing };
    // Garbage-collect entries that don't match any current doc hash.
    const liveHashes = new Set(targets.map(t => t.hash));
    for (const key of Object.keys(out)) {
        if (!liveHashes.has(key)) delete out[key];
    }

    for (let i = 0; i < fresh.length; i++) {
        const { doc, hash, label } = fresh[i];
        const text = getDocText(doc);
        process.stdout.write(`[build] [${i+1}/${fresh.length}] ${label.slice(0, 60).padEnd(60)} `);
        const t0 = Date.now();
        const tensor = await pipe(text, {
            pooling: 'mean',
            normalize: true,
            max_length: MAX_SEQUENCE_LENGTH,
            truncation: true
        });
        out[hash] = matryoshkaSlice(Array.from(tensor.data));
        console.log(`(${Date.now() - t0} ms)`);
    }

    // Write the JSON file. Single-line per entry keeps diffs tractable
    // when only one doc's embedding changed.
    const json = '{\n' + Object.keys(out)
        .map(k => `  ${JSON.stringify(k)}: ${JSON.stringify(out[k])}`)
        .join(',\n') + '\n}\n';
    await writeFile(outPath, json, 'utf8');
    
    // Write JS version to support local file:// access without CORS errors
    const jsPath = resolve(projectRoot, 'embeddings_cache.js');
    const jsContent = 'window._shippedEmbeddingsCacheData = ' + json + ';';
    await writeFile(jsPath, jsContent, 'utf8');
    
    const sz = (await stat(outPath)).size;
    console.log(`[build] wrote ${Object.keys(out).length} entries to embeddings_cache.json and .js (${(sz/1024).toFixed(1)} KB)`);
}

main().catch(err => {
    console.error('[build] FAILED:', err);
    process.exit(1);
});
