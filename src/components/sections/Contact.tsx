import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { baratheonLogo } from "../../assets";

const MailIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="18" width="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="18" width="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const InstagramIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="18" width="18">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const ChatIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" height="18" width="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
    <line x1="9" y1="9" x2="15" y2="9" strokeLinecap="round" strokeLinejoin="round"></line>
    <line x1="9" y1="13" x2="15" y2="13" strokeLinecap="round" strokeLinejoin="round"></line>
  </svg>
);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.5 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#8F000D",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* ── WINTER IS COMING watermark ── sits flush at top */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full font-got select-none pointer-events-none text-center"
        style={{
          fontSize: "5.8vw",
          color: "white",
          opacity: 0.10,
          lineHeight: 1,
          letterSpacing: "0.04em",
          paddingTop: "1.5vw",
        }}
      >
        WINTER IS COMING
      </div>

      {/* ── Baratheon stag ── right side, responsive */}
      <motion.img
        src={baratheonLogo}
        alt=""
        draggable={false}
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        animate={inView ? { opacity: 0.95, x: 0, y: 0 } : { opacity: 0, x: 200, y: 200 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          height: "clamp(300px, 85%, 900px)",
          width: "auto",
          bottom: "-4%",
          right: "clamp(-60px, -2vw, 0px)",
          filter: "brightness(0)",
          zIndex: 0,
          objectFit: "contain",
        }}
      />

      {/* ── Main content layout ── */}
      <div
        className="relative z-10 flex flex-col justify-between"
        style={{
          minHeight: "100vh",
          padding: "clamp(60px, 12vw, 140px) clamp(20px, 6vw, 100px) clamp(30px, 5vw, 60px)",
        }}
      >
        {/* ── Top: headline + sub ── */}
        <div style={{ maxWidth: "clamp(260px, 48%, 600px)" }}>
          <h2
            className="font-got leading-tight drop-shadow"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 5rem)",
              letterSpacing: "0.01em",
              marginBottom: "clamp(12px, 2vw, 28px)",
            }}
          >
            LET'S BUILD<br />SOMETHING<br />TOGETHER.
          </h2>
          <p
            className="font-sans font-light leading-relaxed opacity-90"
            style={{ fontSize: "clamp(12px, 1.3vw, 16px)", maxWidth: "380px" }}
          >
            Available for freelance opportunities in development,<br className="hidden md:inline" />
            full stack application development, data analysis, and video production.
          </p>
        </div>

        {/* ── Bottom: social links + copyright ── */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end"
          style={{ gap: "clamp(16px, 3vw, 32px)", marginTop: "clamp(40px, 8vw, 100px)" }}
        >
          {/* Social Links */}
          <div
            className="flex flex-nowrap items-center"
            style={{ gap: "clamp(12px, 3vw, 48px)", fontSize: "clamp(10px, 1.2vw, 15px)" }}
          >
            <a
              href="mailto:sahmatmuslih@gmail.com"
              className="flex items-center gap-2 hover:opacity-60 transition-opacity font-sans font-light"
            >
              <MailIcon /> Mail
            </a>
            <a
              href="https://www.linkedin.com/in/moh-muslih-sahmat-4a1353250"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-60 transition-opacity font-sans font-light"
            >
              <LinkIcon /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/moh_sahmat"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-60 transition-opacity font-sans font-light"
            >
              <InstagramIcon /> Instagram
            </a>
            <a
              href="https://wa.me/+6285393913005"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-2 hover:opacity-60 transition-opacity font-sans font-light"
            >
              <ChatIcon /> WhatsApp
            </a>
          </div>

          {/* Copyright - centered on mobile, right on desktop */}
          <div className="w-full flex justify-center md:justify-end mt-8 md:mt-0">
            <p
              className="font-sans font-light opacity-60 text-center md:text-right"
              style={{ fontSize: "clamp(10px, 1.1vw, 13px)", lineHeight: 1.6 }}
            >
              © 2024 Muslih Sahmat. Built with Code and Vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
