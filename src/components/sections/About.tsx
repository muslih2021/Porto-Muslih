import { motion } from "framer-motion";
import { redlogo } from "../../assets";
import { FaJava } from "react-icons/fa6";
import {
  SiAdobeaftereffects,
  SiFigma,
  SiReact,
  SiPython,
  SiLaravel,
  SiPostgresql,
  SiKotlin,
  SiExpress,
  SiCanva
} from "react-icons/si";

const SiCapcut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M5.5 2h13A3.5 3.5 0 0122 5.5v13a3.5 3.5 0 01-3.5 3.5h-13A3.5 3.5 0 012 18.5v-13A3.5 3.5 0 015.5 2zm3.3 5.3a1.2 1.2 0 00-1.2 1.2v7a1.2 1.2 0 001.2 1.2h3.2c.4 0 .7-.2.9-.5l2.8-4.2a1.2 1.2 0 000-1.4L12.9 8c-.2-.3-.5-.5-.9-.5H8.8z" />
  </svg>
);

const SiMicrosoftexcel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M23 1.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-21zM10.27 4.25L1.5 6.07v11.86l8.77 1.82V4.25zM6.92 14.77l-1.34-2.22-1.34 2.22H2.8l2.06-3.13L2.9 8.64h1.44l1.24 2.13 1.24-2.13h1.41L6.2 11.64l2.12 3.13H6.92z" />
  </svg>
);

const SiMicrosoftword = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M23 1.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-21zM10.27 4.25L1.5 6.07v11.86l8.77 1.82V4.25zM7.22 14.77L6.16 9.88l-1.07 4.89H3.61l-1.5-6.13h1.46l.87 4.41.97-4.41h1.34l.97 4.41.87-4.41h1.46l-1.5 6.13H7.22z" />
  </svg>
);

const SiMicrosoftpowerpoint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M23 1.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-21zM10.27 4.25L1.5 6.07v11.86l8.77 1.82V4.25zM3.45 14.77V8.64h2.47c1.33 0 2.05.69 2.05 1.76 0 1.13-.77 1.78-2.07 1.78H4.76v2.59H3.45zm1.31-3.7h1.03c.63 0 .97-.27.97-.73 0-.44-.31-.69-.96-.69H4.76v1.42z" />
  </svg>
);

const creativeToolkit = [
  { name: "After Effects", icon: SiAdobeaftereffects, color: "#00005B" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "CapCut", icon: SiCapcut, color: "#000000" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
];

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "SQL", icon: SiPostgresql, color: "#4479A1" },
  { name: "MS Excel", icon: SiMicrosoftexcel, color: "#107C41" },
  { name: "MS Word", icon: SiMicrosoftword, color: "#2B579A" },
  { name: "MS PowerPoint", icon: SiMicrosoftpowerpoint, color: "#D83B01" },
];

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#8F000D] pt-16 pb-20 md:pb-0 overflow-hidden flex items-center justify-center">

      {/* Naga Targaryen Putih dengan Opacity Rendah di Kiri Bawah/Tengah */}
      <div className="absolute left-[-5%] bottom-[5%] w-[55%] md:w-[42%] max-w-[620px] aspect-square pointer-events-none z-0">
        <img
          src={redlogo}
          alt="Targaryen Sigil Background"
          className="w-full h-full object-contain filter brightness-0 invert opacity-[0.12]"
        />
      </div>

      {/* Angka Raksasa 02 Dekoratif di Kanan Bawah */}
      <div className="absolute -bottom-20 font-black right-12 text-[24vw] md:text-[28vw] font-brush text-[#F2E6E6]/[0.13] select-none pointer-events-none z-0 leading-none">
        02
      </div>

      {/* Kontainer Dua Kolom Utama */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start py-8 md:py-0">

        {/* Kolom Kiri: Judul Personal Overview */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-got text-white leading-tight uppercase select-none tracking-wide"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
          >
            PERSONAL <br />
            OVERVIEW
          </motion.h2>
        </div>

        {/* Kolom Kanan: Biografi & Toolkit */}
        <div className="md:col-span-7 flex flex-col justify-start text-white">
          {/* Paragraf Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="leading-[1.8] font-light text-white/95 max-w-2xl text-justify"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)" }}
          >
            I am an Information Systems Fresh Graduate from <strong className="font-bold text-white" style={{fontSize:"1.2em"}}>Hasanuddin University</strong> with a <strong className="font-bold text-white" style={{fontSize:"1.2em"}}>GPA of 3.65/4.00</strong>, specializing as an <strong className="font-bold text-white" style={{fontSize:"1.2em"}}>Information Systems Specialist</strong>, <strong className="font-bold text-white" style={{fontSize:"1.2em"}}>Full Stack Developer</strong>, and <strong className="font-bold text-white" style={{fontSize:"1.2em"}}>Entry-Level Data Analyst</strong>. I possess expertise in UI/UX design using Figma and web development with React.js, Express.js, and Laravel. Additionally, I am skilled in end-to-end data analytics, from scraping and validation to delivering interactive dashboards using Power BI, Excel, Python (Pandas), and SQL. Backed by experience as a <strong className="font-bold text-white" style={{fontSize:"1.2em"}}>Web Programming Laboratory Assistant</strong> and direct collaboration with <strong className="font-bold text-white" style={{fontSize:"1.2em"}}>Japanese teams</strong>, I have developed high discipline, precision, and cross-cultural professionalism.
          </motion.p>

          {/* Garis Horizontal Pemisah */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="w-full h-[1px] bg-white/20 my-8 origin-left"
          />

          {/* Bagian Grid Toolkit / Tech Stack */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">

            {/* Sub-Kolom 1: Creative Toolkit */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h4 className="text-[11px] md:text-[13px] font-semibold tracking-[0.12em] text-white/60 uppercase mb-4 font-mono">
                CREATIVE TOOLKIT
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-5">
                {creativeToolkit.map((item) => (
                  <div key={item.name} className="flex flex-col items-center" style={{ width: "clamp(52px, 8vw, 75px)" }}>
                    <div className="cursor-pointer bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:-translate-y-1" style={{ width: "clamp(40px, 6vw, 56px)", height: "clamp(40px, 6vw, 56px)" }}>
                      <item.icon style={{ color: item.color, fontSize: "clamp(18px, 3vw, 28px)" }} />
                    </div>
                    <span className="text-white/80 mt-2 text-center leading-tight" style={{ fontSize: "clamp(9px, 1.1vw, 12px)" }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sub-Kolom 2: Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h4 className="text-[11px] md:text-[13px] font-semibold tracking-[0.12em] text-white/60 uppercase mb-4 font-mono">
                TECH STACK
              </h4>
              <div className="flex flex-wrap gap-3 md:gap-5">
                {techStack.map((item) => (
                  <div key={item.name} className="flex flex-col items-center" style={{ width: "clamp(52px, 8vw, 75px)" }}>
                    <div className="cursor-pointer bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 hover:-translate-y-1" style={{ width: "clamp(40px, 6vw, 56px)", height: "clamp(40px, 6vw, 56px)" }}>
                      <item.icon style={{ color: item.color, fontSize: "clamp(18px, 3vw, 28px)" }} />
                    </div>
                    <span className="text-white/80 mt-2 text-center leading-tight" style={{ fontSize: "clamp(9px, 1.1vw, 12px)" }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;