---
week: "W26"
date: 2025-06-24
---

Fixed a `null` `userId` not-null-constraint violation on Cirlo event invites — invited (not-yet-registered) attendees need `userId` nullable, since they don't have an account yet.
