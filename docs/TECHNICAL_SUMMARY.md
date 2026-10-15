# Dokumentasi Teknis & Fundamental: hdiasahan (Blogger SPA)

## Ringkasan Proyek
Aplikasi Single Page (SPA) berbasis React yang dihosting di Blogger dengan aset statis dilayani melalui GitHub & JSDelivr, dioptimalkan untuk kinerja mobile-first serta integrasi pemasaran modern.

## Arsitektur Fundamental
- **Framework:** React + Vite + TypeScript.
- **Routing:** `HashRouter` (`/#/...`) untuk mengatasi keterbatasan Blogger tanpa server-side routing fallback.
- **Styling:** Tailwind CSS v4 dengan animasi halus menggunakan `framer-motion`.
- **Database:** Neon PostgreSQL (Serverless HTTP Driver).
- **Analytics & Tracking:** Meta Pixel (`ID: 1409312038048592`) terintegrasi pada `index.html`, `dist/index.html`, dan `blogger-template.xml`.
- **Hosting & Delivery:** 
  - Logika: Template XML Blogger (`blogger-template.xml`).
  - Aset (JS/CSS): GitHub Repository (`amrimangunsong/hdiasahan`).
  - CDN: JSDelivr (`cdn.jsdelivr.net/gh/...`).

## Fitur & Optimasi Terbaru
1. **Landing Page Peluang Bisnis (`/page/opportunity`)**:
   - Desain profesional, elegan, dan *mobile-first* berkelas korporat.
   - Mengikuti 9 struktur bagian persuasif (Hero, Situasi Relatable, Fleksibilitas, Model Bisnis, Cara Kerja, Pendampingan HDI Center Asahan, Target Audiens, FAQ, dan CTA Penutup).
   - Bilah tombol WhatsApp mengambang (*Sticky Floating CTA*) khusus perangkat seluler untuk memaksimalkan konversi lead.
   - Nomor WhatsApp resmi admin: **+62 821-8482-8865**.
2. **Standardisasi Agent (`AGENTS.md`)**:
   - Panduan spesifik bagi AI / Hermes Agent dalam mengelola dan memelihara codebase ini.

## Workflow Deployment & Maintenance
1. **Build:** Jalankan `npm run build` untuk memastikan kompilasi TypeScript dan bundel Vite berhasil.
2. **Push GitHub:** Push perubahan ke branch `main` di GitHub.
3. **Update CDN Link / Blogger:** Pastikan tag `blogger-template.xml` merujuk ke hash commit terbaru jika ada perubahan aset statis.
