// src/components/Skills.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaDocker, FaAws, FaCss3,
  FaPython, FaDatabase, FaPython as FaNumPy, FaPython as FaPandas, FaDatabase as FaMongo,
  FaChevronLeft, FaChevronRight
} from "react-icons/fa";

// SPLIT SKILLS: first row dev, second row data-science
const devSkills = [
  { name: "React", icon: <FaReact className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, glowColor: "rgba(34,197,94,0.6)" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, glowColor: "rgba(250,204,21,0.6)" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, glowColor: "rgba(234,88,12,0.6)" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, glowColor: "rgba(37,99,235,0.6)" },
  { name: "Docker", icon: <FaDocker className="text-blue-500" />, glowColor: "rgba(59,130,246,0.6)" },
  { name: "AWS", icon: <FaAws className="text-orange-500" />, glowColor: "rgba(249,115,22,0.6)" },
  { name: "React", icon: <FaReact className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, glowColor: "rgba(34,197,94,0.6)" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, glowColor: "rgba(250,204,21,0.6)" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, glowColor: "rgba(234,88,12,0.6)" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, glowColor: "rgba(37,99,235,0.6)" },
  { name: "Docker", icon: <FaDocker className="text-blue-500" />, glowColor: "rgba(59,130,246,0.6)" },
  { name: "AWS", icon: <FaAws className="text-orange-500" />, glowColor: "rgba(249,115,22,0.6)" },
  { name: "React", icon: <FaReact className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, glowColor: "rgba(34,197,94,0.6)" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, glowColor: "rgba(250,204,21,0.6)" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, glowColor: "rgba(234,88,12,0.6)" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, glowColor: "rgba(37,99,235,0.6)" },
  { name: "Docker", icon: <FaDocker className="text-blue-500" />, glowColor: "rgba(59,130,246,0.6)" },
  { name: "AWS", icon: <FaAws className="text-orange-500" />, glowColor: "rgba(249,115,22,0.6)" },
  { name: "React", icon: <FaReact className="text-sky-500" />, glowColor: "rgba(14,165,233,0.6)" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, glowColor: "rgba(34,197,94,0.6)" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, glowColor: "rgba(250,204,21,0.6)" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, glowColor: "rgba(234,88,12,0.6)" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" />, glowColor: "rgba(37,99,235,0.6)" },
  { name: "Docker", icon: <FaDocker className="text-blue-500" />, glowColor: "rgba(59,130,246,0.6)" },
  { name: "AWS", icon: <FaAws className="text-orange-500" />, glowColor: "rgba(249,115,22,0.6)" },
];
const dsSkills = [
  { name: "Python", icon: <FaPython className="text-yellow-500" />, glowColor: "rgba(234,179,8,0.6)" },
  { name: "NumPy", icon: <FaPython className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" },
  { name: "Pandas", icon: <FaPython className="text-indigo-400" />, glowColor: "rgba(129,140,248,0.6)" },
  { name: "Databases", icon: <FaDatabase className="text-indigo-500" />, glowColor: "rgba(99,102,241,0.6)" },
  { name: "MongoDB", icon: <FaMongo className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, glowColor: "rgba(234,179,8,0.6)" },
  { name: "NumPy", icon: <FaPython className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" },
  { name: "Pandas", icon: <FaPython className="text-indigo-400" />, glowColor: "rgba(129,140,248,0.6)" },
  { name: "Databases", icon: <FaDatabase className="text-indigo-500" />, glowColor: "rgba(99,102,241,0.6)" },
  { name: "MongoDB", icon: <FaMongo className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, glowColor: "rgba(234,179,8,0.6)" },
  { name: "NumPy", icon: <FaPython className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" },
  { name: "Pandas", icon: <FaPython className="text-indigo-400" />, glowColor: "rgba(129,140,248,0.6)" },
  { name: "Databases", icon: <FaDatabase className="text-indigo-500" />, glowColor: "rgba(99,102,241,0.6)" },
  { name: "MongoDB", icon: <FaMongo className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, glowColor: "rgba(234,179,8,0.6)" },
  { name: "NumPy", icon: <FaPython className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" },
  { name: "Pandas", icon: <FaPython className="text-indigo-400" />, glowColor: "rgba(129,140,248,0.6)" },
  { name: "Databases", icon: <FaDatabase className="text-indigo-500" />, glowColor: "rgba(99,102,241,0.6)" },
  { name: "MongoDB", icon: <FaMongo className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, glowColor: "rgba(234,179,8,0.6)" },
  { name: "NumPy", icon: <FaPython className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" },
  { name: "Pandas", icon: <FaPython className="text-indigo-400" />, glowColor: "rgba(129,140,248,0.6)" },
  { name: "Databases", icon: <FaDatabase className="text-indigo-500" />, glowColor: "rgba(99,102,241,0.6)" },
  { name: "MongoDB", icon: <FaMongo className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, glowColor: "rgba(234,179,8,0.6)" },
  { name: "NumPy", icon: <FaPython className="text-blue-400" />, glowColor: "rgba(96,165,250,0.6)" },
  { name: "Pandas", icon: <FaPython className="text-indigo-400" />, glowColor: "rgba(129,140,248,0.6)" },
  { name: "Databases", icon: <FaDatabase className="text-indigo-500" />, glowColor: "rgba(99,102,241,0.6)" },
  { name: "MongoDB", icon: <FaMongo className="text-green-600" />, glowColor: "rgba(22,163,74,0.6)" },
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
        key={skill.name + i}
        className="flex flex-col items-center justify-center p-4 rounded-xl shadow-lg border transition duration-300 ease-out hover:shadow-2xl"
        style={{ width: '140px', height: '140px' }}
        initial="initial"
        whileHover="hover"
        variants={cardVariants}
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
        <motion.h2 initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }} className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Technical Skills</motion.h2>
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.1 }} className={`text-lg mb-12 ${subHeadingColor}`}>Development (Top) & Data Science (Bottom)</motion.p>

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

      <style jsx='true' global='true'>{`
        div::-webkit-scrollbar { display: none !important; }
      `}</style>
    </section>
  );
};

export default Skills;