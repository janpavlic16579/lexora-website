import React, { useState } from 'react';
import { ArrowLeft, Users, Target, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TeamMemberImage = ({ src, alt, fallbackText }: { src: string, alt: string, fallbackText: string }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [version] = useState(() => Date.now());

  // Robust check for empty or invalid source
  const isValidSrc = src && src !== '' && src !== '/anej.png';
  const finalSrc = isValidSrc ? src : null;

  return (
    <div className="w-32 h-32 rounded-full bg-neutral-200 border-4 border-white mb-6 flex items-center justify-center overflow-hidden relative shadow-sm">
      {finalSrc && !error ? (
        <>
          <img 
            src={finalSrc} 
            alt={alt} 
            className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            referrerPolicy="no-referrer" 
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)} 
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-neutral-100">
          <span className="text-neutral-500 text-xl font-serif font-medium">{fallbackText.charAt(0)}</span>
        </div>
      )}
    </div>
  );
};

const TeamMember = ({ name, role, description, imageSrc, fallbackText }: { name: string, role: string, description: string, imageSrc: string, fallbackText: string }) => (
  <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-neutral-100 transition-all duration-300 hover:shadow-md">
    <TeamMemberImage src={imageSrc} alt={name} fallbackText={fallbackText} />
    <h3 className="text-xl font-bold text-neutral-900 mb-1">{name}</h3>
    <p className="text-blue-600 text-sm font-medium mb-4">{role}</p>
    <p className="text-neutral-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const ONas: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-500/30">
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Nazaj na prvo stran
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6">O nas</h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Spoznajte ekipo in misijo, ki stoji za Lexoro. Gradimo prihodnost pravnega dela z umetno inteligenco.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-serif text-neutral-900 mb-8">Naša misija</h2>
            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 md:p-12 space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                V Lexori verjamemo, da mora tehnologija pravnikom pomagati pri delu, ne pa ga zapletati.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Naša misija je razvijati orodja umetne inteligence, ki pravnikom omogočajo hitrejšo analizo dokumentov, učinkovitejšo pravno raziskavo in boljši pregled nad zadevo - brez kompromisov pri zanesljivosti, preglednosti in zaupnosti.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Pravo postaja vse bolj kompleksno, dokumentacije je vse več, čas za kakovostno pravno presojo pa vse manj. Zato gradimo Lexoro: delovno okolje, ki pomaga zmanjšati rutinsko delo in pravnikom omogoča, da se osredotočijo na tisto, kar ustvarja največ vrednosti - pravno presojo, argumentacijo in strategijo.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Naš cilj je opolnomočiti pravnike z orodjem, ki jim pomaga delati hitreje, bolj pregledno in z več zaupanja v informacije, na katerih gradijo svoje odločitve.
              </p>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif text-neutral-900 mb-12">Naša ekipa</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <TeamMember 
                name="Jan Pavlič"
                role="Vodja prodaje in komunikacije s strankami"
                description="Jan skrbi za odnose z uporabniki in razvoj sodelovanj z odvetniškimi pisarnami. Njegova naloga je razumeti potrebe pravnikov in poskrbeti, da Lexora rešuje konkretne izzive pri vsakodnevnem pravnem delu."
                imageSrc="/jan-2.png"
                fallbackText="Jan"
              />
              <TeamMember 
                name="Anej Žaler"
                role="Glavni programski razvijalec"
                description="Anej je odgovoren za razvoj in tehnično arhitekturo sistema Lexora. Osredotoča se na gradnjo zanesljive infrastrukture in razvoj funkcionalnosti, ki omogočajo učinkovito uporabo umetne inteligence pri pravnem delu."
                imageSrc="/anej.png"
                fallbackText="Anej"
              />
              <TeamMember 
                name="Lovro Gril"
                role="Programski razvijalec"
                description="Lovro sodeluje pri razvoju platforme Lexora in implementaciji naprednih funkcionalnosti umetne inteligence. Njegovo delo je usmerjeno v razvoj orodij, ki pravnikom omogočajo hitrejšo analizo dokumentov in učinkovitejšo pripravo pravnih besedil."
                imageSrc="/lovro-copy.png"
                fallbackText="Lovro"
              />
            </div>

            {/* Mitja Jelenič Novak - Full Width */}
            <div className="mb-12">
              <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-neutral-100 transition-all duration-300 hover:shadow-md">
                <TeamMemberImage 
                  src="/mitja-copy.jpg"
                  alt="mag. Mitja Jelenič Novak"
                  fallbackText="Mitja"
                />
                <h3 className="text-xl font-bold text-neutral-900 mb-1">mag. Mitja Jelenič Novak</h3>
                <p className="text-blue-600 text-sm font-medium mb-4">odvetnik</p>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-2xl">
                  Pred dobrim letom se mi je ponudila priložnost sodelovati z izjemno skupino mladih razvijalcev pri nastajanju orodja umetne inteligence za pravniško delo. Naš cilj je bil jasen: razviti program, ki bi pravnikom, tudi odvetnikom v kazenskih zadevah, lahko služil kot zanesljiv in uporaben pravni pomočnik. Veseli me, da je ta projekt v obliki Lexore ugledal luč sveta, zato bi začetek njegove komercialne poti rad pospremil z nekaj besedami.<br/><br/>
                  Pri tem projektu sem sodeloval, ker verjamem, da tehnološkega napredka ni mogoče ustaviti, ampak ga je treba razumeti in smiselno uporabiti. Povezovanje pravne stroke z naprednimi informacijskimi rešitvami odpira nove možnosti tudi za odvetniški poklic. Če se uporablja preudarno in strokovno, Lexora pomeni koristno nadgradnjo tradicionalnega načina pravniškega dela.<br/><br/>
                  Njena vrednost je predvsem v tem, da lahko bistveno skrajša čas za rutinska in tehnično zahtevna in zamudna opravila pri preučevanju zadev. Pomaga lahko pri pregledovanju obsežnih spisov, iskanju med številnimi listinami, njihovem razvrščanju ter pripravi povzetkov. S tem pravniku omogoča, da več časa nameni tistemu delu, ki je bistvo našega poklica: pravni presoji, argumentaciji in strategiji, skratka, kreativnemu delu.<br/><br/>
                  Ob tem pa želim poudariti, da je Lexora še vedno zgolj orodje. Lahko je zelo koristen pripomoček, ne more pa nadomestiti pravnikovega znanja, izkušenj in presoje. Tako kot pri drugih sistemih umetne inteligence je tudi njena uporabna vrednost v veliki meri odvisna od usposobljenosti uporabnika, od njegovega strokovnega pravnega znanja in od tega, kako natančno jo zna usmerjati do želenih rezultatov.<br/><br/>
                  Lexora torej ne more nadomestiti vaših možganov, lahko pa vam občutno prihrani čas pri preučevanju obsežnih dokaznih gradiv.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 text-center mt-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                S številnimi slovenskimi odvetniki in njihovim aktivnim feedbackom neprestano izboljšujemo naš produkt, da bi ta čim bolje odgovarjal na realne izzive v pravni praksi.
              </p>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
};

export default ONas;
