import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Search, Package, ShieldCheck, UserPlus, TrendingUp, Users, Award, CheckCircle } from 'lucide-react'

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
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="text-center pt-10">
        <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
          HDI BUSINESS OPPORTUNITY
        </div>
        <h2 className="text-5xl font-extrabold mb-6 leading-tight">Ubah Hidup Anda Bersama <br/><span className="text-blue-600">Komunitas Health & Wealth</span></h2>
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Bangun bisnis mandiri dengan produk perlebahan yang sudah teruji lebih dari 30 tahun. Fleksibel, menguntungkan, dan berdampak bagi kesehatan banyak orang.
        </p>
        <a href="https://hdi.com/new-registration" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition inline-flex items-center gap-2">
          Mulai Sekarang <UserPlus size={20} />
        </a>
      </section>

      {/* Why HDI Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
            <TrendingUp size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Penghasilan Berkelanjutan</h3>
          <p className="text-slate-500">Sistem bagi hasil yang adil dan jenjang karier yang jelas untuk masa depan finansial Anda.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Mentor & Support</h3>
          <p className="text-slate-500">Tidak perlu takut memulai. Kami sediakan pelatihan intensif dan komunitas yang suportif.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
            <Award size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3">Produk Berkualitas</h3>
          <p className="text-slate-500">Berbasis ilmiah (High-Desert) yang telah membantu jutaan orang meningkatkan kualitas kesehatan.</p>
        </div>
      </section>

      {/* Benefits Checklist */}
      <section className="bg-blue-600 rounded-3xl p-10 md:p-16 text-white overflow-hidden relative">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Apa yang Anda Dapatkan?</h3>
            <ul className="space-y-4">
              {[
                "Hak bisnis internasional",
                "Akses portal belajar HDI Academy",
                "Sistem dropship & pengiriman nasional",
                "Bonus bulanan & trip luar negeri",
                "Akses eksklusif ke produk baru"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-blue-300" size={24} />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-500/30 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
            <p className="text-xl italic mb-6">"Bergabung dengan HDI bukan hanya tentang jualan madu, tapi tentang membangun aset dan membantu orang sehat."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
              <div>
                <p className="font-bold">Enterprise Leader</p>
                <p className="text-blue-200 text-sm">HDI Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center bg-slate-100 rounded-3xl p-12">
        <h3 className="text-2xl font-bold mb-4">Siap Mengambil Langkah Pertama?</h3>
        <p className="text-slate-600 mb-8">Daftar sekarang sebagai Enterpriser dan mulai perjalanan Anda.</p>
        <a href="https://hdi.com/new-registration" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">Daftar Member Gratis</a>
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
