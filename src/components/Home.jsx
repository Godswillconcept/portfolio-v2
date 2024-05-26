import React from "react";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaAward } from "react-icons/fa6";
import user from "../assets/myself.png";

const Home = () => {
  return (
    <section className="flex flex-col items-center h-full py-10">
      <div className="text-center">
        <span className="inline-block border-2 border-orange-600 px-3 py-1 rounded-full mb-4">
          Hello!
        </span>
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">
          I’m <span className="text-orange-500">Olatunji Abass,</span>
          <span className="block my-4">Fullstack Developer</span>
        </h1>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="px-12">
            {/* profile brief  */}
            <div className="mb-12 text-center">
              <ImQuotesLeft className="me-2" fontSize={25} />
              <h3 className="my-2 text-black text-start lg:text-xl md:text-lg sm:text-base text-sm inline-block font-bold">
                Building web apps with React, Node.js, and SQL. Detail-oriented, user-focused, and passionate about delivering high-quality solutions.
              </h3>
              
              <ImQuotesRight className="ms-2 float-right" fontSize={25} />
            </div>
            {/* experience rating  */}
            <div className="my-8">
              <div className="text-center flex items-center space-x-5">
                <FaAward
                  fontSize={50}
                  className="text-orange-600 inline-block"
                />
                <div>
                  <h3 className="md:text-2xl lg:text-3xl text-lg font-bold">
                    3 Years
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    Experience
                  </p>
                </div>
                {/* <span className="inline-block mb-2 md:mb-0">{`⭐⭐⭐⭐⭐`}</span> */}
              </div>
            </div>
          </div>
          {/* profile image  */}
          <div className="mb-8 mt-16">
            <div className="w-[300px] min-h-[300px] bg-orange-300 rounded-full outline outline-orange-600 outline-offset-8 relative md:ms-32 mx-auto">
              <img
                src={user} // Replace with the actual path or URL to the image
                alt="Abass"
                className="w-full absolute bottom-0 rounded-b-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
