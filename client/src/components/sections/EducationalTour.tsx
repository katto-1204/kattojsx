import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "wouter";
import { useTheme } from "@/components/theme-provider";

interface Company {
  name: string;
  colors: string;
  location: "cebu" | "bohol";
  logo?: string;
}

const companies: Company[] = [
  {
    name: "WorldTech Information Solutions",
    colors: "from-red-500 to-white",
    location: "cebu",
    logo: "/assets/companylogo/WORLDTECH INFORMATION SOLUTIONS.png",
  },
  {
    name: "Rivan IT Cebu",
    colors: "from-sky-400 to-blue-800",
    location: "cebu",
    logo: "/assets/companylogo/RIVAN IT CEBU.png",
  },
  {
    name: "CodeChum",
    colors: "from-blue-500 to-white",
    location: "cebu",
    logo: "/assets/companylogo/codechum.png",
  },
  {
    name: "Mata Technologies Inc",
    colors: "from-white to-gray-900",
    location: "cebu",
    logo: "/assets/companylogo/MATA TECHNOLOGIES INC.png",
  },
  {
    name: "Tagbilaran 911",
    colors: "from-green-500 to-white",
    location: "bohol",
    logo: "/assets/companylogo/CDRRMO.png",
  },
  {
    name: "HCDC",
    colors: "from-blue-600 to-yellow-500",
    location: "cebu",
    logo: "/assets/companylogo/Copy of HCDC Logo (PNG).png",
  },
  {
    name: "BSIT",
    colors: "from-blue-500 to-cyan-400",
    location: "cebu",
    logo: "/assets/companylogo/[BLACK] ITS LOGO.png",
  },
  {
    name: "WATT",
    colors: "from-orange-500 to-red-500",
    location: "cebu",
    logo: "/assets/companylogo/watt.png",
  },
];

export function EducationalTour() {
  const [activeLocation, setActiveLocation] = useState<"cebu" | "bohol">("cebu");
  const [, setLocation] = useLocation();
  const [routeLoading, setRouteLoading] = useState<"cebu" | "bohol" | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const filteredCompanies = companies.filter((c) => c.location === activeLocation);
  const row1 = filteredCompanies.slice(0, 5);
  const row2 = filteredCompanies.slice(5);

  const handleNavigate = (loc: "cebu" | "bohol") => {
    setRouteLoading(loc);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setTimeout(() => {
      setLocation(`/${loc}`);
    }, 1200);
  };

  return (
    <section id="tour" className="min-h-screen py-24 px-6 relative">
      {/* Route Loading Overlay */}
      <AnimatePresence>
        {routeLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-display font-black gradient-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                GOING TO {routeLoading.toUpperCase()}
              </motion.h1>
              <motion.div
                className="mt-6 w-40 h-1 bg-border mx-auto rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">
            Educational Tour 2025
          </h2>
          <p className="text-muted-foreground text-lg">
            Exploring tech companies across the Philippines
          </p>
        </motion.div>

        {/* Location Toggle */}
        <div className="flex justify-center gap-4 mb-16">
          <motion.button
            onClick={() => setActiveLocation("cebu")}
            className={`px-8 py-4 rounded-full font-display font-bold text-lg transition-all border-2 ${
              activeLocation === "cebu"
                ? "bg-orange-500 border-orange-500 text-black"
                : "bg-transparent border-orange-500 text-orange-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CEBU
          </motion.button>
          <motion.button
            onClick={() => setActiveLocation("bohol")}
            className={`px-8 py-4 rounded-full font-display font-bold text-lg transition-all border-2 ${
              activeLocation === "bohol"
                ? isDark 
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-black text-white border-black"
                : "bg-transparent text-orange-500 border-orange-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOHOL
          </motion.button>
        </div>

        {/* Companies Grid */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-6">
            {row1.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -3 : 3 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                className={`w-56 h-72 rounded-2xl bg-gradient-to-br ${company.colors} p-1 cursor-pointer`}
                onClick={() => handleNavigate(activeLocation)}
              >
                <div className="w-full h-full bg-background/80 backdrop-blur rounded-xl flex flex-col items-center justify-end p-6">
                  <div className="flex-1 flex items-center justify-center">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-16 h-16 object-contain rounded-xl bg-background/80 p-1"
                      />
                    ) : (
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-primary"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 9h6M9 13h6M9 17h4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-center font-display font-bold text-sm">
                    {company.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          {row2.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6">
              {row2.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 30, rotate: 5 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 3 : -3 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                  className={`w-56 h-72 rounded-2xl bg-gradient-to-br ${company.colors} p-1 cursor-pointer`}
                  onClick={() => handleNavigate(activeLocation)}
                >
                  <div className="w-full h-full bg-background/80 backdrop-blur rounded-xl flex flex-col items-center justify-end p-6">
                    <div className="flex-1 flex items-center justify-center">
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-16 h-16 object-contain rounded-xl bg-background/80 p-1"
                        />
                      ) : (
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          className="text-primary"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M9 9h6M9 13h6M9 17h4" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-center font-display font-bold text-sm">
                      {company.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Hotels Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-display font-bold gradient-text mb-8 text-center">
            Hotels
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              className="glass rounded-2xl p-8 w-80 cursor-pointer hover:glow-subtle transition-all"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavigate("cebu")}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary-foreground"
                >
                  <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-8h6v8" />
                </svg>
              </div>
              <h4 className="text-xl font-display font-bold mb-2">BAI Hotel</h4>
              <p className="text-muted-foreground">Cebu City, Philippines</p>
              <span className="mt-4 inline-block pill-outline">Cebu</span>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-8 w-80 cursor-pointer hover:glow-subtle transition-all"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavigate("bohol")}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-8h6v8" />
                </svg>
              </div>
              <h4 className="text-xl font-display font-bold mb-2">
                Vista Suites Panglao
              </h4>
              <p className="text-muted-foreground">Bohol, Philippines</p>
              <span className="mt-4 inline-block pill-outline">Bohol</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
