/* eslint-disable no-self-assign */
import React, { useState } from "react";
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsTwitterX,
} from "react-icons/bs";

import { CgDetailsMore } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";
import cv from "../assets/abass-cv.pdf";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);

  const navData = [
    { name: "Home", path: "" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Testimonial", path: "#testimonial" },
    { name: "Contact", path: "#contact" },
  ];

  const handlePrint = () => {
    const pdfUrl = cv;
    const printWindow = window.open(pdfUrl, "_blank");

    printWindow.onload = () => {
      printWindow.print();
    };
  };

  return (
    <>
      {/* topnav */}
      <div className="flex items-center justify-between px-12 py-2 bg-orange-50">
        <div className="space-x-3">
          <div className="float-start">
            <a
              href="tel:+234 814 323 6834"
              className="cursor-pointer space-x-2"
            >
              <BsPhone className="inline-block text-orange-900" /> +234 814 323
              6834
            </a>
          </div>
          <div className="float-start">
            <a
              href="mailto:olatunjiabass01@gmail.com"
              className="cursor-pointer space-x-2"
            >
              <BsEnvelope className="inline-block text-orange-900" />{" "}
              olatunjiabass01@gmail.com
            </a>
          </div>
        </div>
        <div className="hidden md:block space-x-1">
          <a
            href="https://www.facebook.com/olatunjiabass01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="inline-block text-orange-900" />
          </a>
          <a
            href="https://www.instagram.com/godswillconcep1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="inline-block text-orange-900" />
          </a>
          <a
            href="https://www.twitter.com/godswillconcep1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="inline-block text-orange-900" />
          </a>

          <a
            href="https://www.linkedin.com/in/godswillconcept"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="inline-block text-orange-900" />
          </a>
          <a
            href="https://www.github.com/godswillconcept"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="inline-block text-orange-900" />
          </a>
        </div>
      </div>
      {/* Navbar */}
      <header
        style={{ position: "sticky", top: 0, zIndex: 100 }}
        className="shadow-lg bg-orange-600/80"
      >
        <nav className="bg-orange-950 py-2 flex items-center md:px-12 px-4">
          <div className="">
            <h3 className="text-white text-base sm:text-lg md:text-xl uppercase font-medium cursor-pointer">
              <a href="/">Godswill</a>
            </h3>
          </div>

          <ul className="hidden md:flex justify-between capitalize mx-auto">
            {navData.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  className="text-white block px-4 py-2 text-sm md:text-base lg:text-lg tracking-wide font-medium hover:bg-gradient-to-t from-orange-950 to-orange-900 hover:border-b-4 hover:border-orange-600 hover:rounded-none hover:from-orange-300 hover:to-orange-950 transition-all duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3 ms-auto">
            <button
              className="download-cv-button hidden md:block bg-orange-600 md:text-base text-white rounded-full hover:outline outline-orange-500 py-2 px-6 border-orange-800"
              onClick={handlePrint}
            >
              Download <span className="sm:hidden md:inline-block">CV</span>{" "}
              <FaCloudDownloadAlt
                fontSize={28}
                className="sm:inline-block md:hidden text-orange-200 ps-2"
              />
            </button>

            {/* Collapsible button to show the navigation bar on small devices */}
            <button
              className="md:hidden bg-orange-50 rounded-md p-2 hover:outline outline-orange-500 border-orange-800"
              onClick={() => setCollapse(!collapse)}
            >
              {collapse ? (
                <IoClose fontSize={28} color="orange" />
              ) : (
                <CgDetailsMore fontSize={28} color="orange" />
              )}
            </button>
          </div>
        </nav>
        {collapse && (
          <div className="md:hidden bg-gray-300 pb-4 space-y-1">
            <ul className="flex flex-col capitalize">
              {navData.map(({ name, path }) => (
                <li key={name}>
                  <a
                    href={path}
                    className="text-white block px-4 py-2 text-lg tracking-wide font-medium hover:bg-gradient-to-t from-orange-950 to-orange-900 hover:border-b-4 hover:border-orange-600 hover:rounded-none hover:from-orange-300 hover:to-orange-950 transition-all duration-300"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="md:hidden inline-block m-4 bg-orange-600 text-white rounded-full hover:outline hover:font-bold px-3 md:px-6 py-2 hover:bg-white hover:text-orange-900 outline-orange-500 cursor-pointer font-medium"
              onClick={handlePrint}
            >
              Download CV
            </button>
          </div>
        )}
      </header>

      
    </>
  );
};

export default Navbar;
