---
week: "W24"
date: 2025-06-11
---

Fixed a not-null constraint violation on `event_organizers.email` on Cirlo. The DTO allowed omitting email but the column required it.
