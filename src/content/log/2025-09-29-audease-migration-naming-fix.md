---
week: "W40"
date: 2025-09-29
---

Fixed a TypeORM migration naming error on Audease (a malformed timestamp in the generated class name) and automated the cleanup with a script that backs up, regenerates proper sequential timestamps, and verifies the result rather than fixing files by hand.
