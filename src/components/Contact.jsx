/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16" id="contact">
      <h2 className="text-4xl font-bold text-orange-600 mb-12">
        Let's Get In Touch
      </h2>
      <form className="w-3/5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="w-full md:w-2/3">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <label htmlFor="message" className="block text-lg font-semibold mb-2">
          Message   
        </label>
        <textarea
        placeholder="What's on your mind?"
          id="message"
          name="message"
          className="block w-full py-2 h-44 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
        <button
          type="submit"
          className="mt-12 w-full bg-orange-500 py-2 px-4 text-white font-bold rounded-md hover:bg-orange-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
