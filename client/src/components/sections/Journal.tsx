import { motion } from "framer-motion";
import cebu from "@assets/generated_images/scenic_view_of_cebu_city_philippines.png";
import bohol from "@assets/generated_images/scenic_view_of_bohol_chocolate_hills.png";

const images = [cebu, bohol, cebu, bohol, cebu, bohol];

export function Journal() {
  return (
    <section id="journal" className="py-24 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">JOURNAL</h2>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="break-inside-avoid rounded-2xl overflow-hidden mb-4 hover:shadow-xl transition-shadow"
          >
            <img src={img} alt="Journal" className="w-full h-auto" />
            <div className="p-4 bg-muted/30">
              <p className="text-sm font-medium">Day {i + 1} - Exploring the city</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 bg-pink-100 dark:bg-pink-900/20 rounded-3xl p-12 text-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
         <div className="relative z-10">
           <h3 className="text-3xl font-display font-bold mb-6 text-pink-600 dark:text-pink-300">MY ROOMMATE</h3>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
             "To the best roommate ever, thanks for the memories and the laughter during this amazing trip!"
           </p>
         </div>
      </div>
    </section>
  );
}
