const doc = document.documentElement;
const progress = document.querySelector('.progress span');
const cursor = document.querySelector('.cursor');
const langBtn = document.querySelector('.lang');

const translations = {
  en: {
    meta: { title: 'Iden Ridwan Mulyana — Communication, Content & Operations', description: 'Portfolio of Iden Ridwan Mulyana, a Communication Science graduate with hands-on experience in content, visual communication, data, and operational support.' },
    'skip.content': 'Skip to content',
    'aria.nav.primary': 'Primary navigation', 'aria.backTop': 'Back to top', 'aria.switchLang': 'Switch language', 'aria.heroTitle': 'I learn. I make. I organize.', 'aria.interests': 'Areas of interest',
    'nav.work': 'Work', 'nav.journey': 'Journey', 'nav.experience': 'Experience', 'nav.contact': 'Contact',
    'hero.orbitA': 'COMMUNICATION · CONTENT · DATA · OPERATIONS ·', 'hero.orbitB': 'LEARN · MAKE · ORGANIZE · SHARE ·', 'hero.eyebrow': 'Communication Science graduate · Cianjur, Indonesia', 'hero.i': 'I', 'hero.learn': 'LEARN.', 'hero.make': 'MAKE.', 'hero.organize': 'ORGANIZE.',
    'hero.lede': 'I am a fresh graduate with hands-on experience across content, visual communication, data, and operational support. I enjoy turning information into clearer materials and more organized ways of working.', 'hero.available': 'AVAILABLE FOR ENTRY-LEVEL OPPORTUNITIES',
    'cta.exploreWork': 'Explore the work', 'cta.learningJourney': 'See my learning journey', 'cta.openOriginal': 'Open original file ↗', 'cta.openSpreadsheet': 'Open spreadsheet ↗', 'cta.openNotion': 'Open Notion ↗', 'cta.email': 'Email me',
    'field.communication': 'Communication', 'field.visuals': 'Visuals', 'field.data': 'Data', 'field.operations': 'Operations',
    'ticker.main': 'CONTENT · VISUAL COMMUNICATION · DATA VISUALIZATION · DIGITAL MARKETING · OPERATIONAL SUPPORT · ',
    'proof.title': 'Selected evidence', 'proof.views': 'YouTube views during my Ratu Mimis tenure', 'proof.assets': 'Content assets monitored and evaluated', 'proof.syllabus': 'Syllabus areas mapped in SKD Command Center', 'proof.gpa': 'GPA · Cum Laude',
    'work.eyebrow': '01 / Selected work', 'work.heading': 'Projects that show<br><em>how I work.</em>', 'work.note': 'Rajawali leads the visual sequence. Every project stays available, while only projects with existing images receive full visual treatment.',
    'rajawali.label': '01 / EDITORIAL COMMUNICATION', 'rajawali.title': 'Making a complex service business easier to understand.', 'rajawali.description': 'I designed and structured a company profile for a security and labour-supply business, focusing on clearer information hierarchy, service presentation, and professional visual consistency.',
    'chip.infoHierarchy': 'Information hierarchy', 'chip.editorialDesign': 'Editorial design', 'chip.companyProfile': 'Company profile',
    'case.context': 'Context', 'case.contribution': 'Contribution', 'case.learning': 'Learning', 'case.need': 'Need', 'case.response': 'Response', 'case.difference': 'Difference', 'case.problem': 'Problem',
    'rajawali.context': 'A company profile for a service business operating across security and labour supply.', 'rajawali.contribution': 'Content structure, visual hierarchy, page composition, and final company-profile design.', 'rajawali.learning': 'Complex service information becomes more persuasive when readers can understand the offer before they are asked to trust it.',
    'skd.label': '02 / DATA & WORKFLOW', 'skd.title': 'A study tracker that became useful beyond its original purpose.', 'skd.description': 'I built a spreadsheet-based system to map 24 syllabus areas and monitor study progress. After I shared it on Threads, it received positive responses and several people asked for the file, which I shared with them.',
    'chip.syllabus24': '24 syllabus areas', 'chip.communityResponse': 'Community response', 'chip.sharedResource': 'Shared resource', 'skd.need': 'A practical view of study targets, progress, and priorities in one place.', 'skd.response': 'The system was shared publicly on Threads and attracted positive feedback plus requests for access.', 'skd.learning': 'A personal tool can become a useful public resource when its structure solves a problem other people recognize.',
    'rafflesia.label': '03 / EDITORIAL DESIGN', 'rafflesia.title': 'Organizing service information into a clearer editorial flow.', 'rafflesia.description': 'A company-profile project for cleaning service and landscape operations. The visual direction gives service categories, company information, and supporting material a consistent reading order.',
    'chip.editorialLayout': 'Editorial layout', 'chip.serviceCommunication': 'Service communication', 'chip.printReady': 'Print-ready', 'rafflesia.difference': 'Unlike Rajawali’s security and labour-supply focus, this project organizes multiple cleaning and landscape services into a more modular editorial system.', 'rafflesia.contribution': 'Layout development, visual consistency, and presentation of service information.', 'rafflesia.learning': 'Similar formats still require different information rhythms when the business model and service categories change.',
    'pkm.label': '04 / KNOWLEDGE SYSTEM', 'pkm.title': 'A practical system for keeping references useful, not merely stored.', 'pkm.description': 'I developed a Notion-based personal knowledge management system to organize references, library items, and learning materials into a searchable and trackable structure.',
    'chip.notionDatabase': 'Notion database', 'chip.knowledgeWorkflow': 'Knowledge workflow', 'chip.personalProject': 'Personal project', 'pkm.problem': 'References are easy to collect but difficult to retrieve and use consistently.', 'pkm.contribution': 'Database structure, categories, tracking fields, and retrieval workflow.', 'pkm.learning': 'A useful knowledge system is designed around future use, not the act of saving information.',
    'archive.eyebrow': '02 / Project archive', 'archive.heading': 'Every project<br><em>still counts.</em>', 'archive.note': 'Projects without dedicated images remain accessible as text-led entries.', 'archive.dashboardTitle': 'Self-Employed Dashboard', 'archive.dashboardDesc': 'Business analytics · Excel / Google Sheets', 'archive.inventoryTitle': 'Grocery Store Inventory', 'archive.inventoryDesc': 'Inventory management system', 'archive.jobTrackerTitle': 'Job Application Tracker', 'archive.jobTrackerDesc': 'Workflow tracking · HR analytics',
    'journey.eyebrow': '03 / Theory, research & practice', 'journey.head1': 'LEARNING', 'journey.head2': 'DIDN’T STOP', 'journey.head3': 'IN CLASS.', 'journey.intro': 'My college years connected academic foundations with practical experience. Communication Science helped me understand audiences and messages, research trained me to examine evidence, and organizations gave me space to practice coordination and documentation.',
    'journey.theoryIndex': '01 / THEORY', 'journey.theoryTitle': 'Understanding audiences, messages, and media.', 'journey.theoryBody': 'Studying Communication Science at Universitas Putra Indonesia introduced me to audience behavior, media, communication research, and digital communication. It taught me to look beyond how content appears and consider who it is for, why it may work, and what response it may create.', 'journey.degree': 'Bachelor of Communication Science · Graduated 2025 · Cum Laude · GPA 3.69/4.00',
    'journey.researchIndex': '02 / RESEARCH', 'journey.researchTitle': 'Studying how educational content relates to purchasing decisions.', 'journey.researchBody': 'My final research examined the influence of educational content on purchasing decisions for @bukuakik products. The process strengthened my interest in audience behavior, content effectiveness, consumer decisions, and the use of data to support communication choices.', 'journey.thesis': 'Thesis: “The Influence of Educational Content on Purchasing Decisions for @bukuakik Products.”',
    'journey.practiceIndex': '03 / PRACTICE', 'journey.practiceTitle': 'Practicing communication through organizations.', 'journey.practiceBody': 'Outside the classroom, organizational work gave me opportunities to practice internal communication, publication, meeting coordination, documentation, and administration. I learned that clear communication also means helping people understand responsibilities, decisions, and next steps.',
    'org.viceTitle': 'Vice Chair · Ruang Seni dan Sastra', 'org.viceBody': 'Helped manage internal communication, facilitated more than 10 strategic meetings, supported conflict resolution, and followed up on cross-division programs.', 'org.commTitle': 'Head of Communication Division', 'org.commBody': 'Worked on communication planning, more than 30 social-media contents, documentation, and publication support for webinars, workshops, and organizational events.', 'org.hmiTitle': 'Presidium I & Secretary · HMI', 'org.hmiBody': 'Gained experience in formal meeting procedures, correspondence, documentation, organizational administration, and recording decisions clearly.',
    'journey.river': 'RESEARCH · TEAMWORK · PUBLICATION · DOCUMENTATION · COORDINATION · LEADERSHIP · ',
    'experience.eyebrow': '04 / Professional journey', 'experience.heading': 'Early experience.<br><em>Real contribution.</em>', 'experience.note': 'A fresh graduate portfolio should show evidence without pretending to be senior. These are the roles where I learned by doing.',
    'date.bps': 'Jun 2026 — Present', 'role.bps': 'Economic Census Partner', 'exp.bps': 'Conducting business-unit data collection, verification, questionnaire completion, progress reporting, and field coordination. Reached 44% of the assigned area target while maintaining reporting accuracy.',
    'date.ratu': 'Dec 2025 — Feb 2026', 'role.ratu': 'Content & Operations Lead', 'exp.ratu': 'Worked on digital content activities during a 90-day period in which the channel reached 1,017,208 views, grew 340%, and gained 1,444 subscribers. I also contributed to product commercialization, from packaging design to digital sales distribution.',
    'date.writer': 'Nov 2024 — Present', 'role.writer': 'Freelance Writer & Editor', 'company.selfCianjur': 'Self-employed · Cianjur', 'exp.writer': 'Writing and editing formal documents for multiple clients while managing quality and deadlines across concurrent projects.',
    'date.designer': 'May 2021 — Sep 2025', 'role.designer': 'Freelance Graphic Designer', 'exp.designer': 'Completed more than five branding projects—including logos, catalogues, and company profiles—for clients across different industries.',
    'date.diskominfo': 'Jul 2023 — Sep 2023', 'role.diskominfo': 'Communication Intern', 'exp.diskominfo': 'Monitored and evaluated more than 200 cross-platform content assets and reviewed sentiment around more than 50 public issues to support communication reporting and recommendations.',
    'cap.eyebrow': '05 / What I can support', 'cap.heading': 'FOUR MODES.<br>ONE CURIOUS MIND.', 'cap.contentTitle': 'Content & Communication', 'cap.contentBody': 'Content planning, social media support, message structure, and formal writing.', 'cap.visualTitle': 'Visual Materials', 'cap.visualBody': 'Company profiles, catalogues, branding assets, thumbnails, and editorial layouts.', 'cap.dataTitle': 'Data & Reporting', 'cap.dataBody': 'Excel, data visualization, performance monitoring, evaluation, and reporting support.', 'cap.opsTitle': 'Operational Support', 'cap.opsBody': 'Trackers, databases, documentation, project administration, and workflow organization.',
    'closing.learning': 'LEARNING', 'closing.contributing': 'CONTRIBUTING', 'closing.growing': 'GROWING', 'closing.eyebrow': 'Open to entry-level roles, projects, and conversations', 'closing.heading': 'Let’s build the<br>next learning curve.', 'closing.body': 'I am looking for opportunities where I can contribute practical communication, content, data, and operational skills while continuing to learn from a professional team.',
    'footer.location': 'Cianjur · Indonesia',
    'detail.open': 'Read case note ↓', 'detail.close': 'Close case note ↑',
    'alt.profile': 'Portrait of Iden Ridwan Mulyana', 'alt.rajawali': 'PT Rajawali Trans Multimas company profile mockup', 'alt.skd': 'SKD Command Center spreadsheet system', 'alt.rafflesia': 'PT Rafflesia Tirta Multimas company profile mockup', 'alt.pkm': 'Personal Knowledge Management system in Notion'
  },
  id: {
    meta: { title: 'Iden Ridwan Mulyana — Komunikasi, Konten & Operasional', description: 'Portofolio Iden Ridwan Mulyana, lulusan Ilmu Komunikasi dengan pengalaman praktis dalam konten, komunikasi visual, data, dan dukungan operasional.' },
    'skip.content': 'Lewati ke konten',
    'aria.nav.primary': 'Navigasi utama', 'aria.backTop': 'Kembali ke atas', 'aria.switchLang': 'Ganti bahasa', 'aria.heroTitle': 'Saya belajar. Saya membuat. Saya mengorganisasi.', 'aria.interests': 'Bidang minat',
    'nav.work': 'Karya', 'nav.journey': 'Perjalanan', 'nav.experience': 'Pengalaman', 'nav.contact': 'Kontak',
    'hero.orbitA': 'KOMUNIKASI · KONTEN · DATA · OPERASIONAL ·', 'hero.orbitB': 'BELAJAR · MEMBUAT · MENGATUR · BERBAGI ·', 'hero.eyebrow': 'Lulusan Ilmu Komunikasi · Cianjur, Indonesia', 'hero.i': 'SAYA', 'hero.learn': 'BELAJAR.', 'hero.make': 'MEMBUAT.', 'hero.organize': 'MENGATUR.',
    'hero.lede': 'Saya adalah fresh graduate dengan pengalaman praktis di bidang konten, komunikasi visual, data, dan dukungan operasional. Saya senang mengubah informasi menjadi materi yang lebih jelas dan cara kerja yang lebih terorganisasi.', 'hero.available': 'TERBUKA UNTUK PELUANG KERJA LEVEL PEMULA',
    'cta.exploreWork': 'Lihat karya', 'cta.learningJourney': 'Lihat perjalanan belajar', 'cta.openOriginal': 'Buka file asli ↗', 'cta.openSpreadsheet': 'Buka spreadsheet ↗', 'cta.openNotion': 'Buka Notion ↗', 'cta.email': 'Kirim email',
    'field.communication': 'Komunikasi', 'field.visuals': 'Visual', 'field.data': 'Data', 'field.operations': 'Operasional',
    'ticker.main': 'KONTEN · KOMUNIKASI VISUAL · VISUALISASI DATA · PEMASARAN DIGITAL · DUKUNGAN OPERASIONAL · ',
    'proof.title': 'Bukti terpilih', 'proof.views': 'Views YouTube selama masa kerja di Ratu Mimis', 'proof.assets': 'Aset konten dipantau dan dievaluasi', 'proof.syllabus': 'Area silabus dipetakan dalam SKD Command Center', 'proof.gpa': 'IPK · Cum Laude',
    'work.eyebrow': '01 / Karya terpilih', 'work.heading': 'Proyek yang menunjukkan<br><em>cara saya bekerja.</em>', 'work.note': 'Rajawali menjadi pembuka urutan visual. Semua proyek tetap tersedia, sedangkan hanya proyek yang memiliki gambar yang mendapat perlakuan visual penuh.',
    'rajawali.label': '01 / KOMUNIKASI EDITORIAL', 'rajawali.title': 'Membuat bisnis jasa yang kompleks lebih mudah dipahami.', 'rajawali.description': 'Saya mendesain dan menyusun company profile untuk perusahaan jasa keamanan dan penyedia tenaga kerja, dengan fokus pada hierarki informasi, penyajian layanan, dan konsistensi visual yang lebih profesional.',
    'chip.infoHierarchy': 'Hierarki informasi', 'chip.editorialDesign': 'Desain editorial', 'chip.companyProfile': 'Company profile',
    'case.context': 'Konteks', 'case.contribution': 'Kontribusi', 'case.learning': 'Pembelajaran', 'case.need': 'Kebutuhan', 'case.response': 'Respons', 'case.difference': 'Perbedaan', 'case.problem': 'Masalah',
    'rajawali.context': 'Company profile untuk bisnis jasa yang bergerak di bidang keamanan dan penyediaan tenaga kerja.', 'rajawali.contribution': 'Struktur konten, hierarki visual, komposisi halaman, dan desain akhir company profile.', 'rajawali.learning': 'Informasi layanan yang kompleks menjadi lebih meyakinkan ketika pembaca memahami penawarannya sebelum diminta mempercayainya.',
    'skd.label': '02 / DATA & ALUR KERJA', 'skd.title': 'Tracker belajar yang ternyata berguna di luar tujuan awalnya.', 'skd.description': 'Saya membuat sistem berbasis spreadsheet untuk memetakan 24 area silabus dan memantau progres belajar. Setelah dibagikan di Threads, proyek ini mendapat respons positif dan beberapa orang meminta filenya, lalu saya membagikannya kepada mereka.',
    'chip.syllabus24': '24 area silabus', 'chip.communityResponse': 'Respons warganet', 'chip.sharedResource': 'Sumber daya dibagikan', 'skd.need': 'Tampilan praktis untuk melihat target belajar, progres, dan prioritas dalam satu tempat.', 'skd.response': 'Sistem dibagikan secara publik di Threads dan memperoleh respons positif serta permintaan akses.', 'skd.learning': 'Alat pribadi dapat menjadi sumber daya publik yang berguna ketika strukturnya menyelesaikan masalah yang juga dirasakan orang lain.',
    'rafflesia.label': '03 / DESAIN EDITORIAL', 'rafflesia.title': 'Menyusun informasi layanan ke dalam alur editorial yang lebih jelas.', 'rafflesia.description': 'Proyek company profile untuk layanan kebersihan dan lanskap. Arah visualnya memberi kategori layanan, informasi perusahaan, dan materi pendukung urutan baca yang konsisten.',
    'chip.editorialLayout': 'Tata letak editorial', 'chip.serviceCommunication': 'Komunikasi layanan', 'chip.printReady': 'Siap cetak', 'rafflesia.difference': 'Berbeda dari Rajawali yang berfokus pada keamanan dan penyediaan tenaga kerja, proyek ini menyusun beragam layanan kebersihan dan lanskap ke dalam sistem editorial yang lebih modular.', 'rafflesia.contribution': 'Pengembangan layout, konsistensi visual, dan penyajian informasi layanan.', 'rafflesia.learning': 'Format yang serupa tetap membutuhkan ritme informasi berbeda ketika model bisnis dan kategori layanannya berubah.',
    'pkm.label': '04 / SISTEM PENGETAHUAN', 'pkm.title': 'Sistem praktis agar referensi tetap berguna, bukan sekadar tersimpan.', 'pkm.description': 'Saya mengembangkan sistem personal knowledge management berbasis Notion untuk mengorganisasi referensi, koleksi pustaka, dan materi belajar ke dalam struktur yang dapat dicari dan dilacak.',
    'chip.notionDatabase': 'Database Notion', 'chip.knowledgeWorkflow': 'Alur pengetahuan', 'chip.personalProject': 'Proyek pribadi', 'pkm.problem': 'Referensi mudah dikumpulkan, tetapi sering sulit ditemukan kembali dan digunakan secara konsisten.', 'pkm.contribution': 'Struktur database, kategori, kolom pelacakan, dan alur pencarian kembali.', 'pkm.learning': 'Sistem pengetahuan yang berguna dirancang berdasarkan kebutuhan penggunaan di masa depan, bukan sekadar aktivitas menyimpan informasi.',
    'archive.eyebrow': '02 / Arsip proyek', 'archive.heading': 'Setiap proyek<br><em>tetap berarti.</em>', 'archive.note': 'Proyek tanpa gambar khusus tetap dapat diakses sebagai entri berbasis teks.', 'archive.dashboardTitle': 'Dashboard Wiraswasta', 'archive.dashboardDesc': 'Analitik bisnis · Excel / Google Sheets', 'archive.inventoryTitle': 'Inventori Toko Sembako', 'archive.inventoryDesc': 'Sistem manajemen inventori', 'archive.jobTrackerTitle': 'Pelacak Lamaran Kerja', 'archive.jobTrackerDesc': 'Pelacakan alur kerja · Analitik SDM',
    'journey.eyebrow': '03 / Teori, riset & praktik', 'journey.head1': 'BELAJAR', 'journey.head2': 'TIDAK BERHENTI', 'journey.head3': 'DI KELAS.', 'journey.intro': 'Masa kuliah menghubungkan fondasi akademik dengan pengalaman praktis. Ilmu Komunikasi membantu saya memahami audiens dan pesan, riset melatih saya membaca bukti, dan organisasi memberi ruang untuk mempraktikkan koordinasi serta dokumentasi.',
    'journey.theoryIndex': '01 / TEORI', 'journey.theoryTitle': 'Memahami audiens, pesan, dan media.', 'journey.theoryBody': 'Studi Ilmu Komunikasi di Universitas Putra Indonesia memperkenalkan saya pada perilaku audiens, media, riset komunikasi, dan komunikasi digital. Saya belajar untuk tidak hanya melihat bagaimana sebuah konten tampil, tetapi juga untuk siapa konten tersebut dibuat, mengapa konten itu dapat bekerja, dan respons apa yang mungkin muncul.', 'journey.degree': 'Sarjana Ilmu Komunikasi · Lulus 2025 · Cum Laude · IPK 3,69/4,00',
    'journey.researchIndex': '02 / RISET', 'journey.researchTitle': 'Mempelajari hubungan konten edukatif dengan keputusan pembelian.', 'journey.researchBody': 'Penelitian akhir saya membahas pengaruh konten edukatif terhadap keputusan pembelian produk @bukuakik. Proses tersebut memperkuat minat saya terhadap perilaku audiens, efektivitas konten, keputusan konsumen, dan penggunaan data sebagai pendukung pilihan komunikasi.', 'journey.thesis': 'Skripsi: “Pengaruh Konten Edukatif terhadap Keputusan Pembelian Produk @bukuakik.”',
    'journey.practiceIndex': '03 / PRAKTIK', 'journey.practiceTitle': 'Mempraktikkan komunikasi melalui organisasi.', 'journey.practiceBody': 'Di luar ruang kelas, kegiatan organisasi memberi kesempatan untuk mempraktikkan komunikasi internal, publikasi, koordinasi rapat, dokumentasi, dan administrasi. Saya belajar bahwa komunikasi yang jelas juga berarti membantu orang memahami tanggung jawab, keputusan, dan langkah berikutnya.',
    'org.viceTitle': 'Wakil Ketua · Ruang Seni dan Sastra', 'org.viceBody': 'Membantu mengelola komunikasi internal, memfasilitasi lebih dari 10 rapat strategis, mendukung penyelesaian konflik, dan menindaklanjuti program lintas divisi.', 'org.commTitle': 'Kepala Divisi Komunikasi', 'org.commBody': 'Terlibat dalam perencanaan komunikasi, lebih dari 30 konten media sosial, dokumentasi, serta dukungan publikasi untuk webinar, lokakarya, dan kegiatan organisasi.', 'org.hmiTitle': 'Presidium I & Sekretaris · HMI', 'org.hmiBody': 'Memperoleh pengalaman dalam prosedur rapat formal, korespondensi, dokumentasi, administrasi organisasi, dan pencatatan keputusan secara jelas.',
    'journey.river': 'RISET · KERJA TIM · PUBLIKASI · DOKUMENTASI · KOORDINASI · KEPEMIMPINAN · ',
    'experience.eyebrow': '04 / Perjalanan profesional', 'experience.heading': 'Pengalaman awal.<br><em>Kontribusi nyata.</em>', 'experience.note': 'Portofolio fresh graduate perlu menunjukkan bukti tanpa berpura-pura senior. Inilah peran tempat saya belajar melalui praktik.',
    'date.bps': 'Jun 2026 — Sekarang', 'role.bps': 'Mitra Sensus Ekonomi', 'exp.bps': 'Melaksanakan pendataan unit usaha, verifikasi, pengisian kuesioner, pelaporan progres, dan koordinasi lapangan. Mencapai 44% target wilayah kerja dengan tetap menjaga ketepatan pelaporan.',
    'date.ratu': 'Des 2025 — Feb 2026', 'role.ratu': 'Content & Operations Lead', 'exp.ratu': 'Terlibat dalam aktivitas konten digital selama periode 90 hari ketika kanal mencapai 1.017.208 views, tumbuh 340%, dan memperoleh 1.444 subscriber. Saya juga berkontribusi dalam komersialisasi produk, mulai dari desain kemasan hingga distribusi penjualan digital.',
    'date.writer': 'Nov 2024 — Sekarang', 'role.writer': 'Penulis & Penyunting Freelance', 'company.selfCianjur': 'Wiraswasta · Cianjur', 'exp.writer': 'Menulis dan menyunting dokumen formal untuk beberapa klien sambil menjaga kualitas dan tenggat pada proyek yang berjalan bersamaan.',
    'date.designer': 'Mei 2021 — Sep 2025', 'role.designer': 'Desainer Grafis Freelance', 'exp.designer': 'Menyelesaikan lebih dari lima proyek branding—termasuk logo, katalog, dan company profile—untuk klien dari berbagai industri.',
    'date.diskominfo': 'Jul 2023 — Sep 2023', 'role.diskominfo': 'Mahasiswa Magang Komunikasi', 'exp.diskominfo': 'Memantau dan mengevaluasi lebih dari 200 aset konten lintas platform serta meninjau sentimen pada lebih dari 50 isu publik untuk mendukung laporan dan rekomendasi komunikasi.',
    'cap.eyebrow': '05 / Dukungan yang dapat saya berikan', 'cap.heading': 'EMPAT BIDANG.<br>SATU RASA INGIN TAHU.', 'cap.contentTitle': 'Konten & Komunikasi', 'cap.contentBody': 'Perencanaan konten, dukungan media sosial, struktur pesan, dan penulisan formal.', 'cap.visualTitle': 'Materi Visual', 'cap.visualBody': 'Company profile, katalog, aset branding, thumbnail, dan tata letak editorial.', 'cap.dataTitle': 'Data & Pelaporan', 'cap.dataBody': 'Excel, visualisasi data, pemantauan performa, evaluasi, dan dukungan pelaporan.', 'cap.opsTitle': 'Dukungan Operasional', 'cap.opsBody': 'Tracker, database, dokumentasi, administrasi proyek, dan pengorganisasian alur kerja.',
    'closing.learning': 'BELAJAR', 'closing.contributing': 'BERKONTRIBUSI', 'closing.growing': 'BERTUMBUH', 'closing.eyebrow': 'Terbuka untuk posisi level pemula, proyek, dan percakapan', 'closing.heading': 'Mari bangun<br>kurva belajar berikutnya.', 'closing.body': 'Saya mencari peluang untuk berkontribusi melalui kemampuan praktis di bidang komunikasi, konten, data, dan operasional, sambil terus belajar dari tim profesional.',
    'footer.location': 'Cianjur · Indonesia',
    'detail.open': 'Baca catatan proyek ↓', 'detail.close': 'Tutup catatan proyek ↑',
    'alt.profile': 'Potret Iden Ridwan Mulyana', 'alt.rajawali': 'Mockup company profile PT Rajawali Trans Multimas', 'alt.skd': 'Sistem spreadsheet SKD Command Center', 'alt.rafflesia': 'Mockup company profile PT Rafflesia Tirta Multimas', 'alt.pkm': 'Sistem Personal Knowledge Management di Notion'
  }
};

