// src/components/Skills.jsx
import React from "react";
import {
  FaReact, FaHtml5, FaCss3, FaNodeJs, FaPython, FaJsSquare, FaGitAlt, FaDatabase, FaDocker, FaAws
} from "react-icons/fa"; // Added Docker, AWS examples

const skills = [
  // Use consistent accent colors
  { name: "React", icon: <FaReact className="text-sky-500" />, description: "Modern UI development" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, description: "Server-side JavaScript" },
  { name: "Python", icon: <FaPython className="text-yellow-500" />, description: "Data Science & Backend" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, description: "Core web language" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" />, description: "Web structure" },
  { name: "CSS3", icon: <FaCss3 className="text-blue-600" />, description: "Styling & Layouts" },
  { name: "Databases", icon: <FaDatabase className="text-indigo-500" />, description: "SQL & NoSQL" },
  { name: "Git", icon: <FaGitAlt className="text-red-600" />, description: "Version control" },
  { name: "Docker", icon: <FaDocker className="text-blue-500" />, description: "Containerization" },
  { name: "AWS", icon: <FaAws className="text-orange-500" />, description: "Cloud services" },
  // Add more skills...
];

const Skills = ({ isDarkMode }) => {
  return (
    <section
      id="skills"
      // Use base background, adjust padding
      className="py-20 sm:py-24 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-100">Technical Skills</h2>
        <p className="text-lg md:text-xl mb-12 text-blue-600 dark:text-blue-400 font-medium">Technologies I Work With</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"> {/* Adjusted grid cols and max-width */}
          {skills.map((skill, index) => (
            <div
              key={index}
              // Subtle card style, enhanced hover
              className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg dark:shadow-none dark:hover:bg-slate-700 border border-transparent dark:border-slate-700/50 transition-all duration-300 transform hover:-translate-y-1"
              aria-label={skill.name}
            >
              <div className="text-4xl md:text-5xl mb-4 flex justify-center items-center h-16"> {/* Centered icon with fixed height */}
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1 text-slate-800 dark:text-slate-100">{skill.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400"> {/* Smaller description */}
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;