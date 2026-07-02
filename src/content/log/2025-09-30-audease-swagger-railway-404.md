---
week: "W40"
date: 2025-09-30
---

Fixed Audease's Swagger docs 404ing specifically on Railway in production. The setup was conditionally gated to development mode, and Railway defaults `NODE_ENV` to production. Resolved by removing the gate entirely rather than adding another environment flag, since API docs have real value in staging too.
