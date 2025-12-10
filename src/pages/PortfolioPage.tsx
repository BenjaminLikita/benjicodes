import Navbar from "../components/Navbar";
import { MotionConfig } from "motion/react";
import MyStack from "../components/MyStack";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

const PortfolioPage = () => {
  return (
    <main className="text-white">
      <MotionConfig transition={{ duration: 2, type: "spring", bounce: 0.6 }}>
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
