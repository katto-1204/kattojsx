import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Calendar, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import abstractBg from "@assets/generated_images/abstract_orange_and_white_glassmorphism_background.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const blur = useTransform(scrollY, [0, 300], [0, 10]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background with blur effect on scroll */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity, filter: `blur(${blur}px)` }}
      >
        <img src={abstractBg} alt="Background" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </motion.div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium tracking-wider">
            BSIT, 3rd Year
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.85] mb-2"
          style={{ y: y1 }}
        >
          CATHERINE
        </motion.h1>
        
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 mb-6"
          style={{ y: y2 }}
        >
          ARNADO
        </motion.h1>

        <motion.h2 
          className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A CREATIVE FULL STACK DEV
        </motion.h2>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button size="lg" className="rounded-full px-8 h-12 text-base group">
            <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
            DOWNLOAD CV
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-sm hover:bg-white/80 dark:bg-black/50 dark:hover:bg-black/80">
            <Calendar className="mr-2 w-4 h-4" />
            BOOK A CALL
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full w-12 h-12">
            <Github className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
    </section>
  );
}
