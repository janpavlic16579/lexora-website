import React from 'react';
import { ArrowLeft, Shield, Lock, Globe, Database, Cpu, CheckCircle, AlertCircle, FileText, Users, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Varnost: React.FC = () => {
  const location = useLocation();
  
  const sections = [
    { id: 'uvod', title: 'Uvod', icon: <Shield size={20} /> },
    { id: 'avtentikacija', title: 'Avtorizacija in avtentikacija', icon: <Lock size={20} /> },
    { id: 'zascita-podatkov', title: 'Zaščita podatkov', icon: <Database size={20} /> },
    { id: 'infrastruktura', title: 'Infrastruktura in redundanca', icon: <Globe size={20} /> },
    { id: 'operativna-varnost', title: 'Operativna varnost', icon: <Zap size={20} /> },
    { id: 'razvoj', title: 'Varnost pri razvoju', icon: <Cpu size={20} /> },
    { id: 'tveganja', title: 'Upravljanje tveganj', icon: <AlertCircle size={20} /> },
    { id: 'skladnost', title: 'Skladnost in certifikati', icon: <CheckCircle size={20} /> },
    { id: 'osebje', title: 'Varnost osebja', icon: <Users size={20} /> },
    { id: 'politika', title: 'Varnostna politika', icon: <FileText size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-emerald-500/30">
      {/* Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-emerald-700 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Nazaj na prvo stran
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/varnost" className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              Varnost
            </Link>
            <Link to="/pogoji-uporabe" className="px-3 py-1 rounded-full text-xs font-medium text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
              Pogoji uporabe
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-[250px_1fr] gap-16">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-32 h-fit">
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all group"
                  >
                    <span className="text-neutral-400 group-hover:text-emerald-600 transition-colors">
                      {section.icon}
                    </span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Content */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-emerald-200 bg-emerald-50">
                <Shield size={14} className="text-emerald-700" />
                <span className="font-sans text-xs font-semibold text-emerald-800 tracking-wide uppercase">Varnost in zasebnost</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif text-neutral-950 mb-8">Varnost pri Lexori</h1>
              
              <div className="space-y-16 text-neutral-700 leading-relaxed">
                <section id="uvod">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Uvod</h2>
                  <p>
                    V Lexori jemljemo varnost zelo resno. Kot ponudnik AI‑rešitev za pravnike ravnamo z izjemno občutljivimi podatki, vključno s pravnimi dokumenti in osebnimi informacijami. Zaupnost in integriteta teh podatkov sta za nas na prvem mestu. Na tej strani opisujemo ukrepe, s katerimi varujemo podatke in izpolnjujemo zakonske zahteve. Stran ni izčrpna; posodabljali jo bomo, ko se bodo grožnje in tehnologije spreminjale.
                  </p>
                </section>

                <section id="avtentikacija">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Avtorizacija in avtentikacija</h2>
                  <p className="mb-4">
                    Za nadzor dostopa je ključnega pomena, da omogočimo le preverjenim osebam dostop do sistemov. Vodila nas usmerjajo, da moramo poleg uporabniškega imena in gesla uporabiti tudi dodatne varnostne mehanizme, kot sta večfaktorska avtentikacija (MFA) ali enotna prijava (SSO). Na naši platformi uporabljamo:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 mb-4">
                    <li><strong>MFA:</strong> Za prijavo je potrebno vsaj eno dodatno potrdilo (geslo + aplikacija ali varnostni žeton).</li>
                    <li><strong>Vloga na osnovi pravic:</strong> Uporabnikom so dodeljene najnižje možne pravice, redno pa revidiramo in prilagajamo vloge.</li>
                    <li><strong>SSO integracije:</strong> Na zahtevo je mogoče uporabiti SSO preko zaupanja vrednih ponudnikov (npr. Azure AD, Okta).</li>
                  </ul>
                  <p>
                    Dostop do administrativnih funkcij je omejen na pooblaščeno osebje, vse prijave in spremembe pa se beležijo.
                  </p>
                </section>

                <section id="zascita-podatkov">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Zaščita podatkov v tranzitu in mirovanju</h2>
                  <p className="mb-4">
                    Vse komunikacije med brskalnikom uporabnika in našimi strežniki so šifrirane s protokolom TLS/SSL. Smernice za oblačne storitve poudarjajo, da je treba podatke med prehodom med omrežji zaščititi z močno enkripcijo. TLS‑certifikati brskalnikom omogočijo preverjanje pristnosti našega strežnika in pomagajo preprečevati napade z posrednikom.
                  </p>
                  <p>
                    Občutljivi podatki v naših podatkovnih bazah so šifrirani v mirovanju (AES‑256). Information Commissioner’s Office (ICO) navaja, da je enkripcija primeren tehnični ukrep za zaščito osebnih podatkov med prenosom in shranjevanjem. Ključe za dešifriranje upravljamo preko sistema za upravljanje ključev (KMS), certifikate pa samodejno obnavljamo, da se izognemo pretečenim potrdilom.
                  </p>
                </section>

                <section id="infrastruktura">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Zaščita infrastrukture in redundanca</h2>
                  <p>
                    Našo infrastrukturo gostimo v certificiranih podatkovnih centrih z visoko stopnjo fizične varnosti. Ti centri so pod 24‑urnim nadzorom, z nadzornimi kamerami, večnivojskimi sistemi za kontrolo dostopa in redundantnim napajanjem. Sledimo načelom varovanja sredstev in odpornosti: podatki in sistemi morajo biti zaščiteni pred fizičnimi posegi, izgubo, poškodbami ali zaplembo. Podatke zrcalimo v več geografskih lokacijah, redno izvajamo varnostne kopije in testiramo postopke obnove po nesreči.
                  </p>
                </section>

                <section id="operativna-varnost">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Operativna varnost, monitoring in odziv na incidente</h2>
                  <p className="mb-4">
                    Varnost je nenehen proces. Naše operativne prakse so zasnovane tako, da preprečujejo in odkrivajo napade. Uporabljamo večslojni pristop, ki vključuje požarne zidove, zaščito pred DDoS napadi in omejevanje hitrosti prometa. Sistemske aktivnosti (dostopi, spremembe konfiguracij, komunikacije) beležimo v dnevnikih in jih sproti analiziramo.
                  </p>
                  <p>
                    Za obvladovanje incidentov imamo vzpostavljen načrt odziva. Ta zajema identifikacijo, zajezitev, obveščanje, odpravo težav in naknadno analizo. Ekipa za odzive na incidente redno organizira vaje, da se pripravi na različne scenarije.
                  </p>
                </section>

                <section id="razvoj">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Varnost pri razvoju programske opreme</h2>
                  <p className="mb-4">
                    Naše storitve so zasnovane po načelu “Secure by Design”. Smernice za varno razvojno okolje priporočajo, da se varnost vključi v vse faze življenjskega cikla programske opreme. To vključuje modeliranje groženj, statično analizo kode, notranje in zunanje revizije ter redno posodabljanje odvisnosti.
                  </p>
                  <p>
                    V naš CI/CD proces smo vključili avtomatske teste za odkrivanje ranljivosti. Razvojne ekipe se redno usposabljajo v varnem programiranju in so seznanjene z najnovejšimi grožnjami.
                  </p>
                </section>

                <section id="tveganja">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Upravljanje tveganj in dobavna veriga</h2>
                  <p className="mb-4">
                    Zavedamo se, da je varnost povezana tudi z našimi partnerji in dobavitelji. Uporabljamo celovit pristop k varnosti dobavne verige, ki vključuje preverjanje tretjih ponudnikov, pogodbeno zavezovanje k enakim varnostnim standardom ter stalno spremljanje skladnosti.
                  </p>
                  <p>
                    Redno izvajamo ocene tveganj (risk assessments) in ocene vpliva na varstvo podatkov (DPIA). Na podlagi teh ocen pripravljamo akcijske načrte za odpravo zaznanih tveganj. Uporabljamo tudi ločevanje med uporabniki – kompromis pri enem uporabniku ne sme vplivati na podatke ali storitve drugega.
                  </p>
                </section>

                <section id="skladnost">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Skladnost in certifikati</h2>
                  <p className="mb-4">
                    Varnost podatkov je tesno povezana s pravnim okvirom. Priporočila strokovnjakov navajajo, da naj varnostna dokumentacija jasno opredeli, katere standarde in certifikate podjetje podpira. Lexora upošteva Splošno uredbo o varstvu podatkov (GDPR) in sledi načelu integritete in zaupnosti pri obdelavi osebnih podatkov.
                  </p>
                  <p>
                    Naš cilj je pridobiti in vzdrževati certifikate ISO/IEC 27001 in SOC 2. Hkrati sledimo smernicam NCSC, ki vključujejo principe, kot so zaščita podatkov v tranzitu, zaščita sredstev, operativna varnost, identiteta in avtentikacija ter varno upravljanje storitev.
                  </p>
                </section>

                <section id="osebje">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Varnost osebja in ozaveščenost</h2>
                  <p className="mb-4">
                    Ljudje so pogosto najšibkejši člen v verigi. Skladno s smernicami je treba zaposlene temeljito preveriti in redno usposabljati, da se zmanjša verjetnost nenamernega ali namernega kompromisa. V Lexori izvajamo:
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>preverjanje preteklosti novozaposlenih;</li>
                    <li>redna izobraževanja o phishingu, varni rabi gesel in ravnanju z občutljivimi podatki;</li>
                    <li>strogo politiko dostopa in odobravanja (principe štirih oči).</li>
                  </ul>
                </section>

                <section id="politika">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Varnostna politika in transparentnost</h2>
                  <p>
                    Naši uporabniki morajo imeti občutek, da so zaščiteni in dobro obveščeni. V svojih dokumentih zato transparentno pojasnjujemo, kako varujemo podatke. Uporabniki nas lahko vedno kontaktirajo, če želijo dodatne informacije ali kopije certifikatov.
                  </p>
                </section>

                <section id="zakljucek" className="pt-8 border-t border-neutral-100">
                  <h2 className="text-2xl font-serif text-neutral-950 mb-4">Zaključek</h2>
                  <p>
                    Zagotavljanje varnosti in zasebnosti je ključni del našega poslanstva. Nenehno vlagamo v tehnologijo, procese in ljudi, da ostanemo korak pred grožnjami. Ta stran odraža naše trenutno stanje varnostnih ukrepov; redno jo bomo posodabljali glede na spremembe v zakonodaji in najboljših praksah.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Lexora. Vse pravice pridržane.</p>
        </div>
      </footer>
    </div>
  );
};

export default Varnost;
