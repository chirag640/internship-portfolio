import { FaTwitter, FaInstagram, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import configData from "../data/config.json";

export default function Social() {
  const socialLinks = configData.social;

  const iconMap = {
    FaTwitter,
    FaInstagram,
    FaDribbble,
    FaGithub,
    FaLinkedinIn,
  };

  return (
    <>      <div className="px-1 sm:px-2 py-1 sm:py-2">
        <div className="flex items-center justify-between px-3 sm:px-5 md:px-7 py-4 sm:py-5 md:py-7 bg-[#f0f8ff] rounded-lg dark:bg-dark-background-color">
          <div className="font-medium text-sm sm:text-base md:text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            <span className="hidden sm:inline">Follow Me</span>
            <span className="sm:hidden">Follow</span>
          </div>
          <div className="flex gap-x-1 sm:gap-x-2">
            {socialLinks.map((socialLink, index) => {
              const IconComponent = iconMap[socialLink.icon];

              return (                <a
                  key={index}
                  href={socialLink.link}
                  className="bg-white p-1.5 sm:p-2 rounded-full duration-300 border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 drop-shadow-sm touch-target flex items-center justify-center"
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 hover:text-blue-700 transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
