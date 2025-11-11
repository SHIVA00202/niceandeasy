import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/98745.png";

const OurService = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full flex flex-col justify-center items-center bg-[#0f0f0f] py-[100px] px-5 overflow-hidden">
      {/* Decorative glowing elements */}
      <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,0,255,0.4)_10%,transparent_70%)] blur-[100px]"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.4)_10%,transparent_70%)] blur-[100px]"></div>
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,149,50,0.5)_20%,transparent_80%)] blur-[80px]"></div>

      {/* Content */}
      <h1 className="relative text-center text-white text-[clamp(2rem,5vw,3.5rem)] font-semibold mb-12 z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        Explore Diverse Workout Programs
      </h1>

      {/* Main Image */}
      <img
        src={Image}
        alt="Our Services"
        className="relative max-w-[120%] md:max-w-[80%] h-auto object-contain z-10"
      />

      {/* Button */}
      <button
        onClick={() => navigate("/courses")}
        className="relative mt-8 px-8 py-3 bg-[#b34a09] text-white text-[clamp(0.8rem,2vw,1rem)] rounded-md shadow-[0_0_20px_rgba(179,74,9,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(179,74,9,0.8)] z-10"
      >
        Explore More
      </button>
    </section>
  );
};

export default OurService;
