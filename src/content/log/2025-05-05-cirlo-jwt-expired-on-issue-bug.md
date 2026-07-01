---
week: "W19"
date: 2025-05-05
---

Fixed a serious JWT bug on Cirlo: access tokens were issued already expired (`exp` and `iat` set to the same timestamp) because `JWT_ACCESS_EXPIRES_IN` was read as a string and passed straight into `moment().add()`, which silently no-ops on non-numeric input. Fixed with explicit `parseInt` and fallback defaults.
