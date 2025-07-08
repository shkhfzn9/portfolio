import React from 'react';

const TechBadge = ({ tech }) => {
  return (
    <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
      {tech}
    </span>
  );
};

export default TechBadge;