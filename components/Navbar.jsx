"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-6xl rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-sm px-4 md:px-8 py-3 flex flex-row items-center justify-between transition-all">
        
        <div className="text-lg md:text-2xl font-serif font-bold text-charcoal dark:text-ivory">
          Omnia Ghanem
        </div>

        <ul className="hidden md:flex flex-row items-center gap-8 text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-charcoal dark:text-ivory">
          <li className="hover:opacity-50 transition-all cursor-pointer">Exhibitions</li>
          <li className="hover:opacity-50 transition-all cursor-pointer">Atelier</li>
          <li className="hover:opacity-50 transition-all cursor-pointer">Journal</li>
        </ul>

        <div className="flex flex-row items-center gap-2 md:gap-4">
          <button 
            onClick={() => mounted && setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="p-2 text-charcoal dark:text-ivory"
          >
            {mounted && theme === 'dark' ? "☀️" : "🌙"}
          </button>

          <button className="bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-all shadow-sm">
            Commission
          </button>
        </div>
      </nav>
    </header>
  );
}