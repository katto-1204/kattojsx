import { motion } from "framer-motion";

interface LoadingOverlayProps {
  text: string;
  color: string;
  textColor?: string;
}

export function LoadingOverlay({ text, color, textColor = "white" }: LoadingOverlayProps) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{ backgroundColor: color }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <h2 
            className="text-6xl md:text-8xl font-display font-black tracking-tighter"
            style={{ color: textColor }}
          >
            {text}
          </h2>
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: textColor }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
