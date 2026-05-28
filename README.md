# Ho Ko — AI/ML Engineer Portfolio

An interactive portfolio combining three on-device systems:

1. **N-body black-hole cosmos** — the always-on space background.
   WebGL2 GPGPU compute (via `GPUComputationRenderer`): Newtonian
   gravity to a central black hole, bipolar jets ejected when a
   particle crosses the event horizon, Keplerian respawn at the outer
   rim, and a click-and-drag cursor attractor (direct-set, no JS-side
   lerp — the gravity field itself produces the smooth curving
   trails). Camera position lerps between per-section keyframes
   (hero / about / projects / chat / timeline) as you scroll, so
   each section sees the cosmos from a different angle. CPU
   per-frame cost is ~zero.
2. **3D Semantic Galaxy** — every project / experience node is placed by
   running PCA on its 128-D **EmbeddingGemma** vector (Matryoshka-sliced
   from the model's 768-D output) and projecting onto a sphere. Distance
   on the sphere ≈ cosine distance in embedding space, so semantically
   related work clumps naturally.
3. **On-device chatbot** — Liquid AI LFM or Gemma running locally via
   `@huggingface/transformers` (WebGPU) or `@mediapipe/tasks-genai` (WASM).
   Lazy-loaded behind a button click.

---

## Load sequence

Heavy work is sequenced so the first paint is never blocked:

```
DOMContentLoaded
   ├── Three.js dynamic imports (parallel, modulepreloaded)
   ├── Cosmos controller created (rIC) ──┐
   ├── DOM / nav / grid setup            │
   └── Wait on window.cosmosReady ───────┘  (cosmos resolves it after
                                              its first GPU compute frame)
        ├── ensureEmbeddings(allDocs)      cache hit ⇒ instant
        │                                   cache miss ⇒ download Gemma
        │                                   (~150 MB) + compute missing
        │                                   docs only, then IndexedDB-cache
        │                                   the result
        └── Build SemanticGalaxy           (uses doc.embedding via PCA)
```

Why this matters: previously the embedder download + galaxy shader-compile
fired at DOMContentLoaded alongside the cosmos, saturating the network
and GPU during the cosmos's first frames. Gating them on
`window.cosmosReady` (with a 3 s safety race) gives the cosmos the
critical-path frames it needs.

---

## Embedding cache (shipped JSON + IndexedDB, Matryoshka 128-D)

`projects.js` and `experiences.js` ship **only the source text**. The
embeddings live in a separate file, `embeddings_cache.json`, generated
by the `npm run build:embeddings` script (see `scripts/build_embeddings_cache.mjs`).
That JSON is ~34 KB for the 27 current docs and ships with the site,
so the very first visit can position the galaxy without downloading
the ~150 MB Gemma model at all.

Lookup order at runtime:

1. **IndexedDB** (`portfolio_embeddings_v2` / `embeddings`) — populated
   on first visit from the shipped JSON, plus anything computed
   live for new/edited docs. Sub-millisecond reads.
2. **Shipped JSON** (`embeddings_cache.json`) — fetched once,
   parsed once, cached in memory. Used as the fallback when
   IndexedDB doesn't have an entry yet.
3. **Live Gemma pipeline** — only fires for docs whose hash isn't in
   the JSON and isn't in IndexedDB. Downloads the ~150 MB model and
   computes the embedding, writes it to IndexedDB.

When the live pipeline runs:
`pipe('title: <title> | text: <body>', { pooling: 'mean', normalize: true, max_length: 256, truncation: true })`
The **first 128 of the 768 output dimensions** are sliced off and
L2-renormalized before being written to the cache.

Why Matryoshka 128-D? EmbeddingGemma is trained with Matryoshka
Representation Learning, so the leading dimensions retain almost all
the semantic signal of the full vector. 128 D gives us ~6× cheaper
scoring (the dot products in `scoreDocs` are the hot path during
search) and ~6× smaller cache footprint, at a small ranking accuracy
hit. The tokenizer `max_length: 256` caps forward-pass cost for long
docs (most fit comfortably; very long descriptions get tail-truncated).

Search degrades gracefully: while embeddings are still computing in
the background, `scoreDocs` automatically falls back to TF-IDF cosine
over the tokenized text. The user can search from the first keystroke
and the ranking sharpens to embedding-based once the cache fills.

Editing a doc's text changes its hash, so only that one doc misses
the cache. You have two options when that happens:

- **Live fallback (zero-touch).** The page detects the cache miss on
  next load, downloads Gemma once (or uses an already-warm cache),
  and computes the missing embedding. Stored in IndexedDB for
  subsequent loads.
- **Regenerate the shipped JSON (recommended for shipping).** Run
  `npm run build:embeddings` — incremental, only recomputes changed
  docs against the existing JSON. Re-runs in a couple of seconds.
  Commit the updated `embeddings_cache.json`. Now every visitor gets
  the new embedding on first load with no Gemma download.

The same script also handles model changes: bump `MODEL_ID` /
`MODEL_DTYPE` / `EMBEDDING_DIMS` / `MAX_SEQUENCE_LENGTH` at the top
of `scripts/build_embeddings_cache.mjs`, sync the same constants in
`index.html`, then run `npm run build:embeddings` to rebuild the
whole cache from scratch.

---

## Galaxy positioning (EmbeddingGemma → PCA → sphere)

Every project and experience runs through EmbeddingGemma to produce a
768-D vector (cached as above). At galaxy build time:

1. **Center the embeddings** — subtract the corpus mean. Gemma's
   embedding space is heavily anisotropic; removing the dominant common
   direction is essential to recover useful per-doc separation.
2. **Dual PCA (Gram-matrix formulation)** — with `N=27` docs and
   `D=768`, the `N×N` Gram matrix `G = X Xᵀ` is small. Power iteration
   with Gram-Schmidt deflation gives the top 3 eigenvectors; the
   corresponding principal components in 768-D are `vₖ = Xᵀ uₖ / √λₖ`.
   Each doc's 3-D position is `(Xᵢ·v₁, Xᵢ·v₂, Xᵢ·v₃)`.
3. **Sphere projection + tangential repulsion** — normalize each
   position to a radius-9 sphere, then 30 iterations of great-circle
   repulsion keep overlapping points apart along the surface (so the
   *angular* separation equals the meaningful quantity, which is what
   cosine similarity actually measures).

Live search queries: when the Gemma model has finished loading, query
text is embedded by the same model and projected through the **same PCA
basis**, so the query marker lands in the same semantic space as the
nodes. Before Gemma is ready, search falls back to a TF-IDF projection
through hardcoded category anchors.

---

## Cosmos physics (GPGPU)

Two RGBA32F float textures (`texturePosition`, `textureVelocity`),
ping-ponged each frame by `GPUComputationRenderer`:

- **Velocity shader** — Newtonian gravity to BH, optional gravity to
  the cursor attractor, one-shot outward burst on cursor release,
  bipolar jet ejection when a particle crosses the event horizon, fresh
  Keplerian tangential velocity on outer-rim escape. Reads previous
  position + velocity, writes new velocity.
- **Position shader** — reads previous position and new velocity,
  integrates, mirrors the boundary conditions with deterministic GLSL
  hashes so position and velocity always agree on respawn / ejection
  targets.
- **Render material** — vertex shader samples its own position out of
  the texture via a per-particle `aRef` UV attribute; particles are
  rendered as additive pinprick points with speed-derived color
  (cool → warm → white as kinetic energy rises).

Particle count: 256² (65 536) on desktop, 128² (16 384) on mobile.
Browsers without WebGL2 float textures fall back to the original CPU JS
N-body loop with progressive chunked initialization.

---

## Files

- `index.html` — everything: styles, Cosmos controller, Semantic
  Galaxy, search/embedder, on-device chatbot, IndexedDB
  EmbeddingCache.
- `projects.js`, `experiences.js` — pure data (no embeddings).
- `embeddings_cache.json` — precomputed Gemma embeddings for the
  current set of docs. Loaded once at boot. Generated by
  `npm run build:embeddings`.
- `scripts/build_embeddings_cache.mjs` — Node script that
  regenerates the JSON. Incremental: only recomputes docs whose
  content hash changed since the last run.
- `scratch/` — internal utility scripts.

No build step is required to run the site — just open `index.html`
or serve over any static host. The `npm` deps are only for the
embeddings build script.
