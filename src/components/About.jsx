/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GrLink } from "react-icons/gr";

const About = () => {
  const [show, setShow] = useState(false);
  const projects = [
    {
      name: "Personal Portfolio Website",
      image: "https://picsum.photos/id/237/200/200",
      alt: "Personal Portfolio Website",
      link: "#",
    },
    {
      name: "E-commerce Website",
      image: "https://picsum.photos/id/238/200/200",
      alt: "E-commerce Website",
      link: "#",
    },
    {
      name: "Blog Website",
      image: "https://picsum.photos/id/239/200/200",
      alt: "Blog Website for a Fashion Brand",
      link: "#",
    },
    {
      name: "Hotel Booking Website",
      image: "https://picsum.photos/id/240/200/200",
      alt: "Hotel Booking Website",
      link: "#",
    },
    {
      name: "Job Search Website",
      image: "https://picsum.photos/id/241/200/200",
      alt: "Job Search Website",
      link: "#",
    },
    {
      name: "Shopping App",
      image: "https://picsum.photos/id/242/200/200",
      alt: "Shopping App",
      link: "#",
    },
  ];
  const projectInfo = (project) => {
    const element = document.createElement("div");
    element.className =
      "px-2 py-4 bg-orange-500 absolute bottom-0 top-0 left-0 right-0 text-center flex justify-center items-center";
    element.innerHTML = `
      <div>
        <h3 class="font-bold text-orange-100 mb-2">${project.name}</h3>
        <a
          href="${project.link}"
          class="bg-orange-100 text-orange-600 px-2 py-2 rounded-xl inline-block text-lg"
        >
          <GrLink
            fontSize={24}
            className="inline-block text-orange-500"
          />
          Link
        </a>
      </div>
    `;
    return element;
  };

  return (
    <section className="bg-gray-200" id="about">
      <div className="md:grid md:grid-cols-2 md:gap-6 md:px-12 px-2 py-20 ">
        <div className="md:col-span-1">
          <div className="mb-12">
            <div className="px-12 sm:px-0">
              <p className="lg:text-xl md:text-xl sm:text-lg text-base text-black mb-4">
                With over{" "}
                <span className="text-orange-500 font-bold">3 years</span> of
                working experience as a web designers & developer, I'm a
                frontend developer with a passion for building digital products
                that are user-friendly, scalable and of high quality.
              </p>
              <p className="lg:text-xl md:text-xl sm:text-lg text-base text-black mb-4">
                As a frontend developer, I've worked with a range of
                technologies including HTML, CSS, JavaScript, React, Node.js,
                Express, SQL, and more. I'm always confident, naturally curious,
                and working on improving my workpace on timely basis.
              </p>
            </div>
            <div className="space-y-5 px-12 sm:px-0">
              <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base font-bold mt-6 mb-2">
                What I Offer
              </h3>
              <ul className="list-none">
                <li className="lg:text-lg md:text-base text-sm text-black font-medium">
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  Affordable prices
                </li>
                <li className="lg:text-lg md:text-base text-sm text-black font-medium">
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  High quality product
                </li>
                <li className="lg:text-lg md:text-base text-sm text-black font-medium">
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  On time project delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-12 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-md overflow-hidden shadow-md relative"
                onMouseOver={(e) => {
                  const card = e.currentTarget;
                  const projectInfoElement = projectInfo(project);
                  card.appendChild(projectInfoElement);
                }}
                onMouseOut={(e) => {
                  const card = e.currentTarget;
                  const projectInfoElement =
                    card.querySelector(".bg-orange-500");
                  if (projectInfoElement) {
                    card.removeChild(projectInfoElement);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
          <div>
            <h3 className="lg:text-2xl md:text-xl sm:text-lg text-base text-gray-800 font-bold mt-6 mb-2">
              Some Of My Projects
            </h3>
            <ul className="list-none">
              {projects.map((project, i) => (
                <li key={i} className="lg:text-lg md:text-base text-sm font-medium text-black">
                  <HiMiniCheckBadge
                    fontSize={30}
                    className="inline-block text-orange-500"
                  />{" "}
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
