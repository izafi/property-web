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
      className="text-[30px] text-[#1e2939] leading-[36px] font-semibold"
    >
      {count}
      {suffix}
    </p>
  );
};

const Hero = () => {
  return (
    <div
      id="About"
      className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center gap-5 py-20"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold">
          About <span className="text-3xl underline">Our Brand</span>
        </h1>

        <p className="text-lg font-normal text-[#364153] text-center">
          Passionate About Properties, Dedicated to <br />
          your vision
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-row justify-around items-center mt-10 w-full px-50 gap-5">

        {/* Image */}
        <div className="flex flex-col justify-center items-center text-center gap-10 shadow-md rounded-b-[12px]">
          <img
            className="object-cover h-65 w-auto rounded-b-[12px]"
            src="/imgi_2_brand_img-DEuaOSfY.png"
            alt="Our Brand"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center items-start text-center gap-10 w-[50%]">

          {/* Counting Boxes */}
          <div className="grid grid-cols-2 gap-5 w-full">

            {/* Box 1 */}
            <div className="flex flex-col justify-center items-center gap-1">
              <Counter end={10} />

              <p className="text-[18px] text-[#4a5565] leading-[28px] font-normal">
                Years of Experience
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col justify-center items-center gap-1">
              <Counter end={12} />

              <p className="text-[18px] text-[#4a5565] leading-[28px] font-normal">
                Projects Completed
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col justify-center items-center gap-1">
              <Counter end={20} suffix="+" />

              <p className="text-[18px] text-[#4a5565] leading-[28px] font-normal">
                Mn.sq.ft. Delivered
              </p>
            </div>

            {/* Box 4 */}
            <div className="flex flex-col justify-center items-center gap-1">
              <Counter end={25} />

              <p className="text-[18px] text-[#4a5565] leading-[28px] font-normal">
                Ongoing Projects
              </p>
            </div>

          </div>

          {/* Description */}
          <div>
            <p className="text-[18px] font-normal text-[#4a5565] leading-[28px] text-left">
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
    </div>
  );
};

export default Hero;