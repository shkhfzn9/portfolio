import React from "react";
import SectionHeader from "../common/SectionHeader";
import SkillCategory from "../ui/SkillCategory";

const Skills = ({ id }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "code",
      skills: [
        { name: "React", percentage: 90 },
        { name: "JavaScript/TypeScript", percentage: 85 },
        { name: "HTML/CSS", percentage: 95 },
        { name: "Redux", percentage: 80 },
      ],
    },

    {
      title: "Backend Development",
      icon: "server",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Express", percentage: 90 },
        { name: "MongoDB", percentage: 80 },
        { name: "RESTful APIs", percentage: 95 },
      ],
    },

    {
      title: "LLM & RAG",
      icon: "robot",
      skills: [
        { name: "Prompt Engineering", percentage: 95 },
        { name: "LLM API Integration", percentage: 90 },
        { name: "RAG Implementation", percentage: 85 },
        { name: "NLP", percentage: 85 },
      ],
    },
    {
      title: "Vector Databases",
      icon: "database",
      skills: [
        { name: "Pinecone", percentage: 90 },
        { name: "ChromaDB", percentage: 85 },
        { name: "MongoDB", percentage: 90 },
        { name: "SQL", percentage: 85 },
      ],
    },
    {
      title: ".NET Development",
      icon: "microsoft",
      skills: [
        { name: "C#", percentage: 90 },
        { name: ".NET Core", percentage: 85 },
        { name: "ASP.NET", percentage: 85 },
        { name: "Entity Framework", percentage: 80 },
      ],
    },
  ];

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills & Expertise"
          description="A comprehensive set of technical skills developed through years of experience in software development and AI research."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
