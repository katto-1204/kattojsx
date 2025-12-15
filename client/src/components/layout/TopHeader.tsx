import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";

export function TopHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Link href="/">
        <div className="relative pointer-events-auto cursor-pointer group">
          {/* Outer Ring Decorations */}
          <div className="absolute -top-2 -left-2 w-full h-full border border-orange-500/30 rounded-full scale-110" />
          <div className="absolute -top-1 -right-4 w-2 h-2 bg-orange-500 rounded-full" />
          
          <div className="relative bg-zinc-900/90 border border-zinc-700/50 backdrop-blur-md rounded-full px-1.5 py-1.5 flex items-center gap-3 pr-4 shadow-lg">
             {/* Logo Circle */}
             <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold font-display text-sm tracking-tighter">
                KT
             </div>
             
             {/* Text */}
             <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-tight text-white">KATTO</span>
                <span className="text-[10px] font-mono text-orange-500 tracking-wider">.JSX</span>
             </div>
          </div>
        </div>
      </Link>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="pointer-events-auto w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </motion.header>
  );
}
