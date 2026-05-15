"use client";

import Image from "next/image";

export default function Hero() {
  const word1 = "OMNIA".split("");
  const word2 = "GHANEM".split("");

  return (
    <section className="relative w-full bg-[#F7F5F0] overflow-hidden flex flex-col justify-center pt-[100px] md:pt-[140px] pb-16 px-4 md:px-12 min-h-screen">
      
      {/* إضاءات خلفية خفيفة جداً للموبايل */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
        <div className="absolute top-0 left-0 w-[100vw] h-[50vh] bg-gradient-to-b from-[#E8DCCB] to-transparent"></div>
      </div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-8 z-10 flex-grow">
        
        {/* الجزء الأول: الصورة (صغرت على الموبايل وارتفعت) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start order-1">
          <div className="relative w-[80vw] sm:w-[60vw] md:w-[40vw] max-w-[500px] aspect-[4/5] md:aspect-auto md:h-[75vh] rounded-t-[200px] md:rounded-t-[300px] rounded-b-[20px] md:rounded-b-[40px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-[4px] md:border-[8px] border-white img-anim">
            <Image 
              src="/hero.jpg" 
              alt="Omnia Ghanem Atelier" 
              fill
              priority
              className="object-cover object-top"
            />
            
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/30 to-transparent"></div>

            <div className="absolute bottom-6 md:bottom-8 left-0 w-full flex flex-col items-center text-center px-4 text-white">
              <p className="font-sans text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase mb-1.5 md:mb-2 fade-up-1">
                A Symphony of Silk
              </p>
              <h2 className="font-serif text-3xl md:text-4xl tracking-wide fade-up-2">
                The New Era.
              </h2>
            </div>
          </div>
        </div>

        {/* الجزء التاني: الاسم بانفجار الحروف */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center order-2 text-center md:text-left mt-2 md:mt-0">
          <h1 className="text-[17vw] sm:text-[14vw] md:text-[10vw] lg:text-[11vw] leading-[0.85] font-serif uppercase flex flex-col items-center md:items-start w-full">
            
            {/* الكلمة الأولى */}
            <div className="flex mb-2 md:mb-6 justify-center md:justify-start w-full">
              {word1.map((char, index) => (
                <span 
                  key={index} 
                  className="inline-block letter-anim font-bold drop-shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* الكلمة التانية */}
            <div className="flex justify-center md:justify-start w-full">
              {word2.map((char, index) => (
                <span 
                  key={index} 
                  className="inline-block letter-anim font-bold drop-shadow-sm"
                  style={{ animationDelay: `${(index + word1.length) * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </div>
          </h1>

          <div className="mt-8 md:mt-12 max-w-[95%] md:max-w-sm fade-up-3">
            <p className="font-sans text-xs md:text-base text-[#3A3A3A]/70 leading-relaxed italic">
              Where modesty meets avant-garde. Every design is a carefully curated masterpiece
            </p>
          </div>
        </div>

      </div>

      {/* الكريديت */}
      <div className="w-full text-center mt-12 md:mt-0 md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2 z-30 fade-up-4">
        <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#3A3A3A]/40 font-bold">
          UX/UI Design by Abdo
        </p>
      </div>

      {/* Pure CSS Animations - خفيفة جداً ومستحيل تعلق */}
      <style dangerouslySetInnerHTML={{__html: `
        .letter-anim {
          opacity: 0;
          animation: safeExplode 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .img-anim {
          opacity: 0;
          transform: translateY(30px);
          animation: simpleFadeUp 1.5s ease-out 0.5s forwards;
        }

        .fade-up-1 { opacity: 0; animation: simpleFadeUp 1s ease-out 1.2s forwards; }
        .fade-up-2 { opacity: 0; animation: simpleFadeUp 1s ease-out 1.4s forwards; }
        .fade-up-3 { opacity: 0; animation: simpleFadeUp 1s ease-out 1.6s forwards; }
        .fade-up-4 { opacity: 0; animation: simpleFadeUp 1s ease-out 2s forwards; }

        @keyframes safeExplode {
          0% {
            transform: scale(2) translateY(-20px);
            opacity: 0;
            color: #FFD700;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
            color: #3A3A3A;
          }
        }

        @keyframes simpleFadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}