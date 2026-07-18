import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { myimage, redlogso } from "../../assets";

const GLITCH_CHARS = "!<>-_\/[]{}—=+*^?#@&$%~█▓▒░";
const GLITCH_CHARS_JP = "アイウエオカキクケコサシスセソタチツテトナニヌネノ漢字龍剣風火水";

const TITLE_WORDS = ["PORTFOLIO", "ポートフォリオ"];

// ─────────────────────────────────────────────
// Glitch Title — scrambles between languages
// ─────────────────────────────────────────────
const GlitchTitle = () => {
  const [displayChars, setDisplayChars] = useState<string[]>([]);
  const [hasEntered, setHasEntered] = useState(false);
  const wordIdx = useRef(0);
  const rafId = useRef(0);

  const scrambleTo = useCallback((target: string, onDone?: () => void) => {
    const len = target.length;
    const resolved = new Array(len).fill(false);
    const chars = new Array(len).fill("");
    let frame = 0;

    // Pick glitch chars based on target language
    const isJapanese = /[\u3000-\u9FFF]/.test(target);
    const pool = isJapanese ? GLITCH_CHARS_JP : GLITCH_CHARS;

    const tick = () => {
      for (let i = 0; i < len; i++) {
        if (resolved[i]) {
          chars[i] = target[i];
        } else if (frame > 4 + i * 3) {
          resolved[i] = true;
          chars[i] = target[i];
        } else {
          chars[i] = pool[Math.floor(Math.random() * pool.length)];
        }
      }
      setDisplayChars([...chars]);
      frame++;

      if (resolved.every(Boolean)) {
        onDone?.();
      } else {
        rafId.current = requestAnimationFrame(tick);
      }
    };

    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(tick);
  }, []);

  // Initial entrance + looping glitch cycle
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Initial entrance: show PORTFOLIO first
    setDisplayChars("PORTFOLIO".split(""));

    const startLoop = () => {
      const target = TITLE_WORDS[wordIdx.current % TITLE_WORDS.length];
      scrambleTo(target, () => {
        timeout = setTimeout(() => {
          wordIdx.current++;
          startLoop();
        }, 4000);
      });
    };

    // Start the glitch cycle after the entrance animation
    timeout = setTimeout(() => {
      setHasEntered(true);
      wordIdx.current = 1; // start from Japanese
      startLoop();
    }, 2500);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId.current);
    };
  }, [scrambleTo]);

  return (
    <motion.h1
      initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
      animate={{ clipPath: "inset(-10% -5% -10% -5%)", opacity: 1 }}
      transition={{
        clipPath: { duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] },
        opacity: { duration: 0.6, delay: 0.3 },
      }}
      className="font-got text-[#8F000D] leading-none tracking-tight flex items-center justify-center w-full z-0 select-none uppercase"
      style={{ fontSize: "clamp(52px, 14vw, 200px)" }}
    >
      {displayChars.map((char, i) => (
        <span key={i} style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : undefined }}>
          {char}
        </span>
      ))}
    </motion.h1>
  );
};

const Hero = () => {
  const phrases = [
    "Im a fullstack web developer",
    "Im a data analyst",
    "Im a video editor",
  ];

  const [displayText, setDisplayText] = useState("");
  const phraseIndex = useRef(0);
  const rafId = useRef<number>(0);

  const scramble = useCallback((target: string, onDone?: () => void) => {
    const len = target.length;
    const resolved = new Array(len).fill(false);
    const chars = new Array(len).fill("");
    let frame = 0;

    const tick = () => {
      for (let i = 0; i < len; i++) {
        if (resolved[i]) {
          chars[i] = target[i];
        } else if (frame > i * 2) {
          // Resolve this character
          resolved[i] = true;
          chars[i] = target[i];
        } else {
          // Random glitch character
          chars[i] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
      }
      setDisplayText(chars.join(""));
      frame++;

      if (resolved.every(Boolean)) {
        onDone?.();
      } else {
        rafId.current = requestAnimationFrame(tick);
      }
    };

    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      const target = phrases[phraseIndex.current % phrases.length];
      scramble(target, () => {
        // Hold the resolved text, then scramble to next
        timeout = setTimeout(() => {
          phraseIndex.current++;
          runCycle();
        }, 3000);
      });
    };

    // Initial delay before first scramble
    timeout = setTimeout(runCycle, 1200);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId.current);
    };
  }, [scramble]);

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

        {/* PORTFOLIO / ポートフォリオ — glitch scramble loop */}
        <GlitchTitle />

        {/* Character photo - anchored to bottom, centered on mobile/tablet */}
        <div className="absolute inset-x-0 bottom-0 top-0 flex justify-center lg:justify-start z-10 pointer-events-none">
          <div className="relative h-full w-full flex justify-center lg:justify-start items-end">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              src={myimage}
              alt="Muslih Sahmat"
              style={{
                height: "clamp(20%, 88%, 125%)",
                width: "auto",
              }}
              className="pointer-events-auto z-10 object-contain translate-x-0 lg:translate-x-[22%]"
            />
          </div>
        </div>

        {/* Glitch subtitle - bottom right on desktop, bottom center on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute z-20 flex items-center justify-center lg:justify-end left-1/2 lg:left-auto lg:right-6 -translate-x-1/2 lg:translate-x-0 w-[90%] lg:w-auto"
          style={{
            bottom: "clamp(80px, 24vw, 180px)",
            minHeight: "36px",
          }}
        >
          <p
            className="text-[#8F000D] font-semibold tracking-wide font-mono text-center lg:text-right"
            style={{ fontSize: "clamp(12px, 2.2vw, 26px)" }}
          >
            {displayText}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;