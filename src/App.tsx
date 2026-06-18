import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Search, Package, ShieldCheck, CheckCircle } from 'lucide-react'

function Navbar() {
  const location = useLocation()
  const activeTab = location.pathname

  return (
    <nav className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">hdiasahan</Link>
        <div className="flex gap-6">
          <Link to="/" className={`hover:text-blue-600 ${activeTab === '/' ? 'text-blue-600 font-semibold' : ''}`}>Home</Link>
          <Link to="/products" className={`hover:text-blue-600 ${activeTab === '/products' ? 'text-blue-600 font-semibold' : ''}`}>Produk</Link>
          <Link to="/certificates" className={`hover:text-blue-600 ${activeTab === '/certificates' ? 'text-blue-600 font-semibold' : ''}`}>Sertifikat</Link>
          <Link to="/page/opportunity" className={`hover:text-blue-600 ${activeTab === '/page/opportunity' ? 'text-blue-600 font-semibold' : ''}`}>Bisnis</Link>
        </div>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <section className="text-center py-20">
      <h2 className="text-5xl font-extrabold mb-6">Solusi Kesehatan Alami</h2>
      <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
        Temukan produk perlebahan terbaik untuk menjaga imunitas dan kesehatan keluarga Anda.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Lihat Produk</Link>
        <Link to="/page/opportunity" className="bg-white border border-slate-300 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition">Peluang Bisnis</Link>
      </div>
    </section>
  )
}

function Products() {
  return (
    <section>
      <div className="flex items-center gap-2 mb-8">
        <Package className="text-blue-600" />
        <h2 className="text-3xl font-bold">Katalog Produk</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <div className="aspect-square bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-slate-400">Preview Gambar</div>
          <h3 className="font-bold text-lg">Clover Honey</h3>
          <p className="text-slate-500 text-sm mb-4">Madu alami terbaik untuk pencernaan.</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-600">Rp 500.000</span>
            <button className="text-sm bg-slate-100 px-3 py-1 rounded">Detail</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Certificates() {
  return (
    <section className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <ShieldCheck className="text-blue-600 mx-auto mb-4" size={48} />
        <h2 className="text-3xl font-bold">Validasi Sertifikat</h2>
        <p className="text-slate-500">Masukkan Enterprise ID untuk cek keaslian sertifikat.</p>
      </div>
      <div className="relative">
        <input type="text" placeholder="Contoh: 123456" className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
        <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
      </div>
      <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">Cari Sertifikat</button>
    </section>
  )
}

function Opportunity() {
  const waNumber = "628123456789" // TODO: Ganti dengan nomor WA aslinya
  const waLink = `https://wa.me/${waNumber}?text=Halo,%20saya%20tertarik%20ingin%20tahu%20lebih%20lanjut%20tentang%20peluang%20bisnis%20HDI.`

  return (
    <div className="space-y-24 pb-24 font-sans leading-relaxed text-slate-800">
      {/* Section 1: Hero */}
      <section className="text-center pt-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">
          Kerja Tetap Jalan, <br/>
          <span className="text-blue-600">Penghasilan Tambahan</span> Juga Bisa Jalan
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
          Banyak karyawan ingin memiliki pemasukan tambahan, tetapi terkendala waktu, modal, dan pengalaman.
        </p>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Melalui sistem bisnis HDI, Anda dapat memulai secara bertahap sambil tetap menjalankan pekerjaan utama.
        </p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition inline-flex items-center gap-2">
          Saya Ingin Tahu Caranya
        </a>
      </section>

      {/* Section 2: Pain Point */}
      <section className="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-sm max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Apakah Anda Mengalami Hal Ini?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Gaji terasa habis sebelum akhir bulan",
            "Pengeluaran terus bertambah",
            "Ingin punya usaha sendiri tetapi takut gagal",
            "Ingin menambah penghasilan tanpa mengganggu pekerjaan",
            "Khawatir masa depan hanya bergantung pada gaji"
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-4">
              <CheckCircle className="text-blue-500 shrink-0 mt-1" size={24} />
              <span className="text-lg text-slate-700 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Mindset */}
      <section className="text-center px-4">
        <h3 className="text-3xl font-bold mb-8">Mengapa Banyak Karyawan Mencari <br className="hidden md:block"/> Penghasilan Kedua?</h3>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-slate-600">
          <p>
            Karena satu sumber penghasilan sering kali tidak cukup untuk menghadapi kebutuhan yang terus meningkat.
          </p>
          <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 text-blue-900 font-medium">
            Bukan karena gaji kurang, tetapi karena biaya hidup terus bertambah setiap tahun.
          </p>
          <p>
            Orang yang memiliki lebih dari satu sumber penghasilan biasanya memiliki fleksibilitas finansial yang lebih baik.
          </p>
        </div>
      </section>

      {/* Section 4: Solusi */}
      <section className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white max-w-5xl mx-auto overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-8 text-center md:text-left">Mengenal Peluang Bisnis HDI</h3>
          <p className="text-lg text-slate-300 mb-10 max-w-3xl leading-relaxed">
            HDI merupakan perusahaan yang berfokus pada produk kesehatan alami dan telah berkembang di Indonesia selama puluhan tahun. Bisnis ini dapat dijalankan:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Paruh waktu",
              "Fleksibel",
              "Modal relatif terjangkau",
              "Didukung sistem dan komunitas",
              "Cocok untuk pemula"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                <CheckCircle className="text-blue-400" size={20} />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="text-center pt-10 px-4">
        <h3 className="text-3xl font-bold mb-6">Mulai Dengan Konsultasi Gratis</h3>
        <div className="max-w-2xl mx-auto space-y-6 mb-10 text-lg text-slate-600">
          <p>Tidak ada kewajiban untuk bergabung.</p>
          <p>Kita bisa berdiskusi terlebih dahulu apakah peluang ini sesuai dengan tujuan dan kondisi Anda.</p>
        </div>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-600 shadow-lg shadow-green-100 transition inline-flex items-center gap-2">
          Chat WhatsApp Sekarang
        </a>
      </section>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/page/opportunity" element={<Opportunity />} />
          </Routes>
        </main>
        <footer className="mt-20 border-t py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center text-slate-400 text-sm">
            &copy; 2026 hdiasahan. All rights reserved.
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}

export default App
