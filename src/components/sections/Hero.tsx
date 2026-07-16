import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { myimage, redlogso } from "../../assets";

const Hero = () => {
  const words = [
    "Im a fullstack web developer",
    "Im a data analyst",
    "Im a video editor"
  ];

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 1500;

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="relative w-full h-screen bg-[#FBFBE2] overflow-hidden flex items-center justify-center">

      {/* Targaryen Sigil - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute z-10"
        style={{
          top: "clamp(60px, 8vw, 110px)",
          right: "clamp(12px, 4vw, 64px)",
          width: "clamp(48px, 7vw, 110px)",
          height: "clamp(48px, 7vw, 110px)",
        }}
      >
        <img src={redlogso} alt="Targaryen Sigil Right" className="w-full h-full object-contain" />
      </motion.div>

      {/* Targaryen Sigil - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="absolute z-10"
        style={{
          bottom: "clamp(12px, 4vw, 36px)",
          left: "clamp(12px, 4vw, 64px)",
          width: "clamp(48px, 7vw, 110px)",
          height: "clamp(48px, 7vw, 110px)",
        }}
      >
        <img src={redlogso} alt="Targaryen Sigil Left" className="w-full h-full object-contain" />
      </motion.div>

      {/* Main container */}
      <div className="relative flex items-center justify-center w-full max-w-7xl h-full px-4 md:px-6">

        {/* PORTFOLIO big background text */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                staggerDirection: -1,
                delayChildren: 0.2,
              },
            },
          }}
          className="font-got text-[#8F000D] leading-none tracking-tight flex items-center justify-center w-full z-0 select-none uppercase"
          style={{ fontSize: "clamp(52px, 14vw, 200px)" }}
        >
          {"PORTFOLIO".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, display: "none" },
                visible: { opacity: 1, display: "inline-block" },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Character photo - anchored to bottom */}
        <div className="absolute inset-x-0 bottom-0  top-0 flex justify-center z-10 pointer-events-none">
          <div className="relative h-full w-full flex justify-left items-end">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              src={myimage}
              alt="Muslih Sahmat"
              className="pointer-events-auto z-10 object-contain"
              style={{
                height: "clamp(20%, 80%, 125%)",
                width: "auto",
                transform: "translateX(clamp(5%, 0%, 22%))",
              }}
            />
          </div>
        </div>

        {/* Typing subtitle - bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute z-20 flex items-center justify-end"
          style={{
            bottom: "clamp(24px, 8vw, 60px)",
            right: "clamp(12px, 4vw, 48px)",
            minHeight: "36px",
          }}
        >
          <p
            className="text-[#8F000D] font-semibold tracking-wide font-sans"
            style={{ fontSize: "clamp(12px, 2.2vw, 26px)" }}
          >
            {displayText}
            <span className="animate-[pulse_1s_infinite] ml-1">|</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;