---
week: "W16"
date: 2025-04-14
---

Fixed a real multi-tenancy bug: new accounts were seeing other accounts' event data — queries weren't filtering by the logged-in user's community. Caught during manual testing, not theoretical.
