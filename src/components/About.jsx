<<<<<<< HEAD
=======
// src/components/About.jsx
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
import React from "react";
import { motion } from "framer-motion";
// Import icons for coding platforms
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from "react-icons/si";
<<<<<<< HEAD
import { FaExternalLinkAlt, FaAward } from "react-icons/fa"; // Added FaAward
import { GoOrganization } from "react-icons/go"; // Added GoOrganization for Flipkart
=======
import { FaExternalLinkAlt } from "react-icons/fa";
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760

const About = ({ isDarkMode }) => {
  // --- Consistent Styles ---
  const lightGradient = "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100";
  const darkGradient = "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
<<<<<<< HEAD
  const paragraphColor = isDarkMode ? "text-slate-300" : "text-slate-700";
  const highlightTextColor = isDarkMode ? "text-blue-400" : "text-blue-600";
  const secondaryHighlightColor = isDarkMode ? "text-teal-400" : "text-teal-600";
  const cardBg = isDarkMode ? "bg-slate-800/70" : "bg-white/80"; 
=======
  // SubHeadingColor removed as we removed the "Coding Profiles" heading
  const paragraphColor = isDarkMode ? "text-slate-300" : "text-slate-700";
  const highlightTextColor = isDarkMode ? "text-blue-400" : "text-blue-600";
  const secondaryHighlightColor = isDarkMode ? "text-teal-400" : "text-teal-600";
  const cardBg = isDarkMode ? "bg-slate-800/70" : "bg-white/80"; // Adjusted opacity for cards
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
  const cardBorder = isDarkMode ? "border-slate-700/70" : "border-slate-200";
  const iconColor = isDarkMode ? "text-slate-400" : "text-slate-500";
  // -----------------------------------------------------

<<<<<<< HEAD
  // --- Your Coding Profile Data (Updated details from resume) ---
  const codingProfiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode size={26} className="text-[#FFA116]" />,
      stat: "700+ Problems Solved", // Updated stat
      details: "Global Rank 785/33,951 (BWC 164)", // Updated detail
      link: "https://leetcode.com/u/param3118/", 
    },
    {
      name: "Flipkart GRiD 6.0",
      icon: <GoOrganization size={26} className="text-[#004FFF]" />, // Placeholder icon for organization/award
      stat: "Qualified Level-2 (Top 85)", // Updated stat
      details: "Ranked in top 85 teams out of 17,391 participants.",
      link: "#", // No external profile link typically, use hash
=======
  // --- Your Coding Profile Data (Keep as is, ensure links are updated) ---
  const codingProfiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode size={26} className="text-[#FFA116]" />, // Slightly smaller icon
      stat: "500+ Problems Solved",
      details: "Max Rating: 1850+",
      link: "https://leetcode.com/u/param3118/", 
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks size={26} className="text-[#0F9D58]" />,
      stat: "Overall Score: 700+",
      details: "Institute Rank: Top 5",
      link: "https://www.geeksforgeeks.org/user/param3118/",
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
    },
    {
      name: "CodeChef",
      icon: <SiCodechef size={26} className="text-[#D0011B]" />,
      stat: "Highest Rating: 4★ (1900+)",
      details: "Div2 Global Rank: Top 1000",
      link: "https://www.codechef.com/users/paramjeet_5625",
    },
    {
<<<<<<< HEAD
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks size={26} className="text-[#0F9D58]" />,
      stat: "Overall Score: 700+",
      details: "Consistently Top 5 in Institute Ranking",
      link: "https://www.geeksforgeeks.org/user/param3118/",
=======
      name: "HackerRank",
      icon: <SiHackerrank size={26} className="text-[#2EC866]" />,
      stat: "5★ C++ Badge",
      details: "Problem Solving & Algorithms",
      link: "https://www.hackerrank.com/profile/3118param",
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
    },
  ];
  // -------------------------------

  // Animation variants
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, duration: 0.5 } } };
  const profileCardVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } } };


  return (
    <section
      id="about"
      className={`w-full min-h-screen flex flex-col items-center justify-center p-6 md:px-12 ${isDarkMode ? darkGradient : lightGradient} overflow-hidden py-16 md:py-24`}
    >
      {/* Main Heading for the Section */}
      <motion.h2
        className={`text-4xl font-bold mb-10 md:mb-12 text-center ${headingColor}`}
<<<<<<< HEAD
        variants={itemVariants}
=======
        variants={itemVariants} // Use itemVariants for the heading itself
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Container for the two columns */}
      <motion.div
<<<<<<< HEAD
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch"
=======
        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch" // lg:grid-cols-5 for 3/5 and 2/5 split
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column: Text Content (Takes 3/5ths width on large screens) */}
        <motion.div
