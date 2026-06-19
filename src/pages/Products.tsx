import { motion } from 'framer-motion'
import { Package, RefreshCw, AlertTriangle } from 'lucide-react'
import { useProducts } from '../hooks/useProducts'

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price)
}

export default function Products() {
  const { products, loading, error, refetch } = useProducts()

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-12"
      >
        <div className="bg-blue-600 p-2 rounded-xl text-white">
          <Package size={24} />
        </div>
        <h1 className="text-4xl font-black text-slate-900">Katalog Produk</h1>
      </motion.div>
      
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm animate-pulse">
              <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] mb-6"></div>
              <div className="h-6 bg-slate-100 rounded-lg w-2/3 mb-4"></div>
              <div className="h-4 bg-slate-100 rounded-lg w-full mb-2"></div>
              <div className="h-4 bg-slate-100 rounded-lg w-5/6 mb-6"></div>
              <div className="h-10 bg-slate-100 rounded-full w-full"></div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-3xl p-8 max-w-xl mx-auto text-center shadow-lg shadow-red-50">
          <AlertTriangle className="mx-auto text-red-500 mb-4" size={48} />
          <h3 className="text-xl font-bold text-slate-950 mb-2">Gagal Memuat Produk</h3>
          <p className="text-red-700 text-sm mb-6 font-medium">{error}</p>
          <button 
            onClick={refetch}
            className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition inline-flex items-center gap-2"
          >
            <RefreshCw size={16} /> Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
          <Package className="mx-auto text-slate-400 mb-4" size={48} />
          <p className="text-slate-500 text-lg font-medium">Belum ada produk terdaftar.</p>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] mb-6 overflow-hidden relative">
                  {product.image_url ? (
                    <img 
                      src={product.image_url} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs group-hover:scale-110 transition duration-700">
                      Image Coming Soon
                    </div>
                  )}
                </div>
                <div className="px-2">
                  <h3 className="font-bold text-2xl text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">{product.description || 'Tidak ada deskripsi tersedia.'}</p>
                </div>
              </div>
              <div className="px-2 pt-4 border-t border-slate-50 flex justify-between items-center mt-auto">
                <span className="font-black text-xl text-blue-600">{formatPrice(product.price)}</span>
                <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition">Detail</button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
