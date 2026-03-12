import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolitikaPiskotkov: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">POLITIKA PIŠKOTKOV</h1>
          <div className="text-sm text-neutral-500 mb-12 space-y-1">
            <p>Datum veljavnosti: 18. 02. 2026</p>
            <p>Zadnja posodobitev: 9.3. 2026</p>
          </div>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">VSEBINA</h2>
              <ul className="list-none space-y-2 text-blue-400">
                <li className="flex justify-between"><a href="#povzetek" className="hover:underline">Kratek povzetek v preprostem jeziku</a><span className="text-neutral-500">1</span></li>
                <li className="flex justify-between"><a href="#upravljavec" className="hover:underline">Upravljavec in kontakt</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#kaj-so" className="hover:underline">Kaj so piškotki in podobne tehnologije</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#katere-vrste" className="hover:underline">Katere vrste piškotkov/identifikatorjev uporabljamo</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#kako-upravljate" className="hover:underline">Kako upravljate privolitve</a><span className="text-neutral-500">3</span></li>
                <li className="flex justify-between"><a href="#kateri-se-uporabljajo" className="hover:underline">Kateri piškotki/identifikatorji se uporabljajo</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#tretje-osebe" className="hover:underline">Tretje osebe in prejemniki</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#prenosi" className="hover:underline">Prenosi izven EGP</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#kako-dolgo" className="hover:underline">Kako dolgo trajajo piškotki/identifikatorji</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#spremembe" className="hover:underline">Spremembe politike</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#evidenca" className="hover:underline">Evidenca piškotkov in identifikatorjev</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#tehnicna-izvedba" className="hover:underline">Tehnična izvedba pasice in evidence privolitev</a><span className="text-neutral-500">6</span></li>
                <li className="flex justify-between pl-4"><a href="#kljucne-zahteve" className="hover:underline">Ključne zahteve za banner in nastavitve</a><span className="text-neutral-500">6</span></li>
                <li className="flex justify-between pl-4"><a href="#primer-besedila" className="hover:underline">Primer besedila pasice</a><span className="text-neutral-500">6</span></li>
                <li className="flex justify-between pl-4"><a href="#blokiranje-skript" className="hover:underline">Blokiranje skript pred privolitvijo</a><span className="text-neutral-500">7</span></li>
                <li className="flex justify-between pl-4"><a href="#evidenca-privolitev" className="hover:underline">Evidenca privolitev (consent records) in izvoz</a><span className="text-neutral-500">7</span></li>
                <li className="flex justify-between"><a href="#mermaid-diagram" className="hover:underline">Mermaid diagram toka privolitve</a><span className="text-neutral-500">8</span></li>
                <li className="flex justify-between"><a href="#pravna-utemeljitev" className="hover:underline">Pravna utemeljitev</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between pl-4"><a href="#kaj-zahteva" className="hover:underline">Kaj zahteva ePrivacy in ZEKom‑2</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between pl-4"><a href="#kateri-identifikatorji" className="hover:underline">Kateri identifikatorji običajno zahtevajo privolitev</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between pl-4"><a href="#kako-se-poveze" className="hover:underline">Kako se to poveže z GDPR</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between"><a href="#kakovost-privolitve" className="hover:underline">Kakovost privolitve in “dark patterns” (kaj se izogibati)</a><span className="text-neutral-500">10</span></li>
                <li className="flex justify-between"><a href="#kontrolni-seznam" className="hover:underline">Kontrolni seznam odprtih točk</a><span className="text-neutral-500">10</span></li>
              </ul>
            </section>

            <section id="povzetek">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Kratek povzetek v preprostem jeziku</h2>
              <p className="mb-4">Ko uporabljate Lexoro, moramo v vaš brskalnik ali aplikacijo shraniti nekaj podatkov (npr. za prijavo in varnost). Temu rečemo “piškotki” ali podobne tehnologije (npr. localStorage).<br/>
              Nujne identifikatorje uporabljamo vedno, ker brez njih storitev ne deluje. Za analitiko delovanja (da izboljšamo izdelek) piškotke/identifikatorje uporabimo samo, če nam to dovolite.<br/>
              Svojo izbiro lahko kadarkoli spremenite v Nastavitvah piškotkov.</p>
            </section>

            <section id="upravljavec">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Upravljavec in kontakt</h2>
              <p className="mb-4">Lexora, Anej Žaler s.p., Vojkova cesta 58, 1000 Ljubljana, Slovenija, matična št. 9727990000, davčna št. 39164608<br/>
              E‑pošta za zasebnost: info@lexora.si</p>
            </section>

            <section id="kaj-so">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Kaj so piškotki in podobne tehnologije</h2>
              <p className="mb-4">“Piškotek” je majhna datoteka, ki jo spletna stran shrani v brskalnik. Poleg piškotkov lahko uporabljamo tudi druge tehnologije shranjevanja ali dostopa do podatkov v vaši napravi, npr. localStorage ali podobne identifikatorje (v tem dokumentu vse skupaj imenujemo “piškotki/identifikatorji”).</p>
            </section>

            <section id="katere-vrste">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Katere vrste piškotkov/identifikatorjev uporabljamo</h2>
              <p className="mb-4">Lexora uporablja naslednje kategorije:</p>
              <p className="mb-4">Nujni (strogo potrebni)<br/>
              Omogočajo delovanje storitve: prijava, varnost, upravljanje seje, zaščita pred zlorabami. Te identifikatorje nastavimo vedno.</p>
              <p className="mb-4">Funkcionalni (nastavitve in udobje)<br/>
              Zapomnijo si vaše nastavitve v aplikaciji (npr. izbira AI modela, tema). Brez njih Lexora deluje, vendar si ne zapomni določenih nastavitev ali deluje manj udobno.</p>
              <p className="mb-4">Analitični (produktna analitika)<br/>
              Pomagajo razumeti uporabo funkcij (npr. katere funkcije uporabniki uporabljajo) in izboljšati izdelek. Analitične identifikatorje nastavimo samo po vaši privolitvi.</p>
              <p className="mb-4">Marketinški (oglaševalski)<br/>
              Na dan veljavnosti te politike Lexora ne uporablja marketinških/oglaševalskih piškotkov. Če bi jih kdaj uvedli, bomo politiko posodobili in pridobili ustrezne privolitve.</p>
            </section>

            <section id="kako-upravljate">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Kako upravljate privolitve</h2>
              <p className="mb-4">Ko prvič obiščete Lexoro (spletno stran ali aplikacijo), se prikaže pasica za piškotke, kjer lahko:<br/>
              Sprejmete vse,<br/>
              Zavrnete nenujne,<br/>
              ali izberete Nastavitve (granularno: funkcionalni / analitični).</p>
              <p className="mb-4">Preklic ali sprememba privolitve:<br/>
              Privolitev lahko kadarkoli spremenite ali prekličete prek povezave “Nastavitve piškotkov” v nogi strani ali v nastavitvah aplikacije. Preklic ne vpliva na zakonitost uporabe pred preklicem.</p>
              <p className="mb-4">Nastavitve brskalnika:<br/>
              Piškotke lahko izbrišete ali blokirate tudi v nastavitvah brskalnika. To lahko vpliva na delovanje Lexore (npr. odjava, ponovna prijava).</p>
            </section>

            <section id="kateri-se-uporabljajo">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Kateri piškotki/identifikatorji se uporabljajo</h2>
              <p className="mb-4">Seznam piškotkov/identifikatorjev in njihovih namenov je objavljen v tabeli v nadaljevanju (“Evidenca piškotkov in identifikatorjev”).</p>
            </section>

            <section id="tretje-osebe">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Tretje osebe in prejemniki</h2>
              <p className="mb-4">Nekateri podatki, povezani z analitiko ali infrastrukturo, se lahko prenesejo ponudnikom storitev, ki Lexori pomagajo pri delovanju:<br/>
              ponudnik infrastrukture/gostovanja: (npr. Vercel),<br/>
              ponudnik produktne analitike: PostHog (samo po privolitvi).<br/>
              Podrobnosti o obdelovalcih in prenosih izven EGP so v Politiki zasebnosti</p>
            </section>

            <section id="prenosi">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Prenosi izven EGP</h2>
              <p className="mb-4">Če so prejemniki izven Evropskega gospodarskega prostora (npr. ZDA), Lexora uporablja ustrezne zaščitne mehanizme (npr. standardne pogodbene klavzule). Podrobnosti so v Politiki zasebnosti.</p>
            </section>

            <section id="kako-dolgo">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Kako dolgo trajajo piškotki/identifikatorji</h2>
              <p className="mb-4">Trajanje je navedeno v tabeli. Nekateri identifikatorji trajajo le do konca seje, drugi dlje (npr. nastavitev teme), analitični pa so nastavljeni po konfiguraciji in vaši izbiri.</p>
            </section>

            <section id="spremembe">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Spremembe politike</h2>
              <p className="mb-4">To politiko lahko občasno posodobimo. Ob večjih spremembah vas bomo obvestili na običajen način (npr. v aplikaciji).</p>
            </section>

            <section id="evidenca">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Evidenca piškotkov in identifikatorjev</h2>
              <p className="mb-4">Tabela vsebuje (A) identifikatorje iz vaše Cookie Map in (B) tipične SaaS identifikatorje, kjer natančno ime v produkciji lahko odstopa.</p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4">Ime piškotka/ključa</th>
                      <th className="py-3 px-4">Tehnologija</th>
                      <th className="py-3 px-4">Namen</th>
                      <th className="py-3 px-4">Kategorija</th>
                      <th className="py-3 px-4">Trajanje</th>
                      <th className="py-3 px-4">Ali zahteva privolitev?</th>
                      <th className="py-3 px-4">Tretja oseba / prejemnik</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">better-auth.session_token</td>
                      <td className="py-3 px-4">piškotek ali ekvivalentni identifikator</td>
                      <td className="py-3 px-4">avtenticirana seja (prijava)</td>
                      <td className="py-3 px-4">nujni</td>
                      <td className="py-3 px-4">7 dni</td>
                      <td className="py-3 px-4">ne (nujno za storitev)</td>
                      <td className="py-3 px-4">Lexora; infrastruktura</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">chat-model</td>
                      <td className="py-3 px-4">localStorage</td>
                      <td className="py-3 px-4">zapomnitev izbranega AI modela</td>
                      <td className="py-3 px-4">funkcionalni</td>
                      <td className="py-3 px-4">seja</td>
                      <td className="py-3 px-4">priporočeno da (če se nastavlja brez aktivne izbire); sicer lahko brez, ko uporabnik to izrecno zahteva</td>
                      <td className="py-3 px-4">Lexora</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">theme</td>
                      <td className="py-3 px-4">localStorage</td>
                      <td className="py-3 px-4">zapomnitev teme (dark/light)</td>
                      <td className="py-3 px-4">funkcionalni</td>
                      <td className="py-3 px-4">trajno (do izbrisa)</td>
                      <td className="py-3 px-4">priporočeno da (če se nastavlja brez aktivne izbire); sicer lahko brez, ko uporabnik to izrecno zahteva</td>
                      <td className="py-3 px-4">Lexora</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">PostHog localStorage</td>
                      <td className="py-3 px-4">localStorage</td>
                      <td className="py-3 px-4">produktna analitika uporabe</td>
                      <td className="py-3 px-4">analitični</td>
                      <td className="py-3 px-4">trajno (do izbrisa / po nastavitvah)</td>
                      <td className="py-3 px-4">da</td>
                      <td className="py-3 px-4">PostHog (EU ali ZDA – odvisno od namestitve)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">cookie_consent_state</td>
                      <td className="py-3 px-4">piškotek ali localStorage</td>
                      <td className="py-3 px-4">hramba vaše izbire piškotkov (da pasice ne kažemo vsakič)</td>
                      <td className="py-3 px-4">nujni</td>
                      <td className="py-3 px-4">6–12 mesecev</td>
                      <td className="py-3 px-4">ne</td>
                      <td className="py-3 px-4">Lexora</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">csrf_token</td>
                      <td className="py-3 px-4">piškotek</td>
                      <td className="py-3 px-4">zaščita pred CSRF napadi</td>
                      <td className="py-3 px-4">nujni</td>
                      <td className="py-3 px-4">seja</td>
                      <td className="py-3 px-4">ne</td>
                      <td className="py-3 px-4">Lexora</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">auth_refresh_token</td>
                      <td className="py-3 px-4">piškotek (HttpOnly)</td>
                      <td className="py-3 px-4">ohranjanje prijave (varno osveževanje seje)</td>
                      <td className="py-3 px-4">nujni</td>
                      <td className="py-3 px-4">(npr. 30 dni)</td>
                      <td className="py-3 px-4">ne</td>
                      <td className="py-3 px-4">Lexora</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">feature_flag / onboarding_state</td>
                      <td className="py-3 px-4">localStorage</td>
                      <td className="py-3 px-4">delovanje izbranih funkcij / onboarding stanje</td>
                      <td className="py-3 px-4">funkcionalni</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">odvisno (če ni strogo nujno)</td>
                      <td className="py-3 px-4">Lexora</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">analytics_distinct_id</td>
                      <td className="py-3 px-4">localStorage/piškotek</td>
                      <td className="py-3 px-4">anon. ali psevdo‑ID za analitiko</td>
                      <td className="py-3 px-4">analitični</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">da</td>
                      <td className="py-3 px-4">PostHog</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="tehnicna-izvedba">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Tehnična izvedba pasice in evidence privolitev</h2>
              <p className="mb-4">Spodaj je praktičen checklist za engineering ekipo, da bo implementacija skladna z ZEKom‑2/ePrivacy in GDPR (dokazljivost privolitev, blokiranje pred privolitvijo, umik).</p>
              
              <h3 id="kljucne-zahteve" className="text-lg font-bold text-white mt-6 mb-2">Ključne zahteve za banner in nastavitve</h3>
              <p className="mb-4">Pasica se prikaže ob prvem obisku ali po poteku veljavnosti izbire; nenujni identifikatorji se ne nastavljajo pred izbiro.<br/>
              Izbire morajo biti granularne (ločeno: nujni / funkcionalni / analitika / marketing).<br/>
              Ne uporabljajte vnaprej označenih (pre‑ticked) izbir; “scroll = consent” ni veljavno.<br/>
              “Zavrni nenujne” mora biti prava možnost (brez cookie wall): storitev ne sme biti pogojena z nenujnim sledenjem.<br/>
              Umik mora biti enako enostaven kot podaja (npr. isti UI v aplikaciji/na strani).</p>

              <h3 id="primer-besedila" className="text-lg font-bold text-white mt-6 mb-2">Primer besedila pasice</h3>
              <p className="mb-4">Kratek tekst:<br/>
              “Lexora uporablja nujne piškotke za delovanje storitve. Za analitiko in izboljšave uporabljamo dodatne identifikatorje samo z vašim dovoljenjem. Izbiro lahko kadarkoli spremenite v Nastavitvah piškotkov.”<br/>
              Gumbi:<br/>
              “Sprejmi vse”<br/>
              “Zavrni nenujne”<br/>
              “Nastavitve”</p>

              <h3 id="blokiranje-skript" className="text-lg font-bold text-white mt-6 mb-2">Blokiranje skript pred privolitvijo</h3>
              <p className="mb-4">PostHog SDK/script in povezani localStorage ključi naj se inicializirajo šele po opt‑in. (To je neposredna posledica pravila o predhodni privolitvi za dostop/shranjevanje na terminalski opremi.)<br/>
              Funkcionalni ključi (npr. theme, chat-model) naj se:<br/>
              ali nastavijo šele po aktivni izbiri uporabnika (in se utemeljijo kot “storitev, ki jo uporabnik izrecno zahteva”),<br/>
              ali vključijo pod “Funkcionalni” toggle in se blokirajo do privolitve.</p>

              <h3 id="evidenca-privolitev" className="text-lg font-bold text-white mt-6 mb-2">Evidenca privolitev (consent records) in izvoz</h3>
              <p className="mb-4">Za dokazljivost privolitev (audit-ready) hranite najmanj:<br/>
              časovni žig, izbrane kategorije, verzijo politike/besedila, način (banner/nastavitve), “consent_id” (psevdo identifikator), ter dokaz, da privolitev ni bila predizbrana; upravljavec mora biti sposoben dokazati privolitev.<br/>
              možnost izvoza evidenc (CSV/JSON) za revizijo in inšpekcijski nadzor (ter notranjo sledljivost).</p>
            </section>

            <section id="mermaid-diagram">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Mermaid diagram toka privolitve</h2>
            </section>

            <section id="pravna-utemeljitev">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Pravna utemeljitev</h2>
              
              <h3 id="kaj-zahteva" className="text-lg font-bold text-white mt-6 mb-2">Kaj zahteva ePrivacy in ZEKom‑2</h3>
              <p className="mb-4">ePrivacy Direktiva 2002/58/ES, 5(3) določa, da je shranjevanje ali dostop do informacij v terminalski opremi uporabnika dovoljeno le, če je uporabnik ustrezno obveščen in ima možnost zavrnitve, pri čemer obstajajo izjeme za prenos komunikacije ali storitev, ki jo uporabnik izrecno zahteva.<br/>
              V Sloveniji to pravilo implementira ZEKom‑2, 225. člen, ki izrecno zahteva privolitev po predhodnem jasnem in izčrpnem obvestilu, z izjemama (prenos sporočila; nujno potrebno za storitev, ki jo uporabnik izrecno zahteva). Nadzor nad tem členom izvaja Informacijski pooblaščenec.<br/>
              Smernice EDPB glede tehničnega obsega 5(3) pojasnjujejo, da se pravilo nanaša na “informacije” (širše od osebnih podatkov) in pokriva tudi “podobne tehnologije” in različne use case (npr. lokalna obdelava, unikatni identifikatorji).</p>
              
              <h3 id="kateri-identifikatorji" className="text-lg font-bold text-white mt-6 mb-2">Kateri identifikatorji običajno zahtevajo privolitev</h3>
              <p className="mb-4">Praktično (konzervativno skladno) razmejitev za Lexora:<br/>
              Nujni (brez privolitve): sejni/avtentikacijski piškotki, varnostni/CSRF piškotki, piškotek za hrambo izbire privolitve, če je potreben za spoštovanje uporabnikove odločitve. To se utemeljuje z izjemo “nujno potrebno za storitev” iz ZEKom‑2 225(2).<br/>
              Funkcionalni (odvisno, priporočeno opt‑in): trajne nastavitve (tema, izbira modela) – če se nastavljajo pred aktivno izbiro uporabnika, je varneje uporabiti privolitev. Če se nastavijo šele po izbiri uporabnika, se lahko utemeljijo kot nujni za storitev, ki jo uporabnik izrecno zahteva.<br/>
              Analitični (privolitev): PostHog localStorage in analitika uporabe. Privolitev mora biti aktivna, brez pre‑ticked izbir, brez pogojevanja dostopa (“cookie wall”).</p>

              <h3 id="kako-se-poveze" className="text-lg font-bold text-white mt-6 mb-2">Kako se to poveže z GDPR</h3>
              <p className="mb-4">Ko piškotki/identifikatorji vodijo do obdelave osebnih podatkov (npr. IP, user ID, dogodki uporabe), mora obdelava imeti pravno podlago po GDPR 6. členu.<br/>
              Pri analitiki, kjer ZEKom‑2/ePrivacy zahteva privolitev za namestitev/dostop, je v praksi najbolj dosledno uporabiti tudi GDPR 6(1)(a) privolitev za nadaljnjo analitiko. Pri tem je treba voditi evidenco privolitev in omogočiti umik.<br/>
              Pri nujnih piškotkih (prijava, varnost) se GDPR pravna podlaga običajno utemeljuje z izvajanjem pogodbe (6(1)(b)) ali zakonitim interesom (6(1)(f)) za varnost in integriteto storitve, vendar to ne nadomesti ePrivacy/ZEKom‑2 pravil za samo shranjevanje/dostop v terminalski opremi.</p>
            </section>

            <section id="kakovost-privolitve">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Kakovost privolitve in “dark patterns” (kaj se izogibati)</h2>
              <p className="mb-4">Pre‑ticked polja in opt‑out konstrukcije niso veljavna privolitev.<br/>
              “Soglašate z nadaljnjo uporabo/scrollanjem” ni veljavno.<br/>
              Dostop do storitve ne sme biti pogojen s privolitvijo v nenujne identifikatorje (cookie walls).<br/>
              Umik mora biti enostaven in brez poslabšanja storitve zaradi samega umika (razen funkcionalnih posledic, npr. nehranjenje nastavitev).</p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PolitikaPiskotkov;
