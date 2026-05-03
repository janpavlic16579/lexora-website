import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';

import janImage from '../assets/team/jan.png';
import lovroImage from '../assets/team/lovro.png';
import mitjaImage from '../assets/team/mitja.jpg';

const TeamMemberImage = ({ src, alt, fallbackText }: { src: string | null | undefined, alt: string, fallbackText: string }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const isValidSrc = src && src !== '';
  const finalSrc = isValidSrc ? src : null;

  return (
    <div className="w-24 h-24 rounded-full bg-cream-200 border-2 border-cream-300 mb-5 flex items-center justify-center overflow-hidden relative">
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
            <div className="absolute inset-0 flex items-center justify-center bg-cream-200">
              <div className="w-5 h-5 border-2 border-ink-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </>
      ) : (
        <span className="font-serif text-xl text-ink-500">{fallbackText.charAt(0)}</span>
      )}
    </div>
  );
};

const TeamMember = ({ name, role, description, imageSrc, fallbackText }: {
  name: string;
  role: string;
  description: string;
  imageSrc: string | null | undefined;
  fallbackText: string;
}) => (
  <div className="bg-cream-100 border border-cream-300 rounded-2xl p-7 flex flex-col items-center text-center hover:bg-cream-200 transition-colors duration-200">
    <TeamMemberImage src={imageSrc} alt={name} fallbackText={fallbackText} />
    <h3 className="font-serif text-lg font-normal text-ink-900 mb-1 tracking-[-0.01em]">{name}</h3>
    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-400 mb-4">{role}</p>
    <p className="text-sm text-ink-600 leading-relaxed">{description}</p>
  </div>
);

const ONas: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-cream text-ink-800 font-sans selection:bg-tan-500/20 selection:text-ink-900">
      <header className="fixed top-0 inset-x-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-300">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-900 transition-colors text-sm font-medium">
            <ArrowLeft size={15} />
            {t.backHome}
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-400 mb-6">{t.onas.badge ?? 'O nas'}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[60px] text-ink-900 tracking-[-0.02em] leading-[1.05] mb-6">
              {t.onas.heading}
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed max-w-2xl">
              {t.onas.subheading}
            </p>
            <div className="w-12 h-px bg-cream-400 mt-10" />
          </motion.div>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-ink-400 mb-4">{t.onas.missionHeading}</p>
            <div className="bg-cream-100 border border-cream-300 rounded-2xl p-8 md:p-12 space-y-5">
              {[t.onas.missionP1, t.onas.missionP2, t.onas.missionP3, t.onas.missionP4].map((p, i) => (
                <p key={i} className="text-ink-600 leading-relaxed">{p}</p>
              ))}
            </div>
          </motion.section>

          {/* Team */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-ink-400 mb-10">{t.onas.teamHeading}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              <TeamMember
                name="Jan Pavlič"
                role="Vodja prodaje in komunikacije s strankami"
                description="Jan skrbi za odnose z uporabniki in razvoj sodelovanj z odvetniškimi pisarnami. Njegova naloga je razumeti potrebe pravnikov in poskrbeti, da Lexora rešuje konkretne izzive pri vsakodnevnem pravnem delu."
                imageSrc={janImage}
                fallbackText="Jan"
              />
              <TeamMember
                name="Anej Žaler"
                role="Glavni programski razvijalec"
                description="Anej je odgovoren za razvoj in tehnično arhitekturo sistema Lexora. Osredotoča se na gradnjo zanesljive infrastrukture in razvoj funkcionalnosti, ki omogočajo učinkovito uporabo umetne inteligence pri pravnem delu."
                imageSrc={null}
                fallbackText="Anej"
              />
              <TeamMember
                name="Lovro Gril"
                role="Programski razvijalec"
                description="Lovro sodeluje pri razvoju platforme Lexora in implementaciji naprednih funkcionalnosti umetne inteligence. Njegovo delo je usmerjeno v razvoj orodij, ki pravnikom omogočajo hitrejšo analizo dokumentov in učinkovitejšo pripravo pravnih besedil."
                imageSrc={lovroImage}
                fallbackText="Lovro"
              />
            </div>

            {/* Mitja — full width */}
            <div className="bg-cream-100 border border-cream-300 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center mb-5">
              <TeamMemberImage src={mitjaImage} alt="mag. Mitja Jelenič Novak" fallbackText="Mitja" />
              <h3 className="font-serif text-lg font-normal text-ink-900 mb-1 tracking-[-0.01em]">mag. Mitja Jelenič Novak</h3>
              <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-400 mb-6">odvetnik</p>
              <div className="text-sm text-ink-600 leading-relaxed max-w-2xl space-y-4 text-left">
                <p>Pred dobrim letom se mi je ponudila priložnost sodelovati z izjemno skupino mladih razvijalcev pri nastajanju orodja umetne inteligence za pravniško delo. Naš cilj je bil jasen: razviti program, ki bi pravnikom, tudi odvetnikom v kazenskih zadevah, lahko služil kot zanesljiv in uporaben pravni pomočnik. Veseli me, da je ta projekt v obliki Lexore ugledal luč sveta, zato bi začetek njegove komercialne poti rad pospremil z nekaj besedami.</p>
                <p>Pri tem projektu sem sodeloval, ker verjamem, da tehnološkega napredka ni mogoče ustaviti, ampak ga je treba razumeti in smiselno uporabiti. Povezovanje pravne stroke z naprednimi informacijskimi rešitvami odpira nove možnosti tudi za odvetniški poklic. Če se uporablja preudarno in strokovno, Lexora pomeni koristno nadgradnjo tradicionalnega načina pravniškega dela.</p>
                <p>Njena vrednost je predvsem v tem, da lahko bistveno skrajša čas za rutinska in tehnično zahtevna in zamudna opravila pri preučevanju zadev. Pomaga lahko pri pregledovanju obsežnih spisov, iskanju med številnimi listinami, njihovem razvrščanju ter pripravi povzetkov. S tem pravniku omogoča, da več časa nameni tistemu delu, ki je bistvo našega poklica: pravni presoji, argumentaciji in strategiji, skratka, kreativnemu delu.</p>
                <p>Ob tem pa želim poudariti, da je Lexora še vedno zgolj orodje. Lahko je zelo koristen pripomoček, ne more pa nadomestiti pravnikovega znanja, izkušenj in presoje. Tako kot pri drugih sistemih umetne inteligence je tudi njena uporabna vrednost v veliki meri odvisna od usposobljenosti uporabnika, od njegovega strokovnega pravnega znanja in od tega, kako natančno jo zna usmerjati do želenih rezultatov.</p>
                <p>Lexora torej ne more nadomestiti vaših možganov, lahko pa vam občutno prihrani čas pri preučevanju obsežnih dokaznih gradiv.</p>
              </div>
            </div>

            <div className="bg-cream-100 border border-cream-300 rounded-2xl p-8 text-center">
              <p className="text-ink-600 leading-relaxed">{t.onas.feedbackNote}</p>
            </div>
          </motion.section>

        </div>
      </main>

      <footer className="border-t border-cream-300 py-10 mt-8">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-400">© {new Date().getFullYear()} Lexora.</p>
        </div>
      </footer>
    </div>
  );
};

export default ONas;
