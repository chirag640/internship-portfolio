import React from "react";
import profile from "../assets/profile.png";
import CopyEmailButton from "./CopyEmailButton";
import { getConfigData } from "../data/configReader";
import HireButton from "./HireButton";

export default function Profile() {
  const configData = getConfigData();

  const workStatusTextClass =
    configData.status === "on"
      ? "bg-[#cceeff] text-[#0077cc] dark:bg-[#334455] dark:text-[#0077cc] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium transition-all duration-300"
      : "bg-[#ffcccb] text-[#ff0000] dark:bg-[#553333] dark:text-[#ff0000] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium transition-all duration-300";
  
  const workStatusClass =
    configData.status === "on"
      ? "w-1.5 h-1.5 bg-[#0077cc] dark:bg-[#0077cc] rounded-full transition-all duration-300"
      : "w-1.5 h-1.5 bg-[#ff0000] dark:bg-[#ff0000] rounded-full transition-all duration-300";
  
  const workStatusText = configData.status === "on" ? "available for work" : "busy";

  return (
    <>      <div className="flex items-center justify-between px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-7 dark:bg-gray-800">
        <div className="font-medium text-sm sm:text-base md:text-lg flex items-center gap-x-2 sm:gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full transition-all duration-300"></div>
          {configData.job}
        </div>
        <div className={workStatusTextClass}>
          <div className="text-xs sm:text-sm font-medium flex items-center gap-x-1">
            <div className={workStatusClass}></div>
            <span className="text-xs">{workStatusText}</span>
          </div>
        </div>
      </div>      <div className="px-3 sm:px-5 md:px-7 py-4 sm:py-6 md:py-7 mt-2 sm:mt-3 md:mt-4 flex flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3 dark:bg-gray-800">
        <div className="flex flex-col gap-y-2 sm:gap-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-center md:text-justify tracking-tighter text-[#003366] dark:text-white transition-all duration-300">
            I'm {configData.name}
          </h1>
          <p className="md:w-3/4 text-base sm:text-lg text-gray-600 dark:text-gray-300 text-center md:text-justify font-normal tracking-tight transition-all duration-300 px-2 sm:px-0">
            {configData.desc}
          </p>          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal pt-4 sm:pt-6 gap-x-3 sm:gap-x-4 flex-wrap gap-y-2 sm:gap-y-3">
            <HireButton />
            <CopyEmailButton />
          </div>
        </div>
        <div className="rounded-full p-2 flex items-center justify-center mb-6 sm:mb-8 md:mb-10 transition-all duration-300">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 border-2 flex items-center justify-center transition-all duration-300 hover:scale-105">
            <img
              src={profile}
              alt=""
              className="max-w-full max-h-full rounded-full transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
}
