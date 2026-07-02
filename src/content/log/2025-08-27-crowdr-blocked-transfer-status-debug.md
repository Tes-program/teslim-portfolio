---
week: "W35"
date: 2025-08-27
---

Debugged Crowdr transfers getting stuck in "blocked" status instead of completing. Traced to Paystack requiring an explicit separate approval/finalization step in live mode that the initial implementation was missing — initiating a transfer isn't the same as it actually executing.
