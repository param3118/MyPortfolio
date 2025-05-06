import React, { useRef, useState,useEffect  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa"; // Added icons

const Contact = ({ isDarkMode }) => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Consistent background gradients (Match Projects/Hero or define globally)
  const lightGradient = "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100";
  const darkGradient = "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900";

  // Consistent text colors
  const headingColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const paragraphColor = isDarkMode ? "text-slate-400" : "text-slate-600";
  const inputBgColor = isDarkMode ? "bg-slate-800" : "bg-slate-100";
  const inputTextColor = isDarkMode ? "text-slate-200" : "text-slate-900";
  const inputBorderColor = isDarkMode ? "border-slate-600" : "border-slate-300";
  const focusRingColor = isDarkMode ? "focus:ring-blue-500" : "focus:ring-blue-600";

  // Consistent Button Style (Matches Hero section button)
  const buttonClasses = `w-full p-3 font-semibold rounded-lg shadow-lg flex justify-center items-center gap-2 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
    ? 'bg-blue-600 hover:bg-blue-500 text-white focus:ring-blue-500 focus:ring-offset-slate-900'
    : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-600 focus:ring-offset-white'
  }`;
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);
  // Animation variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "" || form.email.trim() === "" || form.message.trim() === "") {
      setModalContent({
        title: "Hold On!",
        message: "Please fill in all fields before sending.",
        buttonText: "Okay",
        isError: true,
      });
      setIsModalVisible(true);
      return;
    }

    setLoading(true);
    
    
    // Replace with your actual EmailJS Service ID, Template ID, and Public Key
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name, // Ensure template variables match
          to_name: "Paramjeet", // Or your name
          from_email: form.email,
          to_email: "3118ps9@gmail.com", // Your receiving email
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY      // Replace with your EmailJS Public Key
      )
      .then(() => {
        setModalContent({
          title: "Success!",
          message: "Message sent successfully! I'll get back to you soon.",
          buttonText: "Great!",
          isError: false,
        });
        setIsModalVisible(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // Log the error for debugging
        setModalContent({
          title: "Oops!",
          message: "Something went wrong. Please try again later or reach out directly via email.",
          buttonText: "Okay",
          isError: true,
        });
        setIsModalVisible(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className={`w-full min-h-screen flex items-center justify-center p-6 md:p-12 ${isDarkMode ? darkGradient : lightGradient} overflow-hidden`}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-2xl rounded-xl p-8 md:p-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      >
        {/* Left Column: Contact Info */}
        <motion.div className="lg:w-1/3" variants={itemVariants}>
          <h2 className={`text-3xl font-bold mb-4 ${headingColor}`}>Get In Touch</h2>
          <p className={`mb-6 ${paragraphColor}`}>
            Have a project in mind, a question, or just want to connect? Feel free to send me a message!
          </p>
          <div className="space-y-4">
            <a href="mailto:3118ps9@gmail.com" className={`flex items-center gap-3 ${paragraphColor} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
              <FaEnvelope className="text-blue-600 dark:text-blue-400" size={20} />
              <span>3118ps9@gmail.com</span> 
            </a>
            <a href="https://www.linkedin.com/in/paramjeet-singh-b50733202/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 ${paragraphColor} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
              <FaLinkedin className="text-blue-600 dark:text-blue-400" size={20} />
              <span>LinkedIn Profile</span> 
            </a>
            <a href="https://github.com/param3118" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 ${paragraphColor} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}>
              <FaGithub className="text-blue-600 dark:text-blue-400" size={20} />
              <span>GitHub Profile</span> 
            </a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div className="lg:w-2/3" variants={itemVariants}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className={`block text-sm font-medium mb-1 ${paragraphColor}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                aria-label="Your Name"
                className={`w-full p-3 rounded-md border ${inputBorderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 ${focusRingColor} transition`}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${paragraphColor}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                aria-label="Your Email"
                className={`w-full p-3 rounded-md border ${inputBorderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 ${focusRingColor} transition`}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className={`block text-sm font-medium mb-1 ${paragraphColor}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or query..."
                aria-label="Your Message"
                className={`w-full p-3 rounded-md border ${inputBorderColor} ${inputBgColor} ${inputTextColor} focus:outline-none focus:ring-2 ${focusRingColor} transition`}
                rows="5"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <button type="submit" className={buttonClasses} disabled={loading}>
                {loading ? (
                  <span className="animate-spin w-5 h-5 border-t-2 border-b-2 border-white rounded-full"></span>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>

      {/* Feedback Modal */}
      <AnimatePresence>
        {isModalVisible && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setIsModalVisible(false)} // Close modal on overlay click
          >
            <motion.div
              className={`relative rounded-lg shadow-xl p-6 w-full max-w-md ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              variants={itemVariants} // Reuse item animation for content
            >
              <h3 className={`text-xl font-bold mb-3 ${modalContent.isError ? (isDarkMode ? 'text-red-400' : 'text-red-600') : (isDarkMode ? 'text-green-400' : 'text-green-600')}`}>
                {modalContent.title}
              </h3>
              <p className={`mb-5 ${paragraphColor}`}>{modalContent.message}</p>
              <button
                onClick={() => setIsModalVisible(false)}
                className={`w-full py-2 px-4 rounded-md font-semibold transition ${
                  modalContent.isError
                    ? (isDarkMode ? 'bg-red-600 hover:bg-red-500' : 'bg-red-600 hover:bg-red-700')
                    : (isDarkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700')
                  } text-white focus:outline-none focus:ring-2 ${modalContent.isError ? 'focus:ring-red-500' : 'focus:ring-blue-500'} focus:ring-offset-2 ${isDarkMode ? 'focus:ring-offset-slate-800' : 'focus:ring-offset-white'}`}
              >
                {modalContent.buttonText}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
