// src/components/Skills.jsx
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
  FaChartLine
} from "react-icons/fa";
import { SiExpress,SiNumpy, SiPandas,SiMongodb, SiScikitlearn,SiCplusplus ,SiHuggingface, SiPytorch } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import {  BsTranslate } from 'react-icons/bs';
import { GiArtificialIntelligence } from 'react-icons/gi'
// SPLIT SKILLS: first row dev, second row data-science
const devSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, glowColor: "rgba(234,88,12,0.6)" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, glowColor: "rgba(37,99,235,0.6)" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, glowColor: "rgba(250,204,21,0.6)" },
  { name: "React", icon: <FaReact className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, glowColor: "rgba(34,197,94,0.6)" },
  { name: "Express.js", icon: <SiExpress className="text-green-600" />, glowColor: "rgba(205, 182, 35, 0.6)" },
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
  const navButtonBase = "absolute top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-xl transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 focus:outline-none focus:ring-2";
  const navButtonTheme = isDarkMode ? "bg-slate-700/90 hover:bg-slate-600 text-slate-200 focus:ring-blue-500" : "bg-white/90 hover:bg-slate-100 text-slate-700 focus:ring-blue-600";

  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const updateScroll = () => {
      const c = scrollRef.current;
      if (!c) return;
      setCanLeft(c.scrollLeft > 5);
      setCanRight(c.scrollLeft < c.scrollWidth - c.clientWidth - 5);
    };
    const container = scrollRef.current;
    if (container) {
      updateScroll();
      container.addEventListener("scroll", updateScroll, { passive: true });
      window.addEventListener("resize", updateScroll);
    }
    return () => {
      if (container) container.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const handleScroll = dir => {
    const c = scrollRef.current;
    if (c) {
      const amt = (140 + 24) * 2;
      c.scrollBy({ left: dir === 'left' ? -amt : amt, behavior: 'smooth' });
    }
  };

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
      <motion.h2 initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }} className={`text-3xl md:text-4xl font-bold mb-12 ${headingColor}`}>
        Technical Skills
      </motion.h2>      
        <div className="relative group px-10 md:px-20">
          <button onClick={() => handleScroll('left')} disabled={!canLeft}
            className={`${navButtonBase} ${navButtonTheme} left-0 -translate-x-1/2 opacity-0 group-hover:opacity-100`}>
            <FaChevronLeft size={22}/>
          </button>

          <div ref={scrollRef} className="flex flex-col space-y-4 overflow-x-auto overflow-y-hidden py-2 "
            style={{ scrollBehavior:'smooth', scrollbarWidth:'none', msOverflowStyle:'none' }}>
            <div className="flex space-x-6 justify-start">
              {renderRow(devSkills)}
            </div>
            <div className="flex space-x-6 justify-start">
              {renderRow(dsSkills)}
            </div>
          </div>

          <button onClick={() => handleScroll('right')} disabled={!canRight}
            className={`${navButtonBase} ${navButtonTheme} right-0 translate-x-1/2 opacity-0 group-hover:opacity-100`}>
            <FaChevronRight size={22}/>
          </button>
        </div>
      </div>
      <div className="mt-16 w-full flex flex-col items-center">
  <motion.h3 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`text-2xl md:text-3xl font-bold mb-8 ${headingColor}`}
  >
    CS Core Subjects
  </motion.h3>
        
        <div className="relative group px-10 md:px-20">
          <button 
            onClick={() => handleScroll('left')} 
            disabled={!canLeft}
            className={`${navButtonBase} ${navButtonTheme} left-0 -translate-x-1/2 opacity-0 group-hover:opacity-100`}
          >
            <FaChevronLeft size={22}/>
          </button>

          <div 
            ref={scrollRef} 
            className="overflow-x-auto overflow-y-hidden py-2"
            style={{ scrollBehavior:'smooth', scrollbarWidth:'none', msOverflowStyle:'none' }}
          >
            <div className="flex space-x-6 justify-start w-max mx-auto">
              {coreSubjects.map((subject, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="flex flex-col items-center justify-center 
                            p-4 md:p-5 lg:p-6
                            rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 
                            w-[120px] h-[120px]
                            sm:w-[140px] sm:h-[140px]
                            flex-shrink-0
                            transition-all duration-300 hover:bg-white/10"
                >
                  <motion.div 
                    className="text-4xl mb-2"
                    style={{ "--glow-color": subject.glowColor }}
                    variants={iconVariants}
                  >
                    {subject.icon}
                  </motion.div>
                  <h3 className={`text-sm font-semibold text-center ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    {subject.icon} {subject.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => handleScroll('right')} 
            disabled={!canRight}
            className={`${navButtonBase} ${navButtonTheme} right-0 translate-x-1/2 opacity-0 group-hover:opacity-100`}
          >
            <FaChevronRight size={22}/>
          </button>
        </div>
      </div> 
      <style jsx='true' global='true'>{`
        div::-webkit-scrollbar { display: none !important; }
      `}</style>
    </section>
  );
};

export default Skills;