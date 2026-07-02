---
week: "W04"
date: 2026-01-23
---

Fixed the Crowdr KYC ObjectId corruption bug at its actual scale: 1,392 of 1,393 KYC records (99.6%) were affected, not a handful. Migrated string references to proper ObjectIds and added validation to prevent recurrence.
