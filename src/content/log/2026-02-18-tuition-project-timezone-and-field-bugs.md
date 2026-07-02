---
week: "W08"
date: 2026-02-18
---

Fixed a timezone bug on The Tuition Project where Postgres timestamps without timezone info made fresh donations display as "1 hour ago," and a `fullName` vs. `full_name` field mismatch that was silently making every donor show as "Anonymous."
