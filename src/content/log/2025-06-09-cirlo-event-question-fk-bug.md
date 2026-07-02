---
week: "W24"
date: 2025-06-09
---

Fixed a foreign-key violation on Cirlo event questions: `askedById` was being set to the event's own ID instead of the creating user's ID.
