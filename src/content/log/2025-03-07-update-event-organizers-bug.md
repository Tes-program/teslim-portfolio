---
week: "W10"
date: 2025-03-07
---

Fixed a bug on the event backend where `updateEvent` was checking `event.organizer.id` (singular) against a query that actually joined `organizers` (plural, an array), a relation/property name mismatch.
