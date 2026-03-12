// Featured Projects - Destacados na homepage
export const featuredProjects = [
  {
    id: 'wordin',
    title: 'WordinAI - AI Transcription Platform',
    shortDescription: 'SaaS platform transforming audio into structured documents with 216x real-time processing',
    fullDescription: 'SaaS transcription platform with multi-provider STT and LLM orchestration via LangChain, transforming audio from sermons, lectures, and classes into structured educational materials. Features provider fallback chain with circuit breaker and retry patterns, achieving 216x real-time processing while reducing cost by ~9x through intelligent provider selection. Supports multiple document types with automated generation from audio input.',
    role: 'AI Engineer (Creator)',
    status: 'Live Product',
    liveUrl: 'https://wordinai.com',
    technologies: ['Next.js', 'TypeScript', 'LangChain', 'Whisper', 'Supabase', 'Tailwind CSS'],
    highlights: [
      '216x real-time processing speed',
      '~9x cost reduction through provider architecture',
      'Circuit breaker and retry patterns',
      'Multi-provider fallback chain',
      'Multiple document types with LLM generation',
      'Live at wordinai.com'
    ],
    metrics: {
      speed: '216x real-time',
      cost: '~9x reduction',
      reliability: 'Circuit breaker',
      languages: '90+'
    },
    category: 'genai',
    featured: true,
    icon: 'transcription'
  },
  {
    id: 'medical-asr',
    title: 'Medical ASR & STT Engineering',
    shortDescription: 'ASR benchmarking and data curation system for medical domain',
    fullDescription: 'Speech-to-Text engineering system for medical domain featuring comprehensive ASR provider benchmarking with WER/CER analysis, data curation pipelines with dual-annotator consensus, and VAD optimization for noisy clinical audio. Integrated HuggingFace Hub, Argilla, and Supabase into automated annotation workflows with containerized deployment and monitoring dashboard.',
    role: 'AI Engineer',
    status: 'Professional Project',
    technologies: ['PyTorch', 'Whisper', 'Hugging Face', 'Argilla', 'AWS S3', 'FastAPI', 'Docker', 'Supabase'],
    highlights: [
      'Commercial ASR providers benchmarked',
      'WER/CER analysis for domain-specific terminology',
      'Dual-annotator consensus pipeline',
      'VAD optimization for clinical audio',
      'Automated annotation workflow',
      'HF Hub + Argilla integration'
    ],
    metrics: {
      methodology: 'WER/CER benchmarking',
      curation: 'Dual-annotator consensus',
      deployment: 'Containerized'
    },
    category: 'dl',
    featured: true,
    icon: 'medical'
  },
  {
    id: 'stock-lstm',
    title: 'Stock Price Prediction with LSTM',
    shortDescription: 'Complete ML system with 11 models, FastAPI backend, and advanced monitoring',
    fullDescription: 'End-to-end ML engineering system for stock prediction with production FastAPI backend, Streamlit dashboard, and 11 LSTM models via HuggingFace Hub. Architecture: Yahoo Finance → Feature Engineering (16 features) → PyTorch LSTM → FastAPI → PostgreSQL → HF Hub. Features two architectures: LSTMPredictor (2 layers) and ImprovedLSTM (3 bidirectional layers + attention). Includes Prometheus monitoring, ML Health scoring (0-100), drift detection, and CI/CD via GitHub Actions. Deployed on Railway Cloud with separate backend/frontend containers.',
    role: 'Machine Learning Engineer',
    status: 'Complete & Live',
    liveUrl: 'https://previsaoacoes-back-production.up.railway.app/docs',
    repoUrl: 'https://github.com/henriquebap/previsao_acoes',
    technologies: ['PyTorch', 'FastAPI 0.104+', 'Streamlit', 'PostgreSQL', 'HuggingFace Hub', 'Docker', 'Railway', 'Prometheus', 'GitHub Actions'],
    highlights: [
      'MAPE: 8.28% (AAPL best model)',
      '11 models (BASE + 10 stocks)',
      'Inference: ~50ms (cached)',
      'ML Health scoring (0-100)',
      'Feature drift detection',
      '16 engineered features',
      '60-day sequences'
    ],
    metrics: {
      accuracy: 'MAPE 8.28%',
      models: '11 total',
      inference: '50ms cached',
      features: '16 engineered'
    },
    category: 'dl',
    featured: true,
    icon: 'stock'
  },
  {
    id: 'financial-app',
    title: 'Financial APP - Intelligent Personal Finance',
    shortDescription: 'Full-stack finance app with AI-ready architecture on Railway',
    fullDescription: 'Full-stack personal finance application with modern architecture designed for AI integration. Features automated categorization, intelligent insights, and data-driven financial planning. Architecture: Next.js (Frontend) → Express REST API → PostgreSQL (Railway) with planned RAG + LLM auto-categorization. Implements JWT + bcrypt authentication, Row Level Security (RLS) for multi-tenant isolation, and microservices architecture with separate backend/frontend deployments on Railway Cloud. Monorepo structure with independent services and centralized environment configuration.',
    role: 'Full-Stack ML Engineer',
    status: 'In Development',
    technologies: ['Next.js', 'Express.js', 'Node.js', 'PostgreSQL', 'JWT', 'bcrypt', 'Chart.js', 'Railway'],
    highlights: [
      'Microservices architecture',
      'JWT + bcrypt authentication',
      'Row Level Security (RLS)',
      'Railway Cloud deployment',
      'Planned: RAG + LLM categorization',
      'Monorepo structure'
    ],
    category: 'ml',
    featured: true,
    icon: 'wallet'
  },
  {
    id: 'wine-ml-pipeline',
    title: 'Wine Quality ML Pipeline',
    shortDescription: 'End-to-end MLOps demonstration with FastAPI, MLflow, and Docker',
    fullDescription: 'Complete end-to-end MLOps demonstration featuring full ML pipeline from data ingestion to real-time inference. Architecture: Data Ingestion → Feature Engineering → Scikit-learn Training → MLflow Tracking → FastAPI REST API → Streamlit Dashboard → Docker Deployment. Features automated quality assessment, synthetic data generation, experiment tracking, model versioning, and real-time monitoring dashboard. Demonstrates MLOps best practices including reproducibility, containerization, and production-ready API design.',
    role: 'ML Engineer',
    status: 'Complete',
    repoUrl: 'https://github.com/henriquebap/wine-ml-app',
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'MLflow', 'Streamlit', 'Docker', 'docker-compose', 'Pandas', 'NumPy'],
    highlights: [
      'Complete MLOps pipeline',
      'MLflow experiment tracking',
      'FastAPI REST endpoints',
      'Streamlit monitoring dashboard',
      'Docker containerization',
      'Synthetic data generation'
    ],
    category: 'ml',
    featured: true,
    icon: 'pipeline'
  },
  {
    id: 'bike-detection',
    title: 'Bike Detection with Detectron2',
    shortDescription: 'Top-10 finalist computer vision system deployed on AWS',
    fullDescription: 'Computer vision system for automated bike detection using Detectron2, deployed on AWS cloud infrastructure. Achieved Top-10 Finalist position in Porto Seguro FIAP Challenge. Architecture: COCO Dataset → Detectron2 (Mask R-CNN) → PyTorch Training → AWS Deployment → Real-time Detection API. Features transfer learning with fine-tuned pre-trained models, cloud-based training on AWS EC2, S3 data storage, and production monitoring. Application: Insurance process automation with real-time bike identification for streamlined claim processing.',
    role: 'Computer Vision Engineer',
    status: 'Top-10 Finalist',
    repoUrl: 'https://github.com/henriquebap/R-CNN-OD-Sprint',
    technologies: ['Python', 'Detectron2', 'PyTorch', 'AWS EC2', 'AWS S3', 'COCO Dataset', 'Mask R-CNN'],
    highlights: [
      'Top-10 Porto Seguro Challenge',
      'AWS cloud deployment',
      'Mask R-CNN architecture',
      'Transfer learning',
      'Insurance automation',
      'Real-time detection API'
    ],
    category: 'dl',
    featured: true,
    icon: 'bike'
  }
];

