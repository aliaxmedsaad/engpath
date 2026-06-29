# Architecture Decision Records

Decisions that shaped the product. Format: date, decision, reason, alternatives considered, status.

---

## ADR-001 — Manual AI Analysis Instead of Automatic

**Date:** 2025 (V1 development)
**Status:** Accepted

**Decision:** The AI analysis step is triggered manually by the user clicking "Analyse with AI", not automatically when a project is saved.

**Reason:**
- Keeps Gemini API costs under control — calls only happen when the user explicitly requests them
- Gives users control over when their data is sent to an external AI service
- Avoids unnecessary calls while the user is mid-edit

**Alternatives considered:**
- Automatic analysis on save — rejected due to cost and privacy concerns
- Automatic analysis with debounce — rejected for same reasons

---

## ADR-002 — Structured Evidence Objects Instead of Simple Attribute Tags

**Date:** 2025 (V1 development)
**Status:** Accepted

**Decision:** AI analysis produces structured evidence objects (title, description, ICE attribute, source, status) rather than simple lists of attribute tags.

**Reason:**
- Structured objects are more useful for a Chartership submission than bare tags
- Users can review, edit, and approve individual pieces of evidence
- Better data for future export features (Word/PDF)

**Alternatives considered:**
- Simple attribute tag lists (V0 approach) — replaced by this decision
- Free-text AI output with no schema — rejected due to unpredictability

---

## ADR-003 — Markdown Documentation Instead of Word Documents

**Date:** 2026-06-29
**Status:** Accepted

**Decision:** All project documentation is written as Markdown files stored in the repository under `docs/`.

**Reason:**
- Markdown lives alongside code in Git — version controlled, diffable, searchable
- No proprietary format or tool dependency
- Works with GitHub's built-in rendering

**Alternatives considered:**
- Word documents — rejected; not version-controlled, hard to diff, not visible in GitHub
- Notion or Confluence — rejected; external dependency, not co-located with code

---

## ADR-004 — GitHub Pages (Frontend) + Render (Backend) + Supabase (Storage)

**Date:** 2025 (initial setup)
**Status:** Accepted

**Decision:** Host the static frontend on GitHub Pages, the Node.js backend on Render, and use Supabase for authentication and database storage.

**Reason:**
- All three services have free tiers suitable for a personal MVP
- GitHub Pages is zero-config for static sites in a GitHub repo
- Render handles Node.js deployments simply
- Supabase provides auth, a Postgres database, and row-level security out of the box

**Alternatives considered:**
- Vercel or Netlify for the full stack — possible future migration
- Firebase — rejected; Supabase is more familiar and open-source-friendly
- Self-hosted backend — rejected; unnecessary complexity for MVP

---

## ADR-005 — Keep Gemini Free Tier for Personal MVP Testing

**Date:** 2025 (initial setup)
**Status:** Accepted

**Decision:** Use Google Gemini API on the free tier for MVP development and personal testing. Do not commit to a paid plan until the product is validated.

**Reason:**
- Free tier is sufficient for low-volume testing
- Avoids financial commitment before product-market fit
- Manual analysis trigger (ADR-001) keeps usage low

**Alternatives considered:**
- OpenAI GPT-4 — higher cost, less free allowance
- Anthropic Claude API — possible future option
- Local LLM — rejected; too complex to deploy on Render free tier

**Risk:** Free tier rate limits and model availability may change. See [KNOWN_ISSUES.md](KNOWN_ISSUES.md) — the current Gemini endpoint/model needs verification.
