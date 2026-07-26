import { motion } from "motion/react";
import { scrollTo } from "../lib/utils";

const Hero = () => {
  return (
    <section
      className="bg-bg min-h-screen grid place-items-center relative overflow-hidden"
      id="home"
    >
      {/* Cinematic gradient mesh */}
      <div className="absolute inset-0 vignette">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[#1a1418] rounded-full blur-[180px] opacity-60" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-[#141210] rounded-full blur-[150px] opacity-50" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0d1117] rounded-full blur-[200px] opacity-40" />
      </div>

      {/* Subtle horizontal rule accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/20 to-transparent" />

      <div className="relative z-10 w-[90%] max-w-5xl mx-auto text-center space-y-8 md:space-y-10">
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block font-mono text-[10px] md:text-[11px] font-medium tracking-[5px] uppercase text-text-muted">
            Fullstack Developer &bull; AI Engineer
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display font-semibold text-[2.5rem] md:text-6xl lg:text-[5.5rem] text-text-primary leading-[1.08] tracking-tight"
        >
          Building at the intersection
          <br className="hidden md:block" /> of{" "}
          <span className="italic text-text-secondary">design</span> and{" "}
          <span className="italic text-text-secondary">engineering</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full md:w-[60%] mx-auto text-text-muted text-sm md:text-base leading-relaxed font-light"
        >
          I'm Benjamin Likita — a full-stack developer and AI engineer building
          with Next.js, Go, and modern cloud infrastructure. Currently on
          industrial training, open to opportunities.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-accent text-white py-3 px-7 font-body font-semibold text-sm transition-all duration-300 cursor-pointer"
            onClick={() => scrollTo("contact")}
          >
            Get in touch
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("projects")}
            className="border border-border/60 text-text-secondary hover:text-text-primary py-3 px-7 font-body font-medium text-sm transition-all duration-300 cursor-pointer"
          >
            View work
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="hidden md:flex flex-col items-center pt-16"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-border-light to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
