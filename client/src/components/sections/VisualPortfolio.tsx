import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Variant = "square" | "landscape" | "portrait";

const PUBMAT_IMAGES: string[] = [
  "/assets/pubmats/_nipah virus_k.santos p dvm 5b.png",
  "/assets/pubmats/cbj.png",
  "/assets/pubmats/cetso birthday pubmat.png",
  "/assets/pubmats/cetso media team.png",
  "/assets/pubmats/dp blast.png",
  "/assets/pubmats/equine rotaviral diarrhea_k.santos.png",
  "/assets/pubmats/FINAL PROJECT PITCHING CET.png",
  "/assets/pubmats/front.png",
  "/assets/pubmats/gee pub.png",
  "/assets/pubmats/gigi 23rd.png",
  "/assets/pubmats/hello world.png",
  "/assets/pubmats/image.png",
  "/assets/pubmats/ITS TEACHERS DAY.png",
  "/assets/pubmats/its.head.png",
  "/assets/pubmats/its.pub.png",
  "/assets/pubmats/katgi anniv.png",
  "/assets/pubmats/mathsci.png",
  "/assets/pubmats/mlvn.b.png",
  "/assets/pubmats/mlvn.w.png",
  "/assets/pubmats/p.bsit orientation.png",
  "/assets/pubmats/p.call.png",
  "/assets/pubmats/p.d-day.png",
  "/assets/pubmats/p.jingle.png",
  "/assets/pubmats/p.pres.png",
  "/assets/pubmats/p.presnew.png",
  "/assets/pubmats/p.rank.png",
  "/assets/pubmats/p.reward.png",
  "/assets/pubmats/p.shirtdes.png",
  "/assets/pubmats/p.techtalk.png",
  "/assets/pubmats/project pitch.png",
];

const LOGO_IMAGES: string[] = [
  "/assets/logos/image copy 2.png",
  "/assets/logos/image copy.png",
  "/assets/logos/image.png",
  "/assets/logos/logo1.png",
  "/assets/logos/logo2.png",
  "/assets/logos/logo3.png",
  "/assets/logos/logo4.png",
];

const BACK_ANIM_IMAGES: string[] = [
  "/assets/backanim/backanim1.mp4",
  "/assets/backanim/backanim2.mp4",
  "/assets/backanim/backanim3.gif",
  "/assets/backanim/BSIT ORIENTATION.gif",
];

const MERCH_IMAGES: string[] = [
  "/assets/merch/CIPHERS.png",
  "/assets/merch/entry 5 (red).png",
  "/assets/merch/entry 6 (black).png",
  "/assets/merch/entry 7 (black center).png",
  "/assets/merch/image copy 2.png",
  "/assets/merch/image copy 3.png",
  "/assets/merch/image copy 4.png",
  "/assets/merch/image copy 5.png",
  "/assets/merch/image copy 6.png",
  "/assets/merch/image copy 7.png",
  "/assets/merch/image copy 8.png",
  "/assets/merch/image copy 9.png",
  "/assets/merch/image copy 10.png",
  "/assets/merch/image copy 11.png",
  "/assets/merch/image copy 12.png",
  "/assets/merch/image copy.png",
  "/assets/merch/image.png",
  "/assets/merch/merch1.png",
  "/assets/merch/merch2.png",
  "/assets/merch/merch3.png",
  "/assets/merch/merch4.png",
  "/assets/merch/merch5.png",
  "/assets/merch/merch7.png",
  "/assets/merch/merch8.png",
  "/assets/merch/merch9.png",
  "/assets/merch/merch10.png",
  "/assets/merch/merch12.png",
  "/assets/merch/merch13.png",
  "/assets/merch/merch14.png",
];

const TEAM_ROSTER_IMAGES: string[] = [
  "/assets/teamrosters/ban1.png",
  "/assets/teamrosters/ban2.png",
  "/assets/teamrosters/ban3.png",
  "/assets/teamrosters/ban4.png",
  "/assets/teamrosters/ban5.png",
  "/assets/teamrosters/redzone (anothr banner).png",
  "/assets/teamrosters/redzone (banner).png",
  "/assets/teamrosters/ros1.png",
  "/assets/teamrosters/ros2.png",
  "/assets/teamrosters/ros3.png",
];

