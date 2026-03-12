
import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, CheckCircle, Search, FileText, Globe, MessageSquare, GitMerge, Database, Star, ArrowRight, Sparkles, Zap, Shield, Cpu, Check, Minus, Lock, File, Briefcase, Folder, History, Settings, MoreHorizontal, ChevronDown, ChevronUp, PanelLeft, ArrowDown, Paperclip, Mic, ArrowUp, Calendar, AlertCircle, Scale, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

import PogojiUporabe from './src/pages/PogojiUporabe';
import PolitikaPiskotkov from './src/pages/PolitikaPiskotkov';
import PolitikaZasebnosti from './src/pages/PolitikaZasebnosti';
import ONas from './src/pages/ONas';

const StepAnimation = ({ step }: { step: any }) => {
  switch (step.id) {
    case "01": // Razumevanje dokumentov (Scanning/Analysis)
      return (
        <div className="relative w-full h-full flex items-center justify-center">
           {/* Document */}
           <div className="relative bg-neutral-900 border border-neutral-700 p-6 rounded-xl shadow-2xl w-48 h-64 flex flex-col gap-4 overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <FileText size={24} className="text-blue-400" />
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
              {/* Text lines */}
              <div className="flex flex-col gap-3 opacity-50">
                <div className="h-2 bg-neutral-600 rounded w-3/4" />
                <div className="h-2 bg-neutral-600 rounded w-full" />
                <div className="h-2 bg-neutral-600 rounded w-5/6" />
                <div className="h-2 bg-neutral-600 rounded w-full" />
                <div className="h-2 bg-neutral-600 rounded w-2/3" />
                <div className="h-2 bg-neutral-600 rounded w-4/5" />
              </div>
              
              {/* Scanner Line */}
              <motion.div 
                animate={{ top: ["-10%", "110%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
              />
              
              {/* Highlighted section */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
                className="absolute top-20 left-4 right-4 h-8 bg-blue-500/20 rounded"
              />
           </div>
           
           {/* Popups */}
           <motion.div 
             animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0], y: [0, -20, -20, 0] }}
             transition={{ duration: 3, repeat: Infinity, delay: 1.5, times: [0, 0.1, 0.8, 1] }}
             className="absolute top-1/3 -right-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-2"
           >
             <AlertCircle size={12} />
             Tveganje
           </motion.div>
           
           <motion.div 
             animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0], y: [0, -20, -20, 0] }}
             transition={{ duration: 3, repeat: Infinity, delay: 0.5, times: [0, 0.1, 0.8, 1] }}
             className="absolute bottom-1/3 -left-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-2"
           >
             <CheckCircle size={12} />
             Dejstvo
           </motion.div>
        </div>
      );
    case "02": // Raziskovanje prava (Search/Connect)
      return (
        <div className="relative w-full h-full flex items-center justify-center">
           {/* Central Search */}
           <motion.div 
             animate={{ scale: [1, 1.1, 1] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 bg-neutral-900 p-6 rounded-full border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.15)]"
           >
             <Search size={48} className="text-emerald-400" />
           </motion.div>
           
           {/* Orbiting items */}
           {[0, 1, 2].map((i) => (
             <motion.div
               key={i}
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * -3.3 }}
               className="absolute inset-0"
             >
               <div className="absolute top-12 left-1/2 -translate-x-1/2">
                 <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: i * -3.3 }}
                   className="bg-neutral-800 p-3 rounded-xl border border-white/10 shadow-lg"
                 >
                   {i === 0 ? <Globe size={20} className="text-blue-400" /> : 
                    i === 1 ? <Shield size={20} className="text-purple-400" /> : 
                    <FileText size={20} className="text-orange-400" />}
                 </motion.div>
               </div>
             </motion.div>
           ))}
           
           {/* Orbit circles */}
           <div className="absolute inset-12 border border-white/5 rounded-full" />
           <div className="absolute inset-24 border border-white/5 rounded-full border-dashed opacity-50" />
        </div>
      );
    case "03": // Celovita analiza (Connecting dots)
      return (
        <div className="relative w-full h-full flex items-center justify-center">
           <motion.div 
             animate={{ boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 40px rgba(168,85,247,0.2)", "0 0 0px rgba(168,85,247,0)"] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="bg-neutral-900 p-6 rounded-2xl border border-purple-500/30 relative z-10"
           >
             <Cpu size={48} className="text-purple-400" />
           </motion.div>
           
           {/* Connecting lines */}
           {[0, 60, 120, 180, 240, 300].map((deg, i) => (
             <div key={i} className="absolute inset-0 flex items-center justify-center" style={{ transform: `rotate(${deg}deg)` }}>
               <motion.div 
                 initial={{ width: 0, opacity: 0 }}
                 animate={{ width: ["0%", "40%", "40%", "0%"], opacity: [0, 1, 1, 0] }}
                 transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                 className="h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent origin-left absolute left-1/2"
               />
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: [0, 1, 1, 0] }}
                 transition={{ duration: 3, delay: 0.5 + i * 0.2, repeat: Infinity }}
                 className="absolute right-[10%] w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
               />
             </div>
           ))}
        </div>
      );
    case "04": // Priprava dokumentov (Drafting/Typing)
      return (
        <div className="relative w-full h-full flex items-center justify-center">
           <div className="relative">
             {/* Background doc */}
             <motion.div 
               animate={{ rotate: [3, 6, 3] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 bg-neutral-800 rounded-xl border border-white/5 transform translate-x-2 -translate-y-2"
             />
             
             {/* Main doc */}
             <div className="relative bg-neutral-900 border border-orange-500/30 p-6 rounded-xl shadow-2xl w-56 h-72 flex flex-col gap-4">
               <div className="flex items-center gap-3 mb-2 border-b border-white/5 pb-4">
                 <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                   <GitMerge size={20} className="text-orange-400" />
                 </div>
                 <div className="flex flex-col gap-1">
                   <div className="h-2 bg-neutral-600 rounded w-20" />
                   <div className="h-1.5 bg-neutral-700 rounded w-12" />
                 </div>
               </div>
               
               <div className="space-y-3">
                 {[1, 2, 3, 4, 5, 6].map((i) => (
                   <motion.div 
                     key={i}
                     initial={{ width: 0, opacity: 0 }}
                     animate={{ width: [`0%`, `${Math.random() * 30 + 60}%`], opacity: [0, 1] }}
                     transition={{ duration: 0.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 4 }}
                     className="h-2 bg-neutral-700 rounded"
                   />
                 ))}
               </div>
               
               <motion.div 
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ duration: 0.8, repeat: Infinity }}
                 className="w-1 h-4 bg-orange-400 mt-2"
               />
               
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                 transition={{ duration: 2, delay: 2, repeat: Infinity, repeatDelay: 2 }}
                 className="absolute bottom-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
               >
                 Generirano
               </motion.div>
             </div>
           </div>
        </div>
      );
    case "05": // Personalizirani agenti (Custom Process/Agent)
      return (
        <div className="relative w-full h-full flex items-center justify-center">
           {/* Connection Line */}
           <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-neutral-800">
             <motion.div 
               animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-pink-500 to-transparent"
             />
           </div>

           {/* Step 1: Your Process (Rules) */}
           <motion.div 
             className="absolute left-[15%] bg-neutral-900 p-4 rounded-xl border border-neutral-700 shadow-xl flex flex-col gap-2 z-10"
             animate={{ y: [0, -5, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
           >
             <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-1">
               <Settings size={14} className="text-neutral-400" />
               <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Vaš proces</span>
             </div>
             {[1, 2, 3].map((i) => (
               <div key={i} className="flex items-center gap-2">
                 <motion.div 
                   initial={{ backgroundColor: "#262626" }}
                   animate={{ backgroundColor: ["#262626", "#ec4899", "#262626"] }}
                   transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
                   className="w-2 h-2 rounded-full"
                 />
                 <div className="h-1.5 bg-neutral-700 rounded w-12" />
               </div>
             ))}
           </motion.div>

           {/* Step 2: The Agent (Processing) */}
           <div className="relative z-20">
             <motion.div 
               animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px rgba(236,72,153,0)", "0 0 30px rgba(236,72,153,0.4)", "0 0 0px rgba(236,72,153,0)"] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="bg-neutral-900 p-5 rounded-2xl border border-pink-500 shadow-2xl"
             >
               <Sparkles size={32} className="text-pink-400" />
             </motion.div>
             {/* Orbiting particles */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
               className="absolute inset-[-10px] border border-pink-500/20 rounded-full border-dashed"
             />
           </div>

           {/* Step 3: Result (Execution) */}
           <motion.div 
             className="absolute right-[15%] bg-neutral-900 p-4 rounded-xl border border-neutral-700 shadow-xl flex flex-col gap-2 z-10"
             animate={{ y: [0, 5, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           >
             <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-1">
               <FileText size={14} className="text-neutral-400" />
               <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Rezultat</span>
             </div>
             <div className="space-y-2">
               <div className="h-1.5 bg-neutral-600 rounded w-16" />
               <div className="h-1.5 bg-neutral-700 rounded w-12" />
               <div className="h-1.5 bg-neutral-700 rounded w-14" />
             </div>
             <motion.div 
               initial={{ scale: 0 }}
               animate={{ scale: [0, 1, 1, 0] }}
               transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
               className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg"
             >
               <Check size={12} />
             </motion.div>
           </motion.div>
        </div>
      );
    default:
      return null;
  }
};

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Video Gallery State
  const videos = [
    { key: 'civilno', id: '7DG85wHOuqs', title: 'Civilno pravo', duration: '2 min' },
    { key: 'gospodarsko', id: 'KLJb0YxLeR0', title: 'Gospodarsko pravo', duration: '2 min' },
    { key: 'kazensko', id: 'cKIL157hnRs', title: 'Kazensko pravo', duration: '2 min' },
    { key: 'nepremicninsko', id: 'RMiwvjggF70', title: 'Nepremičninsko pravo', duration: '2 min' },
    { key: 'delovno', id: 'LzPo5sKb_7c', title: 'Splošni pregled', duration: '2 min' },
  ];
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const demoSectionRef = useRef<HTMLElement>(null);
  const [hasScrolledToDefault, setHasScrolledToDefault] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasScrolledToDefault) {
          // Scroll to the default selected video (Civilno pravo) when the section comes into view
          const timer = setTimeout(() => {
            scrollToVideo(0);
            setHasScrolledToDefault(true);
          }, 100);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (demoSectionRef.current) {
      observer.observe(demoSectionRef.current);
    }

    return () => {
      if (demoSectionRef.current) {
        observer.unobserve(demoSectionRef.current);
      }
    };
  }, [hasScrolledToDefault]);

  const processSteps = [
    {
      id: "01",
      title: "Razumevanje dokumentov",
      description: "Naložite pogodbo, sodbo ali celoten spis. Lexora v nekaj sekundah izpostavi ključna dejstva, pomembne določbe in pravna tveganja. Namesto ročnega pregledovanja več sto strani dokumentacije dobite strukturiran pregled spisa v nekaj sekundah.",
      details: [
        "Povzame ključna dejstva in pravne določbe",
        "Izpostavi pomembne člene in klavzule",
        "Opozori na morebitna pravna tveganja",
        "Primerja več dokumentov in poišče neskladja"
      ],
      icon: <FileText className="text-blue-400" />,
      color: "from-blue-600 to-cyan-500",
      checkColor: "text-blue-500",
      checkBg: "bg-blue-500/10"
    },
    {
      id: "02",
      title: "Raziskovanje prava",
      description: "Lexora poveže dokumente z zakonodajo in sodno prakso ter pomaga pri celoviti analizi zadeve.",
      details: [
        "Relevantni členi zakonodaje (PISRS)",
        "Sodna praksa slovenskih sodišč (sodnapraksa.si)",
        "Evropska zakonodaja in sodna praksa (EUR-LEX)",
        "Neposredne reference na uporabljene pravne vire"
      ],
      icon: <Search className="text-emerald-400" />,
      color: "from-emerald-600 to-teal-500",
      checkColor: "text-emerald-500",
      checkBg: "bg-emerald-500/10"
    },
    {
      id: "03",
      title: "Celovita analiza zadeve",
      description: "Ker so v Lexori zbrani tako dokumenti kot pravni viri, lahko sistem pomaga tudi pri celoviti analizi zadeve.",
      details: [
        "Poveže dejstva primera z zakonodajo",
        "Izpostavi ključna pravna vprašanja",
        "Pomaga strukturirati pravno argumentacijo",
        "Omogoča jasen pregled nad zadevo"
      ],
      icon: <Cpu className="text-purple-400" />,
      color: "from-purple-600 to-indigo-500",
      checkColor: "text-purple-500",
      checkBg: "bg-purple-500/10"
    },
    {
      id: "04",
      title: "Hitrejša priprava pravnih dokumentov",
      description: "Ko je pravni okvir zadeve jasen, Lexora pomaga pripraviti osnutke dokumentov na podlagi dejstev in dokumentov v spisu.",
      details: [
        "Osnutki dopisov",
        "Strukturiranje tožb in odgovorov",
        "Priprava pravnih mnenj",
        "Upoštevanje dokumentov v spisu"
      ],
      icon: <GitMerge className="text-orange-400" />,
      color: "from-orange-600 to-amber-500",
      checkColor: "text-orange-500",
      checkBg: "bg-orange-500/10"
    },
    {
      id: "05",
      title: "Personalizirani pravni agenti",
      badge: "Kmalu",
      description: "Naučite Lexoro, kako vaša pisarna rešuje določeno pravno nalogo. AI agent lahko nato ta postopek samostojno izvede od začetka do konca.",
      details: [
        "Analiza pogodb po kriterijih vaše pisarne",
        "Preverjanje skladnosti dokumentov",
        "Priprava strukturiranih pravnih analiz",
        "Priprava dokumentov po standardih vaše pisarne"
      ],
      icon: <Sparkles className="text-pink-400" />,
      color: "from-pink-600 to-rose-500",
      checkColor: "text-pink-500",
      checkBg: "bg-pink-500/10"
    }
  ];

  const scrollToVideo = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const targetElement = container.children[index] as HTMLElement;
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
      setActiveVideo(videos[index]);
    }
  };
  
  return (
    <div className="min-h-screen font-sans bg-neutral-950 text-white selection:bg-blue-500/30">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <a className="font-serif text-2xl tracking-tight text-white hover:text-blue-100 transition" href="#">Lexora</a>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-8 text-sm text-neutral-300">
            <a className="hover:text-white transition-colors" href="#demo">Predogled</a>
            <a className="hover:text-white transition-colors" href="https://onboarding.lexora.si/" target="_blank" rel="noopener noreferrer">Kako začeti</a>
            <a className="hover:text-white transition-colors" href="#security">Varnost</a>
            <Link className="hover:text-white transition-colors" to="/o-nas">O nas</Link>
          </nav>

          <div className="flex-1 flex justify-end">
            <a href="https://app.lexora.si/" className="btn-demo hidden md:inline-flex items-center h-9 px-4 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white transition hover:-translate-y-0.5 text-sm font-semibold">
              Preizkusi Lexoro brezplačno
            </a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded hover:bg-white/5" 
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-neutral-950/90 backdrop-blur md:hidden">
            <nav className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-4 text-base text-neutral-200">
              <a href="#demo" onClick={() => setIsMenuOpen(false)}>Predogled</a>
              <a href="https://onboarding.lexora.si/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Kako začeti</a>
              <a href="#security" onClick={() => setIsMenuOpen(false)}>Varnost</a>
              <Link to="/o-nas" onClick={() => setIsMenuOpen(false)}>O nas</Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION - REDESIGNED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-32 pb-32 selection:bg-blue-500/30">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Main Spotlight */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-blue-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-pulse-slow"></div>
          
          {/* Secondary Glows */}
          <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vh] bg-purple-500/10 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vh] bg-emerald-500/10 rounded-full blur-[100px] opacity-20"></div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 hover:bg-white/10 transition-all cursor-default ring-1 ring-white/5 group hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium text-blue-100/90 tracking-wide uppercase">AI, ki razume slovensko in evropsko pravo</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8 text-white leading-[1.1] relative z-10"
          >
            Vaša nova <br/>
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-1 bg-blue-500/20 blur-2xl rounded-full opacity-30"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400">
                pravna supermoč.
              </span>
              {/* Decorative Sparkle */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-8 text-blue-400"
              >
                <Sparkles size={32} strokeWidth={1.5} />
              </motion.div>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Lexora pomaga pri analizi dokumentov, pravni raziskavi in pripravi osnutkov, da se lahko osredotočite na <span className="text-white font-medium border-b border-blue-500/30 pb-0.5 hover:border-blue-400 transition-colors">pravno presojo in strategijo</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24 w-full sm:w-auto"
          >
            <a href="https://app.lexora.si/" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-500 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 focus:outline-none shadow-lg shadow-blue-900/20 ring-1 ring-white/10 overflow-hidden text-base">
              <span className="relative z-10">Preizkusi Lexoro brezplačno</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-shimmer"></div>
            </a>
            
            <a href="https://calendly.com/jan-lexora/30min" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 bg-white/5 rounded-full hover:bg-white/10 hover:scale-105 focus:outline-none ring-1 ring-white/10 backdrop-blur-sm text-base hover:ring-white/20">
              <Calendar className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
              <span>Rezerviraj sestanek</span>
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">Zaupajo nam slovenski pravniki</p>
            <div className="flex -space-x-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-default p-2">
                 {['MJ', 'AK', 'TR', 'BP'].map((initials, i) => (
                   <div key={i} className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-400 font-medium relative z-0 hover:z-10 hover:scale-110 transition-transform bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-sm">
                     {initials}
                   </div>
                 ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer group z-20"
          onClick={() => {
            const el = document.getElementById('how-it-helps');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] group-hover:text-blue-400 transition-colors">Razišči</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors" />
          </motion.div>
        </motion.div>
      </section>

      {/* HOW LEXORA HELPS SECTION */}
      <section id="how-it-helps" className="relative bg-neutral-950 pt-24 pb-24 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Kako Lexora pospeši pravno delo</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Lexora pomaga pri analizi spisa, pravni raziskavi in pripravi osnutkov, da lahko pravnik hitreje razume zadevo in se osredotoči na <span className="text-white font-medium">pravno strategijo</span>.
            </p>
          </motion.div>

          {/* LAPTOP MOCKUP MOVED HERE */}
          <div className="relative hidden lg:block h-[460px] w-full mt-32 mb-0" style={{ perspective: '2000px' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-[250px] opacity-20 animate-pulse"></div>
              
              {/* External Scroll Indicator */}
              <div className="absolute left-[calc(50%+380px)] top-[calc(50%-60px)] -translate-y-1/2 flex flex-col items-center gap-4 z-50">
                <motion.div 
                  animate={{ y: [0, 15, 0] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-3"
                >
                  <p className="text-white/50 text-xs font-medium tracking-widest uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Podrsajte za celoten odgovor
                  </p>
                  <ArrowDown className="text-white/50" size={24} />
                </motion.div>
              </div>

              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                  transformStyle: 'preserve-3d', 
                  transform: 'scale(1.2) translateY(-50px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)' 
                }}
              >
                <div className="relative animate-float-slow" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Laptop Screen */}
                  <div 
                    className="relative w-[600px] h-[375px] bg-black rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
                    style={{ 
                      border: '8px solid #0a0a0a',
                      borderBottom: '16px solid #0a0a0a',
                      boxShadow: '0 0 0 2px #333, 0 20px 50px rgba(0,0,0,0.8)',
                      transformStyle: 'preserve-3d',
                      transformOrigin: 'bottom center',
                      transform: 'rotateX(0deg)' 
                    }}
                  >
                  {/* Notch */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0a0a0a] rounded-b-lg z-50"></div>
                  
                  {/* Lexora UI Container */}
                  <div className="flex-1 w-full bg-white overflow-hidden relative">
                    {/* Screen Reflection Overlay */}
                    <div className="absolute inset-0 pointer-events-none z-30 opacity-10 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                    
                    {/* Scaled Content Container */}
                    <div className="origin-top-left transform w-[1280px] h-[770px] flex bg-white" style={{ transform: 'scale(0.45625)' }}>
                      
                      {/* Sidebar */}
                      <div className="w-64 bg-[#f9f9f9] border-r border-neutral-200 flex flex-col shrink-0 z-20">
                        {/* Logo Area */}
                        <div className="h-16 flex items-center justify-between px-6 shrink-0">
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-xl text-neutral-900">Lexora</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-neutral-900 border border-neutral-200 tracking-wider">PRO</span>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 cursor-pointer transition-colors">
                            <PanelLeft size={16} />
                          </div>
                        </div>

                        {/* Workspace Selector */}
                        <div className="px-4 py-3 shrink-0">
                          <div className="bg-[#f3f4f6] rounded-xl p-3 flex items-center gap-3 border border-transparent hover:border-neutral-200 cursor-pointer transition-colors group">
                            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                              <Briefcase size={20} />
                            </div>
                            <div className="flex-1 overflow-hidden text-left">
                              <div className="text-xs font-bold text-neutral-900 truncate uppercase tracking-wide">ZADEVA LUKA KRANJC</div>
                              <div className="text-[10px] text-neutral-500 font-medium">10 dokumentov</div>
                            </div>
                            <ChevronDown size={14} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                          </div>
                        </div>

                        {/* Navigation */}
                        <div className="px-4 py-2 space-y-1 shrink-0">
                          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 mb-2 mt-2 text-left">ZADEVA LUKA KRANJC</div>
                          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-700 hover:bg-neutral-200 cursor-pointer transition-colors text-sm font-medium">
                            <Folder size={18} className="text-neutral-500" /> Dokumenti
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-700 hover:bg-neutral-200 cursor-pointer transition-colors text-sm font-medium">
                            <History size={18} className="text-neutral-500" /> Zgodovina
                          </div>
                          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-700 hover:bg-neutral-200 cursor-pointer transition-colors text-sm font-medium">
                            <Settings size={18} className="text-neutral-500" /> Nastavitve
                          </div>
                        </div>

                        {/* New Chat Button */}
                        <div className="px-4 mt-4 shrink-0">
                          <button className="w-full flex items-center justify-start gap-3 px-4 py-3 rounded-xl bg-white hover:bg-neutral-50 border border-neutral-200 text-sm font-semibold text-neutral-900 transition-colors shadow-sm group">
                            <span className="text-lg leading-none text-neutral-400 group-hover:text-neutral-600 transition-colors">+</span> Nov klepet
                          </button>
                        </div>

                        {/* Chat History */}
                        <div className="px-4 py-4 flex-1 overflow-hidden flex flex-col mt-2">
                          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider px-3 mb-2 shrink-0 text-left">Klepeti</div>
                          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1 pr-1">
                            <div className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-neutral-200/50 text-neutral-900 text-sm font-medium cursor-pointer border border-transparent hover:border-neutral-200 transition-all">
                              <span className="truncate text-left">Pravni spisovni povzetek</span>
                              <MoreHorizontal size={14} className="text-neutral-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        </div>

                        {/* User Profile */}
                        <div className="p-4 shrink-0 border-t border-neutral-200/50">
                          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-50 cursor-pointer transition-colors shadow-sm">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 shadow-inner"></div>
                            <div className="text-xs font-semibold text-neutral-700 truncate flex-1 text-left">odvetnik@gmail.com</div>
                            <ChevronUp size={14} className="text-neutral-400" />
                          </div>
                        </div>
                      </div>

                      {/* Main Chat Area */}
                      <div className="flex-1 flex flex-col bg-white relative z-10 h-full">
                        {/* Top Action Buttons */}
                        <div className="h-16 flex items-center justify-start px-8 shrink-0 border-b border-neutral-100">
                          <div className="flex gap-3">
                            <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 cursor-pointer transition-colors shadow-sm">
                              <PanelLeft size={18} />
                            </div>
                            <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 cursor-pointer transition-colors shadow-sm">
                              <MoreHorizontal size={18} />
                            </div>
                          </div>
                        </div>

                        {/* Chat Content */}
                        <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center custom-scrollbar pb-32">
                          <div className="w-full max-w-3xl space-y-8">
                            
                            {/* User Message - Right Aligned */}
                            <div className="flex flex-col items-end mb-6">
                              <div className="bg-[#0066ff] text-white text-sm leading-relaxed p-5 rounded-3xl rounded-tr-sm max-w-[85%] shadow-md text-left font-medium">
                                Analiziraj izpolnjevanje znakov kaznivega dejanja po 240. členu KZ-1. Ali tožilstvo v obtožnici sploh ponuja neposredne dokaze za direktni naklep ali zgolj sklepa nanj na podlagi višine škode 84.750eur?
                              </div>
                              <div className="flex gap-3 mt-2 px-2 opacity-60 hover:opacity-100 transition-opacity">
                                <Copy size={14} className="text-neutral-500 cursor-pointer" />
                              </div>
                            </div>

                            {/* Status Bars */}
                            <div className="relative pl-10 space-y-3 mb-10">
                              <div className="absolute left-0 top-3 text-neutral-800">
                                <Sparkles size={20} className="text-neutral-800" />
                              </div>
                              {[
                                { text: "Pridobljenih 2 členov", icon: <File size={14} />, status: "Zaključeno", isError: false },
                                { text: "Iskanje po 6 dokumentih", icon: <FileText size={14} />, status: "Zaključeno", isError: false },
                                { text: "Iskanje po sodni praksi: 24 odločb", icon: <Scale size={14} />, status: "Zaključeno", isError: false },
                                { text: "Spletno iskanje (5)", icon: <Globe size={14} />, status: "Zaključeno", isError: false }
                              ].map((status, idx) => (
                                <div key={idx} className="flex items-center justify-between bg-white border border-neutral-200 rounded-2xl px-4 py-3 hover:bg-neutral-50 transition-colors cursor-pointer shadow-sm group w-full max-w-2xl">
                                  <div className="flex items-center gap-3">
                                    <div className="text-neutral-500 group-hover:text-neutral-800 transition-colors">{status.icon}</div>
                                    <span className="text-xs text-neutral-700 font-semibold">{status.text}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${status.isError ? 'bg-red-50 border border-red-200' : 'bg-emerald-50 border border-emerald-200'}`}>
                                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${status.isError ? 'bg-red-500' : 'bg-emerald-500'}`}>
                                        {status.isError ? <X size={8} className="text-white stroke-[4]" /> : <Check size={8} className="text-white stroke-[4]" />}
                                      </div>
                                      <span className={`text-[10px] font-bold uppercase tracking-tight ${status.isError ? 'text-red-700' : 'text-emerald-700'}`}>{status.status}</span>
                                    </div>
                                    <ChevronDown size={14} className="text-neutral-400 group-hover:text-neutral-600" />
                                  </div>
                                </div>
                              ))}
                            </div>

                          {/* AI Response */}
                          <div className="text-neutral-800 text-sm leading-relaxed space-y-5 max-w-3xl text-left">
                            <p>Analiza izpolnjevanja znakov kaznivega dejanja po 240. členu KZ-1 (Zloraba položaja ali zaupanja pri gospodarski dejavnosti) in vprašanje dokazanosti direktnega naklepa v obtožnici razkrivata naslednje:</p>
                            
                            <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-3">1. Pravna kvalifikacija in zakonski znaki (240. člen KZ-1)</h3>
                            
                            <p>Dejanje se obdolžencu očita po <strong className="text-neutral-900 font-semibold">drugem odstavku 240. člena KZ-1</strong>, ki predstavlja kvalificirano obliko tega dejanja <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><FileText size={10}/> obtožnica</span>. Ključni elementi so:</p>

                            <ul className="space-y-3 list-none pl-0">
                              <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></div><span><strong className="text-neutral-900 font-semibold">Velika premoženjska škoda/korist:</strong> Meja za "veliko" škodo je v KZ-1 določena nad <strong className="text-neutral-900 font-semibold">50.000 EUR</strong> <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><Globe size={10}/> zakonodaja.com</span>. Znesek 84.750 EUR ta prag presega.</span></li>
                              <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></div><span><strong className="text-neutral-900 font-semibold">Direktni naklep ("hotel"):</strong> Za kvalificirano obliko po drugem odstavku ni dovolj le eventualni naklep (privolitev v posledico), temveč zakon izrecno zahteva, da je storilec <strong className="text-neutral-900 font-semibold">hotel</strong> sebi ali komu drugemu pridobiti takšno korist ali drugemu povzročiti takšno škodo <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><File size={10}/> pisrs.si</span>. To se v pravni teoriji in sodni praksi imenuje <strong className="text-neutral-900 font-semibold">obarvani naklep</strong> (<em className="text-neutral-900">dolus coloratus</em>) <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><Scale size={10}/> sodnapraksa.si</span>.</span></li>
                            </ul>

                            <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-3">2. Analiza dokazov za naklep v obtožnici</h3>
                            
                            <p>Tožilstvo v obtožnici navaja, da je obdolženec odobril naročila, <em className="text-neutral-900">"čeprav je vedel ali bi moral vedeti, da navedena podjetja dejansko ne bodo dobavila naročenega blaga"</em> <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><FileText size={10}/> obtožnica</span>.</p>

                            <p><strong className="text-neutral-900 font-semibold">Ali obstajajo neposredni dokazi za direktni naklep?</strong> Pregled spisa kaže, da tožilstvo <strong className="text-neutral-900 font-semibold">ne ponuja neposrednih dokazov</strong> (npr. priznanja, dokazanega prejema podkupnine ali neposredne komunikacije o namernem oškodovanju), temveč na direktni naklep <strong className="text-neutral-900 font-semibold">sklepa posredno</strong> na podlagi naslednjih okoliščin:</p>

                            <ol className="space-y-3 list-decimal pl-4">
                              <li><strong className="text-neutral-900 font-semibold">Funkcija obdolženca:</strong> Kot vodja nabave je imel pooblastila in dolžnost nadzora, ki jih je po mnenju tožilstva opustil <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><FileText size={10}/> Zaključna beseda državnega tožilca</span>.</li>
                              <li><strong className="text-neutral-900 font-semibold">Narava dobaviteljev:</strong> Podjetja so bila registrirana kratek čas, z njimi se prej ni poslovalo, komunikacija pa je bila le prek e-pošte.</li>
                              <li><strong className="text-neutral-900 font-semibold">Višina škode:</strong> Tožilstvo uporablja višino škode (84.750 EUR) kot indikator resnosti in namernosti dejanja, vendar sodna praksa poudarja, da zgolj višina škode ne more avtomatično nadomestiti dokazovanja voljnega elementa naklepa <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><Scale size={10}/> sodnapraksa.si</span>.</li>
                            </ol>

                            <h3 className="text-lg font-bold text-neutral-900 mt-6 mb-3">3. Težave v argumentaciji tožilstva</h3>

                            <p>Tožilstvo uporablja formulacijo <strong className="text-neutral-900 font-semibold">"vedel ali bi moral vedeti"</strong> <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><FileText size={10}/> obtožnica</span>, kar je procesno tvegano:</p>

                            <ul className="space-y-3 list-none pl-0">
                              <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></div><span>Standard <strong className="text-neutral-900 font-semibold">"bi moral vedeti"</strong> se nanaša na malomarnost, ne na direktni naklep.</span></li>
                              <li className="flex items-start gap-2"><div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></div><span>Za obsodbo po drugem odstavku 240. člena KZ-1 mora sodišče ugotoviti, da je obdolženec <strong className="text-neutral-900 font-semibold">hotel</strong> povzročiti škodo. Če obramba dokaže, da je šlo le za površnost ali sistemsko napako skladišča (kar obdolženec trdi v zagovoru <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-semibold text-neutral-600 border border-neutral-200 ml-1 align-middle"><FileText size={10}/> ZAPISNIK o zaslišanju</span>), direktni naklep ne bo podan.</span></li>
                            </ul>

                            <p><strong className="text-neutral-900 font-semibold">Povzetek:</strong> Tožilstvo v obtožnici dejansko <strong className="text-neutral-900 font-semibold">sklepa na naklep</strong> iz okoliščin dejanja in višine škode. Neposrednih dokazov o tem, da je obdolženec zavestno zasledoval cilj oškodovanja podjetja (motiva ali neposredne koristi zanj), v spisu trenutno ni videti. Obramba ima močan argument v tem, da tožilstvo ni izkazalo povezave med obdolžencem in dobavitelji, kar je le na ravni "suma".</p>

                            <div className="flex gap-4 mt-8 px-2 justify-start opacity-70">
                              <div className="flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-800 cursor-pointer transition-colors">
                                <Copy size={16} />
                              </div>
                              <div className="flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-800 cursor-pointer transition-colors">
                                <ThumbsUp size={16} />
                              </div>
                              <div className="flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-800 cursor-pointer transition-colors">
                                <ThumbsDown size={16} />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Input Area - Fixed at bottom of scaled container */}
                        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-8">
                          <div className="w-full max-w-3xl bg-white border border-neutral-200 rounded-[2rem] p-3 shadow-2xl ring-1 ring-black/5 flex items-end gap-2">
                            <div className="p-2 text-neutral-400 hover:text-neutral-600 cursor-pointer transition-colors rounded-full hover:bg-neutral-100">
                              <Paperclip size={20} />
                            </div>
                            <textarea 
                              disabled
                              placeholder="Pošljite sporočilo..." 
                              className="flex-1 bg-transparent text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none resize-none h-14 py-3 max-h-32"
                            />
                            <div className="flex items-center gap-2 pb-1">
                              <button className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-600 hover:text-neutral-900 transition-colors bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 rounded-lg border border-neutral-200 uppercase tracking-wide">
                                <Cpu size={12} /> Hitri odgovori
                              </button>
                              <div className="p-2 text-neutral-400 hover:text-neutral-600 cursor-pointer transition-colors rounded-full hover:bg-neutral-100">
                                <Mic size={20} />
                              </div>
                              <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-black transition-colors shadow-md cursor-pointer">
                                <ArrowUp size={18} />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div 
                  className="absolute top-full left-0 w-[600px] h-[375px] rounded-[2rem] z-0"
                  style={{ 
                    transformOrigin: 'top center',
                    transform: 'rotateX(90deg)',
                    transformStyle: 'preserve-3d',
                    background: 'linear-gradient(to bottom, #2a2a2a, #1a1a1a)',
                    boxShadow: '0 40px 100px rgba(0,0,0,0.9), inset 0 1px 2px rgba(255,255,255,0.1)'
                  }}
                >
                  {/* Hinge Area */}
                  <div className="absolute top-0 left-0 w-full h-4 bg-[#111] rounded-t-lg"></div>

                  {/* Keyboard Well */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[88%] h-[52%] bg-[#121212] rounded-xl shadow-[inset_0_2px_10px_rgba(0,0,0,1)] p-2.5 flex flex-col gap-1">
                    {/* Keys */}
                    {Array.from({ length: 6 }).map((_, row) => (
                      <div key={row} className="flex justify-between gap-1 h-full">
                        {Array.from({ length: row === 0 ? 14 : row === 5 ? 7 : 15 }).map((_, col) => (
                          <div 
                            key={col} 
                            className={`bg-[#050505] rounded shadow-[0_1px_0_#000] border border-white/5 flex items-center justify-center ${
                              row === 5 && col === 3 ? 'flex-[6]' : 'flex-1'
                            }`}
                          >
                            <div className="w-full h-full rounded-[1px] bg-white/[0.02]"></div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* Trackpad */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[38%] h-[32%] bg-gradient-to-b from-[#1a1a1a] to-[#222] rounded-xl shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)] border border-white/5"></div>
                  
                  {/* Front Lip */}
                  <div className="absolute bottom-0 left-0 w-full h-5 bg-[#1a1a1a] rounded-b-[2rem] shadow-[inset_0_-1px_5px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12 relative z-20">
            <p className="text-sm text-neutral-500 italic">
              * Vsi podatki, uporabljeni na spletni strani za prikaz delovanja aplikacije, so izmišljeni.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-24 max-w-5xl mx-auto">
            {[
              { title: "Pregled dokumentacije", icon: <FileText className="text-blue-400" />, delay: 0, targetId: "step-01" },
              { title: "Raziskava zakonodaje", icon: <Search className="text-emerald-400" />, delay: 0.1, targetId: "step-02" },
              { title: "Iskanje sodne prakse", icon: <Globe className="text-purple-400" />, delay: 0.2, targetId: "step-03" },
              { title: "Priprava osnutkov", icon: <MessageSquare className="text-orange-400" />, delay: 0.3, targetId: "step-04" },
              { title: "Personalizirani agenti", icon: <Sparkles className="text-pink-400" />, delay: 0.4, targetId: "step-05" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => {
                  const el = document.getElementById(item.targetId);
                  if (el) {
                    const yOffset = -100; // offset for the fixed header
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="p-5 rounded-2xl bg-neutral-900/40 border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-white/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <div className="w-8 h-1 bg-blue-600/20 rounded-full mt-2 group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* DETAILED STEPS */}

          <div className="space-y-24">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                id={`step-${step.id}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-32"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-neutral-900/50 border border-white/10 flex items-center justify-center shadow-xl shrink-0">
                      <span className={`font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                        {step.id}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-white leading-tight">
                        {step.title}
                      </h3>
                      {/* @ts-ignore */}
                      {step.badge && (
                        <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                          {/* @ts-ignore */}
                          {step.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {step.details.map((detail, j) => (
                      <motion.li 
                        key={j} 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 text-base text-neutral-300"
                      >
                        {/* @ts-ignore */}
                        <div className={`w-6 h-6 rounded-full ${step.checkBg} flex items-center justify-center shrink-0`}>
                          {/* @ts-ignore */}
                          <CheckCircle size={14} className={step.checkColor} />
                        </div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative aspect-[4/3] rounded-[2.5rem] bg-neutral-900/40 border border-white/5 overflow-hidden flex items-center justify-center group ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                   <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 blur-[100px]`} />
                   <StepAnimation step={step} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSPACE SECTION */}
      <section className="bg-neutral-900/50 py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.05)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Vse za delo na zadevi na enem mestu</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Za vsako zadevo v Lexori ustvarite personalizirano AI delovno okolje. Tako imate celoten kontekst primera na enem mestu, brez potrebe po stalnem preklapljanju med različnimi sistemi.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="flex flex-col gap-3">
                {[
                  { label: "Dokumenti zadeve", icon: <FileText size={20} />, desc: "Naložite in organizirajte vse spise, pogodbe in dokaze." },
                  { label: "Pravna raziskava", icon: <Search size={20} />, desc: "Iščite po zakonodaji in sodni praksi znotraj konteksta." },
                  { label: "Vprašanja in odgovori", icon: <MessageSquare size={20} />, desc: "Klepetajte z dokumenti in hitro poiščite informacije." },
                  { label: "Osnutki dokumentov", icon: <GitMerge size={20} />, desc: "Generirajte osnutke pogodb in vlog na podlagi primera." }
                ].map((item, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveWorkspaceTab(i)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      activeWorkspaceTab === i 
                        ? 'bg-blue-600/10 border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.1)]' 
                        : 'bg-neutral-950/50 border-white/5 hover:border-white/10 hover:bg-neutral-900'
                    }`}
                  >
                    <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      activeWorkspaceTab === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-neutral-900 text-neutral-500'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <span className={`block text-lg font-bold mb-1 transition-colors ${
                        activeWorkspaceTab === i ? 'text-white' : 'text-neutral-300'
                      }`}>{item.label}</span>
                      <span className={`block text-sm transition-colors ${
                        activeWorkspaceTab === i ? 'text-blue-200/70' : 'text-neutral-500'
                      }`}>{item.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
               <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full animate-pulse-soft" />
               <div className="relative bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[500px]">
                  {/* Window Header */}
                  <div className="h-12 border-b border-white/10 bg-neutral-900/50 flex items-center px-4 gap-2 shrink-0">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="ml-4 flex-1 flex justify-center">
                      <div className="bg-black/50 border border-white/5 rounded-md px-3 py-1 text-xs text-neutral-500 font-mono flex items-center gap-2">
                        <Lock size={10} /> lexora.si / zadeva-124
                      </div>
                    </div>
                  </div>

                  {/* Window Content */}
                  <div className="flex-1 relative overflow-hidden bg-neutral-950">
                    <AnimatePresence mode="wait">
                      {activeWorkspaceTab === 0 && (
                        <motion.div 
                          key="tab0"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 p-6 flex flex-col gap-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-white font-medium">Dokumenti zadeve</h3>
                            <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1">
                              <span className="text-lg leading-none">+</span> Naloži
                            </button>
                          </div>
                          {[
                            { name: "Tožba_vzorec_final.pdf", size: "2.4 MB", date: "Danes, 10:42" },
                            { name: "Pogodba_o_zaposlitvi_Janez_Novak.docx", size: "1.1 MB", date: "Včeraj, 14:15" },
                            { name: "Sklep_sodišča_priloga.pdf", size: "4.8 MB", date: "12. maj 2026" },
                            { name: "Korespondenca_stranka.eml", size: "156 KB", date: "10. maj 2026" }
                          ].map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer group">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                  <FileText size={18} />
                                </div>
                                <div>
                                  <div className="text-sm text-neutral-200 font-medium">{file.name}</div>
                                  <div className="text-xs text-neutral-500">{file.size}</div>
                                </div>
                              </div>
                              <div className="text-xs text-neutral-500">{file.date}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {activeWorkspaceTab === 1 && (
                        <motion.div 
                          key="tab1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 p-6 flex flex-col"
                        >
                          <div className="relative mb-6">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                            <input type="text" disabled value="Odpoved pogodbe iz poslovnega razloga" className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none" />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">Zakonodaja (ZDR-1)</div>
                            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                              <div className="text-emerald-400 text-sm font-bold mb-1">89. člen (razlogi za redno odpoved)</div>
                              <div className="text-xs text-neutral-300 leading-relaxed">
                                (1) Razlogi za redno odpoved pogodbe o zaposlitvi delavcu s strani delodajalca so:
                                <br/>- prenehanje potreb po opravljanju določenega dela pod pogoji iz pogodbe o zaposlitvi, zaradi ekonomskih, organizacijskih, tehnoloških, strukturnih ali podobnih razlogov na strani delodajalca (poslovni razlog)...
                              </div>
                            </div>
                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mt-6 mb-2">Sodna praksa</div>
                            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                              <div className="text-blue-400 text-sm font-bold mb-1">VDSS sodba Pdp 123/2023</div>
                              <div className="text-xs text-neutral-400 leading-relaxed">
                                Sodišče je odločilo, da mora delodajalec pri odpovedi iz poslovnega razloga dokazati dejansko prenehanje potreb po delu in ne le formalne ukinitve delovnega mesta...
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeWorkspaceTab === 2 && (
                        <motion.div 
                          key="tab2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 p-6 flex flex-col"
                        >
                          <div className="flex-1 space-y-4 overflow-hidden flex flex-col justify-end pb-4">
                            <div className="flex gap-3 max-w-[85%] self-end">
                              <div className="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm text-sm">
                                Kakšen je odpovedni rok za g. Novaka glede na priloženo pogodbo?
                              </div>
                            </div>
                            <div className="flex gap-3 max-w-[85%]">
                              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                                <Sparkles size={14} className="text-blue-400" />
                              </div>
                              <div className="bg-neutral-900 border border-white/10 text-neutral-200 p-4 rounded-2xl rounded-tl-sm text-sm leading-relaxed">
                                Glede na <span className="text-blue-400 cursor-pointer hover:underline">Pogodba_o_zaposlitvi_Janez_Novak.docx (člen 12)</span> in dejstvo, da je zaposlen 8 let, znaša njegov odpovedni rok v primeru redne odpovedi iz poslovnega razloga <strong className="text-white">45 dni</strong> v skladu s 94. členom ZDR-1.
                              </div>
                            </div>
                          </div>
                          <div className="mt-auto relative">
                            <input type="text" disabled placeholder="Vprašaj Lexoro..." className="w-full bg-neutral-900 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none" />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeWorkspaceTab === 3 && (
                        <motion.div 
                          key="tab3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 p-6 flex flex-col"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white font-medium">Osnutek: Odpoved pogodbe</h3>
                            <div className="flex gap-2">
                              <button className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-lg hover:bg-neutral-700 transition">Kopiraj</button>
                              <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-500 transition">Izvozi v Word</button>
                            </div>
                          </div>
                          <div className="flex-1 bg-white rounded-xl p-6 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent z-10"></div>
                            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10"></div>
                            <div className="text-black font-serif text-sm leading-relaxed space-y-4 opacity-90">
                              <p className="text-right font-sans text-xs text-gray-500">Ljubljana, 15. maj 2026</p>
                              <p className="font-bold text-center text-base uppercase mt-4">Redna odpoved pogodbe o zaposlitvi iz poslovnega razloga</p>
                              <p>Spoštovani g. Janez Novak,</p>
                              <p>Na podlagi 1. alineje prvega odstavka 89. člena Zakona o delovnih razmerjih (ZDR-1) vam podajamo redno odpoved pogodbe o zaposlitvi, sklenjene dne 12. 4. 2018, za delovno mesto "Vodja prodaje".</p>
                              <p className="font-bold">Obrazložitev:</p>
                              <p>Zaradi organizacijskih sprememb v podjetju in ukinitve oddelka za terensko prodajo je prenehala potreba po opravljanju vašega dela pod pogoji iz pogodbe o zaposlitvi...</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="bg-neutral-900/50 py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.05)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm">
              <span className="font-sans text-xs font-semibold text-blue-300 tracking-wide uppercase">Primerjava</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Specializirano za pravno delo</h2>
            <div className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed space-y-4">
              <p>Splošni AI modeli, kot so ChatGPT, Gemini ali Claude, so zasnovani za širok spekter nalog in nimajo jasnega ter celovitega dostopa do pravnih virov. <span className="text-white font-medium">Lexora pa je zasnovana posebej za delo pravnikov.</span></p>
              <p>Omogoča delo v kontekstu konkretne pravne zadeve — z dokumenti, zakonodajo in sodno prakso na enem mestu.</p>
              <p>Splošni AI modeli pomagajo pri posameznih vprašanjih. <span className="text-white font-medium">Lexora pa omogoča delo na celotni pravni zadevi</span>, zato lahko pravnik hitreje razume primer in pripravi pravno stališče.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-neutral-950 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-neutral-900/50">
                      <th className="p-6 text-sm font-medium text-neutral-400 uppercase tracking-wider w-1/2">Funkcionalnost</th>
                      <th className="p-6 text-center text-lg font-serif font-normal text-white bg-blue-600/10 border-x border-blue-500/20 w-1/4">Lexora</th>
                      <th className="p-6 text-center text-sm font-medium text-neutral-400 uppercase tracking-wider w-1/4">Splošni AI modeli</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { feature: "Hiter pregled celotnega spisa (pogodbe, sodbe, dopisi)", lexora: true, general: false },
                      { feature: "Delo v kontekstu celotne zadeve", lexora: true, general: false },
                      { feature: "Povezovanje dejstev z zakonodajo", lexora: true, general: false },
                      { feature: "Iskanje relevantne sodne prakse", lexora: true, general: false },
                      { feature: "Strukturirana analiza pravnega problema", lexora: true, general: false },
                      { feature: "Priprava pravnih osnutkov (tožbe, odgovori, pravna mnenja)", lexora: true, general: false },
                      { feature: "Delo z dokumenti, zakonodajo in sodno prakso na enem mestu", lexora: true, general: false },
                      { feature: "Odgovori na splošna pravna vprašanja", lexora: true, general: true },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-6 text-neutral-300 font-medium">{row.feature}</td>
                        <td className="p-6 text-center bg-blue-600/5 border-x border-blue-500/10">
                          {row.lexora ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400">
                              <Check size={18} strokeWidth={3} />
                            </div>
                          ) : (
                            <Minus size={18} className="mx-auto text-neutral-600" />
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {row.general ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400">
                              <Check size={18} strokeWidth={3} />
                            </div>
                          ) : (
                            <Minus size={18} className="mx-auto text-neutral-600" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>


        </div>
      </section>

      {/* SECURITY SECTION */}
      <section id="security" className="bg-neutral-950 py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-sm">
                <Lock size={14} className="text-emerald-400" />
                <span className="font-sans text-xs font-semibold text-emerald-300 tracking-wide uppercase">Varnost in zasebnost</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Vaši podatki ostanejo vaši.</h2>
              <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                Zavedamo se, da je zaupnost v pravnem poklicu na prvem mestu. Lexora je zasnovana z najvišjimi varnostnimi standardi, ki zagotavljajo, da so vaši dokumenti in podatki strank popolnoma varni.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Brez učenja modelov", desc: "Vaši dokumenti in poizvedbe se nikoli ne uporabljajo za učenje ali izboljševanje AI modelov." },
                  { title: "Enkripcija podatkov", desc: "Vsi podatki so šifrirani med prenosom (TLS 1.3) in v mirovanju (AES-256)." },
                  { title: "Skladnost z GDPR", desc: "Infrastruktura je v celoti skladna z evropsko zakonodajo o varstvu osebnih podatkov." }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle size={16} className="text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
               <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full animate-pulse-soft" />
               <div className="relative bg-neutral-900 rounded-[3rem] border border-white/10 p-10 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-neutral-950 border border-emerald-500/20 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_60px_rgba(16,185,129,0.2)] transition-shadow duration-500">
                      <Shield size={40} className="text-emerald-400" />
                    </div>
                    
                    <div className="space-y-4 w-full">
                      <div className="bg-neutral-950/50 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                        <span className="text-sm text-neutral-400">Podatkovni centri</span>
                        <span className="text-sm font-medium text-white flex items-center gap-2">
                          <Globe size={14} className="text-emerald-500" />
                          EU (Frankfurt)
                        </span>
                      </div>
                      <div className="bg-neutral-950/50 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                        <span className="text-sm text-neutral-400">Zadrževanje podatkov</span>
                        <span className="text-sm font-medium text-white flex items-center gap-2">
                          <Database size={14} className="text-emerald-500" />
                          Popoln nadzor
                        </span>
                      </div>
                      <div className="bg-neutral-950/50 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                        <span className="text-sm text-neutral-400">Dostop do podatkov</span>
                        <span className="text-sm font-medium text-white flex items-center gap-2">
                          <Lock size={14} className="text-emerald-500" />
                          Samo vi
                        </span>
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEMO VIDEO SLIDESHOW */}
      <section id="demo" ref={demoSectionRef} className="bg-neutral-900 py-20 border-t border-white/5 overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 mb-12">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Predogled Platforme</h2>
            <p className="mt-3 text-neutral-400">Izberite področje in si oglejte Lexoro v akciji.</p>
          </div>

          {/* Navigation Tabs (Above Slideshow) */}
          <div className="flex flex-wrap justify-center gap-2">
            {videos.map((video, index) => (
              <button
                key={video.key}
                onClick={() => scrollToVideo(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeVideo.key === video.key 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-neutral-800 border-white/5 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
              >
                {video.title}
              </button>
            ))}
          </div>
        </div>

        {/* Full Width Horizontal Slideshow Container */}
        <div className="relative group w-full">
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-[2rem] blur-3xl opacity-50 pointer-events-none"></div>
          
          <div 
            ref={scrollContainerRef}
            className="relative flex overflow-x-hidden snap-x snap-mandatory scroll-smooth py-20 px-[10%] md:px-[20%]"
          >
            {videos.map((video) => (
              <div 
                key={video.key}
                className="w-[90%] md:w-[80%] shrink-0 snap-center px-1 md:px-2"
              >
                <div className={`w-full aspect-video rounded-3xl overflow-hidden border transition-all duration-700 ease-out shadow-[0_40px_100px_rgba(0,0,0,0.9)] ${
                  activeVideo.key === video.key 
                    ? 'border-blue-500/60 scale-[1.15] md:scale-125 z-20 opacity-100 shadow-blue-500/40' 
                    : 'border-white/5 scale-75 z-0 opacity-10 grayscale blur-[3px]'
                }`}>
                  <iframe 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0&controls=0&modestbranding=1&showinfo=0`} 
                    title={`Lexora Demo - ${video.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
            <button 
              onClick={() => {
                const currentIndex = videos.findIndex(v => v.key === activeVideo.key);
                if (currentIndex > 0) scrollToVideo(currentIndex - 1);
              }}
              className={`w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto ${
                videos.findIndex(v => v.key === activeVideo.key) === 0 ? 'opacity-0 invisible' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => {
                const currentIndex = videos.findIndex(v => v.key === activeVideo.key);
                if (currentIndex < videos.length - 1) scrollToVideo(currentIndex + 1);
              }}
              className={`w-12 h-12 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto ${
                videos.findIndex(v => v.key === activeVideo.key) === videos.length - 1 ? 'opacity-0 invisible' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 mt-12">
          {/* Active Video Info */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-serif text-white mb-2">{activeVideo.title}</h3>
            <p className="text-sm text-neutral-500 font-mono uppercase tracking-widest">Predstavitev uporabe • {activeVideo.duration}</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-blue-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">Rezervirajte termin za predstavitev</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
              Spoznajte, kako lahko Lexora postane vaša nova pravna supermoč. V 30 minutah vam pokažemo vse ključne funkcionalnosti.
            </p>
            
            <motion.a 
              href="https://calendly.com/jan-lexora/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-white text-blue-600 font-bold text-lg hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all"
            >
              Rezerviraj predstavitev
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION (Moved to Footer area) */}
      <section className="bg-neutral-950 py-24 relative overflow-hidden border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center flex flex-col items-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Prihodnost prava</h2>
            <div className="space-y-6 text-base md:text-lg text-neutral-400 leading-relaxed mb-12 font-light">
              <p>
                Lexora pravnika ne nadomešča. Deluje kot <span className="text-white font-medium">digitalni pravni asistent</span>, ki vam omogoča, da več časa namenite pravni presoji, argumentaciji in strategiji.
              </p>
              <p>
                Umetna inteligenca postopoma postaja del pravne prakse. Orodja za analizo dokumentov in pravno raziskavo lahko bistveno povečajo učinkovitost dela pravnikov.
              </p>
              <p>
                Na našem blogu raziskujemo, kako se pravo spreminja v dobi umetne inteligence - ter kako lahko nove tehnologije postanejo vaša konkurenčna prednost.
              </p>
            </div>
            
            <a 
              href="https://blog.lexora.si/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 text-sm font-medium transition-all duration-300 hover:scale-105 border border-blue-500/30 hover:border-blue-400/50 shadow-[0_0_20px_rgba(37,99,235,0.1)] hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              <span>Preberi blog</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-400 border-t border-white/5 pt-16 pb-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <p className="font-serif text-2xl text-white mb-4">Lexora</p>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                Vaša nova pravna supermoč. AI asistent za hitrejšo in natančnejšo pravno analizo.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Produkt</h3>
              <ul className="space-y-3 text-sm">
                <li><a className="hover:text-white transition-colors" href="#demo">Predogled</a></li>
                <li><a className="hover:text-white transition-colors" href="https://onboarding.lexora.si/" target="_blank" rel="noopener noreferrer">Kako začeti</a></li>
                <li><a className="hover:text-white transition-colors" href="#security">Varnost</a></li>
                <li><Link className="hover:text-white transition-colors" to="/o-nas">O nas</Link></li>
                <li><a className="hover:text-white transition-colors" href="https://blog.lexora.si/" target="_blank" rel="noopener noreferrer">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Pogoji in zasebnost</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="hover:text-white transition-colors" to="/pogoji-uporabe">Pogoji uporabe</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/politika-zasebnosti">Politika zasebnosti</Link></li>
                <li><Link className="hover:text-white transition-colors" to="/politika-piskotkov">Politika piškotkov</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
            <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Lexora. Vse pravice pridržane.</p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/lexora-si/" className="text-neutral-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/LexoraAI" className="text-neutral-500 hover:text-white transition-colors" aria-label="X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@LexoraAI-e3o9z" className="text-neutral-500 hover:text-white transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pogoji-uporabe" element={<PogojiUporabe />} />
      <Route path="/politika-piskotkov" element={<PolitikaPiskotkov />} />
      <Route path="/politika-zasebnosti" element={<PolitikaZasebnosti />} />
      <Route path="/o-nas" element={<ONas />} />
    </Routes>
  );
};

export default App;
