import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="fixed top-4 left-0 z-50 px-4 sm:top-6 sm:px-6 scale-[0.8] sm:scale-100 origin-top-left"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div
        className="relative group cursor-pointer"
        whileHover="hover"
        initial="initial"
        whileTap={{ scale: 0.95 }}
      >
        {/* Decorative corner accents - Top Left & Bottom Right */}
        <motion.div
          variants={{
            initial: { opacity: 0.6, x: 0, y: 0 },
            hover: { opacity: 1, x: -2, y: -2 }
          }}
          className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-lg transition-colors"
        />
        <motion.div
          variants={{
            initial: { opacity: 0.6, x: 0, y: 0 },
            hover: { opacity: 1, x: 2, y: 2 }
          }}
          className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-lg transition-colors"
        />

        {/* Decorative faint circles */}
        <motion.div
          variants={{
            initial: { scale: 1, rotate: 0 },
            hover: { scale: 1.2, rotate: 90 }
          }}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full border border-primary/20 -z-10 bg-primary/5"
        />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-primary/40" />

        {/* Main Pill Container */}
        <div className="bg-white/90 dark:bg-[#111]/90 border border-zinc-200 dark:border-white/10 rounded-2xl py-2 px-4 flex items-center gap-3 shadow-xl backdrop-blur-md transition-colors duration-300">

          {/* Logo Circle with Image */}
          <motion.div
            className="w-10 h-10 rounded-full bg-[#ff5500] flex items-center justify-center shadow-[0_0_15px_rgba(255,85,0,0.3)] overflow-hidden"
            variants={{
              initial: { rotate: 0 },
              hover: { rotate: 360, transition: { duration: 0.8, ease: "backOut" } }
            }}
          >
            <img
              src="/favicon.png"
              alt="Katto Logo"
              className="w-full h-full object-cover p-0"
              draggable="false"
            />
          </motion.div>

          {/* Text */}
          <div className="flex items-baseline">
            <span className="font-display font-black text-xl text-zinc-800 dark:text-white tracking-wide transition-colors duration-300">
              KATTO
            </span>
            <span className="font-display font-bold text-xl text-[#ff5500]">
              .JSX
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
