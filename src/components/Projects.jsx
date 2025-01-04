import React, { useState } from "react"; // Add useState import here
import { motion } from "framer-motion";

const calculateLinearPosition = (index, currentIndex, totalCards) => {
  const offset = index - currentIndex;
  const x = offset * 250; // Horizontal spacing between cards
  const scale = offset === 0 ? 1.15 : 0.9; // Adjusted scale for focus
  const zIndex = offset === 0 ? 10 : 5; // Adjusted z-index for focus
  const blur = offset === 0 ? "none" : "blur(4px)"; // Adjust blur for non-focused cards
  const opacity = Math.abs(offset) > 1 ? 0 : 1; // Hide cards far away

  return { x, scale, zIndex, blur, opacity };
};

const Projects = ({ isDarkMode, projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 overflow-auto"
    >
      <h3 className="text-4xl font-bold mb-8 text-center">My Projects</h3>
      <div className="relative w-full max-w-5xl h-96 flex items-center justify-center">
        {/* Slider Controls */}
        <button
          className={`absolute left-0 z-10 p-3 rounded-full focus:outline-none 
            ${isDarkMode ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-blue-600 text-white hover:bg-blue-500"} 
            transition duration-300`}
          onClick={prevSlide}
        >
          ❮
        </button>

        {/* Cards */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {projects.map((project, index) => {
            const { x, scale, zIndex, blur, opacity } = calculateLinearPosition(index, currentIndex, projects.length);

            return (
              <motion.div
                key={index}
                animate={{
                  x,
                  scale,
                  zIndex,
                  filter: blur,
                  opacity,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute w-64 h-80 shadow-lg rounded-lg p-4 flex flex-col justify-between items-center
                  ${isDarkMode 
                    ? "bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 text-gray-100"
                    : "bg-gradient-to-t from-gray-100 via-gray-50 to-white text-gray-800"} 
                  transition-colors duration-500`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-center">{project.description}</p>
                <a
                  href={project.link}
                  className={`mt-4 px-4 py-2 rounded-lg text-sm font-bold 
                    ${isDarkMode 
                      ? "bg-blue-600 text-white hover:bg-blue-500" 
                      : "bg-blue-500 text-white hover:bg-blue-400"} 
                    transition duration-300`}
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Slider Controls */}
        <button
          className={`absolute right-0 z-10 p-3 rounded-full focus:outline-none 
            ${isDarkMode 
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600" 
              : "bg-blue-600 text-white hover:bg-blue-500"} 
            transition duration-300`}
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Projects;
