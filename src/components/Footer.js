import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const bgColor = isDarkMode ? "bg-slate-800" : "bg-slate-200";
  const textColor = isDarkMode ? "text-slate-400" : "text-slate-600";

  const iconColor = isDarkMode ? "text-blue-400" : "text-blue-600";

  return (
    <footer className={`w-full py-3 px-4 ${bgColor} ${textColor} text-center`}>
      {/* Social Icons */}
      

      {/* Copyright */}
      <div className="text-sm">
        © {currentYear} Paramjeet Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
