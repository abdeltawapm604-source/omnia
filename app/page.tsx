"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import ArtIntro from "@/components/ArtIntro";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
  }, []);

  // منع مشاكل الـ Hydration لضمان ظهور المحتوى فورًا على الموبايل
  if (!isMounted) return <div className="bg-[#F7F5F0] min-h-screen" />;

  return (
    <main className="min-h-screen relative">
      {isLoading ? (
        <ArtIntro onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="animate-[siteFadeIn_1.2s_ease-in-out_forwards]">
          <Navbar />
          <Hero />
          <Features />
          <Gallery />
          <Process />
          <Footer />
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes siteFadeIn {
          from { opacity: 0; filter: blur(10px); transform: scale(1.02); }
          to { opacity: 1; filter: blur(0); transform: scale(1); }
        }
      `}} />
    </main>
  );
}