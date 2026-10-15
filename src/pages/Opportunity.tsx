import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, MessageCircle, HelpCircle, ShieldCheck, Users, Briefcase, BookOpen, Clock, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Opportunity() {
  const waNumber = "6282184828865"
  const waMessage = encodeURIComponent("Halo HDI Center Asahan, saya ingin mengenal peluang bisnis HDI. Boleh dijelaskan cara kerja bisnisnya, proses memulai, dan pendampingan yang tersedia?")
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
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
    <div className="bg-white overflow-hidden pt-20">
      
      {/* Bagian 1 — Hero */}
      <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              HDI Center Asahan • Peluang Usaha Sampingan
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Ingin Punya Usaha Sampingan, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Tapi Bingung Mulai Dari Mana?
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Kenali peluang bisnis HDI, pelajari cara kerja produk dan sistemnya, lalu temukan bagaimana HDI Center Asahan siap mendampingi langkah awal Anda tanpa mengganggu pekerjaan utama.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition text-center flex items-center justify-center gap-2"
              >
                Kenali Peluang Bisnisnya <ArrowRight size={20} />
              </a>
            </div>

            <p className="text-sm text-slate-500 italic bg-slate-100 p-4 rounded-xl border border-slate-200/60">
              💡 <strong>Catatan:</strong> Kenali dulu peluangnya, pelajari sistemnya, lalu putuskan apakah ini cocok untuk Anda. Tanpa tekanan.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] -rotate-1"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Pendampingan Usaha Sampingan HDI" 
              className="relative rounded-[2.5rem] shadow-2xl object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>

      {/* Bagian 2 — Situasi yang relatable */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Apakah Anda Merasakan Hal Serupa?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">Banyak pekerja dan karyawan menghadapi tantangan dalam mengatur keuangan dan masa depan:</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Ingin mencoba usaha sampingan, tetapi belum tahu langkah pertama yang harus diambil.",
              "Masih harus fokus penuh pada pekerjaan utama di kantor atau tempat kerja.",
              "Butuh panduan dan tempat belajar soal produk, pemasaran, serta cara menjalankan bisnis dengan benar.",
              "Ingin membangun sumber penghasilan tambahan yang aman dan berkelanjutan."
            ].map((text, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600 shrink-0 mt-0.5">
                  <CheckCircle size={22} />
                </div>
                <span className="font-medium text-slate-700 text-base leading-relaxed">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian 3 — Mengapa Usaha Sampingan */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
              alt="Fleksibilitas Usaha" 
              className="rounded-3xl shadow-xl"
            />
          </motion.div>
          <motion.div {...fadeIn} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Membangun Masa Depan Tanpa Harus Meninggalkan Pekerjaan Utama
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Memiliki sumber penghasilan kedua memberikan ketenangan dan fleksibilitas finansial yang lebih baik. Namun, memilih wadah usaha yang tepat adalah kunci utama agar waktu Anda tidak terbuang sia-sia.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl">
              <p className="text-blue-900 font-semibold text-lg">
                "Peluang usaha yang baik adalah usaha yang memungkinkan Anda belajar bertahap, didampingi komunitas yang aktif, dan fleksibel dijalankan kapan saja."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bagian 4 — Mengenal peluang bisnis HDI */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Mengenal Peluang Bisnis HDI</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              HDI adalah perusahaan global yang berfokus pada produk kesehatan perlebahan berkualitas tinggi. Kami menawarkan model usaha yang transparan, teruji, dan ramah pemula.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Briefcase className="text-blue-400" size={28} />,
                title: "Usaha Paruh Waktu", 
                desc: "Dapat dikerjakan di sela jam istirahat atau sepulang dari pekerjaan utama Anda tanpa mengganggu kewajiban harian." 
              },
              { 
                icon: <Clock className="text-blue-400" size={28} />,
                title: "Waktu Fleksibel", 
                desc: "Tidak ada target jam kerja yang mengikat. Anda sepenuhnya memegang kendali atas ritme dan waktu kerja." 
              },
              { 
                icon: <ShieldCheck className="text-blue-400" size={28} />,
                title: "Produk Teruji & Dipercaya", 
                desc: "Memasarkan produk kesehatan perlebahan berstandar internasional yang telah terbukti diterima dengan baik oleh masyarakat." 
              },
              { 
                icon: <BookOpen className="text-blue-400" size={28} />,
                title: "Sistem Belajar Bertahap", 
                desc: "Tersedia panduan, materi edukasi, dan kelas pemula sehingga siapa pun dapat mempelajari bisnis ini dari nol." 
              },
              { 
                icon: <Users className="text-blue-400" size={28} />,
                title: "Didukung Komunitas Positif", 
                desc: "Anda tidak berjalan sendirian. Komunitas dan mentor lokal siap membimbing setiap langkah belajar Anda." 
              },
              { 
                icon: <CheckCircle className="text-blue-400" size={28} />,
                title: "Transparan & Realistis", 
                desc: "Model usaha yang jelas berdasarkan penjualan produk dan pengembangan jaringan sesuai ketentuan resmi perusahaan." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition"
              >
                <div className="bg-blue-600/20 p-4 rounded-2xl w-fit mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian 5 — Cara kerja bisnis */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bagaimana Cara Kerja Bisnis Ini?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">Proses sederhana dan realistis yang bisa Anda jalankan:</p>
          </motion.div>

          <div className="space-y-6">
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
                className="flex items-start gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100"
              >
                <span className="bg-blue-600 text-white font-black text-xl w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian 6 — Pendampingan HDI Center Asahan */}
      <section className="py-24 bg-blue-50 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase block mb-3">Dukungan Lokal</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pendampingan Langsung dari HDI Center Asahan
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Kami hadir untuk mendampingi Anda di wilayah Asahan dan sekitarnya. Anda tidak perlu meraba-raba cara memulai sendirian. Layanan nyata yang kami sediakan meliputi:
            </p>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 shrink-0" size={20} />
                Penjelasan awal tentang peluang & proses bergabung
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 shrink-0" size={20} />
                Edukasi produk kesehatan perlebahan mendalam
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 shrink-0" size={20} />
                Pendampingan belajar penjualan dan pemasaran praktis
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-blue-600 shrink-0" size={20} />
                Informasi kegiatan edukasi dan pertemuan rutin lokal
              </li>
            </ul>
          </motion.div>
          <motion.div {...fadeIn} className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mulai Konsultasi Awal</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ingin tahu lebih banyak tentang jadwal pertemuan atau cara memulai? Hubungi admin resmi kami via WhatsApp.
            </p>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 text-white w-full py-4 rounded-2xl font-bold text-lg hover:bg-green-700 shadow-xl shadow-green-100 transition flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle size={22} /> Tanya via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bagian 7 — Untuk siapa peluang ini cocok? */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Untuk Siapa Peluang Ini Cocok?</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">Peluang ini sangat tepat dipertimbangkan oleh Anda yang:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4"
              >
                <CheckCircle className="text-blue-600 shrink-0 mt-1" size={22} />
                <span className="text-slate-700 font-medium leading-relaxed">{text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-10 bg-amber-50 border border-amber-200/60 p-6 rounded-2xl text-center">
            <p className="text-amber-900 text-sm md:text-base leading-relaxed">
              ⚠️ <strong>Catatan Kejujuran:</strong> Ini bukan program cepat kaya, bukan penghasilan pasif otomatis, dan bukan jaminan memperoleh uang tambahan tanpa kerja nyata. Semua pencapaian membutuhkan proses belajar dan ketekunan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bagian 8 — FAQ */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                >
                  <span className="flex items-center gap-3 text-lg">
                    <HelpCircle className="text-blue-600 shrink-0" size={20} />
                    {faq.q}
                  </span>
                  <ChevronDown className={`transform transition-transform duration-300 text-slate-500 shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian 9 — CTA Penutup */}
      <section className="py-32 px-6 text-center bg-white">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold text-sm tracking-wider uppercase block mb-3">Langkah Awal Tanpa Risiko</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Mau Tahu Apakah Peluang Ini <br/> Cocok Buatmu?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Tanyakan cara kerja bisnis HDI, proses memulai, dan pendampingan yang tersedia. Pelajari dulu sebelum mengambil keputusan.
          </p>
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-green-700 shadow-2xl shadow-green-200 transition inline-flex items-center gap-3 text-center"
          >
            <MessageCircle size={24} /> Tanya Peluang Bisnis via WhatsApp
          </a>
          <p className="mt-6 text-slate-400 text-sm font-medium">Nomor WhatsApp Resmi Admin HDI Center Asahan (+62 821-8482-8865)</p>
        </motion.div>
      </section>

    </div>
  )
}
