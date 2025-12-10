import { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/xmark-solid.svg";
import menu from "../assets/bars-solid.svg";
import { motion } from "motion/react";
import { scrollToContact } from "../lib/utils";

const Navbar = () => {
  const links = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "About", id: "about" },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-2 md:top-5 left-[2%] md:left-[10%] bg-gray-1 w-[95%] md:w-[80%] rounded-[50px] border border-gray-2 m-auto py-3 px-7 z-[30] flex justify-between items-center gap-5"
      >
        {/* <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-2 md:top-5 left-[50%] -translate-x-[50%] bg-gray-1 w-[95%] md:w-[80%] rounded-[50px] border border-gray-2 m-auto py-3 px-7 z-[30] flex justify-between items-center gap-5"> */}
        <h1 className="title font-bold text-white text-3xl md:text-5xl">
          benji
        </h1>
        <div className="flex-grow hidden md:flex justify-center items-center gap-10 font-semibold text-white">
          {links.map(({ name, id }) => (
            <Link
              key={name}
              to={""}
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-secondary transition-all duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
        {/* <Link to={""} className="bg-secondary text-white py-3 px-5 rounded-full font-semibold hidden md:inline-block">Reach out</Link> */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-secondary text-white py-3 px-5 rounded-full font-semibold hidden md:inline-block"
          onClick={scrollToContact}
        >
          Reach out
        </motion.button>
        {/* <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-secondary inline-block md:hidden py-3 px-5 rounded-full font-semibold" onClick={scrollToContact}>Reach out</motion.button> */}
        <div className="block md:hidden">
          {isOpen ? (
            <img
              src={close}
              className="size-[30px] cursor-pointer"
              alt="close"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src={menu}
              className="size-[30px] cursor-pointer"
              alt="menu"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </motion.nav>

      <div
        className={`fixed left-[50%] -translate-x-[50%] bg-gray-1 text-white font-medium text-xl space-y-5 w-[95%] md:w-[80%] rounded-3xl border border-gray-2 m-auto py-7 px-10 z-[30] transition-all duration-700 ${
          isOpen ? "top-20 opacity-100" : "top-[-100%] opacity-0"
        }`}
      >
        {links.map(({ name, id }) => (
          <Link
            key={name}
            to={""}
            onClick={() => {
              setIsOpen(false);
              const element = document.getElementById(id);
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hover:text-secondary hover:border-b-secondary mx-10 border-b block text-center transition-all duration-300"
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
