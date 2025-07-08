import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;