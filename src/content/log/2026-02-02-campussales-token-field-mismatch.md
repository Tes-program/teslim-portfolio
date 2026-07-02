---
week: "W06"
date: 2026-02-02
---

Fixed a CampusSales token-storage bug where the frontend expected a field called `token` but the backend returned `accessToken`, a silent mismatch that broke all subsequent authenticated requests without an obvious error.
