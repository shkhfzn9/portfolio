import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.jsx";
import TechBadge from "../components/ui/TechBadge.jsx";
import { getTechIcon } from "../utils/helpers.jsx";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
          <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tech Stack</h2>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Overview */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-project-diagram text-indigo-600 mr-3"></i>
                Project Overview
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-star text-yellow-500 mr-3"></i>
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.Key_Features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Implementation */}
            <div className="bg-white rounded-xl p-8 shadow-md mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-code text-blue-500 mr-3"></i>
                Technical Implementation
              </h3>
              <div className="space-y-6">
                {project.Technical_Implementation?.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-layer-group text-blue-500 mt-1 mr-3"></i>
                    <div>
                      <h4 className="text-gray-800 font-medium mb-1">
                        {tech.Title}
                      </h4>
                      <p className="text-gray-600">{tech.Description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Project Info */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-calendar text-indigo-600 mr-3"></i>
                  <span className="text-gray-600">2025 - Present</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-users text-indigo-600 mr-3"></i>
                  <span className="text-gray-600">~ Users</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star text-indigo-600 mr-3"></i>
                  <span className="text-gray-600">~ Rating</span>
                </div>
              </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////// */}

            {/* Project Links */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Links
              </h3>
              <div className="space-y-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg flex items-center justify-center transition duration-300"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg flex items-center justify-center transition duration-300"
                >
                  <i className="fab fa-github mr-2"></i>
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Project Demo & Documentation
          </h2>
          <div className="grid grid-cols-1 gap-8 mb-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[400px]"
                  src={project.YoutubeLink}
                  title="Project Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6 text-white">
                <h4 className="font-medium text-xl mb-2">
                  Project Walkthrough
                </h4>
                <p className="text-gray-400">
                  Watch a comprehensive overview of the project features and
                  implementation details. This demo covers the core
                  functionalities and technical architecture.
                </p>
                <div className="mt-4 flex space-x-4">
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300">
                    <i className="fas fa-file-alt"></i>
                    <span>Documentation</span>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300">
                    <i className="fas fa-book"></i>
                    <span>API Reference</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Quick Start Guide
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-semibold">1</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-800">
                      Installation
                    </h5>
                    <p className="text-gray-600 mt-1">
                      npm install{" "}
                      {project.title.toLowerCase().replace(/\s+/g, "-")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-semibold">2</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-800">
                      Configuration
                    </h5>
                    <p className="text-gray-600 mt-1">
                      Set up your environment variables and initialize the
                      project
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-semibold">3</span>
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-gray-800">Usage</h5>
                    <p className="text-gray-600 mt-1">
                      Import and use the components in your application
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover object-top hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
