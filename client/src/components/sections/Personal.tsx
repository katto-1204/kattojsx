import { motion } from "framer-motion";
import portrait from "@assets/generated_images/professional_portrait_of_a_creative_female_developer.png";
import { BentoGrid } from "@/components/sections/BentoGrid";

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

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] items-start">
        {/* Profile Image - Large Card */}
        <motion.div
          className="rounded-3xl overflow-hidden relative group h-full min-h-[260px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={portrait}
            alt="Catherine Arnado"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-bold">Catherine Arnado</h3>
            <p className="text-white/80">Creative Developer &amp; Designer</p>
          </div>
        </motion.div>

        {/* Bento Grid: Skillset, Tools, Languages */}
        <BentoGrid />
      </div>
    </section>
  );
}
