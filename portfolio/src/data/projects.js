export const profile = {
  name: 'Henrique Baptista',
  title: 'AI Engineer',
  subtitle: 'Production AI Systems · Evaluation · Voice AI',
  tagline: 'I build AI systems that hold up in production. My work covers agents, evaluation, data pipelines, deployment, and the product around them.',
  about: `I work across the full lifecycle of production AI: defining what quality means, curating the right data, evaluating model behavior, building backend services, and shipping things people actually use. Most of my experience sits where LLM quality, agents, voice AI, and product engineering meet.`,
  aboutExtended: `In my most recent role I built the evaluation stack for medical AI — ASR benchmarks, human annotation pipelines, and LLM-as-Judge evaluators running in production. On my own, I design and operate agent products: a multi-agent SaaS, an MCP server, and AI inside a real auto shop. The pattern is the same everywhere: make quality measurable, plan for failure, and own the path from prototype to production.`,
  contact: {
    linkedin: 'https://www.linkedin.com/in/henrique-baptista777/',
    github: 'https://github.com/henriquebap',
    email: 'henrique.obap@gmail.com'
  },
  education: 'Postgraduate Program in Machine Learning Engineering, FIAP (completed Mar 2026)',
  educationBachelor: 'Bachelor in Systems Analysis & Development, FIAP (completed Dec 2024)'
};

export const proofPoints = [
  { value: '9', label: 'ASR providers benchmarked' },
  { value: '10k+', label: 'clinical audio samples evaluated' },
  { value: '-78%', label: 'medication transcription errors' },
  { value: '4', label: 'live products operated end to end' }
];

