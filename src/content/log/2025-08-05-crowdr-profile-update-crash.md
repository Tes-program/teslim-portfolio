---
week: "W32"
date: 2025-08-05
---

Fixed a Crowdr profile-update crash: file upload validation was requiring every team member to have an image attached, even when a member's existing image wasn't being changed. Too strict for partial-update scenarios.
