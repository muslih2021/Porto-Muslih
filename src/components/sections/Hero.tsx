import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../../constants/styles";

import {  fadeIn } from "../../utils/motion"; // sesuaikan path

const Hero = () => {
  const texts = [
    "Hi, I'm Muslih Sahmat",
    "I'm a Web & Android Developer",
    "Graphic Designer & Video Editor"
  ];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const fullText = texts[textIndex];

  useEffect(() => {
    const typingSpeed = 100; // ms per karakter
    const deletingSpeed = 50; // ms per karakter saat delete
    const pauseTime = 1500; // pause sebelum delete

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < fullText.length) {
          setDisplayText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Selesai typing, mulai pause sebelum delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Selesai delete, pindah ke text berikutnya
          setTextIndex((prev) => (prev + 1) % texts.length);
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, fullText, texts]);

  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        {/* Garis dan bulatan ungu */}
        <div className="hidden mt-10 pt-10 md:flex flex-col items-center justify-center">
          <motion.div
            className="h-5 w-5 rounded-full bg-[#915EFF]"
            variants={fadeIn("down", "spring", 0, 1)}
            initial="hidden"
            animate="show"
          />
          <div className="violet-gradient  h-40 w-1 sm:h-80" />
        </div>

        {/* Teks dan Gambar */}
        <div className="flex flex-col md:flex-row items-start w-screen gap-8">
          {/* Teks */}
          <motion.div
            className="w-full md:p-0 px-6 absolute top-96 md:static md:mt-10 md:pt-10 md:w-3/5 order-2 md:order-1"
            variants={fadeIn("right", "spring", 0.2, 1)}
            initial="hidden"
            animate="show"
          >
            {/* Heading dengan Typing Effect Berulang */}
            <h1 className={`${styles.heroHeadText} text-white min-h-[80px]`}>
              {displayText.includes("I'm") ? (
                <>
                  {displayText.split("I'm")[0]}
                  <span className="text-[#915EFF]">I'm{displayText.split("I'm")[1]}</span>
                </>
              ) : (
                displayText
              )}
            </h1>

            
          </motion.div>

          {/* Gambar dengan Zoom In */}
          <motion.div
            className="w-full md:w-2/5 h-screen bg-[url('/src/assets/herobg1.png')] sm:bg-[url('/src/assets/herobg1.png')] bg-cover bg-center bg-no-repeat order-1 md:order-2"
            variants={fadeIn("left", "spring", 0.3, 1)}
            initial="hidden"
            animate="show"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px]  items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;