import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";

// ─────────────────────────────────────────────
// Animated Glassmorphic Menu Trigger Button
// ─────────────────────────────────────────────
interface MenuButtonProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  scrolled: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ toggle, setToggle, scrolled }) => {
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    // Show 'MENU' word for 2.2 seconds on load, then morph to hamburger lines
    const timer = setTimeout(() => {
      setShowHamburger(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.button
      onClick={() => setToggle(!toggle)}
      className={`relative px-4 py-3 rounded-xl transition-all duration-300 border flex items-center justify-center font-got font-semibold text-xs tracking-wider z-20 outline-none select-none ${
        scrolled
          ? "bg-[#FBFBE2]/30 backdrop-blur-md shadow-md border-[#8F000D]/20 text-[#8F000D]"
          : "bg-white/10 backdrop-blur-sm border-white/20 text-[#D4AF37]"
      }`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait">
        {!showHamburger ? (
          <motion.span
            key="menu-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            MENU
          </motion.span>
        ) : (
          <motion.div
            key="hamburger-lines"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col gap-[5px] w-6 h-5 justify-center items-center"
          >
            {/* Top Line */}
            <motion.span
              animate={toggle ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`w-5 h-[2px] rounded-full ${scrolled ? "bg-[#8F000D]" : "bg-[#D4AF37]"}`}
            />
            {/* Middle Line */}
            <motion.span
              animate={toggle ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`w-5 h-[2px] rounded-full ${scrolled ? "bg-[#8F000D]" : "bg-[#D4AF37]"}`}
            />
            {/* Bottom Line */}
            <motion.span
              animate={toggle ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className={`w-5 h-[2px] rounded-full ${scrolled ? "bg-[#8F000D]" : "bg-[#D4AF37]"}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle transparent vs solid background
      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        if (currentScrollY === 0) setActive("");
      }

      // Handle hide/show on scroll direction (desktop only)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: (!isMobile && hidden) ? "-100%" : "0%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.paddingX
        } fixed top-0 z-50 flex w-full items-center py-5 transition-colors duration-300 ${
          scrolled && !isMobile ? "bg-[#FBFBE2]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <p className="flex cursor-pointer text-[22px] tracking-wider font-got text-[#8F000D] uppercase hover:tracking-[0.18em] transition-all duration-300">
              Muslih Sahmat
            </p>
          </Link>
        </motion.div>

        <ul className="hidden list-none flex-row gap-10 lg:flex">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: "easeOut" }}
              className={`${active === nav.id ? "text-[#8F000D] font-bold" : "text-[#8F000D]/80"
                } cursor-pointer text-[14px] font-got tracking-wide hover:text-[#8F000D] hover:tracking-[0.25em] transition-all duration-300`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger container block - transparent navbar, glassmorphic box only around the icon */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <MenuButton toggle={toggle} setToggle={setToggle} scrolled={scrolled} />

          {/* Staggered Glassmorphic Dropdown List */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute right-0 top-20 z-10 mx-4 my-2 min-w-[170px] rounded-2xl p-6 shadow-xl border border-white/20 bg-[#FBFBE2]/75 backdrop-blur-lg"
              >
                <motion.ul 
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-1 list-none flex-col items-start gap-4"
                >
                  {navLinks.map((nav) => (
                    <motion.li
                      key={nav.id}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                      }}
                      className={`font-got cursor-pointer text-[14px] tracking-wide ${active === nav.id ? "text-[#8F000D] font-bold" : "text-[#8F000D]/80"
                        } hover:tracking-[0.25em] transition-all duration-300`}
                      onClick={() => {
                        setToggle(false);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
