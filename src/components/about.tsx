import { motion } from "motion/react";
import Socials from "./socials";

const About = () => {
  return (
    <section className="bg-black-1 py-20 px-5 space-y-5" id="about">
      <div className="flex flex-col md:flex-row gap-5">
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="rounded-2xl p-5 bg-black-2 border border-gray-2/10 space-y-3 flex-[3]"
        >
          <span className="text-sm">👋Hey, I'm</span>
          <h1 className="text-3xl font-semibold">Benjamin Likita</h1>
          <div className="space-y-5 text-sm md:text-base">
            <p>
              I&apos;m a Computer Science student from Nigeria, currently interning
              at Partitie Innovation Hub. As a full-stack developer, I focus on
              building responsive and high-performing applications, leveraging
              React and Next.js on the frontend. I&apos;m also delving deeper into
              artificial intelligence, excited by its potential to transform
              industries and create impactful solutions.
            </p>

            <p>
              With solid experience in cloud technologies, databases, and
              programming languages like Python and TypeScript, I&apos;m always eager
              to collaborate on projects that drive real-world value. Outside of
              work, I enjoy playing online games, watching anime, and sharpening
              my skills through side projects and learning new technologies.
            </p>

            <p>
              I&apos;m open to connecting and working with like-minded individuals to
              bring innovative ideas to life!
            </p>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true, amount: 0.5 }}
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="rounded-2xl p-5 bg-black-2 border border-gray-2/10 space-y-3 flex-[2] grid place-items-center relative overflow-hidden"
        >
          {/* doodles start */}
          <div className="absolute top-[10%] [20px] left-[10%] [850px] size-10 border border-[#513119] before:size-10 before:absolute before:bg-[#303c49] before:top-[30%] before:right-[30%]"></div>
          <div className="absolute top-[10%] [20px] left-[80%] [30px] h-[40px] w-[80px] bg-[#303c49] rounded-b-full rotate-[-30deg]"></div>
          <div className="absolute top-[45%] [180px] left-[10%] [150px] size-[10px] bg-[#513119]"></div>
          <div className="absolute top-[70%] [240px] left-[10%] [30px] size-[40px] bg-[#303c49] rounded-full"></div>
          <div className="absolute top-[50%] [180px] right-[-2%] [150px] size-[50px] bg-[#513119] rotate-[45deg]"></div>
          <div className="absolute top-[80%] [300px] left-[80%] [30px] size-[40px] border border-[#303c49] rounded-full"></div>
          <div className="absolute bottom-[2%] left-[40%] [150px] h-[5px] w-[30px] bg-[#513119]"></div>
          {/* doodles end */}
          <img
            src="./profile_pic.jpeg"
            className="rounded-full w-[50%] border-[4px] border-[#513119] brightness-75"
            alt="profile_image"
          />
        </motion.div>
      </div>

      <Socials />
    </section>
  );
};

export default About;
