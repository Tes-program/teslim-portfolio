---
week: "W39"
date: 2024-09-23
---

Fixed a "Cannot read properties of undefined (reading 'map')" crash in message creation caused by `attachments` being undefined when no files were attached — added an array guard before the Prisma nested create.
