// At the top of your Skills.jsx or in a separate data file (e.g., src/data/skillsData.js)
// For this example, I'll put it directly in Skills.jsx for simplicity.

// Import icons
import {
    FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase
  } from "react-icons/fa";
  import {
    SiCplusplus, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
    SiMongodb, SiExpress, SiTailwindcss, SiVite, SiPostman, SiFramer, SiDoxygen, SiRedis, SiNextdotjs, SiTypescript
  } from "react-icons/si";
  // Placeholder for a generic ML/AI icon if specific one isn't available or for categories
  import { TbBrain, TbTerminal2, TbWorldWww, TbTools } from "react-icons/tb"; // Example for categories
  
  const skillsData = [
    // Machine Learning & Data Science
    { name: "Python", icon: <FaPython size={32} className="text-blue-500" />, category: "ML & Data Science" },
    { name: "TensorFlow", icon: <SiTensorflow size={32} className="text-orange-500" />, category: "ML & Data Science" },
    { name: "PyTorch", icon: <SiPytorch size={32} className="text-red-500" />, category: "ML & Data Science" },
    { name: "Scikit-learn", icon: <SiScikitlearn size={32} className="text-orange-400" />, category: "ML & Data Science" },
    { name: "Pandas", icon: <SiPandas size={32} className="text-indigo-500" />, category: "ML & Data Science" },
    { name: "NumPy", icon: <SiNumpy size={32} className="text-blue-400" />, category: "ML & Data Science" },
    { name: "NLP", icon: <TbBrain size={32} className="text-purple-500" />, category: "ML & Data Science" }, // Generic for NLP concepts
    { name: "Transformers", icon: <TbBrain size={32} className="text-purple-600" />, category: "ML & Data Science" }, // Specific
  
    // Systems & Core CS
    { name: "C/C++", icon: <SiCplusplus size={32} className="text-blue-600" />, category: "Systems & Core" },
    { name: "Linux", icon: <FaLinux size={32} className="text-yellow-500" />, category: "Systems & Core" },
    { name: "OS Concepts", icon: <TbTerminal2 size={32} className="text-gray-500" />, category: "Systems & Core" },
    { name: "Data Structures", icon: <FaDatabase size={32} className="text-green-500" />, category: "Systems & Core" },
    { name: "Algorithms", icon: <TbBrain size={32} className="text-teal-500" />, category: "Systems & Core" }, // Reusing brain for algo thought
    { name: "Doxygen", icon: <SiDoxygen size={32} className="text-green-600" />, category: "Systems & Core" },
    { name: "Redis", icon: <SiRedis size={32} className="text-red-600" />, category: "Systems & Core" },
  
  
    // Web Development (MERN & Frontend)
    { name: "JavaScript", icon: <FaJsSquare size={32} className="text-yellow-400" />, category: "Web Development" },
    { name: "TypeScript", icon: <SiTypescript size={32} className="text-blue-500" />, category: "Web Development" },
    { name: "React", icon: <FaReact size={32} className="text-sky-500" />, category: "Web Development" },
    { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-500" />, category: "Web Development" },
    { name: "Express.js", icon: <SiExpress size={32} className="text-gray-500" />, category: "Web Development" },
    { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-600" />, category: "Web Development" },
    { name: "HTML5", icon: <FaHtml5 size={32} className="text-orange-600" />, category: "Web Development" },
    { name: "CSS3", icon: <FaCss3Alt size={32} className="text-blue-600" />, category: "Web Development" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-sky-400" />, category: "Web Development" },
    { name: "Next.js", icon: <SiNextdotjs size={32} className="text-black dark:text-white" />, category: "Web Development" },
    { name: "Framer Motion", icon: <SiFramer size={32} className="text-purple-500" />, category: "Web Development" },
  
  
    // Tools & Platforms
    { name: "Git & GitHub", icon: <FaGitAlt size={32} className="text-orange-600" />, category: "Tools & Platforms" },
    { name: "Docker", icon: <FaDocker size={32} className="text-blue-500" />, category: "Tools & Platforms" },
    { name: "AWS", icon: <FaAws size={32} className="text-orange-500" />, category: "Tools & Platforms" }, // (Basic exposure)
    { name: "VS Code", icon: <TbTools size={32} className="text-sky-600" />, category: "Tools & Platforms" }, // Generic tools icon
    { name: "Postman", icon: <SiPostman size={32} className="text-orange-500" />, category: "Tools & Platforms" },
    { name: "Vite", icon: <SiVite size={32} className="text-purple-500" />, category: "Tools & Platforms" },
  ];
  