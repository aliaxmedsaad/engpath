# Security

## Current Protections

- **Gemini API key** is held server-side only. It is never sent to the browser.
- **Rate limiting** on `/api/map`: 10 requests per IP per minute (in-memory).
- **Prompt size limit**: Requests with prompts over 25,000 characters are rejected.
- **CORS**: Configurable via `ALLOWED_ORIGINS` env var. When set, only listed origins are allowed.
- **Supabase auth**: User sessions are managed by Supabase. The frontend uses the Supabase JS client.
- **Supabase RLS**: Row Level Security is intended to restrict each user to their own data (to verify).

---

## Known Risks

### XSS — `onclick` Attribute Injection

**Severity: High**

User-generated content appears to be interpolated into `onclick` HTML attributes in the tag suggestions and project picker. If this content is not sanitised, an attacker could inject JavaScript that executes in other users' browsers.

**Required fix:** Replace `onclick` attribute patterns with DOM event listeners. Sanitise all user content before inserting into HTML.

---

### Unauthenticated `/api/map` Endpoint

**Severity: High**

The backend Gemini proxy endpoint has rate limiting but no authentication. Any client that discovers the URL can call the API at the server's expense, potentially exhausting the free tier quota or incurring charges.

**Required fix:** Require a valid Supabase JWT in the `Authorization` header. Verify the token server-side.

---

### CORS Not Enforced in Production

**Severity: High**

If `ALLOWED_ORIGINS` is not set in the Render environment, the CORS middleware allows all origins. This means any website can make requests to the backend.

**Required fix:** Set `ALLOWED_ORIGINS` on Render to the GitHub Pages domain before going live.

---

### Supabase RLS Not Verified

**Severity: High**

Row Level Security policies have not been formally tested. A misconfigured policy could allow users to read or write each other's project data.

**Required fix:** Review all RLS policies in the Supabase dashboard. Test that a logged-in user cannot access another user's rows.

---

### Duplicate Evidence on Re-Analysis

**Severity: Medium**

Running AI analysis multiple times may append duplicate items to a project's evidence list. This is a data integrity issue, not a direct security risk.

---

## API Key Handling

- `GEMINI_API_KEY` is set as an environment variable on Render. It is not committed to the repository.
- Verify the key is not present in any committed file: `git log -S GEMINI_API_KEY`
- Supabase anon key is embedded in the frontend HTML. This is expected — the anon key is public-facing and safe, provided RLS is correctly configured.

---

## Future Security Improvements

- Add authentication to `/api/map`
- Fix XSS risks in frontend
- Set `ALLOWED_ORIGINS` in production
- Verify and test Supabase RLS
- Add Content Security Policy headers to the backend
- Consider moving from in-memory rate limiting to a persistent store (Redis) to survive restarts
- Add input validation on the frontend before sending data to the backend
