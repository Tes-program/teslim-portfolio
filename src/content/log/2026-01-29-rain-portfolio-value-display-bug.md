---
week: "W05"
date: 2026-01-29
---

Found and fixed a serious RAIN display bug: the chatbot was showing users a ₦0 portfolio value and ₦46 profit when the actual figures should have been ₦2,000,000 invested with ₦433,562 expected returns. Root causes were compounding: checking for 'active' status when records were actually marked 'approved', calculating value from the wrong field (`amount_settled` instead of `units × issue_price`), and an incorrect profit formula.
