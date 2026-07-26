import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../assets/xmark-solid.svg";
import menu from "../assets/bars-solid.svg";
import { motion, AnimatePresence } from "motion/react";
import { scrollTo } from "../lib/utils";

const sections = [
  { name: "Home", id: "home" },
  { name: "Stack", id: "stack" },
  { name: "Projects", id: "projects" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      });

      const current = offsets.reduce(
        (closest, section) => {
          if (section.top <= 150 && section.top > closest.top) return section;
          return closest;
        },
        { id: "home", top: -Infinity },
      );

      setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollTo = useCallback((id: string) => {
  //   setIsOpen(false);
  //   const el = document.getElementById(id);
  //   if (el) el.scrollIntoView({ behavior: "smooth" });
  // }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-4 left-0 md:left-[45%] -translate-x-1/2 w-full md:w-[92%] md:w-[68%] border py-3 px-6 z-[30] flex justify-between items-center gap-5 transition-all duration-500 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-xl border-border/40 shadow-xl shadow-black/30"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link
          to="/"
          className="font-mono font-bold text-text-primary text-lg tracking-tight"
        >
          BENJI<span className="text-accent">.</span>
        </Link>

        <div className="flex-grow hidden md:flex justify-center items-center gap-1 font-body text-[13px] font-medium">
          {sections.map(({ name, id }) => (
            <button
              key={name}
              onClick={() => scrollTo(id)}
              className={`px-3 py-1.5 transition-all duration-300 cursor-pointer ${
                activeSection === id
                  ? "text-text-primary bg-bg-elevated"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="block md:hidden">
          {isOpen ? (
            <img
              src={close}
              className="size-5 cursor-pointer brightness-0 invert opacity-70"
              alt="close"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src={menu}
              className="size-5 cursor-pointer brightness-0 invert opacity-70"
              alt="menu"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 left-2 right-2 bg-bg-surface/95 backdrop-blur-2xl text-white font-body font-medium border border-border/30 py-5 px-6 z-[30]"
          >
            <div className="flex flex-col gap-0.5">
              {sections.map(({ name, id }) => (
                <button
                  key={name}
                  onClick={() => {
                    scrollTo(id);
                    setIsOpen(false);
                  }}
                  className={`py-2.5 px-4 transition-all duration-200 text-left text-[15px] cursor-pointer ${
                    activeSection === id
                      ? "text-text-primary bg-bg-elevated"
                      : "text-text-muted hover:text-text-secondary hover:bg-bg-elevated/50"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
