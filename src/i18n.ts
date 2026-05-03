export type Lang = 'si' | 'en'

const si = {
  nav: {
    preview: 'Predogled',
    getStarted: 'Kako začeti',
    security: 'Varnost',
    about: 'O nas',
    login: 'Prijava',
    tryLexora: 'Preizkusi Lexoro',
    previewMenu: {
      docReview: 'Pregled dokumentacije',
      docReviewDesc: 'AI pregled tveganj in klavzul.',
      lawResearch: 'Raziskava zakonodaje',
      lawResearchDesc: 'Hitro iskanje v zanesljivih pravnih virih.',
      caseSearch: 'Iskanje sodne prakse',
      caseSearchDesc: 'Hitri povzetki dolgih pravnih besedil.',
      drafting: 'Priprava osnutkov',
      draftingDesc: 'Avtomatizirana priprava pravnih dokumentov.',
      agents: 'Personalizirani agenti',
      agentsDesc: 'Agenti prilagojeni vašim potrebam.',
    },
    getStartedMenu: {
      guide: 'Vodnik za začetnike',
      guideDesc: 'Prvi koraki z Lexoro.',
      videos: 'Video vodiči',
      videosDesc: 'Naučite se uporabljati Lexoro.',
      faq: 'Pogosta vprašanja (FAQ)',
      faqDesc: 'Odgovori na najpogostejša vprašanja.',
    },
    securityMenu: {
      dataSecurity: 'Varnost podatkov',
      dataSecurityDesc: 'Kako varujemo vaše zaupne podatke.',
      compliance: 'Skladnost',
      complianceDesc: 'Naša zaveza k varnosti in skladnosti.',
      privacy: 'Zasebnost',
      privacyDesc: 'Naši pravilniki o zasebnosti.',
    },
    aboutMenu: {
      vision: 'Naša vizija',
      visionDesc: 'Zakaj smo ustvarili Lexoro.',
      team: 'Ekipa',
      teamDesc: 'Spoznajte ljudi za Lexoro.',
      contact: 'Kontakt',
      contactDesc: 'Stopite v stik z nami.',
    },
  },

  hero: {
    badge: 'AI, ki razume slovensko in evropsko pravo',
    headline1: 'Pravna odličnost,',
    headline2: 'podprta z umetno inteligenco.',
    subtext1: 'Umetna inteligenca, zasnovana za',
    subtextBold: 'slovenski pravni prostor',
    subtext2: ', ki vam pomaga delati hitreje in z večjo jasnostjo.',
    cta1: 'Preizkusi',
    cta2: 'Rezerviraj sestanek',
  },

  howItHelps: {
    heading: 'Kako Lexora pospeši pravno delo',
    subtext: 'Lexora pomaga pri analizi spisa, pravni raziskavi in pripravi osnutkov, da lahko pravnik hitreje razume zadevo in se osredotoči na',
    subtextBold: 'pravno strategijo',
    scrollHint: 'Podrsajte za celoten odgovor',
    disclaimer: '* Vsi podatki, uporabljeni na spletni strani za prikaz delovanja aplikacije, so izmišljeni.',
    featureCards: [
      'Pregled dokumentacije',
      'Raziskava zakonodaje',
      'Iskanje sodne prakse',
      'Priprava osnutkov',
      'Personalizirani agenti',
    ],
  },

  processSteps: [
    {
      title: 'Razumevanje dokumentov',
      description: 'Naložite pogodbo, sodbo ali celoten spis. Lexora v nekaj sekundah izpostavi ključna dejstva, pomembne določbe in pravna tveganja. Namesto ročnega pregledovanja več sto strani dokumentacije dobite strukturiran pregled spisa v nekaj sekundah.',
      details: [
        'Povzame ključna dejstva in pravne določbe',
        'Izpostavi pomembne člene in klavzule',
        'Opozori na morebitna pravna tveganja',
        'Primerja več dokumentov in poišče neskladja',
      ],
    },
    {
      title: 'Raziskovanje prava',
      description: 'Lexora poveže dokumente z zakonodajo in sodno prakso ter pomaga pri celoviti analizi zadeve.',
      details: [
        'Relevantni členi zakonodaje (PISRS)',
        'Sodna praksa slovenskih sodišč (sodnapraksa.si)',
        'Evropska zakonodaja in sodna praksa (EUR-LEX)',
        'Neposredne reference na uporabljene pravne vire',
      ],
    },
    {
      title: 'Celovita analiza zadeve',
      description: 'Ker so v Lexori zbrani tako dokumenti kot pravni viri, lahko sistem pomaga tudi pri celoviti analizi zadeve.',
      details: [
        'Poveže dejstva primera z zakonodajo',
        'Izpostavi ključna pravna vprašanja',
        'Pomaga strukturirati pravno argumentacijo',
        'Omogoča jasen pregled nad zadevo',
      ],
    },
    {
      title: 'Hitrejša priprava pravnih dokumentov',
      description: 'Ko je pravni okvir zadeve jasen, Lexora pomaga pripraviti osnutke dokumentov na podlagi dejstev in dokumentov v spisu.',
      details: [
        'Osnutki dopisov',
        'Strukturiranje tožb in odgovorov',
        'Priprava pravnih mnenj',
        'Upoštevanje dokumentov v spisu',
      ],
    },
    {
      title: 'Personalizirani pravni agenti',
      badge: 'Kmalu',
      description: 'Naučite Lexoro, kako vaša pisarna rešuje določeno pravno nalogo. AI agent lahko nato ta postopek samostojno izvede od začetka do konca.',
      details: [
        'Analiza pogodb po kriterijih vaše pisarne',
        'Preverjanje skladnosti dokumentov',
        'Priprava strukturiranih pravnih analiz',
        'Priprava dokumentov po standardih vaše pisarne',
      ],
    },
  ],

  workspace: {
    heading: 'Vse za delo na zadevi na enem mestu',
    subtext: 'Za vsako zadevo v Lexori ustvarite personalizirano AI delovno okolje. Tako imate celoten kontekst primera na enem mestu, brez potrebe po stalnem preklapljanju med različnimi sistemi.',
    tabs: [
      { label: 'Dokumenti zadeve', desc: 'Naložite in organizirajte vse spise, pogodbe in dokaze.' },
      { label: 'Pravna raziskava', desc: 'Iščite po zakonodaji in sodni praksi znotraj konteksta.' },
      { label: 'Vprašanja in odgovori', desc: 'Klepetajte z dokumenti in hitro poiščite informacije.' },
      { label: 'Osnutki dokumentov', desc: 'Generirajte osnutke pogodb in vlog na podlagi primera.' },
    ],
  },

  comparison: {
    badge: 'Primerjava',
    heading: 'Specializirano za pravno delo',
    p1: 'Splošni AI modeli, kot so ChatGPT, Gemini ali Claude, so zasnovani za širok spekter nalog in nimajo jasnega ter celovitega dostopa do pravnih virov.',
    p1Bold: 'Lexora pa je zasnovana posebej za delo pravnikov.',
    p2: 'Omogoča delo v kontekstu konkretne pravne zadeve — z dokumenti, zakonodajo in sodno prakso na enem mestu.',
    p3: 'Splošni AI modeli pomagajo pri posameznih vprašanjih.',
    p3Bold: 'Lexora pa omogoča delo na celotni pravni zadevi',
    p3End: ', zato lahko pravnik hitreje razume primer in pripravi pravno stališče.',
    tableHeader1: 'Funkcionalnost',
    tableHeader2: 'Splošni AI modeli',
    features: [
      'Hiter pregled celotnega spisa (pogodbe, sodbe, dopisi)',
      'Delo v kontekstu celotne zadeve',
      'Povezovanje dejstev z zakonodajo',
      'Iskanje relevantne sodne prakse',
      'Strukturirana analiza pravnega problema',
      'Priprava pravnih osnutkov (tožbe, odgovori, pravna mnenja)',
      'Delo z dokumenti, zakonodajo in sodno prakso na enem mestu',
      'Odgovori na splošna pravna vprašanja',
    ],
  },

  security: {
    badge: 'Varnost in zasebnost',
    heading: 'Vaši podatki ostanejo vaši.',
    subtext: 'Zavedamo se, da je zaupnost v pravnem poklicu na prvem mestu. Lexora je zasnovana z najvišjimi varnostnimi standardi, ki zagotavljajo, da so vaši dokumenti in podatki strank popolnoma varni.',
    items: [
      { title: 'Brez učenja modelov', desc: 'Vaši dokumenti in poizvedbe se nikoli ne uporabljajo za učenje ali izboljševanje AI modelov.' },
      { title: 'Enkripcija podatkov', desc: 'Vsi podatki so šifrirani med prenosom (TLS 1.3) in v mirovanju (AES-256).' },
      { title: 'Skladnost z GDPR', desc: 'Lexora je zasnovana skladno z GDPR in uporablja sodobne pravne, tehnične in organizacijske ukrepe za varstvo osebnih podatkov.' },
    ],
    dataCenter: 'Podatkovni centri',
    dataCenterValue: 'EU (Frankfurt)',
    dataRetention: 'Zadrževanje podatkov',
    dataRetentionValue: 'Popoln nadzor',
    dataAccess: 'Dostop do podatkov',
    dataAccessValue: 'Samo vi',
    learnMore: 'Več o varnosti',
  },

  demo: {
    heading: 'Predogled Platforme',
    subtext: 'Izberite področje in si oglejte Lexoro v akciji.',
    videoNote: 'Predstavitev uporabe •',
    videos: [
      { title: 'Civilno pravo', duration: '2 min' },
      { title: 'Gospodarsko pravo', duration: '2 min' },
      { title: 'Kazensko pravo', duration: '2 min' },
      { title: 'Nepremičninsko pravo', duration: '2 min' },
      { title: 'Splošni pregled', duration: '2 min' },
    ],
  },

  cta: {
    heading: 'Rezervirajte termin za predstavitev',
    subtext: 'Spoznajte, kako lahko Lexora postane vaša nova pravna supermoč. V 30 minutah vam pokažemo vse ključne funkcionalnosti.',
    button: 'Rezerviraj predstavitev',
  },

  mission: {
    heading: 'Prihodnost prava',
    p1: 'Lexora pravnika ne nadomešča. Deluje kot',
    p1Bold: 'digitalni pravni asistent',
    p1End: ', ki vam omogoča, da več časa namenite pravni presoji, argumentaciji in strategiji.',
    p2: 'Umetna inteligenca postopoma postaja del pravne prakse. Orodja za analizo dokumentov in pravno raziskavo lahko bistveno povečajo učinkovitost dela pravnikov.',
    p3: 'Na našem blogu raziskujemo, kako se pravo spreminja v dobi umetne inteligence - ter kako lahko nove tehnologije postanejo vaša konkurenčna prednost.',
    blogButton: 'Preberi blog',
  },

  getStarted: {
    badge: 'Kako začeti',
    heading: 'Začnite z Lexoro v treh korakih',
    subtext: 'Ni vam treba spreminjati svojega načina dela. Lexora se prilagodi vam — vašim zadevam, dokumentom in načinu razmišljanja.',
    steps: [
      { title: 'Ustvarite profil', desc: 'Registrirajte se z e-pošto in vzpostavite varno digitalno okolje za svoje zadeve.' },
      { title: 'Uvozite dokumente', desc: 'Varno naložite pravne dokumente, pogodbe ali sodno prakso, ki jo želite analizirati.' },
      { title: 'Začnite z delom', desc: 'Uporabite AI za pripravo osnutkov, iskanje po zakonodaji in analizo pravnih vprašanj.' },
    ],
    featuresHeading: 'Orodja, ki prihranijo ure dela',
    featuresSubtext: 'Odvetniško delo z AI ni zgolj hitrejše — je jasnejše, natančnejše in bolj prepričljivo.',
    features: [
      { title: 'Analiza dokumentov', desc: 'Izpostavi ključne točke, tveganja in pravna vprašanja ter pripravi jasen povzetek.' },
      { title: 'Priprava osnutkov', desc: 'Strukturirani osnutki tožb, odgovorov, pogodb ali pravnih mnenj na podlagi vaših navodil.' },
      { title: 'Pravna raziskava', desc: 'Zakonodaja in sodna praksa glede na konkretno situacijo s povzetkom ključnih stališč.' },
      { title: 'Argumentacija', desc: 'Jasna, logična in prepričljiva argumentacija ter predlogi morebitnih protiargumentov.' },
      { title: 'Pregled klavzul', desc: 'Analiza pogodbenih določb, opozorila na tveganja in predlogi alternativnih formulacij.' },
      { title: 'In še veliko več', desc: 'Klepet z dokumenti, preverjanje skladnosti, povzetki in podpora skozi celoten delovni proces.' },
    ],
    faqHeading: 'Pogosta vprašanja',
    faqSubtext: 'Odgovori na najpogostejša vprašanja novih uporabnikov.',
    faqs: [
      { q: 'Kaj je Lexora?', a: 'Lexora je AI pravni agent, zasnovan posebej za pravnike in odvetnike. Združuje napredne modele AI z dostopom do slovenske in evropske zakonodaje ter sodne prakse.' },
      { q: 'Kako se razlikuje od generičnih AI orodij?', a: 'Lexora ni splošen chatbot. Deluje znotraj vaših konkretnih zadev, analizira naložene dokumente in jih povezuje z veljavno zakonodajo ter sodno prakso.' },
      { q: 'Ali so moji podatki varni?', a: 'Platforma je zasnovana z visokimi varnostnimi standardi. Podatki so šifrirani in zaupni — vaše zadeve ostanejo samo vaše.' },
      { q: 'Ali Lexora nadomešča pravnika?', a: 'Ne. Lexora je orodje za podporo odločanju in povečanje učinkovitosti. Končna presoja, strategija in odgovornost vedno ostanejo v rokah pravnika.' },
      { q: 'Katere naloge lahko z Lexoro avtomatiziram?', a: 'Pripravo osnutkov, povzetkov, analizo pogodb, iskanje sodne prakse, oblikovanje argumentacije ter odgovarjanje na pravna vprašanja na podlagi dokumentov vaše zadeve.' },
      { q: 'Kako začnem?', a: 'Ustvarite profil, odprite novo zadevo in naložite dokumente. Nato začnite z analizo ali pripravo osnutkov. Priporočamo, da Lexoro preizkusite na čim več korakih svojega delovnega procesa.' },
    ],
    ctaHeading: 'Ste pripravljeni?',
    ctaSubtext: 'Vaša ekipa bo navdušena nad novim nivojem produktivnosti, ki ga prinaša Lexora.',
    ctaButton: 'Začnite zdaj',
  },

  footer: {
    tagline: 'Vaša nova pravna supermoč. AI asistent za hitrejšo in natančnejšo pravno analizo.',
    product: 'Produkt',
    legal: 'Pogoji in zasebnost',
    preview: 'Predogled',
    getStarted: 'Kako začeti',
    security: 'Varnost',
    about: 'O nas',
    blog: 'Blog',
    terms: 'Pogoji uporabe',
    privacy: 'Politika zasebnosti',
    cookies: 'Politika piškotkov',
    copyright: 'Vse pravice pridržane.',
  },

  stepAnim: {
    risk: 'Tveganje — kl. 4.2',
    compliant: 'OZ skladno',
    generated: 'Generirano',
    rules: 'Pravila',
    result: 'Rezultat',
    match: '% ujemanje',
  },

  // Sub-page shared strings
  backHome: 'Nazaj na prvo stran',

  // ONas page
  onas: {
    heading: 'O nas',
    subheading: 'Spoznajte ekipo in misijo, ki stoji za Lexoro. Gradimo prihodnost pravnega dela z umetno inteligenco.',
    missionHeading: 'Naša misija',
    missionP1: 'V Lexori verjamemo, da mora tehnologija pravnikom pomagati pri delu, ne pa ga zapletati.',
    missionP2: 'Naša misija je razvijati orodja umetne inteligence, ki pravnikom omogočajo hitrejšo analizo dokumentov, učinkovitejšo pravno raziskavo in boljši pregled nad zadevo - brez kompromisov pri zanesljivosti, preglednosti in zaupnosti.',
    missionP3: 'Pravo postaja vse bolj kompleksno, dokumentacije je vse več, čas za kakovostno pravno presojo pa vse manj. Zato gradimo Lexoro: delovno okolje, ki pomaga zmanjšati rutinsko delo in pravnikom omogoča, da se osredotočijo na tisto, kar ustvarja največ vrednosti - pravno presojo, argumentacijo in strategijo.',
    missionP4: 'Naš cilj je opolnomočiti pravnike z orodjem, ki jim pomaga delati hitreje, bolj pregledno in z več zaupanja v informacije, na katerih gradijo svoje odločitve.',
    teamHeading: 'Naša ekipa',
    feedbackNote: 'S številnimi slovenskimi odvetniki in njihovim aktivnim feedbackom neprestano izboljšujemo naš produkt, da bi ta čim bolje odgovarjal na realne izzive v pravni praksi.',
  },

  // Varnost page
  varnost: {
    badge: 'Varnost in zasebnost',
    heading: 'Varnost pri Lexori',
    navSecurity: 'Varnost',
    navTerms: 'Pogoji uporabe',
    sections: [
      { id: 'uvod', title: 'Uvod' },
      { id: 'avtentikacija', title: 'Avtorizacija in avtentikacija' },
      { id: 'zascita-podatkov', title: 'Zaščita podatkov' },
      { id: 'infrastruktura', title: 'Infrastruktura in redundanca' },
      { id: 'operativna-varnost', title: 'Operativna varnost' },
      { id: 'razvoj', title: 'Varnost pri razvoju' },
      { id: 'tveganja', title: 'Upravljanje tveganj' },
      { id: 'skladnost', title: 'Skladnost in certifikati' },
      { id: 'osebje', title: 'Varnost osebja' },
      { id: 'politika', title: 'Varnostna politika' },
    ],
    uvod: {
      title: 'Uvod',
      body: 'V Lexori jemljemo varnost zelo resno. Kot ponudnik AI‑rešitev za pravnike ravnamo z izjemno občutljivimi podatki, vključno s pravnimi dokumenti in osebnimi informacijami. Zaupnost in integriteta teh podatkov sta za nas na prvem mestu. Na tej strani opisujemo ukrepe, s katerimi varujemo podatke in izpolnjujemo zakonske zahteve. Stran ni izčrpna; posodabljali jo bomo, ko se bodo grožnje in tehnologije spreminjale.',
    },
    avtentikacija: {
      title: 'Avtorizacija in avtentikacija',
      p1: 'Za nadzor dostopa je ključnega pomena, da omogočimo le preverjenim osebam dostop do sistemov. Vodila nas usmerjajo, da moramo poleg uporabniškega imena in gesla uporabiti tudi dodatne varnostne mehanizme, kot sta večfaktorska avtentikacija (MFA) ali enotna prijava (SSO). Na naši platformi uporabljamo:',
      li1: '<strong>MFA:</strong> Za prijavo je potrebno vsaj eno dodatno potrdilo (geslo + aplikacija ali varnostni žeton).',
      li2: '<strong>Vloga na osnovi pravic:</strong> Uporabnikom so dodeljene najnižje možne pravice, redno pa revidiramo in prilagajamo vloge.',
      li3: '<strong>SSO integracije:</strong> Na zahtevo je mogoče uporabiti SSO preko zaupanja vrednih ponudnikov (npr. Azure AD, Okta).',
      p2: 'Dostop do administrativnih funkcij je omejen na pooblaščeno osebje, vse prijave in spremembe pa se beležijo.',
    },
    zascitaPodatkov: {
      title: 'Zaščita podatkov v tranzitu in mirovanju',
      p1: 'Vse komunikacije med brskalnikom uporabnika in našimi strežniki so šifrirane s protokolom TLS/SSL. Smernice za oblačne storitve poudarjajo, da je treba podatke med prehodom med omrežji zaščititi z močno enkripcijo. TLS‑certifikati brskalnikom omogočijo preverjanje pristnosti našega strežnika in pomagajo preprečevati napade z posrednikom.',
      p2: 'Občutljivi podatki v naših podatkovnih bazah so šifrirani v mirovanju (AES‑256). Information Commissioner\'s Office (ICO) navaja, da je enkripcija primeren tehnični ukrep za zaščito osebnih podatkov med prenosom in shranjevanjem. Ključe za dešifriranje upravljamo preko sistema za upravljanje ključev (KMS), certifikate pa samodejno obnavljamo, da se izognemo pretečenim potrdilom.',
    },
    infrastruktura: {
      title: 'Zaščita infrastrukture in redundanca',
      body: 'Našo infrastrukturo gostimo v certificiranih podatkovnih centrih z visoko stopnjo fizične varnosti. Ti centri so pod 24‑urnim nadzorom, z nadzornimi kamerami, večnivojskimi sistemi za kontrolo dostopa in redundantnim napajanjem. Sledimo načelom varovanja sredstev in odpornosti: podatki in sistemi morajo biti zaščiteni pred fizičnimi posegi, izgubo, poškodbami ali zaplembo. Podatke zrcalimo v več geografskih lokacijah, redno izvajamo varnostne kopije in testiramo postopke obnove po nesreči.',
    },
    operativnaVarnost: {
      title: 'Operativna varnost, monitoring in odziv na incidente',
      p1: 'Varnost je nenehen proces. Naše operativne prakse so zasnovane tako, da preprečujejo in odkrivajo napade. Uporabljamo večslojni pristop, ki vključuje požarne zidove, zaščito pred DDoS napadi in omejevanje hitrosti prometa. Sistemske aktivnosti (dostopi, spremembe konfiguracij, komunikacije) beležimo v dnevnikih in jih sproti analiziramo.',
      p2: 'Za obvladovanje incidentov imamo vzpostavljen načrt odziva. Ta zajema identifikacijo, zajezitev, obveščanje, odpravo težav in naknadno analizo. Ekipa za odzive na incidente redno organizira vaje, da se pripravi na različne scenarije.',
    },
    razvoj: {
      title: 'Varnost pri razvoju programske opreme',
      p1: 'Naše storitve so zasnovane po načelu "Secure by Design". Smernice za varno razvojno okolje priporočajo, da se varnost vključi v vse faze življenjskega cikla programske opreme. To vključuje modeliranje groženj, statično analizo kode, notranje in zunanje revizije ter redno posodabljanje odvisnosti.',
      p2: 'V naš CI/CD proces smo vključili avtomatske teste za odkrivanje ranljivosti. Razvojne ekipe se redno usposabljajo v varnem programiranju in so seznanjene z najnovejšimi grožnjami.',
    },
    tveganja: {
      title: 'Upravljanje tveganj in dobavna veriga',
      p1: 'Zavedamo se, da je varnost povezana tudi z našimi partnerji in dobavitelji. Uporabljamo celovit pristop k varnosti dobavne verige, ki vključuje preverjanje tretjih ponudnikov, pogodbeno zavezovanje k enakim varnostnim standardom ter stalno spremljanje skladnosti.',
      p2: 'Redno izvajamo ocene tveganj (risk assessments) in ocene vpliva na varstvo podatkov (DPIA). Na podlagi teh ocen pripravljamo akcijske načrte za odpravo zaznanih tveganj. Uporabljamo tudi ločevanje med uporabniki – kompromis pri enem uporabniku ne sme vplivati na podatke ali storitve drugega.',
    },
    skladnost: {
      title: 'Skladnost in certifikati',
      p1: 'Varnost podatkov je tesno povezana s pravnim okvirom. Priporočila strokovnjakov navajajo, da naj varnostna dokumentacija jasno opredeli, katere standarde in certifikate podjetje podpira. Lexora upošteva Splošno uredbo o varstvu podatkov (GDPR) in sledi načelu integritete in zaupnosti pri obdelavi osebnih podatkov.',
      p2: 'Naš cilj je pridobiti in vzdrževati certifikate ISO/IEC 27001 in SOC 2. Hkrati sledimo smernicam NCSC, ki vključujejo principe, kot so zaščita podatkov v tranzitu, zaščita sredstev, operativna varnost, identiteta in avtentikacija ter varno upravljanje storitev.',
    },
    osebje: {
      title: 'Varnost osebja in ozaveščenost',
      p1: 'Ljudje so pogosto najšibkejši člen v verigi. Skladno s smernicami je treba zaposlene temeljito preveriti in redno usposabljati, da se zmanjša verjetnost nenamernega ali namernega kompromisa. V Lexori izvajamo:',
      li1: 'preverjanje preteklosti novozaposlenih;',
      li2: 'redna izobraževanja o phishingu, varni rabi gesel in ravnanju z občutljivimi podatki;',
      li3: 'strogo politiko dostopa in odobravanja (principe štirih oči).',
    },
    politika: {
      title: 'Varnostna politika in transparentnost',
      body: 'Naši uporabniki morajo imeti občutek, da so zaščiteni in dobro obveščeni. V svojih dokumentih zato transparentno pojasnjujemo, kako varujemo podatke. Uporabniki nas lahko vedno kontaktirajo, če želijo dodatne informacije ali kopije certifikatov.',
    },
    zakljucek: {
      title: 'Zaključek',
      body: 'Zagotavljanje varnosti in zasebnosti je ključni del našega poslanstva. Nenehno vlagamo v tehnologijo, procese in ljudi, da ostanemo korak pred grožnjami. Ta stran odraža naše trenutno stanje varnostnih ukrepov; redno jo bomo posodabljali glede na spremembe v zakonodaji in najboljših praksah.',
    },
    footerCopy: '© {year} Lexora. Vse pravice pridržane.',
  },

  // Legal sub-pages shared nav
  legalNav: {
    back: 'Nazaj na prvo stran',
    terms: 'Pogoji uporabe',
    privacyPolicy: 'Politika zasebnosti',
    cookiePolicy: 'Politika piškotkov',
  },
}

