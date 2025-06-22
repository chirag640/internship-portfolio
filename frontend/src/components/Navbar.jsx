import React from "react";
import { NavLink } from "react-router-dom";
import HireButton from "./HireButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <>      <header className="py-2 px-2 fixed top-0 left-0 w-full z-40">
        <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
          <nav className="backdrop-filter backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-xl flex items-center justify-between shadow-md px-3 sm:px-4 md:px-6 py-2">
            <div className="flex gap-x-1 sm:gap-x-2 md:gap-x-3"><NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-100 dark:bg-gray-700 rounded-full p-1.5 sm:p-2 transition-all duration-300 flex items-center justify-center"
                    : "opacity-50 p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:opacity-100 flex items-center justify-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </NavLink>              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-100 dark:bg-gray-700 rounded-full p-1.5 sm:p-2 transition-all duration-300 flex items-center justify-center"
                    : "opacity-50 p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:opacity-100 flex items-center justify-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </NavLink>              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-100 dark:bg-gray-700 rounded-full p-1.5 sm:p-2 transition-all duration-300 flex items-center justify-center"
                    : "opacity-50 p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:opacity-100 flex items-center justify-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </NavLink>              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-100 dark:bg-gray-700 rounded-full p-1.5 sm:p-2 transition-all duration-300 flex items-center justify-center"
                    : "opacity-50 p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300 hover:opacity-100 flex items-center justify-center"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-color"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 11.25h-6M12 15h7.5M21 21.75H3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h5.25L10.5 3h3l2.25 1.5H21a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
                  />
                </svg>
              </NavLink>            </div>
            <div className="flex items-center gap-x-1 sm:gap-x-2">
              <HireButton />
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
