import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const journalImages = [
  "/assets/journal/1.png",
  "/assets/journal/2worldtech.png",
  "/assets/journal/3codechum.png",
  "/assets/journal/4rivanit.png",
  "/assets/journal/5tarsier.png",
  "/assets/journal/6mata.png",
];

const journalEntries = [
  {
    company: "WORLDTECH INFORMATION SOLUTIONS",
    observation: "Despite the small office space, the learnings we got filled the whole room. The discussion was still informative and engaging, especially when it came to real-world experiences in the IT industry. However, we did wish that the facilitator focused more on concrete insights, practical tips, and guidance on what truly matters in the field, particularly regarding how to obtain and prepare for prestigious certifications. While her personal experiences were relevant and not an issue, we hoped for a deeper dive into actionable steps and career-oriented advice that we could directly apply as students.",
    learning: "Everything is vulnerable. Even the biggest, most advanced, and high-budget websites are at risk of cyberattacks. This includes institutions we often assume are secure, such as our own school. Security is never absolute, and continuous improvement, awareness, and vigilance are essential in the digital world.",
  },
  {
    company: "CODECHUM",
    observation: "We genuinely loved the experience at CIT-U, where CODECHUM is based. The environment itself was inspiring, and it was refreshing to see people who are truly passionate about what they do, especially considering how young and driven they are. They were very encouraging and open about the use of AI, emphasizing moderation and responsibility rather than outright restriction. They even shared practical tools that they personally use, which could also be helpful for us as students. Overall, the session felt motivating and relatable. Gwapo si Kuya Xavier.",
    learning: "There is no shame in using AI as long as it is used responsibly. When handled properly, AI can be a powerful tool that enhances productivity, learning, and creativity rather than replacing critical thinking.",
  },
  {
    company: "RIVAN IT CEBU",
    observation: "So far, this company provided one of the most educational experiences because of the hands-on activities. The practical approach made the concepts much easier to understand, especially for our networking subject. Instead of just listening, we were able to actively participate, which made the learning more meaningful and memorable.",
    learning: "We learned how to connect and configure two telephones so that they can communicate with each other by properly setting up their ports. This gave us a clearer understanding of how networking concepts are applied in real-life scenarios.",
  },
  {
    company: "MATA TECHNOLOGIES INC",
    observation: "Out of all the companies we visited, this one made me feel the most seen and appreciated. Everything they do aligns closely with the expertise I am currently building, which made the experience even more exciting. I love 3D, and seeing it applied professionally made me appreciate the field even more. I was also able to answer some of their questions confidently, which surprised me and boosted my confidence. They truly listened and engaged with us. They even mentioned the possibility of an internship, and although it might have been partly casual, Sir Owen did say that OJT could be done here and even fully remote.",
    learning: "VR is an incredibly powerful and exciting technology in this timeline, especially when used for simulations. It opens many possibilities for training, visualization, and immersive learning experiences across different industries.",
  },
  {
    company: "TAGBILARAN 911",
    observation: "Although we were not able to visit TARSIER 117, we did get the chance to visit TAGBILARAN 911. It was interesting to see how an emergency response system operates behind the scenes. The facilities were modern and well-maintained, and their technology is clearly up to date. One notable feature was their high-resolution security cameras, which allow for detailed zooming and better monitoring.",
    learning: "Investing in good technology can save lives in many ways. Efficient systems, reliable equipment, and modern infrastructure play a critical role in emergency response and public safety.",
  },
];

