---
week: "W27"
date: 2025-07-02
---

Built a Crowdr credential-resend endpoint, kept separate from the original account-creation endpoint. Resending login details needed a fresh temporary password (since passwords are hashed and can't be recovered) plus a forced password-change flag, so reusing the account-creation code path wasn't an option.