function safeStorageGet(key) {
  try { return window.localStorage.getItem(key); } catch (_) { return null; }
}
function safeStorageSet(key, value) {
  try { window.localStorage.setItem(key, value); } catch (_) { /* storage may be unavailable */ }
}

let lang = safeStorageGet('portfolio-language');
if (!translations[lang]) lang = 'en';

function t(key) {
  const value = translations[lang][key];
  return typeof value === 'string' ? value : key;
}

function updateDetailButtons() {
  document.querySelectorAll('.detail-trigger').forEach((button) => {
    const panel = document.getElementById(button.dataset.project);
    const isOpen = panel && !panel.hidden;
    button.textContent = t(isOpen ? 'detail.close' : 'detail.open');
    button.setAttribute('aria-expanded', String(Boolean(isOpen)));
  });
}

function applyLanguage(nextLang) {
  lang = translations[nextLang] ? nextLang : 'en';
  safeStorageSet('portfolio-language', lang);
  doc.lang = lang;
  document.title = translations[lang].meta.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', translations[lang].meta.description);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', t(element.dataset.i18nAlt));
  });

  langBtn.textContent = lang === 'en' ? 'EN / ID' : 'ID / EN';
  updateDetailButtons();
}

window.addEventListener('scroll', () => {
  const max = doc.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

if (matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  document.querySelectorAll('a,button,.magnetic-photo').forEach((element) => {
    element.addEventListener('mouseenter', () => cursor.classList.add('active'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
}

document.querySelectorAll('.detail-trigger').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.dataset.project);
    if (!panel) return;
    const opening = panel.hidden;
    panel.hidden = !opening;
    updateDetailButtons();
    if (opening && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

langBtn.addEventListener('click', () => applyLanguage(lang === 'en' ? 'id' : 'en'));

function initMotion() {
  if (!window.gsap || !window.ScrollTrigger || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((element) => {
      element.style.opacity = 1;
      element.style.transform = 'none';
    });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.reveal').forEach((element) => {
    gsap.to(element, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
  });
  gsap.from('.kinetic-title .line', { yPercent: 110, opacity: 0, stagger: 0.12, duration: 1.05, ease: 'power4.out', delay: 0.15 });
  gsap.to('.orbit-a', { rotation: 180, y: 100, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.to('.orbit-b', { rotation: -220, y: -80, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  gsap.utils.toArray('.project-media img').forEach((image) => {
    gsap.fromTo(image, { scale: 1.08 }, { scale: 1, scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 1 } });
  });
  gsap.utils.toArray('.journey-sticky h2 span').forEach((line, index) => {
    gsap.from(line, { x: index % 2 ? -100 : 100, opacity: 0, scrollTrigger: { trigger: '.journey', start: 'top 70%', end: 'top 20%', scrub: 1 } });
  });
  gsap.to('.closing-lines', { yPercent: -12, scrollTrigger: { trigger: '.closing', start: 'top bottom', end: 'bottom top', scrub: 1 } });
}

applyLanguage(lang);
window.addEventListener('load', initMotion);


// Expose the translation layer for the V3 motion and content extension.
window.portfolioTranslations = translations;
window.applyPortfolioLanguage = applyLanguage;
window.getPortfolioLanguage = () => lang;
