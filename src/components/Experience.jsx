import React from "react";

const Experience = () => {
  const workExperienceData = [
    {
      jobTitle: "Full Stack Developer",
      company: "Alusoft technologies Ltd, Akobo Ibadan",
      timePeriod: "January 2021 - Present",
      jobDescription:
        "Developed web applications using full stack technologies, created reusable templates and contributed to the development of customized software solutions.",
    },
    {
      jobTitle: "Application Developer",
      company: "Alusoft technologies Ltd, Akobo Ibadan",
      timePeriod: "January 2022 - Present",
      jobDescription:
        "Developed web applications using full stack technologies, created reusable templates and contributed to the development of customized software solutions, also worked on application development using Flutter for Android and iOS devices. ",
    },
  ];


  const educationAndCertifications = [
    {
      institution: "National Open University of Nigeria",
      degree: "B.Sc Computer Science",
      timePeriod: "APRIL 2021 - SEPTEMBER 2026",
    },
    {
      certificationName: "React Developer Certification",
      certificationIssuingBody: "Alusoft Technologies Ltd",
      certificationDate: "2021",
    },
    {
      certificationName: "Node.js Fundamentals",
      certificationIssuingBody: "Alusoft Technologies Ltd",
      certificationDate: "2021",
    },
    {
      certificationName: "JavaScript Fundamentals",
      certificationIssuingBody: "Alusoft Technologies Ltd",
      certificationDate: "2021",
    },
  ];
  

  const skills = [
    "Programming Languages (PHP, Javascript, Dart)",
    "Front-End Development (React.js)",
    "Back-End Development (Laravel, Node.js, Express.js)",
    "Application Development (Flutter)",
    "Database Management (Prisma, SQL, MYSQL)",
  ];

  const languages = [
    "English Language: Fluent",
    "JavaScript: Advanced ",
    "Dart: Proficient (for Flutter)",
    "PHP: Intermediate ",
    "SQL: Advanced ",
    "Swift: Intermediate (iOS app development)",
    "Kotlin: Intermediate (Android app development)",
  ];

  return (
    <section className="bg-white py-12 shadow-lg" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-12 text-center">My <span className="text-orange-600">Work</span> Experience</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4">

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {workExperienceData.map((job, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="mb-1 md:text-lg sm:text-base text-sm font-semibold text-gray-900 dark:text-white">
                {job.jobTitle}
              </h3>
              <p className="md:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
                {job.company} | {job.timePeriod}
              </p>
              <p className="md:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
                {job.jobDescription}
              </p>
            </li>
          ))}
        </ol>
        <div className="mx-12">
          <h2 className="md:text-3xl sm:text-2xl text-xl font-bold mb-6"><span className="text-orange-600">Education</span> & Certifications</h2>
          {educationAndCertifications.map((certification, index) => (
            <div key={index} className="mb-4">
              <h3 className="md:text-lg sm:text-base text-sm font-semibold text-gray-900 dark:text-white">
                {certification.degree || certification.certificationName}
              </h3>
              <p className="md:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
                {certification.institution || certification.certificationIssuingBody} | {certification.timePeriod || certification.certificationDate}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
