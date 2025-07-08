import React from 'react';
import SkillBar from './SkillBar';

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300">
      <div className="text-indigo-600 mb-4">
        <i className={`fas fa-${icon} text-4xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar 
            key={index}
            name={skill.name}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;