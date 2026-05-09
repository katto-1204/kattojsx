import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { useTheme } from "@/components/theme-provider";
import { User, Sparkles, Code } from "lucide-react";

export function Personal() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const activeAvatar = isDark ? "/profile-dark.png" : "/profile-day.png";

  return (
    <section id="personal" className="py-24 container mx-auto px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-black mb-4 text-primary-gradient">PERSONAL INFORMATION</h2>
        <div className="w-24 h-1.5 bg-primary-gradient rounded-full" />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
        {/* Bento Grid: Skillset, Tools, Languages */}
        <BentoGrid />

        {/* Profile Image - Large Card */}
        <div className="space-y-6">
          <motion.div
            className="rounded-[2.5rem] overflow-hidden relative group aspect-[3/4] bg-card border border-border shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 z-10">
              <img
                src={activeAvatar}
                alt="Catherine Arnado"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex flex-col justify-end p-8 z-20">
              <div>
                <h3 className="text-foreground text-3xl font-display font-black tracking-tighter">Catherine Arnado</h3>
                <p className="text-primary-gradient font-mono text-sm font-bold uppercase tracking-widest">Creative Developer</p>
              </div>
            </div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

