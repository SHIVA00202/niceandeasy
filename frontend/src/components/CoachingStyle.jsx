import React from "react";
import img1 from "../assets/coching-sec-img1.jpeg";
import img2 from "../assets/coching-sec-img2.jpeg";
import img3 from "../assets/coching-sec-img3.jpeg";
import img4 from "../assets/coching-sec-img4.jpeg";
import img5 from "../assets/coching-sec-img5.jpeg";
import img6 from "../assets/coching-sec-img6.jpeg";
import gymBackground from "../assets/gymbackground.png";

const coachingData = [
  { img: img1, text: "Complete Long Term Lifestyle Improvement" },
  { img: img2, text: "Goal and Health Oriented Coaching" },
  { img: img3, text: "In-Depth Health Analysis" },
  { img: img4, text: "24/7 Access to Experts & Weekly Check-ins" },
  { img: img5, text: "Complete Workout Planning & Cardio Protocols" },
  { img: img6, text: "Complete Nutritional Guidance" },
];

const CoachingStyle = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-16 px-6 text-center"
      style={{ backgroundImage: `url(${gymBackground})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <p className="text-lg md:text-xl font-medium uppercase text-gray-200 mb-2 tracking-wide">
          What We Do
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-10">
          <span className="text-red-600">#Nice&Easy</span> Coaching Style
        </h2>

        {/* Coaching Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {coachingData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.img}
                alt="Coaching"
                className="w-[65px] mb-4 rounded-md"
              />
              <p className="text-gray-900 text-[1.1rem] font-semibold text-left leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingStyle;
