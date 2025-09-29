<<<<<<< HEAD
=======
// src/components/Skills.jsx
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaChevronLeft,
  FaChevronRight,
<<<<<<< HEAD
  FaChartLine,
  FaJava, // Added Java icon
  FaNetworkWired // Added for Networking/TCP
} from "react-icons/fa";
import { SiExpress,SiNumpy, SiPandas,SiMongodb, SiScikitlearn,SiCplusplus ,SiHuggingface, SiPytorch } from "react-icons/si"; // Added SiWebsockets
import { TbSql, TbRefreshDot } from "react-icons/tb"; // TbRefreshDot for concurrency/threading
import { BsTranslate } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi'
import { TbPlugConnected } from "react-icons/tb";
=======
  FaChartLine
} from "react-icons/fa";
import { SiExpress,SiNumpy, SiPandas,SiMongodb, SiScikitlearn,SiCplusplus ,SiHuggingface, SiPytorch } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import {  BsTranslate } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi'
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
// SPLIT SKILLS: first row dev, second row data-science
const devSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, glowColor: "rgba(234,88,12,0.6)" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, glowColor: "rgba(37,99,235,0.6)" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, glowColor: "rgba(250,204,21,0.6)" },
  { name: "React", icon: <FaReact className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, glowColor: "rgba(34,197,94,0.6)" },
  { name: "Express.js", icon: <SiExpress className="text-green-600" />, glowColor: "rgba(205, 182, 35, 0.6)" },
<<<<<<< HEAD
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
  { name: "SQL", icon: <TbSql className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "WebSockets", icon: <TbPlugConnected className="text-slate-500" />, glowColor: "rgba(100,116,139,0.6)" },
];

