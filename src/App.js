import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
// import ProjectDetail from './components/ProjectDetail';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projects, setProjects] = useState([
      {
        title: "Sentiment Analysis Based on Text Analysis",
        description: "Developed a sentiment analysis model with the Naive Bayes algorithm, achieving 82% accuracy in classifying text into positive, negative, and neutral sentiments. Applied the model to analyze sentiment in product reviews and social media comments.",
        link: "#", // Add actual link to project if available
        slug: 'sentiment-analysis', 
      },
      {
        title: "Clustering Acoustic Patterns of Frog Species Using K-Means",
        description: "Used feature engineering to expand 22 features to 275, then reduced to 18 key features using PCA for clustering. Applied K-Means clustering with k-means++ initialization, achieving a silhouette score of 0.2195 for k=7.",
        link: "#", // Add actual link to project if available,
        slug: 'sentiment-analysis', 
      },
      {
        title: "Memory File System (MemFS)",
        description: "Developed memFS, a high-performance in-memory file system in C++, optimized for rapid operations in caching and testing. Implemented multithreaded, thread-safe support with advanced synchronization techniques.",
        link: "#", // Add actual link to project if available
        slug: 'sentiment-analysis', 
      },
      {
        title: "Diabetes Prediction",
        description: "Implemented a decision tree model to predict diabetes using input features from noiseless and noisy datasets. Achieved 75.97% accuracy with the noiseless dataset and 60.54% accuracy with the noisy dataset.",
        link: "#", // Add actual link to project if available
        slug: 'sentiment-analysis', 
      },
      {
        title: "CARTIFY: E-Commerce Website",
        description: "Built a full-stack e-commerce website with secure user authentication and authorization using bcrypt. Developed RESTful APIs and used MongoDB for managing products, users, and orders.",
        link: "#", // Add actual link to project if available
        slug: 'sentiment-analysis', 
      },
      {
        title: "Hotel Reservation System",
        description: "Developed a full-stack hotel reservation system using MERN stack with JWT for authentication and Context API for state management. Built custom React hooks and a responsive calendar for seamless booking.",
        link: "#", // Add actual link to project if available
        slug: 'sentiment-analysis', 
      },
      {
        title: "Text Summarization Project",
        description: "Built a text summarization system using NLTK and Scikit-learn. Applied the PageRank algorithm to rank sentences and selected the top K sentences for the summary.",
        link: "#", // Add actual link to project if available
        slug: 'sentiment-analysis', 
      },
    
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
        toggleManageProjects={toggleManageProjects}
      />
      <main className="bg-lightBg dark:bg-darkBg text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />

        {/* Pass projects and setProjects as props to Projects and Settings components */}
        <Projects
          isDarkMode={isDarkMode}
          projects={projects}
          toggleManageProjects={toggleManageProjects}
        />

        {/* Conditionally render Settings */}
        {isManageProjectsVisible && (
          <Settings
            projects={projects}
            setProjects={setProjects}
            closeManageProjects={toggleManageProjects}
          />
        )}

        <Contact isDarkMode={isDarkMode} />
      </main>
    </div>
  );
}


export default App;