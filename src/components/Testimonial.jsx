import React, { useState } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Testimonial = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    setSlideIndex((prevState) => (prevState + 1) % testimonialData.length);
  };

  const handlePrevious = () => {
    setSlideIndex((prevState) =>
      prevState <= 0 ? testimonialData.length - 1 : prevState - 1
    );
  };

  const testimonialData = [
    {
      name: "Mr. Olutayo Olatunji",
      title: "Client",
      review:
        "I've had the pleasure of working with Olatunji on several projects, and I must say that he is one of the most talented and dedicated developers I've ever met. He is always eager to learn and adapt to new technologies and is willing to go the extra mile to ensure that the project is delivered on time and to the highest standard. ",
      image: `https://picsum.photos/id/${
        Math.floor(Math.random() * 10) + 1
      }/200/200?grayscale=true`,
    },
    {
      name: "Mrs. Adenike Olatunji",
      title: "Family",
      review:
        "My son, Olatunji is a genius! He is so intelligent and hardworking. He has always been a source of inspiration to me and I am so proud of him. ",
      image: `https://picsum.photos/id/${
        Math.floor(Math.random() * 10) + 11
      }/200/200?grayscale=true`,
    },
    {
      name: "Mr. Adekunle Ogungbe",
      title: "Colleague",
      review:
        "Olatunji is an exceptional IT professional with an unwavering commitment to delivering high-quality work. His attention to detail and ability to collaborate effectively with team members are exceptional. ",
      image: `https://picsum.photos/id/${
        Math.floor(Math.random() * 10) + 21
      }/200/200?grayscale=true`,
    },
    {
      name: "Mr. Olamide Oduwole",
      title: "Colleague",
      review:
        "Olatunji is an outstanding IT professional with a strong work ethic and an Impress ability to learn quickly. He is always willing to help and share his knowledge with others. ",
      image: `https://picsum.photos/id/${
        Math.floor(Math.random() * 10) + 31
      }/200/200?grayscale=true`,
    },
    {
      name: "Mr. Kazeem Ogunleye",
      title: "Client",
      review:
        "I have worked with Olatunji on several projects and I must say that he is one of the most professional and dedicated developers I have ever worked with. He is always punctual and always meets deadlines. ",
      image: `https://picsum.photos/id/${
        Math.floor(Math.random() * 10) + 41
      }/200/200?grayscale=true`,
    },
    {
      name: "Mr. Olayinka Sodimu",
      title: "Colleague",
      review:
        "Olatunji is an excellent IT professional with an exceptional ability to communicate effectively. He is always willing to help and share his knowledge with others. ",
      image: `https://picsum.photos/id/${
        Math.floor(Math.random() * 10) + 51
      }/200/200?grayscale=true`,
    },
  ];

  return (
    <section className=" bg-orange-50 py-10" id="testimonial">
      <div className="flex items-center justify-center space-x-8 px-12">
        <button
          onClick={handlePrevious}
          className="bg-gray-900 text-white px-4 py-3 rounded-full focus:outline-none"
        >
          <HiChevronLeft className="inline-block" />
        </button>
        <div className="flex items-center justify-center">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-1 flex-col items-center justify-center  py-12 text-center  ${
                slideIndex === index ? "visible" : "hidden"
              }`}
            >
              <div className="border-4 border-orange-600 rounded-full p-2">
                <div className="border border-orange-600  rounded-full p-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full mx-auto w-24 h-24 "
                  />
                </div>
              </div>
              <div className="flex flex-col flex-grow md:w-3/5 w-full">
                <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-base font-semibold mt-6 mb-2">
                  {testimonial.name}
                </h3>
                <h4 className="md:text-base text-sm lg:text-lg italic">
                  {testimonial.title}
                </h4>
                <div>
                  <ImQuotesLeft className="me-2" fontSize={25} />
                  <h3 className="my-2 text-black text-start md:text-base text-sm inline-block">
                    {testimonial.review}
                  </h3>
                  <ImQuotesRight className="ms-2 float-right" fontSize={25} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-gray-900 text-white px-4 py-3 rounded-full focus:outline-none"
        >
          <HiChevronRight className="inline-block" />{" "}
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
