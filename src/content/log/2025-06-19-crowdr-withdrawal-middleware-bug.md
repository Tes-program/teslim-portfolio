---
week: "W25"
date: 2025-06-19
---

Fixed a production bug blocking Crowdr withdrawal requests. `WithdrawalMiddleware` was throwing "campaign no longer active" incorrectly, since the logic checked withdrawal status in a way that blocked legitimate new requests, not just actions after an already-approved withdrawal.
