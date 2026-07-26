import { TbBrandGithub, TbLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import { projects } from "../lib/projects";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section className="bg-bg py-28 md:py-36 px-5 md:px-10 relative" id="projects">
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
            02 — Projects
          </span>
          <p className="font-display text-3xl md:text-4xl text-text-primary">
            Selected work
          </p>
        </motion.div>

        <div className="space-y-4">
          {projects.map(
            ({ description, image, link, tools, title, role, year }, idx) => (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ amount: 0.2, once: true }}
                key={title}
                className="group relative bg-bg-surface border border-border/30 overflow-hidden transition-all duration-500 hover:border-border/60"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative w-full md:w-[45%] h-56 md:h-auto overflow-hidden bg-bg-elevated">
                    <img
                      src={image}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                      alt={title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-surface/50 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 to-transparent md:hidden" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-text-muted tracking-wider">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-text-primary">
                          {title}
                        </h3>
                      </div>
                      {role && (
                        <p className="font-mono text-[10px] text-text-muted/60 tracking-wide uppercase">
                          {role} {year && `· ${year}`}
                        </p>
                      )}
                      <p className="text-text-muted text-sm leading-relaxed max-w-lg">
                        {description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        {tools.map((tool) => (
                          <span
                            className="font-mono py-1 px-2.5 bg-bg-elevated border border-border/30 text-[9px] text-text-muted tracking-wide"
                            key={tool}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5">
                        <Link
                          to={link}
                          target="_blank"
                          className="font-mono text-xs text-text-muted hover:text-text-primary flex items-center gap-1.5 transition-colors duration-300"
                        >
                          <TbLink size={14} /> Live
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
