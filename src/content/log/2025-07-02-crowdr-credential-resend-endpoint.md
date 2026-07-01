---
week: "W27"
date: 2025-07-02
---

Built a Crowdr credential-resend endpoint distinct from the original account-creation endpoint — resending login details needed a fresh temporary password (since passwords are hashed and can't be recovered) plus a forced password-change flag, rather than reusing the account-creation code path.
