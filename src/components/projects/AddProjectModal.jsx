import React, { useState } from "react";
import Button from "../common/Button";

const AddProjectModal = ({ onAddProject, onClose }) => {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    shortDescription: "",
    technologies: "",
    image: "",
    githubLink: "",
    demoLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const techArray = newProject.technologies
      .split(",")
      .map((tech) => tech.trim());

    const projectToAdd = {
      id: Date.now(), // Using timestamp as temporary ID
      ...newProject,
      technologies: techArray,
      gallery: [],
    };

    onAddProject(projectToAdd);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Add New Project</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProject.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Enter project title"
              required
            />
          </div>

          <div>
            <label
              htmlFor="shortDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Short Description
            </label>
            <input
              type="text"
              id="shortDescription"
              name="shortDescription"
              value={newProject.shortDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Brief project description (displayed on card)"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newProject.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Detailed project description"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="technologies"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Technologies Used
            </label>
            <input
              type="text"
              id="technologies"
              name="technologies"
              value={newProject.technologies}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Comma-separated list of technologies (e.g. React, Node.js, MongoDB)"
              required
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              value={newProject.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="URL to project image"
              required
            />
          </div>

          <div>
            <label
              htmlFor="githubLink"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              GitHub Repository URL
            </label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              value={newProject.githubLink}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="GitHub repository URL"
              required
            />
          </div>

          <div>
            <label
              htmlFor="demoLink"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Live Demo URL
            </label>
            <input
              type="url"
              id="demoLink"
              name="demoLink"
              value={newProject.demoLink}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              placeholder="Live demo URL"
              required
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button type="submit" primary className="px-6 py-3">
              Add Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
