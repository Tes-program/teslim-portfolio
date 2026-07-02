---
week: "W32"
date: 2025-08-07
---

Fixed Crowdr mail delivery failing silently in GCP production only. Templates were read relative to `src/`, which doesn't exist in the compiled `dist/` output actually running in the container, so fixed by copying templates into the build output explicitly rather than assuming source-relative paths survive compilation.
