---
week: "W04"
date: 2026-01-21
---

Discovered a root-cause bug on Crowdr while working through a Q1 improvement plan (not from a bug report): when a user updated their bank account details, the system never created a new Paystack transfer recipient for the updated account, so withdrawal payments kept routing to the user's old bank account after they'd changed it.
