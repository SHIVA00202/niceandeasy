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
import TrainWithUs from "../components/trainwithus";
import SVideo from "../components/svideo";
import HeroTestimonials from "../components/Testimonials";
import SocialMediaStrip from "../components/socialstrip";
import Footer from "../components/Footer";

const bgImages = [gymBg1, gymBg2, gymBg3, gymBg4];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white w-full overflow-x-hidden font-inter scroll-smooth">
      <Header />

      {/* ============ HERO SECTION ============ */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Transition (no black film) */}
        <div className="absolute inset-0">
          {bgImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center md:text-left max-w-[600px] space-y-6">
            <h1 className="text-[clamp(2.4rem,4vw,4rem)] font-extrabold text-orange-500 uppercase drop-shadow-[0_4px_10px_rgba(255,102,0,0.4)]">
              Tridev Pandey
            </h1>

            <p className="text-[1.1rem] text-gray-100 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-orange-400 font-semibold">
                Tridev Pandey
              </span>
              , a{" "}
              <span className="text-white font-semibold">
                Nutrition & Fitness Coach
              </span>{" "}
              specializing in{" "}
              <span className="text-orange-400">Body Transformation</span> and{" "}
              <span className="text-orange-400">Fat Loss</span>. I help people
              achieve real results through smart training, nutrition, and
              mindset.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/about")}
                className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-medium shadow-[0_0_20px_rgba(255,102,0,0.4)] hover:scale-105 transition-all"
              >
                Explore More
              </button>
              <button
                onClick={() => alert("Contact form coming soon!")}
                className="border border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-medium shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:scale-105 transition-all"
              >
                Still Confused?
              </button>
            </div>
          </div>

          <div
            className="w-[clamp(200px,25vw,360px)] aspect-[27/37] rounded-2xl border-[3px] border-orange-500 shadow-[0_0_35px_10px_rgba(255,102,0,0.25)] bg-cover bg-center transform hover:scale-105 transition-all duration-500"
            style={{ backgroundImage: `url(${clientImage})` }}
          />
        </div>
      </section>

      {/* ============ RECORD SECTION ============ */}
      <Record />

      {/* ============ OUR SERVICES ============ */}
      <OurService />

      {/* ============ TRAIN WITH US ============ */}
      <section className="h-screen">
        <TrainWithUs />
      </section>

      {/* ============ COACHING STYLE ============ */}
      <CoachingStyle />
      <SVideo />
      <HeroTestimonials />
      <SocialMediaStrip />
      <Footer/> 
    </div>
  );
};

export default Home;
