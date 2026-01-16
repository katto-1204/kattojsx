import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/layout/Navbar";
import { TopHeader } from "@/components/layout/TopHeader";
import Logo from "@/components/layout/Logo";
import { WelcomeScreen } from "@/components/ui/WelcomeScreen";
import { Hero } from "@/components/sections/Hero";
import { Personal } from "@/components/sections/Personal";
import { Experience } from "@/components/sections/Experience";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { VisualPortfolio } from "@/components/sections/VisualPortfolio";
import { Certifications } from "@/components/sections/Certifications";
import { EducationalTour } from "@/components/sections/EducationalTour";
import { Journal } from "@/components/sections/Journal";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { HeroScene } from "@/components/3d/HeroScene";

import { useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  // Logo appears only AFTER the 3D logo finishes traveling (progress > 0.5)
  const logoOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <WelcomeScreen />
      <CustomCursor />
      {/* 3D Logo Scene - FIXED as THE permanent logo, travels to top-left and stays there */}
      <HeroScene scrollProgress={scrollYProgress} />
      {/* Removed 2D Logo - Logo3D is now THE header logo */}
      <TopHeader />
      <Navbar />

      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        <Personal />
        <Experience />
        <SelectedWorks />
        <VisualPortfolio />
        <Certifications />
        <EducationalTour />
        <Journal />
      </main>

      <Footer />
    </div>
  );
}
