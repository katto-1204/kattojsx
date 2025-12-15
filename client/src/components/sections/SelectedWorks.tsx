import { motion } from "framer-motion";
import { useState } from "react";
import project1 from "@assets/generated_images/modern_ui_ux_design_dashboard_mockup.png";
import project2 from "@assets/generated_images/mobile_app_design_interface_mockup.png";

const projects = [
  { id: 1, title: "PUBMATS", category: "Digital Marketing", image: project1 },
  { id: 2, title: "CROSSCERT", category: "Web Design", image: project2 },
  { id: 3, title: "RENTO", category: "Mobile App", image: project1 },
  { id: 4, title: "ECOIN", category: "Fintech", image: project2 },
  { id: 5, title: "EBURG", category: "Food Delivery", image: project1 },
  { id: 6, title: "GRILL BURG", category: "Branding", image: project2 },
  { id: 7, title: "RAFAEL'S PIZZA", category: "Social Media", image: project1 },
  { id: 8, title: "BST", category: "Algorithm Vis", image: project2 },
];

const MarqueeItem = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative flex-shrink-0 w-[300px] h-[400px] mx-4 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out`}
      style={{
        filter: isHovered ? "blur(0px)" : "blur(0px)", // Using scale instead of blur for performance and effect
        transform: isHovered ? "scale(1.05) rotate(-2deg)" : "scale(1) rotate(0deg)",
        zIndex: isHovered ? 10 : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"} flex flex-col justify-end p-6`}>
        <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">0{index + 1}</span>
        <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
        <p className="text-white/70 text-sm">{project.category}</p>
      </div>
    </motion.div>
  );
};

export function SelectedWorks() {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">SELECTED WORKS</h2>
        <p className="text-muted-foreground">Digital marketing, event promotions, and digital campaigns</p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex w-full overflow-hidden py-10">
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ width: "max-content" }}
          >
            {[...projects, ...projects, ...projects].map((project, index) => (
              <MarqueeItem key={`${project.id}-${index}`} project={project} index={index % projects.length} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
