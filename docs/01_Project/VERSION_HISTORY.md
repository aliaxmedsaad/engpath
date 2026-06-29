# Version History

## V0 — Original Prototype

**Status: Deployed (currently live on GitHub Pages)**

The initial proof-of-concept. Engineers could enter project information and receive a basic AI-assisted mapping to ICE attributes. Data was stored in a simple format in Supabase.

- Basic project input fields
- Simple AI attribute tagging
- Minimal UI

> The V0 frontend (`index.html`) is still what GitHub Pages serves. It has not yet been replaced by V1.

---

## V1 — Structured Evidence Upgrade

**Status: Built, stabilising — not yet live on GitHub Pages**

A significant rework of the data model and user workflow.

Key changes:
- Evidence is now stored as structured objects, not simple tags
- AI analysis is triggered manually (not automatic)
- Evidence page grouped by ICE attribute
- Dashboard showing evidence coverage at a glance
- Users can approve, reject, or edit individual AI-generated evidence items
- Migration support for V0 project data
- Improved escaping of user-generated content

> V1 lives in `engpath.html`. It will be promoted to `index.html` once stabilisation is complete.

---

## V1.1 — Stabilisation (Planned)

Targeted fixes for security, bugs, and UX issues identified during V1 development.

See [ROADMAP.md](ROADMAP.md) for the full list.

---

## V1.2 — Export (Planned)

Word and PDF export of structured evidence.

---

## V2 — AI Career Coach (Future idea)

AI chat, readiness score, experience gap analysis.

---

## V3 — Team Accounts (Future idea)

Mentor dashboards, company accounts, approval workflows.
