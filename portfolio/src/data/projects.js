// Featured Projects - Destacados na homepage
export const featuredProjects = [
  {
    id: 'wordin',
    title: 'Wordin - AI Transcription Platform',
    shortDescription: 'SaaS platform transforming audio into structured educational materials',
    fullDescription: 'A SaaS platform that uses generative ASR & AI to transform audio from sermons, lectures, and classes into structured educational materials. The system automates transcription, analysis, and content generation, reducing manual work by 150x and costs by 99%.',
    role: 'AI Engineer (Creator)',
    status: 'Live Product',
    liveUrl: 'https://wordinai.com',
    technologies: ['Groq', 'OpenAI', 'Supabase', 'Next.js'],
    highlights: ['150x reduction in manual work', '99% cost reduction', 'Commercial SaaS'],
    category: 'genai',
    featured: true,
    icon: 'transcription'
  },
  {
    id: 'stock-lstm',
    title: 'Stock Price Prediction with LSTM',
    shortDescription: 'Deep Learning system for stock price forecasting with production deployment',
    fullDescription: 'An end-to-end machine learning engineering project to predict stock prices using Long Short-Term Memory (LSTM) networks. Features a complete pipeline from data ingestion to production deployment, including a REST API, Docker containerization, and automated CI/CD workflows. Demonstrates proficiency in time series forecasting, neural networks, and MLOps practices.',
    role: 'Machine Learning Engineer',
    status: 'Complete Project',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'CI/CD'],
    highlights: ['LSTM Neural Network', 'Production-Ready API', 'Automated CI/CD Pipeline'],
    category: 'dl',
    featured: true,
    icon: 'stock'
  },
  {
    id: 'bike-detection',
    title: 'Bike Detection - Computer Vision System',
    shortDescription: 'Award-winning object detection system deployed on AWS',
    fullDescription: 'Production-grade computer vision system using Detectron2 for automated bike detection in insurance processes. Deployed on AWS with complete MLOps pipeline including data versioning, model monitoring, and automated retraining. Achieved Top-10 Finalist position in Porto Seguro competition, demonstrating strong model performance and deployment capabilities.',
    role: 'Computer Vision Engineer',
    status: 'Top-10 Finalist',
    technologies: ['Python', 'Detectron2', 'PyTorch', 'AWS', 'Docker'],
    highlights: ['Top-10 Competition Finalist', 'AWS Production Deployment', 'Insurance Automation'],
    category: 'dl',
    featured: true,
    icon: 'bike'
  },
  {
    id: 'medical-asr',
    title: 'Medical ASR & STT Engineering',
    shortDescription: 'End-to-end ASR system from model fine-tuning to production deployment',
    fullDescription: 'Comprehensive Speech-to-Text engineering project encompassing model development, VAD optimization, robust dataset curation workflows, and production deployment. Built evaluation pipelines benchmarking 9 commercial ASR providers, developed consensus algorithms for multi-annotator quality control, and established complete fine-tuning workflows. Includes model architecture adjustments, VAD parameter optimization, and scalable infrastructure for continuous improvement.',
    role: 'AI/ML Engineer (STT Specialist)',
    status: 'Professional Project',
    technologies: ['Python', 'PyTorch', 'Whisper', 'Hugging Face', 'FastAPI', 'Docker'],
    highlights: ['Model Fine-tuning', 'VAD Optimization', 'Production Pipeline', 'Dataset Curation'],
    category: 'dl',
    featured: true,
    icon: 'medical'
  }
];

