# Motion specification

Native CSS, IntersectionObserver, requestAnimationFrame and Canvas 2D are sufficient; no new animation dependency.

| Level | Duration | Use |
|---|---|---|
| Micro | 180–250ms | Underlines, button feedback |
| Component | 500–650ms | Portrait color, project image inspection |
| Section | 800–1000ms | Masked title and entry reveals |
| Scroll | Native scroll progress | Perspective transition, chapter state |

Ease: cubic-bezier(.16,1,.3,1). Keep typography still after entry. Hero object moves subtly; avoid moving body copy. Canvas pauses offscreen and when the tab is hidden, with DPR and particle limits. Scroll is never intercepted.

The motion toggle persists locally. OS reduced-motion overrides it. Reduced-motion and no-Canvas modes show all transition stories in normal document order. No-JS retains content and case notes. No synthetic loading screen.