const en = {
  nav: {
    preview: 'Preview',
    getStarted: 'Get Started',
    security: 'Security',
    about: 'About Us',
    login: 'Login',
    tryLexora: 'Try Lexora',
    previewMenu: {
      docReview: 'Document Review',
      docReviewDesc: 'AI risk and clause review.',
      lawResearch: 'Legal Research',
      lawResearchDesc: 'Fast search across reliable legal sources.',
      caseSearch: 'Case Law Search',
      caseSearchDesc: 'Quick summaries of long legal texts.',
      drafting: 'Draft Preparation',
      draftingDesc: 'Automated preparation of legal documents.',
      agents: 'Personalized Agents',
      agentsDesc: 'Agents tailored to your needs.',
    },
    getStartedMenu: {
      guide: "Beginner's Guide",
      guideDesc: 'First steps with Lexora.',
      videos: 'Video Guides',
      videosDesc: 'Learn how to use Lexora.',
      faq: 'FAQ',
      faqDesc: 'Answers to the most common questions.',
    },
    securityMenu: {
      dataSecurity: 'Data Security',
      dataSecurityDesc: 'How we protect your confidential data.',
      compliance: 'Compliance',
      complianceDesc: 'Our commitment to security and compliance.',
      privacy: 'Privacy',
      privacyDesc: 'Our privacy policies.',
    },
    aboutMenu: {
      vision: 'Our Vision',
      visionDesc: 'Why we created Lexora.',
      team: 'Team',
      teamDesc: 'Meet the people behind Lexora.',
      contact: 'Contact',
      contactDesc: 'Get in touch with us.',
    },
  },

  hero: {
    badge: 'AI that understands Slovenian and European law',
    headline1: 'Legal excellence,',
    headline2: 'powered by artificial intelligence.',
    subtext1: 'Artificial intelligence designed for the',
    subtextBold: 'Slovenian legal space',
    subtext2: ', helping you work faster and with greater clarity.',
    cta1: 'Try Lexora',
    cta2: 'Book a Meeting',
  },

  howItHelps: {
    heading: 'How Lexora Accelerates Legal Work',
    subtext: 'Lexora helps with case analysis, legal research, and drafting so lawyers can understand cases faster and focus on',
    subtextBold: 'legal strategy',
    scrollHint: 'Scroll for full response',
    disclaimer: '* All data used on this website to demonstrate the application is fictional.',
    featureCards: [
      'Document Review',
      'Legal Research',
      'Case Law Search',
      'Draft Preparation',
      'Personalized Agents',
    ],
  },

  processSteps: [
    {
      title: 'Understanding Documents',
      description: 'Upload a contract, judgment, or entire case file. Lexora highlights key facts, important provisions, and legal risks in seconds. Instead of manually reviewing hundreds of pages, you get a structured case overview instantly.',
      details: [
        'Summarizes key facts and legal provisions',
        'Highlights important articles and clauses',
        'Flags potential legal risks',
        'Compares multiple documents and identifies inconsistencies',
      ],
    },
    {
      title: 'Legal Research',
      description: 'Lexora connects your documents with legislation and case law to support comprehensive case analysis.',
      details: [
        'Relevant articles of legislation (PISRS)',
        'Case law from Slovenian courts (sodnapraksa.si)',
        'European legislation and case law (EUR-LEX)',
        'Direct references to the legal sources used',
      ],
    },
    {
      title: 'Comprehensive Case Analysis',
      description: 'Because Lexora brings together both documents and legal sources, the system can assist with a comprehensive analysis of your case.',
      details: [
        'Connects case facts with legislation',
        'Highlights key legal questions',
        'Helps structure legal arguments',
        'Provides a clear case overview',
      ],
    },
    {
      title: 'Faster Legal Document Drafting',
      description: 'Once the legal framework is clear, Lexora helps draft documents based on the facts and materials in the case file.',
      details: [
        'Correspondence drafts',
        'Structuring claims and responses',
        'Preparing legal opinions',
        'Based on documents in the case file',
      ],
    },
    {
      title: 'Personalized Legal Agents',
      badge: 'Coming Soon',
      description: 'Teach Lexora how your firm handles a specific legal task. The AI agent can then execute that process autonomously from start to finish.',
      details: [
        "Contract analysis per your firm's criteria",
        'Document compliance checking',
        'Preparing structured legal analyses',
        "Document preparation to your firm's standards",
      ],
    },
  ],

  workspace: {
    heading: 'Everything for Case Work in One Place',
    subtext: 'For each case in Lexora, create a personalized AI work environment. You have the entire case context in one place, without constantly switching between different systems.',
    tabs: [
      { label: 'Case Documents', desc: 'Upload and organize all files, contracts, and evidence.' },
      { label: 'Legal Research', desc: 'Search legislation and case law within context.' },
      { label: 'Q&A', desc: 'Chat with documents and quickly find information.' },
      { label: 'Document Drafts', desc: 'Generate contract and filing drafts based on the case.' },
    ],
  },

  comparison: {
    badge: 'Comparison',
    heading: 'Specialized for Legal Work',
    p1: 'General AI models like ChatGPT, Gemini, or Claude are designed for a broad range of tasks and lack clear, comprehensive access to legal sources.',
    p1Bold: 'Lexora is built specifically for lawyers.',
    p2: 'It enables work within the context of a specific legal case — with documents, legislation, and case law in one place.',
    p3: 'General AI models help with individual questions.',
    p3Bold: 'Lexora enables work on an entire legal case',
    p3End: ', so lawyers can understand the case faster and prepare a legal position.',
    tableHeader1: 'Feature',
    tableHeader2: 'General AI Models',
    features: [
      'Quick review of the entire case file (contracts, judgments, correspondence)',
      'Working within the full case context',
      'Linking facts to legislation',
      'Searching relevant case law',
      'Structured legal problem analysis',
      'Preparing legal drafts (claims, responses, legal opinions)',
      'Working with documents, legislation, and case law in one place',
      'Answering general legal questions',
    ],
  },

  security: {
    badge: 'Security & Privacy',
    heading: 'Your data stays yours.',
    subtext: 'We understand that confidentiality is paramount in the legal profession. Lexora is built with the highest security standards to ensure your documents and client data are completely safe.',
    items: [
      { title: 'No model training', desc: 'Your documents and queries are never used to train or improve AI models.' },
      { title: 'Data encryption', desc: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256).' },
      { title: 'GDPR compliance', desc: 'Lexora is designed in accordance with GDPR and uses modern legal, technical, and organizational measures for personal data protection.' },
    ],
    dataCenter: 'Data Centers',
    dataCenterValue: 'EU (Frankfurt)',
    dataRetention: 'Data Retention',
    dataRetentionValue: 'Full Control',
    dataAccess: 'Data Access',
    dataAccessValue: 'Only You',
    learnMore: 'Learn More About Security',
  },

  demo: {
    heading: 'Platform Preview',
    subtext: 'Select a legal field and see Lexora in action.',
    videoNote: 'Use case demo •',
    videos: [
      { title: 'Civil Law', duration: '2 min' },
      { title: 'Commercial Law', duration: '2 min' },
      { title: 'Criminal Law', duration: '2 min' },
      { title: 'Real Estate Law', duration: '2 min' },
      { title: 'General Overview', duration: '2 min' },
    ],
  },

  cta: {
    heading: 'Book a Demo',
    subtext: "Discover how Lexora can become your new legal superpower. In 30 minutes we'll show you all the key features.",
    button: 'Book a Demo',
  },

  mission: {
    heading: 'The Future of Law',
    p1: "Lexora doesn't replace lawyers. It acts as a",
    p1Bold: 'digital legal assistant',
    p1End: ', giving you more time for legal judgment, argumentation, and strategy.',
    p2: 'Artificial intelligence is gradually becoming part of legal practice. Document analysis and legal research tools can significantly increase lawyer efficiency.',
    p3: 'On our blog, we explore how law is changing in the age of AI — and how new technologies can become your competitive advantage.',
    blogButton: 'Read Blog',
  },

  getStarted: {
    badge: 'Get Started',
    heading: 'Start with Lexora in Three Steps',
    subtext: "You don't need to change your way of working. Lexora adapts to you — your cases, documents, and way of thinking.",
    steps: [
      { title: 'Create a Profile', desc: 'Register with your email and set up a secure digital environment for your cases.' },
      { title: 'Import Documents', desc: 'Securely upload legal documents, contracts, or case law you want to analyze.' },
      { title: 'Start Working', desc: 'Use AI to prepare drafts, search legislation, and analyze legal questions.' },
    ],
    featuresHeading: 'Tools That Save Hours of Work',
    featuresSubtext: "Legal work with AI isn't just faster — it's clearer, more precise, and more persuasive.",
    features: [
      { title: 'Document Analysis', desc: 'Highlights key points, risks, and legal questions, and prepares a clear summary.' },
      { title: 'Draft Preparation', desc: 'Structured drafts of claims, responses, contracts, or legal opinions based on your instructions.' },
      { title: 'Legal Research', desc: 'Legislation and case law for the specific situation with a summary of key positions.' },
      { title: 'Argumentation', desc: 'Clear, logical, and persuasive arguments with suggestions for possible counter-arguments.' },
      { title: 'Clause Review', desc: 'Analysis of contractual provisions, risk warnings, and suggestions for alternative formulations.' },
      { title: 'And Much More', desc: 'Chat with documents, compliance checking, summaries, and support throughout the workflow.' },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqSubtext: 'Answers to the most common questions from new users.',
    faqs: [
      { q: 'What is Lexora?', a: 'Lexora is an AI legal agent designed specifically for lawyers and attorneys. It combines advanced AI models with access to Slovenian and European legislation and case law.' },
      { q: 'How is it different from generic AI tools?', a: 'Lexora is not a general chatbot. It operates within your specific cases, analyzes uploaded documents, and links them to applicable legislation and case law.' },
      { q: 'Is my data safe?', a: 'The platform is designed with high security standards. Data is encrypted and confidential — your cases remain yours alone.' },
      { q: 'Does Lexora replace a lawyer?', a: 'No. Lexora is a tool for decision support and efficiency improvement. Final judgment, strategy, and responsibility always remain with the lawyer.' },
      { q: 'What tasks can I automate with Lexora?', a: 'Drafting, summaries, contract analysis, case law searches, argument construction, and answering legal questions based on your case documents.' },
      { q: 'How do I get started?', a: 'Create a profile, open a new case, and upload documents. Then start with analysis or draft preparation. We recommend trying Lexora on as many steps of your workflow as possible.' },
    ],
    ctaHeading: 'Ready to Start?',
    ctaSubtext: 'Your team will be thrilled with the new level of productivity Lexora brings.',
    ctaButton: 'Get Started Now',
  },

  footer: {
    tagline: 'Your new legal superpower. AI assistant for faster and more precise legal analysis.',
    product: 'Product',
    legal: 'Terms & Privacy',
    preview: 'Preview',
    getStarted: 'Get Started',
    security: 'Security',
    about: 'About Us',
    blog: 'Blog',
    terms: 'Terms of Use',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    copyright: 'All rights reserved.',
  },

  stepAnim: {
    risk: 'Risk — cl. 4.2',
    compliant: 'CoO compliant',
    generated: 'Generated',
    rules: 'Rules',
    result: 'Result',
    match: '% match',
  },

  backHome: 'Back to home',

  onas: {
    heading: 'About Us',
    subheading: 'Meet the team and mission behind Lexora. We are building the future of legal work with artificial intelligence.',
    missionHeading: 'Our Mission',
    missionP1: 'At Lexora, we believe technology should help lawyers do their work, not complicate it.',
    missionP2: 'Our mission is to develop AI tools that enable lawyers to analyze documents faster, conduct more efficient legal research, and maintain a clearer overview of their cases — without compromising reliability, transparency, or confidentiality.',
    missionP3: 'Law is becoming increasingly complex, documentation is growing, and time for quality legal judgment is shrinking. That is why we are building Lexora: a work environment that helps reduce routine work and allows lawyers to focus on what creates the most value — legal judgment, argumentation, and strategy.',
    missionP4: 'Our goal is to empower lawyers with a tool that helps them work faster, more transparently, and with greater confidence in the information on which they base their decisions.',
    teamHeading: 'Our Team',
    feedbackNote: 'Together with many Slovenian lawyers and their active feedback, we continuously improve our product to better address the real challenges of legal practice.',
  },

  varnost: {
    badge: 'Security & Privacy',
    heading: 'Security at Lexora',
    navSecurity: 'Security',
    navTerms: 'Terms of Use',
    sections: [
      { id: 'uvod', title: 'Introduction' },
      { id: 'avtentikacija', title: 'Authorization & Authentication' },
      { id: 'zascita-podatkov', title: 'Data Protection' },
      { id: 'infrastruktura', title: 'Infrastructure & Redundancy' },
      { id: 'operativna-varnost', title: 'Operational Security' },
      { id: 'razvoj', title: 'Secure Development' },
      { id: 'tveganja', title: 'Risk Management' },
      { id: 'skladnost', title: 'Compliance & Certifications' },
      { id: 'osebje', title: 'Personnel Security' },
      { id: 'politika', title: 'Security Policy' },
    ],
    uvod: {
      title: 'Introduction',
      body: 'At Lexora, we take security very seriously. As a provider of AI solutions for lawyers, we handle extremely sensitive data, including legal documents and personal information. The confidentiality and integrity of this data is our top priority. This page describes the measures we use to protect data and meet legal requirements. It is not exhaustive; we will update it as threats and technologies evolve.',
    },
    avtentikacija: {
      title: 'Authorization & Authentication',
      p1: 'Controlling access requires ensuring only verified individuals can access systems. Our guidelines require the use of additional security mechanisms such as multi-factor authentication (MFA) or single sign-on (SSO) in addition to username and password. On our platform we use:',
      li1: '<strong>MFA:</strong> Login requires at least one additional confirmation (password + app or security token).',
      li2: '<strong>Role-based access:</strong> Users are assigned the minimum necessary permissions, with roles regularly reviewed and adjusted.',
      li3: '<strong>SSO integrations:</strong> On request, SSO can be used through trusted providers (e.g. Azure AD, Okta).',
      p2: 'Access to administrative functions is restricted to authorized personnel, and all logins and changes are logged.',
    },
    zascitaPodatkov: {
      title: 'Data Protection in Transit and at Rest',
      p1: 'All communications between the user\'s browser and our servers are encrypted using TLS/SSL. Cloud service guidelines emphasize that data must be protected with strong encryption when moving between networks. TLS certificates allow browsers to verify our server\'s identity and help prevent man-in-the-middle attacks.',
      p2: 'Sensitive data in our databases is encrypted at rest (AES‑256). The ICO states that encryption is an appropriate technical measure for protecting personal data in transit and storage. Decryption keys are managed through a Key Management System (KMS), and certificates are automatically renewed to avoid expiration.',
    },
    infrastruktura: {
      title: 'Infrastructure Protection & Redundancy',
      body: 'Our infrastructure is hosted in certified data centers with a high level of physical security. These centers operate under 24-hour surveillance with security cameras, multi-level access control systems, and redundant power supplies. We follow asset protection and resilience principles: data and systems must be protected from physical interference, loss, damage, or seizure. Data is mirrored across multiple geographic locations, backups are performed regularly, and disaster recovery procedures are tested.',
    },
    operativnaVarnost: {
      title: 'Operational Security, Monitoring & Incident Response',
      p1: 'Security is an ongoing process. Our operational practices are designed to prevent and detect attacks. We use a multi-layered approach that includes firewalls, DDoS protection, and traffic rate limiting. System activities (accesses, configuration changes, communications) are logged and continuously analyzed.',
      p2: 'We have an incident response plan in place covering identification, containment, notification, remediation, and post-incident analysis. The incident response team regularly conducts exercises to prepare for various scenarios.',
    },
    razvoj: {
      title: 'Secure Software Development',
      p1: 'Our services are designed according to the "Secure by Design" principle. Secure development guidelines recommend integrating security into all phases of the software lifecycle. This includes threat modeling, static code analysis, internal and external audits, and regular dependency updates.',
      p2: 'We have integrated automated vulnerability scanning into our CI/CD process. Development teams receive regular training in secure programming and stay informed about the latest threats.',
    },
    tveganja: {
      title: 'Risk Management & Supply Chain',
      p1: 'We recognize that security also depends on our partners and suppliers. We use a comprehensive supply chain security approach that includes vetting third-party providers, contractually binding them to equivalent security standards, and continuously monitoring compliance.',
      p2: 'We regularly conduct risk assessments and Data Protection Impact Assessments (DPIAs). Based on these assessments, we prepare action plans to address identified risks. We also apply user isolation — a compromise affecting one user must not impact the data or services of another.',
    },
    skladnost: {
      title: 'Compliance & Certifications',
      p1: 'Data security is closely linked to the legal framework. Expert recommendations state that security documentation should clearly define which standards and certifications a company supports. Lexora complies with the General Data Protection Regulation (GDPR) and follows the principle of integrity and confidentiality in processing personal data.',
      p2: 'Our goal is to obtain and maintain ISO/IEC 27001 and SOC 2 certifications. We also follow NCSC guidelines, which include principles such as data protection in transit, asset protection, operational security, identity and authentication, and secure service management.',
    },
    osebje: {
      title: 'Personnel Security & Awareness',
      p1: 'People are often the weakest link in the chain. Guidelines require thorough vetting and regular training of employees to reduce the likelihood of accidental or intentional compromise. At Lexora we conduct:',
      li1: 'background checks for new employees;',
      li2: 'regular training on phishing, secure password use, and handling sensitive data;',
      li3: 'strict access and approval policies (four-eyes principle).',
    },
    politika: {
      title: 'Security Policy & Transparency',
      body: 'Our users should feel protected and well-informed. In our documents, we therefore transparently explain how we protect data. Users can always contact us if they want additional information or copies of certifications.',
    },
    zakljucek: {
      title: 'Conclusion',
      body: 'Ensuring security and privacy is a core part of our mission. We continuously invest in technology, processes, and people to stay ahead of threats. This page reflects our current state of security measures; we will regularly update it in response to changes in legislation and best practices.',
    },
    footerCopy: '© {year} Lexora. All rights reserved.',
  },

  legalNav: {
    back: 'Back to home',
    terms: 'Terms of Use',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
  },
}

export const translations = { si, en }
export type Translations = typeof si