export function Journal() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentPage < journalImages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setCurrentPage((prev) => prev + 1);
      setTimeout(() => {
        setIsFlipping(false);
      }, 800);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setCurrentPage((prev) => prev - 1);
      setTimeout(() => {
        setIsFlipping(false);
      }, 800);
    }
  };

  return (
    <section id="journal" className="min-h-screen py-24 px-6 bg-background flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">
            Journal
          </h2>
          <p className="text-muted-foreground text-lg">
            Memories and reflections from the tour
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN: Flip Book */}
          <div className="relative w-full max-w-xl mx-auto lg:mx-0 order-1">
            {/* Navigation Buttons */}
            <div className="absolute left-0 sm:-left-8 top-1/2 -translate-y-1/2 z-20">
              <motion.button
                onClick={handlePrev}
                disabled={currentPage === 0 || isFlipping}
                className="p-3 sm:p-4 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>
            </div>
            <div className="absolute right-0 sm:-right-8 top-1/2 -translate-y-1/2 z-20">
              <motion.button
                onClick={handleNext}
                disabled={currentPage === journalImages.length - 1 || isFlipping}
                className="p-3 sm:p-4 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
            </div>

            <div className="flex items-center justify-center min-h-[500px] md:min-h-[600px]" ref={containerRef}>
              <div className="relative w-full" style={{ perspective: "1500px" }}>
                {/* Flip Book Pages */}
                <div className="relative w-full aspect-[3/4] max-w-md mx-auto" style={{ minHeight: "500px" }}>
                  <AnimatePresence mode="wait">
                    {journalImages.map((img, index) => {
                      if (index !== currentPage) return null;

                      return (
                        <motion.div
                          key={`page-${index}-${currentPage}`}
                          className="absolute inset-0"
                          initial={{ rotateY: 0, opacity: 0, scale: 0.95 }}
                          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                          exit={{ rotateY: -180, opacity: 0, scale: 0.9 }}
                          transition={{
                            duration: 0.8,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                            transformOrigin: "left center",
                          }}
                        >
                          {/* Front of page */}
                          <div
                            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl border border-border/20 bg-background"
                            style={{
                              transform: "rotateY(0deg)",
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                            }}
                          >
                            <img
                              src={img}
                              alt={`Journal page ${index + 1}`}
                              className="w-full h-full object-cover"
                              loading="eager"
                            />
                          </div>
                          {/* Back of page - shows next page */}
                          <div
                            className="absolute inset-0 w-full h-full rounded-xl overflow-hidden shadow-2xl border border-border/20 bg-background"
                            style={{
                              transform: "rotateY(180deg)",
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                            }}
                          >
                            {index < journalImages.length - 1 ? (
                              <img
                                src={journalImages[index + 1]}
                                alt={`Journal page ${index + 2}`}
                                className="w-full h-full object-cover"
                                loading="eager"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                                <span className="text-muted-foreground text-2xl font-display">
                                  The End
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Page Indicator */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {journalImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isFlipping) {
                          setIsFlipping(true);
                          setCurrentPage(index);
                          setTimeout(() => {
                            setIsFlipping(false);
                          }, 800);
                        }
                      }}
                      className={`h-2 rounded-full transition-all ${index === currentPage
                          ? "bg-primary w-8"
                          : "bg-border hover:bg-primary/50 w-2"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Content */}
          <div className="order-2 w-full">
            <AnimatePresence mode="wait">
              {currentPage > 0 && journalEntries[currentPage - 1] ? (
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="glass-strong rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden group" // Premium card look
                >
                  {/* Decorative faint background blobs */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="flex flex-col gap-8">
                    <div>
                      <span className="text-xs font-mono text-primary tracking-widest uppercase mb-2 block opacity-70">Company Visit</span>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black leading-tight gradient-text">
                        {journalEntries[currentPage - 1].company}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-primary/30">
                        <h4 className="text-sm font-bold mb-2 text-primary uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          Observation
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {journalEntries[currentPage - 1].observation}
                        </p>
                      </div>

                      <div className="relative pl-6 border-l-2 border-orange-400/30">
                        <h4 className="text-sm font-bold mb-2 text-orange-400 uppercase tracking-wider flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                          Key Learnings
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-lg italic">
                          "{journalEntries[currentPage - 1].learning}"
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Empty state or Welcome state for Cover Page (Page 0)
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col justify-center h-full min-h-[300px] text-center lg:text-left"
                >
                  <h3 className="text-3xl font-bold text-muted-foreground/30 mb-4">Select a page to view details</h3>
                  <p className="text-muted-foreground/50">Navigate through the journal to see our journey.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
