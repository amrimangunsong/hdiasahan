import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, TrendingUp, MessageCircle } from 'lucide-react'

export default function Opportunity() {
  const waNumber = "6282184828865"
  const waLink = `https://wa.me/${waNumber}?text=Halo,%20saya%20tertarik%20ingin%20tahu%20lebih%20lanjut%20tentang%20peluang%20bisnis%20HDI.`

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <div className="bg-white overflow-hidden pt-20">
      {/* Section 1: Hero */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
              Kerja Tetap Jalan, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Penghasilan Tambahan
              </span> <br/>
              Juga Bisa Jalan.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Banyak karyawan ingin memiliki pemasukan tambahan, tetapi terkendala waktu, modal, dan pengalaman.
              Mulai bertahap bersama HDI tanpa harus meninggalkan pekerjaan utama Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition text-center flex items-center justify-center gap-2">
                Saya Ingin Tahu Caranya <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-blue-100 rounded-[2rem] -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Team Collaboration" 
              className="relative rounded-[2rem] shadow-2xl rotate-1 transition hover:rotate-0 duration-500 object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Pain Point */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Apakah Anda Mengalami Hal Ini?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Gaji terasa habis sebelum akhir bulan",
              "Pengeluaran terus bertambah",
              "Ingin punya usaha sendiri tetapi takut gagal",
              "Ingin menambah penghasilan tanpa mengganggu pekerjaan",
              "Khawatir masa depan hanya bergantung pada gaji"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                  <CheckCircle size={20} />
                </div>
                <span className="font-semibold text-slate-700">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Mindset */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
              alt="Financial Freedom" 
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Mengapa Banyak Karyawan <br/> Mencari Penghasilan Kedua?
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>Karena satu sumber penghasilan sering kali tidak cukup untuk menghadapi kebutuhan yang terus meningkat.</p>
              <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl shadow-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <TrendingUp size={80} />
                </div>
                <p className="font-bold text-xl relative z-10">
                  "Bukan karena gaji kurang, tetapi karena biaya hidup terus bertambah setiap tahun."
                </p>
              </div>
              <p>Orang yang memiliki lebih dari satu sumber penghasilan biasanya memiliki fleksibilitas finansial yang lebih baik.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Solusi */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Mengenal Peluang Bisnis HDI</h2>
            <p className="text-slate-400 text-lg md:text-xl">
              HDI merupakan perusahaan yang berfokus pada produk kesehatan alami dan telah berkembang di Indonesia selama puluhan tahun.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Paruh waktu", desc: "Bisa dikerjakan di sela jam istirahat atau sepulang kantor." },
              { title: "Fleksibel", desc: "Tidak ada target kaku. Anda yang mengatur ritme kerja sendiri." },
              { title: "Modal Terjangkau", desc: "Mulai tanpa risiko finansial besar, fokus pada pengembangan." },
              { title: "Sistem & Komunitas", desc: "Pelatihan lengkap dari pemula hingga menjadi profesional." },
              { title: "Produk Teruji", desc: "Produk perlebahan kualitas dunia yang mudah diterima pasar." },
              { title: "Cocok untuk Pemula", desc: "Tanpa latar belakang bisnis pun bisa sukses bersama mentor." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition group"
              >
                <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-32 px-6 text-center">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Mulai Dengan <br className="md:hidden"/> <span className="text-green-600">Konsultasi Gratis</span>
          </h2>
          <div className="text-lg md:text-xl text-slate-600 space-y-4 mb-12">
            <p>Tidak ada kewajiban untuk bergabung.</p>
            <p>Kita bisa berdiskusi terlebih dahulu apakah peluang ini sesuai dengan tujuan dan kondisi Anda.</p>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-green-700 shadow-2xl shadow-green-200 transition inline-flex items-center gap-3">
            <MessageCircle size={24} /> Chat WhatsApp Sekarang
          </a>
          <p className="mt-8 text-slate-400 text-sm font-medium">Klik tombol di atas untuk terhubung langsung.</p>
        </motion.div>
      </section>
    </div>
  )
}
