---
week: "W15"
date: 2025-04-07
---

Wrote several defensive Postgres migrations (conditional `CREATE TYPE` / `ADD CONSTRAINT` using `DO $$ ... $$` blocks) to sync schema drift, including fixing an invalid `ADD CONSTRAINT IF NOT EXISTS`, which isn't valid Postgres syntax.
