import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PogojiUporabe: React.FC = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-blue-500/30">
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Nazaj na prvo stran
          </Link>
          <nav className="flex items-center gap-2">
            <Link to="/pogoji-uporabe" className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${location.pathname === '/pogoji-uporabe' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
              Pogoji uporabe
            </Link>
            <Link to="/politika-zasebnosti" className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${location.pathname === '/politika-zasebnosti' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
              Politika zasebnosti
            </Link>
            <Link to="/politika-piskotkov" className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${location.pathname === '/politika-piskotkov' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
              Politika piškotkov
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Pogoji uporabe</h1>
          <div className="text-sm text-neutral-500 mb-12 space-y-1">
            <p>Velja od: 18. 02. 2026</p>
            <p>Zadnja posodobitev: 9. 3. 2026</p>
          </div>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-white mb-4">Vsebina</h2>
              <ul className="list-none space-y-2 text-blue-400">
                <li className="flex justify-between"><a href="#" className="hover:underline">Pogoji uporabe</a><span className="text-neutral-500">1</span></li>
                <li className="flex justify-between"><a href="#uvod" className="hover:underline">1. Uvod, stranki in sklenitev pogodbe</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#definicije" className="hover:underline">2. Definicije</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#predmet" className="hover:underline">3. Predmet in obseg storitve</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#registracija" className="hover:underline">4. Registracija, račun in varnost računa</a><span className="text-neutral-500">2</span></li>
                <li className="flex justify-between"><a href="#pravila" className="hover:underline">5. Pravila uporabe, dopustne in prepovedane rabe</a><span className="text-neutral-500">3</span></li>
                <li className="flex justify-between"><a href="#ai-dolocbe" className="hover:underline">6. AI‑specifične določbe</a><span className="text-neutral-500">4</span></li>
                <li className="flex justify-between"><a href="#intelektualna-lastnina" className="hover:underline">7. Intelektualna lastnina</a><span className="text-neutral-500">5</span></li>
                <li className="flex justify-between"><a href="#zaupnost" className="hover:underline">8. Zaupnost in varovanje zaupnih informacij</a><span className="text-neutral-500">6</span></li>
                <li className="flex justify-between"><a href="#varstvo-podatkov" className="hover:underline">9. Varstvo osebnih podatkov in vloge (GDPR)</a><span className="text-neutral-500">7</span></li>
                <li className="flex justify-between"><a href="#piskotki" className="hover:underline">10. Piškotki in podobne tehnologije</a><span className="text-neutral-500">8</span></li>
                <li className="flex justify-between"><a href="#integracije" className="hover:underline">11. Integracije in storitve tretjih oseb</a><span className="text-neutral-500">8</span></li>
                <li className="flex justify-between"><a href="#razpolozljivost" className="hover:underline">12. Razpoložljivost, vzdrževanje, varnostne kopije in podpora</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between"><a href="#narocnina" className="hover:underline">13. Naročnina, obračun, davki, zamude, vračila</a><span className="text-neutral-500">9</span></li>
                <li className="flex justify-between"><a href="#preizkusna-uporaba" className="hover:underline">14. Preizkusna uporaba in brezplačni nivo</a><span className="text-neutral-500">10</span></li>
                <li className="flex justify-between"><a href="#omejitev" className="hover:underline">15. Začasna omejitev, suspenz in prenehanje</a><span className="text-neutral-500">10</span></li>
                <li className="flex justify-between"><a href="#jamstva" className="hover:underline">16. Izjave in jamstva; zavrnitve jamstev</a><span className="text-neutral-500">11</span></li>
                <li className="flex justify-between"><a href="#odgovornost" className="hover:underline">17. Odgovornost, omejitve, odškodnine</a><span className="text-neutral-500">11</span></li>
                <li className="flex justify-between"><a href="#skladnost" className="hover:underline">18. Skladnost, izvozna pravila in sankcije</a><span className="text-neutral-500">12</span></li>
                <li className="flex justify-between"><a href="#spremembe" className="hover:underline">19. Spremembe Pogojev</a><span className="text-neutral-500">12</span></li>
                <li className="flex justify-between"><a href="#obvestila" className="hover:underline">20. Obvestila</a><span className="text-neutral-500">12</span></li>
                <li className="flex justify-between"><a href="#prenos" className="hover:underline">21. Prenos pravic in obveznosti</a><span className="text-neutral-500">13</span></li>
                <li className="flex justify-between"><a href="#nicnost" className="hover:underline">22. Ničnost posameznih določb</a><span className="text-neutral-500">13</span></li>
                <li className="flex justify-between"><a href="#celovit-dogovor" className="hover:underline">23. Celovit dogovor</a><span className="text-neutral-500">13</span></li>
                <li className="flex justify-between"><a href="#pravo" className="hover:underline">24. Pravo in pristojnost</a><span className="text-neutral-500">13</span></li>
                <li className="flex justify-between pt-4"><a href="#priloga-1" className="hover:underline">Priloga 1: Slovar definicij</a><span className="text-neutral-500">14</span></li>
                <li className="flex justify-between"><a href="#priloga-2" className="hover:underline">Priloga 2: Cenik</a><span className="text-neutral-500">14</span></li>
                <li className="flex justify-between"><a href="#povzetek" className="hover:underline">Povzetek v razumljivem jeziku</a><span className="text-neutral-500">15</span></li>
              </ul>
            </section>

            <section id="uvod">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">1. Uvod, stranki in sklenitev pogodbe</h2>
              <p className="mb-4">1.1. Ti Pogoji uporabe (»Pogoji«) urejajo uporabo storitve Lexora, ki jo zagotavlja <strong>Anej Žaler s.p.</strong>, Vojkova cesta 58, 1000 Ljubljana, Slovenija, matična št. 9727990000, davčna št. 39164608, ki ni zavezanec za DDV v skladu z 94. členom Zakona o davku na dodano vrednost (ZDDV-1) (v nadaljevanju: »Ponudnik«).</p>
              <p className="mb-4">1.2. Uporabnik je lahko:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>(a) fizična oseba, ki uporablja storitev v svojem imenu, ali</li>
                <li>(b) pravna oseba ali drug subjekt, v imenu katerega deluje pooblaščena oseba (»Stranka«).</li>
              </ul>
              <p className="mb-4">Kadar Uporabnik deluje v imenu Stranke, Uporabnik jamči, da je pooblaščen zavezati Stranko. V takem primeru se šteje, da je pogodba sklenjena med Ponudnikom in Stranko.</p>
              <p className="mb-4">1.3. Pogodba se sklene, ko Uporabnik: (i) označi sprejem Pogojev ob registraciji ali naročilu; ali (ii) uporabi storitev na način, ki objektivno pomeni sprejem Pogojev (npr. prijava v račun). Če Stranka sklene ločen pisni dogovor s Ponudnikom (npr. enterprise pogodbo), ima ta prednost pred temi Pogoji v obsegu neskladja.</p>
            </section>

            <section id="definicije">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">2. Definicije</h2>
              <p className="mb-4">2.1. Posamezni izrazi v teh Pogojih imajo pomen, določen v Prilogi 1 (Slovar definicij), razen če iz konteksta izhaja drugače.</p>
            </section>

            <section id="predmet">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">3. Predmet in obseg storitve</h2>
              <p className="mb-4">3.1. Lexora je SaaS storitev, ki lahko vključuje funkcionalnosti kot so: (i) upravljanje pravnih dokumentov, (ii) iskanje in povzemanje vsebin, (iii) predlogi klavzul, (iv) primerjalne analize, (v) pomoč pri pripravi osnutkov besedil in (vi) druge funkcije, opisane v dokumentaciji, uporabniškem vmesniku ali naročniškem paketu (»Storitev«).</p>
              <p className="mb-4">3.2. Ponudnik lahko kadarkoli posodobi, spremeni ali ukine posamezne funkcionalnosti, če o tem razumno obvesti Uporabnike in če sprememba ne odvzame bistvene koristi naročnine brez ustreznega prilagoditvenega ukrepa (npr. sorazmerni servisni kredit ali možnost odpovedi ob koncu obračunskega obdobja), razen če zakon določa drugače.</p>
            </section>

            <section id="registracija">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">4. Registracija, račun in varnost računa</h2>
              <p className="mb-4">4.1. Za uporabo določenih delov storitve je potrebna registracija in ustvarjanje računa (»Račun«).</p>
              <p className="mb-4">4.2. Uporabnik je dolžan posredovati točne in ažurne podatke ter skrbeti za zaupnost prijavnih podatkov.</p>
              <p className="mb-4">4.3. Uporabnik je odgovoren za vse aktivnosti v Računu, razen če dokaže, da je do zlorabe prišlo izključno zaradi kršitve varnostnih obveznosti Ponudnika.</p>
              <p className="mb-4">4.4. Ponudnik lahko uvede ali zahteva dodatne varnostne ukrepe (npr. 2FA) za določene naročniške pakete ali profile tveganja.</p>
            </section>

            <section id="pravila">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">5. Pravila uporabe, dopustne in prepovedane rabe</h2>
              <p className="mb-4">5.1. Uporabnik sme storitev uporabljati izključno v skladu s temi Pogoji, veljavno zakonodajo in namenom storitve.</p>
              <p className="mb-4">5.2. Prepovedana je uporaba, ki:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>(a) krši zakon ali pravice tretjih oseb (vključno z intelektualno lastnino);</li>
                <li>(b) vključuje poskus nepooblaščenega dostopa, motenje delovanja, »scraping« v nasprotju z dokumentiranimi omejitvami, ali testiranje ranljivosti brez pisnega soglasja Ponudnika;</li>
                <li>(c) vključuje nalaganje ali obdelavo škodljive kode;</li>
                <li>(d) uporablja storitev za razvoj ali učenje konkurenčnih modelov ali storitev, razen če je izrecno dovoljeno;</li>
                <li>(e) povzroča nesorazmerno obremenitev infrastrukture (npr. masovni avtomatizirani pozivi) v nasprotju z omejitvami paketa;</li>
                <li>(f) Uporabnik ne sme uporabljati storitve za opravljanje pravnega svetovanja ali zastopanja, če za to nima potrebne poklicne licence/pooblastil po veljavni zakonodaji. Ta določba ne omejuje uporabe storitve s strani odvetnikov in drugih pooblaščenih pravnih strokovnjakov pri izvajanju njihove poklicne dejavnosti.</li>
              </ul>
              <p className="mb-4">5.3. Ponudnik lahko uvede razumna tehnična in organizacijska sredstva za preprečevanje zlorab (npr. rate limiting, zaznavanje anomalij).</p>
            </section>

            <section id="ai-dolocbe">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">6. AI‑specifične določbe</h2>
              <p className="mb-4">6.1. Odsotnost odvetniško-strankarskega razmerja in zaupnost. <br/>
              Uporaba storitve Lexora ne vzpostavlja odvetniško-strankarskega razmerja med Ponudnikom in Naročnikom ali njegovimi Uporabniki. Ponudnik ne izvaja odvetniških storitev, ne nudi pravnega svetovanja in ne nadomešča pravne presoje usposobljenega strokovnjaka.<br/>
              Čeprav se Ponudnik s temi Pogoji in pripadajočim Dogovorom o obdelavi podatkov (DPA) zavezuje k strogi zaupnosti vseh naloženih informacij ter izvaja napredne tehnične in organizacijske ukrepe za varovanje podatkov, Uporabnik potrjuje, da:</p>
              <p className="mb-4">Ponudnik ne nastopa kot odvetniški pomočnik ali pooblaščenec v smislu zakonsko varovane poklicne skrivnosti, kot jo določajo predpisi o odvetništvu;<br/>
              je zaupnost razmerja med Ponudnikom in Naročnikom primarno urejena s temi Pogoji, DPA in morebitnimi drugimi pogodbami o zaupnosti;<br/>
              je Uporabnik (odvetnik ali drug pravni strokovnjak) izključno odgovoren za preverjanje, ali uporaba zunanjih AI orodij za obdelavo podatkov njegovih strank v celoti ustreza njegovim poklicnim, etičnim in pogodbenim obveznostim (npr. Kodeks odvetniške poklicne etike).</p>
              <p className="mb-4">Uporabnik ne sme nalagati dokumentov ali informacij, če bi takšna uporaba zunanjih oblačnih storitev kršila njegova interna pravila, poklicne standarde ali izrecna navodila njegovih strank.</p>
              <p className="mb-4">6.2. Dolžnost preverjanja.<br/>Uporabnik je dolžan pred uporabo ali zanašanjem na rezultate AI funkcij (»Izhod AI«) izvesti preverjanje točnosti, popolnosti, aktualnosti in primernosti za konkretni primer, vključno s preverjanjem citatov, sklicev in pravnih posledic.</p>
              <p className="mb-4">6.3. Omejitve AI.<br/>Uporabnik razume in sprejema, da lahko Izhod AI vsebuje napake, pristranskosti, nepopolnosti ali neustrezne posplošitve ter da se lahko podobni izhodi pojavijo tudi pri drugih uporabnikih (»ne‑ekskluzivnost«).</p>
              <p className="mb-4">6.4. Politika učenja modelov (privzeto: brez učenja na Podatkih stranke).<br/>Privzeto Ponudnik ne uporablja Podatkov stranke (kot so opredeljeni spodaj) za (i) učenje temeljnih (foundation) modelov, (ii) učenje modelov tretjih oseb, ali (iii) javno/široko ponovno uporabo za splošne namene, razen če je to nujno potrebno za zagotavljanje storitve (npr. začasna obdelava za generiranje odgovora).</p>
              <p className="mb-4">6.5. Opcijski opt‑in za izboljšave (priporočeno besedilo).<br/>Če Ponudnik ponudi program izboljšav, lahko Stranka ločeno in prostovoljno omogoči uporabo določenih podatkov za izboljšanje storitve. V tem primeru velja:</p>
              <p className="mb-4">(a) Opt‑in se izvede preko ločene, izrecne izbire (npr. ločena nastavitev ali potrditveno polje), ki ni pogoj za osnovno delovanje storitve;<br/>
              (b) Obseg podatkov, namen in rok hrambe so opisani v času opt‑ina;<br/>
              (c) Stranka lahko opt‑in kadarkoli prekliče, preklic pa učinkuje za naprej;<br/>
              (d) Ponudnik bo, kjer je razumno izvedljivo, uporabil minimizacijo in/ali psevdonimizacijo;<br/>
              (e) Podatki, ki so označeni kot »posebej zaupni« ali »privilegirani«, so iz opt‑ina izključeni, če Stranka tako nastavi ali če Ponudnik ponudi takšno možnost.</p>
              <p className="mb-4">Predlagana klavzula za UI (vstavite v UI/pop‑up):<br/>»Soglašam, da lahko Lexora uporabi izbrane interakcije in dokumente (v psevdonimizirani ali agregirani obliki, kjer je to izvedljivo) za izboljšanje kakovosti storitve. Razumem, da lahko soglasje kadarkoli prekličem v nastavitvah. (Ne velja za nujne obdelave za zagotavljanje storitve.)«</p>
              <p className="mb-4">6.6. Uporabnikova jamstva pri vsebini.<br/>Uporabnik jamči, da ima za nalaganje in obdelavo dokumentov ter drugih vsebin v storitvi (i) vsa potrebna upravičenja in (ii) ustrezne pravne podlage, vključno z morebitnimi dovoljenji za obdelavo osebnih podatkov.</p>
            </section>

            <section id="intelektualna-lastnina">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">7. Intelektualna lastnina</h2>
              <p className="mb-4">7.1. Pravice Ponudnika.<br/>Ponudnik (in/ali njegovi licencodajalci) ohranja vse pravice intelektualne lastnine na storitvi, programski opremi, dokumentaciji, blagovnih znamkah, UI/UX elementih ter na vseh izboljšavah in izpeljankah.</p>
              <p className="mb-4">7.2. Licenca Uporabniku.<br/>Ponudnik podeli Uporabniku ne‑izključno, neprenosljivo, časovno omejeno licenco za uporabo storitve v skladu z izbranim naročniškim paketom in temi Pogoji.</p>
              <p className="mb-4">7.3. Vsebina Stranke.<br/>Stranka ohrani lastništvo nad dokumenti, datotekami, besedili in drugimi podatki, ki jih naloži ali vnese v storitev (»Podatki stranke«). Stranka Ponudniku podeli omejeno licenco za obdelavo Podatkov stranke izključno za: (i) zagotavljanje storitve, (ii) varnost, preprečevanje zlorab, (iii) podporo, (iv) skladnost in izpolnjevanje zakonskih obveznosti, ter (v) druge namene, ki jih Stranka izrecno odobri (npr. opt‑in iz 6.5).</p>
              <p className="mb-4">7.4. Izhod AI.<br/>Če ni drugače dogovorjeno, Stranka lahko uporablja Izhod AI za svoje interne in poslovne namene. Ponudnik ne jamči, da Izhod AI ne posega v pravice tretjih ali da je primeren za registracijo pravic (npr. avtorske pravice) v posamezni jurisdikciji.</p>
            </section>

            <section id="zaupnost">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">8. Zaupnost in varovanje zaupnih informacij</h2>
              <p className="mb-4">8.1. Vsaka stranka (»Prejemnik«) bo varovala zaupne informacije druge stranke (»Razkritelj«) z najmanj enako skrbnostjo, kot varuje lastne zaupne informacije podobne narave, vendar ne manj kot z razumno skrbnostjo.</p>
              <p className="mb-4">8.2. »Zaupne informacije« vključujejo zlasti: Podatke stranke, poslovne informacije, tehnične informacije, varnostne postopke, cenike (če niso javni), osnutke dokumentov, rezultate analitik ter vse informacije, označene kot zaupne ali ki bi po naravi morale biti zaupne.</p>
              <p className="mb-4">8.3. Izjeme: informacije niso zaupne, če so bile zakonito znane, javno dostopne brez kršitve, ali pridobljene zakonito od tretje osebe brez obveznosti zaupnosti.</p>
              <p className="mb-4">8.4. Razkritje po zakonu: Prejemnik sme razkriti zaupne informacije, če to zahteva zakon ali odločba pristojnega organa, vendar mora (če je dovoljeno) Razkritelja predhodno obvestiti in omejiti razkritje na nujni obseg.</p>
            </section>

            <section id="varstvo-podatkov">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">9. Varstvo osebnih podatkov in vloge (GDPR)</h2>
              <p className="mb-4">9.1. Sklic na Politiko zasebnosti.<br/>Obdelava osebnih podatkov v povezavi s storitvijo je podrobneje opisana v Politiki zasebnosti. Če pride do neskladja med temi Pogoji in Politiko zasebnosti glede obdelave osebnih podatkov, prevlada Politika zasebnosti.</p>
              <p className="mb-4">9.2. Vloge upravljavec/obdelovalec (B2B tipično).<br/>Stranka praviloma nastopa kot upravljavec Podatkov stranke, Ponudnik pa kot obdelovalec. Stranki razumeta, da vloga izhaja iz dejanskega namena in sredstev obdelave ter ni zgolj stvar pogodbenega poimenovanja.</p>
              <p className="mb-4">9.3. DPA (pogodba o obdelavi osebnih podatkov).<br/>Če Ponudnik obdeluje osebne podatke v imenu Stranke, se stranki zavezujeta skleniti ali šteti za sklenjeno pogodbo o obdelavi osebnih podatkov (»DPA«), ki predstavlja sestavni del pogodbenega razmerja. DPA ureja vsaj: predmet in trajanje obdelave, naravo in namen obdelave, vrste osebnih podatkov, kategorije posameznikov, obveznosti in pravice Stranke, pod‑obdelovalce, varnostne ukrepe, pomoč pri pravicah posameznikov, ravnanje ob kršitvah ter vračilo/brisanje po prenehanju.</p>
              <p className="mb-4">9.4. Evidence dejavnosti obdelave (ROPA).<br/>Vsaka stranka vodi evidence dejavnosti obdelave, kadar in v obsegu, kot to zahteva GDPR (upravljavec in/ali obdelovalec).</p>
              <p className="mb-4">9.5. Varnost obdelave.<br/>Ponudnik izvaja ustrezne tehnične in organizacijske ukrepe za varovanje osebnih podatkov in zaupnih informacij ter, kjer je relevantno, zagotavlja, da so osebe, ki obdelujejo podatke, zavezane zaupnosti.</p>
              <p className="mb-4">9.6. Prenosi v tretje države.<br/>Če Ponudnik ali njegovi pod‑obdelovalci izvajajo prenose osebnih podatkov izven EGP, se prenosi izvajajo skladno z GDPR mehanizmi (npr. ustrezni zaščitni ukrepi).</p>
              <p className="mb-4">9.7. Hramba in izbris.<br/>Specifični roki hrambe so opredeljeni v Politiki zasebnosti in/ali DPA ter v Prilogi 3 (Politika hrambe), če je uporabljena. V odsotnosti dogovora velja, da Ponudnik hrani Podatke stranke v času trajanja naročnine in v razumnem obdobju po prenehanju za potrebe izvoza, obračuna, reševanja sporov in varnostnih kopij (glej 15.6).</p>
            </section>

            <section id="piskotki">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">10. Piškotki in podobne tehnologije</h2>
              <p className="mb-4">10.1. Sklic na Politiko piškotkov.<br/>Podrobnosti o piškotkih in podobnih tehnologijah so opisane v Politiki piškotkov.</p>
              <p className="mb-4">10.2. Privolitev in izjeme.<br/>Kadar je za shranjevanje ali dostop do informacij na terminalski opremi potrebna privolitev, Ponudnik uporablja mehanizem privolitve (cookie banner/center nastavitve), ki omogoča (i) informirano izbiro ter (ii) zavrnitev nenujnih piškotkov. Nujni piškotki so lahko nameščeni brez privolitve, kadar so potrebni za prenos komunikacije ali za storitev, ki jo uporabnik izrecno zahteva.</p>
              <p className="mb-4">10.3. Nadzor.<br/>Uporabnik razume, da nadzor nad izvajanjem pravil o piškotkih v relevantnem delu slovenskega prava izvaja Informacijski pooblaščenec.</p>
            </section>

            <section id="integracije">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">11. Integracije in storitve tretjih oseb</h2>
              <p className="mb-4">11.1. Storitev lahko vključuje ali omogoča integracije s storitvami tretjih oseb (npr. ponudniki gostovanja, analitike, e‑pošte, identitetnih storitev, plačilni procesorji, modeli AI) (»Integracije«).</p>
              <p className="mb-4">11.2. Ponudnik ne odgovarja za razpoložljivost, pravilnost ali skladnost storitev tretjih oseb, razen v obsegu, v katerem Ponudnik izrecno prevzame takšno odgovornost v pisnem dogovoru.</p>
              <p className="mb-4">11.3. Uporabnik je dolžan upoštevati pogoje tretjih oseb, kadar uporablja Integracije, če je to relevantno.</p>
            </section>

            <section id="razpolozljivost">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">12. Razpoložljivost, vzdrževanje, varnostne kopije in podpora</h2>
              <p className="mb-4">12.1. Razpoložljivost (SLA).<br/>Cilji razpoložljivosti storitve so opredeljeni v Prilogi 2 (SLA). Če SLA ni dogovorjen, Ponudnik si prizadeva za komercialno razumno razpoložljivost, pri čemer se izpadi lahko pojavijo zaradi vzdrževanja, posodobitev, višje sile ali težav tretjih oseb.</p>
              <p className="mb-4">12.2. Vzdrževanje.<br/>Ponudnik lahko izvaja načrtovano vzdrževanje. Kadar je razumno izvedljivo, Ponudnik o načrtovanih izpadih obvesti vnaprej.</p>
              <p className="mb-4">12.3. Varnostne kopije.<br/>Ponudnik lahko izvaja varnostno kopiranje podatkov v skladu s svojo politiko varnosti in hrambe. Varnostne kopije niso namenjene kot primarni način arhiviranja za Stranko; Stranka je dolžna vzdrževati lastne kopije kritičnih dokumentov, če tako zahteva njena politika skladnosti.</p>
            </section>

            <section id="narocnina">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">13. Naročnina, obračun, davki, zamude, vračila</h2>
              <p className="mb-4">13.1. Naročnina.<br/>Storitev se praviloma nudi v naročniškem modelu (mesečno ali letno) glede na izbrani paket.</p>
              <p className="mb-4">13.2. Obračun in plačilo.<br/>Stranka plačuje naročnino vnaprej, razen če je dogovorjeno drugače. Plačilni pogoji, datum zapadlosti in način obračuna so opredeljeni na računu ali naročilu.</p>
              <p className="mb-4">13.3. Davki.<br/>Vse cene so brez DDV, razen če je izrecno navedeno drugače. Stranka je odgovorna za davke, dajatve ali druge obveznosti, ki izhajajo iz naročila, razen davkov na dohodek Ponudnika.</p>
            </section>

            <section id="preizkusna-uporaba">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">14. Preizkusna uporaba in brezplačni nivo</h2>
              <p className="mb-4">14.1. Ponudnik lahko ponudi brezplačni preizkus (»Trial«) ali brezplačni paket (»Free« - samo po dogovoru) z omejitvami (npr. število dokumentov, obseg pozivov AI, integracije, podpora). Brezplačni preizkus pripada vsakemu uporabniku ob prvi registraciji - traja en teden.</p>
              <p className="mb-4">14.2. Ponudnik lahko kadarkoli spremeni ali ukine Trial/Free ponudbo, pri čemer že aktivni triali praviloma veljajo do izteka navedenega obdobja, razen v primeru zlorabe ali varnostnega incidenta.</p>
            </section>

            <section id="omejitev">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">15. Začasna omejitev, suspenz in prenehanje</h2>
              <p className="mb-4">15.1. Suspenz (začasna omejitev).<br/>Ponudnik lahko začasno omeji dostop do storitve, če: (i) Uporabnik krši Pogoje, (ii) obstaja utemeljen sum zlorabe ali varnostnega incidenta, (iii) je to potrebno za skladnost z zakonom ali odločbo organa, ali (iv) obstaja neplačilo.</p>
              <p className="mb-4">15.2. Prenehanje zaradi kršitve (odpoved iz razloga).<br/>Vsaka stranka lahko odpove pogodbo z učinkom takoj, če druga stranka bistveno krši Pogoje in kršitve ne odpravi v razumnem roku po pisnem pozivu (razen če kršitve po naravi ni mogoče odpraviti ali če gre za ponavljajoče kršitve).</p>
              <p className="mb-4">15.3. Prenehanje iz poslovnega razloga (za udobje).<br/>Stranka lahko odpove naročnino z učinkom ob koncu obračunskega obdobja, skladno s pravili v naročilu. Ponudnik lahko odpove z razumnim odpovednim rokom (npr. 30 dni), če ukinja storitev ali bistveno spreminja poslovni model; v takem primeru zagotovi razumno možnost izvoza podatkov.</p>
              <p className="mb-4">15.4. Učinki prenehanja.<br/>Ob prenehanju: (i) preneha pravica do uporabe storitve, (ii) zapadejo odprte obveznosti plačila, (iii) ostanejo v veljavi določbe, ki po naravi preživijo (npr. zaupnost, IP, omejitve odgovornosti).</p>
              <p className="mb-4">15.5. Izvoz podatkov.<br/>Ponudnik omogoči Stranki izvoz Podatkov stranke v razumnem, tehnično izvedljivem formatu v roku 7 dni dni po prenehanju, pod pogojem, da Stranka nima zapadlih neplačanih obveznosti.</p>
              <p className="mb-4">15.6. Izbris podatkov in varnostne kopije.<br/>Ponudnik izbriše ali anonimizira Podatke stranke iz aktivnih sistemov na podlagi izrecne zahteve Stranke oziroma v skladu z veljavno Politiko hrambe podatkov in DPA.</p>
              <p className="mb-4">Ponudnik ni dolžan samodejno izbrisati Podatkov stranke takoj ob prenehanju Pogodbe, razen če to zahteva veljavna zakonodaja ali izrecen pisni dogovor med Strankama.</p>
              <p className="mb-4">Podatki, ki se nahajajo v varnostnih kopijah (backupih), se izbrišejo ali trajno prepišejo ob rednem ciklu rotacije varnostnih kopij. V tem obdobju se podatki ne uporabljajo za noben drug namen kot za zagotavljanje varnostne integritete sistema.</p>
            </section>

            <section id="jamstva">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">16. Izjave in jamstva; zavrnitve jamstev</h2>
              <p className="mb-4">16.1. Storitev se nudi »takšna kot je« in »kot je na voljo«, razen če je izrecno drugače dogovorjeno.</p>
              <p className="mb-4">16.2. Ponudnik ne jamči, da bo storitev brez napak, brez prekinitev ali da bo Izhod AI vedno pravno ali dejansko pravilen.</p>
              <p className="mb-4">16.3. Stranka jamči, da: (i) ima vse pravice za uporabo Podatkov stranke, (ii) uporaba storitve ne bo kršila zakonodaje ali pravic tretjih, ter (iii) bo upoštevala dolžnost preverjanja iz 6.2.</p>
            </section>

            <section id="odgovornost">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">17. Odgovornost, omejitve, odškodnine</h2>
              <p className="mb-4">17.1. Omejitve skladno z obligacijskim pravom.<br/>Nobena določba teh Pogojev ne izključuje odgovornosti, ki je po pravu ni dopustno izključiti ali omejiti (zlasti odgovornosti za naklep ali hudo malomarnost, kjer je izključitev vnaprej nedopustna).</p>
              <p className="mb-4">17.2. Omejitev posredne škode.<br/>V največjem dopustnem obsegu Ponudnik ne odgovarja za posredno škodo, izgubljeni dobiček, izgubo poslov, izgubo podatkov (razen če je posledica kršitve varnostnih obveznosti Ponudnika), ali izgubo ugleda.</p>
              <p className="mb-4">17.3. Kapica odgovornosti.<br/>Skupna (kumulativna) odškodninska odgovornost Ponudnika iz ali v zvezi s pogodbo, ne glede na pravno podlago zahtevka, je omejena na skupni znesek 500 EUR, razen če veljavna zakonodaja takšne omejitve ne dopušča.</p>
              <p className="mb-4">17.4. Odškodnina (indemnity) Stranke.<br/>Stranka povrne Ponudniku škodo, stroške in razumne izdatke (vključno s pravnimi stroški), ki izhajajo iz zahtevkov tretjih oseb zaradi: (i) Podatkov stranke, (ii) kršitve Pogojev, ali (iii) nezakonite uporabe storitve.</p>
              <p className="mb-4">17.5. Posebno glede AI.<br/>Uporabnik razume, da odločitve, ki temeljijo na Izhodu AI, sprejema Uporabnik/Stranka na lastno odgovornost, ob upoštevanju dolžnosti preverjanja (6.2).</p>
            </section>

            <section id="skladnost">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">18. Skladnost, izvozna pravila in sankcije</h2>
              <p className="mb-4">18.1. Uporabnik jamči, da ne uporablja storitve v nasprotju z veljavnimi sankcijami ali izvoznimi omejitvami ter da ni subjekt omejitev, ki bi Ponudniku prepovedale zagotavljanje storitve.</p>
              <p className="mb-4">18.2. Ponudnik lahko zavrne ali prekine zagotavljanje storitve, če je to potrebno za skladnost z omejitvami iz 18.1.</p>
            </section>

            <section id="spremembe">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">19. Spremembe Pogojev</h2>
              <p className="mb-4">19.1. Ponudnik lahko spremeni Pogoje, kadar je to potrebno zaradi: (i) sprememb zakonodaje, (ii) varnostnih razlogov, (iii) sprememb storitve, ali (iv) poslovnih razlogov.</p>
              <p className="mb-4">19.2. Ponudnik o spremembah obvesti preko storitve ali na e‑pošto, z razumnim rokom pred začetkom veljavnosti sprememb, razen če je nujna takojšnja sprememba zaradi varnosti ali zakona.</p>
              <p className="mb-4">19.3. Če Stranka po začetku veljavnosti sprememb nadaljuje z uporabo storitve, se šteje, da spremembe sprejema. Če se ne strinja, lahko odpove naročnino v skladu z 15.3.</p>
            </section>

            <section id="obvestila">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">20. Obvestila</h2>
              <p className="mb-4">20.1. Obvestila Ponudniku se pošiljajo na:<br/>pravna obvestila/zasebnost/podpora: info@lexora.si</p>
              <p className="mb-4">20.2. Obvestila Stranki se pošiljajo na e‑poštni naslov, vezan na Račun, ali preko obvestil v storitvi.</p>
            </section>

            <section id="prenos">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">21. Prenos pravic in obveznosti</h2>
              <p className="mb-4">21.1. Ponudnik lahko prenese pogodbo ali posamezne pravice/obveznosti na povezano družbo ali v okviru statusnih sprememb (npr. prodaja dejavnosti), ob pogoju, da to ne poslabša bistvenih pravic Stranke.</p>
              <p className="mb-4">21.2. Stranka ne sme prenesti pogodbe brez predhodnega pisnega soglasja Ponudnika, razen v okviru univerzalnega pravnega nasledstva.</p>
            </section>

            <section id="nicnost">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">22. Ničnost posameznih določb</h2>
              <p className="mb-4">Če je katera določba neveljavna ali neizvršljiva, to ne vpliva na veljavnost ostalih; neveljavno določbo stranki nadomestita z določbo, ki se čim bolj približa namenu.</p>
            </section>

            <section id="celovit-dogovor">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">23. Celovit dogovor</h2>
              <p className="mb-4">Ti Pogoji, skupaj s Politiko zasebnosti, Politiko piškotkov, DPA in morebitnimi naročili/prilogami, predstavljajo celovit dogovor glede uporabe storitve.</p>
            </section>

            <section id="pravo">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">24. Pravo in pristojnost</h2>
              <p className="mb-4">24.1. Za te Pogoje in spore iz njih se uporablja pravo Republika Slovenija.</p>
              <p className="mb-4">24.2. Za reševanje sporov je pristojno stvarno pristojno sodišče v Ljubljani, razen če prisilni predpisi določajo drugače.</p>
            </section>

            <section id="priloga-1">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Priloga 1: Slovar definicij</h2>
              <p className="mb-4">Za potrebe teh Pogojev:</p>
              <p className="mb-4">A. »AI funkcije« pomeni funkcionalnosti storitve, ki uporabljajo modele strojnega učenja/umetne inteligence za generiranje ali preoblikovanje vsebin.</p>
              <p className="mb-4">B. »DPA« pomeni pogodbo o obdelavi osebnih podatkov, ki ureja razmerje upravljavec–obdelovalec.</p>
              <p className="mb-4">C. »Izhod AI« pomeni rezultat AI funkcij (besedilo, povzetek, predlog, označitev, analiza, odgovor ipd.).</p>
              <p className="mb-4">D. »Podatki stranke« pomeni dokumente, datoteke, besedila, metapodatke in druge informacije, ki jih Stranka naloži ali vnese v storitev.</p>
              <p className="mb-4">E. »Račun« pomeni uporabniški račun, prek katerega se uporablja storitev.</p>
              <p className="mb-4">F. »Storitev« pomeni Lexora SaaS, kot je opredeljena v 3. členu.</p>
            </section>

            <section id="priloga-2">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Priloga 2: Cenik</h2>
              <p className="mb-4 font-semibold">Tabela A – Naročniški paketi in cene (vstavite dejanske podatke)</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4">Paket</th>
                      <th className="py-3 px-4">Cena</th>
                      <th className="py-3 px-4">Št. uporabnikov</th>
                      <th className="py-3 px-4">Limiti</th>
                      <th className="py-3 px-4">Vključena SLA raven</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Lexora - mesečna naročnina</td>
                      <td className="py-3 px-4">199 EUR</td>
                      <td className="py-3 px-4">En uporabnik na licenco</td>
                      <td className="py-3 px-4">Ni omejitev uporabe</td>
                      <td className="py-3 px-4">Kot določeno v tabeli B</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4">Lexora - letna naročnina</td>
                      <td className="py-3 px-4">1999 EUR</td>
                      <td className="py-3 px-4">En uporabnik na licenco</td>
                      <td className="py-3 px-4">Ni omejitev uporabe</td>
                      <td className="py-3 px-4">Kot določeno v tabeli B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="povzetek">
              <h2 className="text-2xl font-serif text-white mt-12 mb-4">Povzetek v razumljivem jeziku</h2>
              <p className="mb-4">Lexora ni odvetnik: AI predlogi niso pravni nasvet. Pred uporabo v praksi morate rezultate preveriti.<br/>
              Vaši dokumenti so vaši: vi ostanete lastnik naloženih dokumentov; Lexora jih obdeluje zato, da storitev deluje.<br/>
              Učenje AI na vaših podatkih je privzeto izklopljeno: če bi kdaj ponudili program izboljšav, je to ločen opt‑in, ki ga lahko kadarkoli prekličete.<br/>
              Piškotki: nenujni piškotki se uporabljajo samo, če privolite; nujni so potrebni za prijavo in delovanje.<br/>
              Razpoložljivost: storitev lahko občasno ne deluje zaradi vzdrževanja ali izpadov; SLA in nadomestila (če jih imate) so v tabeli.<br/>
              Plačilo: storitev je naročniška; zamude lahko vodijo v začasno ustavitev dostopa.<br/>
              Prenehanje: ob prenehanju lahko izvozite podatke; nato se podatki izbrišejo po dogovorjenem roku (z izjemo varnostnih kopij, ki se izbrišejo z rotacijo).<br/>
              Odgovornost je omejena: Ponudnik ne more vnaprej izključiti odgovornosti za naklep ali hudo malomarnost; druge omejitve so določene v pogodbi.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PogojiUporabe;
