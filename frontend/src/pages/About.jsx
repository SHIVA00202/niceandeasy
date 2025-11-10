import React from "react";
import aboutImage from "../assets/tridevaboutimg.jpg";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-200 min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Add top padding to avoid overlap with fixed header */}
      <div className="pt-28 px-6 md:px-12 lg:px-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
          
          {/* Left Section - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="Tridev Pandey"
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-300 border border-gray-800"
            />
          </div>

          {/* Right Section - Text */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4 relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-yellow-400 rounded-full mt-1"></span>
            </h1>

            <p className="text-lg leading-relaxed mb-8 text-gray-300">
              Hi, I'm{" "}
              <span className="font-semibold text-white">TRIDEV PANDEY</span>.
              I specialize in{" "}
              <span className="font-semibold text-yellow-400">
                nutrition, business, and solving fat-loss challenges
              </span>. 
              With years of experience, I help individuals achieve their health goals 
              through customized strategies, diet plans, and fitness coaching. 
              My mission is to educate and empower people to lead a healthy lifestyle.
            </p>

            {/* Certifications Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-6 border-l-4 border-yellow-400 pl-3">
                Certifications
              </h2>

              <div className="space-y-5">
                {[
                  {
                    title: "🏅 Certified Personal Trainer (CPT)",
                    issuer: "National Academy of Sports Medicine (NASM)",
                  },
                  {
                    title: "🏅 Advanced Sports Nutrition Certification",
                    issuer: "International Sports Sciences Association (ISSA)",
                  },
                  {
                    title: "🏅 Business & Fitness Strategy",
                    issuer: "Harvard Online Courses",
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/60 border border-gray-700 rounded-xl shadow-md p-5 hover:bg-gray-800 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">Issued by: {cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
