// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa"; // Add or remove icons as needed

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  // Consistent styles
  const bgColor = isDarkMode ? "bg-slate-800" : "bg-slate-200"; // Slightly different from main dark/light bg for distinction
  const textColor = isDarkMode ? "text-slate-400" : "text-slate-600";
  const iconHoverColor = isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600";
  const linkColor = isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500";

  // Define your social links here
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn URL
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      url: "https://github.com/yourusername", // Replace with your GitHub URL
    },
    {
      name: "Email",
      icon: <FaEnvelope size={20} />,
      url: "mailto:your.email@example.com", // Replace with your email
    },
    // Add other social links if you have them
    // {
    //   name: "Twitter",
    //   icon: <FaTwitter size={20} />,
    //   url: "https://twitter.com/yourusername",
    // },
    // {
    //   name: "Instagram",
    //   icon: <FaInstagram size={20} />,
    //   url: "https://instagram.com/yourusername",
    // },
  ];

  return (
    <footer className={`w-full py-8 md:py-12 ${bgColor} ${textColor} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Links (Optional) */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center items-center space-x-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`My ${social.name} profile`}
                className={`transition-colors duration-300 ${iconHoverColor}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        )}

        {/* Copyright and other text */}
        <div className="text-center text-sm space-y-2">
          <p>
            &copy; {currentYear} Paramjeet Singh. All Rights Reserved.
          </p>
          <p>
            Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className={`${linkColor} font-medium`}>React</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className={`${linkColor} font-medium`}>Tailwind CSS</a>.
            {/* Hosted on <a href="#" className={`${linkColor} font-medium`}>Your Hosting</a>. */}
          </p>
          {/* Optional: A subtle quote or a link to your resume */}
          {/* <p className="mt-2 italic">"Striving for excellence, one line of code at a time."</p> */}
        </div>

        {/* Optional: Back to Top Button (if your page is long) */}
        {/*
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`px-4 py-2 text-xs rounded-md ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-300 hover:bg-slate-400'} ${textColor} transition-colors`}
          >
            Back to Top
          </button>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;
