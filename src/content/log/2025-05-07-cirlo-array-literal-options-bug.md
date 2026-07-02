---
week: "W19"
date: 2025-05-07
---

Fixed a Postgres array-literal error on Cirlo's event custom questions. `options` was arriving from the frontend as a real array but getting serialized to a comma string before hitting a `text[]` column; fixed with correct TypeORM `{ array: true }` column typing.
