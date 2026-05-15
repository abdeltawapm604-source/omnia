"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-ivory flex items-center justify-center overflow-hidden px-6 pt-20 md:pt-0">
      
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blush rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pastel-peach rounded-full mix-blend-multiply filter blur-[140px] opacity-40 animate-float delay-1000"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mt-10 md:mt-0 gap-12 md:gap-0">
        
        <div className="flex-col md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 opacity-0 animate-fade-in-up">
          <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-charcoal/60">
            A Symphony of Silk & Modesty
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-charcoal leading-[1.05] tracking-tight">
            Art in <br className="hidden md:block" /> Every Fold.
          </h1>
          <div className="pt-8 border-t border-charcoal/10 w-full md:w-fit flex justify-center md:justify-start">
            <p className="font-sans text-[11px] italic tracking-widest text-charcoal/60">
              UX/UI Design by Abdelrahman Mohamed
            </p>
          </div>
        </div>

        <div className="flex-col md:w-1/2 flex items-center justify-center md:justify-end opacity-0 animate-fade-in-up group" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] aspect-square rounded-full flex items-center justify-center transition-all duration-700">
            
            <div className="absolute inset-[-10px] md:inset-[-15px] rounded-full border-2 border-pastel-peach/30 transition-transform duration-[4000ms] group-hover:rotate-180"></div>
            
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl bg-ivory-dark border-4 border-white/50 group-hover:shadow-2xl transition-all duration-500">
              <img 
                src="/hero.jpg" 
                alt="Elegant Modern Hijab Fashion Design - Omnia Ghanem Atelier" 
                className="object-cover w-full h-full group-hover:scale-[1.08] transition-transform duration-[1500ms] ease-out"
              />
            </div>
            
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 size-10 md:size-12 rounded-full border border-pastel-sage/50 flex items-center justify-center font-serif text-charcoal/30 bg-white/50 backdrop-blur-sm text-xs md:text-base">
              OG
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}