# Code Reviews

---

## CR-001 — V1 Production Readiness Review

**Date:** 2026-06-29
**Reviewer:** Claude Code (AI-assisted review)
**Scope:** `server.js`, `engpath.html`, overall architecture
**Overall score:** ~5/10 for production readiness
**Status: Open — actions pending**

---

### Summary

The V1 implementation has a working core but several issues need to be resolved before it is suitable for production use. The main concerns are a combination of security gaps, an unverified external dependency (Gemini), and the fact that the wrong version of the frontend is currently deployed.

---

### Findings

#### Critical

**FIND-001 — Gemini endpoint/model unverified**
The backend calls an endpoint (`/v1beta/interactions`) and model name that have not been confirmed with a live test. The feature may not work at all in production.
- Action: Run `npm run test:gemini` with a real API key before any further API code changes.

**FIND-002 — Wrong frontend deployed**
GitHub Pages is serving `index.html` (V0). Users cannot access V1.
- Action: Rename files and redeploy. See ISSUE-001.

#### High

**FIND-003 — XSS risk in tag suggestions / project picker**
User-generated content appears to be interpolated into `onclick` HTML attributes. This is an XSS vector.
- Action: Replace with DOM-based event listeners and sanitise user content.

**FIND-004 — `/api/map` unauthenticated**
The Gemini proxy endpoint accepts requests from any client with no authentication. Anyone who discovers the URL can exhaust the API quota.
- Action: Require a valid Supabase JWT in the `Authorization` header.

**FIND-005 — CORS not enforced**
`ALLOWED_ORIGINS` defaults to allowing all origins if not set. Must be explicitly configured on Render.
- Action: Set `ALLOWED_ORIGINS` env var in Render to the GitHub Pages domain.

**FIND-006 — Supabase RLS not verified**
RLS policies have not been formally tested. A misconfigured policy could allow cross-user data access.
- Action: Review and test RLS in Supabase dashboard.

#### Medium

**FIND-007 — Re-analysis creates duplicate evidence**
Running AI analysis more than once on the same project may append duplicate items.
- Action: Implement deduplication or a clear replace-on-reanalyse flow.

**FIND-008 — Evidence editing via browser `prompt()`**
Poor UX and not testable. Should be replaced with inline UI.
- Action: Implement inline editing or a modal.

---

### Actions Outstanding

| ID | Finding | Owner | Status |
|---|---|---|---|
| FIND-001 | Verify Gemini endpoint/model | Engineering | Open |
| FIND-002 | Promote V1 to index.html | Engineering | Open |
| FIND-003 | Fix XSS in onclick handlers | Engineering | Open |
| FIND-004 | Authenticate /api/map | Engineering | Open |
| FIND-005 | Set ALLOWED_ORIGINS on Render | Engineering | Open |
| FIND-006 | Verify Supabase RLS | Engineering | Open |
| FIND-007 | Fix duplicate evidence | Engineering | Open |
| FIND-008 | Replace browser prompt() | Engineering | Open |
