import React from "react";
import newsXLogo from "../assets/feature/NewsX_Logo.png";
import redbull from "../assets/feature/redbullcom-logo.svg";
import cosmopolitanLogo from "../assets/feature/blackHeader.jpg";
import aajTakLogo from "../assets/feature/Aaj_tak_logo-p-500.png";
import ndtvLogo from "../assets/feature/NDTV_logo.svg-p-500.png";
import news18Logo from "../assets/feature/Add-a-heading-53.png";
import zeeNewsLogo from "../assets/feature/773839-zee-news-logo-removebg-preview-p-500.png";
import hindustanTimesLogo from "../assets/feature/R-p-500.png";
import timesOfIndiaLogo from "../assets/feature/Add-a-heading-52.png";
import yahoo from "../assets/feature/yahoologo.png";
import img3 from "../assets/feature/img3.png";
import tedx from "../assets/feature/tedx.png";

const TrainWithUs = () => {
  const logos = [
    [tedx, img3, newsXLogo, yahoo],
    [redbull, cosmopolitanLogo, aajTakLogo, ndtvLogo],
    [news18Logo, zeeNewsLogo, hindustanTimesLogo, timesOfIndiaLogo],
  ];

  return (
    <div className="w-full bg-[#0a0a0a] flex justify-center items-center py-20 px-4 md:px-8">
      {/* White Inner Card */}
      <div className="relative bg-[#f5f5f5] rounded-2xl shadow-[0_8px_50px_rgba(0,0,0,0.6)] max-w-[1200px] w-full py-16 md:py-20 flex flex-col items-center overflow-hidden">
        {/* Light gradient accent inside */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-[250px] bg-[radial-gradient(circle,rgba(255,100,0,0.1)_0%,rgba(255,255,255,0)_80%)]"></div>

        {/* Heading */}
        <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-center mb-12 text-black">
          As Seen And{" "}
          <span className="text-[#e50914]">Featured In!</span>
        </h1>

        {/* Logos */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-10 md:gap-y-14 md:gap-x-16 justify-items-center px-4 md:px-10">
          {[tedx, img3, newsXLogo, yahoo, redbull, cosmopolitanLogo, aajTakLogo, ndtvLogo, news18Logo, zeeNewsLogo, hindustanTimesLogo, timesOfIndiaLogo].map(
            (logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className="w-[100px] md:w-[120px] lg:w-[130px] object-contain opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainWithUs;
