# EngPath

AI-powered engineering portfolio app for graduate civil engineers preparing for ICE Chartership.

## What is EngPath?

EngPath helps graduate engineers document their project experience, reflect on their work, and map that experience to the ICE (Institution of Civil Engineers) competency attributes using AI analysis. The goal is to reduce the overhead of preparing a Chartership portfolio.

## Who is it for?

Graduate civil engineers working towards ICE Chartership who want a structured, AI-assisted way to record and review their project evidence.

## Current Status

**V1 — active development / stabilisation phase.**

Core features are working but several known issues remain before V1 is considered stable. See [docs/01_Project/KNOWN_ISSUES.md](docs/01_Project/KNOWN_ISSUES.md).

> Note: The live GitHub Pages site is currently serving `index.html` (V0 prototype). V1 is in `engpath.html` and has not yet been promoted to production. See deployment section below.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML/CSS/JS, hosted on GitHub Pages |
| Backend | Node.js / Express, hosted on Render |
| Auth / Database | Supabase |
| AI Analysis | Google Gemini API (via backend proxy) |
| Source Control | GitHub |

## Local Setup

### Prerequisites

- Node.js >= 18
- A Supabase project (for auth and data storage)
- A Google Gemini API key

### Backend

```bash
# Install dependencies
npm install

# Set environment variables (create a .env file or export manually)
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-2.0-flash   # To verify — see known issues
ALLOWED_ORIGINS=http://localhost:5500,https://yourusername.github.io
PORT=3000

# Start the backend
npm start

# Development (auto-restart)
npm run dev

# Run Gemini smoke test
npm run test:gemini
```

### Frontend

The frontend is a single HTML file. Open `engpath.html` in a browser or serve it with any static server (e.g. VS Code Live Server). Point the Supabase and backend URLs to your local/staging instances.

## Deployment Overview

| Component | Host | Notes |
|---|---|---|
| Frontend | GitHub Pages | Serves `index.html` from the repo root |
| Backend | Render | Auto-deploys from `main` branch |
| Database / Auth | Supabase | Managed cloud service |

Full deployment details: [docs/02_Architecture/DEPLOYMENT.md](docs/02_Architecture/DEPLOYMENT.md)

## Documentation Index

| Directory | Contents |
|---|---|
| [docs/01_Project/](docs/01_Project/) | Roadmap, version history, decisions, known issues |
| [docs/02_Architecture/](docs/02_Architecture/) | Architecture, database, AI workflow, deployment |
| [docs/03_Engineering/](docs/03_Engineering/) | Code reviews, testing, changelog, security, lessons learned |
| [docs/04_Product/](docs/04_Product/) | Features, future ideas, ICE mapping, user feedback, meeting notes |
