import Navigation from "../components/Navigation";
import About from "../components/About";
import Links from "../components/Links";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useState } from "react";
import { motion } from "framer-motion";

const colors = [
  "#b4befe",
  "#89b4fa",
  "#74c7ec",
  "#89dceb",
  "#94e2d5",
  "#a6e3a1",
  "#f9e2af",
  "#fab387",
  "#eba0ac",
  "#f38ba8",
  "#cba6f7",
  "#f5c2e7",
  "#f2cdcd",
  "#f5e0dc",
];

export default function Home() {
  const [page, setPage] = useState(0);

  const pages = [<About />, <Skills />, <Projects />, <Links />];

  return (
    <div className="bg-Base w-screen h-screen text-text font-mono">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <motion.div>
          <div className="font font-bold text-6xl mb-12 flex flex-row">
            <p>masked</p>
            <p className={`text-[#b4befe]`}>.</p>
            <p>design</p>
          </div>
        </motion.div>

        {pages[page]}
        <Navigation pageFunction={setPage} />
      </div>
    </div>
  );
}
