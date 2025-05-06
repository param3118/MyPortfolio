// src/components/Hero.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import profilePhotoPath from "../assets/parampic1.jpeg"
// --- Image Paths ---
const bannerPhotoPath = "https://static.wixstatic.com/media/9553c3_1c205f777e714f3184488615390a28ab~mv2_d_2048_1247_s_2.jpg/v1/fill/w_560,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9553c3_1c205f777e714f3184488615390a28ab~mv2_d_2048_1247_s_2.jpg"; // <<< REPLACE with your banner image in /public


const Hero = ({ isDarkMode }) => {
  // ... (Keep your existing style variables for text, buttons, etc.)
  const headingColor = "text-white";
  const paragraphColor = isDarkMode ? "text-slate-300" : "text-slate-200";
  const profileBorderColor = "border-white/50";
  const primaryAccentDark = "text-blue-400";
  const secondaryAccentDark = "text-teal-400";
  const buttonClasses = `mt-8 inline-block px-8 py-3 text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
    ? 'bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-slate-900'
    : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 focus:ring-offset-slate-100'
  }`;

  // Animation variants (keep as is)
  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };
  const imageVariants = { /* ... */ };
  // Using the ones from the last working version for consistency in this example
   const containerVariantsAn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } };
   const itemVariantsAn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
   const imageVariantsAn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.1 } } };


  return (
    <section
      id="home"
      // The main section no longer has the backgroundImage directly.
      // It acts as a container and sets up the flex centering.
      // The background color here will be visible only if the blurred image doesn't cover fully or during loading.
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 py-16 md:py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-800'}`} // Fallback bg
    >
      {/* START OF CHANGES: Blurred Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat filter blur-sm scale-105" // Added filter blur-md and scale-105
        style={{ backgroundImage: `url(${bannerPhotoPath})` }}
        // scale-105 helps avoid blurry edges from showing the actual container edge
      ></div>
      {/* END OF CHANGES: Blurred Background Image Layer */}

      {/* Dark Overlay for Text Readability on Banner (Sits on top of blurred bg, below content) */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-0"></div> {/* z-0 is fine, content will be z-10 */}

      {/* Content Container (for two columns) - THIS REMAINS THE SAME */}
      <motion.div
        className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        variants={containerVariantsAn}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Profile Picture - THIS REMAINS THE SAME */}
        <motion.div
          className="flex justify-center md:justify-end items-center"
          variants={imageVariantsAn}
        >
          <motion.img
            src={profilePhotoPath}
            alt="Paramjeet Singh - Profile"
            className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 md:border-[6px] ${profileBorderColor} shadow-2xl`}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.4)' }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Right Column: Profile Content - THIS REMAINS THE SAME */}
        <motion.div
          className="text-center md:text-left flex flex-col justify-center items-center md:items-start"
          variants={itemVariantsAn}
        >
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 ${headingColor}`}>
            <Typewriter
              options={{
                strings: ["Welcome to My Portfolio", "I'm Paramjeet Singh"],
                autoStart: true,
                loop: true,
                wrapperClassName: `font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-teal-300 to-blue-400`,
                cursorClassName: `text-2xl md:text-3xl ${primaryAccentDark}`,
              }}
            />
          </h1>
          <p className={`text-lg md:text-xl mb-8 max-w-xl leading-relaxed ${paragraphColor}`}>
            A passionate developer focused on{" "}
            <span className={`font-semibold ${isDarkMode ? primaryAccentDark : 'text-blue-300'}`}>Machine Learning</span>,{" "}
            <span className={`font-semibold ${isDarkMode ? secondaryAccentDark : 'text-teal-300'}`}>Web Development</span>,{" "}
            and building creative, impactful solutions.
          </p>
          <a href="#about" className={buttonClasses} aria-label="Learn More About Me">
            Learn More
          </a>
        </motion.div>
      </motion.div>

      {/* Down arrow - THIS REMAINS THE SAME */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
         <a href="#about" aria-label="Scroll down">
            <svg className={`w-6 h-6 animate-bounce text-white/70 hover:text-white`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
         </a>
       </div>
    </section>
  );
};

export default Hero;