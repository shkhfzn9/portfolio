import React from 'react';

const Button = ({ 
  children, 
  primary = false, 
  className = '', 
  onClick, 
  ...props 
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg shadow-md transition duration-300 flex items-center cursor-pointer';
  const primaryClasses = 'bg-indigo-600 hover:bg-indigo-700 text-white';
  const secondaryClasses = 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50';
  
  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;