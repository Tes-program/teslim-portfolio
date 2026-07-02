---
week: "W32"
date: 2025-08-08
---

Fixed a Crowdr NestJS dependency-injection crash caused by a misplaced `@Inject` decorator. It was sitting above the wrong constructor parameter, so a `forwardRef` intended for `SettingsService` was accidentally attached to a `Transaction` model injection instead.
