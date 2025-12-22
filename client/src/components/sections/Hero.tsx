import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Download, Calendar, Github, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import abstractBg from "@assets/generated_images/abstract_orange_and_white_glassmorphism_background.png";

export function Hero() {
  const [showSmmPortfolio, setShowSmmPortfolio] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const blur = useTransform(scrollY, [0, 300], [0, 10]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-32">
      {/* Logo at the top left */}
      <div className="absolute top-0 left-0 w-fit flex justify-start z-50 pointer-events-none p-4 sm:p-6">
        <Logo />
      </div>
      {/* Background with blur effect on scroll */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity, filter: `blur(${blur}px)` }}
      >
        <img 
          src={abstractBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 dark:opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background dark:from-black/60 dark:via-background/70 dark:to-background" />
      </motion.div>

      <div className="container max-w-full px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <span className="px-3 sm:px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-wider">
            BSIT, 3rd Year
          </span>
        </motion.div>

        <motion.h1 
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-display font-black tracking-tighter leading-[1.05] mb-1 sm:mb-2 uppercase break-words"
          style={{ y: y1 }}
        >
          CATHERINE
        </motion.h1>
        
        <motion.h1 
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] font-display font-black tracking-tighter leading-[1.05] text-primary mb-4 sm:mb-6 uppercase break-words"
          style={{ y: y2 }}
        >
          ARNADO
        </motion.h1>

        <motion.h2 
          className="text-base xs:text-lg md:text-2xl font-light tracking-wide text-muted-foreground mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A CREATIVE FULL STACK DEV
        </motion.h2>

        <motion.div 
          className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Button size="lg" className="rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base group" asChild>
            <a href="/assets/Arnado Catherine.pdf" download>
              <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
              DOWNLOAD CV
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base bg-white/50 backdrop-blur-sm hover:bg-white/80 dark:bg-black/50 dark:hover:bg-black/80" asChild>
            <a
              href="https://cal.com/catherine-arnado-qjp0c2"
              target="_blank"
              rel="noreferrer"
            >
              <Calendar className="mr-2 w-4 h-4" />
              BOOK A CALL
            </a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full px-6 sm:px-8 h-12 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
            asChild
          >
            <a
              href="https://kattojsx.my.canva.site/catherine-arnado-social-media-manager-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-semibold tracking-widest">(SMM)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full w-12 h-12" asChild>
            <a
              href="https://github.com/katto-1204"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* SMM Portfolio Modal removed – SMM button now opens Canva in a new tab */}

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-2 w-16 h-16 sm:left-10 sm:w-24 sm:h-24 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-2 w-20 h-20 sm:right-10 sm:w-32 sm:h-32 bg-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
    </section>
  );
}
