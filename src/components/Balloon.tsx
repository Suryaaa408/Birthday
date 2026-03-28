import { motion } from "framer-motion";
import { useState } from "react";

interface BalloonProps {
  color: string;
  x: number;
  delay: number;
  size?: number;
  onPop?: () => void;
}

const Balloon = ({ color, x, delay, size = 60, onPop }: BalloonProps) => {
  const [popped, setPopped] = useState(false);

  const handlePop = () => {
    setPopped(true);
    onPop?.();
  };

  if (popped) {
    return (
      <motion.div
        className="absolute cursor-pointer"
        style={{ left: `${x}%`, bottom: "10%" }}
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-4xl">💥</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute cursor-pointer select-none"
      style={{ left: `${x}%`, bottom: "5%" }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: [0, -15, 0], opacity: 1 }}
      transition={{
        delay,
        y: { duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
        opacity: { delay, duration: 0.5 },
      }}
      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.9 }}
      onClick={handlePop}
    >
      <svg width={size} height={size * 1.4} viewBox="0 0 60 84" fill="none">
        <ellipse cx="30" cy="30" rx="28" ry="30" fill={color} />
        <ellipse cx="30" cy="30" rx="28" ry="30" fill="white" fillOpacity="0.15" />
        <ellipse cx="20" cy="18" rx="8" ry="5" fill="white" fillOpacity="0.3" transform="rotate(-20 20 18)" />
        <polygon points="30,58 27,65 33,65" fill={color} />
        <line x1="30" y1="65" x2="30" y2="84" stroke={color} strokeWidth="1.5" opacity="0.6" />
      </svg>
    </motion.div>
  );
};

export default Balloon;
