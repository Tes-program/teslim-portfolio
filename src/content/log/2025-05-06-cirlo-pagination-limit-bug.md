---
week: "W19"
date: 2025-05-06
---

Fixed a Cirlo pagination bug returning far more rows than the requested limit. The count query and the data query had drifted apart, so rewrote with explicit `.offset()`/`.limit()` and type-coerced page/limit params.
