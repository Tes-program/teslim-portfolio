---
week: "W37"
date: 2025-09-13
---

Fixed RAIN's news-metrics pipeline. Click tracking wasn't storing titles, so titles now get captured at click time rather than reconstructed from IDs later. Separately, a metrics endpoint returning all zeros traced to a date-matching bug: the `/today` endpoint querying against the current date while the actual data sat under a different date, plus an incorrect aggregation source pulling from a summary table instead of the detailed records.
