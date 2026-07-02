---
week: "W34"
date: 2024-08-19
---

Chased a duplicate-insert bug in role creation, caused by a missing existence check plus a race condition. Fixed with a pre-check and a proper transaction with rollback.
