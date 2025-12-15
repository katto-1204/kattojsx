import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Utensils, ArrowLeft, X, Building } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const galleryImages = [
  "/assets/cebubohol/day1/image copy 2.png",
  "/assets/cebubohol/day2/image copy 5.png",
  "/assets/cebubohol/day3/image copy 8.png",
  "/assets/cebubohol/day4/image copy 10.png",
  "/assets/cebubohol/day1/image copy 11.png",
  "/assets/cebubohol/day2/image copy 14.png",
];

interface Company {
  name: string;
  color: string;
  bg: string;
}

interface TourPageProps {
  location: "CEBU" | "BOHOL";
  date: string;
  bgImage: string;
  days: number[];
  hotels: string[];
  buffets?: string[];
  companies?: Company[];
  roommate?: boolean;
}

export function TourPage({ location, date, bgImage, days, hotels, buffets, companies, roommate }: TourPageProps) {
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const [loadingDay, setLoadingDay] = useState<number | null>(null);
  const [viewGallery, setViewGallery] = useState(false);
  const [activeDay, setActiveDay] = useState(days[0]);

  // Handle hotel click
  const handleHotelClick = (hotel: string) => {
    setSelectedHotel(hotel);
    // Start Loading sequence
    let current = 1;
    setLoadingDay(current);
    const interval = setInterval(() => {
        current++;
        if (current > days.length) {
            clearInterval(interval);
            setLoadingDay(null);
            setViewGallery(true);
        } else {
            setLoadingDay(current);
        }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loading Screen Overlay */}
      <AnimatePresence>
        {loadingDay !== null && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1 
              key={loadingDay}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="text-8xl font-display font-bold text-primary"
            >
              DAY {loadingDay}
            </motion.h1>
            <p className="mt-4 tracking-widest uppercase">Loading Itinerary...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Overlay */}
      <AnimatePresence>
        {viewGallery && (
          <motion.div 
            className="fixed inset-0 z-[90] bg-background flex flex-col"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
             <div className="p-6 flex justify-between items-center border-b border-border">
                <div className="flex items-center gap-4">
                    <h2 className="text-3xl font-display font-bold">{location} GALLERY</h2>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">
                        {selectedHotel}
                    </span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setViewGallery(false)}>
                    <X className="w-6 h-6" />
                </Button>
             </div>

             <div className="flex-1 flex overflow-hidden">
                {/* Sidebar Timeline */}
                <div className="w-24 md:w-64 border-r border-border p-6 flex flex-col gap-8 overflow-y-auto">
                    {days.map(day => (
                        <div 
                            key={day} 
                            onClick={() => setActiveDay(day)}
                            className={`cursor-pointer group flex items-center gap-4 p-4 rounded-xl transition-all ${activeDay === day ? "bg-primary text-white shadow-lg" : "hover:bg-muted"}`}
                        >
                            <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">
                                {day}
                            </div>
                            <span className="hidden md:block font-bold">DAY {day}</span>
                        </div>
                    ))}
                </div>

                {/* Main Gallery Area */}
                <div className="flex-1 p-6 md:p-12 overflow-hidden flex flex-col justify-center bg-muted/10 relative">
                    <h3 className="text-9xl font-display font-black text-foreground/5 absolute top-10 left-10 pointer-events-none">
                        DAY {activeDay}
                    </h3>
                    
                    <div className="w-full overflow-hidden">
                         <motion.div 
                            className="flex gap-6 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        >
                            {[...galleryImages, ...galleryImages].map((img, i) => (
                                <div key={i} className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shrink-0">
                                    <img src={img} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Main Content (Underneath) */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/">
          <Button variant="outline" className="rounded-full bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary hover:text-white transition-colors group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back
          </Button>
        </Link>
      </div>

      <header className="relative h-[70vh] flex items-end pb-24 px-4 md:px-24">
        <div className="absolute inset-0 -z-10">
            <img src={bgImage} className="w-full h-full object-cover brightness-[0.4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest mb-2 block"
          >
            {date}
          </motion.span>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-8xl md:text-9xl font-display font-black text-white mb-8"
          >
            {location}
          </motion.h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Hotels Section */}
        <section>
            <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-2">
                <MapPin className="text-primary" /> HOTELS
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {hotels.map((hotel, i) => (
                    <motion.div
                        key={i}
                        className="bg-card border border-border p-8 rounded-3xl cursor-pointer hover:border-primary transition-all group relative overflow-hidden"
                        onClick={() => handleHotelClick(hotel)}
                        whileHover={{ scale: 1.02 }}
                    >
                         <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
                         <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{hotel}</h3>
                         <p className="text-muted-foreground text-sm">Click to view gallery</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Buffets Section */}
        {buffets && (
            <section>
                <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-2">
                    <Utensils className="text-pink-400" /> BUFFETS
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {buffets.map((buffet, i) => (
                        <div key={i} className="bg-muted/30 p-6 rounded-2xl border border-border/50 text-center font-bold">
                            {buffet}
                        </div>
                    ))}
                </div>
            </section>
        )}

        {/* Companies Section */}
        {companies && (
            <section>
                <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-2">
                    <Building className="text-blue-400" /> COMPANIES
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {companies.map((comp, i) => (
                        <motion.div 
                            key={i} 
                            className={`p-6 rounded-2xl border-2 flex flex-col items-center justify-center text-center gap-4 h-40 ${comp.bg}`}
                            style={{ borderColor: comp.color, color: comp.color }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center font-bold text-xl">
                                {comp.name[0]}
                            </div>
                            <span className="font-bold text-sm">{comp.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        )}
      </div>

      {/* Roommate Section */}
      {roommate && (
        <section className="py-32 bg-pink-50 dark:bg-pink-950/20 relative overflow-hidden mt-24">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring" }}
                    className="max-w-4xl mx-auto bg-white/80 dark:bg-black/40 backdrop-blur-xl p-12 rounded-[3rem] border border-pink-200 dark:border-pink-800 shadow-2xl"
                >
                    <span className="text-pink-500 font-bold tracking-widest uppercase mb-4 block">Special Dedication</span>
                    <h2 className="text-5xl md:text-7xl font-display font-black mb-8 text-pink-600 dark:text-pink-400">MY ROOMMATE</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                        <div className="aspect-square rounded-2xl overflow-hidden rotate-[-3deg] shadow-lg border-4 border-white">
                            <img src="/assets/cebubohol/roommate/image copy 4.png" className="w-full h-full object-cover" alt="Roommate" />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">To my travel buddy,</h3>
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
