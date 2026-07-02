---
week: "W05"
date: 2026-01-30
---

Fixed a run of real schema mismatches on RAIN surfaced while building out session/chat-history features: queries referencing a `raindrops` table that didn't exist (the real table was `reward_activities`), missing auto-increment primary keys causing null-constraint violations, and a UUID-typed column conflicting with the app's own `rain_`-prefixed session ID format. Resolved by loosening the column to VARCHAR rather than forcing IDs into UUID format.
