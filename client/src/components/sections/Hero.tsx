import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Download, Calendar, Github, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const blur = useTransform(scrollY, [0, 300], [0, 10]);
  
  const [avatarType, setAvatarType] = useState<"3d" | "pro">("3d");

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-32">

      {/* Background with blur effect on scroll */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity, filter: `blur(${blur}px)` }}
      >
        <img
          src="/assets/projects/cetso technofair.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10 grayscale brightness-50 hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-background" />
      </motion.div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT: Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <span className="px-4 py-2 rounded-full border border-orange-500/30 bg-primary-gradient text-white text-xs sm:text-sm font-black tracking-widest shadow-[0_0_20px_rgba(249,115,22,0.4)] uppercase">
                BSIT, 3rd Year • Dev
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter mb-6 uppercase leading-[0.85]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              CATHERINE <br />
              <span className="text-primary-gradient">ARNADO</span>
            </motion.h1>

            <motion.h2
              className="text-lg md:text-2xl font-light tracking-[0.2em] text-zinc-500 mb-10 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A Creative <span className="text-white font-black">Full Stack Dev</span>
            </motion.h2>

            <motion.div
              className="flex flex-row flex-wrap gap-4 justify-center lg:justify-start items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button size="lg" className="rounded-full px-8 h-14 text-sm font-black tracking-widest group bg-primary-gradient border-none hover:scale-105 transition-all shadow-xl shadow-orange-500/20" asChild>
                <a href="/assets/Arnado Catherine.pdf" download>
                  <Download className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                  DOWNLOAD CV
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-sm font-black tracking-widest border-orange-500/50 hover:bg-orange-500/10 backdrop-blur-sm" asChild>
                <a href="https://cal.com/catherine-arnado-qjp0c2" target="_blank" rel="noreferrer">
                  <Calendar className="mr-3 w-5 h-5 text-orange-500" />
                  BOOK CALL
                </a>
              </Button>
            </motion.div>
            
            <div className="mt-12 flex items-center gap-6">
               <a href="https://github.com/katto-1204" target="_blank" className="text-zinc-500 hover:text-orange-500 transition-colors"><Github size={24} /></a>
               <div className="w-12 h-[1px] bg-zinc-800" />
               <span className="text-[10px] font-black tracking-[0.4em] text-zinc-600 uppercase">Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT: Avatar with 3D Effect & Toggle */}
          <div className="flex-1 flex flex-col items-center lg:items-end justify-center order-1 lg:order-2">
            <div className="relative">
              <motion.div
                className="relative w-full max-w-[450px] aspect-square lg:aspect-auto lg:h-[600px] perspective-1000 cursor-crosshair"
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Glow background */}
                <div className="absolute inset-0 bg-primary-gradient opacity-20 blur-[100px] rounded-full scale-110 -z-10 animate-pulse" />
                
                <motion.div
                  key={avatarType}
                  className="w-full h-full relative"
                  initial={{ opacity: 0, rotateY: 45 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -45 }}
                  whileHover={{ 
                    rotateY: -15, 
                    rotateX: 10,
                    z: 50,
                    scale: 1.02
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={avatarType === "3d" ? "/assets/katcardgrowling3d.png" : "/assets/catherinehero.png"}
                    alt="Catherine Arnado"
                    className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(249,115,22,0.5)]"
                  />
                </motion.div>
              </motion.div>

              {/* Avatar Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setAvatarType(prev => prev === "3d" ? "pro" : "3d")}
                className="absolute bottom-10 right-0 lg:-right-6 w-14 h-14 rounded-full bg-zinc-900 border border-orange-500/30 flex items-center justify-center text-orange-500 shadow-2xl backdrop-blur-xl z-20"
              >
                <RefreshCw size={24} />
              </motion.button>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Elements — red-orange gradient blobs */}
      <div className="absolute top-1/4 left-2 w-16 h-16 sm:left-10 sm:w-24 sm:h-24 bg-red-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-2 w-20 h-20 sm:right-10 sm:w-32 sm:h-32 bg-orange-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
    </section>
  );
}
