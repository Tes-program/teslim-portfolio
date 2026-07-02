---
week: "W06"
date: 2026-02-03
---

Fixed a CampusSales `LoggingInterceptor` crash from calling `Object.keys()` on undefined request bodies (GET requests don't have one), and a gender-enum case-sensitivity mismatch (`"male"` from the frontend vs. `"Male"` required by the Postgres enum).
