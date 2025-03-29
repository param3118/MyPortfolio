import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPython,
  FaJsSquare,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact />, description: "Building UIs with React" },
  { name: "HTML5", icon: <FaHtml5 />, description: "Markup and structure" },
  { name: "CSS3", icon: <FaCss3 />, description: "Styling and layouts" },
  { name: "Node.js", icon: <FaNodeJs />, description: "Server-side development" },
  { name: "Python", icon: <FaPython />, description: "Data Science and Scripting" },
  { name: "JavaScript", icon: <FaJsSquare />, description: "Web Development" },
  { name: "Git", icon: <FaGitAlt />, description: "Version Control" },
  { name: "Databases", icon: <FaDatabase />, description: "Data Management" },
];

const Skills = (isDarkMode ) => {
  return (
    <section
      id="skills"
      className="py-6  bg-gradient-to-r from-gray-100 via-black-100 to-black-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-center"
    >
      <h3 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
        My Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
            aria-label={skill.name}
          >
            <div className="text-5xl text-blue-600 dark:text-blue-400 mb-4 hover:rotate-12 transition-transform">
              {skill.icon}
            </div>
            <h4 className="text-xl font-semibold">{skill.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
