import { motion, useScroll, useTransform } from "framer-motion";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { useTheme } from "@/components/theme-provider";
import { useRef } from "react";

export function Personal() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Orange progressive gradient based on scroll
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.6, 0.3]);
  const gradientPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="personal" ref={sectionRef} className="py-24 container mx-auto px-4 relative overflow-hidden">
      {/* Orange progressive gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          opacity: gradientOpacity,
          background: `linear-gradient(to bottom, 
            rgba(249, 115, 22, 0.1) 0%, 
            rgba(249, 115, 22, 0.3) 50%, 
            rgba(249, 115, 22, 0.1) 100%)`,
        }}
      />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">PERSONAL INFORMATION</h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] items-start">
        {/* Profile Image - Large Card */}
        <motion.div
          className="rounded-3xl overflow-hidden relative group h-full min-h-[260px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={isDark ? "/profile-dark.png" : "/profile-day.png"}
            alt="Catherine Arnado"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-bold">Catherine Arnado</h3>
            <p className="text-white/80">Creative Developer &amp; Designer</p>
          </div>
        </motion.div>

        {/* Bento Grid: Skillset, Tools, Languages */}
        <BentoGrid />
      </div>
    </section>
  );
}
