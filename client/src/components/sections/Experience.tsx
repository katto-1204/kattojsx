import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "FREELANCE DEVELOPER",
    period: "2023-2025",
    company: "Self-employed",
    description: "Developing custom web solutions for various clients using React and Next.js."
  },
  {
    role: "SOCIAL MEDIA MANAGER, GRAPHIC DESIGNER",
    period: "2024",
    company: "GEE GRAPHICS",
    description: "Managed social media presence and created visual assets for marketing campaigns."
  },
  {
    role: "CREATIVES HEAD",
    period: "2023",
    company: "ITS",
    description: "Led the creative team in designing event materials and digital content."
  },
  {
    role: "CREATIVES MANAGER",
    period: "2022",
    company: "CETSO",
    description: "Oversaw creative direction for organizational projects and branding."
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-pink-950/40 dark:from-black dark:via-zinc-950 dark:to-pink-900/60" />
      </motion.div>
      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">PROFESSIONAL EXPERIENCE</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dynamic and engaging way to showcase my professional journey.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          <motion.div 
            className="absolute left-[19px] md:left-1/2 top-0 w-0.5 bg-primary -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`relative flex items-start md:items-center gap-8 mb-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Point */}
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-60px)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-white dark:bg-zinc-900 p-10 rounded-3xl border border-border/50 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <h4 className="text-base font-bold text-muted-foreground mb-4 uppercase tracking-wider">{exp.company}</h4>
                  <p className="text-lg text-muted-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-[calc(50%-60px)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
