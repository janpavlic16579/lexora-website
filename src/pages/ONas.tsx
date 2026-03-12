import React from 'react';
import { ArrowLeft, Users, Target, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ONas: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-blue-500/30">
      <header className="fixed top-0 inset-x-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
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
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">O nas</h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
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
            <h2 className="text-3xl font-serif text-white mb-8">Naša misija</h2>
            <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-12 space-y-6">
              <p className="text-lg text-neutral-300 leading-relaxed">
                V Lexori verjamemo, da mora tehnologija pravnikom pomagati pri delu, ne pa ga zapletati.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Naša misija je razvijati orodja umetne inteligence, ki pravnikom omogočajo hitrejšo analizo dokumentov, učinkovitejšo pravno raziskavo in boljši pregled nad zadevo - brez kompromisov pri zanesljivosti, preglednosti in zaupnosti.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
                Pravo postaja vse bolj kompleksno, dokumentacije je vse več, čas za kakovostno pravno presojo pa vse manj. Zato gradimo Lexoro: delovno okolje, ki pomaga zmanjšati rutinsko delo in pravnikom omogoča, da se osredotočijo na tisto, kar ustvarja največ vrednosti - pravno presojo, argumentacijo in strategijo.
              </p>
              <p className="text-lg text-neutral-300 leading-relaxed">
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
            <h2 className="text-3xl font-serif text-white mb-12">Naša ekipa</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Jan Pavlič */}
              <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-neutral-900 transition-colors">
                <div className="w-32 h-32 rounded-full bg-neutral-800 border-4 border-neutral-950 mb-6 flex items-center justify-center overflow-hidden">
                  <img src="/jan.png" alt="Jan Pavlič" className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }} />
                  <span className="text-neutral-500 text-sm hidden">Jan</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Jan Pavlič</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">Vodja prodaje in komunikacije s strankami</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Jan skrbi za odnose z uporabniki in razvoj sodelovanj z odvetniškimi pisarnami. Njegova naloga je razumeti potrebe pravnikov in poskrbeti, da Lexora rešuje konkretne izzive pri vsakodnevnem pravnem delu.
                </p>
              </div>

              {/* Lovro Gril */}
              <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-neutral-900 transition-colors">
                <div className="w-32 h-32 rounded-full bg-neutral-800 border-4 border-neutral-950 mb-6 flex items-center justify-center overflow-hidden">
                  <img src="/lovro.png" alt="Lovro Gril" className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }} />
                  <span className="text-neutral-500 text-sm hidden">Lovro</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Lovro Gril</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">Programski razvijalec</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Lovro sodeluje pri razvoju platforme Lexora in implementaciji naprednih funkcionalnosti umetne inteligence. Njegovo delo je usmerjeno v razvoj orodij, ki pravnikom omogočajo hitrejšo analizo dokumentov in učinkovitejšo pripravo pravnih besedil.
                </p>
              </div>

              {/* Anej Žaler */}
              <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center hover:bg-neutral-900 transition-colors">
                <div className="w-32 h-32 rounded-full bg-neutral-800 border-4 border-neutral-950 mb-6 flex items-center justify-center overflow-hidden">
                  <span className="text-neutral-500 text-sm">Anej</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Anej Žaler</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">Programski razvijalec</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Anej je odgovoren za razvoj in tehnično arhitekturo sistema Lexora. Osredotoča se na gradnjo zanesljive infrastrukture in razvoj funkcionalnosti, ki omogočajo učinkovito uporabo umetne inteligence pri pravnem delu.
                </p>
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 text-center mt-8">
              <p className="text-lg text-neutral-300 leading-relaxed">
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
