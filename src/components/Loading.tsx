import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingProps {
  name: string;
  onComplete: () => void;
}

const Loading = ({  onComplete }: LoadingProps) => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const greeting = `Welcome,`;

  useEffect(() => {
    const typingSpeed = 80;

    const timer = setTimeout(() => {
      if (charIndex < greeting.length) {
        setDisplayText(greeting.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setIsComplete(true);
          setIsFading(true);
          setTimeout(() => {
            onComplete();
          }, 1500);
        }, 1200);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, greeting, onComplete]);

  // Gradient animation
  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, delay: 1.2 },
    },
  };

  // Glow effect
  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(145, 94, 255, 0.3)",
        "0 0 40px rgba(145, 94, 255, 0.6)",
        "0 0 20px rgba(145, 94, 255, 0.3)",
      ],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  // Floating particles
  const particleVariants = (delay: number) => ({
    animate: {
      y: [0, -20, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        delay,
        repeat: Infinity,
      },
    },
  });

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-50 flex items-center justify-center overflow-hidden"
      animate={{
        opacity: isFading ? 0 : 1,
      }}
      transition={{ duration: 5, delay: 1.2 }}
      style={{
        pointerEvents: isComplete ? "none" : "auto",
      }}
    >
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, #915EFF 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#915EFF] rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: "50%",
          }}
          variants={particleVariants(i * 0.2)}
          animate="animate"
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10"
        animate={{
          opacity: isFading ? 0 : 1,
        }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        {/* Glow Background Circle */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(145, 94, 255, 0.2) 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
          variants={glowVariants}
          animate="animate"
        />

        {/* Text Container */}
        <motion.div
          className="text-center"
          animate={{
            textShadow: isComplete
              ? "0 0 0px rgba(145, 94, 255, 0)"
              : "0 0 30px rgba(145, 94, 255, 0.8)",
          }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-white font-mono tracking-wider">
            <motion.span
              animate={{
                color: charIndex === greeting.length ? "#915EFF" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              {displayText}
            </motion.span>
            <motion.span
              animate={{
                opacity: charIndex === greeting.length ? 0 : [1, 0],
                color: "#915EFF",
              }}
              transition={{
                opacity: { duration: 0.7, repeat: Infinity },
              }}
              className="font-bold text-[#915EFF]"
            >
              |
            </motion.span>
          </h1>

          {/* Progress Indicator */}
          <motion.div
            className="mt-8 flex gap-2 justify-center"
            animate={{
              opacity: isComplete ? 0 : 1,
            }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-[#915EFF]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>

          {/* Loading Text */}
          <motion.p
            className="text-sm md:text-lg text-gray-400 mt-6 font-mono"
            animate={{
              opacity: isComplete ? 0 : [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Initializing...
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Corner Accent Lines */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[#915EFF]"
        animate={{
          opacity: isComplete ? 0 : [0.3, 1, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[#915EFF]"
        animate={{
          opacity: isComplete ? 0 : [0.3, 1, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default Loading;