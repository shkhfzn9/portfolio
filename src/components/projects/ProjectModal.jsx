import React from "react";
import Button from "../common/Button";
import { getTechIcon } from "../../utils/helpers";

const ProjectModal = ({ project, onClose }) => {
  console.log("ProjectModal project data:", project);
  console.log("Key_Features:", project?.Key_Features);
  console.log("Technical_Implementation:", project?.Technical_Implementation);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header with project image */}
        <div className="relative">
          <div className="h-80 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
              <p className="text-lg text-gray-200 max-w-2xl">
                {project.shortDescription}
              </p>
            </div>
            <Button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20"
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="p-8">
          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <i
                      className={`fas fa-${getTechIcon(
                        tech
                      )} text-indigo-600 text-xl`}
                    ></i>
                  </div>
                  <span className="font-medium text-gray-800">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 gap-8 mb-8">
            {/* Left Column */}
            <div>
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-sm mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-project-diagram text-indigo-600 mr-3"></i>
                  Project Overview
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-users text-indigo-600 mr-2"></i>
                      <h4 className="font-semibold text-gray-800">
                        Target Users
                      </h4>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>Developers</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>Data Scientists</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span>Business Analysts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <i className="fas fa-trophy text-indigo-600 mr-2"></i>
                      <h4 className="font-semibold text-gray-800">
                        Achievements
                      </h4>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <i className="fas fa-award text-yellow-500 mr-2"></i>
                        <span>Best AI Solution 2025</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-star text-yellow-500 mr-2"></i>
                        <span>~ User Rating</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-users text-yellow-500 mr-2"></i>
                        <span>~ Active Users</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                    <i className="fas fa-star text-yellow-500 mr-3"></i>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.Key_Features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                        <span className="text-gray-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Implementation */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-bold text-xl text-gray-800 mb-4 flex items-center">
                    <i className="fas fa-code text-blue-500 mr-3"></i>
                    Technical Implementation
                  </h4>
                  <ul className="space-y-3">
                    {project.Technical_Implementation?.map((tech, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-layer-group text-blue-500 mt-1 mr-3"></i>
                        <div>
                          <span className="text-gray-800 font-medium">
                            {tech.Title}
                          </span>
                          <p className="text-gray-600 mt-1">
                            {tech.Description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Project Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Project Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md"
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-48 object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Demo & Documentation */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Project Demo & Documentation
                </h3>
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-[300px]"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Project Demo Video"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 text-white">
                    <h4 className="font-medium text-xl mb-2">
                      Project Walkthrough
                    </h4>
                    <p className="text-gray-400">
                      Comprehensive overview of features and implementation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-600">
                      Project Status: Active
                    </span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button
                    as="a"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    primary
                    className="group"
                  >
                    <i className="fas fa-external-link-alt mr-2 group-hover:translate-x-1 transition-transform"></i>
                    Live Demo
                  </Button>
                  <Button
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white"
                  >
                    <i className="fab fa-github mr-2 group-hover:rotate-12 transition-transform"></i>
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
