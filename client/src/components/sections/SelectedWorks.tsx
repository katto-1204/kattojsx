import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "CROSSCERT", category: "Web Design", tags: ["UI/UX", "Web", "Next.js"], year: "2024", image: "/assets/projects/CROSSCERT (1).png" },
  { id: 2, title: "RENTO", category: "Mobile App", tags: ["UI/UX", "Mobile", "Figma"], year: "2024", image: "/assets/projects/project1.RENTO.png" },
  { id: 3, title: "ITS VOTING SYSTEM (Under Maintenance)", category: "Full Stack App", tags: ["Dev", "React", "Node"], year: "2024", image: "/assets/projects/itsvoting.png" },
  { id: 4, title: "ECOIN", category: "Fintech", tags: ["Web", "MySQL", "Next.js"], year: "2023", image: "/assets/projects/ECOIN.png" },
  { id: 5, title: "EBURG", category: "Food Delivery", tags: ["Mobile", "POS", "Prototyping"], year: "2023", image: "/assets/projects/eburg.png" },
  { id: 6, title: "GRILL BURG", category: "Branding", tags: ["Identity", "Social", "Canva"], year: "2022", image: "/assets/projects/grill.gif" },
  { id: 7, title: "Rafael's Pizza", category: "Algorithm Vis", tags: ["Dev", "C++", "Logic"], year: "2021", image: "/assets/projects/raf.gif" },
  { id: 8, title: "Chicks Ahoy", category: "Food", tags: ["Dev", "WEB", "Logic"], year: "2021", image: "/assets/projects/chick1.png" },
  { id: 9, title: "Gee Graphics OM", category: "Design System", tags: ["Dev", "React", "Dashboard"], year: "2021", image: "/assets/projects/GEE GRAPHICSS .png" },
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function SelectedWorks() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(0);
  const [previewOffset, setPreviewOffset] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio("/sfx/welcomesfx.mp3");
    audio.volume = 0.4;
    audioRef.current = audio;
    return () => {
      audio.pause();
    };
  }, []);

  const handleHover = (index: number, element: HTMLDivElement) => {
    setHoveredProject(index);

    const listRect = listRef.current?.getBoundingClientRect();
    const itemRect = element.getBoundingClientRect();
    if (listRect) {
      const listCenter = listRect.top + listRect.height / 2;
      const itemCenter = itemRect.top + itemRect.height / 2;
      setPreviewOffset(itemCenter - listCenter);
    }

    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .catch(() => {
          /* ignore autoplay errors */
        });
    }
  };

  const handleHoverEnd = () => {
    setHoveredProject(null);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <section id="works" className="py-32 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: List */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16">SELECTED WORKS</h2>
          <div className="flex flex-col" ref={listRef}>
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group relative border-b border-border py-8 cursor-pointer"
                onMouseEnter={(e) => handleHover(index, e.currentTarget)}
                onMouseLeave={handleHoverEnd}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-baseline gap-6">
                    <span className="text-muted-foreground font-serif italic">{romanNumerals[index]}</span>
                    <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full border border-border bg-muted/20 text-muted-foreground">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{project.year}</span>
                  </div>
                </div>
                
                {/* Hover Background Reveal for Mobile */}
                <motion.div 
                  className="absolute inset-0 bg-muted/30 -z-0 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Image Preview (Sticky) */}
        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
          <div className="sticky top-32 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredProject !== null ? (
                <motion.div
                  key={hoveredProject}
                  initial={{ opacity: 0, scale: 0.95, rotate: 2, y: previewOffset }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: previewOffset }}
                  exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl bg-background"
                  style={{ transition: "transform 0.3s ease-out" }}
                >
                    <img 
                        src={projects[hoveredProject].image} 
                        alt={projects[hoveredProject].title} 
                        className="w-full h-auto max-h-[560px] object-contain"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                        <h4 className="text-2xl font-bold text-white mb-2">{projects[hoveredProject].title}</h4>
                        <p className="text-white/80">{projects[hoveredProject].category}</p>
                        <ArrowUpRight className="absolute top-4 right-4 text-white w-6 h-6" />
                    </div>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-full w-full border-2 border-dashed border-border rounded-3xl">
                  <p className="text-muted-foreground uppercase tracking-widest">
                    Select a project to preview
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
