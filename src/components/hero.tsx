import { motion } from "motion/react";
import { scrollToContact } from "../lib/utils";

const Hero = () => {
  return (
    <section
      className="bg-black-1 grid place-items-center pt-36 pb-24 md:py-52 relative overflow-hidden"
      id="home"
    >
      {/* doodles start */}
      <div className="absolute top-[60px] left-[1%] [30px] h-[40px] w-[80px] border border-[#131d27] rounded-t-full rotate-[-60deg]"></div>
      <div className="absolute top-[200px] left-[1%] [20px] size-[80px] bg-[#75797d] rounded-full"></div>
      <div className="absolute top-[400px] left-[2%] [50px] h-[60px] w-[25px] border border-[#131d27]"></div>
      <div className="absolute top-[200px] left-[13%] [250px] h-[20px] w-[7px] bg-[#513119]"></div>
      <div className="absolute top-[290px] left-[12%] [220px] size-[3px] bg-[#75797d] rounded-full"></div>
      <div className="absolute top-[380px] left-[13%] [250px] h-[4px] w-[50px] bg-[#513119]"></div>
      <div className="absolute top-[510px] left-[15%] [180px] size-[80px] border border-[#131d27] rounded-full before:absolute before:size-[80px] before:border before:border-[#131d27] before:rounded-full before:bottom-[30%] before:left-[30%]"></div>
      <div className="absolute top-[550px] left-[32%] [450px] size-[20px] bg-[#303c49]"></div>
      <div className="absolute top-[550px] left-[45%] [650px] h-[5px] w-[15px] bg-[#513119]"></div>
      <div className="absolute top-[500px] left-[60%] [850px] size-16 border border-[#303c49] before:size-16 before:absolute before:bg-[#513119] before:top-[30%] before:right-[30%]"></div>
      <div className="absolute top-[500px] left-[78%] [1050px] size-[20px] border border-[#303c49]"></div>
      <div className="absolute top-[420px] left-[90%] [1050px] size-[80px] border border-[#303c49]"></div>
      <div className="absolute top-[380px] left-[83%] [150px] size-[60px] bg-[#513119]"></div>
      <div className="absolute top-[350px] left-[95%] [20px] size-[30px] bg-[#75797d] rounded-full"></div>
      <div className="absolute top-[250px] left-[90%] [20px] size-[50px] border border-[#75797d] rounded-full"></div>
      <div className="absolute top-[200px] left-[83%] [150px] size-[10px] bg-[#513119]"></div>
      <div className="absolute top-[100px] left-[93%] [30px] h-[40px] w-[80px] bg-[#303c49] rounded-b-full rotate-[-30deg]"></div>
      {/* doodles end */}
      <div className="space-y-5 text-center w-[90%] m-auto z-0">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block rounded-full border border-gray-2 p-2 tracking-[3px] text-[8px] md:text-[10px] font-bold text-gray-2"
        >
          FULLSTACK DEVELOPER
        </motion.span>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-bold text-4xl md:text-5xl"
        >
          Benjamin Likita
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-[60%] text-center m-auto"
        >
          I transform ideas into digital realities, focusing on creating unique
          and engaging experiences for users.
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-secondary inline-block md:hidden py-3 px-5 rounded-full font-semibold"
          onClick={scrollToContact}
        >
          Reach out
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
