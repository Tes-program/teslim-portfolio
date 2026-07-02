---
week: "W30"
date: 2025-07-22
---

Built a click-tracking system for RAIN: a lightweight endpoint to record a click per news item (IP + session, deduped within a 5-minute window) and a separate metrics endpoint for per-article and daily aggregate stats. Split into two endpoints since the news feed itself returns an array with no natural single-item route to hang tracking off.