export const caseStudies = [
  {
    id: 'medical-asr',
    index: '01',
    title: 'Medical AI Evaluation & ASR',
    eyebrow: 'Professional work · HealthTech',
    role: 'ML / AI Engineer',
    status: 'Private system',
    shortDescription: 'From ASR benchmarking and data curation to LLM-as-Judge evaluators running in production for clinical audio.',
    fullDescription: 'The full evaluation stack for medical voice AI: ASR benchmarking with domain metrics, human annotation with consensus, a medication-error post-processor, and LLM-as-Judge evaluators in production — calibrated against human judgment.',
    narrative: {
      problem: 'Clinical audio is hard. Heavy accents, people talking over each other, dense medical vocabulary. Transcription errors are easy to miss, and in a healthcare product the ones you miss are the ones that hurt.',
      approach: 'I benchmarked 9 ASR providers on 10k+ clinical audio samples with WER/CER plus a domain metric I created for medication errors, ran dual-annotator labeling in Argilla with automatic consensus, and built a lexical-phonetic post-processor from a taxonomy of 217 real medication transcription errors. Then I moved up the stack: LLM-as-Judge evaluators for generated clinical documents, running in production on LangSmith.',
      reasoning: 'No single check is trustworthy on medical terminology. One annotator makes mistakes, and one automated score misses whole categories of errors. So I combined human consensus, deterministic checks, and an LLM judge — and calibrated the judge against human annotation with statistical agreement gates before trusting its verdicts.',
      outcome: 'Medication transcription errors dropped 78% and WER dropped 21% with the domain prompt plus post-processor — validated statistically, including the honest finding that the gain concentrates where medications actually occur. The judge pipeline went from 8% uncertain verdicts to 0% across iterations, and its findings kept turning into concrete product fixes.'
    },
    highlights: [
      'Benchmark of 9 ASR providers across 10k+ clinical audio samples',
      'Medication-error taxonomy (217 variants) driving a post-processor: -78% medication errors',
      'Dual-annotator consensus pipeline with adjudication, live dashboard, and 24/7 webhook sync',
      'LLM-as-Judge evaluators in production, calibrated against human annotation',
      'End-to-end latency observability for the realtime transcription pipeline'
    ],
    metrics: [
      { value: '9', label: 'ASR providers' },
      { value: '-78%', label: 'medication errors' },
      { value: '10k+', label: 'samples evaluated' }
    ],
    technologies: ['Python', 'PyTorch', 'Whisper', 'Hugging Face', 'Argilla', 'LangSmith', 'AWS S3', 'Docker'],
    skillsShown: ['Evaluation design', 'LLM-as-Judge in production', 'Fine-tuning data curation', 'Statistical validation', 'Data pipeline engineering'],
    flow: {
      nodes: [
        { label: 'ASR benchmark', detail: '9 providers, 10k+ samples, WER/CER + domain metric' },
        { label: 'Human annotation', detail: 'Dual-annotator consensus in Argilla' },
        { label: 'Error taxonomy', detail: '217 medication variants cataloged' },
        { label: 'Post-processor', detail: 'Lexical-phonetic correction: -78% med errors' },
        { label: 'Fine-tuning dataset', detail: 'Curated audio-text pairs on HF Hub' },
        { label: 'LLM-as-Judge in production', detail: 'Calibrated against human annotation' }
      ]
    },
    icon: 'medical',
    accent: 'cyan'
  },
  {
    id: 'wordin',
    index: '02',
    title: 'WordinAI',
    eyebrow: 'Independent product · Live SaaS',
    role: 'Product & AI Engineer',
    status: 'Live product',
    shortDescription: 'Transcription and document generation platform running on a deep agent, built and operated end to end.',
    fullDescription: 'A SaaS platform that turns long-form audio into structured documents. At its core is a multi-agent system built on LangGraph and deepagents, surrounded by hybrid retrieval, multi-provider transcription, authentication, subscriptions, observability, and export workflows.',
    narrative: {
      problem: 'Long recordings are easy to make and painful to use. People recording sermons, lectures, and meetings wanted structured documents they could search and share, not a wall of raw transcript.',
      approach: 'I built a deep agent on LangGraph with specialized subagents — a context analyst, a source verifier that must attach a source reference to every claim, and an action strategist — backed by a tool belt for retrieval, ingestion, and document generation. Around it I built the actual product: auth, subscriptions, hybrid search, and export.',
      reasoning: 'Two failure modes matter most in this product: hallucinated content and hostile input. The source-verifier subagent exists so no claim ships without a reference, and untrusted tool content is isolated from instructions to resist prompt injection. External APIs fail too, so every provider sits behind a circuit breaker with fallback — transcription, LLM calls, billing.',
      outcome: 'A live SaaS I operate end to end, from architecture to billing to being the one who gets paged. 70+ test files including agent contract evals and security suites, with Sentry and PostHog keeping quality visible instead of assumed. Users can also run transcription fully in-browser with Whisper WASM — a privacy option that costs nothing to serve.'
    },
    highlights: [
      'Multi-agent LangGraph system: context analyst, source verifier, action strategist',
      'Hybrid retrieval — vector plus full-text search with graceful fallback',
      'Untrusted-content isolation against prompt injection, plus agent contract evals',
      'Circuit breakers for OpenAI, Groq, and Stripe; Sentry and PostHog observability',
      'In-browser Whisper WASM transcription as a zero-cost privacy option'
    ],
    metrics: [
      { value: '3', label: 'specialized subagents' },
      { value: '70+', label: 'test files' },
      { value: '2', label: 'STT paths (API / local)' }
    ],
    technologies: ['Next.js', 'TypeScript', 'LangGraph', 'deepagents', 'Whisper', 'Supabase', 'Sentry'],
    skillsShown: ['Multi-agent system design', 'RAG & hybrid retrieval', 'AI security (prompt injection)', 'Full-stack product engineering', 'Reliability engineering'],
    flow: {
      nodes: [
        { label: 'Audio upload', detail: 'Cloud STT or in-browser Whisper WASM' },
        { label: 'Multi-provider transcription', detail: 'Whisper and Groq, behind circuit breakers' },
        { label: 'Deep agent (LangGraph)', detail: 'Subagents: analyst, verifier, strategist' },
        { label: 'Hybrid retrieval', detail: 'Vector + full-text over user knowledge' },
        { label: 'Document generation', detail: 'Verified, source-referenced output' },
        { label: 'Delivery & observability', detail: 'Export, Sentry, PostHog' }
      ]
    },
    liveUrl: 'https://wordinai.com',
    icon: 'transcription',
    accent: 'blue'
  },
  {
    id: 'datathon-passos-magicos',
    index: '03',
    title: 'Education Risk Prediction',
    eyebrow: 'FIAP capstone · Social impact',
    role: 'ML Engineer',
    status: 'Complete',
    shortDescription: 'End-to-end ML system for identifying educational delay risk at an NGO.',
    fullDescription: 'A production-oriented classification workflow for Passos Mágicos, covering feature engineering, XGBoost training, a FastAPI service, a Streamlit dashboard, containerized deployment, and Evidently AI drift monitoring.',
    narrative: {
      problem: 'Passos Mágicos is an NGO focused on education. They needed to spot students at risk of falling behind while there was still time to help, not after a school term was already lost.',
      approach: 'I engineered features from their student records, trained and validated an XGBoost classifier, and wrapped it in a FastAPI service with a Streamlit dashboard, so staff without a technical background could act on the predictions directly.',
      reasoning: 'A model without monitoring degrades silently. I added Evidently AI to track data and prediction drift after deployment, treating the model as a system that needs maintenance rather than a notebook result that gets presented once.',
      outcome: '92.59% accuracy and 0.97 ROC-AUC on held-out data, shipped as a working containerized tool the NGO can use for decisions, not a static report.'
    },
    highlights: [
      'Risk classification designed for actionable intervention',
      'FastAPI inference service and Streamlit decision dashboard',
      'Evidently AI monitoring for data and prediction drift',
      'Dockerized deployment on Hugging Face Spaces'
    ],
    metrics: [
      { value: '92.59%', label: 'accuracy' },
      { value: '0.97', label: 'ROC-AUC' },
      { value: '95.39%', label: 'F1 score' }
    ],
    technologies: ['Python', 'XGBoost', 'FastAPI', 'Streamlit', 'Evidently AI', 'Docker'],
    skillsShown: ['Applied ML modeling', 'Model monitoring', 'API design', 'Stakeholder-facing tooling'],
    flow: {
      nodes: [
        { label: 'Student records', detail: 'Raw NGO data' },
        { label: 'Feature engineering', detail: 'Signals tied to delay risk' },
        { label: 'XGBoost training', detail: 'Classification model' },
        { label: 'Evaluation', detail: 'Accuracy, ROC-AUC, F1' },
        { label: 'FastAPI + Streamlit', detail: 'Inference service and dashboard' },
        { label: 'Evidently AI monitoring', detail: 'Drift detection in production' }
      ],
      loop: { from: 5, to: 2, label: 'drift triggers retrain' }
    },
    repoUrl: 'https://github.com/henriquebap/datathon-educacao-passos-magicos',
    liveUrl: 'https://henriquebap-datathon-educacao-passos-magicos.hf.space',
    icon: 'health',
    accent: 'green'
  },
  {
    id: 'bike-detection',
    index: '04',
    title: 'Insurance Computer Vision',
    eyebrow: 'Porto Seguro challenge · Top-10 finalist',
    role: 'ML / Computer Vision Engineer',
    status: 'Top-10 finalist',
    shortDescription: 'Detectron2 pipeline for automating bicycle claim verification.',
    fullDescription: 'A computer vision pipeline for insurance claim verification using Detectron2 and Mask R-CNN. The project covered custom COCO dataset creation, labeling, augmentation, transfer learning, cloud training, and deployment.',
    narrative: {
      problem: 'Porto Seguro set the challenge: verifying bicycle insurance claims from photos by hand does not scale, and no off-the-shelf model was trained for this narrow object class.',
      approach: 'There was no labeled data, so I built a custom COCO dataset from scratch, then fine-tuned a Mask R-CNN model with Detectron2. Training ran on AWS EC2 with data staged through S3.',
      reasoning: 'Training a detector from zero was not realistic with the data and time available. Transfer learning got us to usable accuracy with a small, purpose-built dataset instead of a massive labeled corpus we did not have.',
      outcome: 'A working detection pipeline that put the team in the top 10 of the challenge, against teams working with larger datasets.'
    },
    highlights: [
      'Custom COCO dataset created from scratch',
      'Transfer learning with Mask R-CNN',
      'AWS EC2 training and S3 data workflow',
      'Selected among the challenge top ten teams'
    ],
    metrics: [
      { value: 'R-CNN', label: 'architecture' },
      { value: 'Top 10', label: 'placement' },
      { value: 'COCO', label: 'dataset' }
    ],
    technologies: ['Python', 'Detectron2', 'PyTorch', 'Mask R-CNN', 'AWS EC2', 'AWS S3'],
    skillsShown: ['Computer vision', 'Dataset engineering', 'Cloud training workflows', 'Competitive ML delivery'],
    flow: {
      nodes: [
        { label: 'Raw claim images', detail: 'Bicycle insurance photos' },
        { label: 'Custom COCO labeling', detail: 'Dataset built from scratch' },
        { label: 'Augmentation', detail: 'Expand limited training data' },
        { label: 'Transfer learning', detail: 'Mask R-CNN on Detectron2' },
        { label: 'Cloud training', detail: 'AWS EC2 and S3 data workflow' },
        { label: 'Evaluation & result', detail: 'Top-10 challenge placement' }
      ]
    },
    repoUrl: 'https://github.com/henriquebap/R-CNN-OD-Sprint',
    icon: 'bike',
    accent: 'purple'
  }
];

