---
week: "W47"
date: 2025-11-17
---

Fixed a JSONB insertion bug surfaced by RAIN's conversational onboarding rework: string values were being written directly into JSONB columns without proper JSON serialization.
