# Architecture Overview

## Summary

EngPath is a two-tier web application: a static frontend hosted on GitHub Pages, and a lightweight Node.js backend hosted on Render. Supabase provides authentication and data persistence. The backend acts as a proxy between the frontend and the Google Gemini API.

---

## Frontend

- **Technology:** Vanilla HTML, CSS, and JavaScript (no framework)
- **Hosting:** GitHub Pages (serves `index.html` from the repo root)
- **Auth:** Uses the Supabase JavaScript client for login/logout and session management
- **Data:** Reads and writes project data directly to Supabase from the browser
- **AI:** Sends project reflection text to the backend `/api/map` endpoint; does not call Gemini directly
- **Current file:** `engpath.html` (V1 — not yet promoted to `index.html`)

---

## Backend

- **Technology:** Node.js with Express
- **Hosting:** Render (auto-deploys from `main` branch)
- **Role:** Proxy for Gemini API calls. The frontend sends a prompt; the backend adds the API key and forwards the request to Gemini
- **Rate limiting:** 10 requests per IP per minute (in-memory, resets on restart)
- **CORS:** Configurable via `ALLOWED_ORIGINS` environment variable
- **Endpoints:**
  - `GET /` — health check
  - `POST /api/map` — proxy to Gemini (rate-limited; not yet authenticated)

---

## Supabase

- **Role:** Authentication and data storage
- **Auth:** Email/password (and potentially magic link — to verify)
- **Database:** PostgreSQL managed by Supabase
- **RLS:** Row Level Security policies should restrict each user to their own data (to verify — see Known Issues)
- **Client:** Supabase JS SDK used directly in the browser

---

## Gemini API

- **Role:** AI analysis of project reflections
- **Integration:** Called from the backend only — the API key is never exposed to the browser
- **Model:** Set via `GEMINI_MODEL` env var (to verify — current value may be incorrect)
- **Endpoint:** To verify — see [KNOWN_ISSUES.md](../01_Project/KNOWN_ISSUES.md) ISSUE-002
- **Output:** Structured JSON describing evidence items mapped to ICE attributes

---

## GitHub / Git Workflow

- Single repository on GitHub
- `main` branch is the source of truth
- GitHub Pages serves from repo root on `main`
- Render deploys the backend from `main` on push
- No CI pipeline currently configured

---

## Current Limitations

- No automated tests
- No CI/CD pipeline
- Frontend and backend are in the same repository (may need to split later)
- Rate limiting is in-memory and resets on backend restart
- No authentication on the `/api/map` endpoint
- `ALLOWED_ORIGINS` must be manually set in Render environment variables
