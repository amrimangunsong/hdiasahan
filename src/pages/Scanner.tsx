import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scan } from 'lucide-react'
import { Html5QrcodeScanner } from 'html5-qrcode'

export default function Scanner() {
  const navigate = useNavigate()

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        aspectRatio: 1.0,
      },
      false
    )

    scanner.render(
      (decodedText) => {
        console.log("Scanned:", decodedText)
        scanner.clear()
        navigate(`/ticket/${decodedText}`)
      },
      () => {
        // Silently ignore scan errors frame by frame
      }
    )

    return () => {
      scanner.clear().catch(console.error)
    }
  }, [navigate])

  return (
    <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
          <Scan size={40} />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Scan Tiket Masuk</h2>
        <p className="text-slate-500 text-lg mb-10 font-medium">Arahkan kamera ke QR Code peserta untuk memverifikasi tiket.</p>
        
        <div className="bg-white p-4 rounded-3xl shadow-xl shadow-blue-100 border border-slate-100 overflow-hidden">
          <div id="reader" className="w-full rounded-2xl overflow-hidden [&>div]:border-none"></div>
        </div>
      </motion.div>
    </div>
  )
}
