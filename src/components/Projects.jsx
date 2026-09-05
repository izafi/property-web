import React from "react";

const Project = () => {
  const projects = [
    {
      image: "/imgi_3_project_img_1-3elwKRsQ.jpg",
      name: "Skyline Haven",
      location: "California",
      price: "$2,50,000",
    },
    {
      image: "/imgi_4_project_img_2-DnQUAazb.jpg",
      name: "Vista Verde",
      location: "San Francisco",
      price: "$2,50,000",
    },
    {
      image: "/imgi_5_project_img_3-3sNYAKXT.jpg",
      name: "Serenity Suites",
      location: "Chicago",
      price: "$2,50,000",
    },
    {
      image: "/imgi_6_project_img_4-C5CE8mdZ.jpg",
      name: "Central Square",
      location: "Los Angeles",
      price: "$2,50,000",
    },
    {
      image: "/imgi_7_project_img_5-DXUdfqvc.jpg",
      name: "Vista Verde",
      location: "San Francisco",
      price: "$2,50,000",
    },
    {
      image: "/imgi_8_project_img_6-PJDGxfJF.jpg",
      name: "Serenity Suites",
      location: "Chicago",
      price: "$2,50,000",
    },
  ];

  return (
    <section
      id="Projects"
      className="h-auto w-full bg-white flex flex-col items-center gap-5 py-14 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Projects Completed
        </h1>

        <p className="text-base sm:text-lg font-normal text-[#364153]">
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 mt-8 sm:mt-10 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex flex-col shadow-md rounded-[12px] pb-[6px] group cursor-pointer overflow-hidden"
          >
            {/* Image */}
            <div className="h-[250px] sm:h-[260px] md:h-[280px] w-full bg-[#F5F5F5] flex justify-center items-center overflow-hidden">
              <img
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={project.image}
                alt={project.name}
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col justify-center items-start">
              <h2 className="text-lg sm:text-xl text-[#1e2939] font-semibold leading-7">
                {project.name}
              </h2>

              <p className="text-sm sm:text-base text-[#4a5565] font-normal leading-6">
                {project.location}
              </p>

              <span className="mt-2">
                <p className="text-sm sm:text-base text-[#364153] font-semibold leading-6">
                  {project.price}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;