import { motion } from "framer-motion";
import { Code, Database, Layout, Palette, Terminal, Cpu, PenTool, Figma, Video, Share2 } from "lucide-react";
import portrait from "@assets/generated_images/professional_portrait_of_a_creative_female_developer.png";

const skills = [
  "Full Stack Developer", "Graphic Designer", "UI/UX", "Video Editing", "Social Media"
];

const languages = [
  "HTML", "CSS", "JS", "DJANGO", "PYTHON", "VUE", "SVELTE", "REACT", "C++", "JAVA", "C", "NEXTJS", "PHP", "MYSQL"
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
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Terminal className="w-5 h-5 text-primary" /> MY LANGUAGES</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {languages.map((lang, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                  <Code className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{lang}</span>
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
          <div className="flex flex-wrap gap-4 relative z-10">
            {tools.map((tool, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-white/10 backdrop-blur-sm">
                  {tool === "FIGMA" ? <Figma className="w-4 h-4" /> : 
                   tool === "CAPCUT" ? <Video className="w-4 h-4" /> :
                   <Layout className="w-4 h-4" />}
                </div>
                <span className="text-xs font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
