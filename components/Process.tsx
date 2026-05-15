"use client";

import Image from "next/image";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "The Sketch",
      img: "/sketch.jpg",
      desc: "Every design begins as a charcoal study, capturing the flow of the silhouette.",
    },
    {
      num: "02",
      title: "Material Soul",
      img: "/fabric.jpg",
      desc: "Sourcing the finest mulberry silks and ethereal chiffons that speak to the skin.",
    },
    {
      num: "03",
      title: "Hand-Crafted",
      img: "/craft.jpg",
      desc: "Each fold is hand-stitched in our atelier, ensuring a bespoke fit that feels like a second soul.",
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-ivory px-4 md:px-6 border-t border-charcoal/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-24 gap-6 md:gap-8 text-center md:text-left">
          <div className="space-y-3 md:space-y-4">
            <p className="font-sans text-[8px] md:text-[10px] tracking-[0.5em] uppercase text-charcoal/40 font-bold">The Journey</p>
            <h2 className="text-3xl md:text-6xl font-serif text-charcoal leading-tight">The Art of <br className="hidden md:block" /> Creation.</h2>
          </div>
          <p className="text-[10px] md:text-sm font-sans text-charcoal/50 max-w-[280px] md:max-w-[320px] leading-relaxed italic">
            &quot;From the first stroke of charcoal to the final silken thread.&quot;
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-12 md:grid md:grid-cols-3">
          {steps.map((step, idx) => (
            <div key={idx} className="group flex flex-col space-y-3 md:space-y-6 w-[calc(50%-0.4rem)] md:w-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl md:rounded-3xl bg-charcoal/5 shadow-sm">
                <Image 
                  src={step.img} 
                  alt={step.title}
                  fill
                  className="object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <span className="absolute top-2 left-2 md:top-4 md:left-4 font-serif text-lg md:text-4xl text-white/90 mix-blend-difference z-10">
                  {step.num}
                </span>
              </div>
              
              <div className="space-y-1.5 md:space-y-3 pt-2 md:pt-4 border-t border-charcoal/10 group-hover:border-charcoal/30 transition-colors text-center md:text-left">
                <h3 className="text-sm md:text-2xl font-serif text-charcoal tracking-tight">{step.title}</h3>
                <p className="text-[7px] md:text-[13px] font-sans text-charcoal/60 leading-relaxed group-hover:text-charcoal transition-colors line-clamp-3 md:line-clamp-none">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}