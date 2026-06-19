import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, X, ArrowRight, User, Ticket as TicketIcon } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Ticket() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const isDummyValid = id && id.length > 5;
  const ticketData = {
    eventName: "Grand Opportunity Seminar",
    date: "Sabtu, 25 Agustus 2026",
    time: "13:00 - 17:00 WIB",
    attendee: "Budi Santoso",
    status: isDummyValid ? "VALID" : "INVALID",
    type: "VIP ACCESS"
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-white rounded-[2rem] overflow-hidden shadow-2xl relative"
      >
        <div className="absolute top-[50%] left-0 w-8 h-16 bg-slate-900 -translate-x-4 -translate-y-8 rounded-full z-10"></div>
        <div className="absolute top-[50%] right-0 w-8 h-16 bg-slate-900 translate-x-4 -translate-y-8 rounded-full z-10"></div>

        <div className={cn(
          "p-8 text-center text-white relative border-b-2 border-dashed border-slate-200/50 pb-12",
          ticketData.status === "VALID" ? "bg-blue-600" : "bg-red-600"
        )}>
          <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-xs font-bold tracking-widest backdrop-blur-sm">
            {ticketData.type}
          </div>
          {ticketData.status === "VALID" ? (
             <CheckCircle size={60} className="mx-auto mb-6 text-white drop-shadow-md" />
          ) : (
             <X size={60} className="mx-auto mb-6 text-white drop-shadow-md" />
          )}
          <h2 className="text-3xl font-black leading-tight mb-2 tracking-tight">
            {ticketData.status === "VALID" ? "TIKET VALID" : "TIDAK VALID"}
          </h2>
          <p className={cn("text-sm font-medium", ticketData.status === "VALID" ? "text-blue-100" : "text-red-100")}>
            {ticketData.status === "VALID" ? "Akses diizinkan" : "QR Code tidak dikenali"}
          </p>
        </div>

        {ticketData.status === "VALID" && (
          <div className="p-8 pt-10">
            <div className="flex items-center gap-4 mb-8 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="bg-white shadow-sm border border-slate-100 p-3 rounded-xl text-blue-600">
                <User size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Nama Peserta</p>
                <p className="text-2xl font-black text-slate-900">{ticketData.attendee}</p>
              </div>
            </div>

            <div className="space-y-6">
               <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1 flex items-center gap-2"><TicketIcon size={14}/> Event</p>
                  <p className="font-bold text-lg text-slate-800">{ticketData.eventName}</p>
               </div>
               <div className="grid grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Tanggal</p>
                  <p className="font-semibold text-slate-800">{ticketData.date}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Waktu</p>
                  <p className="font-semibold text-slate-800">{ticketData.time}</p>
                </div>
              </div>
              <div className="text-center pt-4">
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Ticket Reference</p>
                 <p className="font-mono text-sm text-slate-500 bg-slate-100 py-2 px-4 rounded-lg inline-block">{id}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      <button 
        onClick={() => navigate('/scan')}
        className="mt-10 text-white font-medium hover:text-blue-300 transition flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10"
      >
        <ArrowRight className="rotate-180" size={20} /> Kembali Scan Tiket Lain
      </button>
    </div>
  )
}
