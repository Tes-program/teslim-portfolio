---
week: "W05"
date: 2026-01-26
---

Built compliance logic on Crowdr for a real-world Nigerian banking quirk: bank account names commonly have different word ordering than registered names (e.g. "EZEKIEL ADAH ONYILOFIE" vs. "Onyilofie Adah Ezekiel"). Fixed with order-independent name-part comparison rather than naive string matching, while keeping a minimum-match threshold for security.
