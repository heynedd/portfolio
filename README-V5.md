# Portfolio Iden — Immersive V5

Hero: **RAPI DI BALIK LAYAR. BERDAMPAK DI DEPAN.**

Versi Inggris: **ORDER BEHIND THE SCENES. IMPACT UP FRONT.**

Narasi menghubungkan administrasi, social media, digital marketing support, serta pelaporan. Pengalaman dan tautan project bersumber dari portfolio pengguna. Nama tetap tersedia dalam identitas dan perkenalan, bukan sebagai headline hero.

## Buka dan deploy

Ekstrak ZIP dan buka `index.html`. Tidak perlu npm, build, server, atau API key. Untuk GitHub Pages, upload isi ZIP ke root repository (jangan upload ZIP-nya saja), lalu gunakan Settings → Pages → Deploy from a branch → main → /(root). Panduan tambahan ada di DEPLOY-GITHUB.md. Path aset relatif mendukung domain username.github.io dan subfolder repository.

## Yang baru dari V4

- Hero memenuhi layar dengan tulisan “flow” biru mengilap, gerak mengambang, perspektif, dan respons pointer.
- Tujuh stiker tipografi bergerak independen; jejak pixel hijau-biru mengikuti cursor desktop.
- Foto dipindah ke bagian perkenalan, bukan mendominasi hero.
- Galeri project mempertahankan mockup, catatan detail, dan tautan asli.
- Adegan scroll panjang: panah membesar → transisi ke terowongan cahaya → empat pesan bergantian.
- Terowongan digambar real time dengan proyeksi perspektif partikel Canvas 2D. Sekitar 440 garis pada desktop, 200 pada mobile; resolusi dibatasi.
- Penutup mengulang motif flow, dengan headline “Ide bagus? Mari beri arah.”
- Bahasa Indonesia menjadi awal kunjungan versi ini. Pilihan EN/ID berikutnya disimpan lokal.
- Jam menggunakan zona Asia/Jakarta, tanpa permintaan lokasi.

## Teknologi dan batas kesamaan

Ini interpretasi orisinal berdasarkan rekaman referensi HAOQI, bukan kode atau aset HAOQI. Gaya gerak yang diadaptasi: hero melayang, tipografi glossy, jejak pixel, objek membesar, dan transisi terowongan. Aset flow adalah render PNG transparan bergaya 3D yang digerakkan dengan transformasi perspektif (2.5D), bukan mesh WebGL yang dapat dilihat dari seluruh sisi. Efek terowongan merupakan animasi perspektif real time, bukan video rekaman.

Tidak ada audio, simulasi tabrakan benda, mesh 3D penuh, atau replika shader HAOQI. Scroll tetap native; pengguna dapat melompati adegan melalui tautan “Lanjut ke pengalaman”.

## Gerak dan aksesibilitas

Tombol Jeda animasi menghentikan gerak dan mengubah adegan menjadi konten statis. prefers-reduced-motion mendapat versi statis otomatis. Pada mobile tidak ada jejak cursor; benda tetap mengambang saat gerak aktif. Loop canvas berhenti saat adegan di luar layar atau tab tidak terlihat. Situs tanpa Canvas/JavaScript tetap menampilkan konten; pengalih bahasa dan detail interaktif membutuhkan JavaScript.

## Struktur

- index.html: halaman, pengalaman, project, kontak, adegan.
- assets/css/motion.css: layout dasar V4.
- assets/css/immersive.css: layout dan adegan V5.
- assets/js/main.js dan v3.js: data terjemahan serta detail dari portfolio terdahulu.
- assets/js/motion.js: copy bidang pekerjaan, reveal, pengaturan gerak.
- assets/js/immersive.js: headline kreatif EN/ID, animasi hero, portal, tunnel, jejak cursor.
- assets/img/flow.png: aset flow transparan orisinal.
- check-source.mjs: pemeriksaan sintaks, terjemahan, anchor, dan aset; jalankan `node check-source.mjs` bila Node.js tersedia.

## Validasi

Pemeriksaan source mencakup keempat file JavaScript, atribut terjemahan lama dan baru, keberadaan aset, serta anchor internal. Arsip diuji integritasnya. Pengujian tampilan akhir dalam browser desktop/mobile dan publikasi GitHub belum dilakukan dalam sesi ini; hasil visual identik dengan referensi tidak diklaim. Coba terutama awal hero, perpindahan empat pesan, pengalih bahasa, tombol jeda, dan semua detail project setelah membuka file.

Angka pengalaman dipertahankan dari source pengguna; belum diverifikasi secara independen. Periksa tanggal/status pekerjaan dan izin tautan Drive/Notion sebelum dipakai melamar. Mockup SKD asli masih menampilkan format tanggal pada sumbu grafik: ganti jika sudah memiliki screenshot yang diperbaiki. CV belum tersedia, sehingga tidak ditambahkan tombol unduh palsu.

## Aset generatif

flow.png dibuat sekali dengan built-in imagegen. Prompt: “Glossy inflated cobalt-blue lowercase script word ‘flow’, wide elegant connected lettering, soft cyan rim/reflections, subtle extruded depth, slight perspective, no other lettering, isolated transparent background, landscape. Floating 3D hero word for a creative portfolio connecting organized admin work to digital communication.”

Font Google Fonts dapat memerlukan internet; font fallback tetap tersedia. Semua animasi dan aset lainnya disertakan lokal.
