# Changelog

Format: version, date, summary of changes.

---

## [Unreleased] — V1.1 Stabilisation

Planned fixes. See [ROADMAP.md](../01_Project/ROADMAP.md) and [KNOWN_ISSUES.md](../01_Project/KNOWN_ISSUES.md).

---

## [1.0.0] — V1 Structured Evidence — 2025

**Status: Built — not yet live on GitHub Pages**

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

### Known issues at release
- See [KNOWN_ISSUES.md](../01_Project/KNOWN_ISSUES.md) for the full list

---

## [0.1.0] — V0 Prototype — 2025

**Status: Live on GitHub Pages (currently served as index.html)**

### Added
- Basic project input fields
- Initial Supabase integration for auth and storage
- Simple AI attribute tagging via Gemini
- Minimal UI

---

## Future

See [ROADMAP.md](../01_Project/ROADMAP.md) for planned versions.
