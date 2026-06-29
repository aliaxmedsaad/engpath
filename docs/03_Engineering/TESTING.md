# Testing

EngPath has no automated test suite at present. The following manual test checklist should be run before any production deployment or significant change.

---

## Pre-Deployment Manual Test Checklist

Mark each item as Pass / Fail / Skip with a brief note.

### Authentication

- [ ] Register a new account with email and password
- [ ] Log in with valid credentials
- [ ] Log in with invalid credentials — expect a clear error message
- [ ] Log out — expect session to be cleared and page to return to login state
- [ ] Refresh the page while logged in — expect session to persist

---

### Project Creation

- [ ] Create a new project with all fields filled
- [ ] Create a project with only required fields
- [ ] Try to create a project with missing required fields — expect validation error
- [ ] Verify new project appears in project list

---

### Project Editing

- [ ] Edit an existing project's title and description
- [ ] Edit the reflection text
- [ ] Save changes — verify they persist after page refresh

---

### Project Deletion

- [ ] Delete a project
- [ ] Confirm the project no longer appears in the list
- [ ] Confirm no orphan data remains in Supabase (to verify in dashboard)

---

### AI Analysis

- [ ] Click "Analyse with AI" on a project with a reflection
- [ ] Confirm a loading state is shown during analysis
- [ ] Confirm evidence items are returned and displayed
- [ ] Try analysis on a project with no reflection — expect a sensible error or warning
- [ ] Try analysis when backend is unreachable — expect a clear error message

---

### Re-Analysis

- [ ] Run AI analysis on an already-analysed project
- [ ] Confirm no duplicate evidence items are created (known issue — document result)

---

### Evidence: Approve

- [ ] Approve an evidence item
- [ ] Confirm it appears as approved in the evidence list and on the dashboard

---

### Evidence: Reject

- [ ] Reject an evidence item
- [ ] Confirm it is removed from the active evidence view

---

### Evidence: Edit

- [ ] Edit an evidence item's title or description before approving
- [ ] Confirm the edited version is saved

---

### Dashboard

- [ ] Open dashboard and confirm ICE attribute coverage is shown
- [ ] Approve evidence across multiple attributes and confirm dashboard updates
- [ ] Confirm dashboard reflects approved items only (not pending/rejected)

---

### Import / Export (if applicable)

- [ ] To verify — confirm whether import/export is present in V1 and test accordingly

---

### Refresh / Persistence

- [ ] Add evidence, refresh the page, confirm evidence is still present
- [ ] Log out and log back in — confirm all projects and evidence persist

---

### XSS Testing

- [ ] Enter `<script>alert(1)</script>` as a project title — confirm it is not executed
- [ ] Enter `"><img src=x onerror=alert(1)>` as a reflection — confirm it is not executed
- [ ] Enter the above in tag fields or any other user input — confirm no execution

---

### Malformed / Edge Case Data

- [ ] Enter very long text in all fields (>10,000 characters) — confirm graceful handling
- [ ] Enter only whitespace in required fields — confirm validation rejects it
- [ ] Submit AI analysis with a very long reflection (>25,000 characters) — expect a size error

---

## Smoke Test — Gemini API

Run before any API-related change:

```bash
npm run test:gemini
```

Confirm the response is valid structured JSON and matches the expected evidence schema.
