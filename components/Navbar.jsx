"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="fixed top-4 md:top-8 left-0 right-0 z-[100] flex justify-center px-4">
      <nav className="w-full max-w-6xl rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-sm px-4 md:px-8 py-2 md:py-3 flex flex-row items-center justify-between transition-all relative">
        
        <div className="text-base md:text-2xl font-serif font-bold text-charcoal dark:text-ivory z-50">
          Omnia Ghanem
        </div>

        <ul className="hidden md:flex flex-row items-center gap-8 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-charcoal dark:text-ivory">
          <li className="hover:opacity-50 transition-all cursor-pointer">Exhibitions</li>
          <li className="hover:opacity-50 transition-all cursor-pointer">Atelier</li>
          <li className="hover:opacity-50 transition-all cursor-pointer">Journal</li>
        </ul>

        <div className="flex flex-row items-center gap-1 md:gap-4 z-50">
          <button 
            onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 text-charcoal dark:text-ivory hover:scale-110 transition-transform"
          >
            {mounted && theme === "dark" ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707MD12 5a7 7 0 000 14 7 7 0 000-14z" /></svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <button className="hidden sm:block bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-all shadow-sm">
            Commission
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal dark:text-ivory"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        <div className={`absolute top-full left-0 right-0 mt-2 p-6 bg-white/95 dark:bg-black/90 backdrop-blur-2xl rounded-[2rem] border border-white/40 dark:border-white/10 shadow-xl md:hidden transition-all duration-500 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          <ul className="flex flex-col gap-6 text-[11px] font-sans font-bold tracking-[0.3em] uppercase text-charcoal dark:text-ivory text-center">
            <li className="hover:opacity-50 transition-all cursor-pointer" onClick={() => setIsOpen(false)}>Exhibitions</li>
            <li className="hover:opacity-50 transition-all cursor-pointer" onClick={() => setIsOpen(false)}>Atelier</li>
            <li className="hover:opacity-50 transition-all cursor-pointer" onClick={() => setIsOpen(false)}>Journal</li>
            <li className="sm:hidden border-t border-charcoal/10 dark:border-white/10 pt-4">
               <button className="w-full bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal py-3 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                Commission
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}