---
week: "W42"
date: 2025-10-16
---

Built a real placeholder-replacement system for Cirlo's email templates after discovering templates were shipping with literal `[Event Name]` placeholders unfilled. Made it case-insensitive and able to handle multiple naming variants of the same field (`event name` / `eventname` / `event_name`).
