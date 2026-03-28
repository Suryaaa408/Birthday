import { motion } from "framer-motion";

interface FloatingEmojiProps {
  emoji: string;
  x: number;
  y: number;
  size?: number;
  delay?: number;
}

const FloatingEmoji = ({ emoji, x, y, size = 30, delay = 0 }: FloatingEmojiProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: `${x}%`, top: `${y}%`, fontSize: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0.8],
        scale: [0, 1.2, 1, 1],
        y: [0, -10, 0, -10],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
};

export default FloatingEmoji;
