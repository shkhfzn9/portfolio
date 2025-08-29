import React from "react";
import Button from "../common/Button";
import profilePicture from "../../assets/profilePicture.png";

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
              {/* <a
                href="/Sheikh_Faizan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sheikh_Faizan_Resume.pdf"
              >
                <Button>
                  View Resume <i className="fas fa-download ml-2"></i>
                </Button>
              </a> */}
              <Button
                onClick={() => {
                  // 1. Open in new tab
                  window.open("/Sheikh_Faizan_Resume.pdf", "_blank");

                  // 2. Trigger download
                  const link = document.createElement("a");
                  link.href = "/Sheikh_Faizan_Resume.pdf";
                  link.download = "Sheikh_Faizan_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume <i className="fas fa-download ml-2"></i>
              </Button>
            </div>
          </div>
          {/* for my image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={profilePicture}
                alt="Sheikh Faizan - Software Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
