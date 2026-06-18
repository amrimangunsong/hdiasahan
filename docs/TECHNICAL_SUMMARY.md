# Dokumentasi Teknis: hdiasahan (Blogger SPA)

## Ringkasan Proyek
Aplikasi Single Page (SPA) berbasis React yang dihosting di Blogger dengan aset statis dilayani melalui GitHub & JSDelivr.

## Arsitektur Fundamental
- **Framework:** React + Vite + TypeScript.
- **Routing:** `HashRouter` (diperlukan karena Blogger tidak mendukung fallback URL sisi server).
- **Styling:** Tailwind CSS v4.
- **Database:** Supabase.
- **Hosting:** 
  - Logika/Struktur: Template XML Blogger.
  - Aset (JS/CSS): GitHub Repository (`amrimangunsong/hdiasahan`).
  - CDN: JSDelivr (`cdn.jsdelivr.net/gh/...`).

## Strategi Routing (HashRouter)
Blogger akan mengembalikan 404 jika mengakses path seperti `/products` secara langsung. Menggunakan `HashRouter` (`/#/products`) memastikan permintaan ke server Blogger tetap ke root (`/`), sementara React Router menangani bagian setelah `#`.

## Workflow Deployment
1. **Build:** Jalankan `npm run build`. Vite dikonfigurasi untuk menghasilkan nama file statis (`assets/index.js` & `assets/index.css`) agar link di Blogger tidak perlu sering diupdate.
2. **Push GitHub:** Push folder `dist/` ke branch `main` di repository GitHub.
3. **Blogger XML:** Tempel isi `blogger-template.xml` ke Editor HTML Blogger. Template ini memanggil aset langsung dari GitHub.

## Konfigurasi Penting
### vite.config.ts
Menggunakan Rollup options untuk memastikan nama file output konsisten:
```typescript
output: {
  entryFileNames: 'assets/[name].js',
  assetFileNames: 'assets/[name].[ext]'
}
```

### blogger-template.xml
Template minimalis yang membersihkan elemen default Blogger dan menyediakan mount point `<div id='root'></div>`.

## Troubleshooting & Cache
JSDelivr memiliki cache. Jika perubahan di GitHub tidak langsung muncul di Blogger, tunggu beberapa menit atau gunakan versi spesifik/commit hash di URL jika mendesak.
