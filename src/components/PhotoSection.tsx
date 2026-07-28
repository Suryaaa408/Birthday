import { motion } from "framer-motion";
import foodBirthday from "@/assets/food-birthday.png";

import photo1Asset from "@/assets/photo1.jpg.asset.json";
import photo2Asset from "@/assets/photo2.jpg.asset.json";
import photo3Asset from "@/assets/photo3.jpg.asset.json";

const photo1 = photo1Asset.url;
const photo2 = photo2Asset.url;
const photo3 = photo3Asset.url;

const PhotoSection = () => {
  const images = [photo1, photo2, photo3];

  const frames = [
    { rotate: -5, label: "Biryani = life 🍛" },
    { rotate: 3, label: "Sweet tooth alert 🍬" },
    { rotate: -2, label: "Wanderlust vibes ✈️" },
  ].map((frame, index) => ({
    ...frame,
    img: images[index],
  }));

  return (
    <section className="relative py-12 px-4">
      {/* Floating food emojis background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: 20 + Math.random() * 40,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🍛
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Foodie & Wanderer Gallery 🍛✈️
        </h2>
        <p className="font-body text-muted-foreground mt-2">
          The three loves of your life (besides me, obviously)
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center mb-8 relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <img
          src={foodBirthday}
          alt="Birthday biryani illustration"
          className="w-48 md:w-64 drop-shadow-lg"
          loading="lazy"
          width={1024}
          height={1024}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto relative z-10">
        {frames.map((frame, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ scale: 0, rotate: frame.rotate * 2 }}
            whileInView={{ scale: 1, rotate: frame.rotate }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
          >
            <div className="bg-card rounded-2xl p-3 cartoon-shadow-lg border-2 border-border">
              <div className="aspect-square rounded-xl overflow-hidden border border-primary/30">
                <img
                  src={frame.img}
                  alt={frame.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>

              <p className="font-body text-muted-foreground text-sm text-center mt-2 px-2">
                {frame.label}
              </p>

              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-secondary/80 rounded-sm rotate-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;
