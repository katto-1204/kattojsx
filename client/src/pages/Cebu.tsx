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
  { name: "WorldTech Information Solutions", color: "from-red-500 to-red-300" },
  { name: "Rivan IT Cebu", color: "from-sky-400 to-blue-700" },
  { name: "CodeChum", color: "from-blue-500 to-blue-300" },
  { name: "Mata Technologies Inc", color: "from-gray-800 to-gray-400" },
];

const cebuGalleryByDay: Record<number, string[]> = {
  1: [imgCity, imgHotel, imgBuffet, imgCity],
  2: [imgHotel, imgBuffet, imgCity, imgHotel],
  3: [imgBuffet, imgCity, imgHotel, imgBuffet],
};

const CebuPage = () => {
  const [, setLocation] = useLocation();
  const [activeTimelineDay, setActiveTimelineDay] = useState(1);
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

  return (
    <div className="min-h-screen bg-background">
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

      {/* Gallery Section - Big DAY headings with large clickable images */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold gradient-text mb-12 text-center"
          >
            Cebu Gallery
          </motion.h2>

          <div className="space-y-16">
            {[1, 2, 3].map((day) => (
              <div key={day} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-baseline justify-between"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                      DAY {day}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-display font-black text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                      {day === 1 ? "Arrival & City Lights" : day === 2 ? "Exploring Cebu" : "Last Day Moments"}
                    </h3>
                  </div>
                  <span className="hidden md:inline text-xs font-mono text-muted-foreground">
                    {cebuGalleryByDay[day].length} photos
                  </span>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                  {cebuGalleryByDay[day].map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      onClick={() => {
                        setSelectedImage(img);
                        setSelectedImageDay(day);
                      }}
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-xs uppercase tracking-[0.2em]">Day {day}</p>
                        <p className="text-sm font-medium">
                          {day === 1 ? "City & Night Views" : day === 2 ? "Tour Highlights" : "Farewell Moments"}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
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
