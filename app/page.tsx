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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // نضمن إن الكود شغال في المتصفح 100%
    setMounted(true);
    
    // لو حابب تتأكد إنها شغالة، افتح الـ Console في المتصفح
    console.log("App Mounted - Intro Status:", isLoading);
  }, [isLoading]);

  // لو لسه السيرفر بيحمل، م تظهرش حاجة عشان م يحصلش Flicker
  if (!mounted) return null;

  return (
    <main className="min-h-screen relative">
      {isLoading ? (
        <ArtIntro onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <Hero />
          <Features />
          <Gallery />
          <Process />
          <Footer />
        </div>
      )}
    </main>
  );
}