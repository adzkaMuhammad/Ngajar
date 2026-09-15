# Catatan Impor Data — WAJIB DIBACA

Data jadwal & guru di app ini diimpor otomatis dari `Jadwal_KBM_2026-2027__1_.xlsx`,
sheet **"Test Jadwal 14926"** + **"Beban Ajar 14926"** + **"Jadwal Kuliah Guru 14926"**
(sesuai konfirmasi kamu bahwa versi "14926" adalah acuan final).

Hasil: **46 guru**, **455 slot mengajar** berhasil diimpor bersih.

## Yang perlu kamu cek ulang

1. **Kode "48H" ambigu.** Di sheet "Jadwal Kuliah Guru 14926", kode guru `48` terdaftar
   sebagai **Amirudin Rahman, S.Pd.** Tapi di dalam sheet "Test Jadwal 14926" sendiri ada
   tabel kecil terpisah yang bilang kode `48` = **Shofaun Nada, S.H.** Dua sumber di file
   yang sama saling bertentangan. Saya pakai **Shofaun Nada** (karena tabelnya ada langsung
   di sheet jadwal yang kamu pilih sebagai final), tapi ini cuma memengaruhi **1 slot**
   (Rabu, PKN, kelas X-8). Cek manual kalau perlu.

2. **3 guru di roster belum punya jadwal sama sekali** (kemungkinan guru baru/cadangan):
   - Rinda Rahma Syahidah
   - Muhamad Hamdan Mubarok, S.Mat.
   - Sri Kumala
   Mereka tetap muncul di app (bisa dipilih, dashboard-nya kosong, tinggal ditambah manual).

3. **Slot yang SENGAJA dilewati** (bukan pelajaran per-guru biasa, jadi tidak bisa
   dipetakan ke satu guru tertentu secara bersih):
   - `Ceremony`, `Break`, `Dzuhur Break`, `Ashar Break`, `Picket and Literacy` — ini
     memang bukan jam mengajar (upacara/istirahat/piket bersama), benar dilewati.
   - `U` (6 slot, Jumat & Sabtu pagi) dan `T` (21 slot, Sabtu siang, kemungkinan besar
     "Tahfidz" massal) — aktivitas sekolah yang tidak terikat ke satu kode guru spesifik
     di data sumber. **Tidak diimpor.** Kalau ini sebenarnya jam mengajar reguler,
     tambahkan manual lewat app.
   - `Dr. Abdul Mughits` / `Dr. Muh Nasirudin` (Jumat & Sabtu, sesi gabungan lintas kelas)
     — ustadz tamu, bukan bagian dari 46 guru roster. Tidak diimpor.
   - `Y` (28 slot) — kode placeholder di sumber data, kemungkinan kelas yang belum
     ditentukan gurunya. Tidak diimpor.

4. **Nama mapel disederhanakan ke Bahasa Indonesia** (mis. `ENGLISH`→"Bahasa Inggris",
   `MATH`→"Matematika") biar enak dibaca. Ganti sendiri di `js/scheduledata.js` kalau
   mau istilah lain.

## Model datanya — penting dipahami sebelum deploy

Karena ini situs statis (GitHub Pages, tanpa server/database):

- Jadwal di atas jadi **data bawaan (seed)** yang otomatis termuat pertama kali app
  dibuka di suatu perangkat, lalu disimpan ke **localStorage perangkat itu saja**.
- Kalau guru A edit jadwalnya sendiri dari HP-nya, perubahan itu **tidak otomatis
  sinkron** ke perangkat lain / guru lain — karena tidak ada server pusat.
- Untuk update jadwal massal (semester baru dsb): edit ulang Excel-nya → minta saya
  regenerate `js/gurudata.js` dan `js/scheduledata.js` → commit & push ke GitHub →
  semua yang buka app dengan cache baru dapat data terbaru (tombol
  "Reset jadwal guru ini" di Pengaturan bisa dipakai tiap guru untuk narik ulang versi
  resmi terbaru dan buang editan lokalnya).
- Kalau butuh sinkron real-time antar-guru/perangkat, itu perlu backend beneran
  (database + auth) — di luar cakupan app statis ini.
