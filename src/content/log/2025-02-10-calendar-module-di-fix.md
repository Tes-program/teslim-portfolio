---
week: "W07"
date: 2025-02-10
---

Fixed a NestJS dependency-injection error (`AXIOS_INSTANCE_TOKEN` not resolvable) in a `CalendarModule` — `HttpModule` wasn't imported into the module using `HttpService`. Picks back up the Google/Outlook calendar sync work scoped out in September.
