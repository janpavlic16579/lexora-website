import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Shield, FileText, Zap, Search, BookOpen, Scale, MessageSquare, Sparkles, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';

const KakoZaceti: React.FC = () => {
  const { t } = useLang();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stepIcons = [
    <Shield size={18} className="text-blue-600" />,
    <FileText size={18} className="text-blue-600" />,
    <Zap size={18} className="text-blue-600" />,
  ];
  const featureStyles = [
    { icon: <Search size={18} />, color: 'bg-blue-50 text-blue-600' },
    { icon: <FileText size={18} />, color: 'bg-emerald-50 text-emerald-600' },
    { icon: <BookOpen size={18} />, color: 'bg-violet-50 text-violet-600' },
    { icon: <Scale size={18} />, color: 'bg-orange-50 text-orange-600' },
    { icon: <MessageSquare size={18} />, color: 'bg-pink-50 text-pink-600' },
    { icon: <Sparkles size={18} />, color: 'bg-amber-50 text-amber-600' },
  ];

  const steps = t.getStarted.steps.map((s, i) => ({ ...s, num: `0${i + 1}`, icon: stepIcons[i] }));
  const features = t.getStarted.features.map((f, i) => ({ ...f, ...featureStyles[i] }));
  const faqs = t.getStarted.faqs;

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-500/30">
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            {t.backHome}
          </Link>
        </div>
      </header>

      <main className="pt-24">
        {/* Header */}
        <section className="pb-16 bg-white text-center border-b border-neutral-100">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto px-6 pt-8"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              {t.getStarted.badge}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-neutral-950 tracking-tight leading-[1.1] mb-5">
              {t.getStarted.heading}
            </h1>
            <p className="text-lg text-neutral-500 leading-relaxed">
              {t.getStarted.subtext}
            </p>
          </motion.div>
        </section>

        {/* Video */}
        <section id="video-začetek" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/d6VyCQnH0wc?modestbranding=1&rel=0"
                title="Lexora predstavitev"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Steps */}
        <section id="koraki-začetek" className="py-20 bg-neutral-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full border-2 border-blue-200 bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm mb-5">
                    {step.num}
                  </div>
                  <div className="mb-3">{step.icon}</div>
                  <h3 className="font-semibold text-neutral-900 text-lg mb-2">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="funkcije-začetek" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-14"
            >
              <h2 className="font-serif text-4xl text-neutral-950 tracking-tight mb-4">{t.getStarted.featuresHeading}</h2>
              <p className="text-neutral-500 max-w-xl mx-auto">{t.getStarted.featuresSubtext}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>{f.icon}</div>
                  <h3 className="font-semibold text-neutral-900 mb-2">{f.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq-začetek" className="py-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl text-neutral-950 tracking-tight mb-4">{t.getStarted.faqHeading}</h2>
              <p className="text-neutral-500">{t.getStarted.faqSubtext}</p>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-neutral-900 hover:text-blue-600 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 ml-4 text-neutral-400 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-blue-500' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-neutral-950 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto px-6"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-6">{t.getStarted.ctaHeading}</h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              {t.getStarted.ctaSubtext}
            </p>
            <a
              href="https://app.lexora.si/"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-neutral-950 font-semibold rounded-full hover:bg-neutral-100 transition-colors"
            >
              {t.getStarted.ctaButton} <ArrowRight size={18} />
            </a>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default KakoZaceti;
