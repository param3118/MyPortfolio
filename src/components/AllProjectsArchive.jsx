// src/components/AllProjectsArchive.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { allProjectsList } from "../data/allProjectsArchiveData"; // Import the data

const AllProjectsArchive = ({ isDarkMode, onBackToPortfolio }) => { // onBackToPortfolio is a function to go back
  // Consistent Styles from your portfolio
  const lightGradient = "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100";
  const darkGradient = "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";

  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const paragraphColor = isDarkMode ? "text-slate-400" : "text-slate-600";
  const tableHeaderBg = isDarkMode ? "bg-slate-700" : "bg-slate-200";
  const tableRowBgLight = isDarkMode ? "bg-slate-800" : "bg-white";
  const tableRowBgDark = isDarkMode ? "bg-slate-800/50" : "bg-slate-50"; // For zebra striping
  const tableBorder = isDarkMode ? "border-slate-700" : "border-slate-300";
  const linkColor = isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700";

  const primaryTagClasses = `px-2.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${isDarkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-700'}`;
  const secondaryTagClasses = `px-2.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${isDarkMode ? 'bg-teal-900/60 text-teal-300' : 'bg-teal-100 text-teal-700'}`;

  const backButtonClasses = `mb-8 inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
    ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-slate-900'
    : 'bg-slate-200 hover:bg-slate-300 text-slate-700 focus:ring-slate-400 focus:ring-offset-slate-100'
  }`;


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full min-h-screen p-6 md:p-12 ${isDarkMode ? darkGradient : lightGradient} overflow-y-auto`}
    >
      <div className="max-w-6xl mx-auto">
        <button onClick={onBackToPortfolio} className={backButtonClasses} aria-label="Back to main portfolio">
          <FaArrowLeft /> Back to Portfolio
        </button>

        <h2 className={`text-4xl font-bold mb-4 text-center ${headingColor}`}>
          All Projects & Assignments
        </h2>
        <p className={`text-lg mb-10 text-center max-w-3xl mx-auto ${paragraphColor}`}>
          A comprehensive list of my academic assignments, course projects, and self-made explorations.
        </p>

        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className={`min-w-full divide-y ${tableBorder} ${isDarkMode ? 'divide-slate-700' : 'divide-slate-300'}`}>
            <thead className={tableHeaderBg}>
              <tr>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${headingColor}`}>
                  Project Name
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${headingColor}`}>
                  Type
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${headingColor}`}>
                  Technologies
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${headingColor}`}>
                  GitHub
                </th>
                <th scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${headingColor}`}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody className={`${isDarkMode ? 'bg-slate-800 divide-slate-700' : 'bg-white divide-slate-200'}`}>
              {allProjectsList.map((project, index) => (
                <tr key={project.id} className={index % 2 === 0 ? tableRowBgLight : tableRowBgDark}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${headingColor}`}>
                    {project.name}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${paragraphColor}`}>
                    {project.type}
                  </td>
                  <td className="px-6 py-4 whitespace-normal text-sm">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={i % 2 === 0 ? primaryTagClasses : secondaryTagClasses}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 ${linkColor} font-medium`}
                        aria-label={`GitHub repository for ${project.name}`}
                      >
                        <FaGithub /> Code
                      </a>
                    ) : (
                      <span className={paragraphColor}>N/A</span>
                    )}
                  </td>
                  <td className={`px-6 py-4 text-sm ${paragraphColor} max-w-xs whitespace-normal`}>
                    {project.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {allProjectsList.length === 0 && (
            <p className={`text-center mt-8 ${paragraphColor}`}>No projects listed yet.</p>
        )}
      </div>
    </motion.section>
  );
};

export default AllProjectsArchive;
