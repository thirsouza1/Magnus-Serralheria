/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Settings, 
  MapPin, 
  Phone, 
  Clock, 
  Hammer, 
  LayoutGrid, 
  Award, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  MessageCircle,
  Shapes,
  Maximize2,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

const COMPANY_NAME = "Magnus Serralheria";
const WHATSAPP_LINK = "https://wa.me/5535984127884";
const PHONE_NUMBER = "(35) 3531-3934";

const images = {
  hero: "https://images.unsplash.com/photo-1558442086-3685e1920b70?auto=format&fit=crop&q=80&w=2000",
  gate1: "https://solobrasileiro.com/serralheria/portoes/wp-content/uploads/sites/3/2024/07/portao-articulado-modelo-basculante-serralheria-solo-brasileiro-768x566.jpg",
  details: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
  modern: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=800",
  industry: "https://images.unsplash.com/photo-1517089596392-db213e924227?auto=format&fit=crop&q=80&w=800",
  art: "https://images.unsplash.com/photo-1534394416122-3852026f8b91?auto=format&fit=crop&q=80&w=800",
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <>
      {/* Initial Presentation / Preloader */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                x: [-5, 5, -5],
                y: [-2, 2, -2]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              
              {/* Welding Flash Effect */}
              <motion.div
                animate={{
                  opacity: [0, 0.3, 0, 0.4, 0.1, 0.6, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.2
                }}
                className="absolute inset-0 bg-blue-400/10 z-15 mix-blend-screen"
              />
              
              <img 
                src="https://images.tcdn.com.br/img/editor/up/762235/soldador.jpg" 
                alt="Soldador Magnus" 
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
            
            <div className="relative z-20 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 border-2 border-gold flex items-center justify-center transform rotate-45 shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                  <span className="transform -rotate-45 font-bold text-gold text-2xl">M</span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-[0.3em] text-white uppercase italic">
                  Magnus <span className="text-gold">Artesanal</span>
                </h2>
                <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
                    className="absolute inset-0 bg-gold"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen text-[#F5F5F5] selection:bg-gold/30 relative overflow-hidden ${showIntro ? 'h-screen overflow-hidden' : ''}`}>
      {/* Background Decorative Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#1A1A1A] opacity-50 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Header */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "glass py-4 shadow-2xl" : "bg-transparent py-4 lg:py-6"
        }`}
        id="nav"
      >
        <div className="max-w-[1440px] mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 border-2 border-gold flex items-center justify-center transform rotate-45">
              <span className="transform -rotate-45 font-bold text-gold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xl lg:text-2xl font-bold tracking-tighter leading-none text-white uppercase">
                Magnus
              </span>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-[8px] lg:text-[9px] mt-1">
                Serralheria Premium
              </span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-12">
            {['Projetos', 'Diferenciais', 'Portfólio', 'Contato'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-bold tracking-[0.2em] text-white hover:text-gold transition-colors uppercase"
              >
                {item}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="px-10 py-4 bg-gold text-black text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:bg-white active:scale-95"
            >
              Contatar
            </a>
          </div>

          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 items-center text-center">
            {['Projetos', 'Diferenciais', 'Portfólio', 'Contato'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-display font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              className="w-full py-4 bg-gold text-black font-bold tracking-widest"
            >
              WHATSAPP
            </a>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex flex-col justify-start overflow-hidden z-10 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10" />
          <img 
            src="https://solobrasileiro.com/serralheria/portoes/wp-content/uploads/sites/3/2024/06/Portao-basculante-tubo-metalon-galvanizado-fabricado-pela-serralheria-solo-brasileiro-1170x730.jpeg" 
            alt="Magnus Serralheria Hero Background" 
            className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-[10s] hover:scale-110"
          />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 w-full mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <h1 className="font-display text-[9vw] lg:text-[9rem] font-bold text-white leading-[0.8] tracking-tighter mb-4 flex flex-col">
              <span className="relative z-10 block">O AÇO</span>
              <span className="italic font-light text-gold lowercase py-2 -mt-[0.1em]">transcendido</span>
              <span className="uppercase text-white -mt-[0.05em] block">EM ARTE.</span>
            </h1>
            
            <div className="mt-2 max-w-2xl">
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Portões esculturais, pivotantes e estruturas metálicas de alto padrão para arquitetura de luxo. Engenharia de precisão com alma artesanal.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Global background shape */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-[#111] rounded-full blur-[100px] -z-1 opacity-50 pointer-events-none"></div>
      </section>

      {/* Bento Grid Section */}
      <section id="diferenciais" className="py-12 px-6 bg-[#050505] z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1]">
                A ENGENHARIA <br />
                <span className="italic font-light text-gold">reinventada.</span>
              </h2>
            </motion.div>
          </div>

          <div className="bento-grid">
            {/* Box 1: Feature Image Card */}
            <motion.div 
              {...fadeIn}
              className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-2xl group border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Highlight"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="text-[10px] uppercase text-gold font-bold tracking-[0.3em] mb-2 block">Destaque</span>
                <h3 className="text-3xl font-display italic text-white">Portões Esculturais <br />Sob Medida</h3>
              </div>
            </motion.div>

            {/* Box 2: Review Card */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-1 row-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
            >
              <div className="flex space-x-1 text-gold">
                {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
              </div>
              <div>
                <p className="text-4xl font-bold leading-none text-white mb-1">4.1k+</p>
                <p className="text-[10px] uppercase tracking-widest text-[#777] font-bold">Avaliações no Google</p>
              </div>
            </motion.div>

            {/* Box 3: Forged Icon Card */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="col-span-1 md:col-span-1 row-span-1 bg-gold rounded-2xl p-8 flex flex-col justify-between text-black group"
            >
              <div className="w-12 h-12 border-2 border-black/20 flex items-center justify-center transform rotate-45 group-hover:bg-black group-hover:text-gold transition-colors">
                 <Hammer size={24} className="transform -rotate-45" />
              </div>
              <p className="text-xs font-bold leading-tight uppercase tracking-widest">Detalhes Forjados <br />à Mão</p>
            </motion.div>

            {/* Box 4: Service Detail */}
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="col-span-1 md:col-span-2 row-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex items-center justify-between"
            >
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-[#777] font-bold tracking-widest mb-2">Principal Especialidade</span>
                <span className="text-2xl font-display italic text-white">Portas Pivotantes e Basculantes</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-black transition-all cursor-pointer">
                 <ArrowRight size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-20">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Excelência em cada detalhe</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-widest uppercase">Portfólio</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Residência G.P.", type: "Portão Basculante", img: images.gate1 },
              { title: "Edifício Infinity", type: "Porta Pivotante", img: images.modern },
              { title: "Complexo Industrial", type: "Estruturas", img: images.industry }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 mb-6">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" 
                    alt={item.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] uppercase font-bold text-gold tracking-widest block mb-1">{item.type}</span>
                    <h4 className="text-2xl font-display italic text-white">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="relative z-10 pt-16 pb-16 px-6 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 border border-gold flex items-center justify-center transform rotate-45">
                  <span className="transform -rotate-45 font-bold text-gold text-xs">M</span>
                </div>
                <span className="font-sans text-lg font-bold tracking-tighter uppercase">Magnus</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 italic tracking-tighter leading-tight">
                ESCREVA O <span className="text-gold">PRÓXIMO</span> <br />
                CAPÍTULO DO SEU PROJETO.
              </h2>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/magnusserralheria/" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"><Facebook size={18} /></a>
                <a href={WHATSAPP_LINK} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all"><MessageCircle size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Localização</h4>
              <p className="text-sm text-[#777] leading-relaxed max-w-[200px]">
                R. Geraldo Marcolini, Vila Radaelli - São Sebastião do Paraíso, MG
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Contato</h4>
                <p className="text-lg font-mono text-white mb-8 tracking-tighter">{PHONE_NUMBER}</p>
              </div>
              <div>
                <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Horário</h4>
                <p className="text-xs text-[#777]">Seg a Sex: 08:00 — 18:00</p>
                <p className="text-xs text-[#777]">Sáb: 08:00 — 12:00</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-[#444] uppercase tracking-[0.3em]">
              Copyright 2026 Magnus Serralheria — Onde a Engenharia Encontra o Luxo
            </p>
            <div className="flex items-center gap-4 opacity-30 hover:opacity-100 transition-opacity group">
              <span className="text-[8px] uppercase tracking-widest">Developed by</span>
              <img 
                src="https://drive.google.com/uc?export=view&id=1JClbtDWezILrtB4PbNOZp2RKn7rSsLiQ" 
                alt="Developer Logo" 
                className="h-8 w-auto grayscale brightness-200"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
