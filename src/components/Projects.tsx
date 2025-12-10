import { TbBrandGithub, TbLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import { projects } from "../lib/projects";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section className="bg-[#162C42] py-20 px-5 space-y-5" id="projects">
      <span className="tracking-[3px] block text-[10px] font-semibold text-center text-gray-2">
        PROJECTS
      </span>
      <p className="font-semibold text-center text-lg">
        Check Out Some of My Recent Work
      </p>

      <div className="pt-3 flex flex-col gap-3">
        {projects.map(
          ({ description, image, link, githubUrl, stacks, title }) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.4 }}
              viewport={{ amount: 0.4, once: true }}
              key={title}
              className="border border-gray-2/20 rounded-2xl p-5 bg-black-2 flex flex-col md:flex-row gap-5"
            >
              <div className="flex-[1] rounded-xl overflow-hidden">
                <img
                  src={image}
                  className="object-cover h-[100%]"
                  alt={title}
                />
              </div>
              <div className="flex flex-col flex-[2] space-y-3 gap-10 ustify-between">
                <div className="flex flex-col space-y-3">
                  <h1 className="font-normal md:font-medium text-xl md:text-3xl">
                    {title}
                  </h1>
                  <p className="text-sm md:text-base">{description}</p>
                  <div className="flex items-center gap-3">
                    {stacks.map((stack) => (
                      <span
                        className="py-2 px-4 rounded-full border font-light text-sm overflow-hidden"
                        key={stack}
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-5 mb-0">
                  <Link
                    to={githubUrl}
                    target="_blank"
                    className="font-light flex items-center gap-1 border-b"
                  >
                    <TbBrandGithub /> Github
                  </Link>
                  <Link
                    to={link}
                    target="_blank"
                    className="font-light flex items-center gap-1 border-b"
                  >
                    <TbLink /> Live url
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
