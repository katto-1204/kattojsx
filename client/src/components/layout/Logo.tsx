import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="fixed top-4 left-0 z-50 w-fit max-w-full px-4 sm:top-6 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div className="relative" whileHover={{ scale: 1.05 }}>
        {/* Decorative corner brackets */}
        <div
          className="absolute -inset-2 border-2 border-primary rounded-lg opacity-50 pointer-events-none"
          style={{
            clipPath:
              "polygon(0 0, 30% 0, 30% 10%, 10% 10%, 10% 30%, 0 30%, 0 0, 100% 0, 100% 30%, 90% 30%, 90% 10%, 70% 10%, 70% 0, 100% 100%, 70% 100%, 70% 90%, 90% 90%, 90% 70%, 100% 70%, 0 100%, 0 70%, 10% 70%, 10% 90%, 30% 90%, 30% 100)",
          }}
        />

        <div className="glass-strong rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-primary flex items-center justify-center overflow-hidden">
            <img
              src="/favicon%20(2).png"
              alt="Katto Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              draggable="false"
            />
          </div>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
            KATTO<span className="text-primary">.JSX</span>
          </span>
        </div>

        {/* Animated dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Logo;



