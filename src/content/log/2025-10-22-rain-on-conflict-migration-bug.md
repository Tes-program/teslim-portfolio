---
week: "W43"
date: 2025-10-22
---

Fixed a Postgres migration bug on RAIN: an `ON CONFLICT (user_id)` upsert trigger referenced a unique constraint that didn't actually exist on the table yet.
