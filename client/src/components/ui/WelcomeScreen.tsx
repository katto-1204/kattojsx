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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            {/* Centered large logo-style welcome */}
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Decorative corner brackets */}
              <div
                className="absolute -inset-4 border-4 border-primary rounded-xl opacity-60"
                style={{
                  clipPath:
                    "polygon(0 0, 30% 0, 30% 10%, 10% 10%, 10% 30%, 0 30%, 0 0, 100% 0, 100% 30%, 90% 30%, 90% 10%, 70% 10%, 70% 0, 100% 100%, 70% 100%, 70% 90%, 90% 90%, 90% 70%, 100% 70%, 0 100%, 0 70%, 10% 70%, 10% 90%, 30% 90%, 30% 100%)",
                }}
              />

              <div className="glass-strong rounded-xl px-8 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-2xl">
                    KT
                  </span>
                </div>
                <span className="font-display font-bold text-3xl tracking-tight text-white">
                  KATTO<span className="text-primary">.JSX</span>
                </span>
              </div>

              {/* Animated dot */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
