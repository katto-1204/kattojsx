import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

interface DayGallery {
  day: number;
  images: string[];
}

const boholDays: DayGallery[] = [
  { day: 4, images: Array.from({ length: 12 }, (_, i) => `Day 4 - Image ${i + 1}`) },
];

const buffets = [
  { name: "Local Buffet Spot", location: "Tagbilaran City" },
  { name: "Resort Buffet", location: "Panglao" },
];

const companies = [
  {
    name: "Tagbilaran 911",
    color: "from-green-500 to-emerald-300",
    logo: "/assets/companylogo/CDRRMO.png",
  },
];

const boholGalleryDay4: string[] = [
  "/assets/cebubohol/day4/image copy 2.png",
  "/assets/cebubohol/day4/image copy 3.png",
  "/assets/cebubohol/day4/image copy 4.png",
  "/assets/cebubohol/day4/image copy 5.png",
  "/assets/cebubohol/day4/image copy 6.png",
  "/assets/cebubohol/day4/image copy 7.png",
  "/assets/cebubohol/day4/image copy 8.png",
  "/assets/cebubohol/day4/image copy 9.png",
  "/assets/cebubohol/day4/image copy 10.png",
  "/assets/cebubohol/day4/image copy 11.png",
  "/assets/cebubohol/day4/image copy 12.png",
  "/assets/cebubohol/day4/image copy 13.png",
  "/assets/cebubohol/day4/image copy 14.png",
  "/assets/cebubohol/day4/image copy 15.png",
  "/assets/cebubohol/day4/image copy 16.png",
  "/assets/cebubohol/day4/image copy 6.png",
  "/assets/cebubohol/day4/image copy.png",
  "/assets/cebubohol/day4/image.png",
];

const BoholPage = () => {
  const [, setLocation] = useLocation();
  const [activeTimelineDay, setActiveTimelineDay] = useState(4);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingDay, setLoadingDay] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const dayIndex = Math.min(Math.floor(scrollY / 400) + 1, 1);
      setActiveTimelineDay(dayIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDayGallery = (day: number) => {
    setLoadingDay(day);
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setSelectedDay(day);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* DAY loading screen */}
      <AnimatePresence>
        {showLoading && loadingDay !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <motion.h1
                className="text-8xl md:text-9xl font-display font-black gradient-text"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                DAY {loadingDay}
              </motion.h1>
              <motion.div
                className="mt-8 w-48 h-1 bg-border mx-auto rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Overlay */}
      <AnimatePresence>
        {selectedDay !== null && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-screen py-10 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-5xl md:text-6xl font-display font-black text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]">
                      DAY {selectedDay}
                    </h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      Bohol Tour Gallery
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <motion.button
                        onClick={() => openDayGallery(4)}
                        className="px-4 py-1 rounded-full text-xs font-mono border bg-primary text-primary-foreground border-primary"
                        whileHover={{ scale: 1.05 }}
                      >
                        Go to Day 4
                      </motion.button>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedDay(null)}
                    className="p-2 rounded-full border border-border hover:bg-muted"
                  >
                    <span className="sr-only">Close gallery</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Slow marquee of large images */}
                <div className="space-y-8 overflow-hidden pt-4">
                  {/* Top row: natural order (1 -> N) */}
                  <div className="relative">
                    <motion.div
                      className="flex gap-6"
                      animate={{ x: [0, -800] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                      {[...boholGalleryDay4].map((img, idx) => (
                        <motion.div
                          key={`top-${idx}`}
                          className="flex-shrink-0 w-[320px] h-[220px] md:w-[420px] md:h-[280px] rounded-2xl overflow-hidden glass cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Middle row: forward again for more coverage */}
                  <div className="relative">
                    <motion.div
                      className="flex gap-6"
                      animate={{ x: [-800, 0] }}
                      transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
                    >
                      {[...boholGalleryDay4].map((img, idx) => (
                        <motion.div
                          key={`mid-${idx}`}
                          className="flex-shrink-0 w-[260px] h-[180px] md:w-[340px] md:h-[220px] rounded-2xl overflow-hidden glass cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Bottom row: reversed order (N -> 1) */}
                  <div className="relative">
                    <motion.div
                      className="flex gap-6"
                      animate={{ x: [-800, 0] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                      {[...boholGalleryDay4].slice().reverse().map((img, idx) => (
                        <motion.div
                          key={`bottom-${idx}`}
                          className="flex-shrink-0 w-[320px] h-[220px] md:w-[420px] md:h-[280px] rounded-2xl overflow-hidden glass cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-orange-500/5 to-background" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(249,115,22,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(249,115,22,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-display font-black mb-4 text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]"
          >
            BOHOL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            March, 2025
          </motion.p>
          <motion.button
            onClick={() => setLocation("/")}
            className="mt-8 px-6 py-3 glass rounded-full hover:bg-primary/20 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Back to Home
          </motion.button>
        </div>
      </section>

      {/* Vertical Timeline with Days */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-bold gradient-text mb-16 text-center"
          >
            Our Journey
          </motion.h2>

          <div className="flex gap-12">
            {/* Vertical Timeline */}
            <div className="hidden md:flex flex-col items-center">
              <div className="relative h-[400px] w-1 bg-border rounded-full">
                <motion.div
                  className="absolute top-0 left-0 right-0 bg-primary rounded-full"
                  style={{ height: `${(activeTimelineDay / 1) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
                {[1].map((day) => (
                  <motion.div
                    key={day}
                    className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-colors ${
                      activeTimelineDay >= day
                        ? "bg-primary border-primary"
                        : "bg-background border-border"
                    }`}
                    style={{ top: "0%" }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {activeTimelineDay >= day && (
                      <motion.div
                        className="absolute inset-0 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Day Cards */}
            <div className="flex-1 space-y-8">
              {boholDays.map((dayData, index) => (
                <motion.div
                  key={dayData.day}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="glass rounded-2xl p-8 cursor-pointer hover:glow-subtle transition-all"
                  whileHover={{ 
                    scale: 1.03, 
                    x: 10,
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => openDayGallery(dayData.day)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="pill-solid mb-2 inline-block">Day {dayData.day}</span>
                      <h3 className="text-2xl font-display font-bold">nO2025</h3>
                      <p className="text-muted-foreground mt-2">
                        {dayData.images.length} photos captured
                      </p>
                    </div>
                    <div className="w-16 h-16 glass rounded-xl flex items-center justify-center">
                      <span className="text-3xl font-display font-black text-primary">
                        D{dayData.day}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buffets Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-bold gradient-text mb-12 text-center"
          >
            Buffets
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buffets.map((buffet, index) => (
              <motion.div
                key={buffet.name}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-6 hover:glow-subtle transition-all"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary-foreground"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                  </svg>
                </div>
                <h3 className="text-lg font-display font-bold mb-1">{buffet.name}</h3>
                <p className="text-muted-foreground text-sm">{buffet.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-bold gradient-text mb-12 text-center"
          >
            Companies Visited
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-2xl bg-gradient-to-br ${company.color} p-1`}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="bg-background/90 rounded-xl p-8 h-full">
                  <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center mb-4 overflow-hidden">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 9h6M9 13h6M9 17h4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-display font-bold">{company.name}</h3>
                  <span className="mt-4 inline-block pill-outline text-sm">Bohol</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm uppercase tracking-[0.2em]"
              >
                Close
              </button>
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img src={selectedImage} className="w-full h-full object-contain max-h-[80vh]" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoholPage;
