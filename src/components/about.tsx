import { motion } from "motion/react";
import Socials from "./socials";

const About = () => {
  return (
    <section className="bg-bg py-28 md:py-36 px-5 md:px-10 relative" id="about">
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
            03 — About
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Photo */}
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto flex justify-center md:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/[0.02] blur-[60px] scale-125" />
              <div className="relative p-[1px] bg-gradient-to-br from-border-light/40 via-transparent to-border-light/20">
                <img
                  src="./profile_pic.jpeg"
                  className="w-40 h-40 md:w-52 md:h-52 object-cover border-[3px] border-bg"
                  alt="Benjamin Likita"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            viewport={{ once: true, amount: 0.3 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
              A developer with a passion for
              <br className="hidden md:block" />
              <span className="italic text-text-secondary">
                {" "}
                building things that matter
              </span>
            </h2>

            <div className="space-y-4 text-text-muted text-sm md:text-[15px] leading-[1.7] max-w-2xl">
              <p>
                I'm a 400-level Computer Science student at FUTMinna, currently
                on industrial training. I build full-stack applications with
                Next.js, Vite, and TanStack Start on the frontend, and Express,
                NestJS, and Go on the backend.
              </p>
              <p>
                I've been deep into AI engineering — specifically building RAG
                pipelines and LLM-powered applications. Combined with experience
                in Cloudflare, AWS, Docker, and modern databases, I enjoy
                shipping products that solve real problems.
              </p>
              <p>
                When I'm not coding, I'm probably gaming, watching anime, or
                exploring the next thing that catches my curiosity. I'm open to
                freelance work, collaborations, and full-time roles.
              </p>
            </div>
          </motion.div>
        </div>

        <Socials />
      </div>
    </section>
  );
};

export default About;
