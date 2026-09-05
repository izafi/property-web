import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/imgi_9_profile_img_1-zaNAVS_M.png",
      name: "Donald Jackman",
      role: "Marketing Manager",
      rating: 5,
    },
    {
      image: "/imgi_10_profile_img_2-dUNED7vt.png",
      name: "Richard Nelson",
      role: "UI/UX Designer",
      rating: 4,
    },
    {
      image: "/imgi_11_profile_img_3-JahKdPEp.png",
      name: "James Washington",
      role: "Co-Founder",
      rating: 5,
    },
  ];

  return (
    <section
      id="Testimonials"
      className="h-auto w-full bg-white flex flex-col items-center gap-8 sm:gap-10 py-14 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Customer Testimonials
        </h1>

        <p className="text-base sm:text-lg font-normal text-[#364153]">
          Real Stories from Those Who Found Home with Us
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-5 sm:mt-8 w-full max-w-5xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex flex-col justify-center items-start shadow-md rounded-[12px] p-4 sm:p-5 group cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            {/* Profile */}
            <div className="w-full flex flex-row justify-start items-center gap-4 mb-4">
              <img
                className="h-14 w-14 sm:h-16 sm:w-16 object-cover rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />

              <div className="flex flex-col items-start justify-center">
                <h2 className="text-lg sm:text-xl text-[#1e2939] font-semibold leading-7">
                  {testimonial.name}
                </h2>

                <p className="text-sm sm:text-base text-[#4a5565] font-normal leading-6">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Review */}
            <div className="flex flex-col justify-center items-start">
              <p className="text-sm sm:text-base text-start text-[#4a5565] font-normal leading-6">
                From the very first meeting, they understood my vision and
                helped me find the perfect property. Their attention to detail
                and commitment to client satisfaction is unmatched.
              </p>

              {/* Stars */}
              <div className="flex items-center mt-4 text-lg">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }
                  >
                    <LiaStarSolid />
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;