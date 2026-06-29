# AI Workflow

How EngPath uses Google Gemini to analyse project reflections and produce structured evidence.

---

## Overview

```
User clicks "Analyse with AI"
        ↓
Frontend sends project data to backend POST /api/map
        ↓
Backend constructs a prompt and calls Gemini API
        ↓
Gemini returns structured JSON evidence items
        ↓
Backend returns JSON to frontend
        ↓
Frontend displays evidence items for user review
        ↓
User approves / rejects / edits each item
        ↓
Approved items saved to Supabase
```

---

## Step 1 — Frontend Sends Project Data

When the user clicks "Analyse with AI", the frontend collects the project's title, description, and reflection text and sends them to the backend as a prompt string via `POST /api/map`.

---

## Step 2 — Backend Constructs Prompt and Calls Gemini

The backend receives the prompt string, attaches the `GEMINI_API_KEY`, and forwards the request to the Gemini API.

- **Endpoint:** To verify (currently using `/v1beta/interactions` — may be incorrect)
- **Model:** Set via `GEMINI_MODEL` env var (default in code: `gemini-3.5-flash` — to verify)
- **Max output tokens:** 4096
- **Temperature:** 0.1 (low, for consistent structured output)
- **Timeout:** 30 seconds

The prompt instructs Gemini to analyse the project reflection and return a JSON array of evidence items, each mapped to an ICE attribute.

---

## Step 3 — Expected Structured Evidence Output

Gemini is expected to return a JSON structure similar to:

```json
[
  {
    "title": "Designed drainage system for site A",
    "description": "Led the hydraulic design of...",
    "iceAttribute": "Engineering Knowledge",
    "source": "Project reflection",
    "status": "pending"
  }
]
```

> The exact schema is defined in the backend prompt. If Gemini returns malformed JSON, the frontend should handle the error gracefully (to verify).

---

## Step 4 — Manual Approval / Editing

Evidence items returned by AI are shown to the user with a `pending` status. The user can:

- **Approve** — item is saved as accepted evidence
- **Reject** — item is discarded
- **Edit** — user can modify the title, description, or attribute before approving

This manual review step is intentional and important — AI output can be imprecise or hallucinated.

---

## Cost Control Strategy

- **Manual trigger only:** AI analysis only runs when the user explicitly clicks the button. No automatic or background analysis.
- **Rate limiting:** The backend enforces 10 requests per IP per minute to prevent abuse.
- **Free tier:** Using Gemini free tier for MVP. This constrains volume but avoids cost.
- **Prompt size limit:** Prompts over 25,000 characters are rejected by the backend.

---

## Known Risks

| Risk | Mitigation |
|---|---|
| Hallucinated evidence | User must manually approve each item |
| Bad / malformed JSON from Gemini | Frontend should handle parse errors gracefully (to verify) |
| Wrong endpoint or model name | Run smoke test before changing code — see ISSUE-002 |
| Free tier rate limits | Manual trigger reduces call volume |
| Duplicate evidence on re-analysis | Not yet mitigated — see ISSUE-006 |
| API key exposed | Key is held server-side only; never sent to browser |
