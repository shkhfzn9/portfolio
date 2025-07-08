import React from "react";
import Button from "../common/Button";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="pt-24 pb-20 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Software Developer & <br />
              <span className="text-indigo-600">AI Specialist</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I build innovative software solutions with a focus on artificial
              intelligence and machine learning. Transforming complex problems
              into elegant, efficient code.
            </p>
            <div className="flex space-x-4">
              <Button
                primary
                onClick={() =>
                  document.getElementById("projects").scrollIntoView()
                }
              >
                View Projects <i className="fas fa-arrow-right ml-2"></i>
              </Button>
              <Button>
                Download Resume <i className="fas fa-download ml-2"></i>
              </Button>
            </div>
          </div>
          {/* for my image */}
          {/* <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20male%20software%20developer%20with%20a%20friendly%20expression%2C%20wearing%20smart%20casual%20attire.%20The%20photo%20has%20a%20clean%2C%20minimalist%20background%20with%20soft%20lighting%20highlighting%20the%20subject.%20Modern%20professional%20headshot%20style%20with%20neutral%20colors.&width=400&height=400&seq=13&orientation=squarish"
                alt="Sheikh Faizan - Software Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
