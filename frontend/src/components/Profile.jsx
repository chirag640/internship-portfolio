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
    <>
      <div className="flex items-center justify-between px-7 py-7 dark:bg-gray-800">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full transition-all duration-300"></div>
          {configData.job}
        </div>
        <div className={workStatusTextClass}>
          <div className="text-sm font-medium flex items-center gap-x-1">
            <div className={workStatusClass}></div>
            <span className="text-xs">{workStatusText}</span>
          </div>
        </div>
      </div>
      <div className="px-7 py-7 mt-4 flex flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3 dark:bg-gray-800">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-3xl md:text-3xl font-semibold text-center md:text-justify tracking-tighter text-[#003366] dark:text-white transition-all duration-300">
            I'm {configData.name}
          </h1>
          <p className="md:w-3/4 text-lg text-gray-600 dark:text-gray-300 text-center md:text-justify font-normal tracking-tight transition-all duration-300">
            {configData.desc}
          </p>
          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal pt-6">
            <HireButton />
            <CopyEmailButton />
          </div>
        </div>
        <div className="rounded-full p-2 flex items-center justify-center mb-10 transition-all duration-300">
          <div className="w-36 h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-700 dark:to-gray-900 border-2 flex items-center justify-center transition-all duration-300 hover:scale-105">
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
