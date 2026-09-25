# Henrique Baptista · Founder, HOB Tech · AI Engineer

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-henriquebap.com-0ea5e9?style=for-the-badge&logo=google-chrome&logoColor=white)](https://henriquebap.com/sobre)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Henrique_Baptista-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/henrique-baptista777/)
[![Email](https://img.shields.io/badge/Email-henrique.obap%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:henrique.obap@gmail.com)

</div>

I build management systems and put AI to work in real operations: agents, LLM, and Voice AI, plus the evaluation layer that proves they work.

In my most recent role I built the evaluation stack for medical AI: ASR benchmarks, human annotation pipelines, and LLM-as-Judge evaluators running in production. Today I run HOB Tech, where I build management systems for small businesses and put AI to work inside them. The first is the system an auto mechanic shop runs on every day, now becoming a product for other shops, alongside a multi-agent SaaS I operate.

- Postgraduate Program in Machine Learning Engineering, FIAP (completed Mar 2026)
- Bachelor in Systems Analysis & Development, FIAP (completed Dec 2024)

The full case studies live at **[henriquebap.com/sobre](https://henriquebap.com/sobre)**.

---

## Featured work

### Medical AI Evaluation & ASR
*ML / AI Engineer at VOA Health, Feb 2025 to Jul 2026 · private system*

From ASR evaluation and data curation to LLM-as-Judge evaluators running in production for clinical audio.
- Provider, model, VAD, and prompt experiments benchmarked on real clinical audio
- Evaluation centered on medication names, where a single wrong word changes the meaning
- Context-versus-latency trade-off characterized for streaming clinical ASR
- LLM-as-Judge evaluators in production, calibrated against human annotation

`Python` `PyTorch` `Whisper` `Hugging Face` `Argilla` `LangSmith` `AWS S3` `Docker`

### WordinAI · [wordinai.com](https://wordinai.com)
*Independent product · live SaaS, built and operated solo*

Transcription and document generation platform running on a deep agent.
- Multi-agent LangGraph system: context analyst, source verifier, action strategist
- Hybrid retrieval: vector plus full-text search with graceful fallback
- Multi-provider STT routing with retries and circuit breakers
- In-browser Whisper WASM transcription as a zero-cost privacy option

`Next.js` `TypeScript` `LangGraph` `deepagents` `Whisper` `Supabase` `Sentry`

### Wilmec
*Client work · sole engineer · in daily use at an auto mechanic shop*

The full management system the shop runs on, with an AI layer across Telegram, WhatsApp, and voice. Now the base of the HOB Oficina product ([henriquebap.com/oficina](https://henriquebap.com/oficina), in Portuguese).
- Conversational inventory agent on the OpenAI Agents SDK, one engine serving Telegram, WhatsApp, and web
- Tool-level guardrails: confirmation gate on anomalous stock movements, duplicate detection, sender allowlist
- Voice to structured data: dictation becomes typed, priced work-order line items
- Every AI interaction logged with input, output, model, and context snapshot

`Next.js` `TypeScript` `OpenAI Agents SDK` `Whisper` `Supabase` `Postgres`

### Education Risk Prediction · [repo](https://github.com/henriquebap/datathon-educacao-passos-magicos) · [live](https://henriquebap-datathon-educacao-passos-magicos.hf.space)
*FIAP capstone · social impact*

End-to-end ML system for identifying educational delay risk at an NGO: XGBoost, FastAPI, Streamlit dashboard, and Evidently AI drift monitoring. 92.59% accuracy and 0.97 ROC-AUC on held-out data.

### Insurance Computer Vision · [repo](https://github.com/henriquebap/R-CNN-OD-Sprint)
*Porto Seguro challenge · Top-10 finalist*

Detectron2 / Mask R-CNN pipeline for automating bicycle claim verification: custom COCO dataset, augmentation, transfer learning, cloud training.

---

## More projects

| Project | What it is | Link |
|---|---|---|
| Postgrad RAG Assistant | RAG over my ML postgrad material with page-level source citations and measured cost per query | private |
| Race Strategy Copilot | Endurance-racing strategist: Claude with extended thinking and the rulebook in prompt cache, on top of a deterministic pace engine | private |
| Local Voice Tutor | Language tutor fully offline on Apple Silicon: Whisper, Mistral 7B, Coqui TTS, no API calls | private |
| Wine Quality Regression | scikit-learn regression with a Gradio interface and artifacts on Hugging Face Hub | [repo](https://github.com/henriquebap/wine-ml-app) |
| Experimental Stock Forecasting | Collaborative PyTorch + FastAPI system whose monitoring exposed weak generalization | [repo](https://github.com/henriquebap/previsao_acoes) |
| Genetic Syndrome Classification | KNN over 320-dimensional image embeddings, t-SNE, multi-metric evaluation | [repo](https://github.com/henriquebap/Genetic_Syndrome_Classification_w_Embeddings_KNN) |
| Marine Vision Systems | YOLOv5/YOLOv9 detection of marine animals and marine waste | [repo](https://github.com/henriquebap/Blue-Clean-YoloV9) |
| GYMBUDDY | Conversational fitness assistant combining predictive models with GPT recommendations | [repo](https://github.com/henriquebap/GYMBUDDY-IA) |

Product engineering: [vinibap.com](https://vinibap.com) (narrative portfolio with admin console) · [missaofilipinas.com](https://missaofilipinas.com/en) (bilingual fundraising product).

---

## This repository

Source of [henriquebap.com](https://henriquebap.com): a Vite multi-page site in `portfolio/` with a hub (`/`), this portfolio (`/sobre`), the HOB Oficina landing page (`/oficina`), and HOB Tech custom projects (`/hobtech`). Deploy notes in [`portfolio/DEPLOY.md`](portfolio/DEPLOY.md).