// All Projects organized by category
export const allProjects = {
  ml: [
    {
      id: 'genetic-syndrome',
      title: 'Genetic Syndrome Classification',
      description: 'ML pipeline to classify genetic syndromes based on 320-dimensional image embeddings using KNN and t-SNE visualization.',
      technologies: ['Python', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      repoUrl: 'https://github.com/henriquebap/Genetic_Syndrome_Classification_w_Embeddings_KNN',
      icon: 'dna'
    },
    {
      id: 'avocado-prices',
      title: 'Avocado Price Forecasting',
      description: 'Exploratory data analysis and forecasting models for avocado prices to optimize stock and sales strategies.',
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
      repoUrl: 'https://github.com/henriquebap/Avocado-Prices-EDA-Model-Traning',
      icon: 'chart'
    },
    {
      id: 'airline-eda',
      title: 'Airline Fare Analysis',
      description: 'Extensive exploratory analysis of airline flight data to predict fare prices and identify market trends.',
      technologies: ['Python', 'Pandas', 'Seaborn'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/tree/main/EDA%20-%20AIrline%20Fare%20%2B%20Model%20Training',
      icon: 'plane'
    },
    {
      id: 'customer-churn',
      title: 'Customer Churn Prediction',
      description: 'Implemented KNN, SVC, RandomForest, and Logistic Regression to predict customer churn and retention risks.',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/chekpoint2/ExercicioClassificacaoAula.ipynb',
      icon: 'users'
    },
    {
      id: 'gdp-regression',
      title: 'GDP vs ACBR Linear Regression',
      description: 'Economic indicator analysis using Linear Regression for forecasting trends and data-driven decisions.',
      technologies: ['Python', 'Scikit-learn', 'Pandas'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/chekpoint2/PIBxACBR_LinearRegression.ipynb',
      icon: 'trending'
    },
    {
      id: 'financial-app',
      title: 'Financial APP - Personal Finance',
      description: 'Full-stack personal finance app with AI integration (RAG + Auto-categorization) for intelligent insights.',
      technologies: ['PostgreSQL', 'Node.js', 'Chart.js', 'Next.js', 'NestJS'],
      status: 'Private',
      icon: 'wallet'
    },
    {
      id: 'wine-ml-card',
      title: 'Wine Quality ML Pipeline',
      description: 'End-to-end ML solution with automated quality assessment, monitoring dashboard, and REST API.',
      technologies: ['Python', 'FastAPI', 'MLflow', 'Docker', 'Streamlit'],
      repoUrl: 'https://github.com/henriquebap/wine-ml-app',
      icon: 'pipeline'
    }
  ],
  dl: [
    {
      id: 'medical-asr-card',
      title: 'Medical ASR Benchmark',
      description: 'Production-grade ASR evaluation system for Brazilian medical domain with consensus algorithms.',
      technologies: ['Python', 'PyTorch', 'Hugging Face', 'OpenAI'],
      status: 'Professional',
      icon: 'medical'
    },
    {
      id: 'stock-lstm-card',
      title: 'Stock Price LSTM Prediction',
      description: 'LSTM neural network for stock price prediction with REST API and Docker deployment.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
      status: 'Academic',
      icon: 'stock'
    },
    {
      id: 'diabetes-prediction',
      title: 'Diabetes Prediction - Pima Indians',
      description: 'Neural network model using Keras to predict diabetes occurrence for early diagnosis support.',
      technologies: ['Python', 'Keras', 'TensorFlow'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/tree/main/Keras',
      icon: 'health'
    },
    {
      id: 'bike-detection',
      title: 'Bike Detection - Porto Seguro',
      description: 'Object detection system using Detectron2 deployed on AWS for insurance process automation.',
      technologies: ['Python', 'Detectron2', 'AWS'],
      repoUrl: 'https://github.com/henriquebap/R-CNN-OD-Sprint',
      highlight: 'Top-10 Finalist',
      icon: 'bike'
    },
    {
      id: 'marine-yolov5',
      title: 'Marine Animal Detection',
      description: 'YOLOv5 model to identify sharks, fish, and rays for species monitoring and conservation.',
      technologies: ['Python', 'YOLOv5'],
      repoUrl: 'https://github.com/henriquebap/YoloV5-Shark-Detection',
      icon: 'fish'
    },
    {
      id: 'gymbuddy',
      title: 'GYMBUDDY - AI Fitness Assistant',
      description: 'Fitness assistant integrating Keras and GPT-3 API for personalized fitness guidance.',
      technologies: ['Python', 'Keras', 'OpenAI'],
      repoUrl: 'https://github.com/henriquebap/GYMBUDDY-IA',
      icon: 'fitness'
    },
    {
      id: 'cartpole-dqn',
      title: 'DQN - CartPole',
      description: 'Deep Q-Learning model to solve the CartPole balancing problem using reinforcement learning.',
      technologies: ['Python', 'TensorFlow', 'OpenAI Gym'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/Deep%20Q-Learning/CartPole-DQN.ipynb',
      icon: 'robot'
    },
    {
      id: 'mountain-car',
      title: 'Q-Learning - Mountain Car',
      description: 'Q-Learning model for the Mountain Car problem addressing complex optimization challenges.',
      technologies: ['Python', 'OpenAI Gym'],
      repoUrl: 'https://github.com/henriquebap/Machine_Learning_HB/blob/main/Mountain-Car-Gym-Q-Learning.ipynb',
      icon: 'car'
    },
    {
      id: 'marine-garbage',
      title: 'Marine Garbage Detection',
      description: 'YOLOv9 model optimized for real-time garbage detection on edge devices for environmental protection.',
      technologies: ['Python', 'YOLOv9'],
      repoUrl: 'https://github.com/henriquebap/Blue-Clean-YoloV9',
      icon: 'recycle'
    }
  ],
  genai: [
    {
      id: 'wordin-card',
      title: 'Wordin - AI Transcription',
      description: 'SaaS platform using ASR & AI to transform audio into structured educational materials.',
      technologies: ['Groq', 'OpenAI', 'Supabase'],
      liveUrl: 'https://wordinai.com',
      highlight: 'Live Product',
      icon: 'transcription'
    },
    {
      id: 'perfect-delta',
      title: 'Perfect Delta - Racing AI',
      description: 'Intelligent analysis platform for regularity racing with real-time AI strategic insights.',
      technologies: ['Anthropic Claude', 'FastAPI', 'PostgreSQL'],
      status: 'Commercial',
      highlight: '92% decision time reduction',
      icon: 'racing'
    },
    {
      id: 'arnold',
      title: 'Arnold - AI Fitness Coach',
      description: 'AI personal trainer based on fine-tuned local LLM for personalized workout planning.',
      technologies: ['Python', 'Ollama', 'Mistral'],
      repoUrl: 'https://github.com/henriquebap/Arnold',
      icon: 'coach'
    }
  ]
};

// Skills organized by category
export const skills = {
  languages: [
    { name: 'Python', icon: 'python', level: 'Expert' },
    { name: 'SQL', icon: 'database', level: 'Advanced' }
  ],
  mlFrameworks: [
    { name: 'PyTorch', icon: 'pytorch', level: 'Expert' },
    { name: 'TensorFlow', icon: 'tensorflow', level: 'Advanced' },
    { name: 'Scikit-learn', icon: 'scikitlearn', level: 'Expert' },
    { name: 'Keras', icon: 'keras', level: 'Advanced' },
    { name: 'Hugging Face', icon: 'huggingface', level: 'Advanced' }
  ],
  aiTools: [
    { name: 'OpenAI API', icon: 'openai', level: 'Expert' },
    { name: 'LangChain', icon: 'langchain', level: 'Advanced' },
    { name: 'RAG', icon: 'rag', level: 'Advanced' },
    { name: 'Ollama', icon: 'ollama', level: 'Intermediate' }
  ],
  mlops: [
    { name: 'Docker', icon: 'docker', level: 'Advanced' },
    { name: 'MLflow', icon: 'mlflow', level: 'Advanced' },
    { name: 'FastAPI', icon: 'fastapi', level: 'Expert' },
    { name: 'AWS', icon: 'aws', level: 'Intermediate' }
  ],
  data: [
    { name: 'Pandas', icon: 'pandas', level: 'Expert' },
    { name: 'NumPy', icon: 'numpy', level: 'Expert' },
    { name: 'PostgreSQL', icon: 'postgresql', level: 'Advanced' },
    { name: 'Supabase', icon: 'supabase', level: 'Advanced' }
  ],
  visualization: [
    { name: 'Matplotlib', icon: 'matplotlib', level: 'Advanced' },
    { name: 'Seaborn', icon: 'seaborn', level: 'Advanced' },
    { name: 'Streamlit', icon: 'streamlit', level: 'Advanced' },
    { name: 'Gradio', icon: 'streamlit', level: 'Advanced' }
  ]
};

// Profile information
export const profile = {
  name: 'Henrique Baptista',
  title: 'AI Engineer',
  tagline: 'Building intelligent systems from concept to production',
  about: `Machine Learning Engineer with hands-on experience building end-to-end ML solutions, audio pipelines, ASR/STT optimization, and VAD tuning. Skilled in developing and benchmarking transformer-based models using PyTorch and Hugging Face, with growing expertise in fine-tuning and RAG techniques. Experienced in agentic AI solutions with GPT APIs, multi-step orchestration strategies.`,
  aboutExtended: `Proven ability to deliver scalable pipelines, from data ingestion and ETL/ELT workflows to deployment. Background includes computer vision, predictive modeling, and unstructured data processing. Currently pursuing a Postgraduate in Machine Learning Engineering. Passionate about continuously learning, experimenting, and applying AI/ML technologies to solve real-world problems.`,
  achievements: [
    { label: '1st Place', description: 'Global Solution FIAP', icon: 'trophy' },
    { label: 'Top 10', description: 'Porto Seguro Challenge', icon: 'medal' },
    { label: '20+', description: 'AI/ML Projects', icon: 'projects' },
    { label: 'Live SaaS', description: 'Wordin Platform', icon: 'rocket' }
  ],
  contact: {
    linkedin: 'https://www.linkedin.com/in/henrique-baptista777/',
    github: 'https://github.com/henriquebap',
    email: 'henrique.obap@gmail.com'
  },
  education: 'Postgraduate in Machine Learning Engineering'
};

// Category labels
export const categoryLabels = {
  ml: 'Machine Learning',
  dl: 'Deep Learning',
  genai: 'Gen AI & LLMs'
};



