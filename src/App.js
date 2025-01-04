import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Settings from "./components/Settings"; // Import the Settings component
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState([
    { title: "Project 1", description: "An innovative AI-powered project.", link: "#" },
    { title: "Project 2", description: "A dynamic web-based application.", link: "#" },
    { title: "Project 3", description: "A powerful data-driven solution.", link: "#" },
    { title: "Project 4", description: "A futuristic cloud-based platform.", link: "#" },
  ]); // The projects state

  const [isManageProjectsVisible, setIsManageProjectsVisible] = useState(false); // For showing/hiding manage section

  const toggleManageProjects = () => {
    setIsManageProjectsVisible((prev) => !prev); // Toggle the manage section visibility
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={`${isDarkMode ? "dark" : ""} min-h-screen`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        toggleManageProjects={toggleManageProjects} // Pass the toggle function to Header
      />
      <main className="bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        
        {/* Pass projects and setProjects as props to the Projects and Settings components */}
        <Projects isDarkMode={isDarkMode} projects={projects} />
        
        {/* Conditionally render Settings based on isManageProjectsVisible */}
        {isManageProjectsVisible && (
          <Settings
            projects={projects}
            setProjects={setProjects}
            closeManageProjects={toggleManageProjects} // Pass the toggle function to Settings
          />
        )}
        
        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}

export default App;
