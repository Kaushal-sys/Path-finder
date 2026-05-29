# Path-finder
Pathfinder is an AI EdTech web platform powered by Gemma 4 that resolves the "Resume vs. Reality" gap. It maps user portfolios into an interactive, visual Skill Tree. If a primary path (like Astrophysics) is saturated, Pathfinder automatically reroutes users to high-growth tech alternatives with outbound redirect links.
# 🧭 Pathfinder: Resume vs. Reality Gap Navigator

> **Elevator Pitch:** Pathfinder is an AI EdTech web platform powered by Gemma 4 that resolves the "Resume vs. Reality" gap. It maps user portfolios into an interactive, visual Skill Tree. If a primary path (like Astrophysics) is saturated, Pathfinder automatically reroutes users to high-growth tech alternatives with outbound redirect links.

---

## 🚀 The Problem Statement
Early-career professionals and academic specialists struggle to identify specific, real-world skill gaps between their current portfolio and live job market requirements. This results in inefficient upskilling, prolonged job searches, and career stagnation when primary industries hit local hiring capacities.

## ✨ Core Features
* **Split-Screen Desktop Web Login:** A premium, modern side-by-side landing grid built natively for full desktop viewports.
* **Interactive Skill Tree Visualization:** Translates traditional text profiles into an RPG-style gamified competency tree (Mastered, In-Progress, and Locked nodes).
* **Automated Cross-Domain Redirection Hub:** Dynamically tracks local market saturation (e.g., *0 Available Astrophysics Teaching Lines*) and instantly unlocks alternative corporate paths (e.g., *Aerospace Data Analytics, Tech Firms*) with actionable outbound redirect triggers (`Apply External ↗`).

---

## 🧠 Why Gemma 4 is Useful for Pathfinder

Pathfinder utilizes Google's state-of-the-art open model family, **Gemma 4** (`gemma4:e4b` / `gemma4:31b`), as its core reasoning engine. Gemma 4 provides several distinct advantages that make it perfect for this application's architecture:

1. **Advanced Cross-Domain Reasoning:** Gemma 4 features breakthrough capabilities in multi-step planning and deep logic. This enables the model to look at an academic profile (like an Astrophysics Researcher), dissect its underlying skill datasets (e.g., fluid dynamics, mathematical modeling, high-dimensional arrays), and intelligently map them into corporate equivalents (like Aerospace Data Science or Quantum Computing).
2. **Strict Structured Output (JSON Generation):** With native system prompt support, Gemma 4 reliably adheres to strict architectural constraints, flawlessly outputting raw JSON data schemas to feed Pathfinder’s dynamic front-end without breaking the interface.
3. **Data Sovereignty & Local Deployment Efficiency:** Because resumes and career portfolios contain sensitive personal info, Gemma 4's Apache 2.0 license and highly efficient architecture mean Pathfinder can run entirely locally or on-premises. The Effective 4B (E4B) model runs lightning-fast with minimal RAM, protecting user privacy completely.
4. **Massive 128K/256K Context Window:** Gemma 4 supports massive token context windows. This allows users to dump entire multi-page academic CVs and massive, highly detailed corporate job descriptions into a single prompt without running out of token limits.

---

## 🛠️ Tech Stack
* **Frontend Framework:** Streamlit (Desktop Wide Configuration)
* **AI Engine:** Google Gemma 2 / Gemma 4 Models via Google GenAI SDK & Ollama Interceptors
* **UI Components:** Streamlit Option Menu, Tailwind CSS Web Tokens, Material Symbols, and Inter Typography Scale

## 💻 Quick Start & Installation

Ensure you have your GenAI API key configured or a local Ollama `gemma4` instance active before executing.

```bash
# 1. Clone this repository
git clone [https://github.com/YOUR_USERNAME/pathfinder.git](https://github.com/YOUR_USERNAME/pathfinder.git)
cd pathfinder

# 2. Install the necessary buildathon requirements
pip install google-genai streamlit streamlit-option-menu

# 3. Launch the full desktop web platform workspace
python -m streamlit run app.py
