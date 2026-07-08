/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, XCircle, Clock, ArrowRight, User, Users, Phone, Activity, Zap, HeartPulse, AlignCenter, Dumbbell, Move, ClipboardList, Target, Play, ShieldCheck, TrendingUp, MessageCircle, Menu, ChevronDown } from 'lucide-react';
import { Counter } from './components/Counter';

const events = [
  {
    id: 1,
    title: "Sesi Rawatan Khas - Kuala Lumpur",
    status: "Pendaftaran Dibuka",
    date: "TBA",
    description: "Sesi terapi buka saraf khas untuk warga lembah Klang. Tempat terhad.",
    isUrgent: true,
  },
  {
    id: 2,
    title: "Jelajah Pantai Timur (Kelantan & Terengganu)",
    status: "Menunggu Tarikh Rasmi",
    date: "TBA",
    description: "Pra-pendaftaran kini dibuka. Kami akan menghubungi anda sebaik sahaja tarikh disahkan.",
    isUrgent: false,
  },
  {
    id: 3,
    title: "Jelajah Utara (Perak)",
    status: "Pendaftaran Di Buka",
    date: "10, 11, 12 Julai 2026",
    description: "Pendaftaran kini dibuka. Sesi terapi khas untuk warga Perak. Tempat terhad.",
    isUrgent: true,
  }
];

