import Projects from "../components/Projects";
import { getConfigData } from "../data/configReader";

export default function ProjectsPage() {
  const configData = getConfigData();
  const projects = configData.projects;

  return (
    <>
      <div className="px-7 py-7 bg-white dark:bg-gray-800">
        <h1 className="flex items-center gap-x-2 text-lg font-medium ">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          Projects
        </h1>
      </div>
      <div className="bg-white">
        <Projects limit={projects.length} />
      </div>
    </>
  );
}
