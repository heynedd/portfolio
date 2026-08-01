(() => {
  'use strict';

  const translations = window.portfolioTranslations;
  const applyLanguage = window.applyPortfolioLanguage;
  const getLanguage = window.getPortfolioLanguage;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

  if (translations && applyLanguage) {
    Object.assign(translations.en, {
      'intro.skip': 'Skip intro',
      'intro.kicker': 'A kinetic learning portfolio',
      'intro.learn': 'LEARN.',
      'intro.make': 'MAKE.',
      'intro.organize': 'ORGANIZE.',
      'portrait.role': 'Communication Science Graduate',
      'portrait.locationLabel': 'BASED IN',
      'portrait.location': 'Cianjur, Indonesia',
      'aria.fields': 'Fields of interest',
      'aria.orgSkills': 'Related skills',
      'work.note': 'A selection of editorial, data, and knowledge-system projects. Open each case note for context, contribution, and learning.',
      'organization.eyebrow': '04 / Organization & leadership',
      'organization.head1': 'LEARNING TO',
      'organization.head2': 'WORK WITH',
      'organization.head3': 'PEOPLE.',
      'organization.intro': 'Organizational roles gave me practical space to learn coordination, publication, documentation, and administration while working with people who had different responsibilities.',
      'organization.legend1': 'UPCOMING',
      'organization.legend2': 'ACTIVE',
      'organization.legend3': 'PASSED',
      'org.viceRole': 'Vice Chair',
      'org.commRole': 'Head of Communication Division',
      'org.hmiRole': 'Presidium I & Secretary',
      'org.ruangSeni': 'Ruang Seni dan Sastra',
      'org.hmiName': 'Himpunan Mahasiswa Islam (HMI)',
      'org.viceBodyV3': 'Helped coordinate cross-division activities, facilitated more than 10 internal meetings, supported communication between members, and followed up on agreed programs.',
      'org.commBodyV3': 'Worked on communication planning, more than 30 social-media contents, documentation, and publication support for webinars, workshops, and organizational activities.',
      'org.hmiBodyV3': 'Gained practical experience in formal meeting procedures, correspondence, documentation, organizational administration, and recording decisions clearly.',
      'org.tagCoordination': 'Coordination',
      'org.tagCommunication': 'Communication',
      'org.tagTeamwork': 'Teamwork',
      'org.tagContent': 'Content',
      'org.tagPublication': 'Publication',
      'org.tagDocumentation': 'Documentation',
      'org.tagGovernance': 'Governance',
      'org.tagAdministration': 'Administration',
      'org.tagRecordKeeping': 'Record-keeping',
      'experience.eyebrow': '05 / Professional journey',
      'experience.note': 'These roles show where I have practiced reporting, content, design, field coordination, and operational support through real assignments.',
      'cap.eyebrow': '06 / What I can support'
    });

    Object.assign(translations.id, {
      'intro.skip': 'Lewati intro',
      'intro.kicker': 'Portofolio perjalanan belajar kinetik',
      'intro.learn': 'BELAJAR.',
      'intro.make': 'BERKARYA.',
      'intro.organize': 'MENATA.',
      'portrait.role': 'Lulusan Ilmu Komunikasi',
      'portrait.locationLabel': 'BERBASIS DI',
      'portrait.location': 'Cianjur, Indonesia',
      'aria.fields': 'Bidang minat',
      'aria.orgSkills': 'Keahlian terkait',
      'work.note': 'Pilihan proyek editorial, data, dan sistem pengetahuan. Buka catatan proyek untuk melihat konteks, kontribusi, dan pembelajaran.',
      'organization.eyebrow': '04 / Organisasi & kepemimpinan',
      'organization.head1': 'BELAJAR',
      'organization.head2': 'BEKERJA',
      'organization.head3': 'DENGAN ORANG.',
      'organization.intro': 'Peran organisasi memberi ruang praktis untuk mempelajari koordinasi, publikasi, dokumentasi, dan administrasi bersama orang-orang dengan tanggung jawab yang berbeda.',
      'organization.legend1': 'BERIKUTNYA',
      'organization.legend2': 'AKTIF',
      'organization.legend3': 'TERLEWATI',
      'org.viceRole': 'Wakil Ketua',
      'org.commRole': 'Kepala Divisi Komunikasi',
      'org.hmiRole': 'Presidium I & Sekretaris',
      'org.ruangSeni': 'Ruang Seni dan Sastra',
      'org.hmiName': 'Himpunan Mahasiswa Islam (HMI)',
      'org.viceBodyV3': 'Membantu mengoordinasikan kegiatan lintas divisi, memfasilitasi lebih dari 10 rapat internal, mendukung komunikasi antaranggota, dan menindaklanjuti program yang telah disepakati.',
      'org.commBodyV3': 'Terlibat dalam perencanaan komunikasi, lebih dari 30 konten media sosial, dokumentasi, serta dukungan publikasi untuk webinar, lokakarya, dan kegiatan organisasi.',
      'org.hmiBodyV3': 'Memperoleh pengalaman praktis dalam prosedur rapat formal, korespondensi, dokumentasi, administrasi organisasi, dan pencatatan keputusan secara jelas.',
      'org.tagCoordination': 'Koordinasi',
      'org.tagCommunication': 'Komunikasi',
      'org.tagTeamwork': 'Kerja tim',
      'org.tagContent': 'Konten',
      'org.tagPublication': 'Publikasi',
      'org.tagDocumentation': 'Dokumentasi',
      'org.tagGovernance': 'Tata kelola',
      'org.tagAdministration': 'Administrasi',
      'org.tagRecordKeeping': 'Pencatatan',
      'experience.eyebrow': '05 / Perjalanan profesional',
      'experience.note': 'Peran-peran ini menunjukkan tempat saya mempraktikkan pelaporan, konten, desain, koordinasi lapangan, dan dukungan operasional melalui penugasan nyata.',
      'cap.eyebrow': '06 / Dukungan yang dapat saya berikan'
    });

    applyLanguage(getLanguage ? getLanguage() : 'en');
  }

  /* ---------------------------------------------------------
     KINETIC OPENING — one time per session, never a fake loader
     --------------------------------------------------------- */
  const intro = document.querySelector('[data-intro]');
  const introSkip = document.querySelector('[data-intro-skip]');
  let introClosed = false;
  let introTimer = 0;

  function hasSeenIntro() {
    try {
      return sessionStorage.getItem('iden-intro-seen') === 'true';
    } catch (_) {
      return false;
    }
  }

  function rememberIntro() {
    try {
      sessionStorage.setItem('iden-intro-seen', 'true');
    } catch (_) {
      // Storage can be disabled; the visual still works safely.
    }
  }

  function closeIntro() {
    if (!intro || introClosed) return;
    introClosed = true;
    window.clearTimeout(introTimer);
    rememberIntro();
    intro.classList.add('is-leaving');
    document.body.classList.remove('intro-active');
    window.setTimeout(() => intro.remove(), 760);
  }

  if (intro) {
    if (reduceMotion || hasSeenIntro() || window.location.hash) {
      intro.remove();
    } else {
      document.body.classList.add('intro-active');
      const duration = window.innerWidth <= 580 ? 1050 : 1550;
      introTimer = window.setTimeout(closeIntro, duration);
      introSkip?.addEventListener('click', closeIntro, { once: true });
      ['wheel', 'touchstart', 'keydown'].forEach((eventName) => {
        window.addEventListener(eventName, closeIntro, { once: true, passive: eventName !== 'keydown' });
      });
    }
  }

  /* ---------------------------------------------------------
     PORTRAIT POINTER RESPONSE — desktop only, no image crop
     --------------------------------------------------------- */
  const portrait = document.querySelector('[data-portrait]');
  if (portrait && !coarsePointer && !reduceMotion) {
    portrait.addEventListener('pointermove', (event) => {
      const rect = portrait.getBoundingClientRect();
      const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      portrait.style.setProperty('--px', `${(nx * 14).toFixed(2)}px`);
      portrait.style.setProperty('--py', `${(ny * 11).toFixed(2)}px`);
    });
    portrait.addEventListener('pointerleave', () => {
      portrait.style.setProperty('--px', '0px');
      portrait.style.setProperty('--py', '0px');
    });
  }

  /* ---------------------------------------------------------
     ORGANIZATION STATE MACHINE
     --------------------------------------------------------- */
  const orgSection = document.querySelector('[data-org-story]');
  const orgTimeline = document.querySelector('[data-org-timeline]');
  const orgItems = Array.from(document.querySelectorAll('[data-org-item]'));
  const orgProgress = document.querySelector('.organization-progress span');
  const animatedItems = new WeakSet();

  function setActiveOrganization(index) {
    if (!orgItems.length) return;
    orgItems.forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === index);
      item.classList.toggle('is-passed', itemIndex < index);
    });

    const activeItem = orgItems[index];
    const tone = activeItem?.dataset.tone || '#1649ff';
    if (orgSection) {
      orgSection.style.setProperty('--org-bg', tone);
      if (window.gsap && !reduceMotion) {
        window.gsap.to(orgSection, { backgroundColor: tone, duration: 0.55, ease: 'power2.out', overwrite: true });
      } else {
        orgSection.style.backgroundColor = tone;
      }
    }

    if (window.gsap && activeItem && !animatedItems.has(activeItem) && !reduceMotion) {
      animatedItems.add(activeItem);
      window.gsap.fromTo(
        activeItem.querySelectorAll('.org-keywords li'),
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.48, stagger: 0.08, ease: 'power3.out', clearProps: 'transform,opacity' }
      );
    }
  }

  function updateOrganizationProgressFallback() {
    if (!orgTimeline || !orgProgress) return;
    const rect = orgTimeline.getBoundingClientRect();
    const viewportCenter = window.innerHeight * 0.52;
    const total = rect.height + window.innerHeight * 0.04;
    const travelled = viewportCenter - rect.top;
    const progress = Math.max(0, Math.min(1, travelled / total));
    orgProgress.style.transform = `scaleY(${progress})`;
  }

  function initOrganizationMotion() {
    if (!orgItems.length) return;
    setActiveOrganization(0);

    if (window.gsap && window.ScrollTrigger && !reduceMotion) {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      orgItems.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 58%',
          end: 'bottom 42%',
          onEnter: () => setActiveOrganization(index),
          onEnterBack: () => setActiveOrganization(index)
        });

        gsap.to(item.querySelector('.org-number'), {
          y: -34,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      if (orgProgress) {
        gsap.to(orgProgress, {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: orgTimeline,
            start: 'top 55%',
            end: 'bottom 55%',
            scrub: true
          }
        });
      }

      const backWords = document.querySelector('.organization-backwords');
      if (backWords) {
        gsap.to(backWords, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: orgSection,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      }
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = orgItems.indexOf(entry.target);
          if (index >= 0) setActiveOrganization(index);
        });
      }, { rootMargin: '-38% 0px -38% 0px', threshold: 0 });
      orgItems.forEach((item) => observer.observe(item));
      window.addEventListener('scroll', updateOrganizationProgressFallback, { passive: true });
      updateOrganizationProgressFallback();
    }
  }

  /* ---------------------------------------------------------
     EXTRA REVEALS — keep the reading state calm after entry
     --------------------------------------------------------- */
  function initV3Motion() {
    initOrganizationMotion();

    if (!window.gsap || !window.ScrollTrigger || reduceMotion) return;
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);

    const portraitMask = document.querySelector('.portrait-mask');
    const portraitOutline = document.querySelector('.portrait-outline');
    const portraitBacktype = document.querySelector('.portrait-backtype');
    if (portraitMask) {
      gsap.fromTo(portraitMask,
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1.05, ease: 'power4.out', delay: intro && !hasSeenIntro() ? 1.15 : 0.2 }
      );
    }
    if (portraitOutline) {
      gsap.from(portraitOutline, { x: 42, y: 42, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.35 });
    }
    if (portraitBacktype) {
      gsap.from(portraitBacktype, { xPercent: -22, opacity: 0, duration: 1.15, ease: 'power3.out', delay: 0.3 });
    }

    gsap.utils.toArray('.project-media').forEach((media) => {
      gsap.fromTo(media,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.05,
          ease: 'power4.out',
          scrollTrigger: { trigger: media, start: 'top 86%', once: true }
        }
      );
    });

    gsap.utils.toArray('.journey-chapter').forEach((chapter, index) => {
      gsap.from(chapter.querySelector('h3'), {
        x: index % 2 === 0 ? 42 : -42,
        opacity: 0,
        duration: 0.78,
        ease: 'power3.out',
        scrollTrigger: { trigger: chapter, start: 'top 78%', once: true }
      });
    });
  }

  window.addEventListener('load', initV3Motion, { once: true });
})();
