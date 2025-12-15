import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LaserFlow from "./LaserFlow";

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
    }, 6000);
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
          className="fixed inset-0 z-[100] bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center overflow-hidden cursor-pointer"
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          onClick={() => setShow(false)}
        >
          {/* LaserFlow Background Effect */}
          <div className="absolute inset-0 opacity-30">
            <LaserFlow
              horizontalBeamOffset={0.1}
              verticalBeamOffset={0.0}
              color="#FF6B35"
              fogIntensity={0.3}
              wispIntensity={3.0}
            />
          </div>
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0px 0px', '50px 50px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Animated Orange Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.5, x: -100, y: -100 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
              x: [-100, -80, -100],
              y: [-100, -120, -100],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0.5, x: 100, y: 100 }}
            animate={{ 
              opacity: [0.15, 0.3, 0.15],
              scale: [1, 1.3, 1],
              x: [100, 120, 100],
              y: [100, 80, 100],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Radial Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.1),transparent_70%)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full flex flex-col items-center justify-center relative z-10"
          >
            {/* Logo Container with Enhanced Animation */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1]
              }}
            >
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute -inset-8 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(249, 115, 22, 0.5)",
                    "0 0 40px rgba(249, 115, 22, 0.8), 0 0 80px rgba(249, 115, 22, 0.4)",
                    "0 0 0px rgba(249, 115, 22, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Logo Card */}
              <motion.div
                className="relative bg-gradient-to-br from-zinc-900/90 via-black/90 to-zinc-900/90 backdrop-blur-xl rounded-2xl px-12 py-8 border border-orange-500/30 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                />

                <div className="flex items-center gap-6 relative z-10">
                  {/* Logo Icon */}
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/50"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.3,
                      duration: 0.6,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <span className="text-white font-display font-black text-3xl">
                      KT
                    </span>
                  </motion.div>

                  {/* Brand Name */}
                  <div className="flex flex-col">
                    <motion.span
                      className="font-display font-black text-5xl tracking-tight text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      KATTO
                    </motion.span>
                    <motion.span
                      className="font-display font-black text-5xl tracking-tight text-orange-500"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      .JSX
                    </motion.span>
                  </div>
                </div>

                {/* Animated Corner Accents */}
                {[
                  { top: 0, left: 0, rotate: 0 },
                  { top: 0, right: 0, rotate: 90 },
                  { bottom: 0, right: 0, rotate: 180 },
                  { bottom: 0, left: 0, rotate: 270 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 border-t-2 border-l-2 border-orange-500"
                    style={pos}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  />
                ))}
              </motion.div>

              {/* Pulsing Dot Indicator */}
              <motion.div
                className="absolute -top-3 -right-3 w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-8 text-zinc-400 font-display text-sm uppercase tracking-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Creative Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
