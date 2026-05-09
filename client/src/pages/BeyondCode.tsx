import { motion } from "framer-motion";
import { ArrowLeft, Palette, Camera, Heart, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Stack from "@/components/ui/Stack";


const creatives = [
  { id: 1, title: "LogoFolio", type: "Branding", color: "bg-red-500/20" },
  { id: 2, title: "Pubmats", type: "Social Media", color: "bg-orange-500/20" },
  { id: 3, title: "Shirt Layouts", type: "Apparel", color: "bg-blue-500/20" },
  { id: 4, title: "Team Rosters", type: "Gaming", color: "bg-green-500/20" },
];

const journalImages = [
  "/assets/journal/6mata.png",
  "/assets/journal/5tarsier.png",
  "/assets/journal/4rivanit.png",
  "/assets/journal/3codechum.png",
  "/assets/journal/2worldtech.png",
  "/assets/journal/1.png",
];


export default function BeyondCode() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-red-600/30">
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
            Beyond<br/>Code<span className="text-red-600">.</span>
          </motion.h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">Creative Direction // 2025</p>
          <div className="flex gap-4 justify-end">
             <Palette className="text-red-600" />
             <Camera />
             <Heart className="fill-red-600 text-red-600" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Creative Philosophy */}
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-2xl font-display font-bold uppercase tracking-widest border-l-4 border-red-600 pl-4">Creative Soul</h2>
            <p className="text-3xl font-medium leading-tight">
              Design is more than just visuals; it's about <span className="text-red-600 italic">emotional resonance</span> and <span className="text-red-600 italic">narrative flow</span>. Whether it's a logo or a gaming roster, every pixel serves a purpose.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {creatives.map((item, i) => (
                <motion.div 
                  key={item.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`${item.color} aspect-video rounded-2xl p-8 flex flex-col justify-end border border-white/5 group cursor-pointer overflow-hidden relative`}
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap className="text-red-600 fill-red-600" />
                  </div>
                  <span className="text-xs uppercase tracking-widest mb-1 opacity-60">{item.type}</span>
                  <h3 className="text-2xl font-black uppercase">{item.title}</h3>
                </motion.div>
              ))}
            </div>

            {/* The Journal Section with Stack */}
            <div className="pt-20">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">THE JOURNAL<span className="text-red-600">.</span></h2>
                  <p className="text-muted-foreground uppercase tracking-widest text-xs font-mono">Visual moments, milestones, and snapshots of the journey.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-red-600" />
                  Tap/Drag to shuffle
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <div className="w-[320px] h-[400px] md:w-[450px] md:h-[550px]">
                  <Stack 
                    randomRotation={true}
                    sensitivity={150}
                    sendToBackOnClick={true}
                    cards={journalImages.map((src, i) => (
                      <div key={i} className="w-full h-full relative group">
                        <img 
                          src={src} 
                          alt={`journal-${i}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                          <p className="text-white text-xs font-mono uppercase tracking-widest">Entry #{6-i}</p>
                        </div>
                      </div>
                    ))}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hotwheels Collection Shoutout (The Personality Section) */}
          <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white flex flex-col h-[500px] lg:h-full shadow-2xl relative overflow-hidden sticky top-8">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
             
             <div className="mb-auto">
               <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-70 mb-4 block">The Collector</span>
               <h2 className="text-4xl font-display font-black leading-none mb-6">HOTWHEELS<br/>COLLECTION</h2>
               <p className="text-sm opacity-80 leading-relaxed uppercase tracking-wider">
                 A pursuit of miniature perfection. Over 100+ die-cast legends that inspire my eye for detail and automotive-influenced design aesthetic.
               </p>
             </div>

             <div className="mt-12 flex items-center justify-between">
                <div className="flex -space-x-4">
                   {[...Array(3)].map((_, i) => (
                     <div key={i} className="w-12 h-12 rounded-full border-4 border-red-600 bg-white/20 backdrop-blur-md overflow-hidden">
                        <img 
                          src={`/assets/merch/${i+1}.png`} 
                          alt="Hotwheels" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=100&auto=format";
                          }}
                        />
                     </div>
                   ))}
                </div>
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 uppercase font-black tracking-widest text-xs">
                  View Vault
                </Button>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}
