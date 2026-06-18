import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Search, Package, ShieldCheck, UserPlus } from 'lucide-react'

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
        <a href="https://hdi.com/new-registration" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-300 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition flex items-center gap-2">
          <UserPlus size={20} /> Daftar Member
        </a>
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
