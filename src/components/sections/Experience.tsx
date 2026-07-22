
import { lannisterLogo } from "../../assets";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { experiences } from "../../constants";
import { useRef } from "react";

// ─────────────────────────────────────────────
// Animated Timeline Node
// ─────────────────────────────────────────────
const TimelineNode: React.FC<{ index: number }> = ({ index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="absolute left-0 mt-[6px] w-[13px] h-[13px] z-10 flex items-center justify-center">
      {/* Ping / glow ring */}
      <motion.div
        className="absolute rounded-sm"
        style={{
          width: "13px",
          height: "13px",
          border: "2px solid #8F000D",
          backgroundColor: "transparent",
        }}
        initial={{ scale: 1, opacity: 0.7 }}
        animate={isInView ? {
          scale: [1, 2.2, 2.5],
          opacity: [0.7, 0.3, 0],
        } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.3,
          ease: "easeOut",
        }}
      />

      {/* Main dot */}
      <motion.div
        className="rounded-sm"
        style={{
          width: "13px",
          height: "13px",
          border: "2px solid #8F000D",
        }}
        initial={{
          scale: 0,
          backgroundColor: "#F8F8EB",
        }}
        animate={isInView ? {
          scale: [0, 1.4, 1],
          backgroundColor: "#8F000D",
        } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.1,
          ease: [0.34, 1.56, 0.64, 1], // spring-like bounce
        }}
      />
    </div>
  );
};

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 50%"],
  });

  // Map scroll progress to line height (0% → 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div
        id="experience"
        className="relative overflow-hidden pt-16 pb-32"
        style={{
          backgroundColor: "#F8F8EB",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
        }}
      >
        {/* Anchor */}
        <span className="hash-span" id="work">&nbsp;</span>

        {/* Lannister Logo - RIGHT */}
        <img
          src={lannisterLogo}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute pointer-events-none select-none"
          style={{
            width: "65vw",
            maxWidth: "900px",
            top: "50%",
            right: "-20vw",
            transform: "translateY(-45%)",
            opacity: 0.15,
            zIndex: 0,
          }}
        />

        {/* Lannister Logo - LEFT */}
        <img
          src={lannisterLogo}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute pointer-events-none select-none"
          style={{
            width: "25vw",
            maxWidth: "350px",
            top: "40%",
            left: "2vw",
            transform: "translateY(-50%) scaleX(-1)",
            opacity: 0.06,
            zIndex: 0,
          }}
        />
        {/* Lannister Logo - LEFT BOTTOM (facing right as requested) */}
        <img
          src={lannisterLogo}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute pointer-events-none select-none"
          style={{
            width: "30vw",
            maxWidth: "400px",
            bottom: "10%",
            left: "-5vw",
            transform: "scaleX(-1)",
            opacity: 0.10,
            zIndex: 0,
          }}
        />

        {/* Lannister Logo - RIGHT BOTTOM */}
        <img
          src={lannisterLogo}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute pointer-events-none select-none"
          style={{
            width: "20vw",
            maxWidth: "300px",
            bottom: "5%",
            right: "5vw",
            opacity: 0.03,
            zIndex: 0,
          }}
        />
        {/* Number 04 */}
        <div
          className="absolute font-brush select-none pointer-events-none z-0 leading-none"
          style={{
            fontSize: "clamp(120px, 22vw, 320px)",
            color: "#A4A696",
            opacity: 0.35,
            bottom: "30px",
            left: "5vw",
            zIndex: 0,
            transform: "rotate(-4deg)",
          }}
        >
          04
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-center md:pl-20">

          <div className="flex flex-col items-start w-full md:w-auto">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12 md:mb-16"
            >
              <span className="text-[#8F000D] font-bold translate-y-1" style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}>*</span>
              <h2 className="font-got text-[#8F000D]" style={{ fontSize: "clamp(1.8rem, 6.5vw, 5rem)", letterSpacing: "0.02em" }}>
                EXPERIENCE
              </h2>
            </motion.div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative ml-[15px] md:ml-[110px] flex flex-col gap-10">
              {/* Static background line (faint) */}
              <div
                className="absolute left-[6px] top-3 bottom-5 w-[1px]"
                style={{ backgroundColor: "rgba(143, 0, 13, 0.1)" }}
              ></div>

              {/* Animated line that draws on scroll */}
              <motion.div
                className="absolute left-[6px] top-3 w-[1px] origin-top"
                style={{
                  height: lineHeight,
                  backgroundColor: "#8F000D",
                  boxShadow: "0 0 8px rgba(143, 0, 13, 0.4)",
                }}
              />

              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative flex items-start group"
                >
                  {/* Animated Timeline Node */}
                  <TimelineNode index={index} />

                  {/* Content */}
                  <motion.div
                    className="ml-10 w-full pr-4"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-got text-[#8F000D] block mb-1.5" style={{ fontSize: "11px", letterSpacing: "0.15em" }}>
                      {item.date}
                    </span>
                    <h3 className="text-[#3A3A31] font-semibold text-[19px] md:text-[21px] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#7D7B6C] text-[15px] font-medium mb-3">
                      {item.companyName}
                    </p>
                    {item.points && item.points.length > 0 && (
                      <ul className="list-disc pl-4 space-y-2">
                        {item.points.map((point, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="text-[#8e8d83] text-[13.5px] leading-[1.6]"
                          >
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Experience;

