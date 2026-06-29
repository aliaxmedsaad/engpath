# Deployment

## Frontend — GitHub Pages

- **URL:** `https://<username>.github.io/<repo>/`
- **Source:** `index.html` in the root of the `main` branch
- **Deploy trigger:** Automatic on push to `main`
- **No build step** — the file is served as-is

V1 frontend is live. `index.html` now contains the V1 application.

---

## Backend — Render

- **URL:** `https://engpath-backend.onrender.com`
- **Runtime:** Node.js >= 18
- **Deploy trigger:** Automatic on push to `main`
- **Start command:** `npm start` (runs `node server.js`)

### Required Environment Variables on Render

| Variable | Description | Required |
|---|---|---|
| `GEMINI_API_KEY` | Google Gemini API key | Yes |
| `GEMINI_MODEL` | Gemini model name — defaults to `gemini-2.0-flash` if not set | Optional |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed CORS origins | Yes — must include GitHub Pages domain |
| `PORT` | Port to listen on | Optional — Render sets this automatically |

> If `ALLOWED_ORIGINS` is not set, CORS allows all origins. Set it explicitly in production. See [KNOWN_ISSUES.md](../01_Project/KNOWN_ISSUES.md) — ISSUE-005.

### Verifying the Backend

```bash
curl https://engpath-backend.onrender.com/
# Expected: {"status":"EngPath API is running"}
```

---

## Database / Auth — Supabase

- **Provider:** Supabase (managed PostgreSQL + auth)
- **Configuration:** Managed via the Supabase dashboard
- **Frontend client:** Supabase JS SDK, configured with project URL and anon key in the frontend HTML file

### Supabase Settings to Verify

- RLS is enabled on the `projects` table
- Auth providers are configured (email/password at minimum)
- Anon key used in frontend is the correct project key

---

## Deployment Checklist

- [x] Gemini endpoint and model verified (`gemini-2.0-flash` on `v1beta/models/{model}:generateContent`)
- [x] Gemini authentication working (`x-goog-api-key` header)
- [x] V1 frontend promoted to `index.html` and live on GitHub Pages
- [x] Backend live on Render, auto-deploying from `main`
- [ ] `ALLOWED_ORIGINS` set on Render to the GitHub Pages domain
- [ ] Supabase RLS policies verified
- [ ] `/api/map` endpoint authenticated
- [ ] XSS issues in tag suggestions / project picker resolved
- [ ] Manual test pass completed (see [TESTING.md](../03_Engineering/TESTING.md))
