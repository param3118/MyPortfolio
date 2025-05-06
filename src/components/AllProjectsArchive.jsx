// src/components/AllProjectsArchive.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { allProjectsList } from "../data/allProjectsArchiveData";

const AllProjectsArchive = ({ isDarkMode, onBackToPortfolio }) => {
  // --- Consistent Styles --- (Keep these as they are)
  const lightGradient = "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100";
  const darkGradient = "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const paragraphColor = isDarkMode ? "text-slate-400" : "text-slate-600";
  const tableHeaderBg = isDarkMode ? "bg-slate-700" : "bg-slate-200";
  // For zebra striping, we'll apply to <tr> directly
  const tableBorder = isDarkMode ? "border-slate-700" : "border-slate-300";
  const linkColor = isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700";
  const primaryTagClasses = `px-2 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${isDarkMode ? 'bg-blue-900/60 text-blue-300' : 'bg-blue-100 text-blue-700'}`; // Adjusted padding
  const secondaryTagClasses = `px-2.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap ${isDarkMode ? 'bg-teal-900/60 text-teal-300' : 'bg-teal-100 text-teal-700'}`;
  const backButtonClasses = `mb-8 inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
    ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 focus:ring-slate-500 focus:ring-offset-slate-900'
    : 'bg-slate-200 hover:bg-slate-300 text-slate-700 focus:ring-slate-400 focus:ring-offset-slate-100'
  }`;
  const paginationButtonClasses = `p-2 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
    isDarkMode
    ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 disabled:hover:bg-slate-700'
    : 'bg-slate-200 hover:bg-slate-300 text-slate-700 disabled:hover:bg-slate-200'
  }`;
  // --------------------------

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // Adjust number of items per page
  // ------------------------

  // --- Pagination Logic ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProjectsList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allProjectsList.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  // ----------------------

  // --- Column Width Definitions (adjust as needed) ---
  // These are Tailwind max-width classes. For table-layout:fixed, these act more like width.
  const colWidths = {
    name: "w-1/4 max-w-xs",      // Example: 25% of table width, max 320px
    type: "w-1/6 max-w-[150px]",   // Example: Max 150px
    technologies: "w-1/4 max-w-sm", // Example: Max 384px
    github: "w-1/12 max-w-[100px]", // Example: Max 100px
    description: "w-1/3 max-w-md", // Example: 33% of table width, max 448px (will have internal scroll)
  };
  // ---------------------------------------------------

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full min-h-screen p-6 md:p-12 ${isDarkMode ? darkGradient : lightGradient} overflow-y-auto`}
    >
      <div className="max-w-6xl mx-auto"> {/* Adjusted max-width for a potentially wider table */}
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
          {/* Added table-fixed and w-full */}
          <table className={`min-w-full table-fixed w-full divide-y ${tableBorder} ${isDarkMode ? 'divide-slate-700' : 'divide-slate-300'}`}>
            <colgroup> {/* Define column widths here */}
              <col className={colWidths.name} />
              <col className={colWidths.type} />
              <col className={colWidths.technologies} />
              <col className={colWidths.github} />
              <col className={colWidths.description} />
            </colgroup>
            <thead className={tableHeaderBg}>
              <tr>
                {/* Apply truncate to most header cells, adjust padding for height */}
                <th scope="col" className={`px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider truncate ${headingColor}`}>Project Name</th>
                <th scope="col" className={`px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider truncate ${headingColor}`}>Type</th>
                <th scope="col" className={`px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider ${headingColor}`}>Technologies</th> {/* No truncate, tags wrap */}
                <th scope="col" className={`px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider truncate ${headingColor}`}>GitHub</th>
                <th scope="col" className={`px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wider ${headingColor}`}>Description</th> {/* No truncate for header */}
              </tr>
            </thead>
            <tbody className={`${isDarkMode ? 'bg-slate-800 divide-slate-700' : 'bg-white divide-slate-200'}`}>
              {currentItems.map((project, index) => (
                // Apply zebra striping to <tr>
                <tr key={project.id} className={`${index % 2 === 0 ? (isDarkMode ? 'bg-slate-800' : 'bg-white') : (isDarkMode ? 'bg-slate-800/60' : 'bg-slate-50')} align-middle`}>
                  {/* Apply truncate, overflow-hidden, whitespace-nowrap to cells that need it, adjust padding */}
                  <td className={`px-4 py-2.5 text-sm font-medium truncate ${headingColor}`}>{project.name}</td>
                  <td className={`px-4 py-2.5 text-sm truncate ${paragraphColor}`}>{project.type}</td>
                  <td className={`px-4 py-2.5 text-sm`}> {/* Technologies will wrap */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, i) => ( // Show only first 3-4 initially, or adjust
                        <span key={i} className={i % 2 === 0 ? primaryTagClasses : secondaryTagClasses}>{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${isDarkMode ? 'bg-slate-600 text-slate-300' : 'bg-slate-200 text-slate-500'}`}>
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className={`px-4 py-2.5 text-sm truncate`}>
                    {project.githubLink ? (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 ${linkColor} font-medium`} aria-label={`GitHub repository for ${project.name}`}>
                        <FaGithub /> Code
                      </a>
                    ) : (<span className={paragraphColor}>N/A</span>)}
                  </td>
                  {/* Description cell with controlled height and scroll */}
                  <td className={`px-4 py-2.5 text-sm ${paragraphColor}`}>
                    <div className="max-h-[4.5rem] overflow-y-auto whitespace-normal pr-2 scrollbar-thin scrollbar-thumb-slate-400 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent"> {/* Approx 3 lines, with scroll */}
                        {project.description}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {allProjectsList.length === 0 && (
            <p className={`text-center mt-8 ${paragraphColor}`}>No projects listed yet.</p>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center space-x-4">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className={paginationButtonClasses} aria-label="Previous page"><FaChevronLeft /></button>
            <span className={`text-sm font-medium ${paragraphColor}`}>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className={paginationButtonClasses} aria-label="Next page"><FaChevronRight /></button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default AllProjectsArchive;
