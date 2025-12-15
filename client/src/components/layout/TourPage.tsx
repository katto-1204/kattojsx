import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Utensils, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

// Reuse images for the marquee to hit 10+ images
import img1 from "@assets/generated_images/scenic_view_of_cebu_city_philippines.png";
import img2 from "@assets/generated_images/luxury_hotel_interior_lobby_modern_design.png";
import img3 from "@assets/generated_images/delicious_buffet_spread_asian_cuisine.png";
import img4 from "@assets/generated_images/modern_ui_ux_design_dashboard_mockup.png"; // Placeholder
import img5 from "@assets/generated_images/fun_travel_selfie_with_roommate.png";

const galleryImages = [img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3];

interface TourPageProps {
  location: "CEBU" | "BOHOL";
  days: number[];
  hotels: string[];
  buffets?: string[];
  roommate?: boolean;
}

export function TourPage({ location, days, hotels, buffets, roommate }: TourPageProps) {
  const [activeDay, setActiveDay] = useState(days[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation Back */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/">
          <Button variant="outline" className="rounded-full bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary hover:text-white transition-colors group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="relative h-[60vh] flex items-end pb-24 px-4 md:px-24">
        <div className="absolute inset-0 -z-10">
            <img src={location === "CEBU" ? img1 : img2} className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-8xl md:text-9xl font-display font-bold text-white mb-4"
          >
            {location}
          </motion.h1>
          <div className="flex flex-wrap gap-4">
             {hotels.map((h, i) => (
                <span key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white">
                    <MapPin className="w-4 h-4 text-primary" /> {h}
                </span>
             ))}
             {buffets?.map((b, i) => (
                <span key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white">
                    <Utensils className="w-4 h-4 text-orange-400" /> {b}
                </span>
             ))}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12" ref={containerRef}>
        
        {/* Vertical Timeline */}
        <div className="lg:w-1/4 sticky top-24 h-fit">
           <div className="relative border-l-2 border-border ml-4 space-y-12 py-4">
              {days.map((day) => (
                <div key={day} className="relative pl-8 group cursor-pointer" onClick={() => setActiveDay(day)}>
                    <motion.div 
                        className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${activeDay === day ? "bg-primary border-primary shadow-[0_0_10px_rgba(249,115,22,0.8)]" : "bg-background border-muted-foreground"}`}
                        layoutId="timeline-dot"
                    />
                    <h3 className={`text-3xl font-bold transition-colors ${activeDay === day ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>DAY {day}</h3>
                    <p className="text-sm text-muted-foreground">Explore & Experience</p>
                </div>
              ))}
           </div>
        </div>

        {/* Gallery Marquee Area */}
        <div className="lg:w-3/4 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-4xl font-display font-bold">GALLERY <span className="text-primary">DAY {activeDay}</span></h2>
                        <span className="text-muted-foreground text-sm uppercase tracking-widest">{galleryImages.length} PHOTOS</span>
                    </div>

                    {/* Marquee 1 */}
                    <div className="w-full overflow-hidden -mx-4 md:-mx-0">
                        <motion.div 
                            className="flex gap-4 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        >
                            {[...galleryImages, ...galleryImages].map((img, i) => (
                                <div key={i} className="w-64 h-48 md:w-80 md:h-60 rounded-xl overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
                                    <img src={img} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Marquee 2 (Reverse) */}
                     <div className="w-full overflow-hidden -mx-4 md:-mx-0">
                        <motion.div 
                            className="flex gap-4 w-max"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                        >
                            {[...galleryImages, ...galleryImages].reverse().map((img, i) => (
                                <div key={i} className="w-64 h-48 md:w-80 md:h-60 rounded-xl overflow-hidden shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105">
                                    <img src={img} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>

      {/* Roommate Section */}
      {roommate && (
        <section className="py-24 bg-pink-50 dark:bg-pink-950/20 border-t border-pink-100 dark:border-pink-900/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring" }}
                    className="max-w-4xl mx-auto bg-white/80 dark:bg-black/40 backdrop-blur-xl p-12 rounded-[3rem] border border-pink-200 dark:border-pink-800 shadow-2xl"
                >
                    <span className="text-pink-500 font-bold tracking-widest uppercase mb-4 block">Special Dedication</span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-pink-600 dark:text-pink-400">MY ROOMMATE</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                        <div className="aspect-square rounded-2xl overflow-hidden rotate-[-3deg] shadow-lg border-4 border-white">
                            <img src={img5} className="w-full h-full object-cover" alt="Roommate" />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">To my travel buddy,</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                "Thank you for being the best roommate during this entire trip! From the late-night talks to the early morning alarms we almost missed. This tour wouldn't be half as fun without your chaos and laughter. Let's make more memories!"
                            </p>
                            <div className="font-handwriting text-3xl text-pink-500 rotate-[-5deg]">
                                - Katto
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
      )}
    </div>
  );
}
