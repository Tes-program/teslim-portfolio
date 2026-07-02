---
week: "W39"
date: 2024-09-23
---

Fixed a pagination bug where `totalPages` was calculated from the current page's result count instead of the full table count. Solved it with a parallel `count()` query.
