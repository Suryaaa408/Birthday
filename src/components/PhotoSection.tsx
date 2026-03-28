import { motion } from "framer-motion";
import petsBirthday from "@/assets/pets-birthday.png";

// ✅ Import your images
import photo1 from "@/assets/photo1.png";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";

const PhotoSection = () => {
  // ✅ Image array
  const images = [photo1, photo2, photo3];

  // ✅ Frames mapped with images
  const frames = [
    { rotate: -5, label: "Add your photo 💕" },
    { rotate: 3, label: "Precious moments 🌸" },
    { rotate: -2, label: "Memories 🐾" },
  ].map((frame, index) => ({
    ...frame,
    img: images[index],
  }));

  return (
    <section className="relative py-12 px-4">
      {/* ❤️ Floating hearts background */}
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
            ♥
          </motion.div>
        ))}
      </div>

      {/* 🔤 Title */}
      <motion.div
        className="text-center mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
          Paw-some Gallery 🐾
        </h2>
        <p className="font-body text-muted-foreground mt-2">
          A space for your cutest memories together
        </p>
      </motion.div>

      {/* 🐶 Pet illustration */}
      <motion.div
        className="flex justify-center mb-8 relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <img
          src={petsBirthday}
          alt="Cute birthday pets"
          className="w-48 md:w-64 drop-shadow-lg"
        />
      </motion.div>

      {/* 🖼️ Photo frames */}
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
              
              {/* ✅ Image */}
              <div className="aspect-square rounded-xl overflow-hidden border border-primary/30">
                <img
                  src={frame.img}
                  alt={frame.label}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 📝 Caption */}
              <p className="font-body text-muted-foreground text-sm text-center mt-2 px-2">
                {frame.label}
              </p>

              {/* 🎀 Decorative tape */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-secondary/80 rounded-sm rotate-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;