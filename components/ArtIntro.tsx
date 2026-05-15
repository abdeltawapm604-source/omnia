"use client";

import { useEffect, useState } from "react";
// استيراد الأيقونات الاحترافية
import { Palette, Brush, Sparkles, Wind, MousePointer2 } from "lucide-react";

export default function ArtIntro({ onComplete }: { onComplete: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFCFB] overflow-hidden">
      {/* Canvas Texture */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/canvas-paper.png')]"></div>
      
      {/* Watercolor Splashes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-[#E8DCCB] rounded-full mix-blend-multiply filter blur-[100px] animate-pulse opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#D6C5B3] rounded-full mix-blend-multiply filter blur-[120px] animate-pulse opacity-30"></div>
      </div>

      {/* Floating Professional Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Brush Icon */}
        <div className="absolute top-[15%] left-[12%] animate-[float_4s_infinite] text-[#3A3A3A]/20">
          <Brush size={64} strokeWidth={1} />
        </div>
        
        {/* Palette Icon */}
        <div className="absolute bottom-[20%] right-[12%] animate-[float_5s_infinite_reverse] text-[#3A3A3A]/20">
          <Palette size={72} strokeWidth={1} />
        </div>

        {/* Butterfly / Wind Effect Icons */}
        <div className="absolute top-[40%] right-[18%] animate-[butterfly_6s_infinite] text-[#3A3A3A]/15">
          <Wind size={40} strokeWidth={1} />
        </div>
        <div className="absolute bottom-[30%] left-[18%] animate-[butterfly_8s_infinite_reverse] text-[#3A3A3A]/15">
          <Sparkles size={32} strokeWidth={1} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6">
        <h1 className="text-5xl md:text-8xl font-serif text-[#3A3A3A] tracking-tighter mb-4 text-center">
          {"Omnia Ghanem".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block animate-[inkIn_0.8s_ease-out_forwards]"
              style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        
        <div className="w-0 h-[1px] bg-[#3A3A3A]/30 mb-12 animate-[lineDraw_1.2s_ease-in-out_1s_forwards]"></div>

        {/* ENTER Button with Lucide Icon */}
        <button 
          onClick={onComplete}
          className="group relative px-16 py-5 bg-[#3A3A3A] text-[#F7F5F0] transition-all duration-500 overflow-hidden active:scale-95 shadow-2xl flex items-center gap-4"
        >
          <span className="relative z-10 font-serif text-2xl tracking-[0.4em] uppercase">ENTER</span>
          <MousePointer2 className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-2" />
          
          <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#3A3A3A]"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#3A3A3A]"></div>
        </button>

        <p className="mt-10 font-sans text-[10px] tracking-[0.8em] uppercase text-[#3A3A3A]/40 animate-pulse">
          Atelier Collection 2026
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes inkIn {
          0% { filter: blur(12px); opacity: 0; transform: scale(0.9); }
          100% { filter: blur(0); opacity: 1; transform: scale(1); }
        }
        @keyframes lineDraw {
          to { width: 100%; max-width: 320px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(10deg); }
        }
        @keyframes butterfly {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -40px) scale(1.1); }
        }
      `}} />
    </div>
  );
}