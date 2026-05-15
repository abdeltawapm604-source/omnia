"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ lang: 'en', setLang: (l) => {} });

export function Providers({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);