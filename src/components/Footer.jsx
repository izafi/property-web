import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 sm:py-12 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Real Estate
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-6">
            We craft spaces that fit your dreams. Whether you're buying,
            selling, or investing, we are here to guide you every step of
            the way.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Useful Links
          </h3>

          <ul className="space-y-3">
            <li>
              <a
                href="#Home"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#About"
                className="text-gray-400 hover:text-white transition"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#Projects"
                className="text-gray-400 hover:text-white transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#Contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-400 text-sm sm:text-base mb-3">
            1234 Real Estate St, Dream City, DC 56789
          </p>

          <p className="text-gray-400 text-sm sm:text-base mb-3">
            Phone: +1 (234) 567-890
          </p>

          <p className="text-gray-400 text-sm sm:text-base mb-3 break-all">
            Email: contact@realestate.com
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-8 sm:mt-12 border-t border-gray-600 pt-5 sm:pt-6 text-center">
        <p className="text-gray-400 text-xs sm:text-sm">
          © 2026 Real Estate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;