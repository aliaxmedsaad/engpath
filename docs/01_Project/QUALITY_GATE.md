# EngPath Quality Gate

**Version:** 1.0
**Status:** Active

---

# Purpose

The EngPath Quality Gate defines the minimum standard every feature, asset, or improvement must meet before being merged into `main`.

Its purpose is to ensure that EngPath grows consistently without sacrificing quality, maintainability, or user experience.

The goal is **continuous improvement**, not perfection.

---

# Core Philosophy

> **Build with discipline. Ship with confidence. Improve continuously.**

EngPath follows an iterative development process.

We build valuable features first, then return to refine and optimise them in future iterations.

Progress should never stop because of minor polish, but poor-quality work should never be merged simply because it functions.

---

# Rule 1 — Preserve Existing Functionality

Every change must preserve existing functionality unless the change explicitly intends to replace it.

This includes:

- Authentication
- Dashboard
- Projects
- ICE Tracker
- Evidence Log
- AI functionality
- Backend/API integration

Regression should always be treated as a bug.

---

# Rule 2 — Follow the Design Library

All user interface work must follow the approved Design Library.

This includes:

- Approved logo
- Approved illustrations
- Colour palette
- Typography
- Layout system
- Motion principles
- Spacing system

The implementation should follow the approved design rather than reinterpret it.

---

# Rule 3 — Asset Verification

No visual asset is considered approved until all of the following are true:

- Stored in the correct folder
- Correct filename
- Rendered and visually inspected
- Compared with the approved reference
- Referenced correctly by the frontend

Never approve an asset based only on its filename.

---

# Rule 4 — Documentation

Important engineering decisions should always be documented.

Update the appropriate document whenever required:

- VERSION_HISTORY.md
- DECISIONS.md
- KNOWN_ISSUES.md
- LESSONS_LEARNED.md

Future contributors should understand *why* decisions were made, not only *what* changed.

---

# Rule 5 — Performance

Performance matters, but not at the expense of correctness.

Large temporary assets are acceptable when required for visual quality, provided they are documented and scheduled for optimisation.

Technical debt should always be visible and intentional.

---

# Rule 6 — Build → Ship → Improve

EngPath follows iterative development.

### Stage 1

- Design
- Build
- Test
- Ship

### Stage 2

- Review
- Refine
- Optimise
- Polish

Do not delay meaningful progress chasing tiny visual improvements.

---

# Rule 7 — Source of Truth

The repository is the single source of truth.

Approved design assets belong in:

```
design/
```

Production assets used by the website belong in:

```
assets/
```

The frontend must reference approved production assets.

---

# Rule 8 — Merge Checklist

Before merging into `main`, verify:

- Existing functionality preserved
- Design reviewed
- Responsive layout verified
- Documentation updated
- Assets verified
- No unnecessary files included
- Performance considerations documented

If any item fails, resolve it before merging.

---

# Rule 9 — Ship Decisions, Not Debates

Make informed decisions.

Document them.

Build them.

Move forward.

If a better approach is discovered later, update the decision deliberately rather than repeatedly reopening previously settled discussions.

Consistency is more valuable than endless reconsideration.

---

# Rule 10 — AI Collaboration

Artificial intelligence is used to accelerate development, not to replace engineering judgement.

Responsibilities within the EngPath project are divided as follows:

- Product decisions are made by the project owner.
- Design direction is defined before implementation.
- AI assistants implement approved designs and functionality.
- Significant architectural or design decisions must be documented before becoming the new standard.

The repository—not the conversation—is the permanent source of truth.

When uncertainty exists, update the documentation first, then update the code.

---

# The EngPath Standard

Every contribution should leave the project in a better state than it was found.

The objective is not to create the largest engineering platform.

The objective is to create one that engineers enjoy using because it is reliable, intuitive, and thoughtfully designed.

Build with discipline.

Ship with confidence.

Improve continuously.
