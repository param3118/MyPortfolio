// src/App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header"; // Assuming Header is your Navbar
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer"; // Assuming you have a Footer
import AllProjectsArchive from './components/AllProjectsArchive';
import AOS from "aos";
import "aos/dist/aos.css";

// If "./index.css" contains your Tailwind base styles and custom CSS
import "./index.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or system preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      return JSON.parse(savedMode);
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [showAllProjects, setShowAllProjects] = useState(false);

  // Effect to update localStorage and body class when dark mode changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // Animate elements only once
      offset: 50, // Offset (in px) from the original trigger point
    });
    // Optional: Refresh AOS on component updates if content changes dynamically
    // AOS.refresh();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  const handleViewAllProjectsArchive = () => {
    setShowAllProjects(true);
    window.scrollTo(0, 0); // Scroll to top when archive is shown
  };

  const handleBackToPortfolioFromArchive = () => {
    setShowAllProjects(false);
    // Scroll to the projects section after the main view is re-rendered
    setTimeout(() => {
      const projectsSectionElement = document.getElementById('projects');
      if (projectsSectionElement) {
        projectsSectionElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback if direct ID scroll fails (e.g. just after state change)
        window.location.hash = "projects";
      }
    }, 0); // Timeout ensures DOM is updated
  };

  // If AllProjectsArchive is shown, render only that
  if (showAllProjects) {
    return (
      <div className={isDarkMode ? "dark" : ""}> {/* Ensure dark class is on root for AllProjectsArchive */}
        <AllProjectsArchive
          isDarkMode={isDarkMode}
          onBackToPortfolio={handleBackToPortfolioFromArchive}
        />
      </div>
    );
  }

  // Main portfolio view
  return (
    // The 'dark' class is now handled on documentElement by useEffect
    // Ensure your font-inter is applied globally, e.g., in index.css on body
    // Using standard Tailwind background colors for consistency
    <div className={`font-inter ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        // toggleManageProjects={toggleManageProjects} // Only if Header has a button for this
      />
      <main className="text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects
          isDarkMode={isDarkMode}
          // Projects component now imports its own data from projectsData.js
          // No need to pass 'projects' prop here unless Settings modifies a central state
          onViewAllProjects={handleViewAllProjectsArchive}
          // toggleManageProjects={toggleManageProjects} // Only if Projects has a button for this
        />

        {/*
          Conditionally render Settings.
          If Settings is meant to modify project data displayed by Projects.jsx,
          you'd need to lift the project data state up to App.jsx.
          For now, assuming Settings has a different purpose or project data is static.
        */}
        {/* {isManageProjectsVisible && (
          <Settings
            // projects={...} // This would come from a state in App.jsx
            // setProjects={...} // This would update a state in App.jsx
            closeManageProjects={toggleManageProjects}
            isDarkMode={isDarkMode}
          />
        )} */}

        <Contact isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
