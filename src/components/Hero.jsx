import React from "react";
import Typewriter from "typewriter-effect";

const Hero = ({ isDarkMode }) => {
  const lightGradient = "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100";
  const darkGradient = "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const paragraphColor = isDarkMode ? "text-slate-400" : "text-slate-600";
  const primaryAccentLight = "text-blue-600";
  const primaryAccentDark = "text-blue-400";
  const secondaryAccentLight = "text-teal-600";
  const secondaryAccentDark = "text-teal-400";
  const buttonClasses = `mt-8 inline-block px-8 py-3 text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
      ? 'bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-slate-900'
      : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 focus:ring-offset-white'
  }`;

  return (
    <section
      id="home"
      className={`relative flex flex-col items-center justify-center min-h-screen text-center px-6 py-24 sm:py-32 overflow-hidden ${isDarkMode ? darkGradient : lightGradient} pb-20`}
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Profile Image with Current Path */}
        {/* <img
          src="....//public/my_iitkgp_photo.jpg"
          alt="Paramjeet Singh"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
        /> */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 ${headingColor}`}>
          <Typewriter
            options={{
              strings: ["I'm Paramjeet Singh", "ML Engineer & Web Developer"],
              autoStart: true,
              loop: true,
              wrapperClassName: `font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-teal-400' : 'from-blue-600 to-teal-600'}`,
              cursorClassName: `text-2xl md:text-3xl ${isDarkMode ? primaryAccentDark : primaryAccentLight}`,
            }}
          />
        </h1>
        <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${paragraphColor}`}>
          I’m a skilled{" "}
          <span className={`font-semibold ${isDarkMode ? primaryAccentDark : primaryAccentLight}`}>Machine Learning Engineer</span>{" "}
          and{" "}
          <span className={`font-semibold ${isDarkMode ? secondaryAccentDark : secondaryAccentLight}`}>Web Developer</span>{" "}
          specializing in creating data-driven solutions and scalable applications. I turn complex data into actionable insights with tools like Python, React, and TensorFlow.
        </p>
        <p className={`text-sm md:text-base mt-2 max-w-2xl mx-auto ${paragraphColor}`}>
          Recognized for innovative projects on GitHub and Kaggle.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#about" className={buttonClasses} aria-label="Learn More About Me">
            Learn More
          </a>
          <a
            href="#projects"
            className={`mt-8 inline-block px-8 py-3 text-base font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isDarkMode
                ? 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white focus:ring-blue-400'
                : 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-600'
            }`}
            aria-label="View My Projects"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down">
          <svg className={`w-6 h-6 animate-bounce ${isDarkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
