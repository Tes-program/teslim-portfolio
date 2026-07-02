---
week: "W34"
date: 2025-08-20
---

Fixed a subtle RAIN prompt-logic bug: asking the model to "enhance these {n} articles" while separately demanding exactly 12 output items created a contradiction the model resolved inconsistently (sometimes returning 14). Fixed by reframing the prompt as curation ("select the best 12 from this larger pool") rather than enhancement of a fixed set.
