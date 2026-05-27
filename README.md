# Ho Ko — AI/ML Engineer Portfolio

An interactive portfolio combining three on-device systems:

1. **GPGPU N-body cosmos** — the always-on space background. WebGL2
   compute-style physics (gravity to a central black hole, cursor-driven
   gravitational well, bipolar jets, Keplerian respawn) runs entirely on
   the GPU via float-texture ping-pong, the same idea as
   [`webgpu_tsl_compute_attractors_particles`](https://threejs.org/examples/#webgpu_tsl_compute_attractors_particles)
   but on WebGL2 so it works in every modern browser. CPU per-frame cost
   is ~zero so the cosmos doesn't fight scroll/interaction.
2. **3D Semantic Galaxy** — every project / experience node is placed by
   running PCA on its 768-D **EmbeddingGemma** vector and projecting onto
   a sphere. Distance on the sphere ≈ cosine distance in embedding space,
   so semantically related work clumps naturally.
3. **On-device chatbot** — Liquid AI LFM or Gemma running locally via
   `@huggingface/transformers` (WebGPU) or `@mediapipe/tasks-genai` (WASM).
   Lazy-loaded behind a button click.

---

## Load sequence

Heavy work is sequenced so the first paint is never blocked:

```
DOMContentLoaded
   ├── Three.js dynamic import
   ├── Cosmos controller created (rIC) ──┐
   ├── DOM / nav / grid setup            │
   └── Wait on window.cosmosReady ───────┘  (cosmos resolves it after
                                              its first GPU compute frame)
        ├── Build SemanticGalaxy           (uses pre-baked embeddings,
        │                                   no network — synchronous)
        └── initGemmaEmbedder()            (~150 MB ONNX download for
                                            live search queries; until
                                            it resolves, search falls
                                            back to TF-IDF)
```

Why this matters: previously the embedder download + galaxy shader-compile
fired at DOMContentLoaded alongside the cosmos, saturating the network
and GPU during the cosmos's first frames. Gating them on
`window.cosmosReady` (with a 3 s safety race) gives the cosmos the
critical-path frames it needs.

---

## Galaxy positioning (EmbeddingGemma → PCA → sphere)

Every project and experience in `projects.js` / `experiences.js` ships
with a precomputed Gemma 768-D embedding. At galaxy build time:

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
  Galaxy, search/embedder, on-device chatbot.
- `projects.js`, `experiences.js` — data + precomputed Gemma embeddings.
- `scratch/` — offline tooling used to compute the embeddings.

No build step. Open `index.html` directly or serve over any static
host.
