# Known Issues

Issues identified as of 2026-06-29. Priorities: **Critical**, **High**, **Medium**, **Low**.

---

## ISSUE-001 — Wrong Frontend Deployed on GitHub Pages

**Priority: High**
**Status: Open**

GitHub Pages is serving the old `index.html` (V0 prototype). V1 is in `engpath.html` and has not been promoted.

**Action required:**
1. Rename `index.html` → `index-v0-backup.html`
2. Rename `engpath.html` → `index.html`
3. Commit and push — GitHub Pages will serve V1 automatically

---

## ISSUE-002 — Gemini Endpoint / Model Unverified

**Priority: Critical**
**Status: Open**

The backend `server.js` calls a Gemini API endpoint and model that have not been confirmed with a live smoke test. The endpoint URL and model name may be incorrect.

**Action required:**
- Run `npm run test:gemini` against the real API with a valid key
- Verify the response is well-formed before changing any API code
- Update `GEMINI_MODEL` env var on Render if needed

> Do not change API code based on assumptions. Test first.

---

## ISSUE-003 — XSS Risk in Tag Suggestions / Project Picker

**Priority: High**
**Status: Open**

`onclick` handlers in the tag suggestions and project picker UI may be vulnerable to XSS if user-generated content is interpolated into HTML attributes without sanitisation.

**Action required:**
- Audit all `onclick` attribute patterns that include user data
- Replace with event listeners on DOM elements where possible
- Sanitise all user content before inserting into HTML

---

## ISSUE-004 — `/api/map` Endpoint Unauthenticated

**Priority: High**
**Status: Open**

The backend `/api/map` endpoint has rate limiting but no authentication check. Any client that knows the URL can call the Gemini API at the server's expense.

**Action required:**
- Require a valid Supabase JWT in the `Authorization` header
- Verify the token server-side before forwarding to Gemini

---

## ISSUE-005 — `ALLOWED_ORIGINS` Not Enforced in Production

**Priority: High**
**Status: Open**

If `ALLOWED_ORIGINS` is not set as an environment variable on Render, the CORS middleware allows all origins. This needs to be explicitly configured.

**Action required:**
- Set `ALLOWED_ORIGINS` on Render to the GitHub Pages domain
- Verify the CORS middleware rejects requests from unknown origins

---

## ISSUE-006 — Re-analysis May Create Duplicate Evidence

**Priority: Medium**
**Status: Open**

Running AI analysis on a project that has already been analysed may append duplicate evidence items rather than replacing or merging them.

**Action required:**
- Decide on the intended behaviour (replace vs. merge vs. append with dedup)
- Implement deduplication or a clear re-analysis flow

---

## ISSUE-007 — Evidence Editing Uses Browser `prompt()` Dialogs

**Priority: Medium**
**Status: Open**

Editing evidence items currently uses the browser's built-in `prompt()` dialog, which is a poor UX and cannot be styled or validated properly.

**Action required:**
- Replace with inline form editing or a modal dialog

---

## ISSUE-008 — Supabase RLS Policies Not Verified

**Priority: High**
**Status: Open**

Row Level Security (RLS) policies on Supabase tables have not been formally verified. If RLS is misconfigured, users could read or write each other's data.

**Action required:**
- Review RLS policies in the Supabase dashboard
- Write and run tests that confirm a user cannot access another user's projects
