---
week: "W38"
date: 2025-09-16
---

Split Audease credential resending into its own dedicated endpoint after batch-sending kept hitting duplicate-email constraint violations for learners who already had accounts. Cleaner than making one endpoint handle both create and resend semantics.
