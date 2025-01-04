import React, { useState } from "react";

const Settings = ({ projects, setProjects, closeManageProjects }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true); // State to control form visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formValues.title || !formValues.description || !formValues.technologies || !formValues.link) {
      alert("All fields are required!");
      return;
    }

    if (editingIndex !== null) {
      // Editing an existing project
      const updatedProjects = [...projects];
      updatedProjects[editingIndex] = formValues;
      setProjects(updatedProjects);
    } else {
      // Adding a new project
      setProjects([...projects, formValues]);
    }

    // Clear form and exit Manage Projects
    setFormValues({ title: "", description: "", technologies: "", link: "" });
    setEditingIndex(null);
    setIsFormVisible(false); // Hide the form after saving
  };

  const handleEdit = (project, index) => {
    setFormValues(project);
    setEditingIndex(index);
    setIsFormVisible(true); // Show form in edit mode
  };

  const handleDelete = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Close the form when the button is clicked
    setFormValues({ title: "", description: "", technologies: "", link: "" }); // Optionally clear form fields
    setEditingIndex(null); // Optionally reset editing index
  };

  return (
    <div className="w-full p-6 bg-gradient-to-r from-gray-100 via-blue-100 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <h3 className="text-4xl font-bold mb-8">Manage Projects</h3>

      {isFormVisible && (
        <div>
          <input
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md mb-2"
            placeholder="Project Title"
          />
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md mb-2"
            placeholder="Project Description"
          ></textarea>
          <input
            name="technologies"
            value={formValues.technologies}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md mb-2"
            placeholder="Technologies Used"
          />
          <input
            name="link"
            value={formValues.link}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md mb-2"
            placeholder="Project Link"
          />
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            {editingIndex !== null ? "Save Changes" : "Add Project"}
          </button>
          {/* Close Button */}
          <button
            onClick={handleCloseForm}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Close
          </button>
        </div>
      )}

      <h4 className="text-xl font-semibold mt-6">Existing Projects</h4>
      {projects.map((project, index) => (
        <div key={index} className="border p-4 rounded-md">
          <h5 className="font-semibold text-lg">{project.title}</h5>
          <p>{project.description}</p>
          <p className="text-sm text-gray-600">{project.technologies}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
          <div className="mt-2">
            <button
              onClick={() => handleEdit(project, index)}
              className="text-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="ml-4 text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Settings;
