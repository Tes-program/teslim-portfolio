---
week: "W37"
date: 2025-09-11
---

Cleaned up several rough edges on RAIN after first real end-to-end chatbot responses: malformed session UUIDs, inserts against columns that didn't exist yet in the schema, and literal markdown asterisks leaking into chat responses. Fixed the asterisk issue properly via `ReactMarkdown` rendering rather than string-stripping.
