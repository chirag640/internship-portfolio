import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects limit={1} />
      <div className="flex flex-col items-center justify-center py-12 dark:bg-gray-800">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md font-normal text-gray-500 text-center px-3">
          Creating user experience and visually appealing design
        </p>
      </div>
    </>
  );
}
