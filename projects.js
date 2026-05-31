window.projectsData = [
  {
    "title": "Club3: Decentralized CRDT Sync Protocol",
    "description": "A serverless, conflict-free synchronized dictionary across a local network using UDP Multicast. Implements hybrid logical clocks (HLC) and state-based Conflict-Free Replicated Data Types (CRDTs) to allow offline-first collaboration without central coordination.",
    "category": "Systems & Cyber Security",
    "technologies": [
      "Python",
      "UDP Multicast",
      "CRDTs",
      "LWW-Element-Set",
      "Network Systems"
    ],
    "date": "2025-11",
    "stars": "0",
    "link": "https://github.com/woodyhoko/ivy-ho-club3",
    "challenges": "Ensuring eventual consistency across unreliable, packet-dropping UDP links and handling concurrent edits without a centralized wall-clock server.",
    "results": "Successfully built a zero-configuration, self-healing peer discovery and database replication engine running at less than 15ms local synchronization latency."
  },
  {
    "title": "Tired-Again: Personal Finance & Tax Simulator",
    "description": "A comprehensive financial planning simulator calculating the expected future net worth of a user by factoring in progressive tax brackets, investment interests, inflation, and customized yearly spending trajectories.",
    "category": "Tools & Simulation",
    "technologies": [
      "JavaScript",
      "HTML5",
      "Financial Mathematics",
      "Chart.js"
    ],
    "date": "2024-02",
    "stars": "0",
    "link": "https://github.com/woodyhoko/tired-again",
    "demo": "https://woodyhoko.github.io/tired-again/",
    "challenges": "Accurately modeling multi-bracket tax systems (such as progressive income tax and capital gains tax) and simulating long-term compound growth over dynamic spending intervals.",
    "results": "Built a clean, client-side calculator that computes and compares different financial retirement scenarios, including Lumpsum vs. Yearly (L-vs-Y) asset trajectories."
  },
  {
    "title": "The Match Maker (Gemma 3n Edition)",
    "description": "A webcam-enabled multiplayer compatibility game running Google's Gemma 3n LLM client-side in the browser. Employs MediaPipe face mesh and pose tracking to analyze player expressions and generate real-time gameplay feedback.",
    "category": "Tools & Simulation",
    "technologies": [
      "HTML5",
      "JavaScript",
      "MediaPipe",
      "Gemma 3n",
      "GenAI client-side"
    ],
    "date": "2025-12",
    "stars": "0",
    "link": "https://github.com/woodyhoko/match-maker-game",
    "demo": "https://woodyhoko.github.io/match-maker-game/",
    "challenges": "Optimizing the 2B parameter model to fit within browser memory budgets and execute face mesh queries concurrently at 30 FPS.",
    "results": "Achieved seamless 15 tokens/sec local inference execution on standard mid-range laptop GPUs using WebGPU pipelines."
  },
  {
    "title": "The Speed of Life",
    "description": "Interactive timeline webapp visualizing Janet's Law of time perception. Computes the subjective speed of time relative to accumulated memory records across a lifespan.",
    "category": "Tools & Simulation",
    "technologies": [
      "HTML5",
      "CSS3",
      "Vanilla JS",
      "D3.js",
      "Mathematical Models"
    ],
    "date": "2025-12",
    "stars": "0",
    "link": "https://github.com/woodyhoko/speed-of-life",
    "demo": "https://woodyhoko.github.io/speed-of-life/",
    "challenges": "Translating logarithmic memory scaling formulas into intuitive, visually dynamic coordinate trajectories.",
    "results": "Built a highly responsive visual model showing how perceived duration contracts with age, utilizing custom transition libraries."
  },
  {
    "title": "MOSAIC: The Inward Turn",
    "description": "A digital worldbuilding index, manuscript storage, and interactive story analyzer for the science fiction universe of MOSAIC. Evaluates narrative pace and text sentiment to generate contextual world lore.",
    "category": "AI/ML & LLM",
    "technologies": [
      "Markdown",
      "Python",
      "Sentiment Analysis",
      "NLP",
      "D3.js Visualization"
    ],
    "date": "2024-07",
    "stars": "0",
    "link": "...",
    "challenges": "Parsing thousands of lines of narrative prose, maintaining cross-referenced entity relationships, and plotting character networks automatically.",
    "results": "Implemented a custom semantic link graph database, allowing interactive navigation of timelines, characters, and factions."
  },
  {
    "title": "Chrome Built-in AI Experiments",
    "description": "A collection of web applications utilizing Chrome's built-in on-device AI capabilities (Gemini Nano via the experimental window.ai API) for text classification, debates, and autocomplete systems.",
    "category": "AI/ML & LLM",
    "technologies": [
      "JavaScript",
      "Chrome AI API",
      "Gemini Nano",
      "HTML5",
      "WASM"
    ],
    "date": "2023-10",
    "stars": "1",
    "link": "...",
    "challenges": "Dealing with the non-standard, rapidly evolving shape of browser APIs and gracefully managing model download states.",
    "results": "Created zero-dependency autocomplete text boxes and offline debate simulators that function without internet queries."
  },
  {
    "title": "Safe Room & P2P Proxy Extension",
    "description": "Secure, serverless peer-to-peer browser communication tools using WebRTC. Offers completely encrypted chatting and document transfers without leaking routing metadata.",
    "category": "Systems & Cyber Security",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "WebRTC",
      "Browser Extensions"
    ],
    "date": "2025-07",
    "stars": "0",
    "link": "https://github.com/woodyhoko/saferoom",
    "demo": "https://woodyhoko.github.io/saferoom/",
    "challenges": "Establishing reliable WebRTC connections (NAT traversal) using public STUN/TURN servers without hosting a central signaling backend.",
    "results": "Designed a clean manual exchange protocol (via copy-paste tokens) enabling high-bandwidth, decentralized communication."
  },
  {
    "title": "Browser-Based Sandbox File Explorer",
    "description": "Interactive browser application running a secure JavaScript interpreter sandbox that allows browsing client-side file hierarchies, viewing details, and executing scripts securely.",
    "category": "Systems & Cyber Security",
    "technologies": [
      "HTML5",
      "Vanilla JS",
      "Secure Sandbox",
      "CSS Grid",
      "JSON Schema"
    ],
    "date": "2025-07",
    "stars": "0",
    "link": "https://github.com/woodyhoko/file",
    "demo": "https://woodyhoko.github.io/file/",
    "challenges": "Intercepting all prototype manipulation attempts inside the sandbox to prevent malicious scripts from escaping to the main page window.",
    "results": "Engineered a strict iframe sandbox with double-bound function proxies, successfully mitigating all common browser security bypasses."
  },
  {
    "title": "L-vs-Y: Net Worth Calculator",
    "description": "An interactive trajectory simulator comparing Lumpsum (L) investing against Yearly (Y) dollar-cost accumulation to analyze the long-term outcomes of these two primary retirement strategy pathways under historical market volatility.",
    "category": "Tools & Simulation",
    "technologies": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Financial Mathematics"
    ],
    "date": "2026-04",
    "stars": "0",
    "link": "https://github.com/woodyhoko/L-vs-Y",
    "demo": "https://woodyhoko.github.io/L-vs-Y/",
    "challenges": "Modeling historical market cycles and simulating thousands of Monte Carlo trajectories directly in client-side JS.",
    "results": "Built a highly responsive financial dashboard comparing outcomes over 30-year spans with interactive charts."
  },
  {
    "title": "Hearing Threshold Test",
    "description": "An online audio testing application that sweeps across sound frequencies to map out the user's specific hearing threshold curves.",
    "category": "Tools & Simulation",
    "technologies": [
      "HTML5",
      "JavaScript",
      "Web Audio API",
      "Chart.js"
    ],
    "date": "2026-04",
    "stars": "0",
    "link": "https://github.com/woodyhoko/hearing_test",
    "demo": "https://woodyhoko.github.io/hearing_test/",
    "challenges": "Calibrating varying headphone responses and handling frequency generation limits without introducing pops or audio clicks.",
    "results": "Created a custom oscillator wrapper with quick fade envelopes, producing reliable hearing metrics."
  },
  {
    "title": "Quant Trading Simulator",
    "description": "A trading sandbox testing automated genetic trading algorithms across simulated stock tick charts.",
    "category": "Tools & Simulation",
    "technologies": [
      "HTML5",
      "Vanilla JS",
      "D3.js",
      "Algorithmic Finance"
    ],
    "date": "2025-12",
    "stars": "0",
    "link": "https://github.com/woodyhoko/trading-sim",
    "demo": "https://woodyhoko.github.io/trading-sim/",
    "challenges": "Managing high-frequency data structures in JS and running real-time charting without rendering lags.",
    "results": "Implemented a circular queue data structure that successfully updates dynamic candlestick charts at 60 frames per second."
  },
  {
    "title": "Car Acceleration Simulation",
    "description": "A physics engine mapping engine torque, drag coefficients, and tire slip to compute actual vehicle velocity profiles.",
    "category": "Tools & Simulation",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Physics Modeling"
    ],
    "date": "2024-06",
    "stars": "0",
    "link": "https://github.com/woodyhoko/car-acceleration",
    "demo": "https://woodyhoko.github.io/car-acceleration/",
    "challenges": "Solving differential equations for friction models in real-time without compounding floating-point errors.",
    "results": "Built a beautiful visualization where users adjust vehicle specs and view acceleration graphs matched with real-world dyno test data."
  },
  {
    "title": "Birthday ASCII Canvas",
    "description": "A retro text-art terminal animation running particle physics and fireworks completely within an HTML canvas.",
    "category": "Tools & Simulation",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ASCII Art"
    ],
    "date": "2022-03",
    "stars": "0",
    "link": "https://github.com/woodyhoko/birthday_ascii",
    "demo": "https://woodyhoko.github.io/birthday_ascii/",
    "challenges": "Mapping 2D continuous coordinates to discrete ASCII character blocks at interactive speeds.",
    "results": "Created a lightweight text-animation engine with custom string-based frame rendering, running at 30 FPS."
  },
  {
    "title": "Stock Simulator (Evolving Agents)",
    "description": "A simulation running 100 fully automated, evolving neural network agents trading within a closed-loop market environment.",
    "category": "Tools & Simulation",
    "technologies": [
      "Java",
      "Processing 3",
      "Genetic Algorithm",
      "Neural Networks"
    ],
    "date": "2022-03",
    "stars": "1",
    "link": "https://github.com/woodyhoko/Stock_Simulator",
    "demo": "https://woodyhoko.github.io/Stock_Simulator/",
    "challenges": "Modeling agent supply/demand mechanics and avoiding catastrophic market crashes during training cycles.",
    "results": "Observed the emergence of complex trading strategies (like trend-following and momentum trading) over 1000 generation cycles."
  },
  {
    "title": "Conversational HCI Engine",
    "description": "Natural Language Processing (NLP) system combining Speech-to-Text and Named Entity Recognition (NER) to automate personal task execution.",
    "category": "AI/ML & LLM",
    "technologies": [
      "Python",
      "NER",
      "Elasticsearch",
      "Speech Recognition"
    ],
    "date": "2022-03",
    "stars": "0",
    "link": "https://github.com/woodyhoko/Conversational-human-computer-interfaced",
    "demo": "https://woodyhoko.github.io/Conversational-human-computer-interfaced/",
    "challenges": "Mapping ambiguous speech commands to discrete software queries and maintaining query context over multi-turn dialogs.",
    "results": "Built a fully functional assistant that lets users search, draft, and organize emails using natural voice inputs."
  },
  {
    "title": "Style-GAN Art Creator",
    "description": "An interactive generative art platform leveraging a custom StyleGAN2 architecture to synthesize high-resolution digital artwork. Employs a mapping network to project input latents into an intermediate style space, injecting style parameters via Adaptive Instance Normalization (AdaIN) alongside stochastic noise inputs.",
    "category": "Computer Vision & 3D",
    "technologies": [
      "Python",
      "TensorFlow",
      "Keras",
      "StyleGAN2",
      "Latent Space Exploration"
    ],
    "date": "2022-09",
    "stars": "1",
    "link": "https://github.com/woodyhoko/Art_Creation",
    "demo": "https://woodyhoko.github.io/Art_Creation/",
    "challenges": "Preventing mode collapse during training on limited art datasets, and designing a smooth multi-dimensional latent space interpolation system that enables disentangled control over visual elements.",
    "results": "Constructed a web interface allowing real-time trajectory visualization and style mixing across a trained StyleGAN2 model's latent dimensions."
  },
  {
    "title": "Fall Detection & Care System",
    "description": "An integrated elder-care platform combining a custom computer vision fall detection pipeline with smart home IoT services. Features a Farneback optical flow model and a Recurrent CNN (R-CNN) classifier to detect sudden falls in real time, while utilizing smart home devices for continuous monitoring and sending caregiver alerts alongside automated medical reminders.",
    "category": "Computer Vision & 3D",
    "technologies": [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Farneback Optical Flow",
      "R-CNN"
    ],
    "date": "2022-03",
    "stars": "2",
    "link": "https://github.com/woodyhoko/Fall_Detection",
    "demo": "https://woodyhoko.github.io/Fall_Detection/",
    "challenges": "Optimizing temporal feature extraction over raw video streams on low-power edge gateways and minimizing false alarms from daily household motions.",
    "results": "Published research demonstrating a robust detection system that achieves 92% classification accuracy under 120ms latency, successfully integrated with smart home alert nodes."
  },
  {
    "title": "Facial Recognition & Realtime Tracking",
    "description": "An automated facial recognition pipeline utilizing PCA (Principal Component Analysis) and FLDA (Fisher's Linear Discriminant Analysis).",
    "category": "Computer Vision & 3D",
    "technologies": [
      "MATLAB",
      "PCA",
      "FLDA",
      "Object Tracking",
      "Computer Vision"
    ],
    "date": "2017-12",
    "stars": "0",
    "link": "https://github.com/woodyhoko/Facial_Recognition_and_Tracking",
    "demo": "https://woodyhoko.github.io/Facial_Recognition_and_Tracking/",
    "challenges": "Handling extreme lighting variations and angles when matching facial vectors against low-resolution datasets.",
    "results": "Delivered a real-time tracking demo displaying active labels and tracking bounding boxes at 30 FPS."
  },
  {
    "title": "Type IIb Supernova Publication",
    "description": "Observational analysis and light-curve modeling of the core-collapse supernova ZTF18aalrxas, discovered by the Zwicky Transient Facility (ZTF). Combines time-series telescope imaging with radiative-transfer fitting of the atypical double-peaked light curve to characterize the low-mass progenitor and its extended hydrogen envelope.",
    "category": "Computer Vision & 3D",
    "technologies": [
      "Python",
      "Astrophysics Data Analysis",
      "Numerical Light Curve Modeling",
      "Radiative Transfer"
    ],
    "date": "2018-08",
    "stars": "0",
    "link": "https://cv.hoko.xyz/files/IIb.pdf",
    "challenges": "Applying radiative transport codes to simulate shock-cooling and nickel decay energy inputs to reproduce the atypical early double-peak light curves.",
    "results": "Co-authored and published the findings in The Astrophysical Journal Letters (878:L5), proving the existence of an extended circumstellar shell and low-mass progenitor from a binary system."
  },
  {
    "title": "First C++ Console Game Collection",
    "description": "A nostalgic collection of 5 arcade-style console games written in C++ using direct buffer rendering during my freshman year.",
    "category": "Tools & Simulation",
    "technologies": [
      "C++",
      "Console Buffers",
      "Game Loops"
    ],
    "date": "2016-01",
    "stars": "0",
    "link": "https://github.com/woodyhoko/First_Cpp_games",
    "demo": "https://woodyhoko.github.io/First_Cpp_games/",
    "challenges": "Writing non-blocking console keyboard input capture and handling window buffer resizing errors.",
    "results": "Successfully built fully playable implementations of Snake, Tetris, Space Invaders, Brick Breaker, and Pong in raw C++."
  },
  {
    "title": "Yelp Ad Integrity NLP Classifier",
    "description": "A machine learning pipeline evaluating the correspondence between restaurant advertising claims and user reviews.",
    "category": "AI/ML & LLM",
    "technologies": [
      "Python",
      "TensorFlow",
      "Keras",
      "NLP",
      "Big Data Analysis"
    ],
    "date": "2019-05",
    "stars": "0",
    "link": "https://github.com/woodyhoko/Restaruant-Advertisment-and-Description-Integrity-Analysis",
    "demo": "https://woodyhoko.github.io/Restaruant-Advertisment-and-Description-Integrity-Analysis/",
    "challenges": "Tokenizing and processing millions of reviews from the massive Yelp dataset inside limited GPU memory.",
    "results": "Achieved an F1 score of 88% in identifying exaggerations and mismatch between advertised pricing and review text."
  },
  {
    "title": "Learning-Based Neuroevolution (LBNE) Self-Driving Agents",
    "description": "A hybrid neuroevolution algorithm for autonomous 2D driving that evolves both neural network topology and weights through a genetic algorithm, while using backpropagation as a secondary learning signal. Each new agent first learns from the current best 'role model' via backprop before being evaluated in the environment, mirroring how organisms inherit traits yet still learn from experience.",
    "category": "AI/ML & LLM",
    "technologies": [
      "JavaScript",
      "HTML5",
      "Neuroevolution",
      "Genetic Algorithm",
      "Backpropagation",
      "Neural Networks"
    ],
    "date": "2021-09",
    "stars": "0",
    "link": "https://github.com/woodyhoko/2D-auto-driving-AI",
    "demo": "https://woodyhoko.github.io/2D-auto-driving-AI/demo.html",
    "challenges": "Fusing gradient-based learning with population-based evolution so neither signal destabilizes the other, while balancing exploration of unknown topologies against convergence across generations.",
    "results": "Authored a paper and built an in-browser driving simulation showing that pairing backpropagation with a topology-evolving GA outperforms either neuroevolution or gradient descent used alone."
  },
  {
    "title": "PID-Controlled Perishable Pricing (NTU Fintech Hackathon)",
    "description": "A fintech control-systems project that reframes grocery markdown pricing as a feedback control problem. Instead of a late, all-at-once 'reduced to clear' discount, a PID controller continuously eases the price of a perishable item down so inventory clears exactly as it reaches its expiry date, balancing consumer surplus against shop margin minus spoilage.",
    "category": "Tools & Simulation",
    "technologies": [
      "JavaScript",
      "HTML5",
      "PID Control",
      "Control Theory",
      "Monte Carlo Simulation"
    ],
    "date": "2016-11",
    "stars": "0",
    "link": "https://github.com/woodyhoko/2016_NTU_hackathon_fintech",
    "demo": "https://woodyhoko.github.io/2016_NTU_hackathon_fintech/demo.html",
    "challenges": "Tuning the proportional-integral-derivative gains so the price tracks an ideal linear sell-down to zero at expiry without oscillating, while modeling how customer demand responds to discount over the item's shelf life.",
    "results": "Built an interactive simulation with price, inventory, and welfare trajectories plus a Monte-Carlo head-to-head, demonstrating that continuous PID markdowns reduce spoilage and beat conventional last-minute clearance pricing."
  },
  {
    "title": "AI Mesh: P2P Network of On-Device Agents",
    "description": "A single-file web app that turns any browser tab into an autonomous AI node on a peer-to-peer mesh. Each node runs a local LLM, exposes a personal MCP knowledge base, and trades knowledge with other agents over real WebRTC data channels. Queries flood the mesh with a TTL and message-id dedup so a question reaches agents several hops away.",
    "category": "AI/ML & LLM",
    "technologies": [
      "HTML5",
      "JavaScript",
      "WebRTC",
      "PeerJS",
      "Gemma",
      "MCP",
      "On-device LLM"
    ],
    "date": "2026-05",
    "stars": "0",
    "link": "https://github.com/woodyhoko/ai-mesh",
    "demo": "https://woodyhoko.github.io/ai-mesh/",
    "challenges": "Bootstrapping a decentralized mesh from a minimal signaling broker and then dropping off it to run pure browser-to-browser P2P, while gossiping peer lists and routing flooded queries without loops.",
    "results": "Delivered beacon and participant nodes that self-discover via peer exchange and answer questions collaboratively, with all inference and knowledge staying entirely on-device using Chrome's Prompt API or a local Gemma fallback."
  },
  {
    "title": "Artificial Life: Neuroevolution Ecosystem",
    "description": "An agent-based artificial-life simulator where neural-network creatures evolve on a 2D toroidal world of heterogeneously regrowing grass patches. Predator/prey dynamics, foraging strategies, and territorial behaviour emerge purely from evolved sensorimotor controllers, with no hand-coded rules — in the tradition of Braitenberg vehicles and the animat paradigm.",
    "category": "Tools & Simulation",
    "technologies": [
      "Java",
      "Processing",
      "Neural Networks",
      "Genetic Algorithm",
      "Agent-Based Modeling"
    ],
    "date": "2018-05",
    "stars": "1",
    "link": "https://github.com/woodyhoko/Artificial_Life",
    "demo": "https://woodyhoko.github.io/Artificial_Life/",
    "challenges": "Designing agents whose evolved wiring produces stable ecosystems rather than instant extinction or runaway population explosions, balancing resource regrowth against reproduction pressure.",
    "results": "Observed life-like emergent behaviours — predation, herding, and territory defense — arising from local rules alone, across both competitive and survival simulation modes."
  },
  {
    "title": "NightConnect: Serverless P2P Chat",
    "description": "A peer-to-peer browser chat where two peers connect directly via WebRTC, so messages never touch a backend, are never stored, and disappear when the tab closes. A signaling server is involved only for the WebRTC handshake; once the data channel opens, all traffic flows over a DTLS-encrypted SCTP link.",
    "category": "Systems & Cyber Security",
    "technologies": [
      "HTML5",
      "JavaScript",
      "WebRTC",
      "PeerJS",
      "DTLS"
    ],
    "date": "2024-06",
    "stars": "0",
    "link": "https://github.com/woodyhoko/chat",
    "demo": "https://woodyhoko.github.io/chat/demo.html",
    "challenges": "Establishing reliable ordered SCTP-over-DTLS data channels through NAT using only short PeerJS IDs, with zero server involvement once the connection is established.",
    "results": "Shipped an ephemeral, fully private chat where the only server contact is the ICE negotiation handshake and no message ever leaves the direct peer-to-peer link."
  },
  {
    "title": "Collective Intelligence: AI Debate Arena",
    "description": "A browser-based debate arena where two on-device AI debaters argue opposite sides of a binary motion while a panel of AI judges — each with their own background, bias, and decision criteria — votes after every round. A small experiment in collective intelligence: many opinionated, imperfect judges aggregating into a single verdict.",
    "category": "AI/ML & LLM",
    "technologies": [
      "HTML5",
      "JavaScript",
      "Chrome Prompt API",
      "Gemma",
      "WebGPU"
    ],
    "date": "2026-05",
    "stars": "0",
    "link": "https://github.com/woodyhoko/collective-intelligence",
    "demo": "https://woodyhoko.github.io/collective-intelligence/",
    "challenges": "Steering a small local model to maintain distinct, consistent judge personas and emit structured PRO/CON votes reliably across rounds, with no server-side model to fall back on.",
    "results": "Built a fully on-device arena using Chrome's Prompt API with automatic Gemma/WebGPU fallback, animating live round-by-round vote tallies alongside a complete debate transcript."
  },
  {
    "title": "M(L)ove: AI Dance Coach",
    "description": "A computer-vision choreography feedback system built in 36 hours at Hack the North. Upload a reference dance and your own attempt, and a pose-estimation pipeline produces a frame-by-frame similarity score that pinpoints exactly where your movement diverges from the original — feedback that video tutorials alone cannot give.",
    "category": "Computer Vision & 3D",
    "technologies": [
      "Python",
      "Pose Estimation",
      "Computer Vision",
      "Cosine Similarity",
      "OpenCV"
    ],
    "date": "2021-01",
    "stars": "0",
    "link": "https://github.com/woodyhoko/hackathon_HTN",
    "demo": "https://woodyhoko.github.io/hackathon_HTN/demo.html",
    "challenges": "Making the similarity score invariant to body size, camera distance, and position by mean-centering and L2-normalizing the 17-keypoint pose vectors before comparison.",
    "results": "Delivered a working two-video comparison demo that locates frame-level choreography errors, built end to end during a single hackathon weekend with a three-person team."
  },
  {
    "title": "Isaac Modular 3D: Twin-Stick Roguelite",
    "description": "A 3D twin-stick roguelite shooter built in Unity, inspired by The Binding of Isaac. Every upgrade is implemented as an independent, modular effect on the player's cannon, so items picked up in any order combine freely — more projectiles and bigger and homing and sticky, all at once — with no special-case code.",
    "category": "Computer Vision & 3D",
    "technologies": [
      "C#",
      "Unity",
      "3D Game Development",
      "Component Architecture"
    ],
    "date": "2022-03",
    "stars": "0",
    "link": "https://github.com/woodyhoko/Isaac-Moduler-3D-approach",
    "demo": "https://woodyhoko.github.io/Isaac-Moduler-3D-approach/",
    "challenges": "Designing upgrade items as orthogonal, self-contained modifiers so new items can be added by writing one independent effect, while still composing cleanly when many are stacked.",
    "results": "Recreated Isaac's emergent item-synergy gameplay in 3D, where each pickup flips a single flag or value on the cannon and arbitrary combinations of effects compose automatically."
  },
  {
    "title": "Liver Cancer Survival Prediction (TCGA-LIHC)",
    "description": "An exploratory bioinformatics study asking whether liver-cancer patient survival is associated with tumour gene (mRNA) expression, using the public, de-identified TCGA Liver Hepatocellular Carcinoma cohort from cBioPortal. It pairs per-gene correlation analysis with a binary survival-outcome prediction model.",
    "category": "AI/ML & LLM",
    "technologies": [
      "Python",
      "Bioinformatics",
      "mRNA Expression",
      "Survival Analysis",
      "Machine Learning"
    ],
    "date": "2022-03",
    "stars": "1",
    "link": "https://github.com/woodyhoko/liver-cancer-prediction",
    "demo": "https://woodyhoko.github.io/liver-cancer-prediction/",
    "challenges": "Working strictly within the privacy constraints of public, de-identified data and finding reliable signal in high-dimensional gene-expression vectors where the number of genes vastly exceeds the patient count.",
    "results": "Identified genes whose tumour mRNA expression separates survivors from non-survivors and framed overall survival as a predictable binary outcome on the public TCGA-LIHC cohort."
  },
  {
    "title": "Tetris AI in x86 Assembly",
    "description": "A fully playable Tetris game with a self-learning heuristic AI, an adversarial 'Hell Mode' engine that feeds the worst possible piece, and a self-play training loop — all hand-written in roughly 2,000 lines of x86 Assembly, with every array access, loop, and branch manually mapped to registers and jumps.",
    "category": "AI/ML & LLM",
    "technologies": [
      "x86 Assembly",
      "Heuristic Search",
      "Self-Learning AI",
      "Game AI"
    ],
    "date": "2018-12",
    "stars": "0",
    "link": "https://github.com/woodyhoko/Tetris_AI",
    "demo": "https://woodyhoko.github.io/Tetris_AI/demo.html",
    "challenges": "Hand-translating the AI's board-evaluation heuristic and weight-update loop into registers, addressing modes, and conditional jumps, with no compiler to optimize or hide the cost structure.",
    "results": "Built a complete self-tuning AI that sustains an average of 50,000 cleared lines without next-piece preview or hold, plus an inverse-heuristic adversarial piece generator for Hell Mode."
  },
  {
    "title": "TensorFlow.js WASM Benchmarking (IMC '23)",
    "description": "A cross-browser inference performance study of TensorFlow.js backends (WebGL, WASM, and CPU) using Selenium-automated timing. It is the machine-learning artifact behind an ACM Internet Measurement Conference 2023 paper on real-world WebAssembly performance, holding the benchmark harness, collected timing data, and analysis.",
    "category": "AI/ML & LLM",
    "technologies": [
      "TensorFlow.js",
      "WebAssembly",
      "JavaScript",
      "Selenium",
      "Performance Benchmarking"
    ],
    "date": "2023-10",
    "stars": "1",
    "link": "https://github.com/woodyhoko/tfjs_wasm",
    "demo": "https://woodyhoko.github.io/tfjs_wasm/",
    "challenges": "Automating reproducible warm-versus-cold timing across browsers and backends while isolating initialization overhead, memory-transfer cost, and silent GPU-API failures.",
    "results": "Quantified 15-20x WASM speedups over plain-JS CPU inference and surfaced a V8 'first-argument advantage', contributing the ML portion of a published IMC '23 study."
  }
];