export const projectArchive = [
  {
    id: 'ml-pos-rag',
    title: 'Postgrad RAG Assistant',
    description: 'RAG over my entire ML postgrad material with page-level source citations — and measured economics: ~$0.06 to index, under $0.001 per query.',
    technologies: ['Python', 'ChromaDB', 'FastAPI', 'OpenRouter'],
    category: 'RAG'
  },
  {
    id: 'race-strategy-agent',
    title: 'Race Strategy Copilot',
    description: 'Real-time endurance-racing strategist: Claude with extended thinking and the full rulebook held in prompt cache, advising the driver mid-race on top of a deterministic pace engine.',
    technologies: ['Python', 'Anthropic API', 'Streamlit'],
    category: 'LLM Systems'
  },
  {
    id: 'local-voice-tutor',
    title: 'Local Voice Tutor',
    description: 'Language tutor running fully offline on Apple Silicon: Whisper large-v3 for ASR, Mistral 7B for feedback, Coqui TTS for speech — no API calls at all.',
    technologies: ['Whisper', 'llama.cpp', 'Coqui TTS'],
    category: 'Voice AI'
  },
  {
    id: 'wine-ml-pipeline',
    title: 'Wine Quality Regression',
    description: 'Applied regression experiment with scikit-learn, a Gradio interface, and model artifacts on Hugging Face Hub.',
    technologies: ['Python', 'Scikit-learn', 'Gradio', 'Hugging Face'],
    repoUrl: 'https://github.com/henriquebap/wine-ml-app',
    category: 'Applied ML'
  },
  {
    id: 'stock-lstm',
    title: 'Experimental Stock Forecasting',
    description: 'Collaborative PyTorch and FastAPI system whose monitoring exposed weak generalization and areas for model redesign.',
    technologies: ['PyTorch', 'FastAPI', 'Prometheus'],
    repoUrl: 'https://github.com/henriquebap/previsao_acoes',
    category: 'ML Systems'
  },
  {
    id: 'genetic-syndrome',
    title: 'Genetic Syndrome Classification',
    description: 'Classification from 320-dimensional image embeddings with KNN, t-SNE, and multi-metric evaluation.',
    technologies: ['Python', 'Scikit-learn', 'Embeddings'],
    repoUrl: 'https://github.com/henriquebap/Genetic_Syndrome_Classification_w_Embeddings_KNN',
    category: 'Machine Learning'
  },
  {
    id: 'marine-vision',
    title: 'Marine Vision Systems',
    description: 'YOLO-based detection experiments for marine animals and real-time marine waste monitoring.',
    technologies: ['Python', 'YOLOv5', 'YOLOv9'],
    repoUrl: 'https://github.com/henriquebap/Blue-Clean-YoloV9',
    category: 'Computer Vision'
  },
  {
    id: 'gymbuddy',
    title: 'GYMBUDDY',
    description: 'Conversational fitness assistant combining predictive models with GPT-powered recommendations.',
    technologies: ['Python', 'Keras', 'OpenAI API'],
    repoUrl: 'https://github.com/henriquebap/GYMBUDDY-IA',
    category: 'Applied AI'
  }
];

