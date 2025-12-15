import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/layout/Navbar";
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

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // minimal config to avoid type errors with recent versions
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
      <CustomCursor />
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
