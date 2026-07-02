---
week: "W41"
date: 2025-10-08
---

Fixed the credential-verification testnet's ID collisions properly with a multi-entropy scheme (timestamp + global counter + random string) plus an on-chain existence check before each issuance, rather than just adding more randomness.
