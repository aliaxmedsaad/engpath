# Lessons Learned

Practical lessons from building EngPath. Kept so future decisions don't repeat avoidable mistakes.

---

## LL-001 — GitHub Pages Serves `index.html` by Default

**Context:** V1 was built in `engpath.html` while `index.html` still contained the V0 prototype. The live site continued to serve V0 because GitHub Pages always serves `index.html`.

**Lesson:** When using GitHub Pages, the default entry point is always `index.html` at the repo root. If you develop a new version in a differently named file, users won't see it until the file is renamed.

**Action:** Whenever creating a new version of a single-file frontend, plan the rename step explicitly. Do not leave it as a "do later" item.

---

## LL-002 — Verify the Deployed Frontend Before Debugging Features

**Context:** Time was spent debugging features in V1 that weren't visible to users because V0 was still deployed.

**Lesson:** Before investigating a bug or a missing feature, first confirm which version is actually running in production. Check the live URL, not the local file.

---

## LL-003 — Git Commits Are Safety Checkpoints

**Context:** During rapid V1 development, the ability to roll back to a known-good state was important.

**Lesson:** Commit after every meaningful, working change — even small ones. A commit is a checkpoint. Without frequent commits, a mistake that breaks something working means losing an unknown amount of progress.

---

## LL-004 — AI Coding Tools Can Disagree — Runtime Tests Decide

**Context:** Different AI tools suggested different Gemini endpoint URLs and model names. It was unclear which was correct without a live test.

**Lesson:** When an AI coding assistant suggests an external API endpoint or model name, do not assume it is correct. Run a real smoke test against the API before writing code that depends on the specific value. The runtime result is the ground truth.

---

## LL-005 — Markdown Is Better Than Word for Repo Documentation

**Context:** Documentation was initially considered in Word format.

**Lesson:** Markdown files stored in the repository are version-controlled, diffable, searchable, and rendered automatically by GitHub. Word documents are none of these things. For any documentation that should live alongside code, use Markdown.
