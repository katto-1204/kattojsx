import { motion } from "framer-motion";
import { Home, User, Award, Plane, Book, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { name: "HOME", icon: Home, href: "#home" },
  { name: "PERSONAL", icon: User, href: "#personal" },
  { name: "CERTIFICATION", icon: Award, href: "#certification" },
  { name: "EDUCATIONAL TOUR", icon: Plane, href: "#tour" },
  { name: "JOURNAL", icon: Book, href: "#journal" },
];

export function Navbar() {
  const [active, setActive] = useState("HOME");
  const { theme, setTheme } = useTheme();
  
  // Simple sfx simulation
  const playClick = () => {
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
    audio.volume = 0.2;
    audio.play().catch(e => console.log("Audio play failed", e));
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-full max-w-fit px-4">
      <motion.div 
        className={cn(
          "flex items-center gap-2 px-2 py-2 rounded-full border transition-all duration-300",
          "bg-white/10 backdrop-blur-xl border-white/20 shadow-lg dark:bg-black/20 dark:border-white/10"
        )}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        {navItems.map((item) => {
          const isActive = active === item.name;
          const Icon = item.icon;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActive(item.name);
                playClick();
              }}
              className={cn(
                "relative flex items-center justify-center px-4 py-3 rounded-full transition-all duration-300 group",
                isActive ? "bg-primary text-white" : "hover:bg-white/10 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "mr-2")} />
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  {item.name}
                </motion.span>
              )}
              {!isActive && (
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>
              )}
            </a>
          );
        })}

        <div className="w-px h-6 bg-border mx-1" />

        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            playClick();
          }}
          className="relative flex items-center justify-center px-4 py-3 rounded-full hover:bg-white/10 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all duration-300"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </motion.div>
    </div>
  );
}
