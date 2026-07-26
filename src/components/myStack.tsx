import { stacks } from "../lib/stacks";
import { motion } from "motion/react";

const MyStack = () => {
  return (
    <section className="bg-bg py-28 md:py-36 px-5 md:px-10 relative" id="stack">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />

      <div className="max-w-5xl mx-auto space-y-14">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="font-mono text-[10px] font-medium tracking-[5px] uppercase text-text-muted">
            01 — Stack
          </span>
          <p className="font-display text-3xl md:text-4xl text-text-primary">
            Tools & technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-px bg-border/20 overflow-hidden"
        >
          {stacks.map(({ title, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              viewport={{ once: true }}
              className="group bg-bg-surface px-5 py-4 flex items-center gap-3 transition-all duration-300 hover:bg-bg-elevated cursor-default min-w-[140px] flex-1"
            >
              <Icon className="text-base text-text-muted group-hover:text-text-secondary transition-colors duration-300 shrink-0" />
              <span className="font-mono text-[11px] text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                {title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyStack;
