import React, { useState } from "react";

const Header = ({ toggleDarkMode, isDarkMode, toggleManageProjects }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Paramjeet's Portfolio</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-indigo-200 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-200 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-indigo-200 transition-colors">Skills</a>
          <a
            href="https://drive.google.com/uc?id=1sYNo6tmVEeRkYaP9PEpaOw6hBNAJBpBT&export=download"
            download="Paramjeet_Singh_Resume.pdf"
            className="hover:text-indigo-200 transition-colors"
          >
            Resume
          </a>
          <a href="#contact" className="hover:text-indigo-200 transition-colors">Contact</a>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <button
          onClick={toggleDarkMode}
          className="bg-white text-black px-3 py-1 rounded-md font-semibold hover:opacity-80 transition-all ml-4"
        >
          Dark Mode
        </button>
        {/* <button
          onClick={toggleManageProjects} // Toggle manage projects visibility
          className="bg-green-600 text-white px-3 py-1 rounded-md font-semibold hover:opacity-80 transition-all ml-4"
        >
          Manage Projects */}
        
          {/* {isDarkMode ? "Close Manage" : "Manage Projects"} */}
        {/* </button> */}
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-600 text-white px-6 py-4 space-y-2">
          <a href="#about" className="block hover:text-indigo-200">About</a>
          <a href="#projects" className="block hover:text-indigo-200">Projects</a>
          <a href="#skills" className="block hover:text-indigo-200">Skills</a>
          <a href="#contact" className="block hover:text-indigo-200">Contact</a>
          <a
            href="https://drive.google.com/uc?id=1sYNo6tmVEeRkYaP9PEpaOw6hBNAJBpBT&export=download"
            download="Paramjeet_Singh_Resume.pdf"
            className="block hover:text-indigo-200"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
