import { motion } from "framer-motion";
import { Briefcase, Building2, Users } from "lucide-react";

const experiences = [
  {
    role: "FREELANCE DEVELOPER",
    period: "2023-2025",
    company: "Self-employed",
    icon: Briefcase,
    color: "bg-blue-500"
  },
  {
    role: "SOCIAL MEDIA MANAGER",
    period: "2024",
    company: "GEE GRAPHICS",
    icon: Users,
    color: "bg-purple-500"
  },
  {
    role: "CREATIVES HEAD",
    period: "2023",
    company: "ITS",
    icon: Building2,
    color: "bg-orange-500"
  },
  {
    role: "CREATIVES MANAGER",
    period: "2022",
    company: "CETSO",
    icon: Users,
    color: "bg-green-500"
  }
];

export function Experience() {
  return (
    <section className="py-32 overflow-hidden relative">
      {/* Gradual blur overlay on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">EXPERIENCE</h2>
        <p className="text-muted-foreground">A decade of crafting digital experiences across industries</p>
      </div>

      <div className="flex overflow-x-auto pb-12 px-4 md:px-24 gap-8 no-scrollbar snap-x">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="flex-shrink-0 w-[300px] snap-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative pt-12">
               {/* Timeline Line */}
               <div className="absolute top-[27px] left-0 w-full h-0.5 bg-border -z-10" />
               
               {/* Dot */}
               <div className={`w-14 h-14 rounded-full border-4 border-background ${exp.color} flex items-center justify-center text-white mb-6 mx-auto relative z-10 shadow-lg`}>
                  <exp.icon className="w-6 h-6" />
               </div>

               <div className="bg-card dark:bg-zinc-900 border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{exp.company}</h4>
               </div>
            </div>
          </motion.div>
        ))}
        {/* Padding for scroll */}
        <div className="w-12 flex-shrink-0" />
      </div>
    </section>
  );
}
