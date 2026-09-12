# V5 foundation audit

Inspected 12 September 2026. Plain static HTML; no package manager, framework, build step, external animation runtime, GSAP, Lenis or WebGL. Four ordered deferred scripts provide translations, native motion and a Canvas 2D tunnel. Two stylesheets provide base layout and V5 overrides. No Git repository or reference video was present. A complete pre-edit checkpoint is in `backups/v5-original.zip`.

## Feature decisions

| Feature | Decision | Reason |
|---|---|---|
| Static architecture / relative URLs | KEEP | Portable, inexpensive and already functional |
| English / Indonesian and saved preferences | KEEP | Genuine useful capability |
| Original contact and project links | KEEP | Preserve evidence and access |
| Case notes | IMPROVE | Expose context in the story, retain expandable detail |
| Portrait and supplied mockups | KEEP | Authentic supplied materials; don't manufacture evidence |
| Hero | REFACTOR | Seven competing stickers, small labels and overlapping visual layers weaken hierarchy |
| Project sequence | REFACTOR | Identical card rhythm and landscape crops obscure portrait mockups |
| Canvas transition | IMPROVE | Retain lightweight perspective; reduce length and decoration |
| Learning / education / organization | KEEP + IMPROVE | Supported personal narrative |
| Personal tools | IMPROVE | Present as personal explorations without claiming commercial completion |
| Dead GSAP / V3 animation branches | REMOVE | Unreachable code; checkpoint preserves source |
| Cursor trail and hover badge | REMOVE | Decorative tracking work and misleading non-clickable media cue |
| Asset filenames | KEEP | Already descriptive; no cosmetic moves |

## Technical / visual findings

- Original image width/height attributes do not match source dimensions.
- Flow PNG is 1.57 MB; responsive WebP derivatives can preserve its alpha at lower cost.
- Project images use cover crops and scaling; text and page context are cut away.
- Portrait is hidden until moved by JS, producing a weaker no-JS reading experience.
- Three translation layers are functional but coupled; retain public API and audit keys.
- Intro and cursor are already hidden, yet scripts contain legacy behavior.
- Scroll scene occupies 460 viewport heights in CSS units (4.6 screens); shorten for pacing.
- Small 9–12px mobile metadata and dense navigation need improvement.
- Existing claims, dates, metrics and links are user-source claims, not independently verified.

See QA_REPORT.md for final observed validation and limitations.
