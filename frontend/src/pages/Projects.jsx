import Projects from "../components/Projects";
import { useGitHubProjects } from "../hooks/useGitHubProjects";

export default function ProjectsPage() {
  const { projects } = useGitHubProjects();

  return (
    <>      <div className="px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-7 bg-white dark:bg-gray-800">
        <h1 className="flex items-center gap-x-2 text-base sm:text-lg font-medium ">
          <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-400 rounded-full"></div>
          Projects
        </h1>
      </div>
      <div className="bg-white">
        <Projects limit={projects.length} />
      </div>
    </>
  );
}
