import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define calculateLinearPosition function
const calculateLinearPosition = (index, currentIndex, totalCards) => {
  const offset = index - currentIndex;
  const x = offset * 250; // Horizontal spacing between cards
  const scale = offset === 0 ? 1.15 : 0.9; // Adjusted scale for focus
  const zIndex = offset === 0 ? 10 : 5; // Adjusted z-index for focus
  const blur = offset === 0 ? "none" : "blur(4px)"; // Adjust blur for non-focused cards
  const opacity = Math.abs(offset) > 1 ? 0 : 1; // Hide cards far away

  return { x, scale, zIndex, blur, opacity };
};

const Projects = ({ isDarkMode, projects, toggleManageProjects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setExpandedIndex(-1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setExpandedIndex(-1);
  };

  const handleLearnMore = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      id="projects"
      className="w-full min-h-[72vh] flex flex-col items-center justify-start p-6 pb-0 mt-0 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 overflow-auto"
    >
      <h3 className="text-4xl font-bold mb-6 text-center">My Projects</h3>

      <div className="relative w-full max-w-5xl h-96 flex items-center justify-center">
        <button
          className={`absolute left-0 z-10 p-3 rounded-full focus:outline-none 
            ${isDarkMode ? "bg-gray-700 text-gray-200 hover:bg-gray-600" : "bg-blue-600 text-white hover:bg-blue-500"} 
            transition duration-300 `}
          onClick={prevSlide}
        >
          ❮
        </button>

        <div className="relative w-full h-full flex items-center justify-center pt-5 overflow-hidden">
          {projects.map((project, index) => {
            const { x, scale, zIndex, blur, opacity } = calculateLinearPosition(
              index,
              currentIndex,
              projects.length
            );

            return (
              <motion.div
                key={index}
                layout
                animate={{
                  x,
                  scale: expandedIndex === index ? 1.3 : scale,
                  zIndex: expandedIndex === index ? 20 : zIndex,
                  filter: expandedIndex === index ? "none" : blur,
                  opacity,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute w-64 shadow-lg rounded-lg p-4 flex flex-col justify-between items-center
                  ${isDarkMode 
                    ? "bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 text-gray-100"
                    : "bg-gradient-to-t from-gray-100 via-gray-50 to-white text-gray-800"}
                  ${
                    expandedIndex === index 
                      ? "h-[480px] overflow-y-auto" 
                      : "h-80 overflow-hidden"
                  }`}
              >
                <motion.div layout className="w-full">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-center mb-4">{project.description}</p>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-semibold mb-1">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className={`px-2 py-1 rounded text-xs ${
                                  isDarkMode
                                    ? "bg-gray-600 text-gray-100"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {project.features && (
                          <div>
                            <h4 className="font-semibold mb-1">Features:</h4>
                            <ul className="list-disc pl-4 text-sm">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div layout className="w-full mt-4 space-y-2">
                  <button
                    onClick={() => handleLearnMore(index)}
                    className={`w-full py-2 rounded-lg text-sm font-bold 
                      ${isDarkMode 
                        ? "bg-blue-600 hover:bg-blue-500" 
                        : "bg-blue-500 hover:bg-blue-400"} 
                      transition duration-300 text-white`}
                  >
                    {expandedIndex === index ? "Show Less" : "Learn More"}
                  </button>

                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 py-2 rounded-lg text-sm font-bold text-center 
                            ${
                              isDarkMode
                                ? "bg-gray-600 hover:bg-gray-500"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        >
                          GitHub
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 py-2 rounded-lg text-sm font-bold text-center 
                            ${
                              isDarkMode
                                ? "bg-blue-600 hover:bg-blue-500"
                                : "bg-blue-500 hover:bg-blue-400"
                            } text-white`}
                        >
                          Live Demo
                        </a>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

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

export default Projects; // Ensure this is at the end of the file