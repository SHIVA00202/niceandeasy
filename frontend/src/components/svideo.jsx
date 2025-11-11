import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video1.mp4";
import uploadedImage from "../assets/kartik.jpg";
import img1 from "../assets/coching-sec-img1.png";
import img2 from "../assets/coching-sec-img2.png";
import img3 from "../assets/coching-sec-img3.png";


const SVideo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-6 sm:px-8 md:px-12 lg:px-20 py-10 bg-[#0f0f0f] overflow-hidden">
      {/* Title */}
      <div className="text-center mb-4">
        <p className="text-white text-[clamp(2rem,4vw,3.5rem)] font-bold font-sans">
          Premium Experience
        </p>
      </div>

      {/* ========== FIRST ROW ========== */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 w-full">
        {/* Large Image */}
        <div className="w-full sm:w-[350px] lg:w-[350px] h-[338px] bg-[#e0e0e0] rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(255,255,255,0.38)]">
          <img
            src={uploadedImage}
            alt="Gym Facility"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Group Class Access */}
        <div className="w-full sm:w-[350px] lg:w-[350px] h-[338px] bg-white rounded-xl p-6 shadow-[0_5px_15px_rgba(255,255,255,0.38)] flex flex-col justify-start text-left">
          <div className="w-[80px] mb-4">
            <img src={img1} alt="Group Class" className="w-full" />
          </div>
          <h2 className="text-black font-bold text-[clamp(1.5rem,3vw,2rem)] mt-2">
            Group Class Access
          </h2>
          <p className="text-[15px] text-gray-800 mt-2">
            Get unlimited access to all group classes from cardio to yoga.
          </p>
        </div>

        {/* Video */}
        <div className="w-full sm:w-[500px] h-[338px] bg-[#e0e0e0] rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(255,255,255,0.38)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* ========== SECOND ROW ========== */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 w-full mt-6">
        {/* Video */}
        <div className="w-full sm:w-[500px] h-[338px] bg-[#e0e0e0] rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(255,255,255,0.38)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* AI Driven Workout */}
        <div className="w-full sm:w-[350px] lg:w-[350px] h-[338px] bg-white rounded-xl p-6 shadow-[0_5px_15px_rgba(255,255,255,0.38)] flex flex-col justify-start text-left">
          <div className="w-[80px] mb-4">
            <img src={img2} alt="AI Workout" className="w-full" />
          </div>
          <h2 className="text-black font-bold text-[clamp(1.5rem,3vw,2rem)] mt-2">
            AI Driven Workout & Diet Plan
          </h2>
          <p className="text-[15px] text-gray-800 mt-2">
            Personalized AI-driven workout and diet plans for optimized results.
          </p>
        </div>

        {/* Expert Guidance */}
        <div className="w-full sm:w-[350px] lg:w-[350px] h-[338px] bg-[#f5f5f5] rounded-xl p-6 shadow-[0_5px_15px_rgba(255,255,255,0.38)] flex flex-col justify-start text-left">
          <div className="w-[80px] mb-4">
            <img src={img3} alt="Expert Guidance" className="w-full" />
          </div>
          <h2 className="text-black font-bold text-[clamp(1.5rem,3vw,2rem)] mt-2">
            Expert Guidance & Support
          </h2>
          <p className="text-[15px] text-gray-800 mt-2">
            Get expert guidance from certified trainers to reach your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SVideo;
