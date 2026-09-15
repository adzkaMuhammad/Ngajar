# Jadwal Guru — PWA (Android / iOS / Desktop)

App jadwal mengajar mingguan, jalan di browser & bisa di-"install" seperti app native
(PWA) di Android, iOS, dan Desktop. Tanpa backend — semua statis, cocok untuk GitHub Pages.

## Fitur

- Pilih guru (nama/kode) → dashboard jadwal Senin–Minggu.
- Mode **Per Kelas**: lihat jadwal lengkap satu kelas lintas semua guru.
- Kartu "jadwal terdekat" + notifikasi pengingat (aktif, bisa atur menit-sebelum & suara).
- Tambah / edit / hapus jadwal, dengan **deteksi bentrok** waktu otomatis.
- Total beban jam mengajar per minggu.
- Cetak jadwal (print browser, tanpa app tambahan).
- Ganti bahasa ID/EN, mode terang/gelap.
- Offline-ready (service worker) + installable ke home screen.
- Data awal (seed) hasil impor asli dari file Excel sekolah — lihat `DATA_NOTES.md`
  untuk detail & asumsi yang diambil saat impor (WAJIB dibaca sebelum deploy).

## Deploy ke GitHub Pages

1. Buat repo baru di GitHub, push seluruh isi folder ini ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Jadwal guru app"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
2. Di GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pilih branch `main`, folder `/ (root)`. Simpan.
3. Tunggu 1–2 menit, app akan hidup di:
   `https://USERNAME.github.io/NAMA-REPO/`
4. Bagikan link itu ke semua guru. Di HP, mereka bisa tap "Add to Home Screen"
   (Android Chrome / iOS Safari) supaya jadi ikon app dan notifikasi lebih stabil.

## Update data jadwal di kemudian hari

Edit `js/gurudata.js` (daftar guru) dan `js/scheduledata.js` (jadwal resmi) secara manual,
atau kirim ulang file Excel terbaru ke saya untuk di-generate ulang otomatis. Setelah itu:
```bash
git add js/gurudata.js js/scheduledata.js
git commit -m "Update jadwal"
git push
```
GitHub Pages otomatis redeploy dalam ~1 menit. Guru yang sudah pernah buka app perlu
klik tombol **"Reset jadwal guru ini"** di Pengaturan supaya editan lokal mereka
diganti dengan versi resmi terbaru (baca `DATA_NOTES.md` bagian "Model datanya").

## Struktur file

```
index.html          halaman utama
css/style.css        semua styling
js/gurudata.js        roster 46 guru
js/scheduledata.js    455 jadwal resmi (seed awal)
js/i18n.js            teks ID/EN
js/sound.js           generator suara notifikasi (Web Audio, tanpa file .mp3)
js/app.js             logic utama
manifest.json         konfigurasi PWA
sw.js                 service worker (offline + installable)
icons/                ikon app
DATA_NOTES.md          catatan asumsi impor data — baca sebelum deploy
```

## Batasan notifikasi (baca sebelum berharap banyak)

App statis tanpa server tidak bisa kirim push notification sungguhan. Yang berjalan:
- **Android/Desktop Chrome**: notifikasi jalan baik selama tab/app terbuka di
  foreground/background (tab tidak ditutup total).
- **iOS Safari**: notifikasi web hanya jalan kalau app sudah di-"Add to Home Screen"
  (iOS 16.4+), dan tetap tidak presisi kalau app benar-benar ditutup/di-force-quit lama.

Ini limitasi platform, bukan bug — kalau butuh notifikasi 100% reliable meski app
tertutup total di semua OS, itu perlu server push (APNs/FCM) + backend.
