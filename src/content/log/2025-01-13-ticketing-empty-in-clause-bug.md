---
week: "W03"
date: 2025-01-13
---

Fixed a TypeORM/PostgreSQL bug on an event-ticketing backend: a sales-stats subquery used `WHERE ticketTypeId IN (:...ticketIds)` where `ticketIds` could be an empty array, producing an invalid `IN ()` clause. Fixed by short-circuiting the stats query when the tickets array is empty.
