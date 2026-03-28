import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles, PartyPopper, Stars } from "lucide-react";
import Balloon from "@/components/Balloon";
import Confetti from "@/components/Confetti";
import GiftBox from "@/components/GiftBox";
import FloatingEmoji from "@/components/FloatingEmoji";
import BirthdayCake from "@/components/BirthdayCake";

const BALLOON_COLORS = [
  "hsl(340, 82%, 62%)",
  "hsl(45, 100%, 65%)",
  "hsl(190, 80%, 55%)",
  "hsl(270, 60%, 70%)",
  "hsl(10, 90%, 68%)",
  "hsl(160, 60%, 55%)",
];

const GIFTS = [
  { message: "You light up every room you walk into. Never stop being you! ✨", emoji: "🌟", color: "hsl(340, 82%, 62%)" },
  { message: "Your smile is the most beautiful thing in this whole world 💫", emoji: "😊", color: "hsl(45, 100%, 65%)" },
  { message: "Someone thinks you're absolutely amazing... guess who? 🙈", emoji: "💝", color: "hsl(270, 60%, 70%)" },
  { message: "May all your dreams come true this year and always! 🌈", emoji: "🦋", color: "hsl(190, 80%, 55%)" },
];

const FLOATING_EMOJIS = [
  { emoji: "⭐", x: 5, y: 15, delay: 0 },
  { emoji: "🌸", x: 88, y: 10, delay: 0.5 },
  { emoji: "💖", x: 92, y: 40, delay: 1 },
  { emoji: "🎀", x: 3, y: 55, delay: 1.5 },
  { emoji: "✨", x: 85, y: 70, delay: 2 },
  { emoji: "🌙", x: 8, y: 80, delay: 2.5 },
];

const Index = () => {
  const [stage, setStage] = useState<"intro" | "party">("intro");
  const [poppedCount, setPoppedCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  const handleStart = () => {
    setStage("party");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500);
  };

  const handleBalloonPop = () => {
    const next = poppedCount + 1;
    setPoppedCount(next);
    if (next >= 4) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3500);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {showConfetti && <Confetti />}

      {/* Background decorations */}
      {FLOATING_EMOJIS.map((e, i) => (
        <FloatingEmoji key={i} {...e} />
      ))}

      {/* Dotted background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <AnimatePresence mode="wait">
        {stage === "intro" ? (
          <motion.div
            key="intro"
            className="min-h-screen flex flex-col items-center justify-center px-4"
            exit={{ opacity: 0, scale: 0.9, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-6xl md:text-8xl mb-6"
            >
              🎁
            </motion.div>

            <motion.h1
              className="font-display text-4xl md:text-6xl font-extrabold text-foreground text-center leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Someone Special
              <br />
              <span className="text-primary">Has a Birthday!</span>
            </motion.h1>

            <motion.p
              className="font-body text-muted-foreground text-lg md:text-xl mt-4 text-center max-w-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              A little surprise is waiting for you... 🎀
            </motion.p>

            <motion.button
              className="mt-8 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-xl cartoon-shadow-lg hover:scale-105 active:scale-95 transition-transform"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ rotate: [0, -2, 2, 0] }}
              onClick={handleStart}
            >
              <span className="flex items-center gap-2">
                <PartyPopper className="w-6 h-6" />
                Open Your Surprise!
                <Sparkles className="w-6 h-6" />
              </span>
            </motion.button>

            <motion.div
              className="mt-6 flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {["🎈", "🎂", "🎉", "💝", "🎈"].map((e, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ delay: i * 0.15, duration: 1.5, repeat: Infinity }}
                >
                  {e}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="party"
            className="min-h-screen pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <motion.div
              className="text-center pt-8 md:pt-12 px-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <BirthdayCake />

              <motion.h1
                className="font-display text-4xl md:text-7xl font-extrabold text-foreground mt-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                Happy Birthday! 🎉
              </motion.h1>

              <motion.p
                className="font-body text-muted-foreground text-lg md:text-xl mt-3 max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Pop the balloons & open the gifts! 🎈
              </motion.p>
            </motion.div>

            {/* Balloon section */}
            <motion.div
              className="relative h-48 md:h-64 mt-8 mx-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {BALLOON_COLORS.map((color, i) => (
                <Balloon
                  key={i}
                  color={color}
                  x={8 + i * 16}
                  delay={1 + i * 0.15}
                  size={45 + Math.random() * 15}
                  onPop={handleBalloonPop}
                />
              ))}
            </motion.div>

            {/* Score */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full cartoon-shadow font-display text-sm text-foreground border border-border">
                <Stars className="w-4 h-4 text-secondary" />
                Balloons popped: {poppedCount} / 6
              </span>
            </motion.div>

            {/* Gift boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-8 max-w-4xl mx-auto">
              {GIFTS.map((gift, i) => (
                <GiftBox key={i} {...gift} delay={1.5 + i * 0.2} />
              ))}
            </div>

            {/* Secret message section */}
            <motion.div
              className="mt-12 px-4 max-w-lg mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
            >
              <motion.button
                className="px-6 py-3 rounded-full font-display font-bold text-lg cartoon-shadow-lg transition-transform"
                style={{ background: "linear-gradient(135deg, hsl(340, 82%, 62%), hsl(270, 60%, 70%))" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowSecret(true);
                  setShowConfetti(true);
                  setTimeout(() => setShowConfetti(false), 3500);
                }}
              >
                <span className="flex items-center gap-2 text-primary-foreground">
                  <Heart className="w-5 h-5" />
                  A Secret Message For You
                  <Heart className="w-5 h-5" />
                </span>
              </motion.button>

              <AnimatePresence>
                {showSecret && (
                  <motion.div
                    className="mt-6 p-6 md:p-8 rounded-3xl bg-card cartoon-shadow-lg border-2 border-primary"
                    initial={{ scale: 0, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <motion.div
                      className="text-5xl mb-4"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      💌
                    </motion.div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                      From Your Secret Admirer 🙈
                    </h2>
                    <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                      There's someone who thinks you're the most incredible person in the world.
                      Someone who smiles every time they see you, whose day gets brighter just
                      because you exist. You may not know who... but just know that you are
                      deeply, quietly, <span className="text-primary font-semibold">secretly adored</span>. 💕
                    </p>
                    <motion.p
                      className="mt-4 font-display text-primary font-bold text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Happy Birthday, beautiful soul! 🎂✨
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="mt-12 text-center pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <p className="font-body text-muted-foreground text-sm">
                Made with 💖 by someone who cares
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
