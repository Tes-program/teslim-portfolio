---
week: "W25"
date: 2025-06-18
---

Fixed a Crowdr donation-confirmation email showing unrounded floating-point amounts (e.g. "950.0000000000001"). Added a `formatCurrency` helper applied consistently across the `amount`, `payableAmount`, and `processingFee` template variables.
