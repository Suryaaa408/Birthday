import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicToggle = ({ isPlaying, onToggle }: MusicToggleProps) => {
  return (
    <motion.button
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-card border-2 border-primary cartoon-shadow flex items-center justify-center"
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", delay: 0.5 }}
      title={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1, repeat: Infinity }}>
          <Volume2 className="w-5 h-5 text-primary" />
        </motion.div>
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
      {isPlaying && (
        <>
          <motion.span
            className="absolute w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [0, 1, 0], y: [-5, -18], x: [3, 8] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
          />
          <motion.span
            className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
            animate={{ scale: [0, 1, 0], y: [-5, -20], x: [-3, -10] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
          />
        </>
      )}
    </motion.button>
  );
};

export default MusicToggle;
