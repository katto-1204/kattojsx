import { useState } from "react";
import { motion } from "framer-motion";
import pubmat from "@assets/generated_images/pubmat_poster_design_event_promotion.png";
import merch from "@assets/generated_images/t-shirt_merchandise_design_mockup.png";
import logo from "@assets/generated_images/modern_minimalist_logo_design_folio.png";
import roster from "@assets/generated_images/esports_team_roster_banner_design.png";
import bgAnim from "@assets/generated_images/abstract_background_animation_frame.png";

type Variant = "square" | "landscape";

const categories: {
  title: string;
  desc: string;
  images: string[];
  variant: Variant;
}[] = [
  {
    title: "PUBMATS",
    desc: "Digital marketing, event promotions, and digital campaigns",
    images: Array(10).fill(pubmat),
    variant: "square",
  },
  {
    title: "SHIRT DESIGNS/MERCH",
    desc: "Apparel graphics and merchandise branding",
    images: Array(10).fill(merch),
    variant: "square",
  },
  {
    title: "LOGOFOLIO",
    desc: "Brand identity marks and logotypes",
    images: Array(10).fill(logo),
    variant: "square",
  },
  {
    title: "TEAM ROSTERS/BANNERS",
    desc: "Esports layouts and social headers",
    images: Array(10).fill(roster),
    variant: "landscape",
  },
  {
    title: "BACKGROUND ANIMATION",
    desc: "Motion graphics and loops",
    images: Array(10).fill(bgAnim),
    variant: "landscape",
  },
];

const MarqueeRow = ({
  images,
  direction = "left",
  speed = 30,
  variant,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
  variant: Variant;
}) => {
  return (
    <div className="flex overflow-hidden py-4 px-4 md:px-8">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...images.slice(0, 5), ...images.slice(0, 5)].map((img, i) => (
          <VisualCard key={i} image={img} index={i} variant={variant} />
        ))}
      </motion.div>
    </div>
  );
};

const VisualCard = ({
  image,
  index,
  variant,
}: {
  image: string;
  index: number;
  variant: Variant;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses =
    variant === "square"
      ? "w-[220px] h-[220px] md:w-[260px] md:h-[260px]"
      : "w-[280px] h-[180px] md:w-[340px] md:h-[220px]";

  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden shrink-0 cursor-pointer transition-all duration-300 ${baseClasses}`}
      style={{
        zIndex: isHovered ? 50 : 1,
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: Math.random() * 4 - 2,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        className="w-full h-full object-cover transition-all duration-300"
        style={{ filter: isHovered ? "grayscale(0%)" : "grayscale(0%)" }}
      />
      
      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      >
        <div className="absolute bottom-4 left-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">ARTWORK</span>
            <h4 className="text-white font-bold text-lg">NO. {index + 1}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export function VisualPortfolio() {
  return (
    <section id="visual" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 mb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">VISUAL PORTFOLIO</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my graphic design works, ranging from digital marketing materials to brand identities.
        </p>
      </div>

      <div className="space-y-24">
        {categories.map((cat, i) => (
            <div key={i} className="relative">
                <div className="container mx-auto px-6 md:px-12 mb-8 flex items-end justify-between">
                    <div>
                        <h3 className="text-2xl font-bold font-display uppercase tracking-tight">{cat.title}</h3>
                        <p className="text-sm text-muted-foreground">{cat.desc}</p>
                    </div>
                    <span className="text-xs font-mono border border-border px-2 py-1 rounded hidden md:block">5 ITEMS</span>
                </div>

                {/* Fade Edges - pulled in slightly so cards aren't at the extreme edges */}
                <div className="absolute left-4 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-4 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Marquees - 5 on top, 5 on bottom */}
                <MarqueeRow images={cat.images} direction="left" speed={40 + i * 2} variant={cat.variant} />
                <div className="mt-4">
                    <MarqueeRow images={cat.images} direction="right" speed={45 + i * 2} variant={cat.variant} />
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}
