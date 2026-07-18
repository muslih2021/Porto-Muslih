import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import { roleConfigs, getRoleFromPath } from "../../constants/config";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { TProject } from "../../types";
import starkLogo from "../../assets/got/stark.png";
import { gotBanner } from "../../assets";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const CARD_W = 320;
const CARD_H = 550;

// ─────────────────────────────────────────────
// Pennant Banner Card
// ─────────────────────────────────────────────
const BannerCard: React.FC<{ index: number; onDetail: () => void } & TProject> = ({
  index,
  name,
  image,
  onDetail,
}) => {
  const displayTitle = name.replace(/– Desa Ay/gi, "").replace(/– Event Video/gi, "").replace(/– a Local Culinary MSME/gi, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center select-none"
      style={{ width: `${CARD_W}px`, height: `${CARD_H}px` }}
    >
      {/* ── Asset Banner Image ── */}
      <img
        src={gotBanner}
        alt="got-banner"
        draggable={false}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
      />

      {/* ── Absolutely Positioned Contents overlayed on the banner ── */}
      <div
        className="relative z-10 w-full h-full flex flex-col items-center"
        style={{ paddingTop: "180px" }}
      >
        {/* Title */}
        <p
          className="font-got text-center text-white px-8 leading-tight"
          style={{
            fontSize: "14.5px",
            letterSpacing: "0.08em",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)"
          }}
        >
          {displayTitle.toUpperCase()}
        </p>

        {/* Screenshot Container */}
        <div
          className="p-[1.5px] mt-6 flex items-center justify-center"
          style={{
            width: "250px",
            height: "165px",
            borderRadius: "36px",
            border: "1.5px solid #8F000D",
            background: "#0a0a0a",
            overflow: "hidden",
            boxShadow: "0 6px 12px rgba(0,0,0,0.6)"
          }}
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ borderRadius: "34px" }}
          />
        </div>

        {/* DETAIL Button → opens modal */}
        <div
          className="mt-6 p-[3px] cursor-pointer transition-transform duration-200 hover:scale-105"
          onClick={onDetail}
          style={{
            border: "1.5px solid #ffffff",
            background: "transparent",
            width: "135px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <button
            className="w-full h-full font-got cursor-pointer"
            style={{
              fontSize: "10px",
              letterSpacing: "0.15em",
              color: "#8F000D",
              background: "#0c0c0c",
              border: "none",
            }}
          >
            DETAIL
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// Project Detail Modal
// ─────────────────────────────────────────────
const ProjectDetailModal: React.FC<{
  project: TProject | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      // Check if the ProjectsModal is still open (z-50 modal container)
      const allProjectsModalOpen = document.querySelector('[class*="z-50"][class*="overflow-y-auto"]');
      if (!allProjectsModalOpen) {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[200] overflow-y-auto bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.08 } }}
            className="relative w-full min-h-screen bg-white flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 z-30 bg-white border-b border-[#8F000D]/15 px-6 py-4 flex justify-between items-center">
              <span className="font-got text-[#8F000D]" style={{ fontSize: "1.2rem", letterSpacing: "0.05em" }}>
                PROJECT DETAILS
              </span>
              <button
                onClick={onClose}
                className="text-[#8F000D] hover:opacity-70 text-2xl font-bold w-10 h-10 flex items-center justify-center transition-opacity"
              >
                ✕
              </button>
            </div>

            {/* Image Section */}
            <div
              className="w-full flex-shrink-0 bg-[#F8F8F8] p-6 md:p-10 flex items-center justify-center border-b border-[#8F000D]/10"
              style={{ minHeight: "45vh" }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full max-h-[60vh] object-contain drop-shadow-xl rounded-xl"
              />
            </div>

            {/* Content Section */}
            <div className="w-full flex-1 p-6 sm:p-8 md:px-16 md:py-12 flex flex-col justify-start max-w-4xl mx-auto w-full">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => {
                  const colorMap: Record<string, { bg: string; text: string }> = {
                    "blue-text-gradient": { bg: "#dbeafe", text: "#1d4ed8" },
                    "green-text-gradient": { bg: "#dcfce7", text: "#15803d" },
                    "pink-text-gradient": { bg: "#fce7f3", text: "#be185d" },
                    "orange-text-gradient": { bg: "#ffedd5", text: "#c2410c" },
                  };
                  const colors = colorMap[tag.color] ?? { bg: "#f3f4f6", text: "#374151" };
                  return (
                    <span
                      key={tag.name}
                      className="text-[11px] font-mono font-bold uppercase tracking-wider"
                      style={{
                        padding: "3px 10px",
                        borderRadius: "4px",
                        background: colors.bg,
                        color: colors.text,
                      }}
                    >
                      #{tag.name}
                    </span>
                  );
                })}
              </div>

              {/* Title */}
              <h2
                className="font-got text-[#3A3A31] leading-snug mb-4"
                style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)", letterSpacing: "0.03em" }}
              >
                {project.name}
              </h2>

              {/* Divider */}
              <div className="w-16 h-[3px] bg-[#8F000D] mb-6" />

              {/* Description */}
              <p className="font-sans font-light text-[15px] sm:text-[16px] text-gray-700 leading-relaxed mb-10">
                {project.description}
              </p>

              {/* Source Code Link */}
              {project.sourceCodeLink && (
                <div className="mt-auto pt-6 border-t border-[#8F000D]/10">
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-got text-[#8F000D] hover:opacity-70 transition-opacity"
                    style={{ fontSize: "12px", letterSpacing: "0.12em" }}
                  >
                    VIEW SOURCE / DEMO
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────
// Modal – all projects
// ─────────────────────────────────────────────
const ProjectsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  activeChip: string;
  filteredProjects: TProject[];
  chips: { label: string; value: string }[];
  setActiveChip: (v: string) => void;
  onSelectProject: (p: TProject) => void;
}> = ({ isOpen, onClose, activeChip, filteredProjects, chips, setActiveChip, onSelectProject }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      // Only restore scroll if the detail modal is not active either
      // (checking if any modal elements are active before unlocking body)
      const detailActive = document.querySelector('[class*="z-[200]"]');
      if (!detailActive) {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.08 } }}
            className="relative w-full min-h-screen bg-white z-10"
          >
            {/* Modal Header */}
            <div
              className="sticky top-0 bg-white z-30 flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 md:px-8 py-5"
              style={{ borderBottom: "1px solid rgba(143,0,13,0.15)" }}
            >
              <div className="flex items-center justify-between w-full md:w-auto">
                <h3 className="font-got text-[#8F000D]" style={{ fontSize: "1.4rem", letterSpacing: "0.05em" }}>
                  ALL PROJECTS
                </h3>
                <button
                  onClick={onClose}
                  className="block md:hidden font-got text-[#8F000D] cursor-pointer hover:opacity-70 transition-opacity"
                  style={{ fontSize: "20px", lineHeight: 1, padding: "0 4px" }}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Filter chips inside modal */}
              <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <button
                    key={chip.value}
                    onClick={() => setActiveChip(chip.value)}
                    className="font-got cursor-pointer transition-all duration-200"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      padding: "4px 14px",
                      border: "1px solid #8F000D",
                      background: activeChip === chip.value ? "#8F000D" : "transparent",
                      color: activeChip === chip.value ? "#fff" : "#8F000D",
                    }}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Desktop close button */}
              <button
                onClick={onClose}
                className="hidden md:block font-got text-[#8F000D] cursor-pointer hover:opacity-70 transition-opacity"
                style={{ fontSize: "20px", lineHeight: 1, padding: "0 4px" }}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal body – all banner cards */}
            <div className="relative px-8 py-10 overflow-hidden">
              <img
                src={starkLogo}
                alt=""
                aria-hidden
                draggable={false}
                className="absolute pointer-events-none select-none"
                style={{
                  width: "400px",
                  top: "50%",
                  left: "-60px",
                  transform: "translateY(-50%)",
                  opacity: 0.06,
                  filter: "grayscale(100%)",
                  zIndex: 0,
                }}
              />

              {filteredProjects.length === 0 ? (
                <p className="font-got text-center text-gray-400 py-12" style={{ fontSize: "13px", letterSpacing: "0.1em" }}>
                  NO PROJECTS IN THIS CATEGORY
                </p>
              ) : (
                <div className="relative z-10 flex flex-wrap justify-center gap-10">
                  {filteredProjects.map((project, index) => (
                    <BannerCard
                      key={`modal-project-${index}`}
                      index={index}
                      {...project}
                      onDetail={() => onSelectProject(project)}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ─────────────────────────────────────────────
// Filter chips config
// ─────────────────────────────────────────────
const chips = [
  { label: "ALL", value: "general" },
  { label: "DATA ANALYST", value: "data_analis" },
  { label: "VIDEO EDITOR", value: "video_editor" },
  { label: "APPLICATION", value: "programmer" },
];

// ─────────────────────────────────────────────
// Works section
// ─────────────────────────────────────────────
const Works = () => {
  const { pathname } = useLocation();
  const initialRole = getRoleFromPath(pathname);
  const [activeChip, setActiveChip] = useState<string>(initialRole);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);

  useEffect(() => {
    setActiveChip(initialRole);
  }, [initialRole]);

  const filteredProjects =
    activeChip === "general"
      ? projects
      : projects.filter((p) => p.category === activeChip);

  const visibleProjects = filteredProjects.slice(0, 3);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  const openDetail = useCallback((p: TProject) => setSelectedProject(p), []);
  const closeDetail = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      {/* ── Works Section ── */}
      <div
        id="works"
        className="relative bg-white overflow-hidden pt-16 pb-20 px-10 md:px-24 lg:px-32"
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
        }}
      >
        <span className="hash-span">&nbsp;</span>

        {/* ── Stark Wolf – LEFT ── */}
        <img
          src={starkLogo} alt="" draggable={false} aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{
            width: "52vw", maxWidth: "720px",
            top: "50%", left: "-6vw",
            transform: "translateY(-52%)",
            opacity: 0.1, filter: "grayscale(100%)", zIndex: 0,
          }}
        />

        {/* ── Stark Wolf – RIGHT ── */}
        <img
          src={starkLogo} alt="" draggable={false} aria-hidden="true"
          className="absolute pointer-events-none select-none"
          style={{
            width: "32vw", maxWidth: "460px",
            top: "50%", right: "-5vw",
            transform: "translateY(-44%) scaleX(-1)",
            opacity: 0.07, filter: "grayscale(100%)", zIndex: 0,
          }}
        />

        {/* ── Number 03 ── */}
        <div
          className="absolute font-brush select-none pointer-events-none z-0 leading-none"
          style={{
            fontSize: "clamp(100px, 16vw, 240px)",
            color: "transparent",
            WebkitTextStroke: "5px rgba(143, 0, 13, 0.13)",
            bottom: "20px", left: "60px",
          }}
        >
          03
        </div>

        {/* ── Header row ── */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="font-got text-[#8F000D]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.05em" }}
            >
              MY WORK
            </motion.h2>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.25,
                    delayChildren: 0.15,
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#8F000D] mt-4 max-w-2xl text-[16px] md:text-[18px] leading-[1.8] font-light"
            >
              {(() => {
                const text = roleConfigs[initialRole]?.worksContent ??
                  "A selection of recent projects across web development, data analysis, and video production.";
                
                // If it contains the long string, split by sentence to animate it sequentially.
                if (text.includes("These projects highlight")) {
                  return (
                    <>
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="inline"
                      >
                        These projects highlight my comprehensive skills in video editing, motion graphics, visual design, and web development.{" "}
                      </motion.span>
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="inline"
                      >
                        Click on a project to explore a detailed example.{" "}
                      </motion.span>
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, y: 15 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="inline"
                      >
                        Please note that some works are not publicly displayed due to client confidentiality or sensitive internal data.
                      </motion.span>
                    </>
                  );
                }

                // Fallback for other role types
                return (
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="inline"
                  >
                    {text}
                  </motion.span>
                );
              })()}
            </motion.div>
          </div>

          {/* Filter chips */}
          <motion.div
            initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
            className="flex gap-[6px] flex-wrap self-start md:mt-4"
          >
            {chips.map((chip) => (
              <button
                key={chip.value}
                onClick={() => setActiveChip(chip.value)}
                className="font-got cursor-pointer transition-all duration-200"
                style={{
                  fontSize: "10px", letterSpacing: "0.12em",
                  padding: "5px 15px",
                  border: "1px solid #8F000D",
                  background: activeChip === chip.value ? "#8F000D" : "transparent",
                  color: activeChip === chip.value ? "#ffffff" : "#8F000D",
                }}
              >
                {chip.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Max 3 Banner Cards ── */}
        <div className="relative z-10 mt-14 flex flex-wrap justify-center gap-10">
          {visibleProjects.map((project, index) => (
            <BannerCard
              key={`project-${index}`}
              index={index}
              {...project}
              onDetail={() => openDetail(project)}
            />
          ))}
        </div>

        {/* ── VIEW ALL PROJECTS button ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }} viewport={{ once: true }}
          className="relative z-10 mt-14 flex justify-center"
        >
          <motion.button
            onClick={openModal}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="font-got cursor-pointer relative overflow-hidden group"
            style={{
              fontSize: "11px", letterSpacing: "0.15em",
              padding: "12px 40px",
              border: "1px solid #8F000D",
              color: "#8F000D", background: "transparent",
            }}
          >
            <span
              className="absolute inset-0 bg-[#8F000D] transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0"
              aria-hidden="true"
            />
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              VIEW ALL PROJECTS ({Math.max(0, filteredProjects.length - 3)} more)
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* ── All Projects Modal ── */}
      <ProjectsModal
        isOpen={modalOpen}
        onClose={closeModal}
        activeChip={activeChip}
        filteredProjects={filteredProjects}
        chips={chips}
        setActiveChip={setActiveChip}
        onSelectProject={(p) => { openDetail(p); }}
      />

      {/* ── Project Detail Modal ── */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={closeDetail}
      />
    </>
  );
};

export default Works;
