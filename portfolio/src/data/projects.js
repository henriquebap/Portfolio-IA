export const profile = {
  name: 'Henrique Baptista',
  title: 'ML / AI Engineer',
  subtitle: 'Production AI Systems · Evaluation · Voice AI',
  tagline: 'I build AI systems that hold up in production. My work covers evaluation, data pipelines, APIs, deployment, and the product around them.',
  about: `I work across the full lifecycle of production AI: defining what quality means, curating the right data, evaluating model behavior, building backend services, and shipping things people actually use. Most of my experience sits where LLM quality, voice AI, and product engineering meet.`,
  aboutExtended: `In my most recent role I built evaluation and data workflows for medical AI. On my own, I designed and shipped WordinAI, a transcription SaaS that runs on multiple providers. The pattern is the same in both: make quality measurable, plan for failure, and own the path from prototype to production.`,
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
  { value: '217', label: 'medical ASR failure variants' },
  { value: '5', label: 'LangGraph workflow nodes' },
  { value: '2', label: 'end-to-end products shipped' }
];

export const caseStudies = [
  {
    id: 'medical-asr',
    index: '01',
    title: 'Medical AI Evaluation & ASR',
    eyebrow: 'Professional work · HealthTech',
    role: 'ML / AI Engineer',
    status: 'Private system',
    shortDescription: 'From ASR and VAD tuning to fine-tuning data curation and LLM/agent evaluation for clinical audio.',
    fullDescription: 'A progression through the whole voice AI stack for medical audio: ASR model work and usability improvements, VAD integration for better context, provider benchmarking and product validation, dataset curation for fine-tuning, and evaluation of LLM and agent generation.',
    narrative: {
      problem: 'Clinical audio is hard. Heavy accents, people talking over each other, dense medical vocabulary. Transcription errors are easy to miss, and in a healthcare product the ones you miss are the ones that hurt.',
      approach: 'I started deep in the ASR models themselves, improving how usable their output was in practice. Then I brought VAD into the pipeline so the system captured more context from each recording. With that base, I benchmarked 9 providers and validated ASR quality for the product: WER and CER analysis, dual-annotator labeling in Argilla, and an LLM-as-Judge layer on top.',
      reasoning: 'No single check is trustworthy on medical terminology. One annotator makes mistakes, and one automated score misses whole categories of errors. So I combined human consensus with an LLM judge and deterministic checks. Each one catches failures the others let through.',
      outcome: 'The benchmark cataloged 217 failure variants across 9 providers. From there I owned the dataset curation and preparation flow for a fine-tuning project, then moved to evaluating LLM and agent generation with LLM-as-Judge and deeper evaluation techniques. That work kept surfacing concrete product and usability improvements.'
    },
    highlights: [
      'ASR model work and VAD integration for more usable context',
      'Benchmark and product validation across 9 ASR providers',
      'Full dataset curation and preparation flow for fine-tuning',
      'LLM and agent generation evaluation with LLM-as-Judge',
      'Dual-annotator consensus with reviewer adjudication'
    ],
    metrics: [
      { value: '9', label: 'ASR providers' },
      { value: '217', label: 'error variants' },
      { value: '8', label: 'pipeline modules' }
    ],
    technologies: ['Python', 'PyTorch', 'Whisper', 'Hugging Face', 'Argilla', 'AWS S3', 'Docker'],
    skillsShown: ['Evaluation design', 'Fine-tuning data curation', 'Statistical & error analysis', 'Agent evaluation', 'Data pipeline engineering'],
    flow: {
      nodes: [
        { label: 'ASR model deep-dive', detail: 'Model usability improvements' },
        { label: 'VAD integration', detail: 'Voice activity detection for more context' },
        { label: 'Benchmark & validation', detail: '9 providers, WER/CER, product fit' },
        { label: 'Fine-tuning dataset', detail: 'Full curation and preparation flow' },
        { label: 'LLM & agent evaluation', detail: 'LLM-as-Judge and deeper techniques' },
        { label: 'Product improvements', detail: 'Usability findings fed back in' }
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
    fullDescription: 'A SaaS platform that turns long-form audio into structured documents. At its core is a deep agent built on LangGraph, surrounded by model and tool routing, semantic transcript search, multi-provider transcription, authentication, subscriptions, observability, and export workflows.',
    narrative: {
      problem: 'Long recordings are easy to make and painful to use. People recording sermons, lectures, and meetings wanted structured documents they could search and share, not a wall of raw transcript.',
      approach: 'I built a deep agent on LangGraph that plans its work, routes between tools and model tiers, and generates structured documents from transcripts. Around it I built the actual product: auth, subscriptions, semantic search, and export.',
      reasoning: 'External APIs fail, so every provider integration sits behind a circuit breaker with a fallback. Transcription, LLM calls, billing, all of them. The product stays up when a dependency degrades. I also route lighter tasks to Groq because it is cheaper, which keeps unit economics sane as usage grows.',
      outcome: 'A live SaaS product I operate end to end, from architecture to billing to being the one who gets paged. Sentry and PostHog keep quality and usage visible instead of assumed.'
    },
    highlights: [
      'LangGraph workflow with typed state, planning, tools, and model tiers',
      'Semantic transcript search with chunked OpenAI embeddings',
      'Circuit breakers for OpenAI, Groq, and Stripe integrations',
      'Vitest coverage plus Sentry and PostHog instrumentation'
    ],
    metrics: [
      { value: '5', label: 'graph nodes' },
      { value: '12', label: 'test files' },
      { value: '3', label: 'circuit breakers' }
    ],
    technologies: ['Next.js', 'TypeScript', 'LangGraph', 'Whisper', 'Supabase', 'Sentry'],
    skillsShown: ['System architecture', 'Agentic workflow design', 'Full-stack product engineering', 'Reliability engineering'],
    flow: {
      nodes: [
        { label: 'Audio upload', detail: 'User-facing product entry point' },
        { label: 'Multi-provider transcription', detail: 'Whisper and Groq, behind circuit breakers' },
        { label: 'Deep agent (LangGraph)', detail: 'Planning, tool routing, model tiers' },
        { label: 'Semantic chunking', detail: 'OpenAI embeddings for search' },
        { label: 'Document generation', detail: 'Notes, devotionals, structured output' },
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
    focus: 'Deep agent',
    description: 'A deep agent on LangGraph at the core of a live SaaS: it plans, routes between tools and model tiers, and turns long audio into structured documents.',
    liveUrl: 'https://wordinai.com'
  },
  {
    id: 'agent-wilmec',
    title: 'Wilmec',
    focus: 'Chatbot & inventory agent',
    description: 'A chatbot and agent that automate inventory workflows, so stock questions and routine flows get handled without a human in the middle.'
  },
  {
    id: 'agent-vinibap',
    title: 'Vinícius Baptista portfolio',
    focus: 'MCP document automation',
    description: 'An MCP plugin that automates document creation for the site, generating and updating content through the agent instead of by hand.',
    liveUrl: 'https://vinibap.com'
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
    items: ['LLM-as-Judge', 'Evaluation datasets', 'WER / CER', 'Failure analysis', 'Production QA']
  },
  {
    title: 'Build',
    description: 'Turn AI workflows into maintainable products.',
    items: ['Python', 'FastAPI', 'PyTorch', 'LangChain / LangGraph', 'Hugging Face']
  },
  {
    title: 'Operate',
    description: 'Design for failures, cost, latency, and change.',
    items: ['Docker', 'AWS S3', 'PostgreSQL', 'CI/CD', 'Prometheus / Evidently']
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
