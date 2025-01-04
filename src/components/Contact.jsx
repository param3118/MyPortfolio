import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./EarthCanvas";
import Modal from "./Modal";
import emailjs from "emailjs-com";

const Contact = (isDarkMode ) => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "" || form.email.trim() === "" || form.message.trim() === "") {
      setModalContent({
        title: "Validation Error",
        message: "Please fill in all the fields properly.",
        buttonText: "Okay",
      });
      setIsModalVisible(true);
      return;
    }

    setLoading(true);
    emailjs
      .send(
        "service_tetxo02", // service ID
        "template_760i5e1", // template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "pP2NkV30ouyRTfJwo" // public key
      )
      .then(() => {
        setModalContent({
          title: "Success!",
          message: "Your message has been sent successfully!",
          buttonText: "Close",
        });
        setIsModalVisible(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setModalContent({
          title: "Error!",
          message: "Something went wrong. Please try again later.",
          buttonText: "Retry",
        });
        setIsModalVisible(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
  id="contact"
  className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-6 
    bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100 
    dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 overflow-auto"
>
  <div
    className="flex flex-col md:flex-row items-center justify-center w-full h-full"
  >
        {/* EarthCanvas Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 p-4 rounded-lg w-full max-w-md"
          style={{ maxWidth: "500px", height: "100%" }}
        >
          <EarthCanvas />
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md w-full max-w-md"
        >
          <h3 className="text-xl font-semibold text-center mb-4 text-gray-700 dark:text-gray-200">
            Contact Me
          </h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              aria-label="Your Message"
              className="w-full p-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded"
              rows="4"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded shadow-lg flex justify-center items-center"
            >
              {loading ? (
                <span className="animate-spin w-5 h-5 border-t-2 border-white rounded-full"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        {/* Modal Section */}
        {isModalVisible && (
          <Modal
            title={modalContent.title}
            message={modalContent.message}
            buttonText={modalContent.buttonText}
            setIsModalVisible={() => setIsModalVisible(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Contact;
