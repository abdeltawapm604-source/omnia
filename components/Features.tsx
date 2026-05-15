"use client";

export default function Features() {
  const values = [
    { 
      title: "Premium Fabrics", 
      desc: "Curated silks and ethereal chiffons, sourced globally for an immaculate drape.", 
      icon: "〰️" 
    },
    { 
      title: "Artistic Vision", 
      desc: "Silhouettes treated as canvas. Every hue and fold is an expression of high art.", 
      icon: "✧" 
    },
    { 
      title: "Bespoke Tailoring", 
      desc: "Meticulous hand-stitching ensuring your piece is uniquely and perfectly yours.", 
      icon: "✣" 
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-ivory px-6 border-y border-charcoal/[0.02]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 justify-between">
        {values.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-4 md:space-y-6 group cursor-default">
            
            <div className="text-3xl md:text-4xl text-pastel-peach group-hover:text-charcoal transition-colors duration-700 ease-in-out">
              {val.icon}
            </div>

            <h3 className="text-xl md:text-2xl font-serif text-charcoal tracking-tight">
              {val.title}
            </h3>

            <p className="text-xs md:text-sm font-sans font-medium leading-relaxed text-charcoal/60 max-w-[280px]">
              {val.desc}
            </p>

            <div className="h-[1px] w-8 bg-charcoal/5 group-hover:w-16 group-hover:bg-charcoal/20 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
}