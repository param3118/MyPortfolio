// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// --- Import project data from the new file ---
import { featuredProjects, academicProjects } from "../data/projectsData"; // Adjust path if necessary
// -----------------------------------------------

// Define calculateLinearPosition function (Keep as is from your previous code)
const calculateLinearPosition = (index, currentIndex, totalCards) => {
  const offset = index - currentIndex;
  const x = offset * 250;
  const scale = offset === 0 ? 1.15 : 0.9;
  const zIndex = offset === 0 ? 20 : 5 - Math.abs(offset);
  const blur = offset === 0 ? "none" : `blur(${Math.abs(offset) * 2}px)`;
  const opacity = Math.abs(offset) > 1 ? 0 : 1;
  return { x, scale, zIndex, blur, opacity };
};

const Projects = ({ isDarkMode,onViewAllProjects  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // --- Consistent Styles (Keep as is from your previous code) ---
  const lightGradient = "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100";
  const darkGradient = "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const paragraphColor = isDarkMode ? "text-slate-400" : "text-slate-600";
  const cardBgLight = "bg-gradient-to-br from-white via-slate-50 to-blue-50";
  const cardBgDark = "bg-gradient-to-br from-slate-800 via-slate-800/80 to-blue-950/30";
  const cardTextColor = isDarkMode ? "text-slate-300" : "text-slate-700";
  const cardHeadingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const primaryButtonClasses = `py-2 px-4 rounded-lg text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
    ? 'bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-slate-900'
    : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 focus:ring-offset-white'
  }`;
  const secondaryButtonClasses = `py-2 px-4 rounded-lg text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
    ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-slate-900'
    : 'bg-slate-200 hover:bg-slate-300 text-slate-800 focus:ring-slate-400 focus:ring-offset-white'
  }`;
  const navButtonClasses = `p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 z-20 ${
    isDarkMode
    ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-slate-900'
    : 'bg-white/70 hover:bg-white text-slate-700 focus:ring-blue-500 focus:ring-offset-white'
  } shadow-lg backdrop-blur-sm`;
  const primaryTagClasses = `px-2.5 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'}`;
  const secondaryTagClasses = `px-2.5 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-teal-900/50 text-teal-300' : 'bg-teal-100 text-teal-800'}`;
  // -----------------------------------------------------------------

  // --- REMOVE the hardcoded featuredProjects and academicProjects arrays from here ---
  // const featuredProjects = [ /* ... your old data ... */ ];
  // const academicProjects = [ /* ... your old data ... */ ];
  // -----------------------------------------------------------------------------------

  const nextSlide = () => {
    // Ensure featuredProjects is not empty before trying to access its length
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

  // The rest of your component's JSX and logic remains the same
  // It will now use the imported featuredProjects and academicProjects
  return (
    <section
      id="projects"
      className={`w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-12 ${isDarkMode ? darkGradient : lightGradient} overflow-hidden relative`}
    >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative z-10 w-full"
        >
            <h2 className={`text-4xl font-bold mb-4 text-center ${headingColor}`}>My Projects</h2>
            <p className={`text-lg mb-12 text-center max-w-2xl mx-auto ${paragraphColor}`}>
                A selection of projects I've worked on, showcasing different skills and technologies.
            </p>

            {/* Featured Projects Carousel */}
            {/* Check if featuredProjects has items before rendering carousel */}
            {featuredProjects && featuredProjects.length > 0 ? (
                <>
                    <h3 className={`text-2xl font-semibold mb-6 text-center ${headingColor}`}>Featured Work</h3>
                    <div className="relative w-full max-w-6xl mx-auto h-[500px] flex items-center justify-center mb-16">
                        <button className={`${navButtonClasses} absolute left-0 sm:left-4 md:-left-4 transform -translate-y-1/2 top-1/2`} onClick={prevSlide} aria-label="Previous Project">
                            ❮
                        </button>
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            {featuredProjects.map((project, index) => {
                                const { x, scale, zIndex, blur, opacity } = calculateLinearPosition(
                                    index,
                                    currentIndex,
                                    featuredProjects.length
                                );
                                return (
                                    <motion.div
                                        key={project.title + index}
                                        layout
                                        animate={{
                                            x,
                                            scale: expandedIndex === index ? 1.2 : scale,
                                            zIndex: expandedIndex === index ? 30 : zIndex,
                                            filter: expandedIndex === index ? "none" : blur,
                                            opacity,
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className={`absolute w-72 shadow-xl rounded-lg p-5 flex flex-col justify-between cursor-pointer ${isDarkMode ? cardBgDark : cardBgLight} ${expandedIndex === index ? 'h-[450px]' : 'h-96'} overflow-hidden`}
                                        onClick={() => expandedIndex !== index && handleLearnMore(index)}
                                    >
                                        <motion.div layout="position" className="w-full">
                                            <h4 className={`text-xl font-bold mb-2 ${cardHeadingColor}`}>{project.title}</h4>
                                            <p className={`text-sm mb-4 ${cardTextColor}`}>{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.slice(0, 5).map((tech, i) => (
                                                    <span key={i} className={i % 2 === 0 ? primaryTagClasses : secondaryTagClasses}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <AnimatePresence>
                                                {expandedIndex === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="space-y-3 overflow-hidden"
                                                    >
                                                        {project.features && project.features.length > 0 && (
                                                            <div>
                                                                <h5 className={`font-semibold mb-1 text-sm ${cardHeadingColor}`}>Features:</h5>
                                                                <ul className={`list-disc list-inside pl-1 text-sm space-y-1 ${cardTextColor}`}>
                                                                    {project.features.map((feature, i) => (
                                                                        <li key={i}>{feature}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {project.technologies.length > 5 && (
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
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                        <motion.div layout className="w-full mt-4 space-y-2 flex flex-col items-center">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleLearnMore(index); }}
                                                className={`${primaryButtonClasses} w-full`}
                                            >
                                                {expandedIndex === index ? "Show Less" : "Learn More"}
                                            </button>
                                            <AnimatePresence>
                                                {expandedIndex === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        transition={{ duration: 0.3, delay: 0.1 }}
                                                        className="flex gap-3 w-full"
                                                    >
                                                        {project.github && (
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
                                                        {project.link && (
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className={`${primaryButtonClasses} flex-1`}
                                                                aria-label={`View live demo of ${project.title}`}
                                                            >
                                                                <FaExternalLinkAlt /> Demo
                                                            </a>
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                        <button className={`${navButtonClasses} absolute right-0 sm:right-4 md:-right-4 transform -translate-y-1/2 top-1/2`} onClick={nextSlide} aria-label="Next Project">
                            ❯
                        </button>
                    </div>
                </>
            ) : (
                 <p className={`text-center ${paragraphColor}`}>No featured projects to display yet.</p>
            )}


            {/* Academic ML & NLP Projects Section */}
            {academicProjects && academicProjects.length > 0 ? (
                <div className="w-full max-w-6xl mx-auto mt-12">
                    <h3 className={`text-2xl font-semibold mb-6 text-center ${headingColor}`}>Academic & Other Projects</h3>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {academicProjects.map((project, index) => (
                            <motion.div
                                key={project.title + index + 'academic'}
                                className={`p-5 rounded-lg shadow-lg flex flex-col justify-between ${isDarkMode ? cardBgDark : cardBgLight}`}
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            >
                                <div>
                                    <h4 className={`text-lg font-bold mb-2 ${cardHeadingColor}`}>{project.title}</h4>
                                    <p className={`text-sm mb-4 ${cardTextColor}`}>{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className={i % 2 === 0 ? primaryTagClasses : secondaryTagClasses}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${secondaryButtonClasses} w-full mt-4`}
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                       <FaGithub /> View on GitHub
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            ) : (
                 <p className={`text-center ${paragraphColor}`}>No academic projects to display yet.</p>
            )}
        </motion.div>
        <div className="mt-12 text-center">
        <button
          onClick={onViewAllProjects} // Call the function passed from App.jsx
          className={`inline-block py-3 px-8 rounded-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDarkMode
              ? 'bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-slate-900'
              : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 focus:ring-offset-slate-100'
          }`}
        >
          View All Assignments & Minor Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
