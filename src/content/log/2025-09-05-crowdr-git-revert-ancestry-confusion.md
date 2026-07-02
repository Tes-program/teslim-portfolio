---
week: "W36"
date: 2025-09-05
---

Fixed a confusing git situation on Crowdr: a `zoho-withdrawal` branch showed "already up to date" against main despite obviously unmerged work. Root cause was main containing a revert of the branch's own prior merge, which Git's ancestry tracking treated as "already present."
