---
week: "W33"
date: 2025-08-13
---

Debugged a Crowdr admin transactions endpoint returning zero results despite 1,271 real users existing. Turned out `createdAt` timestamps were missing from historical documents even though the schema enabled them; fixed by extracting creation dates from MongoDB ObjectIds themselves, which embed a timestamp.
