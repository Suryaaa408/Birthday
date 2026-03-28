import { motion } from "framer-motion";

const BirthdayCake = () => {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
    >
      <motion.div
        className="text-7xl md:text-8xl select-none"
        animate={{ rotate: [0, -3, 3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        🎂
      </motion.div>
      {/* Candle glow */}
      <motion.div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
        style={{ background: "radial-gradient(circle, hsla(45, 100%, 65%, 0.6), transparent)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default BirthdayCake;
