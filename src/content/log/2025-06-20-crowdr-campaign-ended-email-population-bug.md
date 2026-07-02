---
week: "W25"
date: 2025-06-20
---

Fixed a MongooseModule user-population bug in Crowdr's campaign-ended email job. Recipient name was arriving empty because the user wasn't properly fetched before the email was sent.
