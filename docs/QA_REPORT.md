# QA report

Validated locally in headless Microsoft Edge (Chromium), 12 September 2026. No deployment was requested. The local preview is served at http://127.0.0.1:4173.

## Completed checks

- Static validation: five JavaScript files parse; 204 translation attributes resolve in English and Indonesian; IDs, anchors, local resources and responsive image candidates are valid.
- Browser layout: 1440, 1280, 1024, 768 and 390px, both languages; no document overflow or unexpected content overflow in the recorded measurements.
- Four case notes open and close with synchronized aria-expanded.
- Four original images open in the native modal dialog; Escape closes it and focus returns to the triggering button.
- Typography study switches arrangements and pressed states.
- Navigation reaches work, journey, experience and contact anchors.
- Motion pause persists after reload; OS reduced motion disables the toggle and exposes all scene stories as static content.
- No-JS mode exposes the portrait and case notes. The initial document uses Indonesian consistently.
- First keyboard Tab exposes the skip link. Native buttons, anchors and modal focus behavior retained.
- Loaded visible site images decoded successfully; the obsolete hidden closing graphic was subsequently removed.
- No JavaScript runtime errors or failing local asset responses in the recorded browser run.
- Visually inspected desktop and mobile heroes, all four project layouts, notebook study, tunnel, contact and reduced-motion story layout. Full-element screenshots can include the fixed navigation at the captured scroll position; this is not content clipping.

Raw results: qa-results.json and final-check.json. Screenshots: qa-*.png and final-*.png.

## Performance changes

- Original flow.png: 1,571,380 bytes. Desktop flow-1200.webp: 132,774 bytes (91.6% smaller); mobile flow-640.webp: 52,462 bytes.
- Four 640px project derivatives range from 21,068 to 60,292 bytes; full-resolution originals remain accessible.
- Correct image aspect ratios, below-fold lazy loading and no eager closing image.
- Unreachable GSAP/V3 animation code and decorative pointer tracking removed. No animation packages added.
- Canvas: 280 particles on desktop / 140 mobile; DPR cap 1.6 / 1.25; animation loop stops offscreen or when the page is hidden. Native scrolling remains in control.
- No framework build exists; static source validation is the appropriate build check.

## Scope limits

This is local Chromium validation, not a real-device Safari/Firefox matrix or a field Core Web Vitals measurement. Google Fonts retain system fallbacks when the network is unavailable. Existing Drive, Sheets, Notion and WhatsApp destinations are preserved; external permissions and personal metrics have not been independently authenticated. The supplied SKD screenshot's date-formatted chart axis is preserved as source evidence, not repainted or fabricated.
