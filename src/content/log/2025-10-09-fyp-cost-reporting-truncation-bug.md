---
week: "W41"
date: 2025-10-09
---

Found and fixed a cost-reporting bug that would have quietly corrupted the credential-verification paper's data: mainnet cost estimates were displaying as $0.0000 because of integer division truncation in a BigNumber calculation. Fixed by doing the Gwei-to-Wei conversion properly before any division, correcting results to realistic values (~$20 instead of $0).
