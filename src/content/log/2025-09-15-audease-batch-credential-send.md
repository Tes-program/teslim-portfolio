---
week: "W38"
date: 2025-09-15
---

Built a batch version of Audease's credential-send endpoint (up to 50 learners per call). Hit a route-ordering bug where `/send-mail/batch` was being swallowed by the existing `/send-mail/:learnerId` parameterized route; fixed by reordering routes so the specific one matches first.
