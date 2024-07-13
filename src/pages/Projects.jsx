import Projects from "../components/Projects";
import { getConfigData } from "../data/configReader";

export default function ProjectsPage() {
  const configData = getConfigData();
  const projects = configData.projects;

  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-gray-800 my-8">Projects</h1>
      <Projects limit={projects.length} />
    </>
  );
}
