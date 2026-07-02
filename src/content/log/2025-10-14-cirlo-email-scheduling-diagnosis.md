---
week: "W42"
date: 2025-10-14
---

Diagnosed Cirlo's email scheduling architecture: two independent scheduling paths that could both fire for the same email, no duplicate-prevention, and no audit trail. Also turned up several smaller bugs along the way: a date-string-not-Date-object crash in calendar export, a triple-send bug from field-name mismatches between the email processor and its own entity schema, and cross-event template contamination where one event's template would render on a different event.
