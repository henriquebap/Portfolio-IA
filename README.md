# Artificial Intelligence Portfolio

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-henriquebap.com-0ea5e9?style=for-the-badge&logo=google-chrome&logoColor=white)](https://henriquebap.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Henrique_Baptista-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henrique-baptista777/)
[![Email](https://img.shields.io/badge/Email-henrique.obap%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:henrique.obap@gmail.com)

**🌐 Visit my portfolio: [henriquebap.com](https://henriquebap.com)**

</div>

---

## Table of Contents

- [About Me](#about-me)
- [Featured Projects](#featured-projects)
    - [Wordin - AI Transcription Platform](#wordin---ai-transcription-platform)
    - [Medical ASR & STT Engineering](#medical-asr--stt-engineering)
    - [Stock Price Prediction with LSTM](#stock-price-prediction-with-lstm)
    - [Financial APP - Intelligent Personal Finance](#financial-app---intelligent-personal-finance)
    - [Wine Quality ML Pipeline](#wine-quality-ml-pipeline)
    - [Bike Detection with Detectron2](#bike-detection-with-detectron2)
- [Additional Projects](#additional-projects)
    - [Machine Learning](#machine-learning)
    - [Deep Learning & Computer Vision](#deep-learning--computer-vision)
    - [Generative AI & LLMs](#generative-ai--llms)
- [Contact](#-contact)

---

## About Me

ML / AI Engineer building reliable production AI systems across healthcare and SaaS. My work spans LLM quality evaluation, Voice AI/ASR benchmarking, data curation, Python APIs, monitoring, and user-facing products. At VOA Health, I build quality and data workflows for medical AI; independently, I designed and shipped WordinAI, a multi-provider transcription SaaS. I completed FIAP's Postgraduate Program in Machine Learning Engineering in March 2026 and was a Top-10 finalist in the Porto Seguro FIAP Challenge.

---

## Featured Projects

Highlighted projects demonstrating end-to-end ML engineering, production deployment, and technical depth.

### Wordin - AI Transcription Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit%20Site-2ea44f?style=for-the-badge&logo=google-chrome&logoColor=white)](https://wordinai.com)

A production SaaS platform that transforms audio from sermons, lectures, and classes into structured materials using multi-provider ASR, LangGraph agents, and semantic retrieval.

**Architecture**: Audio Input → Multi-provider ASR → LangGraph Agent + Semantic Retrieval → Supabase → Multi-format Export

**Repository Evidence**:
- **Agent workflow**: 5 LangGraph nodes with planning, tool execution, and model routing
- **Tests**: 12 test files covering transcription, billing, rate limiting, validation, and agent state
- **Reliability**: Circuit breakers for OpenAI, Groq, and Stripe
- **Operations**: Sentry/PostHog instrumentation and 340 recorded deployment events

**Tech Stack**:
- **AI/ML**: Groq Whisper Large V3 Turbo, OpenAI GPT-4o-mini, Transformers.js, FFmpeg.wasm
- **Backend**: Next.js 14 (App Router), TypeScript 5.4, Next.js API Routes
- **Database**: Supabase (PostgreSQL, Auth, Storage with RLS)
- **Frontend**: React 18, Tailwind CSS 3.4, Framer Motion 11.2, Lucide React
- **Infrastructure**: Vercel (serverless), Railway/Render (full support)

**Engineering Highlights**:
- **Agent runtime**: LangGraph state machine with planning, tool calling, model tiers, and conditional routing
- **Semantic search**: Chunked transcript embeddings with OpenAI and Supabase-backed retrieval
- **Intelligent fallback system**: Groq (fast/cheap) → OpenAI (high accuracy) automatic switching
- **Reliability & observability**: Circuit breakers, Vitest coverage, Sentry, and PostHog instrumentation
- **Audio chunking**: 90-second chunks with FFmpeg.wasm for files up to 200MB
- **5 document types**: Full Notes, Devotional Plans, Inspirational Quotes, Reverse Engineering, Book Content
- **Client-side processing**: 100% browser-based transcription option with Transformers.js WASM
- **Multi-tenant architecture**: Row Level Security (RLS) with 4 permission levels
- **Provider optimization**: Routing and fallback designed around latency, cost, and availability

**Status**: ✅ Live in Production | [wordinai.com](https://wordinai.com)

---

### Medical ASR & STT Engineering

Production-grade Speech-to-Text engineering system for Brazilian medical domain, featuring comprehensive ASR provider benchmarking, dataset curation workflows, and model fine-tuning pipelines.

**Architecture**: Audio Files (AWS S3) ↔ HuggingFace Datasets ↔ Argilla Curation UI → Multi-Provider ASR Benchmarking → WER/CER Evaluation → Fine-tuned Models (PyTorch)

**Key Data & Metrics**:
- **Benchmarked 9 ASR providers**: RunPod FastWhisper, OpenAI Whisper, Mistral Voxtral, Gemini 2.5 Flash/Pro, Qwen3 ASR, ElevenLabs, Kroko, HF Endpoints, NVIDIA NeMo Parakeet
- **Dataset**: 217 medication error variations cataloged across top 10 medications
- **Error examples**: Fluoxetina (68 variations), Quetiapina (37), Sinvastatina (34)
- **Evaluation**: WER/CER metrics with robust Portuguese normalization

**Tech Stack**:
- **ML/AI**: PyTorch, Whisper (OpenAI), Hugging Face Transformers, FastAPI
- **Data Pipeline**: HuggingFace Datasets, Argilla (collaborative curation), AWS S3 (audio storage)
- **Workflow**: Modular 8-component system (config, state, audio_utils, s3_client, argilla_client, hf_client, orchestrator, CLI)
- **Infrastructure**: Docker containers, Python async workflows

**Engineering Highlights**:
- **Consensus algorithms**: Multi-annotator agreement for high-quality ground truth
- **VAD optimization**: Voice Activity Detection parameter tuning for medical audio
- **Automated workflow**: HuggingFace → Argilla → Export → Upload with duplicate detection
- **Modular architecture**: 8 independent, testable modules with clear separation of concerns
- **Production metrics**: Robust WER/CER calculation with domain-specific normalization (numbers, units, accents)
- **Dataset management**: Automatic chunking, padding logic (180ms), metadata tracking

**Status**: 🔒 Professional Project | Private Codebase

---

### Stock Price Prediction with LSTM

[![Live API](https://img.shields.io/badge/Live_API-Railway-purple?style=for-the-badge&logo=railway&logoColor=white)](https://previsaoacoes-back-production.up.railway.app/docs)
[![Frontend](https://img.shields.io/badge/Dashboard-Live-blue?style=for-the-badge&logo=streamlit&logoColor=white)](https://stock-pred.up.railway.app)
[![HuggingFace](https://img.shields.io/badge/Models-HF_Hub-yellow?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/henriquebap/stock-predictor-lstm)

Collaborative academic ML system exploring end-to-end stock forecasting, model serving, and monitoring. Henrique authored 39 of the repository's 43 commits.

**Architecture**: Yahoo Finance (yfinance) → Feature Engineering (16 features) → PyTorch LSTM → FastAPI REST API → PostgreSQL (Railway) → HuggingFace Hub (model storage) → Streamlit Dashboard

**Key Metrics**:
- **Verified AAPL Evaluation**: MAPE 18.44%, R² -11.73, directional accuracy 40.68%
- **Interpretation**: Monitoring exposed weak generalization and the need for model/data redesign
- **Models Available**: 11 total (1 BASE + 10 stock-specific: AAPL, GOOGL, MSFT, AMZN, META, NVDA, TSLA, JPM, V)

**Tech Stack**:
- **ML/AI**: PyTorch, scikit-learn (StandardScaler), yfinance (data collection)
- **Backend**: FastAPI 0.104+, Python 3.10+, WebSocket (real-time updates)
- **Frontend**: Streamlit, Plotly (interactive charts)
- **Database**: PostgreSQL (Railway Cloud) - predictions storage, model metrics, training logs
- **Model Hub**: HuggingFace Hub (`henriquebap/stock-predictor-lstm`) - 30 files total
- **Monitoring**: Prometheus metrics, ML Health scoring (0-100), drift detection, auto alerts
- **Infrastructure**: Railway deployment configuration and GitHub Actions workflows; current CI requires repair

**Model Architectures**:
- **LSTMPredictor (Original)**: 2 LSTM layers, unidirectional, dropout 0.2, hidden size 50
- **ImprovedLSTM (Enhanced)**: 3 LSTM bidirectional layers, attention mechanism, dropout 0.3, hidden size 64, layer normalization, residual connections

**Engineering Highlights**:
- **16 engineered features**: Moving averages (7/30/90 days), volatility (7/30 days), momentum, volume features, price change percentages
- **60-day sequences**: Historical window for temporal pattern learning
- **Smart model loading**: 3-level fallback (specific model → BASE model → auto-detect architecture)
- **Advanced monitoring**: Infrastructure metrics (CPU, RAM, disk, request rate), ML Health (feature drift Z-score, prediction bias, data quality 0-100), Prometheus time-series
- **CI workflow**: Ruff, formatting, mypy, pytest, and Docker checks are configured but not currently green
- **Model service**: Intelligent caching, lazy loading, warm start with BASE model, HuggingFace Hub integration
- **4 monitoring tabs**: Overview (uptime, requests, errors), Models (metrics per model), ML Health (drift alerts), Prometheus (raw metrics)

**Status**: Academic experiment; model quality and CI need improvement | [GitHub](https://github.com/henriquebap/previsao_acoes)

---

### Financial APP - Intelligent Personal Finance

Full-stack personal finance application with modern architecture designed for AI integration, featuring automated categorization, intelligent insights, and data-driven financial planning.

**Architecture**: Next.js (Frontend) → Express REST API → PostgreSQL (Railway) → Planned: RAG + LLM Auto-categorization

**Key Features**:
- **Auth**: JWT + bcrypt secure authentication
- **Database**: Row Level Security (RLS) for multi-tenant data isolation
- **Deployment**: Railway Cloud with separate backend/frontend services
- **Architecture**: Monorepo structure (`backend/` + `frontend/` directories)
- **Planned AI**: RAG-based financial insights + automatic transaction categorization with LLMs

**Tech Stack**:
- **Frontend**: Next.js, React, Chart.js (data visualization)
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (Railway managed database)
- **Infrastructure**: Railway (Docker deployment, auto-injected DATABASE_URL)
- **Security**: JWT tokens, bcrypt password hashing, environment variable management

**Engineering Highlights**:
- **Microservices architecture**: Independent backend and frontend deployments
- **Database design**: User isolation via RLS policies, normalized schema
- **Environment configuration**: Centralized config management, Railway integration
- **Future-ready**: Architecture prepared for AI/ML feature integration
- **Privacy-focused**: Local data processing, secure authentication

**Status**: 🚧 In Development | Private Codebase

---

### Wine Quality ML Pipeline

Applied regression project for wine-quality prediction using scikit-learn, with a Gradio interface and model artifacts published on Hugging Face Hub.

**Architecture**: Data Ingestion → Preprocessing → Scikit-learn Regression → Evaluation → Gradio Interface → Hugging Face Hub

**Verified Metrics**:
- **RMSE**: 0.7041
- **MAE**: 0.5420
- **R²**: 0.4236

**Tech Stack**:
- **ML/AI**: Python, scikit-learn, Pandas, NumPy
- **Interface**: Gradio
- **Model storage**: Hugging Face Hub

**Status**: Complete applied-ML experiment; not an MLOps/API deployment | [GitHub Repository](https://github.com/henriquebap/wine-ml-app)

---

### Bike Detection with Detectron2

Computer vision system for automated bike detection using Detectron2, deployed on AWS cloud infrastructure. Achieved Top-10 Finalist position in Porto Seguro FIAP Challenge.

**Architecture**: COCO Dataset → Detectron2 (Mask R-CNN) → PyTorch Training → AWS Deployment → Real-time Detection API

**Key Achievement**:
- **Competition Result**: Top-10 Finalist at Porto Seguro FIAP Challenge
- **Application**: Insurance process automation with real-time bike detection
- **Deployment**: Cloud-based training and monitoring on AWS

**Tech Stack**:
- **ML/AI**: Python, Detectron2, PyTorch, COCO dataset
- **Infrastructure**: AWS (EC2 for training, S3 for data storage, model deployment)
- **Computer Vision**: Mask R-CNN architecture, transfer learning

**Engineering Highlights**:
- **Transfer learning**: Fine-tuned Detectron2 pre-trained models on bike detection task
- **Cloud deployment**: AWS infrastructure for scalable training and inference
- **Production monitoring**: Real-time detection performance tracking
- **Insurance automation**: Streamlined claim processing with automated bike identification

**Status**: ✅ Competition Project | Top-10 Finalist | [GitHub Repository](https://github.com/henriquebap/R-CNN-OD-Sprint)

---

## Additional Projects

Additional machine learning, deep learning, and AI projects demonstrating versatility across domains.

### Machine Learning

#### Genetic Syndrome Classification with Embeddings
Machine learning pipeline for genetic syndrome classification using 320-dimensional image embeddings with t-SNE visualization and KNN classification.

- **Tech**: Python, Scikit-learn, NumPy, Matplotlib
- **Repo**: [GitHub](https://github.com/henriquebap/Genetic_Syndrome_Classification_w_Embeddings_KNN)

#### Avocado Price Analysis and Forecasting
Exploratory data analysis and forecasting models for avocado price prediction to optimize stock and sales strategies.

- **Tech**: Python, Pandas, Scikit-learn
- **Repo**: [GitHub](https://github.com/henriquebap/Avocado-Prices-EDA-Model-Traning)

#### Exploratory Analysis of Airline Flights
Extensive EDA of airline flight data for fare price prediction and market trend analysis.

- **Tech**: Python, Pandas, Seaborn
- **Repo**: [GitHub](https://github.com/henriquebap/Machine_Learning_HB/tree/main/EDA%20-%20AIrline%20Fare%20%2B%20Model%20Training)

#### Customer Churn Prediction
Churn prediction using KNN, SVC, RandomForest, and Logistic Regression to help retain clients.

- **Tech**: Python, Scikit-learn, Pandas
- **Repo**: [GitHub](https://github.com/henriquebap/Machine_Learning_HB/blob/main/chekpoint2/ExercicioClassificacaoAula.ipynb)

#### GDP vs. ACBR Linear Regression
Economic indicator analysis using Linear Regression for trend forecasting.

- **Tech**: Python, Scikit-learn, Pandas
- **Repo**: [GitHub](https://github.com/henriquebap/Machine_Learning_HB/blob/main/chekpoint2/PIBxACBR_LinearRegression.ipynb)

---

### Deep Learning & Computer Vision

#### Diabetes Prediction in Pima Indians
Neural network model using Keras to predict diabetes occurrence in Pima Indian population for early diagnosis support.

- **Tech**: Python, Keras, TensorFlow
- **Repo**: [GitHub](https://github.com/henriquebap/Machine_Learning_HB/tree/main/Keras)

#### Marine Animal Detection with YOLOv5
Object detection model using YOLOv5 to identify sharks, fish, and rays for marine species monitoring and conservation.

- **Tech**: Python, YOLOv5
- **Repo**: [GitHub](https://github.com/henriquebap/YoloV5-Shark-Detection)

#### Marine Garbage Detection with YOLOv9
Marine garbage detection model optimized for real-time detection on edge devices, contributing to environmental protection.

- **Tech**: Python, YOLOv9
- **Repo**: [GitHub](https://github.com/henriquebap/Blue-Clean-YoloV9)

#### GYMBUDDY - AI Fitness Assistant
Fitness assistant integrating Keras and GPT-3 API for personalized fitness guidance through conversational AI.

- **Tech**: Python, Keras, OpenAI GPT-3
- **Repo**: [GitHub](https://github.com/henriquebap/GYMBUDDY-IA)

#### DQN - CartPole with OpenAI Gym
Deep Q-Learning model solving the CartPole balancing problem using reinforcement learning strategies.

- **Tech**: Python, TensorFlow, OpenAI Gym
- **Repo**: [GitHub](https://github.com/henriquebap/Machine_Learning_HB/blob/main/Deep%20Q-Learning/CartPole-DQN.ipynb)

#### Q-Learning - Mountain Car with OpenAI Gym
Q-Learning model solving the Mountain Car problem with reinforcement learning optimization techniques.

- **Tech**: Python, OpenAI Gym
- **Repo**: [GitHub](https://github.com/henriquebap/Machine_Learning_HB/blob/main/Mountain-Car-Gym-Q-Learning.ipynb)

---

### Generative AI & LLMs

#### Perfect Delta - AI Racing Strategist
Intelligent analysis platform for regularity racing combining session, lap, pit, and track context with Anthropic/OpenAI integrations.

- **Tech**: Anthropic Claude 3.5, FastAPI, PostgreSQL
- **Status**: Commercial Project | Private Codebase

#### Arnold - AI Fitness Coach
AI personal trainer based on fine-tuned local LLM for personalized workout planning and fitness coaching.

- **Tech**: Python, Ollama, Mistral AI
- **Repo**: [GitHub](https://github.com/henriquebap/Arnold)

---

## Contact

- **LinkedIn** : [Henrique Baptista](https://www.linkedin.com/in/henrique-baptista777/)
- **GitHub** : [henriquebap](https://github.com/henriquebap)
- **Email** : [henrique.obap@gmail.com](mailto:henrique.obap@gmail.com)

---
