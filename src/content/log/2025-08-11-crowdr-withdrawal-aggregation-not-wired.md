---
week: "W33"
date: 2025-08-11
---

Found and fixed a subtle bug in Crowdr's campaign summary endpoint: the withdrawal-status aggregation logic existed in the code but was never actually wired into the aggregation pipeline. Looked implemented, did nothing.
