import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function WelcomeScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter"
              animate={{ 
                textShadow: ["0 0 0px #fff", "0 0 20px #f97316", "0 0 0px #fff"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              KATTO.JSX
            </motion.h1>
            <motion.div 
              className="mt-4 h-1 bg-primary w-0 mx-auto"
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
