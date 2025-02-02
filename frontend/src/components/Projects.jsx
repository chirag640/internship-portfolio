import { useState } from "react";
import { getConfigData } from "../data/configReader";

export default function Projects({ limit }) {
  const configData = getConfigData();
  const projects = configData.projects.slice(0, limit);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-blue-500 transition delay-150"
    : "w-6 h-6 text-blue-300";

  return (
    <div className="px-2 dark:bg-gray-800 py-5">
      <div className="flex flex-col bg-[#f0f8ff] rounded-lg px-5 py-5 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-5">
          <div className="font-medium text-lg flex items-center gap-x-2">
            
            
          </div>
          <a
            href="/projects"
            type="button"
            className="gap-x-2 text-blue-900 bg-white border dark:bg-dark-background-color dark:text-white border-blue-200 hover:border-blue-300 transition-all duration-300 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <a
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="drop-shadow-md card bg-white dark:bg-dark-background-color dark:text-dark-text-color rounded-lg px-5 py-3 my-2 gap-x-3 flex flex-col md:flex-none md:flex-row hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-blue-200 hover:border-blue-300"
              href={project["project-url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="overflow-hidden flex items-center gap-x-3">
                <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={project["project-image-url"]}
                    alt={project["project-name"]}
                  />
                </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-medium text-lg text-blue-900 dark:text-dark-text-color">
                  {project["project-name"]}
                </h1>
                <p className="text-blue-500 text-md">
                  {project["project-desc"]}
                </p>
              </div>
              </div>
              <button className="ml-auto hidden md:inline-block">
                <svg
                  className={svgClass}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
