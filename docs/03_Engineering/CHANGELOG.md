# Changelog

Format: version, date, summary of changes.

---

## [Unreleased] — V2 UI & UX Polish

In progress. See [ROADMAP.md](../01_Project/ROADMAP.md) for scope.

---

## [1.1.0] — V1 Deployment & Stabilisation — 2026-06-30

### Fixed
- Gemini API endpoint corrected from `/v1beta/interactions` to `/v1beta/models/gemini-2.0-flash:generateContent`
- Gemini model updated to `gemini-2.0-flash` — previous model (`gemini-1.5-flash`) removed from v1beta
- Gemini authentication confirmed working — `x-goog-api-key` header correctly passed
- Frontend crash fixed: `aiMap()` was returning `kwFallback()` (an object `{}`) on non-200 responses, causing `items.forEach is not a function` TypeError in `analyseProject()`
- Non-200 backend responses now surface the error message to the user via toast instead of crashing

### Deployed
- V1 frontend (`engpath.html`) promoted to `index.html` — now live on GitHub Pages
- Backend live on Render with auto-deploy from `main`
- Single POST request per button click confirmed (no duplicate calls)

### Added
- Temporary debug logging in backend (`===== GEMINI DEBUG =====`) to assist with authentication diagnosis

---

## [1.0.0] — V1 Structured Evidence — 2025

**Status: Live**

### Added
- Structured evidence objects with title, description, ICE attribute, source, and status fields
- Manual "Analyse with AI" button to trigger Gemini analysis
- Evidence page grouped by ICE attribute
- Dashboard showing evidence coverage across ICE attributes
- Approve / reject / edit UI for AI-generated evidence items
- Migration support for V0 project format

### Changed
- Evidence is now stored as structured objects rather than simple attribute tags
- Improved escaping of user-generated content throughout the frontend

---

## [0.1.0] — V0 Prototype — 2025

**Status: Superseded by V1**

### Added
- Basic project input fields
- Initial Supabase integration for auth and storage
- Simple AI attribute tagging via Gemini
- Minimal UI

---

## Future

See [ROADMAP.md](../01_Project/ROADMAP.md) for planned versions.
