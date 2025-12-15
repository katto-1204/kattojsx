import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="fixed top-6 left-6 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.div className="relative" whileHover={{ scale: 1.05 }}>
        {/* Decorative corner brackets */}
        <div
          className="absolute -inset-2 border-2 border-primary rounded-lg opacity-50"
          style={{
            clipPath:
              "polygon(0 0, 30% 0, 30% 10%, 10% 10%, 10% 30%, 0 30%, 0 0, 100% 0, 100% 30%, 90% 30%, 90% 10%, 70% 10%, 70% 0, 100% 100%, 70% 100%, 70% 90%, 90% 90%, 90% 70%, 100% 70%, 0 100%, 0 70%, 10% 70%, 10% 90%, 30% 90%, 30% 100%)",
          }}
        />

        <div className="glass-strong rounded-lg px-4 py-2 flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">
              KT
            </span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
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


