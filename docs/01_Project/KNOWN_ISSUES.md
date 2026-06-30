# Known Issues

Last updated: 2026-06-30. Priorities: **Critical**, **High**, **Medium**, **Low**.

---

## ISSUE-001 — Wrong Frontend Deployed on GitHub Pages

**Priority: High**
**Status: Resolved**

~~GitHub Pages was serving the old `index.html` (V0 prototype). V1 is in `engpath.html` and had not been promoted.~~

V1 (`engpath.html`) has been promoted to `index.html` and is now live on GitHub Pages.

---

## ISSUE-002 — Gemini Endpoint / Model Unverified

**Priority: Critical**
**Status: Resolved**

~~The backend `server.js` called a Gemini API endpoint and model that had not been confirmed with a live smoke test.~~

Endpoint corrected to `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`. Model confirmed working. Authentication fixed. Backend successfully reaching Gemini.

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

Editing evidence items currently uses the browser's built-in `prompt()` dialog, which is poor UX and cannot be styled or validated properly.

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

---

## ISSUE-009 — Gemini HTTP 429 (Quota / Rate Limit)

**Priority: Medium**
**Status: Open — external dependency**

The Gemini free tier is returning HTTP 429 responses under quota pressure. The backend is functioning correctly — the endpoint, model, authentication, and request format have all been verified. This is a limitation of the Google AI free tier.

**Current behaviour:**
- Backend receives 429 from Gemini
- Frontend displays the error message to the user gracefully (crash fixed as of V1)
- No data is lost; the user can retry manually

**Action required:**
- Monitor Google AI Studio quota usage
- Consider upgrading to a paid Gemini tier when the product moves beyond personal testing
- Development and UI work continues independently of this issue

> This issue does not block V2 development.

---

## ISSUE-010 — Hero SVG Assets Oversized (~3.2MB each)

**Priority: Medium**
**Status: Open**

Hero SVG assets are visually correct but currently oversized (~3.2MB each). Optimisation required in a later performance pass.

The homepage hero illustrations (`assets/illustrations/hero-bridge-light.svg` and `hero-bridge-dark.svg`) are Adobe/vector-traced artwork containing tens of thousands of path nodes, replacing a weak CSS placeholder. Visual correctness was prioritised over file size for this pass.

**Action required:**
- Run through SVGO or re-export lighter, simplified versions
- Re-verify visual fidelity after optimisation
