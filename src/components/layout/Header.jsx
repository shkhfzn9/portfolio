import React from 'react';

const Header = ({ activeSection, onNavClick }) => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-indigo-600">
              Sheikh Faizan
            </div>
          </div>
          
          {/* Always Visible Navigation */}
          <div className="flex items-center">
            <div className="flex items-baseline space-x-2 sm:space-x-4">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => onNavClick(section)}
                  className={`${
                    activeSection === section
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-indigo-500"
                  } px-2 py-2 sm:px-3 rounded-md text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;