# Features

---

## Current Features (V1)

### Project Management
- Create, edit, and delete engineering projects
- Structured input fields: title, description, reflection, and other project details
- Projects stored per user in Supabase

### AI Analysis
- Manual "Analyse with AI" button on each project
- Project reflection text is sent to Gemini via the backend proxy
- AI returns structured evidence items mapped to ICE attributes

### Evidence Review
- Evidence items are displayed with pending status after AI analysis
- User can approve, reject, or edit each item individually
- Approved evidence is saved to the project record

### Evidence Page
- Displays approved evidence grouped by ICE attribute
- Makes it easy to see where evidence exists and where gaps are

### Dashboard
- Shows overall evidence coverage across ICE attributes
- Helps the user understand which attributes are well-covered and which need more work

### Data Migration
- Support for importing projects in the V0 format
- Converts V0 simple attribute tags to V1 structured evidence objects

### Content Safety
- Improved escaping of user-generated content to reduce XSS risk (partially — see Known Issues)

---

## Planned Features (V1.1 — Stabilisation)

- Fix XSS vulnerability in tag suggestions and project picker
- Authenticate `/api/map` backend endpoint
- Enforce CORS in production
- Prevent duplicate evidence on re-analysis
- Replace browser `prompt()` editing with inline UI
- Promote V1 frontend to production

---

## Planned Features (V1.2 — Export)

- Export evidence to Word document
- Export evidence to PDF
- Format suitable for ICE submission

---

## Not Yet Built

- AI chat interface across all projects
- ICE Chartership readiness score
- Experience gap analysis and recommendations
- Mentor / reviewer access
- Company / team accounts
- Support for professional frameworks other than ICE
- CV generation
