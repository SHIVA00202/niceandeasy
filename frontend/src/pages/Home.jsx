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

const bgImages = [gymBg1, gymBg2, gymBg3, gymBg4];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen w-full relative overflow-hidden">
      <Header />

      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[770px] px-[5vw] md:flex-row md:justify-around md:text-left">
        
        {/* Text Content */}
        <div className="max-w-[80%] md:max-w-[600px]">
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-serif font-normal drop-shadow-md mb-4">
            Tridev Pandey
          </h1>

          <p className="text-[clamp(1rem,2vw,1.2rem)] leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-orange-400">TRIDEV PANDEY</span>. 
            I specialize in nutrition, business, and solving fat-loss challenges. 
            With years of experience, I help individuals achieve their health goals 
            through customized strategies, diet plans, and fitness coaching. 
            My mission is to educate and empower people to lead a healthy lifestyle.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/about")}
              className="bg-[#b34a09] hover:bg-[#8c3707] px-6 py-3 rounded-lg transition-transform duration-200 transform hover:scale-105"
            >
              Explore More
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="bg-[#b34a09] hover:bg-[#8c3707] px-6 py-3 rounded-lg transition-transform duration-200 transform hover:scale-105"
            >
              Still Confused?
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="relative mt-6 md:mt-0 w-[clamp(140px,20vw,270px)] aspect-[27/37] rounded-2xl border-4 border-white shadow-[0_0_30px_20px_rgba(0,0,0,0.25)] bg-cover bg-center"
          style={{ backgroundImage: `url(${clientImage})` }}
        />
      </div>
      <Record/>
      <OurService/>
      
    </div>
  );
};

export default Home;
