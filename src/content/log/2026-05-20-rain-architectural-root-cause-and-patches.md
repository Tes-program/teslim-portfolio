---
week: "W21"
date: 2026-05-20
---

Root-caused RAIN/Akhi's recurring accuracy failures as an architectural risk, not just one-off bugs: the chatbot maintains its own parallel query logic against the shared database instead of calling the main backend's own dashboard service, letting it drift out of sync with what the dashboard actually shows. Flagged switching to the real dashboard API as the durable fix, alongside immediate patches: a system prompt overhaul, corrected SQL across four query types, broader intent matchers, and a model upgrade from gpt-4o-mini to gpt-4o for authenticated sessions.
