import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { User, Sparkles, Code } from "lucide-react";

export function Personal() {
  const [activeAvatar, setActiveAvatar] = useState("/assets/katcardgrowling3d.png");
  
  // 3D Tilt Effect State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const avatarOptions = [
    { id: '3d', img: '/assets/katcardgrowling3d.png', icon: <Sparkles size={16} />, label: '3D Katto' },
    { id: 'code', img: '/assets/kat in code.png', icon: <Code size={16} />, label: 'In Code' },
    { id: 'life', img: '/assets/kat beyond the code.png', icon: <User size={16} />, label: 'Beyond' },
  ];

  return (
    <section id="personal" className="py-24 container mx-auto px-4 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-black mb-4 text-primary-gradient">PERSONAL INFORMATION</h2>
        <div className="w-24 h-1.5 bg-primary-gradient rounded-full" />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
        {/* Bento Grid: Skillset, Tools, Languages (Now on the Left) */}
        <BentoGrid />

        {/* Profile Image - Large Card (Now on the Right) */}
        <div className="space-y-6">
          <motion.div
            className="rounded-3xl overflow-hidden relative group aspect-[3/4] cursor-pointer bg-zinc-900 border border-white/5 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div 
              style={{ transform: "translateZ(50px)" }}
              className="absolute inset-0 z-10"
            >
              <img
                src={activeAvatar}
                alt="Catherine Arnado"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_50px_rgba(220,38,38,0.4)]"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 z-20">
              <motion.div style={{ transform: "translateZ(75px)" }}>
                <h3 className="text-white text-3xl font-display font-black tracking-tighter">Catherine Arnado</h3>
                <p className="text-primary-gradient font-mono text-sm font-bold uppercase tracking-widest">Creative Developer</p>
              </motion.div>
            </div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none" />
          </motion.div>

          {/* Avatar Toggle System */}
          <div className="flex justify-center gap-3 p-2 bg-zinc-950/50 backdrop-blur-xl border border-white/10 rounded-2xl">
            {avatarOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveAvatar(opt.img)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeAvatar === opt.img 
                    ? "bg-primary-gradient text-white shadow-lg shadow-orange-500/20" 
                    : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                {opt.icon}
                <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

