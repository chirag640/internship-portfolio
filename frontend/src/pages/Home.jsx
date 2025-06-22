import Profile from "../components/Profile";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects limit={1} />      <div className="flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 dark:bg-gray-800 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-center">Let's work together.</h1>
        <p className="text-sm sm:text-base md:text-md font-normal text-gray-500 text-center px-3 mt-2">
          Creating user experience and visually appealing design
        </p>
      </div>
    </>
  );
}
