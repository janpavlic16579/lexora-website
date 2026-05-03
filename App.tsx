
import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Menu, X, CheckCircle, Search, FileText, Globe, MessageSquare, GitMerge, Database, Star, ArrowRight, Sparkles, Zap, Shield, Cpu, Check, Minus, Lock, File, Briefcase, Folder, History, Settings, MoreHorizontal, ChevronDown, ChevronUp, PanelLeft, ArrowDown, Paperclip, Mic, ArrowUp, Calendar, AlertCircle, Scale, Copy, ThumbsUp, ThumbsDown, BookOpen, Plus, LayoutDashboard, Workflow, Bot } from 'lucide-react';

import PogojiUporabe from './src/pages/PogojiUporabe';
import PolitikaPiskotkov from './src/pages/PolitikaPiskotkov';
import PolitikaZasebnosti from './src/pages/PolitikaZasebnosti';
import ONas from './src/pages/ONas';
import Varnost from './src/pages/Varnost';
import KakoZaceti from './src/pages/KakoZaceti';
import { LanguageProvider, useLang, LangToggle } from './src/LanguageContext';

const MegaMenu = ({ title, href, children, align = 'center', width = '520px' }: { title: string, href?: string, children: React.ReactNode, align?: 'left' | 'center' | 'right', width?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const alignmentClass = align === 'left' ? 'left-0' : align === 'right' ? 'right-0' : 'left-1/2 -translate-x-1/2';

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {href ? (
        href.startsWith('http') ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors font-medium">
            {title} <ChevronDown size={14} className="opacity-50" />
          </a>
        ) : (
          <Link to={href} className="flex items-center gap-1 hover:text-blue-600 transition-colors font-medium">
            {title} <ChevronDown size={14} className="opacity-50" />
          </Link>
        )
      ) : (
        <button className="flex items-center gap-1 hover:text-blue-600 transition-colors font-medium">
          {title} <ChevronDown size={14} className="opacity-50" />
        </button>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full ${alignmentClass} mt-3 bg-white border border-neutral-100 rounded-2xl shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1),0_2px_8px_-2px_rgba(0,0,0,0.06)] overflow-hidden z-50`}
            style={{ width: `min(${width}, calc(100vw - 2rem))` }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Typewriter = ({ text, delay = 0, speed = 50, className = '' }: { text: string; delay?: number; speed?: number; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, text, speed, started]);

  return (
    <span className={`relative ${className}`}>
      {displayText}
      {started && displayText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-[0.8em] bg-blue-400 ml-1 align-middle"
        />
      )}
    </span>
  );
};

const InteractiveHeroBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Blue Glow — follows cursor */}
      <motion.div
        animate={{ left: mousePos.x, top: mousePos.y }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        className="absolute w-[900px] h-[900px] rounded-full opacity-20"
        style={{
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />
      {/* Indigo accent — lags behind for depth */}
      <motion.div
        animate={{ left: mousePos.x, top: mousePos.y }}
        transition={{ type: "spring", damping: 50, stiffness: 100, mass: 1.2 }}
        className="absolute w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          transform: 'translate(-30%, -60%)',
          background: 'radial-gradient(circle, rgba(99, 60, 200, 0.4) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const decoded = decodeURIComponent(pathname);
    if (decoded === '/začetek') {
      const scroll = () => {
        const el = document.getElementById('začetek');
        if (el) {
          window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }
      };
      // Two attempts: fast (for cached renders) and delayed (for first load)
      setTimeout(scroll, 100);
      setTimeout(scroll, 600);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

const StepAnimation = ({ step }: { step: any }) => {
  switch (step.id) {
    case "01": // Documents file list — project nav + tabs + checklist
      return (
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] p-5 -mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-neutral-500 text-sm">Projekti</span>
              <span className="text-neutral-300 text-sm">›</span>
              <span className="font-serif text-neutral-900 text-sm font-medium">Zadeva-124</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-neutral-200" />
              <div className="w-2 h-2 rounded-full bg-neutral-200" />
              <div className="w-2 h-2 rounded-full bg-neutral-200" />
            </div>
          </div>
          <div className="border-t border-neutral-100 -mx-5 mb-3" />
          <div className="flex items-center gap-6 text-xs mb-4 px-1">
            <span className="text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-2 -mb-[9px]">Dokumenti</span>
            <span className="text-neutral-400">Asistent</span>
            <span className="text-neutral-400">Pravna analiza</span>
          </div>
          <div className="space-y-1.5">
            {[
              { name: 'Tožba_vzorec_final.pdf' },
              { name: 'Pogodba_o_zaposlitvi_Novak.docx' },
              { name: 'Sklep_sodišča_priloga.pdf' },
              { name: 'Korespondenca_stranka.eml' },
              { name: 'ZDR-1_extract.pdf' },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 py-1.5 px-1">
                <div className="w-3 h-3 rounded-sm border border-neutral-300 flex-shrink-0" />
                <FileText size={13} className="text-rose-500 flex-shrink-0" />
                <span className="text-[12.5px] text-neutral-700 truncate">{f.name}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "02": // Legal research — search + zakonodaja + sodna praksa
      return (
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] p-5 -mb-12">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={14} />
            <div className="w-full bg-neutral-50 border border-neutral-200 rounded-lg py-2.5 pl-9 pr-3 text-[12.5px] text-neutral-700 font-medium">
              Odpoved pogodbe iz poslovnega razloga
            </div>
          </div>
          <div className="space-y-2.5">
            <p className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400">Zakonodaja</p>
            <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <div className="text-emerald-900 text-[12px] font-semibold mb-1">89. člen ZDR-1</div>
              <div className="text-[11px] text-neutral-600 leading-relaxed line-clamp-2">Razlogi za redno odpoved pogodbe o zaposlitvi delavcu s strani delodajalca: prenehanje potreb po opravljanju določenega dela...</div>
            </div>
            <p className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400 pt-1">Sodna praksa</p>
            <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100">
              <div className="text-blue-900 text-[12px] font-semibold mb-1">VDSS Pdp 123/2023</div>
              <div className="text-[11px] text-neutral-600 leading-relaxed line-clamp-2">Delodajalec mora pri odpovedi iz poslovnega razloga dokazati dejansko prenehanje potreb po delu...</div>
            </div>
          </div>
        </div>
      );

    case "03": // Q&A Assistant — chat bubbles with citation + input
      return (
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] p-5 -mb-12">
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="bg-neutral-900 text-white px-3.5 py-2 rounded-2xl rounded-tr-md text-[12px] max-w-[85%]">
                Kakšen je odpovedni rok za g. Novaka?
              </div>
            </div>
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Sparkles size={12} className="text-blue-600" />
              </div>
              <div className="bg-neutral-50 border border-neutral-100 px-3.5 py-2.5 rounded-2xl rounded-tl-md text-[12px] text-neutral-700 leading-relaxed max-w-[85%]">
                Glede na <span className="text-blue-600 font-medium underline decoration-blue-200 underline-offset-2">Pogodba_Novak.docx</span> znaša odpovedni rok <strong className="text-neutral-900">45 dni</strong> (94. člen ZDR-1).
              </div>
            </div>
            <div className="border-t border-neutral-100 -mx-5 mt-2" />
            <div className="relative pt-1">
              <div className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-2.5 pl-3.5 pr-10 text-[12px] text-neutral-400">Vprašaj Lexoro...</div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
                <ArrowRight size={11} />
              </div>
            </div>
          </div>
        </div>
      );

    case "04": // Drafting — document preview with toolbar + serif body
      return (
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] p-5 -mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-neutral-400" />
              <span className="text-[12px] text-neutral-700 font-medium">Odpoved_pogodbe.docx</span>
            </div>
            <div className="flex gap-1.5">
              <div className="text-[10px] font-medium text-neutral-500 px-2 py-0.5 rounded-md bg-neutral-50 border border-neutral-200">Kopiraj</div>
              <div className="text-[10px] font-medium text-white px-2 py-0.5 rounded-md bg-neutral-900">Izvozi</div>
            </div>
          </div>
          <div className="border-t border-neutral-100 -mx-5 mb-3" />
          <div className="font-serif text-neutral-800 text-[12.5px] leading-relaxed space-y-2.5">
            <p className="text-right font-sans text-[10px] text-neutral-400">Ljubljana, 15. maj 2026</p>
            <p className="font-bold text-center text-[12px] uppercase tracking-wide">Odpoved pogodbe o zaposlitvi</p>
            <p>Spoštovani g. Janez Novak,</p>
            <p>Na podlagi 1. alineje prvega odstavka 89. člena <span className="bg-yellow-100/70 px-0.5">Zakona o delovnih razmerjih</span> vam podajamo redno odpoved pogodbe o zaposlitvi, sklenjene dne 12. 4. 2018...</p>
          </div>
        </div>
      );

    case "05": // Personalized agents — list of saved AI agents
      return (
        <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] p-5 -mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-neutral-400" />
              <span className="text-[12px] text-neutral-700 font-medium">Moji agenti</span>
            </div>
            <div className="text-[10px] font-medium text-white px-2 py-0.5 rounded-md bg-neutral-900 flex items-center gap-1">
              <span>+</span> Nov agent
            </div>
          </div>
          <div className="border-t border-neutral-100 -mx-5 mb-3" />
          <div className="space-y-2">
            {[
              { name: 'Asistent za delovno pravo', desc: 'ZDR-1 + sodna praksa VDSS', dot: 'bg-emerald-400' },
              { name: 'Pregledovalec pogodb', desc: 'B2B pogodbe, NDA, najem', dot: 'bg-blue-400' },
              { name: 'GDPR svetovalec', desc: 'GDPR + ZVOP-2 + IP RS odločbe', dot: 'bg-purple-400' },
              { name: 'Odškodninski analizer', desc: 'OZ + sodna praksa VS', dot: 'bg-amber-400' },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl border border-neutral-100 hover:bg-neutral-50">
                <div className="w-7 h-7 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                  <Sparkles size={11} className="text-neutral-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-neutral-900 truncate">{a.name}</div>
                  <div className="text-[10.5px] text-neutral-500 truncate">{a.desc}</div>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

const ZacetekSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLang();

  const stepIcons = [
    <Shield size={18} className="text-blue-600" />,
    <FileText size={18} className="text-blue-600" />,
    <Zap size={18} className="text-blue-600" />,
  ];
  const featureStyles = [
    { icon: <Search size={18} />, color: 'bg-blue-50 text-blue-600' },
    { icon: <FileText size={18} />, color: 'bg-emerald-50 text-emerald-600' },
    { icon: <BookOpen size={18} />, color: 'bg-violet-50 text-violet-600' },
    { icon: <Scale size={18} />, color: 'bg-orange-50 text-orange-600' },
    { icon: <MessageSquare size={18} />, color: 'bg-pink-50 text-pink-600' },
    { icon: <Sparkles size={18} />, color: 'bg-amber-50 text-amber-600' },
  ];

  const steps = t.getStarted.steps.map((s, i) => ({ ...s, num: `0${i + 1}`, icon: stepIcons[i] }));
  const features = t.getStarted.features.map((f, i) => ({ ...f, ...featureStyles[i] }));
  const faqs = t.getStarted.faqs;

  return (
    <div id="začetek" className="scroll-mt-20">
      {/* Header */}
      <section className="pt-24 pb-16 bg-white text-center border-t border-neutral-100">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            {t.getStarted.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-950 tracking-tight leading-[1.1] mb-5">
            {t.getStarted.heading}
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            {t.getStarted.subtext}
          </p>
        </motion.div>
      </section>

      {/* Video */}
      <section id="video-začetek" className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/d6VyCQnH0wc?modestbranding=1&rel=0"
              title="Lexora predstavitev"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="koraki-začetek" className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm"
              >
                <div className="w-9 h-9 rounded-full border-2 border-blue-200 bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm mb-5">
                  {step.num}
                </div>
                <div className="mb-3">{step.icon}</div>
                <h3 className="font-semibold text-neutral-900 text-lg mb-2">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="funkcije-začetek" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl text-neutral-950 tracking-tight mb-4">{t.getStarted.featuresHeading}</h2>
            <p className="text-neutral-500 max-w-xl mx-auto">{t.getStarted.featuresSubtext}</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>{f.icon}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-začetek" className="py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-neutral-950 tracking-tight mb-4">{t.getStarted.faqHeading}</h2>
            <p className="text-neutral-500">{t.getStarted.faqSubtext}</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-neutral-900 hover:text-blue-600 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 ml-4 text-neutral-400 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-blue-500' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-950 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-6">{t.getStarted.ctaHeading}</h2>
          <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
            {t.getStarted.ctaSubtext}
          </p>
          <a
            href="https://app.lexora.si/"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-ink-900 font-semibold rounded-full hover:bg-neutral-100 transition-colors"
          >
            {t.getStarted.ctaButton} <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const { t } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Video Gallery State
  const videoMeta = [
    { key: 'civilno', id: '7DG85wHOuqs' },
    { key: 'gospodarsko', id: 'KLJb0YxLeR0' },
    { key: 'kazensko', id: 'cKIL157hnRs' },
    { key: 'nepremicninsko', id: 'RMiwvjggF70' },
    { key: 'delovno', id: 'LzPo5sKb_7c' },
  ];
  const videos = t.demo.videos.map((v, i) => ({ ...v, ...videoMeta[i] }));
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = videos[activeVideoIndex];
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const demoSectionRef = useRef<HTMLElement>(null);

  const heroRef = useRef<HTMLElement>(null);
  const heroMouseX = useMotionValue(0.5);
  const heroMouseY = useMotionValue(0.5);
  const springHeroX = useSpring(heroMouseX, { stiffness: 40, damping: 25 });
  const springHeroY = useSpring(heroMouseY, { stiffness: 40, damping: 25 });
  const mintBlobLeft = useTransform(springHeroX, [0, 1], ['-10%', '20%']);
  const mintBlobTop  = useTransform(springHeroY, [0, 1], ['85%', '115%']);
  const lavBlobLeft  = useTransform(springHeroX, [0, 1], ['80%', '110%']);
  const lavBlobTop   = useTransform(springHeroY, [0, 1], ['-10%', '20%']);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroMouseX.set((e.clientX - rect.left) / rect.width);
    heroMouseY.set((e.clientY - rect.top) / rect.height);
  };
  const handleHeroMouseLeave = () => {
    heroMouseX.set(0.5);
    heroMouseY.set(0.5);
  };

  const processStepsMeta = [
    { id: "01", icon: <FileText className="text-blue-400" />, color: "from-blue-600 to-cyan-500", checkColor: "text-blue-500", checkBg: "bg-blue-500/10" },
    { id: "02", icon: <Search className="text-emerald-400" />, color: "from-emerald-600 to-teal-500", checkColor: "text-emerald-500", checkBg: "bg-emerald-500/10" },
    { id: "03", icon: <Cpu className="text-purple-400" />, color: "from-purple-600 to-indigo-500", checkColor: "text-purple-500", checkBg: "bg-purple-500/10" },
    { id: "04", icon: <GitMerge className="text-orange-400" />, color: "from-orange-600 to-amber-500", checkColor: "text-orange-500", checkBg: "bg-orange-500/10" },
    { id: "05", icon: <Sparkles className="text-pink-400" />, color: "from-pink-600 to-rose-500", checkColor: "text-pink-500", checkBg: "bg-pink-500/10" },
  ];
  const processSteps = t.processSteps.map((s, i) => ({ ...s, ...processStepsMeta[i] }));

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
      setActiveVideoIndex(index);
    }
  };
  
  return (
    <div className="min-h-screen font-sans bg-cream text-ink-800 selection:bg-tan-500/20 overflow-x-clip">
      {/* HEADER — FLOATING PILL */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className="mx-auto max-w-5xl px-4 pt-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center justify-between h-14 px-2 rounded-full transition-all duration-500 bg-cream-50/70 backdrop-blur-xl border border-cream-300/60 shadow-[0_4px_24px_-4px_rgba(24,22,20,0.04)]"
          >
            {/* Logo */}
            <div className="flex-shrink-0 pl-4 pr-2">
              <a
                href="#"
                className="font-serif text-xl tracking-tight text-ink-900 hover:text-tan-500 transition-colors duration-200"
              >
                Lexora
              </a>
            </div>

          <nav className="hidden md:flex items-center justify-center gap-7 text-sm text-ink-600">

            {/* Predogled */}
            <MegaMenu title={t.nav.preview} href="#demo" align="left" width="560px">
              <div className="flex divide-x divide-neutral-100">
                <div className="flex-1 py-2">
                  <p className="px-5 pt-4 pb-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400">Funkcije</p>
                  {([
                    { id: 'step-01', icon: <FileText size={14} />, hoverColor: 'group-hover:text-blue-500', label: t.nav.previewMenu.docReview, desc: t.nav.previewMenu.docReviewDesc },
                    { id: 'step-02', icon: <Scale size={14} />, hoverColor: 'group-hover:text-indigo-500', label: t.nav.previewMenu.lawResearch, desc: t.nav.previewMenu.lawResearchDesc },
                    { id: 'step-03', icon: <Search size={14} />, hoverColor: 'group-hover:text-violet-500', label: t.nav.previewMenu.caseSearch, desc: t.nav.previewMenu.caseSearchDesc },
                    { id: 'step-04', icon: <Sparkles size={14} />, hoverColor: 'group-hover:text-emerald-500', label: t.nav.previewMenu.drafting, desc: t.nav.previewMenu.draftingDesc },
                    { id: 'step-05', icon: <Cpu size={14} />, hoverColor: 'group-hover:text-orange-500', label: t.nav.previewMenu.agents, desc: t.nav.previewMenu.agentsDesc },
                  ] as const).map(item => (
                    <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }); }} className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors cursor-pointer">
                      <span className={`shrink-0 mt-0.5 text-neutral-400 ${item.hoverColor} transition-colors`}>{item.icon}</span>
                      <div>
                        <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{item.label}</div>
                        <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                  <div className="pb-2" />
                </div>
                <div className="w-52 p-6 bg-neutral-50/80 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400 mb-4">Demo</p>
                    <div className="text-sm font-medium text-neutral-800 leading-snug mb-2">Oglejte si platformo v živo</div>
                    <p className="text-[11.5px] text-neutral-500 leading-relaxed">Pregledovanje dokumentov, iskanje sodne prakse, priprava osnutkov.</p>
                  </div>
                  <a href="#demo" onClick={(e) => { e.preventDefault(); document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 group/link transition-colors mt-6">
                    Odpri demo <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </MegaMenu>

            {/* Kako začeti */}
            <MegaMenu title={t.nav.getStarted} href="/začetek" align="center" width="460px">
              <div className="flex divide-x divide-neutral-100">
                <div className="flex-1 py-2">
                  <p className="px-5 pt-4 pb-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400">Začetek</p>
                  <Link to="/začetek" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-blue-500 transition-colors"><BookOpen size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.getStartedMenu.guide}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.getStartedMenu.guideDesc}</div>
                    </div>
                  </Link>
                  <Link to="/začetek#video-začetek" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-violet-500 transition-colors"><Zap size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.getStartedMenu.videos}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.getStartedMenu.videosDesc}</div>
                    </div>
                  </Link>
                  <Link to="/začetek#faq-začetek" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-emerald-500 transition-colors"><MessageSquare size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.getStartedMenu.faq}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.getStartedMenu.faqDesc}</div>
                    </div>
                  </Link>
                  <div className="pb-2" />
                </div>
                <div className="w-48 bg-neutral-950 flex flex-col justify-between p-6">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-600 mb-4">Brezplačno</p>
                    <div className="text-sm font-medium text-white leading-snug mb-2">Začnite v manj kot 2 minutah</div>
                    <p className="text-[11.5px] text-neutral-500 leading-relaxed">Brez kreditne kartice.</p>
                  </div>
                  <a href="https://app.lexora.si/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300 group/link transition-colors mt-6">
                    Preizkusite <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </MegaMenu>

            {/* Varnost */}
            <MegaMenu title={t.nav.security} href="/varnost" align="right" width="460px">
              <div className="flex divide-x divide-neutral-100">
                <div className="flex-1 py-2">
                  <p className="px-5 pt-4 pb-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400">Varnost</p>
                  <Link to="/varnost" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-emerald-500 transition-colors"><Shield size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.securityMenu.dataSecurity}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.securityMenu.dataSecurityDesc}</div>
                    </div>
                  </Link>
                  <Link to="/varnost#skladnost" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-blue-500 transition-colors"><CheckCircle size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.securityMenu.compliance}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.securityMenu.complianceDesc}</div>
                    </div>
                  </Link>
                  <Link to="/varnost" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-violet-500 transition-colors"><Lock size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.securityMenu.privacy}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.securityMenu.privacyDesc}</div>
                    </div>
                  </Link>
                  <div className="pb-2" />
                </div>
                <div className="w-44 p-6 bg-neutral-50/80 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400 mb-4">Skladno z</p>
                    <div className="flex flex-col gap-3">
                      {(['GDPR', 'ISO 27001', 'EU AI Act'] as const).map(cert => (
                        <div key={cert} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span className="text-[12px] font-medium text-neutral-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/varnost" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-800 group/link transition-colors mt-6">
                    Več o varnosti <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </MegaMenu>

            {/* O nas */}
            <MegaMenu title={t.nav.about} href="/o-nas" align="right" width="460px">
              <div className="flex divide-x divide-neutral-100">
                <div className="flex-1 py-2">
                  <p className="px-5 pt-4 pb-2 text-[10px] font-semibold tracking-[0.12em] uppercase text-neutral-400">O podjetju</p>
                  <Link to="/o-nas" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-blue-500 transition-colors"><Globe size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.aboutMenu.vision}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.aboutMenu.visionDesc}</div>
                    </div>
                  </Link>
                  <Link to="/o-nas" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-indigo-500 transition-colors"><Briefcase size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.aboutMenu.team}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.aboutMenu.teamDesc}</div>
                    </div>
                  </Link>
                  <Link to="/o-nas" className="group flex items-start gap-3 px-5 py-2.5 hover:bg-neutral-50 transition-colors">
                    <span className="shrink-0 mt-0.5 text-neutral-400 group-hover:text-emerald-500 transition-colors"><MessageSquare size={14} /></span>
                    <div>
                      <div className="text-[13px] font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">{t.nav.aboutMenu.contact}</div>
                      <div className="text-[11.5px] text-neutral-400 mt-0.5 leading-relaxed">{t.nav.aboutMenu.contactDesc}</div>
                    </div>
                  </Link>
                  <div className="pb-2" />
                </div>
                <div className="w-44 p-6 bg-neutral-50/80 flex flex-col justify-between">
                  <div>
                    <div className="font-serif text-2xl text-neutral-900 mb-3 leading-none tracking-tight">Lexora</div>
                    <p className="text-[11.5px] text-neutral-500 leading-relaxed">AI za pravnike v slovenskem pravnem prostoru.</p>
                  </div>
                  <Link to="/o-nas" className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-800 group/link transition-colors mt-6">
                    Spoznajte nas <ArrowRight size={11} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </MegaMenu>

          </nav>

            {/* CTA + lang toggle + mobile toggle */}
            <div className="flex items-center gap-2 pr-2">
              <LangToggle className="hidden md:flex" />
              <a
                href="https://app.lexora.si/"
                className="hidden md:inline-flex items-center h-9 px-5 rounded-full text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm transition-all duration-200"
              >
                {t.nav.login}
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu — rounded card below pill */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto mx-4 mt-2 rounded-2xl overflow-hidden border border-neutral-200/80 bg-white/95 backdrop-blur-xl shadow-xl md:hidden"
            >
              <nav className="flex flex-col px-2 py-2 text-sm text-neutral-700">
                <a href="#demo" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-neutral-100 transition-colors">{t.nav.preview}</a>
                <Link to="/začetek" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-neutral-100 transition-colors">{t.nav.getStarted}</Link>
                <Link to="/varnost" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-neutral-100 transition-colors">{t.nav.security}</Link>
                <Link to="/o-nas" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 rounded-xl hover:bg-neutral-100 transition-colors">{t.nav.about}</Link>
                <div className="px-2 pb-2 pt-1 border-t border-neutral-100 mt-1 flex flex-col gap-2">
                  <div className="flex justify-center pt-1"><LangToggle /></div>
                  <a href="https://app.lexora.si/" className="block w-full text-center py-3 rounded-xl bg-neutral-900 text-white font-semibold text-sm">{t.nav.tryLexora}</a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-32 pb-32"
      >
        {/* Atmosphere — composed in two passes: a soft watercolor wash for organic depth,
            then a deliberate sage anchor on the right and a warm diagonal counterpoint. */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{
            background:
              'conic-gradient(from 220deg at 78% 50%, rgba(161,198,153,0.32) 0deg, rgba(214,178,140,0.18) 80deg, rgba(225,213,182,0.20) 170deg, rgba(254,254,252,0) 240deg, rgba(254,254,252,0) 320deg, rgba(161,198,153,0.32) 360deg)',
            filter: 'blur(90px)',
          }}
        />
        {/* Sage anchor — adds a clear, deliberate focal point on the right */}
        <div
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            top: '40%',
            right: '-8%',
            width: '50%',
            height: '70%',
            transform: 'translateY(-50%)',
            background: 'radial-gradient(ellipse, rgba(125,166,111,0.28) 0%, rgba(125,166,111,0.05) 50%, transparent 75%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Warm diagonal — counterpoint warmth in the upper-left, balances the sage */}
        <div
          aria-hidden
          className="absolute pointer-events-none rounded-full"
          style={{
            top: '-10%',
            left: '-5%',
            width: '45%',
            height: '60%',
            background: 'radial-gradient(ellipse, rgba(214,178,140,0.22) 0%, rgba(214,178,140,0.04) 55%, transparent 80%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Paper grain — fine tactile texture, multiplies into the wash for sophistication */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.45] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.094 0 0 0 0 0.086 0 0 0 0 0.078 0 0 0 0.035 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* Bottom fade — gentle bridge into the next section */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #fefefc 90%)' }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 w-full">
          <div className="max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-500 mb-7"
            >
              {t.hero.badge}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-[64px] text-ink-900 leading-[1.05] tracking-[-0.02em]"
            >
              {t.hero.headline1}{' '}
              <span className="italic font-normal text-ink-500">{t.hero.headline2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg text-ink-500 mt-6 leading-relaxed max-w-xl"
            >
              {t.hero.subtext1}{' '}
              <span className="text-ink-900 font-semibold">{t.hero.subtextBold}</span>
              {t.hero.subtext2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-3 mt-10"
            >
              <a
                href="https://app.lexora.si/"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3 text-[14px] font-medium text-cream bg-ink-900 rounded-full hover:bg-ink-800 transition-colors"
              >
                {t.hero.cta1}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://calendly.com/jan-lexora/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 text-[14px] font-medium text-ink-700 hover:text-ink-900 transition-colors"
              >
                {t.hero.cta2}
              </a>
            </motion.div>

          </div>
        </div>

      </section>

      {/* HOW LEXORA HELPS SECTION */}
      <section id="how-it-helps" className="relative pt-24 pb-32">
        {/* Sage echo — continues hero blob color into this section */}
        <div className="absolute top-0 left-0 w-1/2 h-48 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 10% 0%, rgba(161,198,153,0.14) 0%, transparent 60%)' }} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-3xl"
          >
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-500 mb-7">5 × AI</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] text-ink-900 leading-[1.05] tracking-[-0.02em]">
              {t.howItHelps.heading}
            </h2>
            <p className="text-lg text-neutral-500 mt-6 leading-relaxed">
              {t.howItHelps.subtext} <span className="text-ink-900 font-semibold">{t.howItHelps.subtextBold}</span>.
            </p>
          </motion.div>

          {/* WORKSPACE PREVIEW */}
          <div className="relative hidden lg:block w-full mt-20 mb-16">
            {/* Soft sage glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(161,198,153,0.18) 0%, transparent 65%)', filter: 'blur(80px)' }}></div>

            <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden bg-white border border-cream-300 shadow-[0_30px_80px_-30px_rgba(24,22,20,0.18),0_8px_24px_-12px_rgba(24,22,20,0.08)]">
              {/* Window Chrome */}
              <div className="h-9 bg-cream-100 border-b border-cream-300 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cream-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-cream-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-cream-400"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-0.5 rounded-md bg-cream-200 text-[10px] font-mono text-ink-500 tracking-wider">app.lexora.si</div>
                </div>
              </div>

              {/* App Content */}
              <div className="flex h-[520px]">
                {/* Sidebar */}
                <div className="w-56 bg-[#f8f8f6] border-r border-cream-300 flex flex-col shrink-0">
                  {/* Logo row */}
                  <div className="h-12 flex items-center justify-between px-4 border-b border-cream-200">
                    <span className="font-serif text-[15px] text-ink-900 tracking-tight">Lexora</span>
                    <div className="w-6 h-6 flex items-center justify-center text-ink-400 cursor-pointer">
                      <PanelLeft size={14} />
                    </div>
                  </div>

                  {/* Case selector */}
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-cream-300 bg-white cursor-pointer">
                      <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-white">D</span>
                      </div>
                      <span className="flex-1 text-[10.5px] font-semibold text-ink-800 tracking-wide truncate">DELOVNO PRAVO</span>
                      <ChevronDown size={11} className="text-ink-400 shrink-0" />
                    </div>
                  </div>

                  {/* Nav items */}
                  <div className="px-2 py-1 space-y-0.5">
                    {[
                      { icon: <Folder size={12} />, label: 'Dokumenti' },
                      { icon: <FileText size={12} />, label: 'Osnutki' },
                      { icon: <History size={12} />, label: 'Zgodovina' },
                      { icon: <LayoutDashboard size={12} />, label: 'Pregled' },
                      { icon: <Workflow size={12} />, label: 'Delovni tokovi' },
                      { icon: <Bot size={12} />, label: 'Agent tokovi' },
                      { icon: <BookOpen size={12} />, label: 'Pravilniki' },
                      { icon: <Settings size={12} />, label: 'Nastavitve zadeve' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] text-ink-600 cursor-pointer hover:bg-cream-200">
                        <span className="text-ink-400">{item.icon}</span>
                        {item.label}
                      </div>
                    ))}
                  </div>

                  {/* New chat button */}
                  <div className="px-3 pt-2">
                    <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-cream-300 bg-white text-[11px] text-ink-700 cursor-pointer font-medium">
                      <Plus size={11} className="text-ink-500" />
                      Nov klepet
                    </div>
                  </div>

                  {/* Chat history */}
                  <div className="px-3 pt-3 flex-1 overflow-hidden">
                    <div className="text-[9px] font-mono text-ink-400 uppercase tracking-widest mb-1.5 px-1">Klepeti</div>
                    <div className="space-y-0.5">
                      {['Analiza dokumentov v zadevi', 'Dokazni zemljevid primera', 'Povzetek spisa in procesni roki'].map((title, i) => (
                        <div key={i} className="px-2.5 py-1.5 rounded-md text-[11px] text-ink-600 truncate cursor-pointer hover:bg-cream-200">{title}</div>
                      ))}
                    </div>
                  </div>

                  {/* Lexora Pro upgrade card */}
                  <div className="px-3 pb-2">
                    <div className="rounded-xl p-3" style={{ background: 'linear-gradient(135deg, #3b4fd8 0%, #5b6ef5 100%)' }}>
                      <div className="text-[11px] font-semibold text-white mb-0.5">Lexora Pro</div>
                      <div className="text-[10px] text-indigo-200 mb-2">Odkleni vse funkcije.</div>
                      <div className="bg-white rounded-lg px-3 py-1 text-center text-[10.5px] font-semibold text-indigo-700 cursor-pointer">Aktiviraj</div>
                    </div>
                  </div>

                  {/* User row */}
                  <div className="border-t border-cream-200 px-3 py-2.5 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 shrink-0"></div>
                    <span className="flex-1 text-[10.5px] text-ink-600 truncate">dev@lexora.si</span>
                    <ChevronUp size={11} className="text-ink-400 shrink-0" />
                  </div>
                </div>

                {/* Main area — welcome / new chat state */}
                <div className="flex-1 flex flex-col bg-white relative overflow-hidden">
                  {/* Welcome content */}
                  <div className="flex-1 flex flex-col items-center justify-center px-8 pb-28">
                    <h2 className="font-serif text-[32px] text-ink-900 tracking-tight mb-1.5">Pozdravljeni.</h2>
                    <p className="text-[12px] text-ink-400 mb-8">Kako vam lahko pomagam danes?</p>

                    {/* Quick action cards */}
                    <div className="grid grid-cols-4 gap-3 w-full max-w-2xl">
                      {[
                        { icon: <FileText size={15} className="text-indigo-500" />, bg: 'bg-indigo-50', title: 'Povzetek spisa', sub: 's procesnimi roki' },
                        { icon: <Sparkles size={15} className="text-purple-500" />, bg: 'bg-purple-50', title: 'Osnutek vloge', sub: 'tožba, odgovor, pritožba' },
                        { icon: <Scale size={15} className="text-blue-500" />, bg: 'bg-blue-50', title: 'Pravna podlaga', sub: 's sodno prakso' },
                        { icon: <GitMerge size={15} className="text-emerald-600" />, bg: 'bg-emerald-50', title: 'Dokazni zemljevid', sub: 'trditve in dokazi' },
                      ].map((card, i) => (
                        <div key={i} className="flex flex-col gap-2.5 p-3 rounded-xl border border-cream-300 bg-white cursor-pointer hover:border-cream-400 hover:shadow-sm transition-all">
                          <div className={`w-8 h-8 rounded-lg ${card.bg} flex items-center justify-center`}>{card.icon}</div>
                          <div>
                            <div className="text-[11px] font-semibold text-ink-800 leading-tight">{card.title}</div>
                            <div className="text-[10px] text-ink-400 mt-0.5 leading-tight">{card.sub}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                    <div className="bg-white border border-cream-300 rounded-2xl shadow-[0_4px_16px_-6px_rgba(24,22,20,0.08)] overflow-hidden">
                      <div className="px-4 py-3">
                        <span className="text-[12px] text-ink-400">Pošljite sporočilo...</span>
                      </div>
                      <div className="border-t border-cream-200 px-3 py-2 flex items-center gap-1">
                        <div className="p-1.5 rounded-md text-ink-400 cursor-pointer"><Paperclip size={13} /></div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-md text-ink-500 text-[10.5px] cursor-pointer hover:bg-cream-100">
                          <Zap size={11} className="text-ink-400" />
                          <span>Hitri odgovori</span>
                          <ChevronDown size={10} className="text-ink-400" />
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-md text-ink-500 text-[10.5px] cursor-pointer hover:bg-cream-100">
                          <GitMerge size={11} className="text-ink-400" />
                          <span>Workflows</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-md text-ink-500 text-[10.5px] cursor-pointer hover:bg-cream-100">
                          <Star size={11} className="text-ink-400" />
                          <span>Izboljšaj</span>
                        </div>
                        <div className="ml-auto flex items-center gap-1.5">
                          <div className="p-1.5 rounded-md text-ink-400 cursor-pointer"><Mic size={13} /></div>
                          <div className="w-7 h-7 rounded-full bg-cream-300 flex items-center justify-center cursor-pointer">
                            <ArrowUp size={12} className="text-ink-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] font-mono text-ink-400 mt-8 tracking-wide">
              * Vsi podatki, uporabljeni za prikaz delovanja aplikacije, so izmišljeni.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-8 gap-y-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`flex flex-col${i === 4 ? ' lg:col-span-2 lg:max-w-xl lg:mx-auto' : ''}`}
              >
                <div className="bg-cream-200 rounded-3xl p-8 lg:p-10 aspect-[5/4] flex items-end overflow-hidden">
                  <StepAnimation step={step} />
                </div>
                <div className="mt-8">
                  <h3 className="font-serif text-2xl md:text-[28px] text-ink-900 mb-3 leading-tight tracking-[-0.01em]">{step.title}</h3>
                  <p className="text-[15px] text-ink-500 leading-relaxed max-w-md">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-32 relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-3xl"
          >
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-500 mb-7">{t.comparison.badge}</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[60px] text-ink-900 leading-[1.05] tracking-[-0.02em] mb-8">{t.comparison.heading}</h2>
            <div className="text-lg text-ink-500 leading-relaxed">
              <p>{t.comparison.p1} <span className="text-ink-900 font-semibold">{t.comparison.p1Bold}</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-2xl border border-cream-300 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="px-7 py-5 font-mono text-[9px] text-ink-400 uppercase tracking-[0.25em] w-1/2 bg-cream-100 border-b border-cream-300"></th>
                      <th className="px-7 py-5 text-center w-1/4 bg-cream-200 border-b border-cream-300">
                        <span className="font-serif text-base font-normal text-ink-900">Lexora</span>
                      </th>
                      <th className="px-7 py-5 text-center font-mono text-[9px] text-ink-400 uppercase tracking-[0.25em] w-1/4 bg-cream-100 border-b border-cream-300">{t.comparison.tableHeader2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.comparison.features.map((feature, i) => {
                      const lexora = true;
                      const general = i === t.comparison.features.length - 1;
                      return { feature, lexora, general };
                    }).map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? '' : ''}>
                        <td className="px-7 py-4 text-sm text-ink-600 bg-cream-50 border-b border-cream-300/60">{row.feature}</td>
                        <td className="px-7 py-4 text-center bg-cream-200/60 border-b border-cream-300/60">
                          {row.lexora ? (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ink-900/8">
                              <Check size={12} strokeWidth={2.5} className="text-ink-800" />
                            </span>
                          ) : (
                            <Minus size={14} className="mx-auto text-ink-300" />
                          )}
                        </td>
                        <td className="px-7 py-4 text-center bg-cream-50 border-b border-cream-300/60">
                          {row.general ? (
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ink-900/8">
                              <Check size={12} strokeWidth={2.5} className="text-ink-800" />
                            </span>
                          ) : (
                            <Minus size={14} className="mx-auto text-ink-300" />
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
      <section id="security" className="py-32 relative">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-500 mb-7">{t.security.badge}</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-[60px] text-ink-900 leading-[1.05] tracking-[-0.02em] mb-8">{t.security.heading}</h2>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                {t.security.subtext}
              </p>

              <ul className="space-y-7">
                {t.security.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} className="text-neutral-950" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-neutral-950 mb-1.5">{item.title}</h4>
                      <p className="text-[15px] text-ink-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:sticky lg:top-32"
            >
              <div className="bg-cream-200 rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-cream-50 border border-cream-300 flex items-center justify-center">
                    <Shield size={18} className="text-ink-900" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-500">GDPR / EU</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-cream-50 border border-cream-300 rounded-2xl p-5 flex items-center justify-between">
                    <span className="text-sm text-ink-500">{t.security.dataCenter}</span>
                    <span className="text-sm font-medium text-ink-900 flex items-center gap-2">
                      <Globe size={14} className="text-ink-400" />
                      {t.security.dataCenterValue}
                    </span>
                  </div>
                  <div className="bg-cream-50 border border-cream-300 rounded-2xl p-5 flex items-center justify-between">
                    <span className="text-sm text-ink-500">{t.security.dataRetention}</span>
                    <span className="text-sm font-medium text-ink-900 flex items-center gap-2">
                      <Database size={14} className="text-ink-400" />
                      {t.security.dataRetentionValue}
                    </span>
                  </div>
                  <div className="bg-cream-50 border border-cream-300 rounded-2xl p-5 flex items-center justify-between">
                    <span className="text-sm text-ink-500">{t.security.dataAccess}</span>
                    <span className="text-sm font-medium text-ink-900 flex items-center gap-2">
                      <Lock size={14} className="text-ink-400" />
                      {t.security.dataAccessValue}
                    </span>
                  </div>
                </div>

                <Link
                  to="/varnost"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink-900 text-cream rounded-full text-sm font-semibold hover:bg-ink-800 transition-colors"
                >
                  {t.security.learnMore}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEMO VIDEO SLIDESHOW */}
      <section id="demo" ref={demoSectionRef} className="pt-32 pb-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 mb-12">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-500 mb-7">{t.demo.label ?? 'Predogled'}</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[60px] text-ink-900 leading-[1.05] tracking-[-0.02em]">{t.demo.heading}</h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">{t.demo.subtext}</p>
          </div>

          {/* Navigation Tabs (Above Slideshow) */}
          <div className="flex flex-wrap gap-2">
            {videos.map((video, index) => (
              <button
                key={video.key}
                onClick={() => scrollToVideo(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 border ${
                  activeVideo.key === video.key
                    ? 'bg-ink-900 border-ink-900 text-cream'
                    : 'bg-cream-100 border-cream-300 text-ink-600 hover:text-ink-900 hover:border-cream-400'
                }`}
              >
                {video.title}
              </button>
            ))}
          </div>
        </div>

        {/* Full Width Horizontal Slideshow Container */}
        <div className="relative group w-full">
          <div
            ref={scrollContainerRef}
            className="relative flex overflow-x-hidden snap-x snap-mandatory scroll-smooth py-20 px-[10%] md:px-[20%]"
          >
            {videos.map((video) => (
              <div
                key={video.key}
                className="w-[90%] md:w-[80%] shrink-0 snap-center px-1 md:px-2"
              >
                <div className={`w-full aspect-video rounded-3xl overflow-hidden border transition-all duration-700 ease-out shadow-[0_40px_100px_rgba(0,0,0,0.25)] ${
                  activeVideo.key === video.key
                    ? 'border-neutral-300 scale-[1.15] md:scale-125 z-20 opacity-100'
                    : 'border-neutral-200 scale-75 z-0 opacity-15 grayscale blur-[3px]'
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
            <h3 className="text-3xl font-serif text-neutral-950 mb-2">{activeVideo.title}</h3>
            <p className="text-sm text-neutral-600 font-mono uppercase tracking-widest">{t.demo.videoNote} {activeVideo.duration}</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-ink-900 py-32 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-cream/40 mb-7">{t.cta.label ?? 'Začnite danes'}</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[64px] text-cream leading-[1.05] tracking-[-0.02em] mb-8">{t.cta.heading}</h2>
            <p className="text-lg text-cream/60 mb-10 leading-relaxed max-w-xl">
              {t.cta.subtext}
            </p>

            <a
              href="https://calendly.com/jan-lexora/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-cream text-ink-900 text-[15px] font-semibold hover:bg-cream-200 transition-colors"
            >
              {t.cta.button}
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink-900 text-cream/60 border-t border-cream/5 pt-16 pb-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <p className="font-serif text-2xl text-cream mb-4">Lexora</p>
              <p className="text-sm text-cream/50 max-w-xs leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-cream/50 mb-5">{t.footer.product}</h3>
              <ul className="space-y-3 text-sm">
                <li><a className="hover:text-cream transition-colors" href="#demo">{t.footer.preview}</a></li>
                <li><Link className="hover:text-cream transition-colors" to="/začetek">{t.footer.getStarted}</Link></li>
                <li><Link className="hover:text-cream transition-colors" to="/varnost">{t.footer.security}</Link></li>
                <li><Link className="hover:text-cream transition-colors" to="/o-nas">{t.footer.about}</Link></li>
                <li><a className="hover:text-cream transition-colors" href="https://blog.lexora.si/" target="_blank" rel="noopener noreferrer">{t.footer.blog}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-cream/50 mb-5">{t.footer.legal}</h3>
              <ul className="space-y-3 text-sm">
                <li><Link className="hover:text-cream transition-colors" to="/pogoji-uporabe">{t.footer.terms}</Link></li>
                <li><Link className="hover:text-cream transition-colors" to="/politika-zasebnosti">{t.footer.privacy}</Link></li>
                <li><Link className="hover:text-cream transition-colors" to="/politika-piskotkov">{t.footer.cookies}</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cream/10 gap-6">
            <p className="text-xs text-cream/40">© {new Date().getFullYear()} Lexora. {t.footer.copyright}</p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/lexora-si/" className="text-cream/40 hover:text-cream transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/LexoraAI" className="text-cream/40 hover:text-cream transition-colors" aria-label="X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@LexoraAI-e3o9z" className="text-cream/40 hover:text-cream transition-colors" aria-label="YouTube">
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
    <LanguageProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/začetek" element={<KakoZaceti />} />
        <Route path="/pogoji-uporabe" element={<PogojiUporabe />} />
        <Route path="/politika-piskotkov" element={<PolitikaPiskotkov />} />
        <Route path="/politika-zasebnosti" element={<PolitikaZasebnosti />} />
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/varnost" element={<Varnost />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;
