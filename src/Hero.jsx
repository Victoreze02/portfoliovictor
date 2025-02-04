import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImage from "./Victor2.jpg"; // Import your image

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImage} alt="Profile" className="hero-image" />
        <div className="hero-text">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I am Ezemokwe Victor 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Frontend Developer | React Enthusiast
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
