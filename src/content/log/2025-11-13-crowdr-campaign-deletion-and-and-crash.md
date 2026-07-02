---
week: "W46"
date: 2025-11-13
---

Added campaign deletion/archiving to Crowdr (soft and hard delete, blocked when active withdrawals exist) and fixed a MongoDB aggregation crash where an empty `$and` array was being constructed and passed to a query that requires it non-empty when present.
