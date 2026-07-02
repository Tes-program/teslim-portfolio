---
week: "W02"
date: 2026-01-08
---

Fixed a Rodney data-model bug where Firebase UIDs were being queried against MongoDB's `_id` field as if they were ObjectIds, plus a related mismatch where no `Conversation` model existed (only `ChatLog`), requiring the query logic to be corrected to match what the codebase actually had.
