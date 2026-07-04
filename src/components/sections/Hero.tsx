// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// import { styles } from "../../constants/styles";

// import {  fadeIn } from "../../utils/motion"; // sesuaikan path

// const Hero = () => {
//   const texts = [
//     "Hi, I'm Muslih Sahmat",
//     "I'm a Web & Android Developer",
//     "Graphic Designer & Video Editor"
//   ];
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [charIndex, setCharIndex] = useState(0);
//   const [textIndex, setTextIndex] = useState(0);
//   const fullText = texts[textIndex];

//   useEffect(() => {
//     const typingSpeed = 100; // ms per karakter
//     const deletingSpeed = 50; // ms per karakter saat delete
//     const pauseTime = 1500; // pause sebelum delete

//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         // Typing
//         if (charIndex < fullText.length) {
//           setDisplayText(fullText.substring(0, charIndex + 1));
//           setCharIndex(charIndex + 1);
//         } else {
//           // Selesai typing, mulai pause sebelum delete
//           setTimeout(() => setIsDeleting(true), pauseTime);
//         }
//       } else {
//         // Deleting
//         if (charIndex > 0) {
//           setDisplayText(fullText.substring(0, charIndex - 1));
//           setCharIndex(charIndex - 1);
//         } else {
//           // Selesai delete, pindah ke text berikutnya
//           setTextIndex((prev) => (prev + 1) % texts.length);
//           setIsDeleting(false);
//         }
//       }
//     }, isDeleting ? deletingSpeed : typingSpeed);

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting, fullText, texts]);

//   return (
//     <section className="relative mx-auto h-screen overflow-hidden w-full">
//       <div
//         className={`absolute inset-0 top-[120px] mx-auto overflow-hidden max-w-7xl ${styles.paddingX} flex flex-row items-start gap-10`}
//       >
//         {/* Garis dan bulatan ungu */}
//         <div className="hidden mt-10  pt-10 lg:flex flex-col items-center justify-center">
//           <motion.div
//             className="h-5 w-5 rounded-full bg-[#915EFF]"
//             variants={fadeIn("down", "spring", 0, 1)}
//             initial="hidden"
//             animate="show"
//           />
//           <div className="violet-gradient  h-40 w-1 sm:h-80" />
//         </div>

//         {/* Teks dan Gambar */}
//         <div className="flex flex-col lg:flex-row items-start w-screen ">
//           {/* Teks */}
//           <motion.div
//             className="w-full lg:p-0  w-60 absolute top-72 lg:top-96 lg:static lg:mt-10 lg:pt-10 lg:w-3/5 order-2 lg:order-1"
//             variants={fadeIn("right", "spring", 0.2, 1)}
//             initial="hidden"
//             animate="show"
//           >
//             {/* Heading dengan Typing Effect Berulang */}
//             <h1 className={`${styles.heroHeadText} text-white  min-h-[80px]`}>
//               {displayText.includes("I'm") ? (
//                 <>
//                   {displayText.split("I'm")[0]}
//                   <span className="text-[#915EFF]">I'm{displayText.split("I'm")[1]}</span>
//                 </>
//               ) : (
//                 displayText
//               )}
//             </h1>

            
//           </motion.div>

//           {/* Gambar dengan Zoom In */}
//           <motion.div
//             className="w-full lg:w-2/5 h-screen bg-[url('/src/assets/herobg1.png')] sm:bg-[url('/src/assets/herobg1.png')] bg-center bg-no-repeat order-1 lg:order-2"
//             variants={fadeIn("left", "spring", 0.3, 1)}
//             initial="hidden"
//             animate="show"
//           />
//         </div>
//       </div>
// {/* 
//       Scroll Indicator */}
//       <div className="xs:bottom-10 left-40 lg:left-0 absolute bottom-60 flex w-full items-center justify-center">
//         <a href="#about">
//           <div className="border-secondary flex h-[64px] w-[35px]  items-start justify-center rounded-3xl border-4 p-2">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="bg-secondary mb-1 h-3 w-3 rounded-full"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { useLocation } from "react-router-dom";
import { roleConfigs, getRoleFromPath } from "../../constants/config";

