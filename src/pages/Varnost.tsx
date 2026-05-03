import React from 'react';
import { ArrowLeft, Shield, Lock, Globe, Database, Cpu, CheckCircle, AlertCircle, FileText, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang, LangToggle } from '../LanguageContext';

const sectionIcons: Record<string, React.ReactNode> = {
  uvod: <Shield size={16} />,
  avtentikacija: <Lock size={16} />,
  'zascita-podatkov': <Database size={16} />,
  infrastruktura: <Globe size={16} />,
  'operativna-varnost': <Zap size={16} />,
  razvoj: <Cpu size={16} />,
  tveganja: <AlertCircle size={16} />,
  skladnost: <CheckCircle size={16} />,
  osebje: <Users size={16} />,
  politika: <FileText size={16} />,
};

const Varnost: React.FC = () => {
  const { t } = useLang();
  const sections = t.varnost.sections.map(s => ({ ...s, icon: sectionIcons[s.id] }));

  return (
    <div className="min-h-screen bg-cream text-ink-800 font-sans selection:bg-tan-500/20 selection:text-ink-900">
      {/* Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-300">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-900 transition-colors text-sm font-medium">
            <ArrowLeft size={15} />
            {t.backHome}
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <LangToggle />
            <Link to="/varnost" className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-ink-900 text-cream">
              {t.varnost.navSecurity}
            </Link>
            <Link to="/pogoji-uporabe" className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full text-ink-500 hover:text-ink-900 hover:bg-cream-200 transition-colors">
              {t.varnost.navTerms}
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-[220px_1fr] gap-16">

            {/* Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-32 h-fit">
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-ink-400 mb-4 px-3">Razdelki</p>
              <nav className="space-y-0.5">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-2.5 px-3 py-2 text-sm text-ink-500 hover:text-ink-900 hover:bg-cream-200 rounded-lg transition-all group"
                  >
                    <span className="text-ink-400 group-hover:text-ink-700 transition-colors flex-shrink-0">
                      {section.icon}
                    </span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-cream-300 bg-cream-100">
                <Shield size={12} className="text-ink-600" />
                <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-ink-500">{t.varnost.badge}</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl text-ink-900 tracking-[-0.02em] leading-[1.05] mb-6">{t.varnost.heading}</h1>

              <div className="w-12 h-px bg-cream-400 mb-12" />

              <div className="space-y-14 text-ink-600 leading-relaxed">
                <section id="uvod">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.uvod.title}</h2>
                  <p className="text-ink-600">{t.varnost.uvod.body}</p>
                </section>

                <section id="avtentikacija">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.avtentikacija.title}</h2>
                  <p className="mb-4">{t.varnost.avtentikacija.p1}</p>
                  <ul className="space-y-2.5 mb-4 pl-0">
                    {[t.varnost.avtentikacija.li1, t.varnost.avtentikacija.li2, t.varnost.avtentikacija.li3].map((li, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: li }} />
                      </li>
                    ))}
                  </ul>
                  <p>{t.varnost.avtentikacija.p2}</p>
                </section>

                <section id="zascita-podatkov">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.zascitaPodatkov.title}</h2>
                  <p className="mb-4">{t.varnost.zascitaPodatkov.p1}</p>
                  <p>{t.varnost.zascitaPodatkov.p2}</p>
                </section>

                <section id="infrastruktura">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.infrastruktura.title}</h2>
                  <p>{t.varnost.infrastruktura.body}</p>
                </section>

                <section id="operativna-varnost">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.operativnaVarnost.title}</h2>
                  <p className="mb-4">{t.varnost.operativnaVarnost.p1}</p>
                  <p>{t.varnost.operativnaVarnost.p2}</p>
                </section>

                <section id="razvoj">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.razvoj.title}</h2>
                  <p className="mb-4">{t.varnost.razvoj.p1}</p>
                  <p>{t.varnost.razvoj.p2}</p>
                </section>

                <section id="tveganja">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.tveganja.title}</h2>
                  <p className="mb-4">{t.varnost.tveganja.p1}</p>
                  <p>{t.varnost.tveganja.p2}</p>
                </section>

                <section id="skladnost">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.skladnost.title}</h2>
                  <p className="mb-4">{t.varnost.skladnost.p1}</p>
                  <p>{t.varnost.skladnost.p2}</p>
                </section>

                <section id="osebje">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.osebje.title}</h2>
                  <p className="mb-4">{t.varnost.osebje.p1}</p>
                  <ul className="space-y-2.5 pl-0">
                    {[t.varnost.osebje.li1, t.varnost.osebje.li2, t.varnost.osebje.li3].map((li, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="politika">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.politika.title}</h2>
                  <p>{t.varnost.politika.body}</p>
                </section>

                <section id="zakljucek" className="pt-10 border-t border-cream-300">
                  <h2 className="font-serif text-2xl text-ink-900 tracking-[-0.015em] mb-4">{t.varnost.zakljucek.title}</h2>
                  <p>{t.varnost.zakljucek.body}</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-cream-300 py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-400">© {new Date().getFullYear()} Lexora. {t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Varnost;
