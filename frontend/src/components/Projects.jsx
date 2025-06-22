import { useState } from "react";
import { useGitHubProjects } from "../hooks/useGitHubProjects";

export default function Projects({ limit }) {
  const { projects: githubProjects, loading, error, fromCache, refetch } = useGitHubProjects();
  const projects = githubProjects.slice(0, limit);

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

  // Loading state
  if (loading) {
    return (
      <div className="px-1 sm:px-2 dark:bg-gray-800 py-3 sm:py-4 md:py-5">
        <div className="flex flex-col bg-[#f0f8ff] rounded-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
            <div className="font-medium text-base sm:text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Loading Projects...</span>
            </div>
          </div>          <div className="flex flex-col space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white dark:bg-gray-700 rounded-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded-full w-16"></div>
                  </div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-3"></div>
                  <div className="flex gap-x-4">
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-12"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-12"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-1 sm:px-2 dark:bg-gray-800 py-3 sm:py-4 md:py-5">
      <div className="flex flex-col bg-[#f0f8ff] rounded-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 dark:bg-gray-800">
        <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
          <div className="font-medium text-base sm:text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <span>Projects</span>
            {fromCache && (
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                Cached
              </span>
            )}
            {error && (
              <button
                onClick={refetch}
                className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
                title="Retry fetching from GitHub"
              >
                Retry
              </button>
            )}
          </div>
          <a
            href="/projects"
            type="button"
            className="gap-x-1 sm:gap-x-2 text-blue-900 bg-white border dark:bg-dark-background-color dark:text-white border-blue-200 hover:border-blue-300 transition-all duration-300 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 text-center inline-flex items-center"
          >
            <span className="hidden sm:inline">View All</span>
            <span className="sm:hidden">All</span>
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

        {error && (
          <div className="mb-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Failed to load GitHub projects. Showing fallback data.
            </p>
          </div>
        )}

        <div className="flex flex-col">
          {projects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">No projects found</p>
            </div>
          ) : (
            projects.map((project, index) => (              <a
                key={project.id || index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="drop-shadow-md card bg-white dark:bg-dark-background-color dark:text-dark-text-color rounded-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4 my-1 sm:my-2 flex items-center justify-between hover:-translate-y-1 hover:scale-100 duration-300 transition ease-in-out delay-150 hover:shadow-sm border border-blue-200 hover:border-blue-300"
                href={project["project-url"] || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              ><div className="overflow-hidden flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-x-2 flex-1 min-w-0">
                      <h1 className="font-medium text-sm sm:text-base md:text-lg text-blue-900 dark:text-dark-text-color truncate">
                        {project["project-name"]}
                      </h1>
                      {project.language && (
                        <span 
                          className="text-xs px-2 py-0.5 rounded-full text-white flex-shrink-0"
                          style={{ backgroundColor: project.languageColor || '#6366f1' }}
                        >
                          {project.language}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-blue-500 dark:text-blue-400 text-xs sm:text-sm md:text-base line-clamp-2 mb-2">
                    {project["project-desc"]}
                  </p>
                  {(project.stars !== undefined || project.forks !== undefined) && (
                    <div className="flex items-center gap-x-4 mt-auto">
                      {project.stars !== undefined && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {project.stars}
                        </span>
                      )}
                      {project.forks !== undefined && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-x-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 717 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {project.forks}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <button className="ml-auto hidden sm:inline-block flex-shrink-0">
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
