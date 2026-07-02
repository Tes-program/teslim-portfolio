---
week: "W39"
date: 2025-09-24
---

Fixed a real Crowdr payment-path bug: Paystack transfers were failing with "Recipient code must be provided" because some bank-details records were missing their `recipient_code`, traced to a gap in the account-creation flow. Added both a cleanup path for existing bad records and a fix to guarantee the code gets created going forward.
