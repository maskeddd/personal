import Navigation from "../components/Navigation";
import About from "../components/About";
import Links from "../components/Links";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spotify from "../components/Spotify";

const pages = [
  <About key="about" />,
  <Skills key="skills" />,
  <Projects key="projects" />,
  <Links key="links" />,
  <Spotify key="spotify" />,
];

const variants = {
  enter: () => {
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
  exit: () => {
    return {
      zIndex: 0,
      x: 1000,
      opacity: 0,
    };
  },
};

export default function Home() {
  const [page, setPage] = useState(0);

  const paginate = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="bg-Base w-full h-full text-text font-mono overflow-auto sm:overflow-hidden">
      <div className="w-screen h-screen flex flex-col sm:justify-center items-center gap-12 mt-12 sm:mt-0">
        <div className="font font-bold text-6xl flex flex-col items-center sm:flex-row order-1 select-none">
          <p>masked</p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            rel="noreferrer"
            target="_blank"
            className="text-[#b4befe] leading-3 mb-8 sm:mb-0 sm:leading-none"
          >
            .
          </a>
          <p>design</p>
        </div>
        <AnimatePresence exitBeforeEnter={true}>
          <motion.div
            className="sm:h-80 flex sm:items-center order-3 sm:order-2"
            key={page}
            variants={variants}
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
        <div className="order-2 sm:order-3">
          <Navigation pageFunction={paginate} />
        </div>
      </div>
    </div>
  );
}
