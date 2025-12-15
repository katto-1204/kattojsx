import { motion } from "framer-motion";
import { Building, MapPin } from "lucide-react";
import { Link } from "wouter";
import cebu from "@assets/generated_images/scenic_view_of_cebu_city_philippines.png";
import bohol from "@assets/generated_images/scenic_view_of_bohol_chocolate_hills.png";

const companies = [
  "WORLDTECH INFORMATION SOLUTIONS",
  "RIVAN IT CEBU",
  "CODECHUM",
  "MATA TECHNOLOGIES INC",
  "TAGBILARAN 911"
];

const schools = ["HCDC", "BSIT", "WATT"];

const places = [
  { name: "CEBU", image: cebu, hotels: ["BAI HOTEL", "SOMAC", "BUFFET 101"], link: "/cebu" },
  { name: "BOHOL", image: bohol, hotels: ["VISTA SUITES PANGLAO"], link: "/bohol" }
];

export function EducationalTour() {
  return (
    <section id="tour" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">EDUC TOUR 2025</h2>
        
        {/* Companies Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {companies.map((company, i) => (
            <motion.div 
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 h-48 flex flex-col items-center justify-between shadow-sm hover:shadow-xl transition-all border border-border/50 group"
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <Building className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-center text-xs font-bold uppercase tracking-wider">{company}</p>
            </motion.div>
          ))}
        </div>

        {/* Companies Row 2 */}
        <div className="grid grid-cols-3 gap-4 mb-24 max-w-3xl mx-auto">
          {schools.map((school, i) => (
            <motion.div 
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 h-32 flex items-center justify-center shadow-sm hover:shadow-xl transition-all border border-border/50"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">{school}</h3>
            </motion.div>
          ))}
        </div>

        {/* Places Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {places.map((place, i) => (
            <Link key={i} href={place.link}>
                <motion.div 
                  className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-4xl font-display font-bold text-white mb-2">{place.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {place.hotels.map((hotel, j) => (
                        <span key={j} className="text-xs font-bold text-white/80 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {hotel}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
