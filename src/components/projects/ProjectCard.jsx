import React from "react";
import { useNavigate } from "react-router-dom";
import TechBadge from "../ui/TechBadge";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={handleProjectClick}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
          View Details <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