export const agentWork = [
  {
    id: 'agent-wordin',
    title: 'WordinAI',
    focus: 'Multi-agent system',
    description: 'A deep agent on LangGraph with specialized subagents — including a source verifier that must reference evidence for every claim — at the core of a live SaaS.',
    liveUrl: 'https://wordinai.com'
  },
  {
    id: 'agent-wilmec',
    title: 'Wilmec',
    focus: 'AI in a real shop',
    description: 'Agents inside an auto-shop system used daily by a real business: mechanics dictate service items by voice (Whisper structures them into work orders), AI-assisted diagnosis, and a knowledge base that reuses past cases. Guardrail: AI assists, never decides alone.'
  },
  {
    id: 'agent-webskill',
    title: 'WebSkill',
    focus: 'MCP server',
    description: 'An MCP server that installs whole websites as queryable skills for any LLM: crawl, chunk, embed into ChromaDB — with content-hash diffing so refreshes only re-embed what changed. 56 tests.'
  },
  {
    id: 'agent-food-service',
    title: 'Food Service Agent',
    focus: 'Voice agent',
    description: 'A LangGraph agent with intent routing that finds restaurants, remembers preferences in vector memory — and places the reservation itself over a real phone call (Twilio + TTS + Whisper).'
  }
];

export const productEngineering = [
  {
    id: 'vinibap',
    title: 'Vinícius Baptista',
    label: 'Narrative portfolio',
    description: 'A multi-page storytelling and support funnel with an admin console, Supabase RLS, and Docker/Nginx deployment. Now growing an MCP plugin that automates document creation.',
    liveUrl: 'https://vinibap.com',
    technologies: ['HTML / CSS / JS', 'Supabase', 'Docker / Nginx', 'MCP']
  },
  {
    id: 'mission-philippines',
    title: 'Mission Philippines',
    label: 'Campaign experience',
    description: 'A bilingual fundraising product with live campaign metrics, lead capture, authenticated admin workflows, and data-driven content.',
    technologies: ['Next.js 16.2', 'Supabase', 'i18n / Admin'],
    liveUrl: 'https://missaofilipinas.com/en'
  }
];

