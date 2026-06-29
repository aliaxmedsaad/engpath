# Meeting Notes

Log of product and engineering discussions. Add entries for any decision-making conversation.

---

## 2026-06-29 — Documentation Setup and V1 Status Review

**Participants:** Engineering (solo session)
**Format:** Internal planning session

### Discussion

- Decided to create a structured documentation system under `docs/` using Markdown.
- Confirmed that GitHub Pages serves `index.html` by default — V1 in `engpath.html` is not live.
- Decided to rename the frontend files (`engpath.html` → `index.html`) as a separate, deliberate step after the documentation is in place.
- Confirmed that the Gemini endpoint and model name must be verified by running a live smoke test (`npm run test:gemini`) before making any changes to the API integration code. Do not change the code based on assumptions.

### Decisions Made

1. All documentation will be Markdown files in the `docs/` directory, committed to the repository.
2. The V1 frontend promotion (`engpath.html` → `index.html`) is a pending action, not done in this session.
3. The Gemini smoke test must be run with a real API key before any backend API changes.

### Next Actions

- [ ] Run Gemini smoke test with real API key
- [ ] Fix known security issues (XSS, unauthenticated endpoint, CORS)
- [ ] Rename frontend files to promote V1 to production
- [ ] Verify Supabase RLS policies

---

_Add new entries above this line, newest first._
