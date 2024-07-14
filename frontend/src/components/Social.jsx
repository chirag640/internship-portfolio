import { FaXTwitter, FaInstagram, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import configData from "../data/config.json";

export default function Social() {
  const socialLinks = configData.social;

  const iconMap = {
    FaXTwitter,
    FaInstagram,
    FaDribbble,
    FaGithub,
    FaLinkedinIn,
  };

  return (
    <>
      <div className="px-2 py-2">
        <div className="flex items-center justify-between px-7 py-7 bg-[#f0f8ff] rounded-lg">
          <div className="font-medium text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            Follow Me
          </div>
          <div className="flex gap-x-1">
            {socialLinks.map((socialLink, index) => {
              const IconComponent = iconMap[socialLink.icon];

              return (
                <a
                  key={index}
                  href={socialLink.link}
                  className="bg-white p-2 rounded-full duration-300 border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50 drop-shadow-sm"
                >
                  {<IconComponent size={20} className="text-blue-500 hover:text-blue-700 transition-colors duration-300" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
