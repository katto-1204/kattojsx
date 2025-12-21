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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScrollHighlight = () => {
      const sections = navItems
        .map((item) => {
          const id = item.href.replace("#", "");
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
          const visibleAmount = Math.max(
            0,
            Math.min(rect.bottom, viewportHeight * 0.8) - Math.max(rect.top, viewportHeight * 0.2),
          );
          return { name: item.name, visibleAmount };
        })
        .filter((s): s is { name: string; visibleAmount: number } => !!s);

      if (!sections.length) return;

      const mostVisible = sections.reduce((prev, curr) =>
        curr.visibleAmount > prev.visibleAmount ? curr : prev,
      );

      if (mostVisible.visibleAmount > 0) {
        setActive(mostVisible.name);
      }
    };

    handleScrollHighlight();
    window.addEventListener("scroll", handleScrollHighlight, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollHighlight);
  }, []);

  return (
    <div
      className={cn(
        // Always center horizontally, always at bottom (mobile) or above (desktop)
        "fixed z-50 flex items-center justify-center w-full left-1/2 -translate-x-1/2 px-2 sm:w-auto sm:px-4",
        "bottom-0 sm:bottom-8"
      )}
    >
      <motion.div
        className={cn(
          // Responsive flex direction: row on md+, row or even wrap on mobile
          "flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-1 sm:py-2 rounded-full border transition-all duration-300",
          "bg-white/10 backdrop-blur-xl border-white/20 shadow-lg dark:bg-black/20 dark:border-white/10",
          "w-full sm:w-auto"
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
                // Responsive padding and font size
                "relative flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 rounded-full transition-all duration-300 group min-w-0",
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-white/10 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground"
              )}
              style={{ minWidth: 0 }}
            >
              <Icon className={cn("w-5 h-5", isActive && "mr-1 sm:mr-2")}/>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-xs sm:text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  {item.name}
                </motion.span>
              )}
              {!isActive && (
                <span className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.name}
                </span>
              )}
            </a>
          );
        })}

        <div className="hidden sm:block w-px h-6 bg-border mx-1" />

        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            playClick();
          }}
          className="relative flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 rounded-full hover:bg-white/10 dark:hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all duration-300"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </motion.div>
    </div>
  );
}
