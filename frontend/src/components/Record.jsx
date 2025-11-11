import React from "react";
import CountUp from "react-countup";
import certifiedLogo from "../assets/stripcertifiedlogo.svg";
import customerLogo from "../assets/stripcustlogo.svg";
import workoutLogo from "../assets/stripworkoutlogo.svg";

const Record = () => {
  const records = [
    {
      label: "HAPPY CUSTOMERS",
      start: 88000,
      end: 90000,
      duration: 5,
      icon: customerLogo,
    },
    {
      label: "WORKOUT PROGRAMS",
      start: 8800,
      end: 9088,
      duration: 4,
      icon: workoutLogo,
    },
    {
      label: "CERTIFIED TRAINERS",
      start: 880,
      end: 988,
      duration: 3,
      icon: certifiedLogo,
    },
  ];

  return (
    <div className="w-full bg-[#0f0f0f] text-white font-bold uppercase flex justify-center items-center relative overflow-hidden py-10 px-4 flex-col md:flex-row md:gap-[100px] lg:gap-[250px] shadow-[0_-2px_15px_rgba(0,0,0,0.6)] -mt-[120px]">
      {records.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center text-center transition-transform duration-300 hover:scale-[1.07]"
        >
          {/* Enhanced Icon Box */}
          <div className="relative w-[70px] h-[70px] md:w-[60px] md:h-[60px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff2d20] via-[#ff6b00] to-[#ff0000] shadow-[0_0_20px_rgba(255,100,0,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,80,0,0.8)] hover:scale-[1.1]">
            {/* inner subtle glass layer */}
            <div className="absolute inset-[3px] bg-[#0f0f0f]/80 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.label}
                className="w-[35px] md:w-[30px] object-contain brightness-125 drop-shadow-[0_2px_6px_rgba(255,120,0,0.6)]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start justify-center leading-tight ml-4">
            <span className="text-[0.8rem] md:text-[0.9rem] text-gray-300 tracking-widest">
              {item.label}
            </span>
            <span className="text-[1.8rem] md:text-[1.6rem] font-extrabold text-white mt-1">
              <CountUp
                start={item.start}
                end={item.end}
                duration={item.duration}
                separator=","
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Record;
