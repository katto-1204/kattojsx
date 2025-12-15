import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import certImage from "@assets/generated_images/certificate_of_achievement_mockup.png";

const certifications = [
  { id: "codechum", title: "CODECHUM", year: "2024", image: certImage },
  { id: "google", title: "GOOGLE", year: "2023", image: certImage },
  { id: "tour", title: "TOUR", year: "2025", image: certImage },
  { id: "its", title: "ITS", year: "2023", image: certImage },
  { id: "psits", title: "PSITS NIKOLODEONS", year: "2022", image: certImage },
  { id: "gee", title: "GEE GRAPHICS", year: "2024", image: certImage },
];

export function Certifications() {
  const [activeId, setActiveId] = useState(certifications[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeCert = certifications.find(c => c.id === activeId) || certifications[0];

  return (
    <section id="certification" className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: List */}
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">CERTIFICATIONS</h2>
          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex justify-between items-center ${
                  activeId === cert.id 
                    ? "bg-primary text-white border-primary shadow-lg scale-105" 
                    : "bg-white dark:bg-zinc-900 border-border hover:border-primary/50"
                }`}
                onClick={() => setActiveId(cert.id)}
              >
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  activeId === cert.id ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                }`}>
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Card Swap */}
        <div className="h-[500px] relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -50, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <img src={activeCert.image} alt={activeCert.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold px-4 py-2 border border-white rounded-full backdrop-blur-md">View Certificate</span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-primary/10 rounded-2xl rotate-6 scale-95" />
            <div className="w-full max-w-md aspect-[4/3] bg-primary/5 rounded-2xl -rotate-3 scale-90 absolute" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
              
              <div className="h-full overflow-auto p-2">
                <img src={activeCert.image} alt={activeCert.title} className="w-full h-auto rounded-xl" />
              </div>
              
              <div className="p-6 border-t flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">{activeCert.title}</h3>
                  <p className="text-muted-foreground">Issued {activeCert.year}</p>
                </div>
                <Button>
                  Verify Credential <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
