---
week: "W08"
date: 2025-02-17
---

Fixed a broken event-update endpoint on the event-ticketing backend. The PATCH endpoint wasn't handling partial updates correctly, so simplified it to rely on TypeORM's merge behavior with `skipMissingProperties` validation.
