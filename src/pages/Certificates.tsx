import { motion } from 'framer-motion'
import { ShieldCheck, Search } from 'lucide-react'

export default function Certificates() {
  return (
    <div className="pt-32 pb-20 px-6">
      <section className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-blue-100 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600">
            <ShieldCheck size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Validasi Sertifikat</h2>
          <p className="text-slate-500 text-lg mb-10 font-medium">Masukkan Enterprise ID untuk cek keaslian sertifikat HDI Anda.</p>
        </motion.div>
        
        <div className="relative group mb-6">
          <input 
            type="text" 
            placeholder="Contoh: 123456" 
            className="w-full pl-14 pr-6 py-5 rounded-3xl border-2 border-slate-100 focus:border-blue-600 outline-none transition-all text-lg font-semibold bg-slate-50/50" 
          />
          <Search className="absolute left-6 top-5.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={24} />
        </div>
        <button className="w-full bg-blue-600 text-white py-5 rounded-3xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition">Cari Sertifikat</button>
      </section>
    </div>
  )
}
