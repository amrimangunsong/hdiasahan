import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="pt-24 pb-20 px-6">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
            Solusi <br/>
            <span className="text-blue-600">Kesehatan</span> <br/>
            Alami Dunia.
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            Temukan produk perlebahan terbaik untuk menjaga imunitas dan kesehatan keluarga Anda dengan standar kualitas internasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition text-center">
              Lihat Produk
            </Link>
            <Link to="/page/opportunity" className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition text-center">
              Peluang Bisnis
            </Link>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1585250001004-9721752b0270?auto=format&fit=crop&q=80&w=800" 
            alt="Natural Health" 
            className="relative rounded-[3rem] shadow-2xl"
          />
        </motion.div>
      </section>
    </div>
  )
}
