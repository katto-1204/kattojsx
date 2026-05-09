import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const experiences = [
  {
    role: "FREELANCE DEVELOPER",
    period: "2023-2025",
    company: "Self-employed",
    description: "Developing custom web solutions for various clients using React and Next.js.",
    milestone: true
  },
  {
    role: "SOCIAL MEDIA MANAGER, GRAPHIC DESIGNER",
    period: "2024",
    company: "GEE GRAPHICS",
    description: "Managed social media presence and created visual assets for marketing campaigns.",
    milestone: true
  },
  {
    role: "CREATIVES HEAD",
    period: "2025",
    company: "ITS",
    description: "Led the creative team in designing event materials and digital content.",
    milestone: true
  },
  {
    role: "CREATIVES MANAGER",
    period: "2025",
    company: "CETSO",
    description: "Oversaw creative direction for organizational projects and branding.",
    milestone: true
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const [reachedMilestone, setReachedMilestone] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRefs.current.length) return;
      const viewportCenter = window.innerHeight / 2;
      let lastReached = 0;
      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        if (cardCenter < viewportCenter) {
          lastReached = idx;
        }
      });
      setReachedMilestone(lastReached);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Subtle grid background — dark mode aware */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.08,
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 text-primary-gradient uppercase tracking-tighter">PROFESSIONAL EXPERIENCE</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            A dynamic and engaging way to showcase my professional journey.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
          <motion.div 
            className="absolute left-[19px] md:left-1/2 top-0 w-px bg-primary-gradient -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              ref={el => { cardRefs.current[index] = el; }}
              className={`relative flex items-start md:items-center gap-8 mb-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Point */}
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-950 border-4 border-orange-500 z-10 shadow-[0_0_20px_rgba(249,115,22,0.4)]" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-60px)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <motion.div 
                  className={
                    `p-10 rounded-[2rem] border shadow-2xl hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all group cursor-pointer ` +
                    (reachedMilestone === index
                      ? 'bg-primary-gradient text-white border-none'
                      : 'bg-zinc-900/50 backdrop-blur-xl text-card-foreground border-white/5')
                  }
                  whileHover={{ 
                    rotateY: index % 2 === 0 ? -5 : 5,
                    rotateX: 2,
                    translateY: -8,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    rotateY: clickedCard === index ? (index % 2 === 0 ? -15 : 15) : 0,
                    rotateX: clickedCard === index ? 8 : 0,
                    scale: clickedCard === index ? 1.05 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  onClick={() => {
                    setClickedCard(clickedCard === index ? null : index);
                  }}
                >
                  <span className={
                    `inline-block px-5 py-2 rounded-full text-[10px] font-black tracking-[0.2em] mb-6 ` +
                    (reachedMilestone === index
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-primary-gradient/10 text-orange-500')
                  }>
                    {exp.period}
                  </span>
                  <h3 className={
                    `text-2xl md:text-4xl font-black mb-3 transition-colors uppercase tracking-tight ` +
                    (reachedMilestone === index ? 'text-white' : 'group-hover:text-primary-gradient')
                  }>{exp.role}</h3>
                  <h4 className={
                    `text-xs font-black mb-6 uppercase tracking-[0.3em] ` +
                    (reachedMilestone === index ? 'text-white/70' : 'text-zinc-500')
                  }>{exp.company}</h4>
                  <p className={
                    `text-lg leading-relaxed font-medium ` +
                    (reachedMilestone === index ? 'text-white/80' : 'text-muted-foreground')
                  }>
                    {exp.description}
                  </p>
                </motion.div>
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

