import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-[25px] pb-[25px] px-[71px]">
      <div className="flex justify-between items-center mb-[25px]">
        <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-[83.53px] font-semibold">
          Let’s Connect there
        </h2>
        <button className="bg-[#fd853a] text-white py-[10px] px-[20px] rounded-full">
          Hire me ?
        </button>
      </div>
      <div className="border-t-[2px] border-[#475467] mb-[25px]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-[25px]">
        <div className="mb-8">
          <h3 className="text-white text-[24px] font-semibold mb-[10px]">
            Navigation
          </h3>
          <ul>
            <li className="text-gray-300 mb-[10px]">Home</li>
            <li className="text-gray-300 mb-[10px]">About</li>
            <li className="text-gray-300 mb-[10px]">Services</li>
            <li className="text-gray-300 mb-[10px]">Contact</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-white text-[24px] font-semibold mb-[10px]">
            Contact
          </h3>
          <p className="text-gray-300">Email: olatunjiabass01@gmail.com</p>
          <p className="text-gray-300">Phone: +234 814 323 6834</p>
        </div>
        <div className="mb-8">
          <h3 className="text-white text-[24px] font-semibold mb-[10px]">
            Follow us
          </h3>
          <ul>
            <li className="text-gray-300 mb-[10px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/godswillconcep1"
              >
                Facebook
              </a>
            </li>
            <li className="text-gray-300 mb-[10px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/godswillconcep1"
              >
                Twitter
              </a>
            </li>
            <li className="text-gray-300 mb-[10px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/godswillconcep1"
              >
                Instagram
              </a>
            </li>
            <li className="text-gray-300 mb-[10px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/godswillconcep1"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-white text-[24px] font-semibold mb-[10px]">
            Newsletter
          </h3>
          <div className="space-x-">
            <input
              type="email"
              placeholder="Your email"
              className="py-[10px] px-[20px] rounded-l-full text-black focus:outline-none"
            />
            <button className="bg-[#fd853a] text-white py-[10px] px-[20px] rounded-r-full
              mt-[10px]">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-[#475467] mb-[25px]"></div>
      <div className="flex justify-between items-center">
        <p className="text-gray-300">
          Copyright© 2024 Godswill. All Rights Reserved.
        </p>
        <div className="flex space-x-[10px]">
          <a href="#" className="text-gray-300">
            User Terms & Conditions
          </a>
          <a href="#" className="text-gray-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
