import React, { useState } from "react";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Example using Heroicons

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Use consistent primary blue for links/hover
  const linkHoverColor = isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600";
  const mobileLinkHoverColor = isDarkMode ? "hover:bg-slate-700" : "hover:bg-slate-100";

  return (
    <header className={`sticky top-0 z-50 shadow-md backdrop-blur-md ${isDarkMode ? 'bg-slate-900/70 border-b border-slate-700' : 'bg-white/70 border-b border-slate-200'} text-slate-900 dark:text-slate-200 transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">Paramjeet's Portfolio</a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#about" className={`${linkHoverColor} transition-colors`}>About</a>
          <a href="#skills" className={`${linkHoverColor} transition-colors`}>Skills</a>
          <a href="#projects" className={`${linkHoverColor} transition-colors`}>Projects</a>
          <a href="#contact" className={`${linkHoverColor} transition-colors`}>Contact</a>
          <a
            href="https://drive.google.com/uc?id=1sYNo6tmVEeRkYaP9PEpaOw6hBNAJBpBT&export=download"
            download="Paramjeet_Singh_Resume.pdf"
            className={`ml-2 px-3 py-1 border rounded-md transition-colors ${isDarkMode ? 'border-slate-600 hover:bg-slate-700 hover:border-slate-500' : 'border-slate-300 hover:bg-slate-100 hover:border-slate-400'}`}
          >
            Resume
          </a>
        </nav>
        <div className="flex items-center">
           <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDarkMode ? 'text-slate-400 hover:text-yellow-400 hover:bg-slate-800 focus:ring-yellow-400 focus:ring-offset-slate-900' : 'text-slate-500 hover:text-blue-600 hover:bg-slate-100 focus:ring-blue-500 focus:ring-offset-white'}`}
              aria-label={isDarkMode ? "Activate Light Mode" : "Activate Dark Mode"}
            >
              {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button
              className="md:hidden ml-3 text-slate-600 dark:text-slate-400 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {/* Animated Burger Icon (Optional) */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>

      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 px-4 pt-2 pb-4 space-y-1">
          <a href="#about" className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverColor}`}>About</a>
          <a href="#skills" className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverColor}`}>Skills</a>
          <a href="#projects" className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverColor}`}>Projects</a>
          <a href="#contact" className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverColor}`}>Contact</a>
           <a
            // href="https://drive.google.com/uc?id=1sYNo6tmVEeRkYaP9PEpaOw6hBNAJBpBT&export=download"
             href="\cvGenerate 3.pdf"
             download="Paramjeet_Singh_Resume.pdf"
            className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkHoverColor}`}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;