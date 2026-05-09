import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Globe, Github, Calendar, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "School Projects", "Contributions", "Commissions", "Orgs", "Personal"];

const projects = [
  {
    id: 1,
    title: "CETSO OFFICIAL VOTING SYSTEM (UNDM)",
    category: "Orgs",
    tags: ["Auth", "Database", "Real-time"],
    year: "2025",
    image: "/assets/projects/cetsoofficialvoting.png",
    link: "https://cetso-voting.vercel.app/",
    github: "https://github.com/katto-1204/cetso-voting",
    description: "Secure, real-time voting platform for student organizations.",
    longDescription: "A robust voting infrastructure built to handle high-concurrency elections within the Computer Engineering Technology Student Organization. Features include biometric-inspired authentication, live tallying, and tamper-proof ballot receipts.",
    features: ["Real-time Result Dashboard", "Multi-factor Authentication", "Encrypted Ballots", "Admin Command Center"],
    role: "Lead Developer"
  },
  {
    id: 2,
    title: "U-ARE DORMED",
    category: "School Projects",
    tags: ["Next.js", "Supabase", "UI/UX"],
    year: "2025",
    image: "/assets/projects/URDORMED.png",
    link: "https://u-are-dormed.vercel.app/",
    description: "A comprehensive dorm management and discovery system.",
    longDescription: "Bridging the gap between students and dorm owners. This platform allows students to browse, filter, and book dorms based on proximity and price, while providing owners a dashboard to manage their listings.",
    features: ["Map Integration", "Booking System", "In-app Messaging", "Owner Dashboard"],
    role: "Full Stack Developer"
  },
  {
    id: 3,
    title: "HCI THREE.JS",
    category: "School Projects",
    tags: ["Three.js", "3D", "Interactive"],
    year: "2025",
    image: "/assets/projects/HCISHAPES.png",
    link: "https://hci-interactiveshapes.vercel.app/",
    description: "Interactive 3D shape manipulation using Three.js.",
    longDescription: "An experimental project focused on human-computer interaction through 3D web graphics. Users can manipulate geometry, lighting, and materials in real-time within a physics-enabled sandbox.",
    features: ["Raycasting Interactions", "Procedural Geometry", "Shader Effects", "Camera Controls"],
    role: "Creative Developer"
  },
  {
    id: 4,
    title: "HCDC ITS OFFICIAL WEBSITE",
    category: "Contributions",
    tags: ["Community", "Vite", "Motion"],
    year: "2024",
    image: "/assets/projects/hcdc its official website.png",
    link: "https://hcdcits.vercel.app/",
    description: "The official hub for the HCDC Information Technology Society.",
    longDescription: "A modern, high-performance portal for the HCDC IT community. It serves as a central resource for event registrations, member directories, and society news.",
    features: ["Event Registration", "Member Portal", "News Feed", "Responsive Design"],
    role: "UI/UX Contributor"
  },
  {
    id: 5,
    title: "HCDC IARCHIVE",
    category: "Commissions",
    tags: ["Archival", "Next.js", "API"],
    year: "2024",
    image: "/assets/projects/iarchive.png",
    link: "https://iarchivehcdc.vercel.app/",
    description: "Institutional digital archival system for student records.",
    longDescription: "A digitized archival solution for the Holy Cross of Davao College. This project focuses on secure data persistence and efficient retrieval of institutional legacy records.",
    features: ["Batch Uploading", "Advanced Search", "Role-based Access", "Audit Logs"],
    role: "Lead Full Stack"
  },
  {
    id: 6,
    title: "QRAFTER",
    category: "Personal",
    tags: ["Utility", "Design", "Tool"],
    year: "2025",
    image: "/assets/projects/qrafter.png",
    link: "https://qraftr.vercel.app/",
    description: "Creative QR code generator and management tool.",
    longDescription: "An all-in-one utility for generating stylized and trackable QR codes. Designed for creatives who want their brand identity to extend into physical scannable assets.",
    features: ["Custom Branding", "Analytics Tracking", "Multiple Export Formats", "Cloud Save"],
    role: "Sole Creator"
  },
  {
    id: 7,
    title: "CHECKITS",
    category: "Orgs",
    tags: ["Monitoring", "Attendance", "System"],
    year: "2025",
    image: "/assets/projects/checkits.png",
    link: "https://checkits.vercel.app/login",
    description: "Attendance and monitoring system for ITS events.",
    longDescription: "Automated event attendance tracking using QR technology. This system generates live attendance reports and syncs with the ITS member database.",
    features: ["QR Scanner", "Live Reports", "CSV Export", "Member Validation"],
    role: "Backend Architect"
  },
  {
    id: 8,
    title: "KIELENTINES (MY BABBY)",
    category: "Personal",
    tags: ["Sentimental", "Interactive", "Gift"],
    year: "2024",
    image: "/assets/projects/kielentines.png",
    link: "https://github.com/katto-1204/my-babby",
    description: "A sentimental, interactive digital gift for a special someone.",
    longDescription: "A deeply personal creative project that uses web animations and interactive storytelling to create a digital time-capsule of memories.",
    features: ["Custom Animations", "Music Integration", "Interactive Timeline", "Password Protected"],
    role: "Creative Director"
  },
  {
    id: 9,
    title: "CETSO TECHNOFAIR [EMPOWERED]",
    category: "Orgs",
    tags: ["Event", "Frontend", "Vibe"],
    year: "2025",
    image: "/assets/projects/cetso technofair.png",
    link: "https://empowered-technofair.vercel.app/",
    description: "Event landing page for the annual technology festival.",
    longDescription: "High-impact visual experience for the CETSO Technofair. Focuses on immersive landing page design and seamless user flow for festival participants.",
    features: ["Interactive Map", "Event Schedule", "Live Updates", "Social Integration"],
    role: "Frontend Lead"
  },
  {
    id: 10,
    title: "GRABBR EXTENSION",
    category: "Personal",
    tags: ["Chrome", "Extension", "Design"],
    year: "2025",
    image: "/assets/projects/grabbr.png",
    link: "https://github.com/katto-1204/grabbr",
    description: "Browser tool for capturing and organizing design inspiration.",
    longDescription: "A browser extension designed for designers and developers to instantly capture UI patterns, color palettes, and assets from any website.",
    features: ["Color Picker", "Asset Scraper", "Cloud Sync", "Moodboard Generator"],
    role: "Developer"
  }
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII"];

export function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(0);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [previewOffset, setPreviewOffset] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filteredProjects = projects.filter(p => activeCategory === "All" || p.category === activeCategory);

  useEffect(() => {
    const audio = new Audio("/sfx/welcomesfx.mp3");
    audio.volume = 0.2;
    audioRef.current = audio;
    return () => { audio.pause(); };
  }, []);

  const handleHover = (index: number, element: HTMLDivElement) => {
    setHoveredProject(index);
    if (listRef.current) {
      const rect = element.getBoundingClientRect();
      const containerRect = listRef.current.getBoundingClientRect();
      const offset = rect.top - containerRect.top;
      setPreviewOffset(Math.max(0, offset));
    }
    audioRef.current?.play().catch(() => {});
  };

  return (
    <section id="works" className="py-32 container mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-black mb-8 text-primary-gradient">SELECTED WORKS</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setHoveredProject(0);
              }}
              className={`px-6 py-2 rounded-full border text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary-gradient text-white border-none shadow-lg shadow-orange-500/30"
                  : "bg-background border-border hover:border-orange-500/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Project List */}
        <div className="lg:w-1/2">
          <div className="flex flex-col" ref={listRef}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  layout
                  className="group relative border-b border-white/5 py-8 cursor-pointer"
                  onMouseEnter={(e) => handleHover(index, e.currentTarget)}
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-baseline gap-6">
                      <span className="text-zinc-600 font-serif italic text-lg">{romanNumerals[index]}</span>
                      <h3 className="text-2xl md:text-4xl font-black group-hover:text-primary-gradient transition-all duration-300 uppercase tracking-tighter">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-orange-500 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-[0.03] -z-0 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Preview */}
        <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
          <div className="relative w-full min-h-[500px]">
            <AnimatePresence mode="wait">
              {hoveredProject !== null && filteredProjects[hoveredProject] && (
                <motion.div
                  key={`${activeCategory}-${hoveredProject}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-0 right-0 w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-950 border border-white/10"
                  style={{ 
                    top: `${previewOffset}px`,
                    transition: 'top 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img src={filteredProjects[hoveredProject].image} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-black mb-2 uppercase tracking-tight">{filteredProjects[hoveredProject].title}</h4>
                    <p className="text-primary-gradient font-bold text-xs tracking-widest uppercase mb-4">{filteredProjects[hoveredProject].category}</p>
                    <p className="text-muted-foreground mb-6 line-clamp-2 text-sm">{filteredProjects[hoveredProject].description}</p>
                    <Button onClick={() => setSelectedProject(filteredProjects[hoveredProject])} className="w-full bg-primary-gradient hover:opacity-90 text-white rounded-full font-black tracking-widest border-none shadow-lg shadow-orange-500/20 h-12">
                      VIEW CASE STUDY
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/98 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-white/10 w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[2.5rem] relative shadow-[0_0_100px_rgba(249,115,22,0.1)]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 z-50 p-3 bg-white/5 hover:bg-red-600/20 hover:border-red-600/50 border border-white/10 rounded-full transition-all text-white"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] h-full overflow-y-auto no-scrollbar">
                {/* Visual Side */}
                <div className="relative aspect-square lg:aspect-auto bg-zinc-900 overflow-hidden">
                  <img src={selectedProject.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-12 left-12 right-12 z-10">
                    <span className="px-5 py-2 bg-primary-gradient text-white text-[10px] font-black tracking-widest uppercase rounded-full mb-6 inline-block shadow-lg shadow-orange-500/40">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-[0.9] mb-4 uppercase tracking-tighter">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Info Side */}
                <div className="p-8 lg:p-16 flex flex-col justify-center bg-zinc-950">
                   <div className="space-y-10">
                      <div className="grid grid-cols-2 gap-8 border-b border-white/5 pb-10">
                        <div className="space-y-2">
                          <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest flex items-center gap-2">
                             <Calendar size={14} className="text-orange-500" /> Timeline
                          </p>
                          <p className="text-white font-bold text-xl">{selectedProject.year}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest flex items-center gap-2">
                             <Tag size={14} className="text-orange-500" /> Role
                          </p>
                          <p className="text-white font-bold text-xl">{selectedProject.role}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">The Challenge</h4>
                        <p className="text-zinc-300 text-xl leading-relaxed font-medium">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-zinc-500 font-black text-[10px] uppercase tracking-widest">Core Capabilities</h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.features?.map((feature: string) => (
                            <div key={feature} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-bold flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-8">
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          className="flex-1 py-5 bg-primary-gradient text-white text-center font-black rounded-full hover:opacity-90 transition-all flex items-center justify-center gap-3 tracking-widest text-sm shadow-xl shadow-orange-500/20"
                        >
                          LIVE PREVIEW <ExternalLink size={20} />
                        </a>
                        {selectedProject.github && (
                          <a 
                            href={selectedProject.github} 
                            target="_blank" 
                            className="flex-1 py-5 border border-white/10 bg-white/5 hover:border-orange-500/50 text-white text-center font-black rounded-full transition-all flex items-center justify-center gap-3 tracking-widest text-sm"
                          >
                            CODE REPO <Github size={20} />
                          </a>
                        )}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