// Split DS skills into two rows for better fit
const dsRow1 = [
  { name: "Python", icon: <FaPython className="text-blue-500" />, glowColor: "rgba(59,130,246,0.6)" },
  { name: "NumPy", icon: <SiNumpy className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" },
  { name: "Pandas", icon: <SiPandas className="text-purple-500" />, glowColor: "rgba(168,85,247,0.6)" },
  { name: "MatPlotlib", icon: <FaChartLine className="text-green-500" />, glowColor: "rgba(34,197,94,0.6)" },
  { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-500" />, glowColor: "rgba(249,115,22,0.6)" },
];

const dsRow2 = [
  { name: "PyTorch", icon: <SiPytorch className="text-red-500" />, glowColor: "rgba(239,68,68,0.6)" },
  { name: "transformers", icon: <SiHuggingface className="text-yellow-500" />, glowColor: "rgba(234,179,8,0.6)" },
  { name: "NLTK", icon: <BsTranslate className="text-green-400" />, glowColor: "rgba(74,222,128,0.6)" },
  { name: "LLM", icon: <GiArtificialIntelligence className="text-purple-400" />, glowColor: "rgba(192,132,252,0.6)" },
  { name: "TensorFlow", icon: <SiHuggingface className="text-orange-500" />, glowColor: "rgba(249,115,22,0.6)" }, // Added TF for completeness
];

const csSkills = [
  { name: "C++", icon: <SiCplusplus className="text-blue-700" />, glowColor: "rgba(29,78,216,0.6)" },
  { name: "Java", icon: <FaJava className="text-red-500" />, glowColor: "rgba(239,68,68,0.6)" }, // Added Java
  { name: "Concurrency", icon: <TbRefreshDot className="text-teal-400" />, glowColor: "rgba(74,222,128,0.6)" }, // New
  { name: "Networking", icon: <FaNetworkWired className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" }, // New
  { name: "Operating Systems", icon: "💻", glowColor: "rgba(239,68,68,0.6)" },
  { name: "System Design", icon: "🏗️", glowColor: "rgba(192,132,252,0.6)" },
  { name: "Data Structures", icon: "📊", glowColor: "rgba(59,130,246,0.6)" },
  { name: "Algorithms", icon: "⚡", glowColor: "rgba(234,88,12,0.6)" },
  { name: "DBMS", icon: "🗃️", glowColor: "rgba(22,163,74,0.6)" },
];

// Combine all technical skills into one array for rendering two rows
const allTechSkills = [...devSkills, ...dsRow1, ...dsRow2];

const Skills = ({ isDarkMode }) => {
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
=======
  { name: "C++", icon: <SiCplusplus className="text-blue-700" />, glowColor: "rgba(29,78,216,0.6)" },
  { name: "SQL", icon: <TbSql className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
];

const dsSkills = [
  { 
    name: "Python", 
    icon: <FaPython className="text-blue-500" />, 
    glowColor: "rgba(59,130,246,0.6)" 
  },
  { 
    name: "NumPy", 
    icon: <SiNumpy className="text-blue-400" />, 
    glowColor: "rgba(96,165,250,0.6)" 
  },
  { 
    name: "Pandas", 
    icon: <SiPandas className="text-purple-500" />, 
    glowColor: "rgba(168,85,247,0.6)" 
  },
  { 
    name: "MatPlotlib", 
    icon: <FaChartLine className="text-green-500" />, 
    glowColor: "rgba(34,197,94,0.6)" 
  },
  { 
    name: "scikit-learn", 
    icon: <SiScikitlearn className="text-orange-500" />, 
    glowColor: "rgba(249,115,22,0.6)" 
  },
  { 
    name: "PyTorch", 
    icon: <SiPytorch className="text-red-500" />, 
    glowColor: "rgba(239,68,68,0.6)" 
  },
  { 
    name: "sklearn", 
    icon: <SiScikitlearn className="text-blue-500" />, 
    glowColor: "rgba(59,130,246,0.6)" 
  },
  { 
    name: "transformers", 
    icon: <SiHuggingface className="text-yellow-500" />, 
    glowColor: "rgba(234,179,8,0.6)" 
  },
  { 
    name: "NLTK", 
    icon: <BsTranslate className="text-green-400" />, 
    glowColor: "rgba(74,222,128,0.6)" 
  },
  { 
    name: "LLM", 
    icon: <GiArtificialIntelligence className="text-purple-400" />, 
    glowColor: "rgba(192,132,252,0.6)" 
  },
];
const coreSubjects = [
  { name: "Data Structures", icon: "📊", glowColor: "rgba(59,130,246,0.6)" },
  { name: "Algorithms", icon: "⚡", glowColor: "rgba(234,88,12,0.6)" },
  { name: "DBMS", icon: "🗃️", glowColor: "rgba(22,163,74,0.6)" },
  { name: "Computer Networks", icon: "🌐", glowColor: "rgba(168,85,247,0.6)" },
  { name: "Operating Systems", icon: "💻", glowColor: "rgba(239,68,68,0.6)" },
  { name: "OOPS", icon: "🧩", glowColor: "rgba(234,179,8,0.6)" },
  { name: "System Design", icon: "🏗️", glowColor: "rgba(192,132,252,0.6)" },
];
const Skills = ({ isDarkMode }) => {
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const subHeadingColor = isDarkMode ? "text-blue-400" : "text-blue-600";
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
  const navButtonBase = "absolute top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 focus:outline-none focus:ring-2";
  const navButtonTheme = isDarkMode ? "bg-slate-700/90 hover:bg-slate-600 text-slate-200 focus:ring-blue-500" : "bg-white/90 hover:bg-slate-100 text-slate-700 focus:ring-blue-600";
  const techSkillsRef = useRef(null);
  const coreSubjectsRef = useRef(null);
  const [techCanLeft, setTechCanLeft] = useState(false);
  const [techCanRight, setTechCanRight] = useState(true);
  const [coreCanLeft, setCoreCanLeft] = useState(false);
  const [coreCanRight, setCoreCanRight] = useState(true);

<<<<<<< HEAD
  // Split all technical skills into two rows dynamically
  const splitIndex = Math.ceil(allTechSkills.length / 2);
  const techRow1 = allTechSkills.slice(0, splitIndex);
  const techRow2 = allTechSkills.slice(splitIndex);

=======
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
  // Separate scroll handlers
  const handleTechScroll = (dir) => {
    const c = techSkillsRef.current;
    if (c) {
      const scrollAmount = (140 + 24) * 2;
      c.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCoreScroll = (dir) => {
    const c = coreSubjectsRef.current;
    if (c) {
      const scrollAmount = (140 + 24) * 2;
      c.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Separate scroll effect for tech skills
  useEffect(() => {
    const updateTechScroll = () => {
      const c = techSkillsRef.current;
      if (!c) return;
      setTechCanLeft(c.scrollLeft > 5);
      setTechCanRight(c.scrollLeft < c.scrollWidth - c.clientWidth - 5);
    };

    const container = techSkillsRef.current;
    if (container) {
      updateTechScroll();
      container.addEventListener("scroll", updateTechScroll, { passive: true });
      window.addEventListener("resize", updateTechScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", updateTechScroll);
      window.removeEventListener("resize", updateTechScroll);
    };
  }, []);

  // Separate scroll effect for core subjects
  useEffect(() => {
    const updateCoreScroll = () => {
      const c = coreSubjectsRef.current;
      if (!c) return;
      setCoreCanLeft(c.scrollLeft > 5);
      setCoreCanRight(c.scrollLeft < c.scrollWidth - c.clientWidth - 5);
    };

    const container = coreSubjectsRef.current;
    if (container) {
      updateCoreScroll();
      container.addEventListener("scroll", updateCoreScroll, { passive: true });
      window.addEventListener("resize", updateCoreScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", updateCoreScroll);
      window.removeEventListener("resize", updateCoreScroll);
    };
  }, []);


  const iconVariants = {
    initial: { scale: 1, filter: "drop-shadow(0 0 0px transparent)" },
    hover: { scale: 1.25, filter: "drop-shadow(0 0 12px var(--glow-color))", transition: { duration: 0.3 } }
  };

  const cardVariants = {
    initial: { y: 0 },
    hover: { y: -6, transition: { duration: 0.3 } }
  };

  const renderRow = skills => (
    skills.map((skill, i) => (
      <motion.div 
      key={i}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      className="flex flex-col items-center justify-center 
                 p-4 md:p-5 lg:p-6           // Responsive padding
                 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
                 w-[120px] h-[120px]         // Base small screen size
                 sm:w-[140px] sm:h-[140px]    // Medium screens
                 md:w-[150px] md:h-[150px]    // Larger screens
                 mx-2 sm:mx-3                 // Horizontal margin
                 my-2                         // Vertical margin
                 flex-shrink-0                // Prevent shrinking
                 transition-all duration-300 hover:bg-white/10"
    >
        <motion.div 
          className="text-5xl mb-2"
          style={{ "--glow-color": skill.glowColor }}
          variants={iconVariants}
        >
          {skill.icon}
        </motion.div>
        <h3 className="text-sm font-semibold text-center text-slate-700 dark:text-slate-200">
          {skill.name}
        </h3>
      </motion.div>
    ))
  );

  return (
    <section id="skills" className={`${isDarkMode ? 'bg-slate-900' : 'bg-white'} py-20 overflow-hidden`}>
      <div className="container mx-auto px-6 text-center">
        {/* Technical Skills Section */}
        <motion.h2 initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }} className={`text-3xl md:text-4xl font-bold mb-12 ${headingColor}`}>
          Technical Skills
        </motion.h2>
        
        <div className="relative group px-10 sm:px-6 md:px-20 mb-12 sm:mb-20">
          <button 
            onClick={() => handleTechScroll('left')} 
            disabled={!techCanLeft}
            className={`${navButtonBase} ${navButtonTheme} left-2 sm:left-4 md:left-6 -translate-y-1/2
      opacity-100 md:opacity-0 md:group-hover:opacity-100 
      z-20 scale-90 sm:scale-100`}
          >
            <FaChevronLeft size={22} className="sm:size-[22px]"/>
          </button>

          <div 
            ref={techSkillsRef} 
            className="overflow-x-auto scrollbar-hide py-2 pl-2 pr-2 sm:pl-0 sm:pr-0"
            style={{ scrollBehavior:'smooth', scrollbarWidth:'none', msOverflowStyle:'none' }}
          >
            <div className="flex flex-col space-y-6 w-max mx-auto">
<<<<<<< HEAD
              {/* Row 1: Dev Skills (Modified) */}
              <div className="flex space-x-6">
                {renderRow(techRow1)}
              </div>
              {/* Row 2: Data Science Skills (Modified) */}
              <div className="flex space-x-6">
                {renderRow(techRow2)}
=======
              <div className="flex space-x-6">
                {renderRow(devSkills)}
              </div>
              <div className="flex space-x-6">
                {renderRow(dsSkills)}
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
              </div>
            </div>
          </div>

          <button 
            onClick={() => handleTechScroll('right')} 
            disabled={!techCanRight}
            className={`${navButtonBase} ${navButtonTheme} right-2 sm:right-4 md:right-6 -translate-y-1/2
      opacity-100 md:opacity-0 md:group-hover:opacity-100 
      z-20 scale-90 sm:scale-100`}
          >
            <FaChevronRight size={20} className="sm:size-[22px]"/>
          </button>
        </div>

<<<<<<< HEAD
        {/* Core Subjects Section (Now includes Concurrency, Java, Networking) */}
=======
        {/* Core Subjects Section */}
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-2xl md:text-3xl font-bold mb-8 ${headingColor}`}
        >
          Core Subjects
        </motion.h3>
        
        <div className="relative group px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <button 
            onClick={() => handleCoreScroll('left')} 
            disabled={!coreCanLeft}
            className={`${navButtonBase} ${navButtonTheme} left-1 sm:left-4 md:left-6 -translate-y-1/2
      opacity-100 md:opacity-0 md:group-hover:opacity-100 
      z-20 scale-75 sm:scale-90 md:scale-100`}
          >
            <FaChevronLeft size={18} className="sm:size-[20px] md:size-[22px]"/>
          </button>

          <div 
            ref={coreSubjectsRef} 
            className="overflow-x-auto scrollbar-hide py-2 pl-3 pr-3 sm:pl-0 sm:pr-0"
            style={{ scrollBehavior:'smooth', scrollbarWidth:'none', msOverflowStyle:'none' }}
          >
            <div className="flex space-x-4 sm:space-x-6 w-max mx-auto px-2">
<<<<<<< HEAD
              {renderRow(csSkills)}
=======
              {coreSubjects.map((skill, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex flex-col items-center justify-center 
                            p-4 sm:p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
                            w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px]
                            flex-shrink-0 transition-all duration-300 hover:bg-white/10"
                >
                  <motion.div 
                    className="text-3xl sm:text-4xl mb-2"
                    style={{ "--glow-color": skill.glowColor }}
                    variants={iconVariants}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className={`text-xs sm:text-sm font-medium text-center ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
            </div>
          </div>

          <button 
            onClick={() => handleCoreScroll('right')} 
            disabled={!coreCanRight}
            className={`${navButtonBase} ${navButtonTheme} right-1 sm:right-1 md:right-6 -translate-y-1/2
      opacity-100 md:opacity-0 md:group-hover:opacity-100 
      z-20 scale-75 sm:scale-90 md:scale-100`}
          >
            <FaChevronRight size={22} className="sm:size-[20px] md:size-[22px] "/>
          </button>
        </div>
      </div>

      <style jsx='true' global='true'>{`
        div::-webkit-scrollbar { display: none !important; }
      `}</style>
    </section>
  );
};

<<<<<<< HEAD
export default Skills;
=======
export default Skills;
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
