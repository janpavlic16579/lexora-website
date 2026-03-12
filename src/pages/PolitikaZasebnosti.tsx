import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PolitikaZasebnosti: React.FC = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-blue-500/30">
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Nazaj na prvo stran
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-8">
            <Link to="/pogoji-uporabe" className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/pogoji-uporabe' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
              Pogoji uporabe
            </Link>
            <Link to="/politika-zasebnosti" className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/politika-zasebnosti' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
              Politika zasebnosti
            </Link>
            <Link to="/politika-piskotkov" className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/politika-piskotkov' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
              Politika piškotkov
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Politika zasebnosti</h1>
          <div className="text-sm text-neutral-500 mb-12 space-y-1">
            <p>Velja od: 18. 02. 2026</p>
            <p>Zadnja posodobitev: 9. 3. 2026</p>
          </div>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">VSEBINA</h2>
              <ul className="list-none space-y-2 text-blue-400">
                <li className="flex justify-between"><a href="#upravljavec" className="hover:underline">1. Upravljavec osebnih podatkov in kontakt</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#vloge" className="hover:underline">2. Vloge po GDPR: kdaj je Lexora upravljavec in kdaj obdelovalec</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between pl-4"><a href="#vloge-upravljavec" className="hover:underline">2.1 Lexora kot UPRAVLJAVEC</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between pl-4"><a href="#vloge-obdelovalec" className="hover:underline">2.2 Lexora kot OBDELOVALEC (B2B uporaba)</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#katere-podatke" className="hover:underline">3. Katere podatke obdelujemo</a><span className="text-neutral-500">3</span></li>
                <li className="flex justify-between pl-4"><a href="#podatki-racuna" className="hover:underline">3.1 Podatki računa in uporabnika</a><span className="text-neutral-500">3</span></li>
                <li className="flex justify-between pl-4"><a href="#podatki-aplikacije" className="hover:underline">3.2 Podatki v aplikaciji (vsebina)</a><span className="text-neutral-500">3</span></li>
                <li className="flex justify-between pl-4"><a href="#ai-obdelava" className="hover:underline">3.3 AI obdelava, AI izhod in učenje modelov (ključna pojasnila)</a><span className="text-neutral-500">3</span></li>
                <li className="flex justify-between pl-4"><a href="#analiticni-podatki" className="hover:underline">3.4 Analitični in uporovni podatki (s privolitvijo)</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between pl-4"><a href="#varnostni-podatki" className="hover:underline">3.5 Varnostni in tehnološki podatki</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#nameni" className="hover:underline">4. Nameni obdelave in pravne podlage</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#posredovanje" className="hover:underline">5. Posredovanje podatkov (prejemniki) in podobdelovalci</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between pl-4"><a href="#podobdelovalci-tabela" className="hover:underline">5.1 Podobdelovalci (tabela)</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between pl-4"><a href="#obvestila-spremembah" className="hover:underline">5.2 Obvestila o spremembah podobdelovalcev (B2B)</a><span className="text-neutral-500">5</span></li>
                <li className="flex justify-between"><a href="#prenosi" className="hover:underline">6. Mednarodni prenosi (izven EGP)</a><span className="text-neutral-500">6</span></li>
                <li className="flex justify-between"><a href="#piskotki" className="hover:underline">7. Piškotki in localStorage (ZEKom-2)</a><span className="text-neutral-500">6</span></li>
                <li className="flex justify-between pl-4"><a href="#kategorije-piskotkov" className="hover:underline">7.1 Kategorije piškotkov</a><span className="text-neutral-500">6</span></li>
                <li className="flex justify-between pl-4"><a href="#localstorage" className="hover:underline">7.2 localStorage</a><span className="text-neutral-500">7</span></li>
                <li className="flex justify-between"><a href="#upravljanje-privolitve" className="hover:underline">8. Upravljanje privolitve za piškotke</a><span className="text-neutral-500">7</span></li>
                <li className="flex justify-between pl-4"><a href="#evidenca-soglasij" className="hover:underline">8.1 Evidenca soglasij (dokazovanje privolitve – GDPR 7(1))</a><span className="text-neutral-500">7</span></li>
                <li className="flex justify-between"><a href="#hranjenje" className="hover:underline">9. Hranjenje podatkov (roki hrambe)</a><span className="text-neutral-500">8</span></li>
                <li className="flex justify-between"><a href="#varnostni-ukrepi" className="hover:underline">10. Varnostni ukrepi</a><span className="text-neutral-500">8</span></li>
                <li className="flex justify-between pl-4"><a href="#sentry-sanitizacija" className="hover:underline">10.1 Sentry sanitizacija (primer)</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between"><a href="#pravice" className="hover:underline">11. Pravice posameznika</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between"><a href="#dpia" className="hover:underline">12. DPIA in TIA (upravljanje tveganj)</a><span className="text-neutral-500">10</span></li>
                <li className="flex justify-between"><a href="#posodobitve" className="hover:underline">13. Posodobitve politike</a><span className="text-neutral-500">10</span></li>
                <li className="flex justify-between"><a href="#pravni-viri" className="hover:underline">14. Pravni viri (informativno)</a><span className="text-neutral-500">10</span></li>
              </ul>
            </section>

            <p className="mb-4 mt-12">
              Anej Žaler s.p., računalniško programiranje (v nadaljevanju »Lexora«, »mi« ali »nas«) spoštuje vašo zasebnost in varuje osebne podatke skladno z veljavno zakonodajo in smernicami (GDPR, ZVOP-2, ZEKom-2, smernice EDPB). Ta dokument pojasnjuje, katere podatke obdelujemo, za katere namene, na kateri pravni podlagi, komu jih razkrivamo, koliko časa jih hranimo, kako jih varujemo in katere pravice imate.
            </p>

            <section id="upravljavec">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">1. Upravljavec osebnih podatkov in kontakt</h2>
              <p className="mb-4">Upravljavec (za obdelave, kjer Lexora nastopa kot upravljavec v smislu GDPR) je:</p>
              <p className="mb-4">
              Anej Žaler s.p., računalniško programiranje<br/>
              Sedež: Vojkova cesta 58, 1000 Ljubljana, Slovenija<br/>
              Matična št.: 9727990000<br/>
              Davčna št.: 39164608<br/>
              Kontakt za varstvo podatkov / uveljavljanje pravic: info@lexora.si
              </p>
            </section>

            <section id="vloge">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">2. Vloge po GDPR: kdaj je Lexora upravljavec in kdaj obdelovalec</h2>
              <p className="mb-4">Lexora lahko v različnih scenarijih nastopa v različnih vlogah:</p>
              
              <h3 id="vloge-upravljavec" className="text-lg font-bold text-white mt-6 mb-2">2.1 Lexora kot UPRAVLJAVEC</h3>
              <p className="mb-4">Lexora nastopa kot upravljavec predvsem za:<br/>
              podatke o uporabniškem računu in dostopu,<br/>
              obračun/plačila in izpolnjevanje zakonskih obveznosti,<br/>
              varnost, preprečevanje zlorab, stabilnost storitve,<br/>
              neposredno trženje in analitiko na podlagi privolitve.</p>

              <h3 id="vloge-obdelovalec" className="text-lg font-bold text-white mt-6 mb-2">2.2 Lexora kot OBDELOVALEC (B2B uporaba)</h3>
              <p className="mb-4">Ko odvetnik/odvetniška pisarna ali druga poslovna stranka v Lexoro naloži dokumente, spise ali vnese vsebino za obdelavo, Lexora praviloma nastopa kot obdelovalec, poslovna stranka pa kot upravljavec (v skladu z DPA in Pogoji uporabe).</p>
              <p className="mb-4">Če uveljavljate pravice glede osebnih podatkov, ki se nahajajo v dokumentih/spisih, bomo (kjer je to primerno) zahtevo usmerili na ustreznega upravljavca (npr. odvetniško pisarno), saj je ta pristojen za vsebinske odločitve o obdelavi.</p>
            </section>

            <section id="katere-podatke">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">3. Katere podatke obdelujemo</h2>
              
              <h3 id="podatki-racuna" className="text-lg font-bold text-white mt-6 mb-2">3.1 Podatki računa in uporabnika</h3>
              <p className="mb-4">Registracijski podatki: ime in priimek, elektronski naslov, naziv pravne osebe, geslo (hashirano).<br/>
              Avtentikacija in seje: žetoni (tokeni) za sejo (npr. better-auth.session_token) in piškotki CSRF za varnost.<br/>
              Finančni podatki: podrobnosti o naročilih, transakcijah in fakturah (npr. podatki iz Stripe).<br/>
              Pravna podlaga: izpolnitev pogodbe (GDPR 6(1)(b)) in zakonske obveznosti (GDPR 6(1)(c)).</p>

              <h3 id="podatki-aplikacije" className="text-lg font-bold text-white mt-6 mb-2">3.2 Podatki v aplikaciji (vsebina)</h3>
              <p className="mb-4">Vnešena vsebina: vsebina klepeta, opisi primerov, naloženi dokumenti in priloge.<br/>
              Nastavitve aplikacije: barvna tema, izbran AI model, osnutki besedil.<br/>
              Pomembno – posebne vrste podatkov:<br/>
              Zaradi narave pravnih gradiv lahko naložena vsebina vsebuje posebne vrste osebnih podatkov (npr. zdravstveni podatki po 9. členu GDPR) in tudi podatke v zvezi s kazenskimi obsodbami in prekrški (10. člen GDPR). Takšne podatke obdelujemo izključno za izvedbo storitve po navodilih upravljavca in z okrepljenimi tehničnimi in organizacijskimi ukrepi.<br/>
              Pravna podlaga: izpolnitev pogodbe (GDPR 6(1)(b)); v razmerju obdelovalec–upravljavec se obdelava izvaja po DPA in dokumentiranih navodilih upravljavca.</p>

              <h3 id="ai-obdelava" className="text-lg font-bold text-white mt-6 mb-2">3.3 AI obdelava, AI izhod in učenje modelov (ključna pojasnila)</h3>
              <p className="mb-4">Storitev uporablja AI modele za generiranje odgovorov, povzetkov in osnutkov dokumentov.<br/>
              Privzeto NE uporabljamo vsebin (dokumentov in klepetov) za učenje, fine‑tuning ali izboljševanje temeljnih AI modelov Lexore ali tretjih oseb.<br/>
              Vsebina se lahko začasno obdeluje (procesira) pri izbranih ponudnikih AI API, kadar je to potrebno za izvedbo funkcionalnosti, in skladno z našimi pogodbenimi zavezami (DPA/SCC/DPF, kjer relevantno).<br/>
              Če bi kadarkoli želeli omogočiti dodatno obdelavo vsebine za namen izboljšav, bi to bilo predmet ločene, jasne komunikacije in (kjer zahtevano) ustrezne pravne podlage (npr. opt‑in privolitev ali pogodbeni dogovor v B2B).</p>

              <h3 id="analiticni-podatki" className="text-lg font-bold text-white mt-6 mb-2">3.4 Analitični in uporovni podatki (s privolitvijo)</h3>
              <p className="mb-4">Produktna analitika: anonimni/psevdonimizirani dogodki o uporabi funkcij (npr. št. poslanih vprašanj, trajanje sej). Beleži PostHog ali podobno orodje.<br/>
              Identifikatorji seje: npr. distinct_id za ločevanje sej.<br/>
              Ne beležimo vsebine dokumentov ali klepetov za namene analitike.<br/>
              Pravna podlaga: privolitev (GDPR 6(1)(a)); brez privolitve analitičnih piškotkov ne nastavimo.</p>

              <h3 id="varnostni-podatki" className="text-lg font-bold text-white mt-6 mb-2">3.5 Varnostni in tehnološki podatki</h3>
              <p className="mb-4">IP in logi: IP naslov, podatki o napravi, strežniški logi (prijave, napake) za varnost, preprečevanje zlorab in reševanje incidentov.<br/>
              Napake sistema: tehnični podatki o napakah (npr. stack trace) v Sentry (EU regija), brez namerne obdelave vsebin.<br/>
              Pravna podlaga: zakoniti interes (GDPR 6(1)(f)) – zaščita sistema in uporabnikov.</p>
            </section>

            <section id="nameni">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">4. Nameni obdelave in pravne podlage</h2>
              <p className="mb-4">Izpolnitev pogodbe (GDPR 6(1)(b)): ustvarjanje in upravljanje računa, zagotavljanje funkcionalnosti storitve, obdelava vnosov za generiranje rezultatov.<br/>
              Zakonske obveznosti (GDPR 6(1)(c)): računovodstvo in davčne obveznosti (hramba računov, transakcij).<br/>
              Analiza in izboljšave (GDPR 6(1)(a), privolitev): agregirane metrike uporabe za izboljšanje produkta (brez vsebine dokumentov/kletov).<br/>
              Varnost (GDPR 6(1)(f)): preprečevanje zlorab, odkrivanje incidentov, stabilnost in diagnostika.<br/>
              Neposredno trženje (GDPR 6(1)(a), privolitev): obveščanje o novostih, če ste privolili. Privolitev ni pogoj za uporabo storitve.<br/>
              Upoštevamo načelo minimizacije: obdelujemo le podatke, ki so potrebni za dosego namena.</p>
            </section>

            <section id="posredovanje">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">5. Posredovanje podatkov (prejemniki) in podobdelovalci</h2>
              
              <h3 id="podobdelovalci-tabela" className="text-lg font-bold text-white mt-6 mb-2">5.1 Podobdelovalci (tabela)</h3>
              <p className="mb-4">Uporabljamo zunanje ponudnike, ki podatke obdelujejo v našem imenu. Glavni so:</p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4">Ponudnik</th>
                      <th className="py-3 px-4">Namen</th>
                      <th className="py-3 px-4">Lokacija strežnikov</th>
                      <th className="py-3 px-4">Varstvo pri prenosu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Vercel, Inc.</td>
                      <td className="py-3 px-4">Gostovanje spletne aplikacije</td>
                      <td className="py-3 px-4">EU</td>
                      <td className="py-3 px-4">EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Neon Inc.</td>
                      <td className="py-3 px-4">PostgreSQL baza</td>
                      <td className="py-3 px-4">EU</td>
                      <td className="py-3 px-4">EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">OpenAI, L.L.C.</td>
                      <td className="py-3 px-4">AI jezikovni modeli</td>
                      <td className="py-3 px-4">ZDA</td>
                      <td className="py-3 px-4">OpenAI DPA + EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Google LLC (Gemini)</td>
                      <td className="py-3 px-4">AI modeli / OCR</td>
                      <td className="py-3 px-4">ZDA / EU</td>
                      <td className="py-3 px-4">Google DPA + EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">xAI Corp. (Grok)</td>
                      <td className="py-3 px-4">AI jezikovni modeli</td>
                      <td className="py-3 px-4">ZDA</td>
                      <td className="py-3 px-4">EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Soniox Inc.</td>
                      <td className="py-3 px-4">Prepoznavanje govora</td>
                      <td className="py-3 px-4">ZDA</td>
                      <td className="py-3 px-4">EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">PostHog Inc.</td>
                      <td className="py-3 px-4">Produktna analitika</td>
                      <td className="py-3 px-4">EU (Nemčija)</td>
                      <td className="py-3 px-4">– (v EU)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Stripe Inc.</td>
                      <td className="py-3 px-4">Plačilna infrastruktura</td>
                      <td className="py-3 px-4">ZDA / EU</td>
                      <td className="py-3 px-4">Stripe DPA + EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Sentry (Functional Software)</td>
                      <td className="py-3 px-4">Napake in logi</td>
                      <td className="py-3 px-4">EU (Nemčija)</td>
                      <td className="py-3 px-4">– (v EU)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Resend (ali drugo)</td>
                      <td className="py-3 px-4">Pošiljanje e-pošte / OTP</td>
                      <td className="py-3 px-4">EU / ZDA</td>
                      <td className="py-3 px-4">EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Upstash</td>
                      <td className="py-3 px-4">Cache / pomnjenje</td>
                      <td className="py-3 px-4">ZDA / EU</td>
                      <td className="py-3 px-4">EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Exa Labs</td>
                      <td className="py-3 px-4">Iskanje pravnih virov (API)</td>
                      <td className="py-3 px-4">ZDA</td>
                      <td className="py-3 px-4">EU SCC</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Slack Technologies LLC</td>
                      <td className="py-3 px-4">Interna komunikacija/feedback</td>
                      <td className="py-3 px-4">ZDA</td>
                      <td className="py-3 px-4">Slack DPA + EU SCC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4">Z vsemi pod-obdelovalci imamo sklenjene elektronske Pogodbe o obdelavi podatkov (DPA), ki so po 28(9). členu GDPR pravno zavezujoče v elektronski obliki.</p>

              <h3 id="obvestila-spremembah" className="text-lg font-bold text-white mt-6 mb-2">5.2 Obvestila o spremembah podobdelovalcev (B2B)</h3>
              <p className="mb-4">Če ste poslovna stranka in Lexora nastopa kot obdelovalec, se pravila o vključevanju in ugovoru podobdelovalcem uporabljajo skladno z DPA.</p>
            </section>

            <section id="prenosi">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">6. Mednarodni prenosi (izven EGP)</h2>
              <p className="mb-4">Nekateri naši ponudniki imajo sedež ali izvajajo dele obdelave v tretjih državah (npr. ZDA). Podatki lahko fizično prehajajo izven EGP ali pa so od tam dostopni (npr. v primeru tehnične podpore ali uporabe AI API-jev).</p>
              <p className="mb-4">Za zagotavljanje varstva vaših podatkov pri teh prenosih uporabljamo naslednje pravne mehanizme:<br/>
              EU-U.S. Data Privacy Framework (DPF): Za ponudnike iz ZDA, ki so aktivno certificirani pri Ministrstvu za trgovino ZDA. Status certifikacije naših ponudnikov (npr. OpenAI, Google, Stripe) lahko preverite v uradnem registru na www.dataprivacyframework.gov .<br/>
              Standardne pogodbene klavzule (SCC): Za prenose k ponudnikom, ki niso vključeni v DPF ali kadar to zahteva narava prenosa, uporabljamo najnovejše SCC module (2021/914), ki jih je sprejela Evropska komisija. Lexora uporablja specifične module za razmerje med obdelovalci (Modul 3). Kopije uporabljenih klavzul so vam na voljo na zahtevo prek našega kontaktnega e-naslova .<br/>
              Transfer Impact Assessment (TIA): Skladno s standardi iz sodbe Schrems II za vsak prenos v tretjo državo ocenimo tveganja in zakonodajo te države ter zagotovimo, da raven varstva ni zmanjšana. Te ocene redno posodabljamo .<br/>
              Dopolnilni ukrepi: Zaščito pri prenosih krepimo s šifriranjem podatkov med prenosom (TLS 1.3), psevdonimizacijo in strogim nadzorom dostopa po načelu najmanjših privilegijev .<br/>
              Lokalizacija podatkov: Kjer ponudniki to tehnično omogočajo (npr. Neon database, Vercel, PostHog), so naši sistemi konfigurirani za primarno hrambo in obdelavo podatkov na strežnikih znotraj Evropske unije (najpogosteje v regiji Frankfurt, Nemčija), s čimer minimiziramo obseg prenosov v tretje države .</p>
            </section>

            <section id="piskotki">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">7. Piškotki in localStorage (ZEKom-2)</h2>
              <p className="mb-4">Lexora uporablja piškotke in lokalno shrambo (localStorage) za delovanje in izboljšanje uporabniške izkušnje.</p>
              
              <h3 id="kategorije-piskotkov" className="text-lg font-bold text-white mt-6 mb-2">7.1 Kategorije piškotkov</h3>
              <p className="mb-4">Strogo nujni piškotki: potrebni za prijavo in varnost (npr. better-auth.session_token). Nastavijo se brez privolitve. Uporabljamo varnostne atribute (Secure, HttpOnly, SameSite).<br/>
              Piškotki soglasij: shranijo vašo odločitev o privolitvi (sprejeto/zavrnjeno) – nastavljeni so zato, da si sistem zapomni vaše nastavitve.<br/>
              Funkcionalni piškotki: npr. sidebar_state, chat-model, theme. Nastavijo se le, če jih uporabnik izrecno zahteva (npr. z nastavitvijo).<br/>
              Analitični piškotki: npr. PostHog identifikatorji. Nastavimo jih šele po opt‑in privolitvi. Ob preklicu privolitve analitične identifikatorje izbrišemo (npr. posthog.reset()).</p>

              <h3 id="localstorage" className="text-lg font-bold text-white mt-6 mb-2">7.2 localStorage</h3>
              <p className="mb-4">Podatki, shranjeni v localStorage (npr. tema, osnutki), so namenjeni uporabniški izkušnji. Če je v implementaciji predvidena zgolj lokalna hramba, se ti podatki ne prenašajo na strežnik.<br/>
              Več podrobnosti o piškotkih je zapisano v politiki piškotkov.</p>
            </section>

            <section id="upravljanje-privolitve">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">8. Upravljanje privolitve za piškotke</h2>
              <p className="mb-4">Ob prvem obisku se prikaže pasica z možnostmi:<br/>
              Sprejmi vse<br/>
              Zavrni nenujne<br/>
              Nastavitve piškotkov (granularno upravljanje)<br/>
              Privolitev je aktivna (brez vnaprej označenih polj) in brez “cookie wall”.</p>

              <h3 id="evidenca-soglasij" className="text-lg font-bold text-white mt-6 mb-2">8.1 Evidenca soglasij (dokazovanje privolitve – GDPR 7(1))</h3>
              <p className="mb-4">Odločitev zabeležimo v strežniško evidenco (primer SQL):</p>
              <p className="mb-4">sql</p>
              <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm text-neutral-300 mb-4 border border-white/10">
                <code>
{`CREATE TABLE ConsentLog (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NULL,
  categories JSON NOT NULL, -- {"analytics": true/false, "functional": true/false}
  consent_timestamp TIMESTAMP NOT NULL,
  ip_address VARCHAR(45),
  policy_version VARCHAR(10)
);`}
                </code>
              </pre>
              <p className="mb-4">Rok hrambe evidence soglasij: vsaj 3 leta (oziroma dlje, če je potrebno zaradi uveljavljanja/obrambe zahtevkov).</p>
            </section>

            <section id="hranjenje">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">9. Hranjenje podatkov (roki hrambe)</h2>
              <p className="mb-4">Podatke hranimo le toliko časa, kot je potrebno za namen obdelave:</p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4">Podatki</th>
                      <th className="py-3 px-4">Rok hrambe</th>
                      <th className="py-3 px-4">Pravna podlaga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Računi in plačilni zapisi</td>
                      <td className="py-3 px-4">10 let</td>
                      <td className="py-3 px-4">Zakonska obveznost (ZDDV-1, ZGD-1)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Podatki o uporabniških računih</td>
                      <td className="py-3 px-4">Čas obstoja računa + 3 leta</td>
                      <td className="py-3 px-4">Zakoniti interes (OZ – zaščita pred zahtevki po prenehanju)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Revizijske sledi (vpogledi v podatke)</td>
                      <td className="py-3 px-4">2 leti po koncu koledarskega leta</td>
                      <td className="py-3 px-4">Zakonska obveznost (22. člen ZVOP-2)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Varnostni in tehnični logi (napake)</td>
                      <td className="py-3 px-4">1 leto</td>
                      <td className="py-3 px-4">Zakoniti interes (varnost sistema)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Evidenca soglasij za piškotke</td>
                      <td className="py-3 px-4">Vsaj 3 leta</td>
                      <td className="py-3 px-4">Izpolnjevanje dokaznega bremena (7(1). člen GDPR)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Analitični podatki (npr. PostHog)</td>
                      <td className="py-3 px-4">12 mesecev</td>
                      <td className="py-3 px-4">Privolitev (po tem roku anonimizirano)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Osnutki dokumentov v lokalni hrambi</td>
                      <td className="py-3 px-4">Do izbrisa s strani uporabnika</td>
                      <td className="py-3 px-4">Izključna kontrola uporabnika (localStorage)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4">Po izteku roka podatke trajno izbrišemo ali anonimiziramo.</p>
            </section>

            <section id="varnostni-ukrepi">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">10. Varnostni ukrepi</h2>
              <p className="mb-4">Uporabljamo ustrezne tehnične in organizacijske ukrepe, npr.:<br/>
              TLS/HTTPS šifriranje,<br/>
              omejitve dostopa in MFA,<br/>
              varnostne preglede in posodobitve,</p>

              <h3 id="sentry-sanitizacija" className="text-lg font-bold text-white mt-6 mb-2">10.1 Sentry sanitizacija (primer)</h3>
              <p className="mb-4">js</p>
              <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto text-sm text-neutral-300 mb-4 border border-white/10">
                <code>
{`Sentry.init({
 dsn: '[TO BE COMPLETED]',
 beforeSend(event) {
   if (event.request) delete event.request;
   if (event.user) delete event.user;
   return event;
 }
});`}
                </code>
              </pre>
            </section>

            <section id="pravice">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">11. Pravice posameznika</h2>
              <p className="mb-4">Skladno z GDPR imate pravico do:<br/>
              dostopa (čl. 15),<br/>
              popravka (čl. 16),<br/>
              izbrisa (čl. 17),<br/>
              omejitve (čl. 18),<br/>
              prenosljivosti (čl. 20),<br/>
              ugovora (čl. 21),<br/>
              preklica privolitve (kadar je podlaga privolitev).<br/>
              Kontakt: info@lexora.si. Odgovorimo najpozneje v 1 tednu.<br/>
              Pritožba: Informacijski pooblaščenec RS.<br/>
              Če Lexora nastopa kot obdelovalec za vsebine dokumentov/spisov, bomo zahtevo (kjer je to primerno) posredovali upravljavcu.</p>
            </section>

            <section id="dpia">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">12. DPIA in TIA (upravljanje tveganj)</h2>
              <p className="mb-4">Zaradi obdelave občutljivih pravnih vsebin izvajamo oziroma priporočamo:<br/>
              DPIA (presoja vpliva na varstvo podatkov), kadar so izpolnjeni pogoji (npr. obsežna obdelava občutljivih podatkov).<br/>
              TIA (ocena vpliva prenosa) za prenose v tretje države, skladno s Schrems II.</p>
            </section>

            <section id="posodobitve">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">13. Posodobitve politike</h2>
              <p className="mb-4">Politiko lahko posodobimo (npr. zaradi sprememb storitve ali predpisov). Spremembe objavimo z datumom posodobitve; o pomembnih spremembah obvestimo v aplikaciji ali po e‑pošti.</p>
            </section>

            <section id="pravni-viri">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">14. Pravni viri (informativno)</h2>
              <p className="mb-4">GDPR (EU 2016/679) – zlasti čl. 6, 7, 13–21, 32–34<br/>
              ePrivacy direktiva 2002/58/ES, čl. 5(3) in ZEKom-2, 225. člen<br/>
              CJEU Planet49 (C-673/17)<br/>
              EDPB smernice o privolitvi (05/2020)<br/>
              Schrems II (C-311/18)<br/>
              EU SCC (Uredba 2021/914)<br/>
              EU–ZDA Data Privacy Framework (2023)</p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PolitikaZasebnosti;
