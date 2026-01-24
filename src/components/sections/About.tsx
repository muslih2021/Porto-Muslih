// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// import { services } from "../../constants";
// import { SectionWrapper } from "../../hoc";
// import { fadeIn } from "../../utils/motion";
// import { config } from "../../constants/config";
// import { Header } from "../atoms/Header";

// interface IServiceCard {
//   index: number;
//   title: string;
//   icon: string;
// }

// const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
//   <Tilt
//     glareEnable
//     tiltEnable
//     tiltMaxAngleX={30}
//     tiltMaxAngleY={30}
//     glareColor="#aaa6c3"
//   >
//     <div className="max-w-[250px] w-full xs:w-[250px]">
//       <motion.div
//         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//         className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
//       >
//         <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
//           <img
//             src={icon}
//             alt="web-development"
//             className="h-16 w-16 object-contain"
//           />

//           <h3 className="text-center text-[20px] font-bold text-white">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <Header useMotion={true} {...config.sections.about} />

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
//       >
//         {config.sections.about.content}
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");
import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useScroll, useTransform } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "end 20%"]
  });
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const cardOpacity = isMobile
    ? useTransform(scrollYProgress, [0.8, 1], [1, 0])
    : 1;

  const cardScale = isMobile
    ? useTransform(scrollYProgress, [0.8, 1], [1, 0])
    : 1;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity: cardOpacity, scale: cardScale }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="max-w-[250px] w-full xs:w-[250px]">
          <motion.div
            className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
            whileHover={{
              boxShadow: "0 0 30px rgba(145, 94, 255, 0.8)"
            }}
          >
            <motion.div 
              className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5"
              whileHover={{ 
                backgroundColor: "rgba(30, 30, 46, 0.9)",
                boxShadow: "inset 0 0 20px rgba(145, 94, 255, 0.3)"
              }}
            >
              <motion.img
                src={icon}
                alt={title}
                className="h-16 w-16 object-contain"
                whileHover={{ 
                  scale: 1.2
                }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <h3 className="text-center text-[20px] font-bold text-white">
                {title}
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Header
  const headerScale = isMobile
    ? useTransform(scrollY, [600, 1000], [1, 0])
    : 1;
  
  const headerOpacity = isMobile 
    ? useTransform(scrollY, [600, 1000], [1, 0])
    : 1;
  
  // Paragraph
  const paraScale = isMobile
    ? useTransform(scrollY, [700, 1100], [1, 0])
    : 1;
  
  const paraOpacity = isMobile 
    ? useTransform(scrollY, [700, 1100], [1, 0])
    : 1;

  // Desktop: full container
  const containerScale = isMobile ? 1 : useTransform(scrollY, [0, 1800, 2800], [1, 1, 0]);
  const containerOpacity = isMobile ? 1 : useTransform(scrollY, [0, 1800, 2800], [1, 1, 0]);
  const containerY = useTransform(scrollY, [0, 1800, 2800], [0, 0, 100]);

  return (
    <div ref={containerRef}>
      <motion.div
        style={{
          scale: containerScale,
          opacity: containerOpacity,
          y: containerY
        }}
      >
        {/* Header */}
        <motion.div
          style={{ opacity: headerOpacity, scale: headerScale }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Header useMotion={true} {...config.sections.about} />
        </motion.div>

        {/* Paragraph */}
        <motion.p
          style={{ opacity: paraOpacity, scale: paraScale }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.about.content}
        </motion.p>

        {/* Service Cards */}
        <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))
          ) : (
            <p className="text-white">Tidak ada service data</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");