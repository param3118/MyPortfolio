import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- Import project data ---
import { featuredProjects } from "../data/projectsData"; 
// -----------------------------------------------

// Function to calculate carousel card position
const calculateLinearPosition = (index, currentIndex, totalCards) => {
  const offset = index - currentIndex;
  const x = offset * 250;
  const scale = offset === 0 ? 1.15 : 0.9;
  const zIndex = offset === 0 ? 20 : 5 - Math.abs(offset);
  const blur = offset === 0 ? "none" : `blur(${Math.abs(offset) * 2}px)`;
  const opacity = Math.abs(offset) > 1 ? 0 : 1;
  return { x, scale, zIndex, blur, opacity };
};

const Projects = ({ isDarkMode, onViewAllProjects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // --- Styles ---
  const lightGradient = "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100";
  const darkGradient = "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const paragraphColor = isDarkMode ? "text-slate-400" : "text-slate-600";
  const cardBgLight = "bg-gradient-to-br from-white via-slate-50 to-blue-50";
  const cardBgDark = "bg-gradient-to-br from-slate-800 via-slate-800/80 to-blue-950/30";
  const cardHeadingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const cardTextColor = isDarkMode ? "text-slate-300" : "text-slate-700";

  const primaryButtonClasses = `py-2 px-4 rounded-lg text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
      ? "bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-slate-900"
      : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 focus:ring-offset-white"
  }`;

  const secondaryButtonClasses = `py-2 px-4 rounded-lg text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
      ? "bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-slate-900"
      : "bg-slate-200 hover:bg-slate-300 text-slate-800 focus:ring-slate-400 focus:ring-offset-white"
  }`;

  const navButtonClasses = `p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 z-20 ${
    isDarkMode
      ? "bg-slate-700/90 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-slate-900"
      : "bg-white/70 hover:bg-white text-slate-700 focus:ring-blue-500 focus:ring-offset-white"
  } shadow-lg backdrop-blur-sm`;

  const primaryTagClasses = `px-2.5 py-1 rounded-full text-xs font-medium ${
    isDarkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"
  }`;

  const secondaryTagClasses = `px-2.5 py-1 rounded-full text-xs font-medium ${
    isDarkMode ? "bg-teal-900/50 text-teal-300" : "bg-teal-100 text-teal-800"
  }`;
  // -----------------------------------------------------------------

  // --- Carousel navigation ---
  const nextSlide = () => {
    if (featuredProjects.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
      setExpandedIndex(-1);
    }
  };

  const prevSlide = () => {
    if (featuredProjects.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
      setExpandedIndex(-1);
    }
  };

  const handleLearnMore = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  
  // Helper function to check if a link is valid (not empty or just '#')
  const isValidLink = (link) => link && link.length > 5 && link !== '#';

  // Helper function to ensure link has a protocol
  const formatLink = (link) => {
    if (!link) return '#';
    return link.match(/^[a-zA-Z]+:\/\//) ? link : `https://${link}`;
  };

  return (
    <section
      id="projects"
      className={`w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 ${
        isDarkMode ? darkGradient : lightGradient
      } overflow-hidden relative`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10 w-full"
      >
        <h2 className={`text-4xl font-bold mb-4 text-center ${headingColor}`}>Featured Projects</h2>

        {featuredProjects && featuredProjects.length > 0 ? (
          <div className="relative w-full max-w-6xl mx-auto h-[500px] flex items-center justify-center">
            {/* Previous */}
            <button
              className={`${navButtonClasses} absolute left-0 sm:left-4 md:-left-4 transform -translate-y-1/2 top-1/2`}
              onClick={prevSlide}
              aria-label="Previous Project"
            >
              ❮
            </button>

            {/* Carousel Cards */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {featuredProjects.map((project, index) => {
                const { x, scale, zIndex, blur, opacity } = calculateLinearPosition(
                  index,
                  currentIndex,
                  featuredProjects.length
                );

                const showGithub = isValidLink(project.github);
                const showDemo = isValidLink(project.link);

                return (
                  <motion.div
                    key={project.title + index}
                    layout
                    animate={{
                      x,
                      scale: expandedIndex === index ? 1.2 : scale,
                      height: expandedIndex === index ? '500px' : '384px',
                      zIndex: expandedIndex === index ? 30 : zIndex,
                      filter: expandedIndex === index ? "none" : blur,
                      opacity,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    // Card is a primary flex container for the fixed top/bottom layout
                    className={`absolute w-72 shadow-xl rounded-lg p-5 flex flex-col justify-between cursor-pointer ${
                      isDarkMode ? cardBgDark : cardBgLight
                    } overflow-hidden`}
                    onClick={() => expandedIndex !== index && handleLearnMore(index)}
                  >
                    
                    {/* TOP FIXED CONTENT: Title, Short Desc, Tags */}
                    <div className="w-full flex-shrink-0">
                      <h4 className={`text-xl font-bold mb-2 ${cardHeadingColor}`}>{project.title}</h4>
                      <p className={`text-sm mb-4 ${cardTextColor}`}>{project.description}</p>
                      
                      {/* Base Tags (always visible) */}
                      <div className="flex flex-wrap gap-2 mb-4">
                          {(project.technologies || []).slice(0, 5).map((tech, i) => (
                              <span key={i} className={i % 2 === 0 ? primaryTagClasses : secondaryTagClasses}>
                                  {tech}
                              </span>
                          ))}
                      </div>
                    </div>
                    
                    {/* MIDDLE SCROLLABLE SECTION */}
                    <div className={`flex-grow min-h-0 relative`}>
                        <AnimatePresence>
                            {expandedIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    // CRITICAL FIX: The expanded content itself is made scrollable and takes up the remaining space
                                    className={`absolute inset-0 space-y-3 pb-4 ${
                                      expandedIndex === index ? 'overflow-y-auto pr-2' : 'overflow-hidden'
                                    }`}
                                >
                                    
                                    {/* Separator inside the scrollable view */}
                                    <hr className={`my-2 ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`} />

                                    {/* Show Features/Highlights if available */}
                                    {(project.features && project.features.length > 0) && (
                                        <div>
                                            <h5 className={`font-semibold mb-1 text-sm ${cardHeadingColor}`}>Key Highlights:</h5>
                                            <ul className={`list-disc list-inside pl-1 text-sm space-y-1 ${cardTextColor}`}>
                                                {project.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {/* Show More Technologies if applicable */}
                                    {(project.technologies && project.technologies.length > 5) && (
                                        <div>
                                            <h5 className={`font-semibold mb-1 text-sm ${cardHeadingColor}`}>More Technologies:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(5).map((tech, i) => (
                                                    <span key={i+5} className={ (i+5) % 2 === 0 ? primaryTagClasses : secondaryTagClasses}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    
                                     {/* ---- FIXED: MOVED LINKS TO BE PART OF SCROLLABLE AREA INSTEAD OF BOTTOM ---- */}
                                     {/* This ensures they appear in the scrollable viewport */}
                                     {(showGithub || showDemo) && (
                                        <div className="flex gap-3 w-full pt-4 flex-shrink-0">
                                            {showGithub && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className={`${secondaryButtonClasses} flex-1`}
                                                    aria-label={`View ${project.title} on GitHub`}
                                                >
                                                    <FaGithub /> GitHub
                                                </a>
                                            )}
                                            {showDemo && (
                                                <a
                                                    href={formatLink(project.link)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className={`${primaryButtonClasses} flex-1`}
                                                    aria-label={`View live demo of ${project.title}`}
                                                >
                                                    <FaExternalLinkAlt /> Demo
                                                </a>
                                            )}
                                        </div>
                                     )}
                                     {/* -------------------------------------------------------------------------- */}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    {/* END MIDDLE SCROLLABLE SECTION */}

                    {/* BOTTOM FIXED SECTION: Learn More / Show Less Button */}
                    {/* This button stays fixed at the bottom of the card */}
                    <div className="w-full mt-4 space-y-2 flex flex-col items-center flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLearnMore(index);
                        }}
                        className={`${primaryButtonClasses} w-full`}
                      >
                        {expandedIndex === index ? "Show Less" : "Learn More"}
                      </button>
                    </div>
                    {/* END Fixed Bottom Section */}
                  </motion.div>
                );
              })}
            </div>

            {/* Next */}
            <button
              className={`${navButtonClasses} absolute right-0 sm:right-4 md:-right-4 transform -translate-y-1/2 top-1/2`}
              onClick={nextSlide}
              aria-label="Next Project"
            >
              ❯
            </button>
          </div>
        ) : (
          <p className={`text-center ${paragraphColor}`}>No featured projects to display yet.</p>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-10">
          <button
            onClick={onViewAllProjects} // Call the function passed from App.jsx
            className={`inline-block py-3 px-8 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-slate-900"
                : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 focus:ring-offset-slate-100"
            }`}
          >
            View All Assignments & Minor Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
