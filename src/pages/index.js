import Navigation from "../components/Navigation";
import About from "../components/About";
import Links from "../components/Links";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  <About key="about" />,
  <Skills key="skills" />,
  <Projects key="projects" />,
  <Links key="links" />,
];

const variants = {
  enter: (direction) => {
    return {
      x: -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: 1000,
      opacity: 0,
    };
  },
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);

  console.log(direction);

  const paginate = (newPage) => {
    setPage([newPage, newPage - page]);
  };

  return (
    <div className="bg-Base w-full h-full text-text font-mono overflow-auto sm:overflow-hidden">
      <div className="w-screen h-screen flex flex-col sm:justify-center items-center">
        <div className="font font-bold text-6xl flex flex-col items-center sm:flex-row mt-12">
          <p>masked</p>
          <p
            className={`text-[#b4befe] leading-3 mb-8 sm:mb-0 sm:leading-none`}
          >
            .
          </p>
          <p>design</p>
        </div>
        <AnimatePresence exitBeforeEnter={true}>
          <motion.div
            key={page}
            variants={variants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {pages[page]}
          </motion.div>
        </AnimatePresence>
        <Navigation pageFunction={paginate} />
      </div>
    </div>
  );
}
