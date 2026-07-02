---
week: "W03"
date: 2026-01-14
---

Added change-password and forgot-password flows to CampusSales with a hybrid email service that auto-detects available provider credentials (Gmail, Mailtrap, SendGrid, generic SMTP) and falls back to a simulation mode in development when none are configured.
