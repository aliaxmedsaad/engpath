# EngPath Roadmap

## V1 — Structured Evidence

**Status: Complete**

Core feature set built and deployed. Frontend live on GitHub Pages. Backend live on Render. Gemini integration working.

- [x] Structured project fields
- [x] Manual AI analysis button
- [x] Structured evidence objects
- [x] Evidence page grouped by ICE attributes
- [x] Dashboard showing evidence coverage
- [x] Manual editing / approval / rejection of AI evidence
- [x] Migration from old V0 project format
- [x] Improved escaping of user-generated content
- [x] Promote V1 frontend to `index.html` (deployed to GitHub Pages)
- [x] Verify and fix Gemini endpoint, model, and authentication
- [x] Fix frontend crash on non-200 backend responses

**Known external dependency:** Gemini free tier returns HTTP 429 under quota pressure. Backend is functioning correctly. Development continues independently. See [KNOWN_ISSUES.md](KNOWN_ISSUES.md) — ISSUE-009.

---

## V2 — UI & User Experience Polish

**Status: Active**

The focus of V2 is refinement, not feature expansion. The goal is to make EngPath feel like a professional, polished product.

### Branding
- Professional EngPath logo
- Colour palette
- Typography
- Consistent brand identity

### User Interface
- Apple-inspired clean design
- Improved navigation
- Better project cards
- Improved spacing and layout
- Better responsiveness on all screen sizes
- Consistent components throughout
- Better animations and transitions
- Improved loading states

### User Experience
- Smoother interactions
- Better accessibility
- Better visual hierarchy
- Improved overall polish

> Do not add new major functionality during V2 unless strictly necessary.

---

## V3 — AI Enhancements

**Status: Ideas phase**

AI is not the current development priority. These improvements are deferred until V2 polish is complete.

- Improve Gemini prompt quality and evidence extraction
- Better confidence scoring and gap analysis
- Support for additional engineering disciplines beyond ICE
- Expanded ICE attribute coverage
- More project types and reflection prompts
- AI chat interface across all projects
- ICE Chartership readiness score

---

## V4 — Team & Mentor Accounts

**Status: Ideas phase**

- Mentor view: review and comment on engineer portfolios
- Company accounts: manage multiple graduate engineers
- Approval workflow between graduate and mentor
- Potentially support other professional frameworks beyond ICE
