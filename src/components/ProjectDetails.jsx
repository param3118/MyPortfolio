// components/ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = ({ projects }) => {
  const { slug } = useParams(); // Get the project slug from the URL
  const project = projects.find((proj) => proj.slug === slug); // Find the project by slug

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-4">{project.description}</p>
      {project.technologies && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Technologies:</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      {project.features && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Features:</h2>
          <ul className="list-disc pl-6">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;