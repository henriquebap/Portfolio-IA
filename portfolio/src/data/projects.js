export const profile = {
  name: 'Henrique Baptista',
  title: 'ML / AI Engineer',
  subtitle: 'Production AI Systems · Evaluation · Voice AI',
  tagline: 'I build AI systems that survive real-world use—from evaluation and data pipelines to APIs, deployment, and product.',
  about: `I work across the production AI lifecycle: defining quality, curating representative data, evaluating model behavior, building backend services, and shipping user-facing systems. My strongest experience sits at the intersection of LLM quality, Voice AI, and product engineering.`,
  aboutExtended: `At VOA Health, I build evaluation and data workflows for medical AI. Independently, I designed and shipped WordinAI, a multi-provider transcription SaaS. Across both, the pattern is the same: make quality measurable, design for failure, and own the path from prototype to production.`,
  contact: {
    linkedin: 'https://www.linkedin.com/in/henrique-baptista777/',
    github: 'https://github.com/henriquebap',
    email: 'henrique.obap@gmail.com'
  },
  education: 'Postgraduate Program in Machine Learning Engineering, FIAP — completed Mar 2026',
  educationBachelor: 'Bachelor in Systems Analysis & Development, FIAP — completed Dec 2024'
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
    shortDescription: 'Evaluation, data curation, and failure-analysis pipelines for Brazilian clinical audio.',
    fullDescription: 'Built production-focused quality systems for medical AI: automated LLM document evaluation, multi-provider ASR benchmarking, and data curation workflows with dual-annotator consensus. The work connects Hugging Face, Argilla, and AWS S3 through a modular, containerized pipeline.',
    highlights: [
      'LLM-as-Judge combined with deterministic QA checks',
      'WER/CER analysis for medical terminology and noisy audio',
      'Dual-annotator consensus with reviewer adjudication',
      'Modular Hugging Face ↔ Argilla ↔ AWS S3 workflow'
    ],
    metrics: [
      { value: '9', label: 'ASR providers' },
      { value: '217', label: 'error variants' },
      { value: '8', label: 'pipeline modules' }
    ],
    technologies: ['Python', 'PyTorch', 'Whisper', 'Hugging Face', 'Argilla', 'AWS S3', 'Docker'],
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
    shortDescription: 'Agentic transcription and document generation platform built and operated end to end.',
    fullDescription: 'Designed and shipped a SaaS platform that transforms long-form audio into structured materials. The system combines a LangGraph state machine, model and tool routing, semantic transcript search, multi-provider transcription, authentication, subscriptions, observability, and export workflows.',
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
    fullDescription: 'Built a production-oriented classification workflow for Passos Mágicos, from feature engineering and XGBoost training to a FastAPI service, Streamlit dashboard, containerized deployment, and Evidently AI drift monitoring.',
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
    fullDescription: 'Created a computer vision pipeline for insurance claim verification using Detectron2 and Mask R-CNN. The project covered custom COCO dataset creation, labeling, augmentation, transfer learning, cloud training, and deployment.',
    highlights: [
      'Custom COCO dataset created from scratch',
      'Transfer learning with Mask R-CNN',
      'AWS EC2 training and S3 data workflow',
      'Selected among the challenge’s top ten teams'
    ],
    metrics: [
      { value: 'R-CNN', label: 'architecture' },
      { value: 'Top 10', label: 'placement' },
      { value: 'COCO', label: 'dataset' }
    ],
    technologies: ['Python', 'Detectron2', 'PyTorch', 'Mask R-CNN', 'AWS EC2', 'AWS S3'],
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
    description: 'Collaborative PyTorch/FastAPI system whose monitoring exposed weak generalization and areas for model redesign.',
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

export const productEngineering = [
  {
    id: 'vinibap',
    title: 'Vinícius Baptista',
    label: 'Narrative portfolio',
    description: 'A multi-page storytelling and support funnel with an admin console, Supabase RLS, and Docker/Nginx deployment.',
    liveUrl: 'https://vinibap.com',
    technologies: ['HTML / CSS / JS', 'Supabase', 'Docker / Nginx']
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
