import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function WelcomeScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Play welcome SFX once on load
    let audio: HTMLAudioElement | null = null;
    try {
      audio = new Audio("/sfx/welcomesfx.mp3");
      audio.volume = 0.6;
      audio.play().catch(() => {
        // ignore autoplay blocking
      });
    } catch {
      // ignore if audio fails
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);
    return () => {
      clearTimeout(timer);
      if (audio) {
        audio.pause();
        audio = null;
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-80 h-80 bg-pink-500/40 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
            animate={{ opacity: 1, scale: 1.1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <motion.div
            className="absolute -bottom-40 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
            animate={{ opacity: 1, scale: 1.2, x: 0, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.15),transparent_60%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),transparent_60%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center relative"
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

              <div className="glass-strong rounded-xl px-8 py-4 flex items-center gap-4 relative z-10">
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
