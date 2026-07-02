---
week: "W45"
date: 2025-11-07
---

Worked through a multi-layer debugging chain to get Crowdr's KYC integration working: AWS IAM permission errors, then MongoDB ObjectId casting failures from empty strings reaching fields expecting real ObjectIds, then S3 ACL errors after discovering the bucket had ACLs disabled entirely. Fixed via bucket policy instead of per-object ACLs.
