import { motion } from "framer-motion";
import { useState } from "react";

interface JournalEntry {
  company: string;
  message: string;
  date: string;
}

const journalEntries: JournalEntry[] = [
  { company: "WorldTech", message: "Amazing experience learning about enterprise solutions!", date: "Day 1" },
  { company: "Rivan IT", message: "Great insights into modern development practices.", date: "Day 1" },
  { company: "CodeChum", message: "Inspiring to see how they make coding accessible.", date: "Day 2" },
  { company: "Mata Technologies", message: "Innovative approaches to problem solving.", date: "Day 2" },
  { company: "HCDC", message: "Wonderful campus and learning environment.", date: "Day 3" },
  { company: "Tagbilaran 911", message: "Important work in emergency services technology.", date: "Day 4" },
];

export function Journal() {
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);

  return (
    <section id="journal" className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-black gradient-text mb-4">
            Journal
          </h2>
          <p className="text-muted-foreground text-lg">
            Memories and reflections from the tour
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="aspect-square glass rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedEntry(index % journalEntries.length)}
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary/50">
                  {index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journal Entries */}
        <div className="space-y-6">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass rounded-xl p-6 transition-all ${
                selectedEntry === index ? "glow-subtle border-primary" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-bold">{entry.company}</h3>
                  <span className="pill-outline text-xs">{entry.date}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{entry.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
