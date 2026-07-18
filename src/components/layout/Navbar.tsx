import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";

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
        } fixed top-0 z-50 flex w-full items-center py-5 transition-colors duration-300 ${scrolled ? "bg-[#FBFBE2]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
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

        <div className="flex flex-1 items-center justify-end lg:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            loading="lazy"
            className="h-[28px] w-[28px] object-contain filter invert"
            style={{ filter: "sepia(100%) saturate(2000%) hue-rotate(330deg) brightness(80%)" }}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } bg-[#FBFBE2] border border-[#8F000D]/20 absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6 shadow-lg`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-got cursor-pointer text-[14px] tracking-wide ${active === nav.id ? "text-[#8F000D] font-bold" : "text-[#8F000D]/80"
                    } hover:tracking-[0.25em] transition-all duration-300`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
