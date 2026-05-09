import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { LoadingOverlay } from "@/components/ui/LoadingOverlay";

export function GatewaySection() {
  const [hoveredSide, setHoveredSide] = useState<"code" | "creative" | null>(null);
  const [transitioning, setTransitioning] = useState<"code" | "creative" | null>(null);
  const [, setLocation] = useLocation();

  const handleNavigate = (type: "code" | "creative") => {
    setTransitioning(type);
    setTimeout(() => {
      setLocation(type === "code" ? "/incode" : "/beyondcode");
    }, 1500);
  };

  return (
    <section id="gateway" className="py-20 relative overflow-hidden bg-zinc-950 min-h-[900px] flex items-center">
      <AnimatePresence>
        {transitioning === "code" && (
          <LoadingOverlay text="IN CODE" color="#dc2626" textColor="white" />
        )}
        {transitioning === "creative" && (
          <LoadingOverlay text="BEYOND THE CODE" color="#991b1b" textColor="white" />
        )}
      </AnimatePresence>

      {/* PORTRAITS - Cinematic Framing (Extreme Edges) */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-visible select-none">
        {/* Beyond Code (Left Face) */}
        <motion.div 
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          animate={{ 
            x: hoveredSide === "creative" ? 50 : 0,
            scale: hoveredSide === "creative" ? 1.1 : 1,
            filter: hoveredSide === "creative" ? "grayscale(0) brightness(1.1)" : "grayscale(0.4) brightness(0.7)"
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-10 -bottom-10 -left-20 md:-left-40 lg:-left-64 w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] pointer-events-none"
        >
          <img 
            src="/assets/kat beyond the code.png" 
            alt="Beyond Code" 
            className="w-full h-full object-contain object-left scale-125 md:scale-150 origin-left transition-all duration-700"
          />
        </motion.div>

        {/* In Code (Right Face) */}
        <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          animate={{ 
            x: hoveredSide === "code" ? -50 : 0,
            scale: hoveredSide === "code" ? 1.1 : 1,
            filter: hoveredSide === "code" ? "grayscale(0) brightness(1.1)" : "grayscale(0.4) brightness(0.7)"
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-10 -bottom-10 -right-20 md:-right-40 lg:-right-64 w-[50%] md:w-[40%] lg:w-[35%] xl:w-[30%] pointer-events-none"
        >
          <img 
            src="/assets/kat in code.png" 
            alt="In Code" 
            className="w-full h-full object-contain object-right scale-125 md:scale-150 origin-right transition-all duration-700"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row min-h-[700px] items-center justify-between gap-12 lg:gap-32">
          
          {/* BEYOND CODE (Left Side) */}
          <motion.div 
            className="flex-1 flex flex-col items-center lg:items-end justify-center relative cursor-pointer group"
            onMouseEnter={() => setHoveredSide("creative")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() => handleNavigate("creative")}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right max-w-lg">
              <motion.div 
                animate={{ y: hoveredSide === "creative" ? -10 : 0 }}
                className="w-20 h-20 rounded-3xl bg-primary-gradient flex items-center justify-center mb-8 text-white shadow-[0_20px_40px_rgba(249,115,22,0.2)]"
              >
                <Palette size={40} />
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl xl:text-9xl font-display font-black tracking-tighter mb-6 group-hover:text-primary-gradient transition-all duration-500 uppercase leading-[0.8]">
                BEYOND<br />CODE
              </h2>
              <p className="text-zinc-400 text-xl mb-10 font-medium max-w-sm">
                Designs, visuals, organizations, and creative work that shape how I think.
              </p>
              
              <div className="flex flex-col gap-6 items-center lg:items-end">
                <Button variant="outline" className="rounded-full h-14 px-10 border-orange-500/30 hover:bg-primary-gradient hover:border-none hover:text-white transition-all text-sm font-black uppercase tracking-widest shadow-xl">
                  See Creative <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
                
                <span className="text-[10px] font-black tracking-[0.3em] text-zinc-600 flex items-center gap-3 uppercase">
                   <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
                   INCLUDING HOTWHEELS COLLECTION
                </span>
              </div>
            </div>
          </motion.div>

          {/* IN CODE (Right Side) */}
          <motion.div 
            className="flex-1 flex flex-col items-center lg:items-start justify-center relative cursor-pointer group"
            onMouseEnter={() => setHoveredSide("code")}
            onMouseLeave={() => setHoveredSide(null)}
            onClick={() => handleNavigate("code")}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
              <motion.div 
                animate={{ y: hoveredSide === "code" ? -10 : 0 }}
                className="w-20 h-20 rounded-3xl bg-primary-gradient flex items-center justify-center mb-8 text-white shadow-[0_20px_40px_rgba(249,115,22,0.2)]"
              >
                <Code2 size={40} />
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl xl:text-9xl font-display font-black tracking-tighter mb-6 group-hover:text-primary-gradient transition-all duration-500 uppercase leading-[0.8]">
                IN<br />CODE
              </h2>
              <p className="text-zinc-400 text-xl mb-10 font-medium max-w-sm">
                Websites, systems, interfaces, and applications I build.
              </p>
              
              <Button variant="outline" className="rounded-full h-14 px-10 border-orange-500/30 hover:bg-primary-gradient hover:border-none hover:text-white transition-all text-sm font-black uppercase tracking-widest shadow-xl">
                Explore Dev <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Center Divider - Cinematic Beam */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[60%] bg-gradient-to-b from-transparent via-orange-500/20 to-transparent hidden lg:block" />
    </section>
  );
}