const categories: {
  title: string;
  desc: string;
  images: string[];
  variant: Variant;
}[] = [
  {
    title: "PUBMATS",
    desc: "Digital marketing, event promotions, and digital campaigns",
    images: PUBMAT_IMAGES,
    variant: "portrait",
  },
  {
    title: "SHIRT DESIGNS/MERCH",
    desc: "Apparel graphics and merchandise branding",
    images: MERCH_IMAGES,
    variant: "landscape",
  },
  {
    title: "LOGOFOLIO",
    desc: "Brand identity marks and logotypes",
    images: LOGO_IMAGES,
    variant: "square",
  },
  {
    title: "TEAM ROSTERS/BANNERS",
    desc: "Esports layouts and social headers",
    images: TEAM_ROSTER_IMAGES,
    variant: "landscape",
  },
  {
    title: "BACKGROUND ANIMATION",
    desc: "Motion graphics and loops",
    images: BACK_ANIM_IMAGES,
    variant: "landscape",
  },
];

const MarqueeRow = ({
  images,
  direction = "left",
  speed = 30,
  variant,
  onSelect,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
  variant: Variant;
  onSelect: (src: string) => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const effectiveSpeed = hoveredIndex !== null ? speed * 1.8 : speed;

  return (
    <div className="flex overflow-hidden py-4 px-4 md:px-8">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: effectiveSpeed, ease: "linear" }}
      >
        {[...images, ...images].map((img, i) => {
          const logicalIndex = i % images.length;
          const isActive = hoveredIndex === logicalIndex;
          const isDimmed = hoveredIndex !== null && !isActive;

          return (
            <VisualCard
              key={i}
              image={img}
              index={logicalIndex}
              variant={variant}
              onSelect={onSelect}
              isDimmed={isDimmed}
              onHover={() => setHoveredIndex(logicalIndex)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

const VisualCard = ({
  image,
  index,
  variant,
  onSelect,
  isDimmed = false,
  onHover,
  onHoverEnd,
}: {
  image: string;
  index: number;
  variant: Variant;
  onSelect: (src: string) => void;
  isDimmed?: boolean;
  onHover?: () => void;
  onHoverEnd?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseClasses =
    variant === "square"
      ? "w-[220px] h-[220px] md:w-[260px] md:h-[260px]"
      : variant === "portrait"
      ? "w-[200px] h-[280px] md:w-[230px] md:h-[320px]"
      : "w-[280px] h-[180px] md:w-[340px] md:h-[220px]";

  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden shrink-0 cursor-pointer transition-all duration-300 ${baseClasses}`}
      style={{
        zIndex: isHovered ? 50 : 1,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{
        scale: 1.08,
        rotate: -4,
        boxShadow: "0 24px 45px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverEnd?.();
      }}
      onClick={() => onSelect(image)}
    >
      {image.endsWith(".mp4") ? (
        <video
          src={image}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={image}
          className="w-full h-full object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            filter: isDimmed ? "blur(3px) brightness(0.6)" : "none",
          }}
        />
      )}
      
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
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

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

                {/* Fade Edges - softer, more natural blend on left and right */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none backdrop-blur-xl" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black/80 via-black/40 to-transparent z-10 pointer-events-none backdrop-blur-xl" />

                {/* Marquees - 5 on top, 5 on bottom */}
                {/* Top: natural order (1 → N) */}
                <MarqueeRow
                  images={cat.images}
                  direction="left"
                  speed={30 + i * 2}
                  variant={cat.variant}
                  onSelect={setLightboxSrc}
                />
                <div className="mt-4">
                    {/* Bottom: reversed order (N → 1) */}
                    <MarqueeRow
                      images={[...cat.images].reverse()}
                      direction="right"
                      speed={35 + i * 2}
                      variant={cat.variant}
                      onSelect={setLightboxSrc}
                    />
                </div>
            </div>
        ))}
      </div>

      {/* Lightbox viewer */}
      <AnimatePresence>
        {lightboxSrc && !lightboxSrc.endsWith(".mp4") && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxSrc(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm uppercase tracking-[0.2em]"
              >
                Close
              </button>
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img
                  src={lightboxSrc}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
