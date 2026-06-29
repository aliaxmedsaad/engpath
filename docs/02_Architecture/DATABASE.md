# Database

EngPath uses Supabase (managed PostgreSQL) for data storage. The schema below reflects what is inferred from the application code. Verify against the actual Supabase dashboard.

---

## Current Schema (Inferred)

### `projects` table

| Column | Type | Notes |
|---|---|---|
| `id` | UUID | Primary key, auto-generated |
| `user_id` | UUID | Foreign key → Supabase auth user. Used by RLS. |
| `data` | JSONB | The full project object serialised as JSON |
| `created_at` | Timestamp | Auto-set by Supabase |
| `updated_at` | Timestamp | To verify — may not exist |

#### `data` JSON object structure (inferred)

```json
{
  "title": "string",
  "description": "string",
  "reflection": "string",
  "evidenceItems": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "iceAttribute": "string",
      "source": "string",
      "status": "pending | approved | rejected"
    }
  ]
}
```

> This structure is inferred from application behaviour. Verify against actual Supabase table definitions.

---

## Row Level Security

RLS should be enabled on the `projects` table so that users can only read and write their own rows. Policies should enforce `user_id = auth.uid()`.

**Status: To verify.** See [KNOWN_ISSUES.md](../01_Project/KNOWN_ISSUES.md) ISSUE-008.

---

## Current Limitations

- All project data is stored in a single JSONB column. This makes it hard to query individual fields or evidence items.
- No separate `evidence` table — evidence items are embedded in the project JSON.
- No audit log of changes.
- No soft-delete.

---

## Future: Normalised Schema

A future version might split data into proper relational tables:

- `projects` — one row per project, with scalar columns for title, description, etc.
- `reflections` — linked to projects
- `evidence_items` — one row per evidence item, linked to projects and a competency framework table
- `competency_frameworks` — ICE attributes and other frameworks
- `competency_attributes` — individual attributes within a framework

This would enable better querying, reporting, and multi-framework support.
