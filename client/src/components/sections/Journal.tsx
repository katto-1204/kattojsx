import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useMemo } from "react";
import Stack from "@/components/ui/Stack";
import { BookOpen, X, MapPin, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const journalEntries = [
  {
    id: 1,
    image: "/assets/journal/1.png",
    company: "WORLDTECH INFORMATION SOLUTIONS",
    observation: "Despite the small office space, the learnings we got filled the whole room. The discussion was still informative and engaging, especially when it came to real-world experiences in the IT industry. However, we did wish that the facilitator focused more on concrete insights, practical tips, and guidance on what truly matters in the field, particularly regarding how to obtain and prepare for prestigious certifications. While her personal experiences were relevant and not an issue, we hoped for a deeper dive into actionable steps and career-oriented advice that we could directly apply as students.",
    learning: "Everything is vulnerable. Even the biggest, most advanced, and high-budget websites are at risk of cyberattacks. This includes institutions we often assume are secure, such as our own school. Security is never absolute, and continuous improvement, awareness, and vigilance are essential in the digital world.",
    date: "Day 1 - Cebu City"
  },
  {
    id: 2,
    image: "/assets/journal/2worldtech.png",
    company: "CODECHUM",
    observation: "We genuinely loved the experience at CIT-U, where CODECHUM is based. The environment itself was inspiring, and it was refreshing to see people who are truly passionate about what they do, especially considering how young and driven they are. They were very encouraging and open about the use of AI, emphasizing moderation and responsibility rather than outright restriction. They even shared practical tools that they personally use, which could also be helpful for us as students. Overall, the session felt motivating and relatable. Gwapo si Kuya Xavier.",
    learning: "There is no shame in using AI as long as it is used responsibly. When handled properly, AI can be a powerful tool that enhances productivity, learning, and creativity rather than replacing critical thinking.",
    date: "Day 2 - Cebu IT Park"
  },
  {
    id: 3,
    image: "/assets/journal/3codechum.png",
    company: "RIVAN IT CEBU",
    observation: "So far, this company provided one of the most educational experiences because of the hands-on activities. The practical approach made the concepts much easier to understand, especially for our networking subject. Instead of just listening, we were able to actively participate, which made the learning more meaningful and memorable.",
    learning: "We learned how to connect and configure two telephones so that they can communicate with each other by properly setting up their ports. This gave us a clearer understanding of how networking concepts are applied in real-life scenarios.",
    date: "Day 3 - Hands-on Session"
  },
  {
    id: 4,
    image: "/assets/journal/4rivanit.png",
    company: "MATA TECHNOLOGIES INC",
    observation: "Out of all the companies we visited, this one made me feel the most seen and appreciated. Everything they do aligns closely with the expertise I am currently building, which made the experience even more exciting. I love 3D, and seeing it applied professionally made me appreciate the field even more. I was also able to answer some of their questions confidently, which surprised me and boosted my confidence. They truly listened and engaged with us. They even mentioned the possibility of an internship, and although it might have been partly casual, Sir Owen did say that OJT could be done here and even fully remote.",
    learning: "VR is an incredibly powerful and exciting technology in this timeline, especially when used for simulations. It opens many possibilities for training, visualization, and immersive learning experiences across different industries.",
    date: "Day 4 - Innovation Hub"
  },
  {
    id: 5,
    image: "/assets/journal/5tarsier.png",
    company: "TAGBILARAN 911",
    observation: "Although we were not able to visit TARSIER 117, we did get the chance to visit TAGBILARAN 911. It was interesting to see how an emergency response system operates behind the scenes. The facilities were modern and well-maintained, and their technology is clearly up to date. One notable feature was their high-resolution security cameras, which allow for detailed zooming and better monitoring.",
    learning: "Investing in good technology can save lives in many ways. Efficient systems, reliable equipment, and modern infrastructure play a critical role in emergency response and public safety.",
    date: "Day 5 - Public Safety"
  },
  {
    id: 6,
    image: "/assets/journal/6mata.png",
    company: "MATA (Extended Visit)",
    observation: "Sir Owen's talk was inspiring. He mentioned that OJT could be done here and even fully remote. This opens up so many possibilities for students who are passionate about 3D and VR but might have logistical constraints.",
    learning: "The future of work is hybrid and immersive. Building a portfolio in 3D/VR is a strategic move for the coming years.",
    date: "Day 6 - Final Reflections"
  }
];

export function Journal() {
  const [topIndex, setTopIndex] = useState(journalEntries.length - 1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShuffle = useCallback(() => {
    setTopIndex((prev) => (prev === 0 ? journalEntries.length - 1 : prev - 1));
  }, []);

  const currentEntry = journalEntries[topIndex];

  return (
    <section id="journal" className="min-h-screen py-24 px-6 bg-background flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black text-primary-gradient mb-4">
            Journal
          </h2>
          <p className="text-muted-foreground text-lg">
            Memories and reflections from the tour — Drag to shuffle, click to read
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN: Stacked Cards */}
          <div className="flex items-center justify-center min-h-[400px] md:min-h-[500px]">
            <div style={{ width: 350, height: 450, maxWidth: '90vw' }}>
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={journalEntries.map((entry, i) => (
                  <div 
                    key={entry.id} 
                    className="card shadow-2xl border border-white/10 group/card relative overflow-hidden cursor-pointer bg-zinc-900" 
                    onClick={() => {
                      if (i === journalEntries.length - 1) { // Only the top visual card should trigger modal
                        setIsModalOpen(true);
                      }
                    }}
                  >
                    <img 
                      src={entry.image} 
                      alt={`journal-${i}`} 
                      className="card-image group-hover/card:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                       <span className="text-[10px] font-black tracking-[0.3em] text-orange-500 mb-2 uppercase">{entry.date}</span>
                       <h4 className="text-white font-black text-xl mb-4 leading-tight uppercase">{entry.company}</h4>
                       <Button 
                        variant="secondary" 
                        size="sm" 
                        className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold hover:bg-white/30"
                       >
                         <BookOpen className="mr-2 w-4 h-4" /> READ ENTRY
                       </Button>
                    </div>
                  </div>
                ))}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="w-full">
             <div className="glass-strong rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden group min-h-[450px] flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentEntry.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={14} className="text-primary" />
                        <span className="text-xs font-mono text-primary tracking-widest uppercase opacity-70">
                          {currentEntry.date}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-display font-black leading-tight text-primary-gradient">
                        {currentEntry.company}
                      </h3>
                    </div>

                    <div className="space-y-6">
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/10 -z-10" />
                          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                             Observation & Insights
                          </h4>
                          <p className="text-sm text-zinc-400 line-clamp-4 leading-relaxed">
                            {currentEntry.observation}
                          </p>
                        </div>
                        
                        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                          <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                             Key Learning
                          </h4>
                          <p className="text-sm text-zinc-400 leading-relaxed italic">
                            "{currentEntry.learning}"
                          </p>
                        </div>
                    </div>

                    <Button 
                      variant="link" 
                      className="p-0 text-primary hover:text-orange-400 font-bold flex items-center gap-2 mt-4"
                      onClick={() => setIsModalOpen(true)}
                    >
                      READ FULL ENTRY <BookOpen size={16} />
                    </Button>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>
        </div>
      </div>

      {/* FULL ENTRY MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsModalOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={currentEntry.image} 
                  alt={currentEntry.company} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950" />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto no-scrollbar">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm font-mono text-primary tracking-widest uppercase">
                    {currentEntry.date}
                  </span>
                </div>
                
                <h3 className="text-4xl font-display font-black text-primary-gradient mb-8 leading-tight">
                  {currentEntry.company}
                </h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-black tracking-widest text-zinc-500 uppercase mb-3">Observations</h4>
                    <p className="text-zinc-300 leading-relaxed text-lg">
                      {currentEntry.observation}
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                    <h4 className="text-xs font-black tracking-widest text-primary uppercase mb-3">Core Learning</h4>
                    <p className="text-white text-xl font-medium leading-relaxed italic">
                      "{currentEntry.learning}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
