import React, { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');

      if (!target) return;

      const id = target.getAttribute("href");

      if (!id || id === "#") return;

      const element = document.querySelector(id);

      if (element) {
        e.preventDefault();

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;