
import React, { useState } from "react";
import logo1 from "../assets/logo.jpg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
   
  };

  return (
    <footer className="bg-[#0b0b0b] text-white py-16 px-6 md:px-12 lg:px-20 font-inter">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
        {/* Left Section - About */}
        <div className="flex flex-col items-start w-full sm:w-[45%] lg:w-[30%] space-y-3">
          <img
            src={logo1}
            alt="Logo"
            className="w-16 h-16 rounded-full mb-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
          <h3 className="text-xl font-semibold text-orange-500">Nice & Easy</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Hi! My name is <span className="font-semibold text-white">Tridev Pandey</span>, 
            and I’m an expert in gym training and fitness. I can help you achieve your goals.
          </p>
          <p className="text-sm text-gray-400">
            Wisconsin Ave, Suite 700<br />Chevy Chase, Maryland 20815
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-400">
            <AiOutlineMail className="text-orange-400" />
            <a href="mailto:support@figma.com" className="hover:text-orange-400">
              support@figma.com
            </a>
          </p>
          <p className="text-sm text-gray-400">📞 +1 800 854-36-80</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 text-2xl">
            <a href="#" className="hover:text-orange-500 transition-all">
              <AiFillFacebook />
            </a>
            <a href="#" className="hover:text-orange-500 transition-all">
              <AiFillInstagram />
            </a>
            <a href="#" className="hover:text-orange-500 transition-all">
              <AiFillTwitterSquare />
            </a>
          </div>
        </div>

        {/* Middle Section - Contact Form */}
        <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[35%] text-center">
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">
            Contact Us
          </h3>
          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              disabled={isSending}
              className="w-full max-w-[350px] bg-white text-black rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
              disabled={isSending}
              className="w-full max-w-[350px] bg-white text-black rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              disabled={isSending}
              className="w-full max-w-[350px] bg-white text-black rounded-md px-4 py-2 min-h-[100px] resize-y outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-6 py-2 mt-2 rounded-md font-medium bg-orange-500 hover:bg-orange-600 text-white transition-all disabled:bg-gray-500"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Section - Company Links */}
        <div className="w-full sm:w-[45%] lg:w-[25%] flex flex-col items-start sm:items-center lg:items-start">
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-orange-400 transition-all">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-all">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-all">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-all">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition-all">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500 font-semibold">Nice & Easy</span> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
