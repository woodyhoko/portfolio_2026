window.experienceData = [
  {
    "role": "Machine Learning Engineer",
    "company": "Google",
    "duration": "2026 - Present",
    "category": "AI/ML & LLM",
    "details": "On the Google Lens deep learning team for retrieval and ranking, powering AI Mode in Google Search and AI Overviews with knowledge-grounded retrieval and ranking models. Distill from Gemini and design highly compressed models that maintain near-equal quality while delivering the scalability and high efficiency required by the Google Search (Lens) stack, focused on enabling multimodal features.",
    "links": [
      { "label": "AI Mode in Search", "url": "https://blog.google/products/search/ai-mode-search/" },
      { "label": "AI Overviews", "url": "https://blog.google/products/search/generative-ai-google-search-may-2024/" },
      { "label": "Google Lens", "url": "https://lens.google/" },
      { "label": "Gemini", "url": "https://deepmind.google/models/gemini/" }
    ]
  },
  {
    "role": "Software Engineer",
    "company": "Google",
    "duration": "2023 - 2026",
    "category": "AI/ML & LLM",
    "details": "Core contributor to the LiteRT LM inference engine on the Google AI Edge team, bringing large language models to run privately and offline across devices — including NPU acceleration for LiteRT LM. Enabled Gemma multimodality (vision + audio + text) and Gemini Nano on Windows, macOS, and Linux, and helped power launched products such as Chrome Built-in AI and Google AI Core on Android. Also contributed to shipping the Google AI Edge Gallery app for both Android and iOS.",
    "links": [
      { "label": "LiteRT LM NPU", "url": "https://ai.google.dev/edge/litert/next/litert_lm_npu" },
      { "label": "LiteRT-LM (GitHub)", "url": "https://github.com/google-ai-edge/LiteRT-LM" },
      { "label": "Chrome Built-in AI", "url": "https://developer.chrome.com/docs/ai" },
      { "label": "Gemma", "url": "https://deepmind.google/models/gemma/" },
      { "label": "Google AI Core", "url": "https://developers.google.com/ml-kit/genai/aicore-dev-preview" },
      { "label": "AI Edge Gallery", "url": "https://github.com/google-ai-edge/gallery" }
    ]
  },
  {
    "role": "Research Collaborator",
    "company": "Google DeepMind",
    "duration": "2024 - 2025",
    "category": "AI/ML & LLM",
    "details": "Collaborated with Google DeepMind on Sparse RAG — \"Accelerating Inference of Retrieval-Augmented Generation via Sparse Context Selection\", published at ICLR 2025. Designed a sparse decoding paradigm that encodes retrieved documents in parallel and lets the LLM selectively attend to only the most relevant caches through learned control tokens, eliminating long-range attention latency while filtering out distracting context to improve generation quality. Demonstrated an optimal balance between answer quality and compute efficiency across four retrieval benchmarks — work that directly informs efficient retrieval and ranking for production search.",
    "links": [
      { "label": "ICLR 2025 Paper (PDF)", "url": "files/iclr2025-deepmind.pdf" },
      { "label": "ICLR 2025 Proceedings", "url": "https://proceedings.iclr.cc/paper_files/paper/2025/hash/411fa9d368b5485be4c6bb62615b365e-Abstract-Conference.html" }
    ]
  },
  {
    "role": "Research Collaborator",
    "company": "Google Health & Fitbit",
    "duration": "2024 - 2025",
    "category": "AI/ML & LLM",
    "details": "Collaborated with the Google Health and Fitbit team on opportunistically detecting signs of hypertension from photoplethysmography (PPG) signals on a consumer smartwatch, published as a medRxiv preprint. Built and evaluated machine learning models that infer blood-pressure-related risk from raw wrist PPG passively collected during everyday wear, enabling scalable, non-invasive cardiovascular screening at population scale.",
    "links": [
      { "label": "medRxiv Paper (PDF)", "url": "files/hypertension-ppg-fitbit.pdf" },
      { "label": "medRxiv Preprint", "url": "https://www.medrxiv.org/content/10.64898/2025.12.10.25341972v1" }
    ]
  },
  {
    "role": "Software Engineer",
    "company": "MyCareLinq",
    "duration": "2023 - 2023",
    "category": "AI/ML & LLM",
    "details": "Built NLP pipelines to extract structured entities and relationships from unstructured health documentation, constructing a domain knowledge graph for home health care. Integrated LLMs to power intelligent caregiving assistants that surface contextual recommendations and care-plan summaries. Applied AI/ML models to automate health assessments, triage incoming caregiver queries, and improve care coordination workflows."
  },
  {
    "role": "Software Engineer Intern",
    "company": "Google",
    "duration": "2022 - 2022",
    "category": "AI/ML & LLM",
    "details": "Interned on the Google AI Edge TensorFlow Lite team, contributing to the LiteRT (TFLite) Task Library — the high-level, ready-to-use APIs that run on-device ML across common task types. Developed a TFLite model tensor extractor and metadata writer system, established classification rules and identifiers mapping ML models to task-library types with 100% coverage of common GenAI task libraries, and integrated a C++ code generator that compiles optimized inference pipelines automatically for arbitrary TFLite files.",
    "links": [
      { "label": "LiteRT Task Library", "url": "https://ai.google.dev/edge/litert/libraries/task_library/overview" }
    ]
  },
  {
    "role": "AI Developer & Consultant",
    "company": "Ubiik",
    "duration": "2020 - 2020",
    "category": "Computer Vision & 3D",
    "details": "Developed meteorological computer vision models that generate future-timeframe satellite imagery to forecast cloud movement and drive short-horizon solar power prediction. Trained solar panel energy generation forecast networks, achieving >99% prediction accuracy, and co-authored \"Forecasting of Solar Power Generation using Real-time Meteorological Information\" (2020). Analyzed data contribution ratios inside deep learning backbones to verify source reliability.",
    "links": [
      { "label": "Solar Forecasting Paper", "url": "https://www.researchgate.net/publication/374842924_Forecasting_of_Solar_Power_Generation_using_Real-time_Meteorological_Information" }
    ]
  },
  {
    "role": "Back-end Developer",
    "company": "Brilltek",
    "duration": "2019 - 2020",
    "category": "Systems & Cyber Security",
    "details": "Built real-time backend systems and server infrastructure monitoring CNC machinery in Vietnam and solar fields in Taiwan. Designed industrial IoT pipelines and database schemas for high-throughput telemetry. Optimized factory operations and employee safety feedback channels through low-latency messaging protocols."
  },
  {
    "role": "Research Assistant",
    "company": "Caltech (SURF Program)",
    "duration": "2018 - 2018",
    "category": "Computer Vision & 3D",
    "details": "Analyzed large-scale transient imaging data streams from the Zwicky Transient Facility scanning 2/3 of the sky nightly. Co-authored and published astronomical findings on a Type IIb Supernova in The Astrophysical Journal Letters (878:L5). Simulated supernova mass ejections and double-peak light-curve models using computational physics.",
    "links": [
      { "label": "ApJL Paper (PDF)", "url": "files/type-iib-supernova.pdf" },
      { "label": "DOI: 10.3847/2041-8213/ab218f", "url": "https://doi.org/10.3847/2041-8213/ab218f" }
    ]
  }
];
