import React from 'react';

const SkillBar = ({ name, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;