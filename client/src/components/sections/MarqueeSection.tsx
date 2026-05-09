import { motion } from "framer-motion";

const marqueeText = "A Creative Full Stack Dev - Software - Pubmats - Shirt Layouts - LogoFolio - Team Rosters - Background animation";

export function MarqueeSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-background">
      {/* Red Marquee (Diagonal 1) */}
      <div className="absolute w-[200%] left-1/2 -translate-x-1/2 h-16 bg-red-600 flex items-center rotate-[-12deg] z-10 shadow-2xl overflow-hidden border-y border-white/20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-2xl md:text-4xl font-display font-black text-white px-8 flex items-center uppercase tracking-tighter">
              {marqueeText} <span className="mx-8 text-white/30 text-xl flex items-center">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Orange Marquee (Diagonal 2) */}
      <div className="absolute w-[200%] left-1/2 -translate-x-1/2 h-16 bg-orange-500 flex items-center rotate-[8deg] z-20 shadow-2xl overflow-hidden border-y border-black/20">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-2xl md:text-4xl font-display font-black text-black px-8 flex items-center uppercase tracking-tighter">
              {marqueeText} <span className="mx-8 text-black/30 text-xl flex items-center">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Center Intersection Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
        <div className="w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
      </div>
    </section>
  );
}
