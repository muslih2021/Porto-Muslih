import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config, roleConfigs, getRoleFromPath } from "../../constants/config";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div  
      variants={fadeIn("up", "spring", index * 0.05, 0.35)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01}} >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div onClick={() => window.open(sourceCodeLink, "_blank")} className="bg-tertiary w-full cursor-pointer rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-7">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const chips = [
  { label: "All", value: "general" },
  { label: "Data Analyst", value: "data_analis" },
  { label: "Video Editor", value: "video_editor" },
  { label: "Programmer", value: "programmer" }
];

const Works = () => {
  const { pathname } = useLocation();
  const initialRole = getRoleFromPath(pathname);
  const [activeChip, setActiveChip] = useState<string>(initialRole);

  useEffect(() => {
    setActiveChip(initialRole);
  }, [initialRole]);

  const filteredProjects = activeChip === 'general' 
    ? projects 
    : projects.filter(p => p.category === activeChip);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
               variants={fadeIn("up", "spring", 0.05, 0.35)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.01 }} 
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {roleConfigs[initialRole].worksContent}
        </motion.p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {chips.map(chip => (
          <button
            key={chip.value}
            onClick={() => setActiveChip(chip.value)}
            className={`px-4 py-2 rounded-full border transition-all cursor-pointer ${
              activeChip === chip.value
                ? 'bg-tertiary border-[#915EFF] text-white shadow-[0_0_10px_rgba(145,94,255,0.5)]'
                : 'bg-transparent border-secondary text-secondary hover:text-white hover:border-white'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
