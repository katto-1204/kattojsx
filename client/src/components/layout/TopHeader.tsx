import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";

export function TopHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold font-display tracking-tighter group-hover:rotate-12 transition-transform">
            KT
          </div>
          <span className="text-xl font-display font-bold tracking-tight group-hover:text-primary transition-colors">KATTO.JSX</span>
        </div>
      </Link>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </motion.header>
  );
}