export const capabilities = [
  {
    title: 'Evaluate',
    description: 'Make model quality observable and testable.',
    items: ['LLM-as-Judge', 'LangSmith', 'Evaluation datasets', 'WER / CER', 'Human-judge calibration', 'Production QA']
  },
  {
    title: 'Build',
    description: 'Turn AI workflows into maintainable products.',
    items: ['Python', 'FastAPI', 'PyTorch', 'LangGraph / deepagents', 'MCP servers', 'RAG / hybrid search', 'Hugging Face']
  },
  {
    title: 'Operate',
    description: 'Design for failures, cost, latency, and change.',
    items: ['Docker', 'AWS S3', 'PostgreSQL', 'CI/CD', 'Prompt caching / model routing', 'Prometheus / Evidently']
  },
  {
    title: 'Ship',
    description: 'Own the path from system design to user experience.',
    items: ['TypeScript', 'Next.js', 'Supabase', 'REST APIs', 'Product engineering']
  }
];

export const softSkills = [
  {
    icon: 'ownership',
    title: 'Ownership',
    text: 'I carry systems past the point where they work on my machine, from the first design decision to operating them live.'
  },
  {
    icon: 'systems',
    title: 'Systems thinking',
    text: 'A model is one layer of many. I design the data, APIs, fallbacks, and UX together instead of bolting them on after the model works.'
  },
  {
    icon: 'communication',
    title: 'Clear communication',
    text: 'I write decisions down as system notes and evaluation criteria, so quality claims can be checked instead of taken on faith.'
  },
  {
    icon: 'adaptability',
    title: 'Cross-domain adaptability',
    text: 'The same engineering discipline, applied in healthcare, insurance, education, and my own products.'
  }
];
