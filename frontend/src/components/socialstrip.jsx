import React from "react";
import instagram from "../assets/Instagram.png";
import youtube from "../assets/YouTube.png";
import x from "../assets/X.png";
import facebook from "../assets/Facebook.png";

const SocialMediaStrip = () => {
  const socialLinks = [
    { name: "Instagram", icon: instagram, link: "https://instagram.com" },
    { name: "x.com", icon: x, link: "https://x.com" },
    { name: "Facebook", icon: facebook, link: "https://facebook.com" },
    { name: "Youtube", icon: youtube, link: "https://youtube.com" },
  ];

  return (
    <div className="flex justify-center items-center bg-white px-6 py-4 sm:py-6 gap-10 sm:gap-14 md:gap-16 lg:gap-20 flex-wrap w-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-[#333] font-semibold transition-all duration-300 hover:text-gray-600"
        >
          <div className="bg-white p-2 sm:p-2.5 rounded-lg flex items-center justify-center mr-2">
            <img
              src={social.icon}
              alt={social.name}
              className="w-[30px] sm:w-[36px] md:w-[40px] h-[30px] sm:h-[36px] md:h-[40px] transition-all duration-300 hover:scale-110"
            />
          </div>
          {/* Hide names on very small screens */}
          <span className="text-[16px] sm:text-[18px] md:text-[22px] font-bold transition-all duration-300 hidden xs:inline-block sm:inline">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaStrip;
