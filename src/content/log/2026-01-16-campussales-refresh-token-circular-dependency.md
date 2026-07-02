---
week: "W03"
date: 2026-01-16
---

Fixed a real auth architecture bug on CampusSales: the refresh-token endpoint had its own auth guard, creating a circular dependency when access tokens expired. Fixed with a separate axios instance for refresh calls to avoid interceptor loops, plus request queuing during the refresh window.
