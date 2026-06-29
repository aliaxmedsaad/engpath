# Deployment

## Frontend — GitHub Pages

- **URL:** `https://<username>.github.io/<repo>/` (to confirm exact URL)
- **Source:** `index.html` in the root of the `main` branch
- **Deploy trigger:** Automatic on push to `main`
- **No build step** — the file is served as-is

### Current Issue

GitHub Pages serves `index.html`, which is currently the V0 prototype. V1 is in `engpath.html`. To go live with V1:

1. Rename `index.html` → `index-v0-backup.html`
2. Rename `engpath.html` → `index.html`
3. Commit and push

See [KNOWN_ISSUES.md](../01_Project/KNOWN_ISSUES.md) ISSUE-001.

---

## Backend — Render

- **URL:** To confirm from Render dashboard
- **Runtime:** Node.js >= 18
- **Deploy trigger:** Automatic on push to `main`
- **Start command:** `npm start` (runs `node server.js`)

### Required Environment Variables on Render

| Variable | Description | Required |
|---|---|---|
| `GEMINI_API_KEY` | Google Gemini API key | Yes |
| `GEMINI_MODEL` | Gemini model name (e.g. `gemini-2.0-flash`) | Recommended — default in code needs verification |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed CORS origins | Yes — must include GitHub Pages domain |
| `PORT` | Port to listen on | Optional — Render sets this automatically |

> If `ALLOWED_ORIGINS` is not set, CORS allows all origins. Set it explicitly in production.

### Verifying the Backend

```bash
curl https://<your-render-url>/
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

## Deployment Checklist (Pre-Launch)

- [ ] Gemini endpoint and model verified with smoke test (`npm run test:gemini`)
- [ ] `ALLOWED_ORIGINS` set on Render to the GitHub Pages domain
- [ ] Supabase RLS policies verified
- [ ] V1 frontend promoted to `index.html`
- [ ] Manual test pass completed (see [TESTING.md](../03_Engineering/TESTING.md))
- [ ] XSS and security issues resolved
- [ ] `/api/map` endpoint authenticated
