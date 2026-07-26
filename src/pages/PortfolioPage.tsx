import Navbar from "../components/navbar";
import { MotionConfig } from "motion/react";
import MyStack from "../components/myStack";
import Projects from "../components/projects";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";

const PortfolioPage = () => {
  return (
    <main className="text-white">
      <MotionConfig transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
        <Navbar />
        <Hero />
        <MyStack />
        <Projects />
        <About />
        <Contact />
      </MotionConfig>
    </main>
  );
};

export default PortfolioPage;
