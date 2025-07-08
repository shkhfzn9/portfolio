import React, { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../projects/ProjectCard";
import ProjectModal from "../projects/ProjectModal";
import AddProjectModal from "../projects/AddProjectModal";

const ProjectsSection = ({ id, projects, setProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My Projects"
          description="A collection of innovative software solutions I've developed, focusing on AI and machine learning applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}

          {/* Add Project Card */}
          {/* <div
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center h-full min-h-[350px] cursor-pointer"
            onClick={() => setShowAddProjectModal(true)}
          >
            <div className="text-indigo-600 mb-4">
              <i className="fas fa-plus-circle text-5xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Add New Project
            </h3>
          </div> */}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {showAddProjectModal && (
        <AddProjectModal
          onAddProject={handleAddProject}
          onClose={() => setShowAddProjectModal(false)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
