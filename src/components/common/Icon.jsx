import React from 'react';

const Icon = ({ name, className = '', ...props }) => {
  return (
    <i className={`fas fa-${name} ${className}`} {...props}></i>
  );
};

export default Icon;