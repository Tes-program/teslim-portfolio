---
week: "W13"
date: 2025-03-27
---

Fixed a query-alias bug in student filtering. `student` vs `prospective_student` was used inconsistently in the same query builder, silently dropping filters.
