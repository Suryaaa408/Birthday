import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Gift } from "lucide-react";

interface GiftBoxProps {
  message: string;
  emoji: string;
  color: string;
  delay?: number;
}

const GiftBox = ({ message, emoji, color, delay = 0 }: GiftBoxProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      className="relative"
    >
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.button
            key="closed"
            onClick={() => setOpened(true)}
            className="w-full rounded-2xl p-6 cursor-pointer cartoon-shadow transition-all"
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            whileTap={{ scale: 0.95 }}
            exit={{ scale: 0, rotate: 20 }}
          >
            <Gift className="w-10 h-10 mx-auto mb-2 text-primary-foreground" />
            <p className="font-display text-primary-foreground font-bold text-sm">Tap to open!</p>
          </motion.button>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="w-full rounded-2xl p-6 bg-card cartoon-shadow-lg border-2"
            style={{ borderColor: color }}
          >
            <motion.span
              className="text-4xl block mb-3"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {emoji}
            </motion.span>
            <p className="font-body text-foreground font-medium text-sm leading-relaxed">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GiftBox;
