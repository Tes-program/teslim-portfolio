---
week: "W04"
date: 2026-01-24
---

Fixed a Crowdr Paystack transfer-rejection bug: amounts were being sent with decimal places instead of whole kobo/cent integers, caused by floating-point precision issues in JavaScript. Fixed with explicit rounding at every amount-conversion point rather than just the one that was failing.
