---
week: "W10"
date: 2025-03-07
---

Fixed a PostgreSQL/TypeORM migration failure converting a `type` column from VARCHAR to a Postgres enum — casting an existing column default directly to the new enum type doesn't work. Fixed by dropping the default before the type change and re-adding it with an explicit cast afterward.
