import { motion } from "framer-motion";

const COLORS = [
  "hsl(340, 82%, 62%)",
  "hsl(45, 100%, 65%)",
  "hsl(190, 80%, 55%)",
  "hsl(270, 60%, 70%)",
  "hsl(10, 90%, 68%)",
  "hsl(160, 60%, 55%)",
];

const SHAPES = ["●", "■", "▲", "★", "♥"];

interface ConfettiProps {
  count?: number;
}

const Confetti = ({ count = 40 }: ConfettiProps) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.5;
        const duration = 1.5 + Math.random() * 2;
        const color = COLORS[i % COLORS.length];
        const shape = SHAPES[i % SHAPES.length];
        const size = 10 + Math.random() * 14;

        return (
          <motion.div
            key={i}
            className="absolute text-lg"
            style={{
              left: `${left}%`,
              top: -20,
              color,
              fontSize: size,
            }}
            initial={{ y: -20, rotate: 0, opacity: 1 }}
            animate={{
              y: window.innerHeight + 50,
              rotate: 360 + Math.random() * 360,
              x: (Math.random() - 0.5) * 200,
              opacity: [1, 1, 0],
            }}
            transition={{ delay, duration, ease: "easeOut" }}
          >
            {shape}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Confetti;