const Hero = () => {
  const { pathname } = useLocation();
  const role = getRoleFromPath(pathname);
  const texts = roleConfigs[role].heroTexts;
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const fullText = texts[textIndex];
  
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // EFFECT 1: Twist & Skew - berputar sambil bergerak
  const rotateZ = useTransform(scrollY, [0, 800], [0, 15]);
  const skewY = useTransform(scrollY, [0, 800], [0, 5]);
  
  // EFFECT 2: Blur & Color shift dengan gerak
  const textBlur = useTransform(scrollY, [0, 600], [0, 8]);
  
  // EFFECT 3: Perspective transform - 3D depth
  const perspectiveY = useTransform(scrollY, [0, 800], [0, 200]);
  const imageY = useTransform(scrollY, [0, 800], [0, -250]);
  
  // EFFECT 4: Scale with offset
  const imageScale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const textScale = useTransform(scrollY, [0, 800], [1, 0.9]);
  
  // EFFECT 5: Opacity dengan fade timing berbeda
  const containerOpacity = useTransform(scrollY, [0, 700], [1, 0.3]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0.5]);
  const imageOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  
  // EFFECT 6: Rotation individual
  const textRotate = useTransform(scrollY, [0, 800], [0, -3]);
  const imageRotate = useTransform(scrollY, [0, 800], [0, 3]);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setTextIndex((prev) => (prev + 1) % texts.length);
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, fullText, texts]);

  return (
    <section 
      ref={containerRef}
      className="relative mx-auto h-screen w-full bg-primary overflow-hidden"
    >
      {/* Background blur effect */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollY, [0, 800], [1, 0.2])
        }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black"
      />

      <motion.div
        style={{ 
          opacity: containerOpacity,
          scale: useTransform(scrollY, [0, 800], [1, 0.92]),
          rotateZ,
          skewY
        }}
        className={`absolute inset-0 top-[120px] mx-auto overflow-hidden max-w-7xl ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        {/* Garis dan bulatan ungu - dengan floating effect */}
        <motion.div 
          className="hidden mt-10 pt-10 lg:flex flex-col items-center justify-center"
          style={{ 
            y: useTransform(scrollY, [0, 800], [0, 120]),
            opacity: useTransform(scrollY, [0, 600], [1, 0.2])
          }}
        >
          <motion.div
            className="h-5 w-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/50"
            variants={fadeIn("down", "spring", 0, 1)}
            initial="hidden"
            animate="show"
            style={{
              boxShadow: useTransform(scrollY, [0, 800], [
                "0 0 20px rgba(145, 94, 255, 0.8)",
                "0 0 40px rgba(145, 94, 255, 0.3)"
              ])
            }}
          />
          <motion.div 
            className="violet-gradient h-40 w-1 sm:h-80"
            style={{
              scaleY: useTransform(scrollY, [0, 800], [1, 0.7]),
              opacity: useTransform(scrollY, [0, 600], [1, 0.2])
            }}
          />
        </motion.div>

        {/* Teks dan Gambar */}
        <div className="flex  flex-col lg:flex-row items-start w-full">
          {/* Teks dengan 3D flip & scale effect */}
          <motion.div
            style={{ 
              y: perspectiveY,
              opacity: textOpacity,
              scale: textScale,
              rotateX: useTransform(scrollY, [0, 800], [0, 20]),
              rotateZ: textRotate,
              filter: textBlur.get ? `blur(${textBlur.get()}px)` : "blur(0px)"
            }}
            className="w-full z-50 lg:p-0 w-60 absolute top-72 md:top-96 lg:top-96 lg:static md:mt-10 lg:mt-10 lg:pt-10 lg:w-3/5 order-2 lg:order-1"
            variants={fadeIn("right", "spring", 0.2, 1)}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className={`${styles.heroHeadText}  text-white min-h-[80px] bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent`}
              style={{
                filter: textBlur
              }}
            >
              {displayText.includes("I'm") ? (
                <>
                  {displayText.split("I'm")[0]}
                  <span className="bg-gradient-to-r from-[#915EFF] to-purple-400 bg-clip-text text-transparent">I'm{displayText.split("I'm")[1]}</span>
                </>
              ) : (
                displayText
              )}
            </motion.h1>
          </motion.div>

          {/* Gambar dengan advanced parallax & rotation */}
          <motion.div
            style={{ 
              y: imageY,
              opacity: imageOpacity,
              scale: imageScale,
              rotateY: useTransform(scrollY, [0, 800], [0, -15]),
              rotateZ: imageRotate,
              filter: useTransform(scrollY, [0, 800], [
                "brightness(1) saturate(1)",
                "brightness(0.9) saturate(0.8)"
              ])
            }}
            className="w-full lg:w-2/5 h-screen bg-[url('/src/assets/herobg1.png')] sm:bg-[url('/src/assets/herobg1.png')] bg-center bg-no-repeat bg-cover order-1 lg:order-2 relative"
            variants={fadeIn("left", "spring", 0.3, 1)}
            initial="hidden"
            animate="show"
          >
            {/* Glow overlay saat scroll */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#915EFF]/20 to-transparent"
              style={{
                opacity: useTransform(scrollY, [0, 800], [0, 0.6])
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Animated scroll indicator dengan effect */}
      <motion.div 
        className="xs:bottom-10 left-40 lg:left-0 absolute bottom-60 flex w-full items-center justify-center"
        style={{ 
          opacity: useTransform(scrollY, [0, 400], [1, 0]),
          y: useTransform(scrollY, [0, 400], [0, 30])
        }}
      >
        <a href="#about">
          <motion.div 
            className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2"
            style={{
              borderColor: useTransform(scrollY, [0, 400], [
                "rgba(145, 94, 255, 1)",
                "rgba(145, 94, 255, 0.3)"
              ])
            }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;