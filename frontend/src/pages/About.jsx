import profile from "../assets/profile.png";
import CopyEmailButton from "../components/CopyEmailButton";
import HireButton from "../components/HireButton";
import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();

  return (
    <>      <div className="px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-7">
        <h1 className="flex items-center gap-x-2 text-base sm:text-lg font-medium">
          <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>
      <div className="px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-7 flex flex-col">
        <div className="flex flex-col gap-y-3 sm:gap-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
            It's me {configData.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-500 text-center md:text-justify font-normal tracking-tight px-2 sm:px-0">
            {configData.aboutDesc}
          </p>
          <div className="flex justify-center md:justify-start mt-2 sm:mt-4">
            <img className="border rounded-md p-2 sm:p-3 shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md" src={profile} alt="About" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center">Let's work together.</h1>
        <p className="text-sm sm:text-base md:text-md font-normal text-gray-500 text-center px-3 mt-2">          Creating user experience and visually appealing designs.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-6 sm:py-8 px-4 sm:px-6">
        <div className="flex flex-col gap-y-2">          <div className="flex items-center text-center justify-center gap-x-3 sm:gap-x-4 flex-wrap gap-y-2 sm:gap-y-3">
            <HireButton />
            <CopyEmailButton />
          </div>
        </div>
      </div>
    </>
  );
}
