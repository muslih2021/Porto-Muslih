import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ScrollButton = () => {
  const [shouldPointUp, setShouldPointUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // If we scroll past 100px (outside the Hero section), point the arrow up.
      if (scrollY >= 100) {
        setShouldPointUp(true);
      } else {
        setShouldPointUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (shouldPointUp) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll down by one viewport height (to About section)
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Vertical 'SCROLL' Text Indicator */}
      <AnimatePresence>
        {!shouldPointUp && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-col items-center leading-none text-[#D4AF37] font-got font-bold select-none pointer-events-none"
            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
          >
            <span>S</span>
            <span className="mt-1">C</span>
            <span className="mt-1">R</span>
            <span className="mt-1">O</span>
            <span className="mt-1">L</span>
            <span className="mt-1">L</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circle navigation button wrapper */}
      <motion.div
        className="cursor-pointer flex items-center justify-center p-3 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        style={{
          width: "60px",
          height: "60px",
        }}
      >
        {/* Decorative Outer Glow & Subtle Pulse Ring using Gold theme */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#D4AF37]/5 pointer-events-none"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            border: "1px solid rgba(212, 175, 55, 0.35)",
            boxShadow: "0 0 15px rgba(212, 175, 55, 0.15)",
          }}
        />

        {/* Styled Arrow SVG with premium gold gradient */}
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)]"
          animate={{ rotate: shouldPointUp ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <defs>
            <linearGradient id="metallicGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3E7C4" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA7C11" />
              <stop offset="100%" stopColor="#F3E7C4" />
            </linearGradient>
          </defs>

          {/* Top diamond: sharp points at top & bottom, curved side corners */}
          <path d="M50,15 C51.8,20 53,23 53,26 C53,29 50,31.5 50,31.5 C50,31.5 47,29 47,26 C47,23 48.2,20 50,15 Z" fill="url(#metallicGold)" />
          
          {/* Middle element: curved cup top, converging down to a point */}
          <path d="M42,39 C46,39 50,43 50,43 C50,43 54,39 58,39 C59.5,41 60,43.5 57.5,46.5 C55.5,49 52,53 50,53 C48,53 44.5,49 42.5,46.5 C40,43.5 40.5,41 42,39 Z" fill="url(#metallicGold)" />
          
          {/* Bottom wing chevron: wings curving outward and up, sharp center downward dip */}
          <path d="M30,51 C35,51 45,58.5 50,62 C55,58.5 65,51 70,51 C73,53 72.5,56 69,59 C63.5,63.5 54,75 50,81 C46,75 36.5,63.5 31,59 C27.5,56 27,53 30,51 Z" fill="url(#metallicGold)" />
        </motion.svg>
      </motion.div>
    </div>
  );
};
