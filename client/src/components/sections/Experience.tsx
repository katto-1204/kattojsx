import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase } from "lucide-react";

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
  // Only color the card if its center has passed the viewport center (milestone reached)
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

  // Gradual grid gradient background using scroll progress
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.7]);
  const gridColor = useTransform(scrollYProgress, [0, 1], [
    'rgba(249,115,22,0.1)',
    'rgba(249,115,22,0.25)'
  ]);
  const gridColor2 = useTransform(scrollYProgress, [0, 1], [
    'rgba(249,115,22,0.15)',
    'rgba(249,115,22,0.35)'
  ]);

  // Use CSS variables for reactivity
  const gridBgRef = useRef<HTMLDivElement>(null);
  const gridBg2Ref = useRef<HTMLDivElement>(null);
  useMotionValueEvent(gridColor, "change", (v) => {
    if (gridBgRef.current) gridBgRef.current.style.setProperty('--grid-color', v);
  });
  useMotionValueEvent(gridColor2, "change", (v) => {
    if (gridBg2Ref.current) gridBg2Ref.current.style.setProperty('--grid-color2', v);
  });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Grid Background with scroll-based gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Place the gradient background at the very back */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-100 to-orange-200/60" />
        {/* Grid layers above the gradient */}
        <motion.div
          ref={gridBgRef}
          className="absolute inset-0"
          style={{
            opacity: 1,
            backgroundImage: `linear-gradient(#f97316 2px, transparent 2px), linear-gradient(90deg, #f97316 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
            transition: 'background-image 0.3s',
            zIndex: 1,
          }}
        />
        <motion.div
          ref={gridBg2Ref}
          className="absolute inset-0"
          style={{
            opacity: 1,
            backgroundImage: `linear-gradient(#fbbf24 2px, transparent 2px), linear-gradient(90deg, #fbbf24 2px, transparent 2px)`,
            backgroundSize: '75px 75px',
            transition: 'background-image 0.3s',
            zIndex: 2,
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
              ref={el => { cardRefs.current[index] = el; }}
              className={`relative flex items-start md:items-center gap-8 mb-24 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Point */}
              <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-60px)] ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <motion.div 
                  className={
                    `p-10 rounded-3xl border border-border/50 shadow-lg hover:shadow-xl transition-all group cursor-pointer ` +
                    (reachedMilestone === index
                      ? 'bg-orange-400 text-black border-orange-500'
                      : 'bg-white dark:bg-zinc-900 text-inherit')
                  }
                  whileHover={{ 
                    rotateY: 5,
                    rotateX: -2,
                    translateY: -8,
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    rotateY: clickedCard === index ? 15 : 0,
                    rotateX: clickedCard === index ? -8 : 0,
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
                    `inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ` +
                    (reachedMilestone === index
                      ? 'bg-black/10 text-black border border-black'
                      : 'bg-primary/10 text-primary')
                  }>
                    {exp.period}
                  </span>
                  <h3 className={
                    `text-2xl md:text-3xl font-bold mb-2 transition-colors ` +
                    (reachedMilestone === index ? 'text-black' : 'group-hover:text-primary')
                  }>{exp.role}</h3>
                  <h4 className={
                    `text-base font-bold mb-4 uppercase tracking-wider ` +
                    (reachedMilestone === index ? 'text-black/80' : 'text-muted-foreground')
                  }>{exp.company}</h4>
                  <p className={
                    `text-lg leading-relaxed ` +
                    (reachedMilestone === index ? 'text-black/80' : 'text-muted-foreground/80')
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
