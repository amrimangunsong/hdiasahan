import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, MessageCircle, HelpCircle, ShieldCheck, Users, Briefcase, BookOpen, Clock, ChevronDown, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Opportunity() {
  const waNumber = "6282184828865"
  const waMessage = encodeURIComponent("Halo HDI Center Asahan, saya ingin mengenal peluang bisnis HDI. Boleh dijelaskan cara kerja bisnisnya, proses memulai, dan pendampingan yang tersedia?")
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "Apakah harus berhenti dari pekerjaan utama?",
      a: "Tidak sama sekali. Peluang ini dirancang fleksibel sehingga Anda bisa membangunnya sebagai usaha sampingan di sela waktu luang atau sepulang bekerja."
    },
    {
      q: "Apakah harus punya pengalaman berjualan?",
      a: "Tidak wajib. Di HDI Center Asahan, kami menyediakan bimbingan, pelatihan produk, serta cara memperkenalkan produk kepada calon pelanggan dari nol."
    },
    {
      q: "Bagaimana cara memulai?",
      a: "Anda bisa memulainya dengan mengenal produk dan sistemnya terlebih dahulu. Hubungi kami via WhatsApp untuk mendapatkan penjelasan awal tanpa tekanan untuk langsung bergabung."
    },
    {
      q: "Apakah ada biaya untuk bergabung atau memulai?",
      a: "[PERLU DIISI DENGAN INFORMASI RESMI HDI] Pendaftaran atau pembelian awal mengikuti ketentuan resmi perusahaan yang transparan tanpa biaya tersembunyi."
    },
    {
      q: "Bagaimana cara kerja komisi dan penghasilan?",
      a: "Penghasilan bersumber dari laba penjualan produk serta pengembangan jaringan sesuai ketentuan resmi HDI. Hasil yang diperoleh sangat bergantung pada usaha, ketekunan, dan keterampilan masing-masing individu."
    },
    {
      q: "Berapa banyak waktu yang perlu disediakan?",
      a: "Fleksibel. Anda bisa menyisihkan 1 hingga 2 jam per hari secara konsisten sesuai kesibukan pekerjaan utama Anda."
    },
    {
      q: "Apakah ada pendampingan dari HDI Center Asahan?",
      a: "Ya. Kami menyediakan edukasi produk, bimbingan penjualan, serta pertemuan rutin untuk membantu langkah belajar Anda."
    }
  ]

  return (
    <div className="bg-slate-50 overflow-hidden pt-16 md:pt-20 text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* BAGIAN 1 — HERO SECTION (Corporate & High-Converting Mobile View) */}
      <section className="relative py-16 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div {...fadeIn} className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-md">
              <Sparkles size={16} className="text-blue-400 animate-pulse" />
              <span>HDI Center Asahan • Program Kemitraan Resmi</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6">
              Ingin Punya Usaha Sampingan, <br className="hidden sm:inline"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                Tapi Bingung Mulai Dari Mana?
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Kenali peluang bisnis HDI, pelajari cara kerja produk dan sistemnya, lalu temukan bagaimana HDI Center Asahan siap mendampingi langkah awal Anda tanpa mengganggu pekerjaan utama.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-emerald-900/35 transition-all duration-300 flex items-center justify-center gap-3 transform active:scale-95"
              >
                <MessageCircle size={22} /> Kenali Peluang Bisnisnya <ArrowRight size={18} />
              </a>
            </div>

            <div className="inline-block text-xs sm:text-sm text-slate-400 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-md">
              💡 <strong className="text-slate-200">Prinsip Kami:</strong> Kenali dulu peluangnya, pelajari sistemnya, putuskan belakangan. Tanpa tekanan.
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-30 blur-xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/80 backdrop-blur-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Pendampingan Usaha Sampingan HDI" 
                className="w-full h-[280px] sm:h-[360px] object-cover object-center transform hover:scale-105 transition duration-700"
              />
              <div className="p-6 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent">
                <p className="text-sm font-bold text-white mb-1">Dukungan Profesional & Terpadu</p>
                <p className="text-xs text-slate-400">Belajar bisnis dengan ritme santai namun terstruktur bersama mentor berpengalaman di Asahan.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BAGIAN 2 — SITUASI YANG RELATABLE (Clean Card Grid) */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Apakah Anda Merasakan Hal Serupa?</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 text-sm sm:text-base">Banyak pekerja dan karyawan menghadapi tantangan finansial dan waktu di era modern:</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Ingin mencoba usaha sampingan, tetapi belum tahu langkah pertama yang tepat.",
              "Masih harus fokus penuh pada pekerjaan utama di kantor atau tempat kerja harian.",
              "Butuh panduan dan tempat belajar soal produk, pemasaran, serta cara berniaga dari nol.",
              "Ingin membangun sumber penghasilan tambahan yang aman dan berkelanjutan."
            ].map((text, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-slate-50 hover:bg-blue-50/50 p-5 sm:p-6 rounded-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 shadow-sm"
              >
                <div className="bg-blue-600/10 p-2 rounded-xl text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle size={20} />
                </div>
                <span className="font-medium text-slate-700 text-sm sm:text-base leading-relaxed">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN 3 — MENGAPA USAHA SAMPINGAN */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div {...fadeIn} className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
                alt="Fleksibilitas Usaha" 
                className="w-full h-[300px] sm:h-[380px] object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block">Perspektif Finansial</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Membangun Masa Depan Tanpa Harus Meninggalkan Pekerjaan Utama
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Memiliki sumber penghasilan kedua memberikan ketenangan dan fleksibilitas. Namun, memilih wadah usaha yang tepat adalah kunci utama agar waktu Anda berharga tidak terbuang sia-sia.
            </p>
            <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10 font-black text-8xl">HDI</div>
              <p className="font-semibold text-base sm:text-lg leading-relaxed relative z-10 text-blue-100">
                "Peluang usaha yang baik adalah usaha yang memungkinkan Anda belajar bertahap, didampingi komunitas yang aktif, dan fleksibel dijalankan kapan saja."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BAGIAN 4 — MENGENAL PELUANG BISNIS HDI */}
      <section className="py-24 px-4 sm:px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3">Model Bisnis</span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Mengenal Peluang Bisnis HDI</h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              HDI adalah perusahaan global berfokus pada produk kesehatan perlebahan berkualitas tinggi dengan model usaha yang transparan dan ramah pemula.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Briefcase className="text-blue-400" size={24} />,
                title: "Usaha Paruh Waktu", 
                desc: "Dapat dikerjakan di sela jam istirahat atau sepulang dari pekerjaan utama Anda tanpa mengganggu kewajiban harian." 
              },
              { 
                icon: <Clock className="text-blue-400" size={24} />,
                title: "Waktu Fleksibel", 
                desc: "Tidak ada target jam kerja yang mengikat. Anda sepenuhnya memegang kendali atas ritme dan waktu kerja." 
              },
              { 
                icon: <ShieldCheck className="text-blue-400" size={24} />,
                title: "Produk Teruji & Dipercaya", 
                desc: "Memasarkan produk kesehatan perlebahan berstandar internasional yang terbukti diterima dengan baik oleh masyarakat." 
              },
              { 
                icon: <BookOpen className="text-blue-400" size={24} />,
                title: "Sistem Belajar Bertahap", 
                desc: "Tersedia panduan, materi edukasi, dan kelas pemula sehingga siapa pun dapat mempelajari bisnis ini dari nol." 
              },
              { 
                icon: <Users className="text-blue-400" size={24} />,
                title: "Didukung Komunitas", 
                desc: "Anda tidak berjalan sendirian. Komunitas dan mentor lokal siap membimbing setiap langkah belajar Anda." 
              },
              { 
                icon: <CheckCircle className="text-blue-400" size={24} />,
                title: "Transparan & Realistis", 
                desc: "Model usaha jelas berdasarkan penjualan produk dan pengembangan jaringan sesuai ketentuan resmi perusahaan." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/60 border border-slate-700/60 p-6 sm:p-8 rounded-3xl hover:bg-slate-800 transition duration-300 shadow-xl backdrop-blur-md group"
              >
                <div className="bg-blue-600/20 p-3 rounded-2xl w-fit mb-5 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN 5 — CARA KERJA BISNIS */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Bagaimana Cara Kerja Bisnis Ini?</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 text-sm sm:text-base">Proses sederhana dan realistis yang bisa Anda jalankan:</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Memahami Produk & Aturan Bisnis", desc: "Mempelajari manfaat produk kesehatan perlebahan HDI serta memahami sistem dan ketentuan resmi perusahaan." },
              { step: "02", title: "Belajar Mengenalkan Produk", desc: "Mendapatkan bimbingan cara merekomendasikan produk kepada orang terdekat, rekan kerja, atau melalui media digital." },
              { step: "03", title: "Melayani Pelanggan & Penjualan", desc: "Melakukan transaksi penjualan langsung kepada konsumen dan mendapatkan laba eceran yang transparan." },
              { step: "04", title: "Mengikuti Pelatihan & Pendampingan", desc: "Hadiri sesi edukasi berkala yang diselenggarakan oleh HDI Center Asahan untuk meningkatkan keterampilan komunikasi dan pemasaran." },
              { step: "05", title: "Pengembangan Jaringan (Opsional)", desc: "Membangun dan membimbing tim penjualan Anda sendiri untuk memperluas cakupan usaha dan meraih komisi tambahan sesuai aturan resmi." }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 bg-slate-50 hover:bg-slate-100/80 p-5 sm:p-6 rounded-2xl border border-slate-100 transition"
              >
                <span className="bg-blue-600 text-white font-black text-base sm:text-lg w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN 6 — PENDAMPINGAN HDI CENTER ASAHAN */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 to-indigo-50/50 border-y border-blue-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div {...fadeIn} className="lg:col-span-7 space-y-6">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-100/80 px-3 py-1 rounded-md">Dukungan Lokal</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Pendampingan Langsung dari HDI Center Asahan
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Kami hadir untuk mendampingi Anda di wilayah Asahan dan sekitarnya. Anda tidak perlu meraba-raba cara memulai sendirian. Layanan nyata yang kami sediakan:
            </p>
            <ul className="space-y-3 text-slate-700 font-medium text-sm sm:text-base">
              {[
                "Penjelasan awal tentang peluang & proses bergabung",
                "Edukasi produk kesehatan perlebahan mendalam",
                "Pendampingan belajar penjualan dan pemasaran praktis",
                "Informasi kegiatan edukasi dan pertemuan rutin lokal"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-3.5 rounded-xl shadow-sm border border-blue-100/60">
                  <CheckCircle className="text-blue-600 shrink-0" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-blue-100 text-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <MessageCircle size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mulai Konsultasi Awal</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Ingin tahu lebih banyak tentang jadwal pertemuan atau cara memulai? Hubungi admin resmi kami sekarang.
            </p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white w-full py-4 rounded-xl font-bold text-base shadow-lg shadow-emerald-200 transition flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Tanya via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* BAGIAN 7 — UNTUK SIAPA PELUANG INI COCOK? */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Untuk Siapa Peluang Ini Cocok?</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 text-sm sm:text-base">Peluang ini sangat tepat dipertimbangkan oleh Anda yang:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Bersedia meluangkan waktu secara realistis di sela kesibukan harian.",
              "Memiliki semangat belajar untuk memahami produk dan cara berniaga.",
              "Senang membangun relasi sosial dan melayani pelanggan dengan tulus.",
              "Memahami bahwa hasil finansial sangat bergantung pada usaha, keterampilan, dan konsistensi masing-masing."
            ].map((text, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-100 flex items-start gap-4"
              >
                <CheckCircle className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-8 bg-amber-50/80 border border-amber-200/80 p-5 sm:p-6 rounded-2xl text-center">
            <p className="text-amber-900 text-xs sm:text-sm leading-relaxed">
              ⚠️ <strong>Catatan Kejujuran:</strong> Ini bukan program cepat kaya, bukan penghasilan pasif otomatis, dan bukan jaminan memperoleh uang tambahan tanpa kerja nyata. Semua pencapaian membutuhkan proses belajar dan ketekunan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BAGIAN 8 — FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Pertanyaan yang Sering Diajukan</h2>
            <div className="h-1.5 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition text-sm sm:text-base"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="text-blue-600 shrink-0" size={18} />
                    {faq.q}
                  </span>
                  <ChevronDown className={`transform transition-transform duration-300 text-slate-500 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} size={18} />
                </button>
                {openFaq === index && (
                  <div className="px-5 sm:px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-3 text-sm sm:text-base">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BAGIAN 9 — CTA PENUTUP */}
      <section className="py-24 px-4 sm:px-6 text-center bg-white">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-3 bg-blue-50 w-fit mx-auto px-4 py-1.5 rounded-full">Langkah Awal Tanpa Risiko</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Mau Tahu Apakah Peluang Ini <br/> Cocok Buatmu?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
            Tanyakan cara kerja bisnis HDI, proses memulai, dan pendampingan yang tersedia. Pelajari dulu sebelum mengambil keputusan.
          </p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 transition inline-flex items-center gap-3 text-center"
          >
            <MessageCircle size={22} /> Tanya Peluang Bisnis via WhatsApp
          </a>
          <p className="mt-4 text-slate-400 text-xs sm:text-sm font-medium">Nomor WhatsApp Resmi Admin HDI Center Asahan (+62 821-8482-8865)</p>
        </motion.div>
      </section>

      {/* MOBILE FLOATING WHATSAPP CTA BAR (High-Converting Mobile UX) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-white/10 p-3 sm:hidden flex items-center justify-between gap-3 shadow-2xl">
        <div className="text-left pl-2">
          <p className="text-xs text-slate-300 font-semibold">Punya Pertanyaan?</p>
          <p className="text-[11px] text-emerald-400 font-bold">Respon Cepat via WhatsApp</p>
        </div>
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-900/40 active:scale-95 transition"
        >
          <MessageCircle size={16} /> Chat WA
        </a>
      </div>

    </div>
  )
}
