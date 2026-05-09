import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Github } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const profileImg = "/assets/katcardgrowling3d.png";
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const blur = useTransform(scrollY, [0, 300], [0, 10]);

  return (
    <section id="home" className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-32">

      {/* Top Center Credential Line */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-[60] w-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card border-primary/20"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-black tracking-[0.2em] uppercase text-foreground">
            BSIT, 3rd Year • Full Stack Dev
          </span>
        </motion.div>
      </div>


      <div className="container max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT: Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            {/* Stylized Logo instead of Text Name */}
            <motion.div
              className="relative mb-8 w-full max-w-[550px]"
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img 
                src="/assets/catherinehero.png" 
                alt="CATHERINE ARNADO" 
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.h2
              className="text-lg md:text-2xl font-light tracking-[0.25em] text-zinc-500 mb-12 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A Creative <span className="text-foreground font-black underline decoration-orange-500 decoration-4 underline-offset-8">Full Stack Dev</span>
            </motion.h2>

            <motion.div
              className="flex flex-row flex-wrap gap-5 justify-center lg:justify-start items-center w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Button size="lg" className="rounded-full px-10 h-16 text-base font-black tracking-widest group bg-primary-gradient border-none hover:scale-105 transition-all shadow-2xl shadow-orange-500/30 text-white" asChild>
                <a href="/assets/Arnado Catherine.pdf" download>
                  <Download className="mr-3 w-6 h-6 group-hover:animate-bounce" />
                  DOWNLOAD CV
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-base font-black tracking-widest border-orange-500/50 hover:bg-orange-500/10 backdrop-blur-md" asChild>
                <a href="https://cal.com/catherine-arnado-qjp0c2" target="_blank" rel="noreferrer">
                  <Calendar className="mr-3 w-6 h-6 text-orange-500" />
                  BOOK CALL
                </a>
              </Button>
            </motion.div>
            
            <div className="mt-16 flex items-center gap-8">
               <a href="https://github.com/katto-1204" target="_blank" className="text-muted-foreground hover:text-orange-500 transition-all hover:scale-110"><Github size={28} /></a>
               <div className="w-16 h-[1px] bg-border" />
               <span className="text-[12px] font-black tracking-[0.5em] text-muted-foreground/60 uppercase animate-pulse">Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT: Profile Image */}
          <div className="flex-1 flex flex-col items-center lg:items-end justify-center order-1 lg:order-2">
            <div className="relative">
              <motion.div
                className="relative w-full max-w-[600px] aspect-square lg:aspect-auto lg:h-[800px]"
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Intense Glow background */}
                <div className="absolute inset-0 bg-primary-gradient opacity-20 blur-[120px] rounded-full scale-110 -z-10 animate-pulse" />
                <div className="w-full h-full relative">
                  <img
                    src={profileImg}
                    alt="Catherine Arnado"
                    className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(249,115,22,0.3)] transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements — enhanced red-orange gradient blobs */}
      <div className="absolute top-1/4 -left-10 w-32 h-32 bg-red-600/30 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-orange-500/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
    </section>
  );
}
