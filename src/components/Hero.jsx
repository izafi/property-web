import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div
      id="Home"
      className="min-h-screen w-full bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 min-h-screen">
        <Navbar />

        <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 gap-8 sm:gap-10">
          
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.15] font-bold max-w-3xl">
            Explore Homes That
            <br />
            Fit Your Dreams
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
            <a href="#Projects" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-white text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-black transition duration-300">
                Projects
              </button>
            </a>

            <a href="#Contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#155DFC] text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-gray-200 hover:text-black transition duration-300">
                Contact Us
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;