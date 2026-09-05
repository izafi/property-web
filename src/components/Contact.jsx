import React from "react";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="h-auto w-full bg-white flex flex-col items-center gap-8 sm:gap-10 py-14 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact With Us
        </h1>

        <p className="text-base sm:text-lg font-normal text-[#364153]">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>
      </div>

      {/* Contact Form */}
      <section className="w-full max-w-5xl flex justify-center items-center py-8 sm:py-12 md:py-16">
        <div className="w-full bg-white rounded-xl shadow-lg p-5 sm:p-7 md:p-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1e2939] mb-7 sm:mb-10">
            Get in Touch
          </h2>

          <form className="flex flex-col gap-5 sm:gap-7">

            {/* Full Name */}
            <div>
              <label className="block text-sm sm:text-base font-normal text-[#4a5565] mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 sm:h-14 border border-[#CBD5E1] rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#2563EB] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base font-normal text-[#4a5565] mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 sm:h-14 border border-[#CBD5E1] rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#2563EB] transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm sm:text-base font-normal text-[#4a5565] mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Enter your message"
                className="w-full border border-[#CBD5E1] rounded-lg p-4 text-sm sm:text-base resize-none outline-none focus:border-[#2563EB] transition"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg text-white text-sm sm:text-base font-normal transition duration-300 cursor-pointer"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      {/* Contact Details + Map */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full max-w-7xl gap-6 lg:gap-8">

        {/* Contact Details */}
        <div className="flex flex-col justify-start items-start gap-5 shadow-md rounded-xl w-full lg:w-1/2 min-h-[400px] p-5 sm:p-7 md:p-8">
          <h2 className="text-xl sm:text-2xl text-[#1e2939] font-semibold text-start">
            Our Contact Details
          </h2>

          <p className="text-sm sm:text-base text-[#364153] font-normal text-start leading-6">
            Have any questions? Reach out to us directly, and we’ll get back
            to you as soon as possible!
          </p>

          <div className="flex flex-col items-start gap-1">
            <h3 className="text-sm sm:text-base font-semibold text-[#1e2939]">
              Address:
            </h3>

            <p className="text-sm sm:text-base font-normal text-[#1e2939]">
              1234 Real Estate St, Dream City, DC 56789
            </p>
          </div>

          <div className="flex flex-col items-start gap-1">
            <h3 className="text-sm sm:text-base font-semibold text-[#1e2939]">
              Phone:
            </h3>

            <p className="text-sm sm:text-base font-normal text-[#1e2939]">
              +1 (234) 567-890
            </p>
          </div>

          <div className="flex flex-col items-start gap-1">
            <h3 className="text-sm sm:text-base font-semibold text-[#1e2939]">
              Email:
            </h3>

            <p className="text-sm sm:text-base font-normal text-[#1e2939] break-all">
              contact@realestate.com
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="flex flex-col justify-start items-start gap-5 shadow-md rounded-xl w-full lg:w-1/2 min-h-[400px] p-5 sm:p-7 md:p-8">
          <h2 className="text-xl sm:text-2xl text-[#1e2939] font-semibold text-start">
            Our Location
          </h2>

          <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318123.4569272311!2d-74.30916497101786!3d40.69719335376391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2s!4v1784708141463!5m2!1sen!2s"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Our Location"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;