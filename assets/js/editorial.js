/* Small, progressively enhanced interactions for the editorial V5 refinement. */
(() => {
  const root = document.documentElement;
  const copy = {
    en: {
      'archive.eyebrow':'02 / The working notebook',
      'archive.heading':'Small tools.<br><em>Useful questions.</em>',
      'archive.note':'Personal tools for business information, inventory and job applications. A place to explore how a little structure can make information easier to use.',
      'study.label':'LIVE STUDY / THIS PORTFOLIO',
      'study.title':'Same words. Different rhythm.',
      'study.body':'An interactive typography study built for this portfolio. Change the arrangement and see how the reading order shifts.',
      'study.stack':'Stack', 'study.spread':'Spread',
      'study.one':'INFORMATION', 'study.two':'INTO', 'study.three':'ACTION',
      'study.caption':'A layout experiment, open to iteration.',
      'image.inspect':'Inspect image ↗', 'image.close':'Close image',
      'image.title':'Project image',
      'work.note':'A company profile, a study tracker, a service story and a personal library. Different formats, connected by an interest in making information useful.'
    },
    id: {
      'archive.eyebrow':'02 / Catatan eksplorasi',
      'archive.heading':'Alat sederhana.<br><em>Pertanyaan berguna.</em>',
      'archive.note':'Alat pribadi untuk informasi bisnis, stok, dan lamaran kerja. Ruang untuk melihat bagaimana sedikit struktur membuat informasi lebih mudah digunakan.',
      'study.label':'STUDI INTERAKTIF / PORTOFOLIO INI',
      'study.title':'Kata yang sama. Ritme berbeda.',
      'study.body':'Studi tipografi interaktif yang dibuat untuk portofolio ini. Ubah susunannya dan lihat bagaimana urutan bacanya bergeser.',
      'study.stack':'Bertumpuk', 'study.spread':'Menyebar',
      'study.one':'INFORMASI', 'study.two':'JADI', 'study.three':'AKSI',
      'study.caption':'Eksperimen tata letak yang terbuka untuk iterasi.',
      'image.inspect':'Lihat gambar ↗', 'image.close':'Tutup gambar',
      'image.title':'Gambar proyek',
      'work.note':'Company profile, tracker belajar, cerita layanan, dan perpustakaan pribadi. Format yang berbeda, dengan ketertarikan yang sama: membuat informasi berguna.'
    }
  };
  Object.assign(window.portfolioTranslations.en, copy.en);
  Object.assign(window.portfolioTranslations.id, copy.id);
  window.applyPortfolioLanguage(window.getPortfolioLanguage());

  const study = document.querySelector('.type-study');
  document.querySelectorAll('[data-arrangement]').forEach(button => {
    button.addEventListener('click', () => {
      study.dataset.layout = button.dataset.arrangement;
      document.querySelectorAll('[data-arrangement]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    });
  });

  const dialog = document.querySelector('.image-dialog');
  const fullImage = dialog.querySelector('img');
  let opener;
  document.querySelectorAll('[data-inspect]').forEach(button => button.addEventListener('click', () => {
    const image = document.querySelector(`#${button.dataset.inspect} .project-media img`);
    fullImage.src = image.src;
    fullImage.alt = image.alt;
    opener = button;
    dialog.showModal();
    root.classList.add('image-open');
  }));
  const close = () => dialog.close();
  dialog.querySelector('button').addEventListener('click', close);
  dialog.addEventListener('click', event => {if (event.target === dialog) close();});
  dialog.addEventListener('close', () => {root.classList.remove('image-open');opener?.focus({preventScroll:true});});

  // Mark the most recent chapter without replacing the browser's native navigation.
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const chapters = navLinks.map(link => document.querySelector(link.hash));
  let pending=false;
  function chapterState(){
    pending=false;
    let current=-1;
    chapters.forEach((section,index)=>{if(section.getBoundingClientRect().top<=innerHeight*.4)current=index;});
    navLinks.forEach((link,index)=>{if(index===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  }
  addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(chapterState);}},{passive:true});
  chapterState();
})();
