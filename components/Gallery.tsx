"use client";

export default function Gallery() {
  const artworks = [
    { id: 1, title: 'The Ethereal Dawn', img: '/gallery1.jpg', h: 'h-[300px] md:h-[400px]', tag: 'Spring' },
    { id: 2, title: 'Midnight Silk', img: '/gallery2.jpg', h: 'h-[250px] md:h-[300px]', tag: 'Bespoke' },
    { id: 3, title: 'Blush Symphony', img: '/gallery3.jpg', h: 'h-[320px] md:h-[450px]', tag: 'Limited' },
    { id: 4, title: 'Ivory Cascade', img: '/gallery4.jpg', h: 'h-[280px] md:h-[350px]', tag: 'Atelier' },
    { id: 5, title: 'Gilded Abaya', img: '/gallery5.jpg', h: 'h-[240px] md:h-[320px]', tag: 'New' },
    { id: 6, title: 'Desert Rose', img: '/gallery6.jpg', h: 'h-[350px] md:h-[480px]', tag: 'Featured' },
  ];

  return (
    <section className="py-16 md:py-24 bg-ivory px-4 md:px-6 relative transition-colors duration-700">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4 italic tracking-tight">The Masterpieces</h2>
          <div className="flex items-center justify-center gap-4">
            <span className="h-[1px] w-8 md:w-12 bg-charcoal/10"></span>
            <p className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-charcoal/40 font-bold">Curated Exhibition</p>
            <span className="h-[1px] w-8 md:w-12 bg-charcoal/10"></span>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {artworks.map((art) => (
            <div 
              key={art.id} 
              className="group relative flex flex-col space-y-4 break-inside-avoid cursor-pointer"
            >
              <div className={`relative ${art.h} overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-white border-[6px] md:border-[8px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-700 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 p-1.5 md:p-2`}>
                
                <img 
                  src={art.img} 
                  alt={art.title}
                  className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[1.8rem] transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/90 backdrop-blur-md px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-sm">
                  <span className="text-[6px] md:text-[7px] font-bold tracking-[0.2em] uppercase text-charcoal/60">{art.tag}</span>
                </div>
              </div>

              <div className="px-2 md:px-4 pb-4 space-y-1 border-b border-charcoal/5 group-hover:border-charcoal/20 transition-colors">
                <h4 className="text-lg md:text-xl font-serif text-charcoal tracking-tight">
                  {art.title}
                </h4>
                <div className="flex items-center justify-between">
                  <p className="text-[7px] md:text-[8px] font-bold tracking-[0.3em] uppercase text-charcoal/30 font-sans">Premium Collection</p>
                  <button className="text-sm md:text-base text-charcoal transform opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    →
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}