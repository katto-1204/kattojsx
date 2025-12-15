import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import imgCity from "@assets/generated_images/scenic_view_of_cebu_city_philippines.png";
import imgHotel from "@assets/generated_images/luxury_hotel_interior_lobby_modern_design.png";
import imgBuffet from "@assets/generated_images/delicious_buffet_spread_asian_cuisine.png";

interface DayGallery {
  day: number;
  images: string[];
}

const cebuDays: DayGallery[] = [
  { day: 1, images: Array.from({ length: 12 }, (_, i) => `Day 1 - Image ${i + 1}`) },
  { day: 2, images: Array.from({ length: 12 }, (_, i) => `Day 2 - Image ${i + 1}`) },
  { day: 3, images: Array.from({ length: 12 }, (_, i) => `Day 3 - Image ${i + 1}`) },
];

const buffets = [
  { name: "Somac", location: "Cebu City" },
  { name: "Buffet 101", location: "SM Seaside" },
  { name: "Café Bai Hotel", location: "Bai Hotel" },
  { name: "Vikings", location: "SM City Cebu" },
];

const companies = [
  {
    name: "WorldTech Information Solutions",
    color: "from-red-500 to-red-300",
    logo: "/assets/companylogo/WORLDTECH INFORMATION SOLUTIONS.png",
  },
  {
    name: "Rivan IT Cebu",
    color: "from-sky-400 to-blue-700",
    logo: "/assets/companylogo/RIVAN IT CEBU.png",
  },
  {
    name: "CodeChum",
    color: "from-blue-500 to-blue-300",
    logo: "/assets/companylogo/codechum.png",
  },
  {
    name: "Mata Technologies Inc",
    color: "from-gray-800 to-gray-400",
    logo: "/assets/companylogo/MATA TECHNOLOGIES INC.png",
  },
];

const cebuGalleryByDay: Record<number, string[]> = {
  1: [imgCity, imgHotel, imgBuffet, imgCity],
  2: [imgHotel, imgBuffet, imgCity, imgHotel],
  3: [imgBuffet, imgCity, imgHotel, imgBuffet],
};

const CebuPage = () => {
  const [, setLocation] = useLocation();
  const [activeTimelineDay, setActiveTimelineDay] = useState(1);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingDay, setLoadingDay] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageDay, setSelectedImageDay] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const dayIndex = Math.min(Math.floor(scrollY / 400) + 1, 3);
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
                      Cebu Tour Gallery
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[1, 2, 3].map((d) => (
                        <motion.button
                          key={d}
                          onClick={() => openDayGallery(d)}
                          className={`px-4 py-1 rounded-full text-xs font-mono border ${
                            d === selectedDay
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background text-muted-foreground border-border hover:bg-muted"
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          Go to Day {d}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
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
                    {selectedDay === 3 && (
                      <motion.button
                        onClick={() => setSelectedDay(null)}
                        className="px-4 py-2 rounded-full bg-orange-500 text-black font-display text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-orange-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        End of Cebu Tour
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Slow marquee of large images */}
                <div className="space-y-8 overflow-hidden pt-4">
                  {[0, 1].map((row) => (
                    <div key={row} className="relative">
                      <motion.div
                        className="flex gap-6"
                        animate={{ x: row === 0 ? [0, -800] : [-800, 0] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      >
                        {[...(cebuGalleryByDay[selectedDay] || []), ...(cebuGalleryByDay[selectedDay] || [])].map(
                          (img, idx) => (
                            <motion.div
                              key={idx}
                              className="flex-shrink-0 w-[320px] h-[220px] md:w-[420px] md:h-[280px] rounded-2xl overflow-hidden glass cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              onClick={() => {
                                setSelectedImage(img);
                                setSelectedImageDay(selectedDay);
                              }}
                            >
                              <img
                                src={img}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ),
                        )}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-display font-black mb-4 text-orange-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]"
          >
            CEBU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            March 15-17, 2025
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                  style={{ height: `${(activeTimelineDay / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
                {[1, 2, 3].map((day) => (
                  <motion.div
                    key={day}
                    className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 transition-colors ${
                      activeTimelineDay >= day
                        ? "bg-primary border-primary"
                        : "bg-background border-border"
                    }`}
                    style={{ top: `${((day - 1) / 2) * 100}%` }}
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
              {cebuDays.map((dayData, index) => (
                <motion.div
                  key={dayData.day}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-8 cursor-pointer hover:glow-subtle transition-all"
                  whileHover={{ scale: 1.02, x: 10 }}
                  onClick={() => openDayGallery(dayData.day)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="pill-solid mb-2 inline-block">Day {dayData.day}</span>
                      <h3 className="text-2xl font-display font-bold">
                        March {14 + dayData.day}, 2025
                      </h3>
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

      {/* Fullscreen Image Viewer for gallery images */}
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
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm uppercase tracking-[0.2em]"
              >
                Close
              </button>
              <div className="mb-4 text-sm text-white/80 uppercase tracking-[0.3em]">
                {selectedImageDay ? `Day ${selectedImageDay}` : ""}
              </div>
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img
                  src={selectedImage}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buffets Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold gradient-text mb-12 text-center"
          >
            Buffets
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buffets.map((buffet, index) => (
              <motion.div
                key={buffet.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:glow-subtle transition-all"
                whileHover={{ scale: 1.05 }}
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold gradient-text mb-12 text-center"
          >
            Companies Visited
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl bg-gradient-to-br ${company.color} p-1`}
                whileHover={{ scale: 1.02 }}
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
                  <span className="mt-4 inline-block pill-outline text-sm">Cebu</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CebuPage;
