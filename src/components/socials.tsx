import { socials } from "../lib/socials";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-border/20 overflow-hidden">
      {socials.map((social, idx) => (
        <motion.div
          key={social.title}
          viewport={{ once: true, amount: 0.5 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: idx * 0.08, duration: 0.4 }}
        >
          <Link
            to={social.link}
            target="_blank"
            className="group bg-bg-surface flex items-center justify-center p-5 gap-3 transition-all duration-300 cursor-pointer hover:bg-bg-elevated h-full"
          >
            <social.icon
              size={18}
              strokeWidth="1.5"
              className="text-text-muted group-hover:text-text-secondary transition-colors duration-300"
            />
            <span className="font-mono text-[11px] font-medium text-text-muted group-hover:text-text-secondary transition-colors duration-300 tracking-wide">
              {social.title}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
