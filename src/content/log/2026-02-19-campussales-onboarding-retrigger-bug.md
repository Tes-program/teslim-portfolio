---
week: "W08"
date: 2026-02-19
---

Fixed a genuinely annoying CampusSales bug: onboarding was re-triggering every time a user changed their password and logged back in, not just for new accounts, because a non-existent `isOnboarded` boolean field was being checked instead of the real signal (required profile fields actually being present under `user.profile`).
