// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import profilePhoto from '../assets/my_iitkgp_photo.jpg';
// --- Image Paths (Ensure these are correct) ---
// Banner Image: Replace 'banner-default.jpg' with your actual banner image file name in the /public folder
const bannerPhotoPath = "https://static.wixstatic.com/media/9553c3_1c205f777e714f3184488615390a28ab~mv2_d_2048_1247_s_2.jpg/v1/fill/w_560,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9553c3_1c205f777e714f3184488615390a28ab~mv2_d_2048_1247_s_2.jpg";
// Profile Image: Based on your previous input
// const profilePhotoPath = "../assets/parampic1.jpeg"
// ------------------------------------------------

const About = ({ isDarkMode }) => {
  // --- Consistent Styles ---
  // Using simple backgrounds as the banner provides the main visual for the top
  const lightBg = "bg-slate-100"; // Background for the content area below banner
  const darkBg = "bg-slate-900";  // Background for the content area below banner

  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const paragraphColor = isDarkMode ? "text-slate-300" : "text-slate-700";
  const highlightTextColor = isDarkMode ? "text-blue-400" : "text-blue-600";
  const secondaryHighlightColor = isDarkMode ? "text-teal-400" : "text-teal-600";

  // Profile Pic Border Color - choose one that contrasts well
  const profileBorderColor = isDarkMode ? "border-slate-900" : "border-slate-100";
  // -----------------------------------------------------

  // Animation Variants
  const bannerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const profilePicVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.2 } }
  };

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } } // Delay content animation
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };


  return (
    <section
      id="about"
      // Use simple background - banner creates top visual. Ensure enough padding overall.
      className={`w-full ${isDarkMode ? darkBg : lightBg} overflow-hidden pt-0 pb-16 md:pb-24`} // No top padding, rely on banner height. Added bottom padding.
    >
      {/* Banner and Profile Picture Container */}
      <motion.div
        className="relative w-full h-52 md:h-64 lg:h-72" // Adjust banner height as needed
        variants={bannerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Banner Image */}
        <img
          src={bannerPhotoPath}
          alt="Professional Banner"
          className="absolute inset-0 w-full h-full object-cover" // Cover the container
        />
        {/* Optional: Dark overlay for better profile pic contrast */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>

        {/* Profile Picture */}
        <motion.div
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10`} // Center and hang halfway down
          variants={profilePicVariants}
          // initial="hidden" // Animation handled by parent's whileInView
          // whileInView="visible" // Animation handled by parent's whileInView
          // viewport={{ once: true }}
        >
          <motion.img
            src={profilePhoto}
            alt="Paramjeet Singh"
            // Consistent rounded style, size, border, shadow
            className={`w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full object-cover border-4 ${profileBorderColor} shadow-xl`}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)' }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>

      {/* Text Content Area */}
      <motion.div
        // Needs top padding to clear the hanging profile picture
        className="w-full max-w-4xl mx-auto px-6 pt-24 md:pt-28 lg:pt-32" // Adjust padding top based on profile pic size
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Start animation when 20% is visible
      >
        <motion.h2 variants={contentItemVariants} className={`text-3xl md:text-4xl font-bold mb-6 text-center ${headingColor}`}>
          About Me
        </motion.h2>

        {/* Paragraph 1: Intro & Current Focus */}
        <motion.p variants={contentItemVariants} className={`mb-4 text-base md:text-lg leading-relaxed text-center ${paragraphColor}`}>
          Hello! I'm <span className={`font-semibold ${highlightTextColor}`}>Paramjeet Singh</span>, currently pursuing my Master's (M.Tech) in Computer Science at <span className="font-medium">IIT Kharagpur</span>. I'm passionate about building efficient software solutions, focusing particularly on <span className={`font-medium ${highlightTextColor}`}>Machine Learning</span> and core Computer Science <span className={`font-medium ${secondaryHighlightColor}`}>systems</span>.
        </motion.p>

        {/* Paragraph 2: Technical Approach & Key Skills */}
        <motion.p variants={contentItemVariants} className={`mb-4 text-base md:text-lg leading-relaxed text-center ${paragraphColor}`}>
          My studies provide a strong foundation in algorithms, data structures, and <span className={`font-medium ${secondaryHighlightColor}`}>C++</span> systems programming. I enjoy developing <span className={`font-medium ${highlightTextColor}`}>Machine Learning</span> models with <span className={`font-medium ${highlightTextColor}`}>Python</span> (Scikit-learn, etc.) and building full-stack web apps with the <span className={`font-medium ${highlightTextColor}`}>MERN stack</span>.
        </motion.p>

        {/* Paragraph 3: Problem Solving & Interests */}
        <motion.p variants={contentItemVariants} className={`mb-4 text-base md:text-lg leading-relaxed text-center ${paragraphColor}`}>
          I love tackling coding challenges (like <span className="font-medium">500+ problems</span> on LeetCode) and exploring new tech like <span className="font-medium">Generative AI</span>. I use tools like <span className="font-medium">Git, Docker,</span> and cloud platforms daily.
        </motion.p>

         {/* Paragraph 4: Goal & Closing */}
        <motion.p variants={contentItemVariants} className={`text-base md:text-lg leading-relaxed text-center ${paragraphColor}`}>
          Eager to contribute to challenging <span className={`font-medium ${highlightTextColor}`}>Machine Learning</span> or <span className={`font-medium ${secondaryHighlightColor}`}>systems development</span> projects. Feel free to <a href="#projects" className={`underline hover:text-blue-500 ${highlightTextColor} font-medium`}>check out my work</a> or <a href="#contact" className={`underline hover:text-blue-500 ${highlightTextColor} font-medium`}>connect with me!</a>
        </motion.p>
      </motion.div>

    </section>
  );
};

export default About;
