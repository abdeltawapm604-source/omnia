"use client";

export default function Footer() {
  return (
    <footer className="bg-ivory py-16 md:py-24 px-6 border-t border-charcoal/[0.03]">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10 md:space-y-12">
        
        <div className="text-center space-y-3 md:space-y-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal tracking-tighter">
            Omnia Ghanem
          </h2>
          <p className="font-sans text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-charcoal/30">
            A Symphony of Silk & Modesty
          </p>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-6 md:gap-16 text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-charcoal/60">
            {['Instagram', 'Pinterest', 'Atelier', 'Contact'].map((link) => (
              <li key={link} className="hover:text-charcoal cursor-pointer transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-charcoal transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-full pt-10 md:pt-12 border-t border-charcoal/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/30">
            © 2026 Omnia Ghanem Atelier. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal/20">
              Designed by
            </span>
            <span className="text-[10px] font-serif italic text-charcoal/60 hover:text-charcoal transition-colors cursor-default">
              Abdelrahman Mohamed
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}