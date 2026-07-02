---
week: "W46"
date: 2025-11-10
---

Found the actual root cause of persistent Dojah 400 errors on Crowdr's selfie verification: the API expected base64-encoded image data, not URLs. Not documented clearly, discovered through iteration.
