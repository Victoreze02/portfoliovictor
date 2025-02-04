import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projectList = [
  <a href="https://www.theextraordinarychurch.org" target="_blank">The Extraordinary Church</a> ,
  <a href="https://technical-writing-one.vercel.app/" target="_blank">Technical writing Blog</a>,
  
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {projectList.map((project, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {project}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Projects;
