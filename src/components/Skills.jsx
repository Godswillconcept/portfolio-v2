import React from "react";
import html from "../assets/html-5.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/js.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.png";
import dart from "../assets/dart.png";
import ejs from "../assets/ejs.png";
import figma from "../assets/figma.png";
import flutter from "../assets/flutter.png";
import jwt from "../assets/jwt.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import php from "../assets/php.png";
import laravel from "../assets/laravel.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql.png";
import jquery from "../assets/jquery.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
const Skills = () => {
  const skillsets = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Bootstrap", image: bootstrap },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "TailwindCSS", image: tailwindcss },
    { name: "Dart", image: dart },
    { name: "EJS", image: ejs },
    { name: "Figma", image: figma },
    { name: "Flutter", image: flutter },
    { name: "JWT", image: jwt },
    { name: "NodeJS", image: nodejs },
    { name: "ExpressJS", image: express },
    { name: "PHP", image: php },
    { name: "Laravel", image: laravel },
    { name: "MySQL", image: mysql },
    { name: "SQL", image: sql },
    { name: "jQuery", image: jquery },
    { name: "GitHub", image: github },
    { name: "GitLab", image: gitlab },
  ];
  return (
    <div className="md:px-12 px-2 py-12 skill-bg" id="skills">
      <h2 className="text-3xl text-white text-center font-bold dark:text-black">
        My Skills
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skillsets.map((skill) => (
          <div key={skill.name} className="bg-gradient-to-br from-orange-100 to-orange-400 transition-all duration-300 ease-in-out rounded-md p-4 text-center hover:bg-orange-300">
            <img src={skill.image} alt="logo" className="w-20 mx-auto object-cover" />
            <p className="text-center text-orange-900 font-bold mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
