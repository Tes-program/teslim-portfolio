---
week: "W41"
date: 2025-10-07
---

Diagnosed a chain of `CALL_EXCEPTION` failures once test transactions were actually hitting the Sepolia chain: a contract function that didn't exist (`issueCredentialBatch` vs. the real `issueCredential`), then incomplete institution registration, then credential ID collisions from a timestamp-based ID scheme that wasn't unique enough under rapid batch issuance.
