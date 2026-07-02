---
week: "W39"
date: 2025-09-25
---

Fixed a Crowdr email-template enum mismatch (new trigger values added in TypeScript but never migrated into the Postgres enum type) and a related crash from empty-string `eventId` values reaching a UUID-typed query unvalidated.
