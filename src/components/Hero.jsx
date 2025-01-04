import React from "react";
import ThreeD from "./ThreeD";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[70vh] text-center bg-gradient-to-r from-gray-100 via-blue-300 to-gray-100 from-secondary to-primary">
      
      {/* Hero Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 animate-fadeIn">
          <Typewriter
            options={{
              strings: ["Welcome to My Portfolio", "I'm Paramjeet Singh"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p className="text-lg md:text-base text-gray-200 mb-4 max-w-xl mx-auto leading-relaxed">
          I’m a passionate developer focused on{" "}
          <span className="text-accent  font-semibold">Machine Learning</span>,{" "}
          <span className="text-yellow-400 lg font-semibold">Web Development</span>,
          <span className="text-orange-400 font-semibold">Coding </span>, and{" "}
          <span className="text-pink-500 font-semibold">Content Creation</span>.
        </p>

        {/* 3D Visualization */}
        {/* <div className="w-full h-56 sm:h-72 max-w-3xl mx-auto">
          <ThreeD />
        </div> */}

        {/* Call-to-Action Button */}
        <a
          href="#projects"
          className="mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold rounded-full shadow-lg transform hover:scale-105 hover:shadow-xl transition-all"
          aria-label="Explore My Projects"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