// All Projects organized by category
export const allProjects = {
  ml: [
    {
      id: 'genetic-syndrome',
      title: 'Genetic Syndrome Classification',
      description: 'ML pipeline classifying genetic syndromes using 320-dimensional image embeddings with KNN, t-SNE visualization, and multi-metric evaluation.',
      technologies: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib', 't-SNE'],
      repoUrl: 'https://github.com/henriquebap/Genetic_Syndrome_Classification_w_Embeddings_KNN',
      icon: 'dna'
    },
    {
      id: 'avocado-prices',
      title: 'Avocado Price Forecasting',
      description: 'EDA and predictive modeling for avocado price forecasting to optimize inventory and sales strategies.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Time Series'],
      repoUrl: 'https://github.com/henriquebap/Avocado-Prices-EDA-Model-Traning',
      icon: 'chart'
    },
    {
      id: 'airline-eda',
      title: 'Airline Fare Analysis',
      description: 'Comprehensive EDA of airline flight datasets for fare price prediction and market trend analysis.',
      technologies: ['Python', 'Pandas', 'Seaborn', 'Data Visualization'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/tree/main/EDA%20-%20AIrline%20Fare%20%2B%20Model%20Training',
      icon: 'plane'
    },
    {
      id: 'customer-churn',
      title: 'Customer Churn Prediction',
      description: 'Multi-algorithm churn prediction (KNN, SVC, RandomForest, Logistic Regression) for customer retention optimization.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Classification'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/chekpoint2/ExercicioClassificacaoAula.ipynb',
      icon: 'users'
    },
    {
      id: 'gdp-regression',
      title: 'GDP vs ACBR Linear Regression',
      description: 'Economic indicator analysis and trend forecasting using Linear Regression for data-driven decision making.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Regression'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/chekpoint2/PIBxACBR_LinearRegression.ipynb',
      icon: 'trending'
    },
    {
      id: 'financial-app',
      title: 'Financial APP - Personal Finance',
      description: 'Full-stack finance app with Next.js + Express, JWT auth, PostgreSQL, and planned AI features (RAG + auto-categorization).',
      technologies: ['Next.js', 'Express', 'PostgreSQL', 'JWT', 'Railway'],
      status: 'Private',
      icon: 'wallet'
    },
    {
      id: 'wine-ml-card',
      title: 'Wine Quality ML Pipeline',
      description: 'Complete MLOps pipeline with Scikit-learn, FastAPI REST API, MLflow tracking, and Streamlit monitoring dashboard.',
      technologies: ['Python', 'FastAPI', 'MLflow', 'Docker', 'Streamlit'],
      repoUrl: 'https://github.com/henriquebap/wine-ml-app',
      icon: 'pipeline'
    },
    {
      id: 'datathon-passos-magicos',
      title: 'Datathon Passos Magicos',
      description: 'XGBoost model predicting educational delay risk for an NGO. 92.59% accuracy, 97% AUC-ROC. FastAPI + Streamlit + Evidently AI drift monitoring, deployed on HuggingFace Spaces.',
      technologies: ['XGBoost', 'FastAPI', 'Streamlit', 'Docker', 'Evidently AI'],
      repoUrl: 'https://github.com/henriquebap/datathon-educacao-passos-magicos',
      liveUrl: 'https://henriquebap-datathon-educacao-passos-magicos.hf.space',
      highlight: 'PosTech Capstone',
      icon: 'health'
    }
  ],
  dl: [
    {
      id: 'medical-asr-card',
      title: 'Medical ASR Benchmark',
      description: 'ASR benchmarking and data curation for medical domain. WER/CER analysis, dual-annotator consensus, and VAD optimization for clinical audio.',
      technologies: ['PyTorch', 'Whisper', 'Hugging Face', 'Argilla', 'AWS S3'],
      status: 'Professional',
      icon: 'medical'
    },
    {
      id: 'stock-lstm-card',
      title: 'Stock Price LSTM Prediction',
      description: 'LSTM neural network with FastAPI backend, 11 models on HuggingFace Hub, MAPE 8.28%, deployed on Railway with monitoring.',
      technologies: ['PyTorch', 'FastAPI', 'HF Hub', 'Railway', 'Prometheus'],
      status: 'Academic',
      icon: 'stock'
    },
    {
      id: 'diabetes-prediction',
      title: 'Diabetes Prediction - Pima Indians',
      description: 'Deep neural network using Keras/TensorFlow to predict diabetes occurrence in Pima Indian population for early diagnosis.',
      technologies: ['Python', 'Keras', 'TensorFlow', 'Neural Networks'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/tree/main/Keras',
      icon: 'health'
    },
    {
      id: 'bike-detection',
      title: 'Bike Detection - Porto Seguro',
      description: 'Detectron2 (Mask R-CNN) object detection on AWS. Top-10 Finalist in Porto Seguro Challenge for insurance automation.',
      technologies: ['Detectron2', 'PyTorch', 'AWS EC2', 'Mask R-CNN'],
      repoUrl: 'https://github.com/henriquebap/R-CNN-OD-Sprint',
      highlight: 'Top-10 Finalist',
      icon: 'bike'
    },
    {
      id: 'marine-yolov5',
      title: 'Marine Animal Detection',
      description: 'YOLOv5 object detection model identifying sharks, fish, and rays for marine species monitoring and conservation efforts.',
      technologies: ['Python', 'YOLOv5', 'Computer Vision'],
      repoUrl: 'https://github.com/henriquebap/YoloV5-Shark-Detection',
      icon: 'fish'
    },
    {
      id: 'gymbuddy',
      title: 'GYMBUDDY - AI Fitness Assistant',
      description: 'AI fitness assistant integrating Keras neural networks and GPT-3 API for personalized conversational fitness guidance.',
      technologies: ['Python', 'Keras', 'OpenAI GPT-3', 'Chatbot'],
      repoUrl: 'https://github.com/henriquebap/GYMBUDDY-IA',
      icon: 'fitness'
    },
    {
      id: 'cartpole-dqn',
      title: 'DQN - CartPole',
      description: 'Deep Q-Learning reinforcement learning model solving the CartPole balancing problem with continuous control strategies.',
      technologies: ['Python', 'TensorFlow', 'OpenAI Gym', 'DQN'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/Deep%20Q-Learning/CartPole-DQN.ipynb',
      icon: 'robot'
    },
    {
      id: 'mountain-car',
      title: 'Q-Learning - Mountain Car',
      description: 'Q-Learning reinforcement learning model for the Mountain Car problem addressing complex optimization challenges.',
      technologies: ['Python', 'OpenAI Gym', 'Q-Learning', 'RL'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/Mountain-Car-Gym-Q-Learning.ipynb',
      icon: 'car'
    },
    {
      id: 'marine-garbage',
      title: 'Marine Garbage Detection',
      description: 'YOLOv9 model optimized for real-time marine garbage detection on edge devices for environmental protection efforts.',
      technologies: ['Python', 'YOLOv9', 'Edge Computing'],
      repoUrl: 'https://github.com/henriquebap/Blue-Clean-YoloV9',
      icon: 'recycle'
    }
  ],
  genai: [
    {
      id: 'wordin-card',
      title: 'WordinAI - AI Transcription',
      description: 'SaaS platform with multi-provider STT and LangChain orchestration. 216x real-time processing, ~9x cost reduction through provider fallback. Live at wordinai.com.',
      technologies: ['Next.js', 'LangChain', 'Whisper', 'Supabase'],
      liveUrl: 'https://wordinai.com',
      highlight: 'Live Product',
      icon: 'transcription'
    },
    {
      id: 'perfect-delta',
      title: 'Perfect Delta - Racing AI',
      description: 'Intelligent regularity racing platform with Claude 3.5, real-time data processing, scenario simulations. 92% decision time reduction.',
      technologies: ['Anthropic Claude 3.5', 'FastAPI', 'PostgreSQL', 'Real-time'],
      status: 'Commercial',
      highlight: '92% faster decisions',
      icon: 'racing'
    },
    {
      id: 'arnold',
      title: 'Arnold - AI Fitness Coach',
      description: 'AI personal trainer based on fine-tuned local LLM (Ollama + Mistral) for personalized workout planning and fitness coaching.',
      technologies: ['Python', 'Ollama', 'Mistral AI', 'Fine-tuning'],
      repoUrl: 'https://github.com/henriquebap/Arnold',
      icon: 'coach'
    }
  ]
};

// Skills organized by category
export const skills = {
  llmAgents: [
    { name: 'LangGraph', icon: 'langchain', level: 'Advanced' },
    { name: 'LangChain', icon: 'langchain', level: 'Advanced' },
    { name: 'OpenAI API', icon: 'openai', level: 'Expert' },
    { name: 'Prompt Engineering', icon: 'brain', level: 'Expert' },
    { name: 'RAG', icon: 'brain', level: 'Advanced' },
    { name: 'Multi-Agent Orchestration', icon: 'brain', level: 'Advanced' }
  ],
  mlData: [
    { name: 'PyTorch', icon: 'pytorch', level: 'Expert' },
    { name: 'Hugging Face', icon: 'huggingface', level: 'Advanced' },
    { name: 'Whisper', icon: 'brain', level: 'Advanced' },
    { name: 'Argilla', icon: 'brain', level: 'Advanced' },
    { name: 'Data Curation', icon: 'database', level: 'Advanced' },
    { name: 'WER/CER Benchmarking', icon: 'chart', level: 'Advanced' }
  ],
  infrastructure: [
    { name: 'Python', icon: 'python', level: 'Expert' },
    { name: 'TypeScript', icon: 'typescript', level: 'Advanced' },
    { name: 'Next.js', icon: 'brain', level: 'Advanced' },
    { name: 'FastAPI', icon: 'fastapi', level: 'Expert' },
    { name: 'Docker', icon: 'docker', level: 'Advanced' },
    { name: 'Supabase', icon: 'supabase', level: 'Advanced' },
    { name: 'PostgreSQL', icon: 'postgresql', level: 'Advanced' },
    { name: 'AWS', icon: 'aws', level: 'Intermediate' }
  ],
  appliedDomains: [
    { name: 'Voice AI (STT/ASR)', icon: 'brain', level: 'Expert' },
    { name: 'AI Agents', icon: 'brain', level: 'Advanced' },
    { name: 'Document Generation', icon: 'brain', level: 'Advanced' },
    { name: 'Computer Vision', icon: 'brain', level: 'Advanced' }
  ]
};

// Profile information
export const profile = {
  name: 'Henrique Baptista',
  title: 'AI Engineer',
  subtitle: 'LLM Solutions & Evaluation',
  tagline: 'Building and evaluating AI systems that work in production',
  about: `AI Engineer who builds and evaluates production AI systems across domains. Experience integrating LLM agents, voice AI, and computer vision into real products, from healthcare pipelines to business tools and SaaS platforms. Focused on not just shipping AI, but measuring whether it works: benchmarking, evaluation, data curation, and quality assurance in production.`,
  aboutExtended: `Currently at VOA Health building LLM quality pipelines, data curation workflows, and ASR benchmarking for medical AI products. Creator of WordinAI, a SaaS transcription platform with multi-provider fallback architecture. Background includes computer vision (Detectron2, YOLO), predictive modeling, and full-stack development with Next.js, FastAPI, and Supabase.`,
  achievements: [
    { label: '1st Place', description: 'Global Solution FIAP', icon: 'trophy' },
    { label: 'Top 10', description: 'Porto Seguro Challenge', icon: 'medal' },
    { label: '20+', description: 'AI/ML Projects', icon: 'projects' },
    { label: 'Live SaaS', description: 'WordinAI Platform', icon: 'rocket' }
  ],
  contact: {
    linkedin: 'https://www.linkedin.com/in/henrique-baptista777/',
    github: 'https://github.com/henriquebap',
    email: 'henrique.obap@gmail.com'
  },
  education: 'Postgraduate in Machine Learning Engineering, FIAP',
  educationBachelor: 'Bachelor in Systems Analysis & Development, FIAP'
};

// Category labels
export const categoryLabels = {
  ml: 'Machine Learning',
  dl: 'Deep Learning',
  genai: 'Gen AI & LLMs'
};