const faqs = [
  {
    question: "Adakah terapi ini menyakitkan?",
    answer: "Proses terapi ini memfokuskan kepada urutan saraf dan penjajaran postur. Mungkin terdapat sedikit ketidakselesaan di kawasan yang bermasalah, namun ia tidak menyakitkan dan selamat untuk pelbagai peringkat umur."
  },
  {
    question: "Berapa lama masa yang diambil untuk setiap sesi?",
    answer: "Setiap sesi terapi biasanya mengambil masa antara 45 hingga 60 minit bergantung kepada keadaan individu dan tahap masalah yang dialami."
  },
  {
    question: "Adakah terapi ini selamat untuk warga emas?",
    answer: "Ya, terapi ini sangat selamat. Kami menggunakan pendekatan yang lembut dan disesuaikan mengikut keadaan, kekuatan fizikal, dan umur setiap pelanggan."
  },
  {
    question: "Berapa banyak sesi yang diperlukan?",
    answer: "Jumlah sesi bergantung kepada tahap keseriusan masalah. Kebanyakan pelanggan kami merasai perubahan positif seawal 1-2 sesi, namun masalah kronik mungkin memerlukan sesi susulan."
  }
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', issues: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "60149245406";
    const message = `Hai, saya ingin menempah slot sesi terapi.

*Maklumat Pendaftaran:*
Nama: ${formData.name}
No. WhatsApp: ${formData.phone}
Lokasi Pilihan: ${formData.location}
Masalah / Simptom: ${formData.issues}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', location: '', issues: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] md:bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white relative overflow-hidden flex flex-col">
      {/* Abstract Background Elements */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Top Banner Khas */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-orange-500 text-white py-2.5 overflow-hidden flex items-center">
         <div className="animate-marquee flex items-center gap-3 whitespace-nowrap min-w-full">
            <span className="flex h-2 w-2 relative flex-shrink-0">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
               Pra Pendaftaran Jelajah Utara (Perak) Kini Di Buka!
            </span>
         </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-[36px] sm:top-[40px] left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100 h-20">
         <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
               <img src="/logo.jpg" alt="MechaXPain Logo" className="w-12 h-12 object-contain" />
               <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-black tracking-tight text-[#002060]">
                     mecha<span className="text-[#ff6600]">X</span>PAIN
                  </span>
                  <span className="text-[8px] md:text-[10px] font-bold text-[#002060] tracking-widest mt-[-4px]">
                     STRENGTH REHAB CENTRE
                  </span>
                  <span className="text-[6px] md:text-[8px] italic text-gray-600 leading-none mt-0.5 font-serif">
                     "Dari Sakit Sampai Boleh Berlari"
                  </span>
               </div>
            </a>
            
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
               <a href="#" className="text-[#002060] border-b-2 border-[#002060] py-1">Home</a>
               <a href="#info" className="hover:text-[#002060] transition-colors py-1 border-b-2 border-transparent hover:border-gray-200">About</a>
               <a href="#servis" className="hover:text-[#002060] transition-colors py-1 border-b-2 border-transparent hover:border-gray-200">Services</a>
               <a href="#testimonial" className="hover:text-[#002060] transition-colors py-1 border-b-2 border-transparent hover:border-gray-200">Testimonial</a>
               <a href="#contact" className="hover:text-[#002060] transition-colors py-1 border-b-2 border-transparent hover:border-gray-200">Contact</a>
            </div>

            <div className="flex items-center gap-4">
               <a href="#daftar" className="hidden md:flex items-center gap-2 bg-[#002060] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-900 transition-colors shadow-md">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
               </a>
               <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-[#002060] p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  {isMobileMenuOpen ? <XCircle className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
               </button>
            </div>
         </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-[116px] sm:top-[120px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg p-4 md:hidden flex flex-col gap-4">
           <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-[#002060] font-semibold p-2 bg-gray-50 rounded-lg">Home</a>
           <a href="#info" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold p-2 hover:bg-gray-50 rounded-lg">About</a>
           <a href="#servis" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold p-2 hover:bg-gray-50 rounded-lg">Services</a>
           <a href="#testimonial" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold p-2 hover:bg-gray-50 rounded-lg">Testimonial</a>
           <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold p-2 hover:bg-gray-50 rounded-lg">Contact</a>
           <a href="#daftar" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#002060] text-white p-3 rounded-lg font-semibold flex items-center justify-center gap-2 mt-2">
              <Calendar className="w-4 h-4" /> Book Appointment
           </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] pb-12 md:pb-24 px-4 sm:px-6 overflow-hidden flex flex-col items-center bg-[#fafafa] md:bg-white text-gray-900 z-10 border-b border-gray-100 min-h-screen md:min-h-[90vh] justify-center">
        {/* Background Image - Only Desktop */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <img src="/hero-bg.jpg" alt="MechaXPain Centre" className="absolute right-0 top-0 w-full lg:w-[65%] h-full object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-full lg:w-[60%]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="w-full lg:w-[60%] pt-4 lg:pt-0 pr-0 lg:pr-10"
           >
             {/* Pill Tag */}
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-200 bg-white text-[#002060] font-semibold text-sm mb-6 shadow-sm">
                <div className="w-5 h-5 rounded-full bg-[#002060] flex items-center justify-center text-white">
                   <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Dari Sakit Sampai Boleh Berlari</span>
             </div>

             <h1 className="text-[3.25rem] leading-[1.05] sm:text-5xl md:text-[5.5rem] font-black tracking-tight mb-6">
                <span className="text-[#002060] block">Move Better,</span>
                <span className="text-[#ff6600] block">Live Stronger</span>
             </h1>

             <p className="text-gray-600 text-[1.05rem] md:text-xl max-w-xl mb-8 md:mb-10 leading-relaxed font-medium">
                MechaxPAIN Strength Rehab Centre membantu anda pulih daripada kesakitan, tingkatkan mobiliti, dan kembali aktif dengan program rehab yang profesional.
             </p>

             <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-8 md:mb-16">
                <a href="#daftar" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#002060] text-white px-8 py-4 md:py-3.5 rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20 text-[1.05rem] md:text-base">
                   <Calendar className="w-5 h-5" />
                   Book Appointment
                </a>
                <a href="#info" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent md:bg-white text-[#002060] border-2 border-[#002060] md:border-gray-200 px-8 py-4 md:py-3.5 rounded-xl font-bold hover:bg-blue-50 md:hover:bg-gray-50 hover:border-[#002060] transition-colors shadow-sm text-[1.05rem] md:text-base">
                   <Play className="w-5 h-5" />
                   Learn More
                </a>
             </div>

             {/* Mobile Embedded Image */}
             <div className="block lg:hidden w-full mb-8">
                <img src="/hero-bg.jpg" alt="MechaXPain Centre" className="w-full h-[250px] sm:h-[350px] object-cover rounded-2xl shadow-lg border border-gray-100" />
             </div>

             {/* Features Cards */}
             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full">
                {/* Card 1 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 md:mb-4 text-[#002060]">
                      <User className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <h3 className="font-bold text-[#002060] text-sm md:text-base mb-2">Professional Rehab</h3>
                   <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">Program berasaskan kepakaran dan bukti klinikal.</p>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 md:mb-4 text-[#002060]">
                      <ClipboardList className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <h3 className="font-bold text-[#002060] text-sm md:text-base mb-2">Personalized Program</h3>
                   <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">Rancangan rehab disesuaikan untuk anda.</p>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 md:mb-4 text-[#002060]">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                   <h3 className="font-bold text-[#002060] text-sm md:text-base mb-2">Faster Recovery</h3>
                   <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">Pendekatan saintifik untuk hasil yang lebih pantas.</p>
                </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Info / Features Section */}
      <section id="info" className="py-24 px-6 border-b border-gray-200 z-10 relative">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left side: What it is not */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-8"
            >
               <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                 RAWATAN YANG <br/><span className="text-orange-500">BERBEZA</span>
               </h2>
               <ul className="space-y-5 text-lg font-medium text-gray-700">
                  <li className="flex items-center gap-4"><XCircle className="text-orange-500 w-6 h-6 flex-shrink-0" /> Bukan Urut Tradisional</li>
                  <li className="flex items-center gap-4"><XCircle className="text-orange-500 w-6 h-6 flex-shrink-0" /> Bukan Fisioterapi Biasa</li>
                  <li className="flex items-center gap-4"><XCircle className="text-orange-500 w-6 h-6 flex-shrink-0" /> Bukan Kiropraktik (Kruk Krak)</li>
                  <li className="flex items-center gap-4"><XCircle className="text-orange-500 w-6 h-6 flex-shrink-0" /> Bukan Penggunaan Mesin</li>
                  <li className="flex items-center gap-4 text-[#002060] mt-8 pt-8 border-t border-gray-200"><CheckCircle2 className="text-indigo-400 w-6 h-6 flex-shrink-0" /> Sesuai Untuk Lelaki & Wanita</li>
               </ul>
            </motion.div>

            {/* Right side: What it IS */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
               <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
               <div className="bg-white backdrop-blur-xl border border-gray-200 p-10 rounded-2xl relative overflow-hidden">
                  <div className="inline-block px-3 py-1 bg-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                     Dari Amerika 🇺🇸
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 mt-2 tracking-tight text-[#002060]">TEKNIK ART</h3>
                  <p className="text-gray-600 text-lg font-light leading-relaxed mb-8 italic" style={{ fontFamily: "'Georgia', serif" }}>
                     Pelepasan Otot & Saraf <span className="text-[#002060] font-bold not-italic decoration-orange-500 decoration-2 underline-offset-4 underline">Tepat Pada Kesakitan</span>. Kesakitan berkurang, kualiti hidup meningkat.
                  </p>
                  
                  <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl flex items-start gap-5">
                     <Clock className="text-orange-400 w-8 h-8 flex-shrink-0 mt-1" />
                     <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1">Eksklusif & Terhad</h4>
                        <p className="text-gray-700 text-sm">Terhad <span className="font-bold text-orange-400">7 sesi sahaja</span> sehari. Siapa cepat, dia dapat.</p>
                     </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200 flex items-center gap-4">
                     <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center bg-[#fafafa]">
                        <User className="text-gray-500 w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Perawat Bertauliah</p>
                        <p className="text-xl font-bold text-[#002060] tracking-tight">Master Wan Afifi</p>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Success Story Counter */}
      <section className="py-16 px-6 bg-white border-b border-gray-200 z-10 relative">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
               <h2 className="text-2xl md:text-3xl font-black uppercase text-[#002060] tracking-tighter">
                  Pencapaian <span className="text-orange-500">Kami</span>
               </h2>
               <p className="text-gray-500 text-sm md:text-base mt-2">
                  Terima kasih atas kepercayaan anda kepada kami.
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               <Counter 
                  end={1500} 
                  suffix="+" 
                  title="Pesakit Dirawat" 
                  icon={<Users className="w-6 h-6" />} 
               />
               <Counter 
                  end={4500} 
                  suffix="+" 
                  title="Jam Pemulihan" 
                  icon={<Clock className="w-6 h-6" />} 
               />
               <Counter 
                  end={12} 
                  title="Bandar Dilawati" 
                  icon={<MapPin className="w-6 h-6" />} 
               />
            </div>
         </div>
      </section>

      {/* 5 Jenis Servis Utama */}
      <section id="servis" className="py-24 px-6 bg-[#fafafa] border-b border-gray-200 z-10 relative overflow-hidden">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 flex flex-col items-center">
               <div className="inline-block px-3 py-1 bg-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                 Pakar Pemulihan Pergerakan & Fungsi
               </div>
               <h2 className="text-4xl md:text-5xl font-black uppercase text-[#002060] mb-4 tracking-tighter">
                  <span className="text-orange-500 text-6xl md:text-7xl align-middle mr-2">5</span> 
                  JENIS SERVIS UTAMA<br/>
               </h2>
               <h3 className="text-lg md:text-xl text-gray-700 font-bold mb-6 tracking-widest">DI MECHAXPAIN STRENGTH REHAB CENTRE</h3>
               
               <div className="bg-[#002060] px-6 py-2 rounded-sm uppercase tracking-widest text-[10px] sm:text-xs font-bold shadow-lg inline-block transform -skew-x-12">
                  <span className="inline-block transform skew-x-12 text-[#002060]">Dari Sakit, Kembali Bergerak, Hidup Lebih <span className="text-orange-400">Berkualiti</span></span>
               </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
               
               {/* Servis 1 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-orange-500 transition-colors">
                  <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
                     <div className="absolute -left-10 -bottom-10 opacity-10">
                        <span className="text-[150px] font-black italic text-[#002060]">1</span>
                     </div>
                     <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center flex-shrink-0">
                           <Zap className="text-orange-400 w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-[#002060] uppercase leading-tight">Terapi<br/><span className="text-orange-400">Buka Saraf</span></h3>
                     </div>
                     <p className="text-gray-600 text-sm leading-relaxed relative z-10 font-light italic" style={{ fontFamily: "'Georgia', serif" }}>Legakan sakit, kebas, sengal saraf dan ketegangan otot dengan terapi manual dan pergerakan yang selamat serta berkesan.</p>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center bg-[#fafafa]/50">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 w-full">
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Legakan sakit & kebas</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Lancarkan aliran saraf</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Kurangkan keradangan</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Tingkatkan pergerakan dan fungsi</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Servis 2 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-orange-500 transition-colors">
                  <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
                     <div className="absolute -left-10 -bottom-10 opacity-10">
                        <span className="text-[150px] font-black italic text-[#002060]">2</span>
                     </div>
                     <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center flex-shrink-0">
                           <HeartPulse className="text-orange-400 w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-[#002060] uppercase leading-tight">Terapi &<br/><span className="text-orange-400">Latihan Stroke</span></h3>
                     </div>
                     <p className="text-gray-600 text-sm leading-relaxed relative z-10 font-light italic" style={{ fontFamily: "'Georgia', serif" }}>Program rehabilitasi menyeluruh untuk pesakit stroke bagi memulihkan kekuatan, keseimbangan dan keyakinan bergerak.</p>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center bg-[#fafafa]/50">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 w-full">
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Aktifkan semula badan</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Perbaiki pergerakan</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Tingkatkan keseimbangan</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Bina keyakinan untuk berdiri & berjalan</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Servis 3 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-orange-500 transition-colors">
                  <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
                     <div className="absolute -left-10 -bottom-10 opacity-10">
                        <span className="text-[150px] font-black italic text-[#002060]">3</span>
                     </div>
                     <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center flex-shrink-0">
                           <AlignCenter className="text-orange-400 w-6 h-6" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#002060] uppercase leading-tight">Scoliosis &<br/><span className="text-orange-400">Posture Correction</span></h3>
                     </div>
                     <p className="text-gray-600 text-sm leading-relaxed relative z-10 font-light italic" style={{ fontFamily: "'Georgia', serif" }}>Kenal pasti masalah postur dan scoliosis lebih awal dengan pendekatan bukan invasif, selamat dan berkesan.</p>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center bg-[#fafafa]/50">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 w-full">
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Saringan scoliosis</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Betulkan postur</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Kurangkan lengkungan tulang belakang</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Tingkatkan keyakinan dan penampilan</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Servis 4 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-orange-500 transition-colors">
                  <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
                     <div className="absolute -left-10 -bottom-10 opacity-10">
                        <span className="text-[150px] font-black italic text-[#002060]">4</span>
                     </div>
                     <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center flex-shrink-0">
                           <Dumbbell className="text-orange-400 w-6 h-6" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#002060] uppercase leading-tight">Latihan Spine &<br/><span className="text-orange-400">Body Balancing</span></h3>
                     </div>
                     <div className="bg-orange-100 text-orange-400 text-[10px] font-bold uppercase tracking-widest p-2 rounded mb-3 relative z-10">Untuk Sakit Pinggang Kronik, Slip Disc, Sciatica, Cervical Myelopathy</div>
                     <p className="text-gray-600 text-sm leading-relaxed relative z-10 font-light italic" style={{ fontFamily: "'Georgia', serif" }}>Program pemulihan komprehensif untuk masalah tulang belakang dengan fokus keseimbangan, penguatan dan pergerakan ergonomik.</p>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center bg-[#fafafa]/50">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 w-full">
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Kurangkan sakit & kebas</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Pulihkan fungsi tulang belakang</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Perbaiki postur & keseimbangan badan</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Cegah kambuh & tingkatkan kualiti hidup</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Servis 5 */}
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:border-orange-500 transition-colors">
                  <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200 relative overflow-hidden">
                     <div className="absolute -left-10 -bottom-10 opacity-10">
                        <span className="text-[150px] font-black italic text-[#002060]">5</span>
                     </div>
                     <div className="flex items-center gap-4 mb-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center flex-shrink-0">
                           <Move className="text-orange-400 w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-[#002060] uppercase leading-tight">Latihan<br/><span className="text-orange-400">Functional</span></h3>
                     </div>
                     <div className="bg-orange-100 text-orange-400 text-[10px] font-bold uppercase tracking-widest p-2 rounded mb-3 relative z-10">Untuk Kuatkan Berdiri & Berjalan</div>
                     <p className="text-gray-600 text-sm leading-relaxed relative z-10 font-light italic" style={{ fontFamily: "'Georgia', serif" }}>Program latihan fungsional untuk membantu pesakit berdiri, berjalan dan bergerak dengan lebih stabil, selamat dan yakin.</p>
                  </div>
                  <div className="md:w-2/3 p-8 flex items-center bg-[#fafafa]/50">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 w-full">
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Kukuhkan otot & sendi</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Perbaiki keseimbangan</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Tingkatkan keupayaan berdiri & berjalan</span>
                        </div>
                        <div className="flex items-start gap-3">
                           <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                           <span className="text-gray-700 text-sm">Kurangkan risiko jatuh</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

            </div>

            {/* Proses Rawatan Bottom Bar */}
            <div className="mt-20 max-w-5xl mx-auto bg-white border border-[#002060]/20 rounded-2xl p-8 relative overflow-hidden shadow-lg">
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-indigo-500/5 blur-xl pointer-events-none"></div>
               
               <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                  <div className="flex flex-col items-center text-center">
                     <div className="w-16 h-16 rounded-full border border-indigo-500/50 bg-[#fafafa] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] mb-4">
                        <ClipboardList className="text-indigo-400 w-8 h-8" />
                     </div>
                     <h4 className="text-[#002060] font-black uppercase tracking-widest text-lg"><span className="text-orange-500 mr-1">1</span> ASSESS</h4>
                     <p className="text-gray-600 text-[10px] mt-1 uppercase tracking-widest">Saringan & Analisis</p>
                  </div>
                  
                  <div className="hidden md:block text-indigo-500/50"><ArrowRight className="w-6 h-6" /></div>
                  
                  <div className="flex flex-col items-center text-center">
                     <div className="w-16 h-16 rounded-full border border-indigo-500/50 bg-[#fafafa] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] mb-4">
                        <Target className="text-indigo-400 w-8 h-8" />
                     </div>
                     <h4 className="text-[#002060] font-black uppercase tracking-widest text-lg"><span className="text-orange-500 mr-1">2</span> PLAN</h4>
                     <p className="text-gray-600 text-[10px] mt-1 uppercase tracking-widest">Pelan Pemulihan</p>
                  </div>
                  
                  <div className="hidden md:block text-indigo-500/50"><ArrowRight className="w-6 h-6" /></div>
                  
                  <div className="flex flex-col items-center text-center">
                     <div className="w-16 h-16 rounded-full border border-indigo-500/50 bg-[#fafafa] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] mb-4">
                        <Dumbbell className="text-indigo-400 w-8 h-8" />
                     </div>
                     <h4 className="text-[#002060] font-black uppercase tracking-widest text-lg"><span className="text-orange-500 mr-1">3</span> TRAIN</h4>
                     <p className="text-gray-600 text-[10px] mt-1 uppercase tracking-widest">Latihan Terapi</p>
                  </div>
                  
                  <div className="hidden md:block text-indigo-500/50"><ArrowRight className="w-6 h-6" /></div>
                  
                  <div className="flex flex-col items-center text-center">
                     <div className="w-16 h-16 rounded-full border border-indigo-500/50 bg-[#fafafa] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] mb-4">
                        <ShieldCheck className="text-indigo-400 w-8 h-8" />
                     </div>
                     <h4 className="text-[#002060] font-black uppercase tracking-widest text-lg"><span className="text-orange-500 mr-1">4</span> RESTORE</h4>
                     <p className="text-gray-600 text-[10px] mt-1 uppercase tracking-widest">Pulihkan Pergerakan</p>
                  </div>
                  
                  <div className="hidden md:block text-indigo-500/50"><ArrowRight className="w-6 h-6" /></div>
                  
                  <div className="flex flex-col items-center text-center">
                     <div className="w-16 h-16 rounded-full border border-indigo-500/50 bg-[#fafafa] flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] mb-4">
                        <TrendingUp className="text-indigo-400 w-8 h-8" />
                     </div>
                     <h4 className="text-[#002060] font-black uppercase tracking-widest text-lg"><span className="text-orange-500 mr-1">5</span> PERFORM</h4>
                     <p className="text-gray-600 text-[10px] mt-1 uppercase tracking-widest">Hidup Aktif</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Events Announcement Board */}
      <section id="acara" className="py-24 px-6 max-w-6xl mx-auto z-10 relative">
         <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-block px-3 py-1 bg-indigo-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Jadual Jelajah
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-[#002060] mb-6 tracking-tighter">SENARAI <span className="text-indigo-400">ACARA TERKINI</span></h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto italic font-light" style={{ fontFamily: "'Georgia', serif" }}>
               Maklumat lokasi dan masa akan dihantar terus ke emel anda.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
               <motion.div 
                  key={event.id} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }}
                  className="bg-white backdrop-blur-xl border border-gray-200 rounded-2xl p-8 hover:border-indigo-500/50 hover:-translate-y-1 transition-all relative overflow-hidden group flex flex-col"
               >
                  {event.isUrgent && (
                     <div className="absolute top-0 right-0 bg-orange-500 text-[#002060] text-[10px] font-bold px-3 py-1 uppercase tracking-[0.2em] rounded-bl-lg">
                        HOT
                     </div>
                  )}
                  <div className="flex items-center gap-2 mb-6">
                     <div className={`w-2 h-2 rounded-full ${event.status.includes('Buka') ? 'bg-orange-500' : 'bg-indigo-500'} animate-pulse`} />
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{event.status}</span>
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#002060] mb-3 tracking-tight">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow font-light">{event.description}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-6 border-t border-gray-200">
                     <span className="text-[10px] text-gray-500 flex items-center gap-1.5 uppercase font-bold tracking-widest">
                        <Calendar className="w-4 h-4"/> {event.date || 'TBA'}
                     </span>
                     <a href="#daftar" className="text-orange-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-orange-300 transition-colors">
                        DAFTAR <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </a>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-[#fafafa] border-t border-gray-200 z-10 relative overflow-hidden">
         <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
               <div className="inline-block px-3 py-1 bg-indigo-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-white">
                  Soalan Lazim
               </div>
               <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002060] mb-6 tracking-tighter">
                  FAQ <span className="text-indigo-400">TERAPI</span>
               </h2>
               <p className="text-gray-600 text-lg italic font-light" style={{ fontFamily: "'Georgia', serif" }}>
                  Jawapan kepada persoalan umum mengenai proses, tempoh dan keselamatan rawatan.
               </p>
            </div>

            <div className="space-y-4">
               {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:border-indigo-200 transition-colors">
                     <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                     >
                        <span className="font-bold text-[#002060] pr-8">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${activeFaq === index ? 'rotate-180' : ''}`} />
                     </button>
                     <motion.div
                        initial={false}
                        animate={{ height: activeFaq === index ? 'auto' : 0, opacity: activeFaq === index ? 1 : 0 }}
                        className="overflow-hidden"
                     >
                        <div className="px-6 pb-5 pt-1 text-gray-600 font-light leading-relaxed border-t border-gray-100">
                           {faq.answer}
                        </div>
                     </motion.div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Registration Form Section */}
      <section id="daftar" className="py-24 px-6 relative overflow-hidden border-t border-gray-200 z-10">
         <div className="max-w-4xl mx-auto relative z-10">
            <div className="relative">
               <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
               <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 lg:p-16 rounded-2xl relative">
                  <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-5xl font-black uppercase text-[#002060] mb-4 tracking-tighter">TEMPAH <span className="text-orange-500">SLOT ANDA</span></h2>
                     <p className="text-gray-600 text-lg italic font-light" style={{ fontFamily: "'Georgia', serif" }}>Sila isi maklumat di bawah. Pihak kami akan menghubungi anda untuk pengesahan jadual dan tarikh seterusnya.</p>
                  </div>

                  {isSubmitted ? (
                     <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-blue-50 border border-blue-100 text-[#002060] p-12 rounded-xl text-center">
                        <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-blue-500" />
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-[#002060]">PENDAFTARAN DITERIMA</h3>
                        <p className="text-gray-700 text-lg max-w-md mx-auto font-light">Terima kasih. Pasukan kami akan menghubungi anda melalui WhatsApp sebentar lagi.</p>
                     </motion.div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Nama Penuh</label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><User className="h-4 w-4 text-gray-500" /></div>
                                 <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-4 text-sm text-[#002060] focus:outline-none focus:border-orange-500 transition-all" placeholder="Cth: Ahmad Syakir" />
                              </div>
                           </div>
                           <div>
                              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">No. WhatsApp</label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Phone className="h-4 w-4 text-gray-500" /></div>
                                 <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-4 text-sm text-[#002060] focus:outline-none focus:border-orange-500 transition-all" placeholder="Cth: 0199847913" />
                              </div>
                           </div>
                        </div>

                        <div>
                           <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Pilihan Acara / Negeri</label>
                           <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><MapPin className="h-4 w-4 text-gray-500" /></div>
                              <select required value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-10 text-sm text-gray-700 focus:outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer">
                                 <option value="" disabled>Pilih acara atau negeri berdekatan anda...</option>
                                 <option value="KL">Kuala Lumpur / Selangor</option>
                                 <option value="PantaiTimur">Pantai Timur (Kelantan, Terengganu, Pahang)</option>
                                 <option value="Utara">Utara (Penang, Kedah, Perlis)</option>
                                 <option value="Selatan">Selatan (Johor, Melaka, N. Sembilan)</option>
                                 <option value="Lain">Lain-lain / Sila hubungi saya</option>
                              </select>
                              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                 <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                              </div>
                           </div>
                        </div>

                        <div>
                           <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Masalah Dihadapi (Pilihan)</label>
                           <textarea value={formData.issues} onChange={e => setFormData({...formData, issues: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 px-4 text-sm text-[#002060] focus:outline-none focus:border-orange-500 transition-all min-h-[100px] resize-y" placeholder="Nyatakan secara ringkas kawasan kesakitan atau masalah saraf/otot yang anda alami..." />
                        </div>

                        <button type="submit" className="w-full bg-[#002060] text-white font-black uppercase py-4 rounded-lg tracking-widest hover:bg-orange-500 hover:text-white transition-all transform hover:-translate-y-1 mt-4 shadow-lg shadow-blue-900/20">
                           HANTAR PENDAFTARAN
                        </button>
                        <div className="mt-6 text-center">
                           <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                              Tiada yuran dikenakan untuk pendaftaran awal
                           </p>
                        </div>
                     </form>
                  )}
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fafafa] border-t border-gray-200 py-12 px-6 mt-auto z-10 relative">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left flex flex-col md:items-start items-center">
               <div className="flex items-center gap-3 mb-3">
                  <img src="/logo.jpg" alt="MechaXPain Logo" className="w-8 h-8 object-contain bg-white rounded-full p-0.5 shadow-[0_0_10px_rgba(244,63,94,0.3)]" />
                  <h2 className="text-xl font-black tracking-tighter text-[#002060]">
                     MECHAX<span className="text-orange-500">.</span>PAIN
                  </h2>
               </div>
               <p className="text-[10px] font-mono text-gray-500 flex flex-col uppercase tracking-widest">
                  <span>Strength Rehab Centre</span>
                  <span>Jelajah 2026/2027</span>
               </p>
            </div>
            
            <div className="flex gap-4">
               <a href="https://www.instagram.com/mechaxpaincentre/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 hover:border-orange-500 transition-all cursor-pointer text-xs font-bold hover:text-orange-500">IG</a>
               <a href="https://www.facebook.com/p/Mechaxpain-Strength-Rehab-Centre-61577985490124/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 hover:border-orange-500 transition-all cursor-pointer text-xs font-bold hover:text-orange-500">FB</a>
               <a href="https://www.tiktok.com/@mechaxpain" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center opacity-50 hover:opacity-100 hover:border-orange-500 transition-all cursor-pointer text-xs font-bold hover:text-orange-500">TT</a>
            </div>
         </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/60149245406" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] hover:bg-[#128C7E] text-[#002060] p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center transform hover:scale-110 transition-all duration-300 group"
      >
         <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
         <span className="absolute right-full mr-4 bg-gray-100 text-[#002060] text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-gray-200 shadow-xl hidden md:flex items-center">
            WhatsApp Sekarang
            <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-gray-100 border-t border-r border-gray-200 transform -translate-y-1/2 rotate-45"></div>
         </span>
      </a>
    </div>
  );
}