<<<<<<< HEAD
          className="lg:col-span-3 space-y-5 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md"
          style={{ backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.7)' }}
          variants={itemVariants}
        >
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            Hello! I'm <span className={`font-semibold ${highlightTextColor}`}>Paramjeet Singh</span>, a graduate student specializing in **Computer Science and Engineering (M.Tech)** at the prestigious <span className="font-medium">IIT Kharagpur</span>. My background is rooted in building **efficient, high-performance systems** and developing advanced **Machine Learning** solutions.
          </motion.p>
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            I possess a dual expertise: on one hand, tackling low-level challenges in **C/C++, Networking, and Operating Systems** (demonstrated through projects like the **BLINK DB**), and on the other, designing impactful models using **PyTorch and Transformers** for tasks like **Fault Detection and NLP** (my M.Tech and B.Tech projects).
          </motion.p>
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            My skills extend to modern web stacks (**MERN**), and I maintain a top-tier competitive programming profile, having **solved over 700 problems** and achieved high rankings like **Top 85 in Flipkart GRiD 6.0**. I thrive on complex technical challenges.
          </motion.p>
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            I am actively seeking challenging **Software Development Engineer (SDE)** roles where I can apply my combined knowledge of scalable systems and cutting-edge machine learning. Feel free to explore my projects below or <a href="#contact" className={`underline hover:text-blue-500 ${highlightTextColor} font-medium`}>connect with me directly</a>.
          </motion.p>
        </motion.div>

        {/* Right Column: Coding Profiles */}
        <motion.div
          className="lg:col-span-2 space-y-4 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md" 
          style={{ backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.7)' }} 
          variants={itemVariants}
        >
            <h3 className={`text-xl font-bold mb-4 ${headingColor}`}>Competitive Programming & Awards</h3>
            {codingProfiles.map((profile) => (
                <motion.a
                    key={profile.name}
                    href={profile.link === '#' ? undefined : profile.link}
=======
          className="lg:col-span-3 space-y-5 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md" // Added padding & card-like styling
          style={{ backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.7)' }} // Subtle bg for columns
          variants={itemVariants}
        >
          {/* Text content starts here, no internal "justify-center" needed if content flows from top */}
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            Hello! I'm <span className={`font-semibold ${highlightTextColor}`}>Paramjeet Singh</span>, currently pursuing my Master's (M.Tech) in Computer Science at <span className="font-medium">IIT Kharagpur</span>. I'm passionate about building efficient software solutions, focusing particularly on <span className={`font-medium ${highlightTextColor}`}>Machine Learning</span> and core Computer Science <span className={`font-medium ${secondaryHighlightColor}`}>systems</span>.
          </motion.p>
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            My studies and projects provide a strong foundation in algorithms, data structures, and <span className={`font-medium ${secondaryHighlightColor}`}>C++</span> systems programming. I enjoy developing <span className={`font-medium ${highlightTextColor}`}>Machine Learning</span> models with <span className={`font-medium ${highlightTextColor}`}>Python</span> and building full-stack web applications with the <span className={`font-medium ${highlightTextColor}`}>MERN stack</span>.
          </motion.p>
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            I love tackling coding challenges (like <span className="font-medium">500+ problems</span> on LeetCode) and exploring new tech like <span className="font-medium">Generative AI</span>. I'm proficient with tools like <span className="font-medium">Git, Docker,</span> and cloud platforms.
          </motion.p>
          <motion.p variants={itemVariants} className={`text-lg leading-relaxed ${paragraphColor}`}>
            I'm eager to apply my skills to challenging software engineering roles. Feel free to <a href="#projects" className={`underline hover:text-blue-500 ${highlightTextColor} font-medium`}>check out my work</a> or <a href="#contact" className={`underline hover:text-blue-500 ${highlightTextColor} font-medium`}>connect with me!</a>
          </motion.p>
        </motion.div>

        {/* Right Column: Coding Profiles (Takes 2/5ths width on large screens) */}
        <motion.div
          className="lg:col-span-2 space-y-4 p-6 md:p-8 rounded-xl shadow-lg backdrop-blur-md" // Added padding & card-like styling
          style={{ backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'rgba(255, 255, 255, 0.7)' }} // Subtle bg for columns
          variants={itemVariants}
        >
            {/* REMOVED "Coding Profiles" h3 heading */}
            {codingProfiles.map((profile) => (
                <motion.a
                    key={profile.name}
                    href={profile.link}
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${cardBg} ${cardBorder} group`}
                    variants={profileCardVariants}
<<<<<<< HEAD
                    whileHover={{ y: -4, scale: 1.02 }}
=======
                    whileHover={{ y: -4, scale: 1.02 }} // Adjusted hover effect
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
                >
                    <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-3">
                            {profile.icon}
<<<<<<< HEAD
                            <h4 className={`text-md font-semibold ${headingColor}`}>{profile.name}</h4>
                        </div>
                        {profile.link !== '#' && (
                           <FaExternalLinkAlt className={`w-3.5 h-3.5 ${iconColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
                        )}
                         {profile.link === '#' && (
                           <FaAward className={`w-3.5 h-3.5 ${secondaryHighlightColor} opacity-100`} />
                        )}
=======
                            <h4 className={`text-md font-semibold ${headingColor}`}>{profile.name}</h4> {/* Slightly smaller heading */}
                        </div>
                        <FaExternalLinkAlt className={`w-3.5 h-3.5 ${iconColor} opacity-50 group-hover:opacity-100 transition-opacity`} />
>>>>>>> bf84ca9cf3ba90c45026a43d3bc4880abcfaf760
                    </div>
                    <p className={`text-sm font-medium ${highlightTextColor}`}>{profile.stat}</p>
                    {profile.details && <p className={`text-xs mt-1 ${paragraphColor}`}>{profile.details}</p>}
                </motion.a>
            ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
