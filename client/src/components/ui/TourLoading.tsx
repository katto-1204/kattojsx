import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export function TourLoading({ target, onComplete }: { target: string, onComplete: () => void }) {
  const [count, setCount] = useState(1);
  const maxDays = target === "cebu" ? 3 : 4; // Cebu has 3 days, Bohol is Day 4
  const startDay = target === "cebu" ? 1 : 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= maxDays && target === "cebu") {
            clearInterval(interval);
            setTimeout(onComplete, 800);
            return prev;
        }
        if (prev >= 4 && target === "bohol") {
            clearInterval(interval);
            setTimeout(onComplete, 800);
            return prev;
        }
        return prev + 1;
      });
    }, 600);
    
    // For Bohol, we just show Day 4 instantly or maybe animate 1..2..3..4 quickly? 
    // The prompt says "DAY 1/2/3/4". Let's just cycle.
    
    return () => clearInterval(interval);
  }, [target, onComplete, maxDays]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="overflow-hidden h-24 md:h-32 relative">
        <motion.h1 
          key={count}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="text-6xl md:text-8xl font-display font-bold text-primary"
        >
          DAY {count}
        </motion.h1>
      </div>
      <p className="text-white/50 tracking-widest mt-4 uppercase animate-pulse">
        TRAVELING TO {target.toUpperCase()}
      </p>
    </motion.div>
  );
}
