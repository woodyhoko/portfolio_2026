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
    "challenges": "Tokenizing and processing millions of reviews from the massive Yelp dataset inside limited GPU memory.",
    "results": "Achieved an F1 score of 88% in identifying exaggerations and mismatch between advertised pricing and review text."
  }
];
