import { motion } from "framer-motion";
import { Cpu, PenTool } from "lucide-react";
import portrait from "@assets/generated_images/professional_portrait_of_a_creative_female_developer.png";

// Simple SVG Icons for Brands
const Icons = {
  HTML: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2l9.6 2.6-1.5 15.6-8.1 2.2-8.1-2.2-1.5-15.6zm0 2.8l-6.8 1.9.9 10 5.9 1.6 5.9-1.6.9-10z"/></svg>,
  CSS: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2l9.6 2.6-1.5 15.6-8.1 2.2-8.1-2.2-1.5-15.6zm0 2.8l-6.8 1.9.9 10 5.9 1.6 5.9-1.6.9-10z"/></svg>,
  JS: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M3 3h18v18H3V3zm13.6 13.4c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6zm-6.5 0c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6z"/></svg>,
  React: (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><circle cx="12" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM12 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>,
  Python: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2c2.8 0 5 2.2 5 5v2h-2V7c0-1.7-1.3-3-3-3S9 5.3 9 7v2H7V7c0-2.8 2.2-5 5-5zm0 13c-2.8 0-5 2.2-5 5v2h2v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2h2v-2c0-2.8-2.2-5-5-5z"/></svg>,
  Generic: (props: any) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><circle cx="12" cy="12" r="10"/></svg>
};

const skills = [
  "Full Stack Developer", "Graphic Designer", "UI/UX", "Video Editing", "Social Media"
];

const languages = [
  { name: "HTML", icon: Icons.HTML },
  { name: "CSS", icon: Icons.CSS },
  { name: "JS", icon: Icons.JS },
  { name: "REACT", icon: Icons.React },
  { name: "PYTHON", icon: Icons.Python },
  { name: "VUE", icon: Icons.Generic },
  { name: "SVELTE", icon: Icons.Generic },
  { name: "NEXTJS", icon: Icons.Generic },
  { name: "PHP", icon: Icons.Generic },
  { name: "MYSQL", icon: Icons.Generic }
];

const tools = [
  "PHOTOSHOP", "CANVA", "FIGMA", "MIRO", "CAPCUT"
];

export function Personal() {
  return (
    <section id="personal" className="py-24 container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">PERSONAL INFORMATION</h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        
        {/* Profile Image - Large Square */}
        <motion.div 
          className="col-span-1 md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={portrait} alt="Catherine Arnado" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-bold">Catherine Arnado</h3>
            <p className="text-white/80">Creative Developer & Designer</p>
          </div>
        </motion.div>

        {/* Skillset */}
        <motion.div 
          className="col-span-1 md:col-span-2 row-span-1 bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-border/50 shadow-sm flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Cpu className="w-5 h-5 text-primary" /> SKILLSET</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div 
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-gradient-to-br from-orange-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-3xl p-6 border border-border/50 shadow-sm overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">MY LANGUAGES</h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-6">
            {languages.map((lang, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <motion.div 
                  className="w-12 h-12 flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors"
                  whileHover={{ y: -5, rotate: 10, scale: 1.1 }}
                >
                  <lang.icon className="w-8 h-8" />
                </motion.div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{lang.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div 
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-zinc-950 text-white rounded-3xl p-6 border border-zinc-800 shadow-sm flex flex-col justify-center relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
          
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 relative z-10"><PenTool className="w-5 h-5 text-primary" /> MY TOOLS</h3>
          <div className="flex flex-wrap gap-6 relative z-10">
            {tools.map((tool, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <div className="p-2 rounded-md bg-white/10 backdrop-blur-sm">
                   {/* Simplified check for tools */}
                   <Icons.Generic className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
