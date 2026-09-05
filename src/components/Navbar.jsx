import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Testimonials", href: "#Testimonials" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="relative z-50 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a href="#Home">
          <img
            className="h-8 sm:h-9 md:h-10 w-auto"
            src="/logo.svg"
            alt="Real Estate"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white text-sm lg:text-[16px] font-normal hover:text-[#6a7282] duration-300 ease-in-out"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:flex">
          <a
            href="#Contact"
            className="bg-white text-black px-5 lg:px-8 py-2 rounded-full cursor-pointer text-sm lg:text-base hover:bg-[#155DFC] hover:text-white transition duration-300"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white cursor-pointer"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/80 backdrop-blur-md rounded-xl p-5">
          <ul className="flex flex-col items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-white text-base hover:text-[#6a7282] transition"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#Contact"
                onClick={handleLinkClick}
                className="inline-block bg-white text-black px-7 py-2 rounded-full hover:bg-[#155DFC] hover:text-white transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;