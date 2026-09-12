/* Native motion layer. All content remains usable without JavaScript. */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const dict = window.portfolioTranslations;
  const en = {
    'hero.eyebrow': 'Iden Ridwan Mulyana / Administration · Social Media · Digital Marketing Support',
    'hero.i': '', 'hero.learn': 'ORGANIZE.', 'hero.make': 'CREATE.', 'hero.organize': 'CONNECT.',
    'aria.heroTitle': 'Organize. Create. Connect.',
    'hero.lede': 'I connect organized information with purposeful digital communication. My work brings together administration, content, social media, and reporting.',
    'hero.available': 'OPEN TO ENTRY-LEVEL OPPORTUNITIES',
    'field.communication': 'Administration', 'field.visuals': 'Content', 'field.data': 'Social media', 'field.operations': 'Reporting',
    'ticker.main': 'ADMINISTRATION / CONTENT / SOCIAL MEDIA / DIGITAL MARKETING / REPORTING / ',
    'work.heading': 'Different projects.<br><em>One connected approach.</em>',
    'work.note': 'Organizing information. Communicating services. Building useful systems. A selection of work across visual communication and operational support.',
    'archive.note': 'More tools for keeping business information, stock, and application progress organized.',
    'cap.heading': 'Behind the content.<br>Beyond the post.',
    'cap.contentTitle': 'Administration',
    'cap.contentBody': 'Keep information ready for action through document preparation, data collection, verification, trackers, and coordinated reporting.',
    'cap.visualTitle': 'Social media',
    'cap.visualBody': 'Connect organized information with content planning, visual materials, publication support, and social-media monitoring.',
    'cap.dataTitle': 'Digital marketing support',
    'cap.dataBody': 'Support product communication through company profiles, packaging, digital content, and digital sales distribution.',
    'cap.opsTitle': 'Reporting & evaluation',
    'cap.opsBody': 'Bring results back into the workflow through content evaluation, sentiment monitoring, spreadsheets, and performance reporting.',
    'closing.heading': 'Good work starts<br>with a conversation.',
    'closing.body': 'Open to opportunities in administration, social media, and digital marketing support—where clear communication and organized work belong together.',
    'cta.learningJourney': 'My background'
  };
  const id = {
    'hero.eyebrow': 'Iden Ridwan Mulyana / Administrasi · Media Sosial · Dukungan Digital Marketing',
    'hero.i': '', 'hero.learn': 'MENATA.', 'hero.make': 'MENGEMAS.', 'hero.organize': 'MENJANGKAU.',
    'aria.heroTitle': 'Menata. Mengemas. Menjangkau.',
    'hero.lede': 'Saya menghubungkan informasi yang tertata dengan komunikasi digital yang terarah. Pekerjaan saya mempertemukan administrasi, konten, media sosial, dan pelaporan.',
    'hero.available': 'TERBUKA UNTUK PELUANG KERJA LEVEL PEMULA',
    'field.communication': 'Administrasi', 'field.visuals': 'Konten', 'field.data': 'Media sosial', 'field.operations': 'Pelaporan',
    'ticker.main': 'ADMINISTRASI / KONTEN / MEDIA SOSIAL / DIGITAL MARKETING / PELAPORAN / ',
    'work.heading': 'Beragam proyek.<br><em>Satu benang merah.</em>',
    'work.note': 'Menata informasi, mengomunikasikan layanan, dan membangun sistem yang berguna. Pilihan karya di bidang komunikasi visual dan dukungan operasional.',
    'archive.note': 'Perangkat pendukung untuk menata informasi bisnis, stok, dan progres lamaran kerja.',
    'cap.heading': 'Di balik konten.<br>Lebih dari unggahan.',
    'cap.contentTitle': 'Administrasi',
    'cap.contentBody': 'Menyiapkan informasi agar siap digunakan melalui penyusunan dokumen, pendataan, verifikasi, tracker, dan koordinasi pelaporan.',
    'cap.visualTitle': 'Media sosial',
    'cap.visualBody': 'Menghubungkan informasi yang tertata dengan perencanaan konten, materi visual, dukungan publikasi, dan pemantauan media sosial.',
    'cap.dataTitle': 'Dukungan digital marketing',
    'cap.dataBody': 'Mendukung komunikasi produk melalui company profile, kemasan, konten digital, dan distribusi penjualan digital.',
    'cap.opsTitle': 'Pelaporan & evaluasi',
    'cap.opsBody': 'Mengembalikan hasil ke proses kerja melalui evaluasi konten, pemantauan sentimen, spreadsheet, dan pelaporan performa.',
    'closing.heading': 'Kerja yang baik<br>dimulai dari percakapan.',
    'closing.body': 'Terbuka untuk peluang administrasi, media sosial, dan dukungan digital marketing—tempat komunikasi yang jelas bertemu dengan pekerjaan yang terorganisasi.',
    'cta.learningJourney': 'Latar belakang saya'
  };
  Object.assign(dict.en, en); Object.assign(dict.id, id);
  dict.en.meta.title = 'Iden Ridwan Mulyana — Administration, Social Media & Digital Marketing Support';
  dict.id.meta.title = 'Iden Ridwan Mulyana — Administrasi, Media Sosial & Digital Marketing';
  dict.en.meta.description = en['hero.lede']; dict.id.meta.description = id['hero.lede'];
  window.applyPortfolioLanguage(window.getPortfolioLanguage());
  document.querySelector('.intro')?.remove();
  document.querySelector('.kinetic-title').querySelectorAll('.line').forEach(line => {
    // Remove the old English pronoun's whitespace without touching the translated headline.
    line.querySelector('[data-i18n="hero.i"]')?.remove();
  });
  const toggle = document.querySelector('.motion-toggle');
  let paused = reduced.matches;
  try { paused ||= localStorage.getItem('iden-motion-paused') === 'true'; } catch (_) {}
  let scheduled = false;
  const isEnabled = () => !paused && !reduced.matches;
  function label() {
    const isID = root.lang === 'id';
    toggle.textContent = isID ? (isEnabled() ? 'Jeda animasi' : 'Aktifkan animasi') : (isEnabled() ? 'Pause motion' : 'Enable motion');
    toggle.setAttribute('aria-pressed', String(!isEnabled()));
    toggle.disabled = reduced.matches;
    toggle.title = reduced.matches ? (isID ? 'Mengikuti preferensi gerak perangkat' : 'Following device reduced-motion preference') : '';
  }
  function update() {
    scheduled = false;
    if (!isEnabled()) return;
    const height = innerHeight;
    document.querySelectorAll('.cap-row').forEach(row => {
      const bounds = row.getBoundingClientRect();
      row.classList.toggle('in-focus', bounds.top < height * .65 && bounds.bottom > height * .35);
    });
  }
  function requestUpdate() { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }
  function applyMotion() {
    root.classList.toggle('motion-paused', !isEnabled());
    label();
    if (!isEnabled()) {
      document.querySelectorAll('.reveal.pending').forEach(el => el.classList.remove('pending'));
    }
    requestUpdate();
  }
  toggle.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('iden-motion-paused', String(paused)); } catch (_) {}
    applyMotion();
  });
  reduced.addEventListener('change', applyMotion);
  new MutationObserver(label).observe(root, { attributes: true, attributeFilter: ['lang'] });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
    }), { threshold: .04 });
    if (isEnabled()) document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pending'); observer.observe(el); }
    });
    root.classList.add('motion-ready');
  }
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate, { passive: true });
  applyMotion();
})();
