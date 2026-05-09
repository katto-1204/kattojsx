import { motion } from "framer-motion";
import { ArrowLeft, Code2, Terminal, Cpu, Globe } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1, title: "CETSO OFFICIAL VOTING SYSTEM", category: "ORGS", tech: ["React", "Express", "Drizzle"] },
  { id: 2, title: "U-ARE DORMED", category: "SCHOOL", tech: ["Next.js", "Tailwind", "Supabase"] },
  { id: 3, title: "HCI THREE.JS", category: "SCHOOL", tech: ["Three.js", "JavaScript"] },
  { id: 4, title: "HCDC ITS OFFICIAL WEBSITE", category: "CONTRIB", tech: ["Vite", "Motion"] },
  { id: 5, title: "HCDC IARCHIVE", category: "COMMISSIONS", tech: ["Archival API", "React"] },
  { id: 6, title: "QRAFTER", category: "PERSONAL", tech: ["QR-API", "Tailwind"] },
];

export default function InCode() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-orange-500/30">
      {/* Editorial Header */}
      <header className="p-8 md:p-16 border-b border-border flex justify-between items-end">
        <div>
          <Link href="/">
            <Button variant="ghost" className="mb-8 p-0 hover:bg-transparent group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> BACK TO BASE
            </Button>
          </Link>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase"
          >
            In Code<span className="text-orange-500">.</span>
          </motion.h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">Technical Portfolio // 2025</p>
          <div className="flex gap-4 justify-end">
             <Code2 className="text-orange-500" />
             <Terminal />
             <Cpu />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h2 className="text-2xl font-display font-bold uppercase tracking-widest border-l-4 border-orange-500 pl-4">Engineered Solutions</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Specializing in high-performance web applications, interactive 3D interfaces, and organizational management systems. My code is built with scalability and user-centricity at its core.
            </p>
            
            <div className="flex flex-col gap-4">
              {projects.map((project, i) => (
                <motion.div 
                  key={project.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex justify-between items-center p-6 border border-border hover:border-orange-500/50 hover:bg-orange-500/5 transition-all rounded-xl"
                >
                  <div>
                    <span className="text-[10px] font-mono text-orange-500 mb-1 block">{project.category}</span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-2 py-1 bg-muted rounded uppercase">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-16 aspect-square rounded-3xl overflow-hidden bg-muted/50 border border-border group">
               <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
               <div className="p-12 flex flex-col h-full">
                  <Globe className="text-orange-500 w-16 h-16 mb-auto" />
                  <div className="mt-auto">
                    <p className="text-4xl font-display font-black leading-none mb-4 uppercase">Global Reach,<br/>Local Impact.</p>
                    <p className="text-muted-foreground uppercase text-xs tracking-[0.2em]">Deploying Excellence across all platforms.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
