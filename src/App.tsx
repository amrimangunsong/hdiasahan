import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Opportunity from './pages/Opportunity'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/page/opportunity" element={<Opportunity />} />
        </Routes>
      </main>
      <footer className="py-20 bg-slate-50 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div>
            <h2 className="text-2xl font-black text-blue-600 mb-4 tracking-tighter">hdiasahan</h2>
            <p className="text-slate-500 max-w-sm font-medium mb-3">Pusat informasi produk kesehatan alami dan peluang bisnis HDI untuk wilayah Asahan dan sekitarnya.</p>
            <a 
              href="https://wa.me/6282184828865" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-slate-700 hover:text-blue-600 transition text-sm"
            >
              Hubungi / WA: +62 821-8482-8865
            </a>
          </div>
          <div className="text-slate-400 text-sm font-bold md:text-right">
            &copy; 2026 hdiasahan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function AppWrapper() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

