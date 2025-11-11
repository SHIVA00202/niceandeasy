import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gymBg1 from "../assets/gymframe40.png";
import gymBg2 from "../assets/72b8fd170eb86b20bbfb832b3b2c9ea4.jpg";
import gymBg3 from "../assets/377995e55ae59d2d604a33248b4db519.jpg";
import gymBg4 from "../assets/377995e55ae59d2d604a33248b4db519.jpg";
import clientImage from "../assets/tridevpandey.png";
import Header from "../components/Header";
import Record from "../components/Record";
import OurService from "../components/OurServices";
import CoachingStyle from "../components/CoachingStyle";

const bgImages = [gymBg1, gymBg2, gymBg3, gymBg4];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen w-full overflow-hidden">
      <Header />

      {/* 🎥 Hero Section with Enhanced Background */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 w-full h-full">
          {bgImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url(${img})`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-[5vw] h-full md:flex-row md:justify-between md:text-left">
          {/* Text Content */}
          <div className="max-w-[90%] md:max-w-[550px]">
            <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-orange-500 drop-shadow-[0_4px_8px_rgba(255,102,0,0.5)] mb-3 tracking-wide uppercase">
              Tridev Pandey
            </h1>

            <p className="text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-gray-100 mb-6 drop-shadow-md">
              Hi, I'm <span className="font-semibold text-orange-400">TRIDEV PANDEY</span>, 
              a dedicated <span className="text-white font-medium">nutrition & fitness expert</span>. 
              I specialize in <span className="text-orange-400">fat-loss transformations</span> and sustainable health journeys.  
              With years of experience, I design personalized 
              <span className="text-white font-medium"> diet & workout programs </span>
              that help people achieve lasting results.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/about")}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-transform duration-200 hover:scale-105"
              >
                Explore More
              </button>
              <button
                onClick={() => setShowContactModal(true)}
                className="border border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-lg font-medium shadow-lg transition-transform duration-200 hover:scale-105"
              >
                Still Confused?
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="relative mt-10 md:mt-0 w-[clamp(180px,22vw,300px)] aspect-[27/37] rounded-2xl border-[3px] border-orange-500 shadow-[0_0_35px_12px_rgba(255,102,0,0.25)] bg-cover bg-center transform hover:scale-105 transition-all duration-500"
            style={{ backgroundImage: `url(${clientImage})` }}
          />
        </div>
      </div>

      {/* 🧱 Record Section - fixed spacing & position */}
      <section className="relative bg-[#121212] py-20 md:py-24 z-20 mt-[-1px]">
        <div className="max-w-7xl mx-auto px-6">
          <Record />
        </div>
      </section>

      {/* ⚙️ Our Services Section */}
      <section className="relative bg-[#181818] py-20 md:py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <OurService />
        </div>
      </section>
      <section className="relative bg-[#181818] py-20 md:py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
        <CoachingStyle/>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
