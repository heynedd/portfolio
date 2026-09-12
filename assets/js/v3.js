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

})();
