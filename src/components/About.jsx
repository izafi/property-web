import React, { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;

    const duration = 2000;
    const incrementTime = 30;
    const increment = end / (duration / incrementTime);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(counter);
      }

      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [isVisible, end]);

  return (
    <p
      ref={counterRef}
      className="text-[28px] sm:text-[30px] text-[#1e2939] leading-[36px] font-semibold"
    >
      {count}
      {suffix}
    </p>
  );
};

const About = () => {
  return (
    <section
      id="About"
      className="h-auto w-full bg-white flex flex-col items-center gap-5 py-14 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          About{" "}
          <span className="text-2xl sm:text-3xl md:text-4xl underline">
            Our Brand
          </span>
        </h1>

        <p className="text-base sm:text-lg font-normal text-[#364153] text-center">
          Passionate About Properties, Dedicated to
          <br className="hidden sm:block" />
          your vision
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 sm:mt-10 w-full gap-10 lg:gap-16">

        {/* Image */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="flex justify-center items-center shadow-md rounded-b-[12px] overflow-hidden">
            <img
              className="object-cover w-full max-w-[500px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[430px] rounded-b-[12px]"
              src="/imgi_2_brand_img-DEuaOSfY.png"
              alt="Our Brand"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-8 sm:gap-10 w-full lg:w-[50%]">

          {/* Counters */}
          <div className="grid grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-4 sm:gap-x-8 w-full">

            <div className="flex flex-col justify-center items-center text-center gap-1">
              <Counter end={10} />
              <p className="text-sm sm:text-base md:text-[18px] text-[#4a5565] leading-6 sm:leading-7 font-normal">
                Years of Experience
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-1">
              <Counter end={12} />
              <p className="text-sm sm:text-base md:text-[18px] text-[#4a5565] leading-6 sm:leading-7 font-normal">
                Projects Completed
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-1">
              <Counter end={20} />
              <p className="text-sm sm:text-base md:text-[18px] text-[#4a5565] leading-6 sm:leading-7 font-normal">
                Mn. sq.ft. Delivered
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-1">
              <Counter end={25} />
              <p className="text-sm sm:text-base md:text-[18px] text-[#4a5565] leading-6 sm:leading-7 font-normal">
                Ongoing Projects
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="w-full">
            <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#4a5565] leading-6 sm:leading-7 text-center lg:text-left">
              We specialize in providing high-quality properties that meet
              the diverse needs of our clients. Our brand is built on trust,
              professionalism, and a passion for creating spaces that resonate
              with your vision. Whether you're buying, selling, or renting,
              we are dedicated to ensuring a seamless and rewarding
              experience for all our clients.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;