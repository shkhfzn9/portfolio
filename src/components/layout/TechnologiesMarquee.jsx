import { FaReact, FaNodeJs, FaPython, FaMicrosoft } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiDotnet,
  SiLangchain,
  SiOpenai,
  SiHuggingface,
} from "react-icons/si";
import { MdOutlineBubbleChart } from "react-icons/md";

import { useEffect } from "react";

const technologies = [
  { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-600" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-600" /> },
  { name: "C#", icon: <FaMicrosoft className="text-purple-700" /> },
  { name: ".NET", icon: <SiDotnet className="text-indigo-600" /> },
  { name: "LangChain", icon: <SiLangchain className="text-blue-700" /> },
  { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-500" /> },

  {
    name: "LangGraph",
    icon: <MdOutlineBubbleChart className="text-pink-500" />,
  },
  { name: "Crew AI", icon: <SiOpenai className="text-gray-800" /> },
];

export default function TechnologiesMarquee() {
  // Inject animation CSS only once
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideRight {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes slideLeft {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="w-full bg-black py-4 overflow-hidden">
      <div className="text-white font-bold text-xl text-center mb-4">
        Technologies I have Worked With
      </div>

      <div className="relative flex flex-col gap-4">
        {/* Row 1: Left to Right */}
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: "slideRight 20s linear infinite",
          }}
        >
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-lg px-4 text-white"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: "slideLeft 20s linear infinite",
          }}
        >
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-lg px-4 text-white"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
