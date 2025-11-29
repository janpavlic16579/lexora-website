
import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Search, FileText, Globe, MessageSquare, GitMerge, ChevronRight, ChevronLeft, Database, Star } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Slideshow data
  const slides = [
    {
      id: 1,
      image: "https://placehold.co/1200x800/101010/333?text=Lexora+Dashboard",
      title: "Pregledna nadzorna plošča",
      desc: "Vsi vaši primeri in dokumenti na enem mestu."
    },
    {
      id: 2,
      image: "https://placehold.co/1200x800/101010/333?text=AI+Chat+Interface",
      title: "Pametni klepet",
      desc: "Postavljajte vprašanja in prejmite takojšnje odgovore."
    },
    {
      id: 3,
      image: "https://placehold.co/1200x800/101010/333?text=Legal+Analysis",
      title: "Analiza dokumentov",
      desc: "Samodejno zaznavanje tveganj v pogodbah."
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Form Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const scriptURL = "https://script.google.com/macros/s/AKfycbx-4GD5HYa3PflZOaqRPPM4gRQ86qiAX9C_camdJTurk0MaDespX14CxVLlXrinKUPN/exec";
    // Prepare form data for Google Apps Script (expects x-www-form-urlencoded)
    const body = new URLSearchParams(formData as any);

    try {
      const res = await fetch(scriptURL, { method: "POST", body });
      
      // Google Apps Script often returns 'opaque' type responses or CORS issues, 
      // but the data is usually received. We treat opaque/ok as success.
      if (res.type === 'opaque' || res.ok) {
         setFormStatus('success');
         setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
         setFormStatus('error');
      }
    } catch (error) {
       // Fallback for strict CORS blocks - try no-cors mode which sends data but cant read response
       try {
          await fetch(scriptURL, { method: "POST", body, mode: "no-cors" });
          setFormStatus('success');
          setFormData({ name: '', email: '', phone: '', message: '' });
       } catch (innerError) {
          console.error(innerError);
          setFormStatus('error');
       }
    }
  };

  return (
    <div className="min-h-screen font-sans bg-neutral-950 text-white selection:bg-blue-500/30">
      
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 h-16 flex items-center justify-between">
          <a className="font-serif text-2xl tracking-tight text-white hover:text-blue-100 transition" href="#">Lexora</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a className="hover:text-white transition-colors" href="#showcase">Funkcije</a>
            <a className="hover:text-white transition-colors" href="#demo">Predogled</a>
            <a className="hover:text-white transition-colors" href="#contact">Povpraševanje</a>
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center h-9 px-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm font-medium text-blue-100 hover:text-white">
            Kontakt
          </a>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded hover:bg-white/5" 
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/10 bg-neutral-950/90 backdrop-blur md:hidden">
            <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4 text-base text-neutral-200">
              <a href="#showcase" onClick={() => setIsMenuOpen(false)}>Funkcije</a>
              <a href="#demo" onClick={() => setIsMenuOpen(false)}>Predogled</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>Povpraševanje</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION - UNCHANGED / RESTORED */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)]"></div>
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-800/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: CONTENT */}
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="font-sans text-xs font-semibold text-blue-300 tracking-wide uppercase">AI workspace za pravnike</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight mb-6 text-white">
              Vaša nova <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200">pravna supermoč.</span>
            </h1>

            <p className="font-sans text-lg text-neutral-400 max-w-xl mb-8 leading-relaxed">
              Vstopi v novo generacijo pravnikov in <span className="text-blue-300 font-medium">revolucioniraj svojo prakso</span> z umetno inteligenco.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#contact" className="btn-demo group relative overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.2)] text-white px-6 py-3.5 rounded-lg font-semibold transition hover:-translate-y-0.5">
                <span className="relative z-10">Zanima me!</span>
              </a>
              <a href="#demo" className="px-6 py-3.5 rounded-lg text-sm font-medium text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                Oglej si Platformo
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
              <span>Narejena za slovenske pravnike 🇸🇮</span>
              <div className="flex -space-x-3">
                   <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400">P</div>
                   <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400">J</div>
                   <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400">L</div>
              </div>
            </div>
          </div>

          {/* RIGHT: VISUAL UI INTERFACE (3D CARD) */}
          <div className="relative hidden lg:block perspective-1000 h-[500px] w-full">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-[90px] opacity-20 animate-pulse"></div>

             <div className="absolute inset-0 flex items-center justify-center tilt-card">
                {/* Background Layer */}
                <div className="absolute w-[420px] h-[520px] bg-neutral-900/60 backdrop-blur-sm border border-white/5 rounded-2xl transform translate-z-[-50px] translate-x-12 translate-y-8 flex flex-col p-6 overflow-hidden">
                   <div className="flex items-center gap-2 mb-4 opacity-50">
                     <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
                     <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
                     <div className="w-3 h-3 rounded-full bg-neutral-600"></div>
                   </div>
                   <div className="space-y-2 font-mono text-xs text-blue-500/40">
                     <p>{'>'} Loading LawData_v4...</p>
                     <p>{'>'} Analyzing context...</p>
                     <p>{'>'} Vectorizing input...</p>
                     <p>{'>'} Found 142 matches.</p>
                     <div className="grid grid-cols-4 gap-2 mt-4 opacity-20">
                        <div className="h-12 bg-blue-500/20 rounded animate-pulse"></div>
                        <div className="h-12 bg-blue-500/20 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="h-12 bg-blue-500/20 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        <div className="h-12 bg-blue-500/20 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
                     </div>
                   </div>
                </div>

                {/* Main Interface */}
                <div className="relative w-[400px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 glow-border animate-float-slow">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                     <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-[10px] font-bold text-white">L</div>
                       <span className="text-sm font-medium text-neutral-200">Nov Primer</span>
                     </div>
                     <div className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] border border-blue-500/20">Online</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex gap-3">
                       <div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-blue-400"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="currentColor"/></svg>
                       </div>
                       <div className="bg-neutral-800/80 p-3 rounded-2xl rounded-tl-none border border-white/5 text-xs text-neutral-300 leading-relaxed shadow-sm">
                          Analiziral sem pogodbo. <span className="text-blue-400 font-medium">Člen 4.2</span> ni skladen z ZOR zaradi nedavne sodbe VS RS. Predlagam spremembo.
                       </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                       <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-xs text-white leading-relaxed shadow-lg max-w-[80%]">
                          Pripravi nov osnutek člena in navedi vir.
                       </div>
                    </div>
                    
                    <div className="flex gap-2 items-center text-[10px] text-neutral-500 ml-11">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                      <span>Generiram odgovor...</span>
                    </div>
                  </div>

                  <div className="relative">
                     <div className="h-10 w-full bg-neutral-950 rounded-lg border border-white/10 flex items-center px-3">
                       <div className="w-0.5 h-4 bg-blue-500 animate-pulse mr-2"></div>
                       <span className="text-xs text-neutral-500">Vprašaj Lexoro...</span>
                     </div>
                     <div className="absolute right-2 top-2 p-1.5 bg-blue-600 rounded-md shadow-lg shadow-blue-600/20 cursor-pointer hover:bg-blue-500 transition">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </div>
                  </div>
                </div>

                {/* Floating Widgets */}
                <div className="absolute -right-6 top-20 bg-neutral-800/90 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl animate-float-medium">
                   <div className="text-[10px] text-neutral-400 uppercase font-semibold mb-1">Relevantnost</div>
                   <div className="flex items-end gap-1 h-8">
                     <div className="w-1.5 bg-blue-600 h-[40%] rounded-sm"></div>
                     <div className="w-1.5 bg-blue-500 h-[70%] rounded-sm"></div>
                     <div className="w-1.5 bg-blue-400 h-[100%] rounded-sm"></div>
                     <div className="w-1.5 bg-white h-[60%] rounded-sm"></div>
                   </div>
                </div>
                
                <div className="absolute -left-4 bottom-20 bg-neutral-800/90 backdrop-blur border border-white/10 px-3 py-2 rounded-lg shadow-xl animate-float-fast flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-[10px] font-mono text-neutral-300">VS RS II Ips 12/2023</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (Enhanced Animations & KMALU badges) */}
      <section id="showcase" className="py-20 md:py-24 bg-neutral-950 text-white border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-14">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white">Funkcionalnosti</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl">
              Vse, kar pravnik potrebuje za hitro raziskavo in odgovore — na enem mestu.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* 1. DOKUMENT QA (Swapped to 1st) */}
            <article className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 ring-1 ring-white/10 hover:ring-blue-500/40 transition duration-500">
              <div className="absolute -inset-40 bg-gradient-to-tr from-blue-500/10 via-teal-400/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              
              <div className="p-8 pt-12">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <MessageSquare className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold pr-24 leading-tight">Dokument QA</h3>
                <p className="text-neutral-400 mt-2 leading-relaxed">
                  Pogovarjaj se s svojimi dokumenti in pridobi takojšnje odgovore.
                </p>

                {/* ANIMATION CONTAINER: CHAT */}
                <div className="mt-8 rounded-2xl bg-black/40 border border-neutral-800 p-4 relative overflow-hidden h-48 flex flex-col justify-end space-y-4">
                   {/* User Message */}
                   <div className="self-end max-w-[80%] p-3 rounded-2xl rounded-tr-none bg-blue-600 text-xs text-white shadow-lg">
                      Povzetek 5. člena?
                   </div>
                   
                   {/* Result Card (Now relative and stacked to prevent overlap) */}
                   <div className="relative bg-neutral-800/95 backdrop-blur border border-green-500/30 p-3 rounded-xl shadow-xl animate-[pulse_3s_ease-in-out_infinite]">
                      <div className="flex items-start gap-3">
                         <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle size={14} className="text-green-400" />
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] text-green-400 font-bold uppercase">Odgovor</p>
                            <p className="text-xs text-neutral-300 leading-snug">
                               5. člen določa <span className="text-white font-medium bg-white/10 px-1 rounded">30-dnevni rok</span> za pritožbo.
                            </p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </article>

            {/* 2. ZAKONODAJA (NEW: Digital Scanner/Decoder Effect) */}
            <article className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 ring-1 ring-white/10 hover:ring-blue-500/40 transition duration-500">
              <div className="absolute -inset-40 bg-gradient-to-tr from-blue-500/10 via-sky-400/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              
              <div className="p-8 pt-12">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <FileText className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold pr-24 leading-tight">Iskanje po zakonodaji</h3>
                <p className="text-neutral-400 mt-2 leading-relaxed">
                  Vedno ažurni členi zakonov in predpisi iz PISRS.
                </p>

                {/* ANIMATION CONTAINER: DIGITAL SCANNER */}
                <div className="mt-8 rounded-2xl bg-black/40 border border-neutral-800 relative overflow-hidden h-48 flex items-center justify-center px-6">
                   {/* Background Documents (Blurred) */}
                   <div className="w-full space-y-4 opacity-30 blur-[1px]">
                      <div className="flex gap-2">
                         <div className="w-8 h-2 bg-neutral-600 rounded"></div>
                         <div className="w-full h-2 bg-neutral-700 rounded"></div>
                      </div>
                      <div className="w-3/4 h-2 bg-neutral-700 rounded"></div>
                      
                      {/* Target Section (Placeholder) */}
                      <div className="py-2"></div>

                      <div className="w-full h-2 bg-neutral-700 rounded"></div>
                      <div className="flex gap-2">
                         <div className="w-12 h-2 bg-neutral-600 rounded"></div>
                         <div className="w-2/3 h-2 bg-neutral-700 rounded"></div>
                      </div>
                   </div>

                   {/* Laser Scanner Line */}
                   <div className="absolute inset-x-0 h-8 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 border-b border-blue-400/50 animate-scan-vertical pointer-events-none z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                   {/* The Decoded Clause (Pops up in middle) */}
                   <div className="absolute z-10 w-[85%] bg-neutral-900 border border-blue-500/50 rounded p-3 shadow-2xl animate-pulse">
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-[10px] font-mono text-blue-400">ZDR-1: 142. člen</span>
                         <span className="px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[8px] font-bold rounded border border-green-500/20">VELJAVEN</span>
                      </div>
                      <div className="space-y-1.5">
                         <div className="h-2 w-full bg-neutral-200 rounded-sm"></div>
                         <div className="h-2 w-full bg-neutral-200 rounded-sm"></div>
                         <div className="h-2 w-4/5 bg-neutral-200 rounded-sm"></div>
                      </div>
                   </div>
                </div>
              </div>
            </article>

            {/* 3. PRAVO EU (NEW: Directive Connection Network) */}
            <article className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 ring-1 ring-white/10 hover:ring-blue-500/40 transition duration-500">
              <div className="absolute -inset-40 bg-gradient-to-tr from-indigo-500/10 via-blue-500/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              
              <div className="p-8 pt-12">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <Globe className="text-blue-400" size={24} />
                </div>
                
                <h3 className="text-2xl font-semibold pr-4 leading-tight">Iskanje po pravu EU</h3>
                <p className="text-neutral-400 mt-2 leading-relaxed">
                  Povezava z EUR-Lex direktivami, uredbami in sodbami.
                </p>
                <div className="mt-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/20 uppercase tracking-wide">Kmalu</span>
                </div>

                {/* ANIMATION CONTAINER: EU STARS CONNECTION */}
                <div className="mt-8 rounded-2xl bg-black/40 border border-neutral-800 relative overflow-hidden h-48 flex items-center justify-center">
                   
                   {/* Background Grid */}
                   <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

                   {/* Central "Directive" Node */}
                   <div className="relative z-20 w-12 h-14 bg-blue-900/80 border border-blue-400/50 rounded flex flex-col items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                      <div className="w-6 h-1 bg-blue-400 mb-1 rounded-full"></div>
                      <div className="w-4 h-1 bg-blue-400/50 mb-1 rounded-full"></div>
                      <div className="w-5 h-1 bg-blue-400/50 rounded-full"></div>
                   </div>

                   {/* Rotating Ring of Stars */}
                   <div className="absolute z-10 w-40 h-40 animate-spin-slow">
                      {[...Array(12)].map((_, i) => (
                         <div 
                           key={i}
                           className="absolute w-2 h-2 text-yellow-400"
                           style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 30}deg) translate(70px) rotate(-${i * 30}deg)` // Keep stars upright if needed, or rotate with ring
                           }}
                         >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">
                               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                         </div>
                      ))}
                   </div>

                   {/* Connection Lines (Simulated Data Beams) */}
                   <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                      <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#grad1)" strokeWidth="1" className="opacity-0 animate-pulse" style={{animationDuration: '2s'}} />
                      <line x1="50%" y1="50%" x2="80%" y2="65%" stroke="url(#grad1)" strokeWidth="1" className="opacity-0 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2s'}} />
                      <line x1="50%" y1="50%" x2="20%" y2="65%" stroke="url(#grad1)" strokeWidth="1" className="opacity-0 animate-pulse" style={{animationDelay: '1s', animationDuration: '2s'}} />
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{stopColor:'transparent', stopOpacity:0}} />
                          <stop offset="50%" style={{stopColor:'#3b82f6', stopOpacity:1}} />
                          <stop offset="100%" style={{stopColor:'transparent', stopOpacity:0}} />
                        </linearGradient>
                      </defs>
                   </svg>
                </div>
              </div>
            </article>

            {/* 4. SODNA PRAKSA (Swapped to 4th) */}
            <article className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 ring-1 ring-white/10 hover:ring-blue-500/40 transition duration-500">
              <div className="absolute -inset-40 bg-gradient-to-tr from-blue-600/10 via-blue-500/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              
              <div className="p-8 pt-12">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                    <Search className="text-blue-400" size={24} />
                </div>

                <h3 className="text-2xl font-semibold pr-4 leading-tight">Iskanje po sodni praksi</h3>
                <p className="text-neutral-400 mt-2 leading-relaxed">
                  Neposreden dostop do baze slovenskih sodb z uporabo naravnega jezika.
                </p>
                <div className="mt-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/20 uppercase tracking-wide">Kmalu</span>
                </div>

                {/* ANIMATION CONTAINER: SCROLLING DB */}
                <div className="mt-8 rounded-2xl bg-black/40 border border-neutral-800 p-4 relative overflow-hidden h-48 flex flex-col justify-center">
                   {/* Background scrolling code */}
                   <div className="absolute inset-0 opacity-20 flex flex-col gap-2 p-4 animate-scroll-up pointer-events-none font-mono text-[10px] text-neutral-400">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex gap-2">
                           <span className="text-blue-700">ID_{1000+i}</span>
                           <span>VS RS Sodba II Ips {200+i}/2023...</span>
                        </div>
                      ))}
                      {[...Array(10)].map((_, i) => (
                        <div key={`d-${i}`} className="flex gap-2">
                           <span className="text-blue-700">ID_{1000+i}</span>
                           <span>VS RS Sodba II Ips {200+i}/2023...</span>
                        </div>
                      ))}
                   </div>
                   
                   {/* Foreground "Found" Card */}
                   <div className="relative z-10 bg-neutral-800/90 backdrop-blur border border-blue-500/30 p-3 rounded-lg shadow-2xl shadow-blue-900/20 transform group-hover:scale-105 transition duration-500">
                      <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                         <span className="text-xs font-semibold text-white">Najdena precedenčna sodba</span>
                      </div>
                      <div className="space-y-1.5">
                         <div className="h-1.5 w-full bg-neutral-700 rounded-full"></div>
                         <div className="h-1.5 w-3/4 bg-neutral-700 rounded-full"></div>
                         <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded">98% ujemanje</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </article>

            {/* 5. WORKFLOWI (Enhanced: Pipeline Flow) */}
            <article className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-neutral-900/50 ring-1 ring-white/10 hover:ring-blue-500/40 transition duration-500">
              <div className="absolute -inset-40 bg-gradient-to-tr from-blue-500/10 via-indigo-500/5 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              
              <div className="p-8 pt-12 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                        <GitMerge className="text-blue-400" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-semibold leading-tight">AI Workflowi</h3>
                  <p className="text-neutral-400 mt-2 leading-relaxed">
                    Avtomatizirajte kompleksne procese z zaporedjem AI nalog. Od iskanja do priprave končnega dokumenta.
                  </p>
                  <div className="mt-4">
                     <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/20 uppercase tracking-wide">Kmalu</span>
                  </div>
                </div>

                {/* ANIMATION CONTAINER: PIPELINE */}
                <div className="w-full md:w-1/2 h-48 rounded-2xl bg-black/40 border border-neutral-800 relative overflow-hidden flex items-center justify-center px-8">
                   {/* Connecting Line */}
                   <div className="absolute top-1/2 left-16 right-16 h-0.5 bg-neutral-800 -translate-y-1/2"></div>
                   
                   {/* Flowing Particle */}
                   <div className="absolute top-1/2 left-16 right-16 h-1 -translate-y-1/2 pointer-events-none overflow-hidden">
                      <div className="flow-packet"></div>
                   </div>

                   {/* Steps */}
                   <div className="relative z-10 w-full flex justify-between">
                      {/* Step 1 */}
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-600 flex items-center justify-center shadow-lg group-hover:border-blue-500 transition-colors duration-500">
                            <Search size={16} className="text-neutral-400" />
                         </div>
                         <span className="text-[10px] text-neutral-500">Iskanje</span>
                      </div>
                      
                      {/* Step 2 */}
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-600 flex items-center justify-center shadow-lg group-hover:border-blue-500 transition-colors duration-500 delay-150">
                            <FileText size={16} className="text-neutral-400" />
                         </div>
                         <span className="text-[10px] text-neutral-500">Analiza</span>
                      </div>

                      {/* Step 3 (Final) */}
                      <div className="flex flex-col items-center gap-2">
                         <div className="w-12 h-12 rounded-full bg-neutral-800 border-2 border-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] node-pulse">
                             <CheckCircle size={20} className="text-blue-400" />
                         </div>
                         <span className="text-[10px] text-blue-400 font-bold">Rešitev</span>
                      </div>
                   </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* DEMO SLIDESHOW */}
      <section id="demo" className="bg-neutral-900 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Predogled Platforme</h2>
            <p className="mt-3 text-neutral-400">Lexora v akciji.</p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-black shadow-[0_10px_60px_rgba(0,0,0,0.5)] overflow-hidden group aspect-[16/10] md:aspect-[16/9]">
            
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <p className="text-white font-serif text-2xl mb-1">{slide.title}</p>
                  <p className="text-neutral-400">{slide.desc}</p>
                </div>
              </div>
            ))}

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 text-white flex items-center justify-center transition"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicators */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
              {slides.map((_, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${idx === currentSlide ? 'bg-white w-4' : 'bg-white/40 hover:bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POVPRAŠEVANJE (Contact Form) */}
      <section id="contact" className="bg-black text-white py-20 font-sans">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-6">Pošljite povpraševanje</h2>
          <p className="text-neutral-300 text-center mb-10">
            Izpolnite spodnji obrazec in kontaktirali vas bomo v najkrajšem možnem času.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300">Ime in priimek</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300">E-pošta</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-300">Telefonska številka</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange} 
                className="mt-1 block w-full rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300">Sporočilo</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={formData.message}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              ></textarea>
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="btn-demo px-8 py-3 rounded-lg text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Pošiljam...' : 'Pošlji povpraševanje'}
              </button>
              
              {formStatus === 'success' && (
                <p className="mt-4 text-sm text-green-400 animate-fade-in">✅ Hvala! Vaše povpraševanje smo prejeli.</p>
              )}
              {formStatus === 'error' && (
                <p className="mt-4 text-sm text-red-400 animate-fade-in">⚠️ Prišlo je do napake. Poskusite znova.</p>
              )}

              <div className="mt-10 pt-6 border-t border-neutral-800">
                <p className="text-sm text-neutral-400 font-bold mb-2 uppercase tracking-wide">Kontakt</p>
                <div className="flex flex-col items-center gap-1 text-sm text-neutral-400">
                   <p>Telefon: <span className="ai-anim font-medium">068 686 880</span></p>
                   <p>Mail: <span className="ai-anim font-medium">jan@lexora.si</span></p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-300 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            <div className="flex flex-col gap-1">
              <p className="font-serif text-xl text-white">Lexora</p>
              <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Lexora</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a className="hover:text-white transition-colors" href="#showcase">Funkcije</a>
                <a className="hover:text-white transition-colors" href="#demo">Predogled</a>
                <a className="hover:text-white transition-colors" href="#contact">Povpraševanje</a>
              </nav>
              
              {/* Social Icons */}
              <div className="flex items-center gap-5">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/lexora-si/" className="text-neutral-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a href="https://x.com/LexoraAI" className="text-neutral-400 hover:text-white transition-colors" aria-label="X">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@LexoraAI-e3o9z" className="text-neutral-400 hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
