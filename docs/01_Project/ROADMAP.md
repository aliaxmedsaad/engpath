# EngPath Roadmap

## V1 — Structured Evidence (Current)

**Status: Active stabilisation**

Core feature set is built. Focus is on fixing known issues before promoting to production.

- [x] Structured project fields
- [x] Manual AI analysis button
- [x] Structured evidence objects
- [x] Evidence page grouped by ICE attributes
- [x] Dashboard showing evidence coverage
- [x] Manual editing / approval / rejection of AI evidence
- [x] Migration from old V0 project format
- [x] Improved escaping of user-generated content
- [ ] Promote V1 frontend (`engpath.html`) to `index.html`
- [ ] Verify Gemini endpoint and model with live smoke test
- [ ] Fix XSS risk in tag suggestions / project picker
- [ ] Authenticate `/api/map` endpoint
- [ ] Enforce `ALLOWED_ORIGINS` in production
- [ ] Verify Supabase RLS policies

---

## V1.1 — Bug Fixes, Security, UX Polish

**Status: Planned**

- Fix all known security issues (XSS, CORS, unauthenticated endpoint)
- Prevent duplicate evidence on re-analysis
- Replace browser `prompt()` dialogs with proper inline editing UI
- Improve error messages for failed AI analysis
- General UX polish based on early user feedback

---

## V1.2 — Export

**Status: Planned**

- Export evidence to Word document
- Export evidence to PDF
- Format output suitable for ICE submission

---

## V2 — AI Career Coach

**Status: Ideas phase**

- AI chat interface across all projects
- Readiness score: how close is the user to Chartership?
- Experience gap analysis: which ICE attributes are under-evidenced?
- Personalised suggestions for what projects or activities to pursue

---

## V3 — Team / Mentor / Company Accounts

**Status: Ideas phase**

- Mentor view: review and comment on engineer portfolios
- Company accounts: manage multiple graduate engineers
- Approval workflow between graduate and mentor
- Potentially support other professional frameworks beyond ICE
