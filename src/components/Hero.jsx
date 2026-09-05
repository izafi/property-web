import React from 'react';
import Navbar from '../components/Navbar';

const Hero = () => {
    return (
        <div id='Home' className="h-screen w-full bg-[url('/hero.png')] bg-cover bg-center relative">

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 h-full">
                <Navbar />

                <div className="h-[calc(100%-80px)] flex flex-col justify-center items-center text-center px-4 gap-10">
                    <h1 className="text-white text-6xl  leading-18  font-bold max-w-3xl">
                        Explore Homes That <br/> Fit Your Dreams
                    </h1>

                    <div className="flex flex-row gap-5">
                        <a href="#Projects"><button className="border border-white text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-white hover:text-black transition">
                            Projects
                        </button></a>

                        <a href="#Contact"><button className="bg-[#155DFC] text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-gray-200 hover:text-black transition">
                            Contact Us
                        </button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;