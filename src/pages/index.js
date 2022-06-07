import Navigation from "../components/Navigation";
import About from "../components/About";
import Links from "../components/Links";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Spotify from "../components/Spotify";

const pages = [
  <About key="about" />,
  <Skills key="skills" />,
  <Projects key="projects" />,
  <Links key="links" />,
  <Spotify key="spotify" />,
];

const variants = {
  enter: {
    x: -1000,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    x: 1000,
    opacity: 0,
  }
};

export default function Home() {
  const [page, setPage] = useState(0),
    controls = useAnimation();

  useEffect(() => void controls.start("center"), [])

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
        <AnimatePresence>
          <motion.div
            className="sm:h-80 flex sm:items-center order-3 sm:order-2"
            variants={variants}
            initial="enter"
            animate={controls}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {pages[page]}
          </motion.div>
        </AnimatePresence>
        <div className="order-2 sm:order-3">
          <Navigation page={page} setPage={setPage} controls={controls} />
        </div>
      </div>
    </div>
  );
}
