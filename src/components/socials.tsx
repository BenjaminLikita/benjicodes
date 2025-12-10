import { socials } from "../lib/socials";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
      {socials.map((social, idx) => (
        <motion.div
          key={social.name}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: idx / 5, type: "spring", bounce: 0.6 }}
        >
          <Link
            to={social.link}
            className="border border-gray-2/20 rounded-xl flex justify-center items-center p-5 gap-3 hover:scale-105 transition-all duration-300 cursor-pointer bg-black-2"
          >
            <social.icon size={30} strokeWidth="1" fill="transparent" />
            <p>{social.name}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
