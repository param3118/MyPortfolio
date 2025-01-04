import React from "react";
import { FaLightbulb, FaCode, FaCogs } from "react-icons/fa";

const highlights = [
  {
    icon: <FaLightbulb />,
    title: "Machine Learning",
    description:
      "Building predictive models, neural networks, and optimizing systems for smarter solutions.",
    bg: "bg-indigo-500 dark:bg-indigo-700",
  },
  {
    icon: <FaCode />,
    title: "Data Science",
    description:
      "Harnessing data insights through visualization and analytics to drive impactful decisions.",
    bg: "bg-green-500 dark:bg-green-700",
  },
  {
    icon: <FaCogs />,
    title: "Creative Development",
    description:
      "Delivering cutting-edge projects that merge creativity with functionality to solve real-world problems.",
    bg: "bg-pink-500 dark:bg-pink-700",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center px-8 py-16 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      

      {/* Highlights Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 z-5">
        {highlights.map((highlight, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${highlight.bg}`}
          >
            <div className="text-5xl text-white mb-4">
              {highlight.icon}
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              {highlight.title}
            </h4>
            <p className="text-gray-200 text-sm text-center">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Waves */}
      {/* <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 pointer-events-none">
        <svg
          className="w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,213.3C384,224,480,192,576,160C672,128,768,96,864,106.7C960,117,1056,171,1152,176C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#f9fafb"
            className="dark:fill-gray-900"
          ></path>
        </svg>
      </div> */}
      <div className="absolute inset-x-0 top-0 transform -translate-y-2/3 pointer-events-none z-0">
          <svg
            className="w-full"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillOpacity="1"
              d="M0,320L48,314.7C96,309,192,299,288,261.3C384,224,480,160,576,133.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#ffffff"
              className="dark:fill-gray-800"
            ></path>
          </svg>
        </div>
    </section>
  );
};

export default About;
