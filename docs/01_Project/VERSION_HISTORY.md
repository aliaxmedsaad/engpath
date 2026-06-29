# Version History

## V0 — Original Prototype

**Status: Superseded**

The initial proof-of-concept. Engineers could enter project information and receive a basic AI-assisted mapping to ICE attributes. Data was stored in a simple format in Supabase.

- Basic project input fields
- Simple AI attribute tagging
- Minimal UI

> V0 (`index.html`) has been replaced by V1. It is no longer served on GitHub Pages.

---

## V1 — Structured Evidence Upgrade

**Status: Live on GitHub Pages and Render**

A significant rework of the data model and user workflow. V1 is now the production version.

### Features delivered
- Evidence is now stored as structured objects, not simple tags
- AI analysis is triggered manually (not automatic)
- Evidence page grouped by ICE attribute
- Dashboard showing evidence coverage at a glance
- Users can approve, reject, or edit individual AI-generated evidence items
- Migration support for V0 project data
- Improved escaping of user-generated content

### Deployment milestones
- V1 frontend (`engpath.html`) promoted to `index.html` and deployed to GitHub Pages
- Backend deployed to Render with auto-deploy from `main`
- Gemini API endpoint corrected to `v1beta/models/{model}:generateContent`
- Gemini model updated to `gemini-2.0-flash` (confirmed working on v1beta)
- Gemini authentication fixed — `x-goog-api-key` header correctly applied
- Frontend crash on non-200 backend responses fixed (`items.forEach` TypeError resolved)

### Known issue at close
- Gemini free tier returning HTTP 429 under quota pressure. External dependency — not a blocker. See [KNOWN_ISSUES.md](KNOWN_ISSUES.md) ISSUE-009.

---

## V2 — UI & User Experience Polish

**Status: Active**

Focus is refinement and polish, not new features. See [ROADMAP.md](ROADMAP.md) for full scope.

---

## V3 — AI Enhancements (Planned)

Improved AI quality, additional disciplines, expanded engineering content.

---

## V4 — Team & Mentor Accounts (Future idea)

Mentor dashboards, company accounts, approval workflows.
