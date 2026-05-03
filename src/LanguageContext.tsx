import React, { createContext, useContext, useState } from 'react'
import { translations, type Lang, type Translations } from './i18n'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'si',
  setLang: () => {},
  t: translations.si,
})

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('lexora-lang')
      return stored === 'en' ? 'en' : 'si'
    } catch {
      return 'si'
    }
  })

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('lexora-lang', newLang)
    } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)

export const LangToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, setLang } = useLang()
  return (
    <div className={`flex items-center gap-0.5 bg-neutral-100 rounded-full p-0.5 border border-neutral-200 ${className}`}>
      <button
        onClick={() => setLang('si')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === 'si'
            ? 'bg-white text-neutral-900 shadow-sm'
            : 'text-neutral-500 hover:text-neutral-700'
        }`}
      >
        SL
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          lang === 'en'
            ? 'bg-white text-neutral-900 shadow-sm'
            : 'text-neutral-500 hover:text-neutral-700'
        }`}
      >
        EN
      </button>
    </div>
  )
}
