import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardSwap, { Card } from "./CardSwap";

const certifications = [
  { id: "bitdegree", title: "BITDEGREE", year: "2023", image: "/assets/certificates/bitdegree.png", verificationUrl: "https://www.bitdegree.org/certificate/check" },
  { id: "codechum", title: "CODECHUM", year: "2024", image: "/assets/certificates/codechum cert.png", verificationUrl: "https://codechum.com/verify" },
  { id: "psits", title: "PSITS NIKOLODEONS", year: "2024", image: "/assets/certificates/NIKOLODEONS.png" },
  { id: "google", title: "GOOGLE DEVELOPER GROUP DAVAO", year: "2025", image: "/assets/certificates/GDG CERT.png" },
  { id: "tour", title: "EDUCATIONAL TOUR 2025", year: "2025", image: "/assets/certificates/TOUR CERT.png" },
  { id: "its", title: "ITS", year: "2025", image: "/assets/certificates/ITS CERT.png" },
  { id: "gee", title: "GEE GRAPHICS", year: "2025", image: "/assets/certificates/gee graphics cert.png" },
  { id: "cetso", title: "CETSO", year: "2026", image: "/assets/certificates/CETSO.png" },
];

export function Certifications() {
  const [activeId, setActiveId] = useState(certifications[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeCert = certifications.find(c => c.id === activeId) || certifications[0];

  const handleCardClick = (index: number) => {
    const cert = certifications[index];
    if (!cert) return;
    setActiveId(cert.id);
    setIsModalOpen(true);
  };

  return (
    <section id="certification" className="py-24 container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: List */}
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-black mb-12 text-primary-gradient uppercase tracking-tighter">CERTIFICATIONS</h2>
          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 flex justify-between items-center ${activeId === cert.id
                  ? "bg-primary-gradient text-white border-none shadow-xl shadow-orange-500/20 scale-[1.02]"
                  : "bg-zinc-900/50 backdrop-blur-sm border-white/5 hover:border-orange-500/30"
                  }`}
                onClick={() => {
                  setActiveId(cert.id);
                  setIsModalOpen(true);
                }}
              >
                <h3 className="text-xl font-black uppercase tracking-tight">{cert.title}</h3>
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest ${activeId === cert.id ? "bg-white/20 text-white" : "bg-primary-gradient/10 text-orange-500"
                  }`}>
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Card Swap */}
        <div className="h-[500px] relative flex items-center justify-center">
          <div style={{ height: "100%", position: "relative" }} className="w-full max-w-xl">
            <CardSwap
              width="100%"
              height={320}
              cardDistance={70}
              verticalDistance={80}
              delay={4000}
              pauseOnHover={false}
              onCardClick={handleCardClick}
              skewAmount={4}
            >
              {certifications.map((cert) => (
                <Card key={cert.id} className="overflow-hidden backdrop-blur-xl border border-white/10 shadow-2xl">
                  <div className="relative w-full h-full">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-black text-white/50 tracking-[0.3em] uppercase mb-1">
                          Certification
                        </p>
                        <h3 className="text-xl font-black text-white leading-tight uppercase tracking-tight">
                          {cert.title}
                        </h3>
                      </div>
                      <span className="px-4 py-1.5 rounded-full bg-primary-gradient text-white text-[10px] font-black tracking-widest border border-white/20 shadow-lg shadow-orange-500/30">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-zinc-950 border border-white/10 rounded-[2.5rem] overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col shadow-[0_0_100px_rgba(249,115,22,0.1)] relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-6 right-6 z-10 bg-white/5 hover:bg-white/10 text-white rounded-full h-12 w-12 border border-white/10"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-6 h-6" />
              </Button>

              <div className="h-full overflow-auto p-4 lg:p-8 bg-zinc-900/30 no-scrollbar">
                <img src={activeCert.image} alt={activeCert.title} className="w-full h-auto rounded-3xl shadow-2xl border border-white/10" />
              </div>

              <div className="p-8 lg:p-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 bg-zinc-950">
                <div className="text-center sm:text-left">
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight">{activeCert.title}</h3>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mt-1">ISSUED IN {activeCert.year}</p>
                </div>
                {activeCert.verificationUrl && (
                  <Button className="bg-primary-gradient hover:opacity-90 text-white rounded-full px-10 h-14 font-black tracking-widest text-xs shadow-xl shadow-orange-500/20" asChild>
                    <a href={activeCert.verificationUrl} target="_blank" rel="noreferrer">
                      VERIFY CREDENTIAL <ExternalLink className="ml-3 w-4 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
