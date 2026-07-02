---
week: "W16"
date: 2026-04-14
---

Fixed a real Crowdr production bug where donations silently failed to record: traced through webhook replay confusion down to the actual systemic issue. Deleted campaigns weren't excluded from the queries used in payment/donation flows, so a user deleting a campaign and creating a new one with the same slug could break donation processing for the old campaign's in-flight webhooks.
