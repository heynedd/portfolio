(() => {
  'use strict';

  let resizeTimer;
  const refreshLayout = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') {
        window.ScrollTrigger.refresh(true);
      }
    }, 140);
  };

  window.addEventListener('resize', refreshLayout, { passive: true });
  window.addEventListener('orientationchange', refreshLayout, { passive: true });
  window.addEventListener('pageshow', refreshLayout, { passive: true });

  const languageButton = document.querySelector('.lang');
  languageButton?.addEventListener('click', () => {
    window.setTimeout(refreshLayout, 80);
    window.setTimeout(refreshLayout, 320);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refreshLayout).catch(() => {});
  }
})();
