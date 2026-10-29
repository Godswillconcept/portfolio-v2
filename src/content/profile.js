import portrait from "../assets/myself.webp";
import cv from "../assets/abass-cv.pdf";

// Tech stack logo imports
import reactIcon from "../assets/react.webp";
import nodeIcon from "../assets/nodejs.webp";
import flutterIcon from "../assets/flutter.webp";
import dartIcon from "../assets/dart.webp";
import tailwindIcon from "../assets/tailwindcss.webp";
import jsIcon from "../assets/js.webp";
import htmlIcon from "../assets/html-5.webp";
import cssIcon from "../assets/css.webp";
import expressIcon from "../assets/expressjs.webp";
import laravelIcon from "../assets/laravel.webp";
import phpIcon from "../assets/php.webp";
import mysqlIcon from "../assets/mysql.webp";
import sqlIcon from "../assets/sql.webp";
import jwtIcon from "../assets/jwt.webp";
import githubIcon from "../assets/github.webp";
import figmaIcon from "../assets/figma.webp";

export const profile = {
  name: "Olatunji Abass Adewale",
  headlineName: "Olatunji Abass",
  handle: "godswillconcept",
  role: "Remote-Ready Cross-Platform & Full-Stack Developer",
  location: "Ibadan, Nigeria",
  timezone: "WAT (UTC+1)",
  availability: "Available for new projects",
  portrait,
  cv,
  intro:
    "Remote-ready developer shipping production applications across all 6 Flutter platforms (Android, iOS, Web, Windows, Linux, macOS), robust Node.js/Express & Laravel backends, and modern React.js frontends.",
  metrics: [
    { value: "3+", label: "Years Experience", detail: "Shipping production software" },
    { value: "32+", label: "Public Repositories", detail: "On GitHub (@godswillconcept)" },
    { value: "6", label: "Platforms Targeted", detail: "Android, iOS, Web, Desktop" },
    { value: "WAT", label: "Timezone", detail: "Ibadan / Lagos (UTC+1) • Remote" },
  ],
  socials: {
    github: "https://github.com/godswillconcept",
    linkedin: "https://linkedin.com/in/olatunji-abass-adewale",
    twitter: "https://x.com/godswillconcep1",
    whatsapp: "https://wa.me/2348143236834",
    phone: "+234 814 323 6834",
    phoneRaw: "+2348143236834",
    email: "olatunjiabass01@gmail.com",
    livePortfolio: "https://godswillconcept.vercel.app",
  },
};

export const projects = [
  {
    number: "01",
    id: "stylay",
    title: "Stylay — Premium Fashion E-Commerce",
    eyebrow: "Production Web Platform · React & Node.js (2024 — Present)",
    description:
      "Full-stack premium fashion e-commerce platform featuring dynamic product listings, category filtering, user authentication, and secure checkout workflows. Designed mobile-first for fluid cross-device shopping.",
    tags: ["React.js", "Node.js", "REST API", "Responsive UI", "Production"],
    tone: "orange",
    mockupType: "browser",
    stats: "Live production deployment with cart & order flows",
    github: "https://github.com/godswillconcept/stylay-client",
    demo: "https://stylay.com",
  },
  {
    number: "02",
    id: "ecommerce-mobile",
    title: "store_hive (ecommerce-mobile)",
    eyebrow: "Cross-Platform Flutter App (2022 — Present)",
    description:
      "Comprehensive 6-platform Flutter application featuring carousel banners, staggered product grids, shimmer loading, Hive offline caching, Provider state architecture, and Dio REST integrations.",
    tags: ["Flutter", "Dart", "Hive", "Provider", "Dio", "Firebase", "Node.js"],
    tone: "ink",
    mockupType: "mobile",
    stats: "Android · iOS · Web · Windows · Linux · macOS",
    github: "https://github.com/godswillconcept/ecommerce-mobile",
    demo: "https://github.com/godswillconcept/e-commerce",
  },
  {
    number: "03",
    id: "ecommerce-api",
    title: "E-Commerce REST API Backend",
    eyebrow: "Backend Architecture · MVC Pattern (2022 — Present)",
    description:
      "Modular Node.js & Express RESTful API engine with MVC architecture, MySQL relational data storage, product image file handling, JWT security, and live deployment on Vercel.",
    tags: ["Node.js", "Express.js", "MySQL", "JavaScript", "Vercel", "REST API"],
    tone: "cream",
    mockupType: "dashboard",
    stats: "Live deployed on Vercel powering web and Flutter mobile",
    github: "https://github.com/godswillconcept/e-commerce",
    demo: "https://e-commerce-eight-psi-90.vercel.app",
  },
  {
    number: "04",
    id: "churchporch",
    title: "ChurchPorch Management & Weather-App",
    eyebrow: "Mobile Products · Flutter & Dart (2022 — 2023)",
    description:
      "Collaborative church operations platform (handling programs, sermons, donations, and choir) with Firebase Auth and MySQL, alongside a live real-time multi-platform Weather application.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Hive", "REST API", "MySQL"],
    tone: "orange",
    mockupType: "mobile",
    stats: "Production Flutter apps with offline persistence",
    github: "https://github.com/godswillconcept/Weather-App",
    demo: "https://github.com/godswillconcept",
  },
];

export const techStack = [
  { name: "Flutter", category: "Mobile", icon: flutterIcon, level: "Advanced (6 Platforms)" },
  { name: "Dart", category: "Mobile", icon: dartIcon, level: "Advanced" },
  { name: "React.js", category: "Frontend", icon: reactIcon, level: "Advanced" },
  { name: "Node.js", category: "Backend", icon: nodeIcon, level: "Advanced (MVC)" },
  { name: "Express.js", category: "Backend", icon: expressIcon, level: "Advanced" },
  { name: "Laravel / PHP", category: "Backend", icon: laravelIcon, level: "Proficient" },
  { name: "JavaScript ES6+", category: "Frontend", icon: jsIcon, level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", icon: tailwindIcon, level: "Advanced" },
  { name: "MySQL / PostgreSQL", category: "Database", icon: mysqlIcon, level: "Advanced" },
  { name: "Firebase", category: "Backend", icon: sqlIcon, level: "Auth & Firestore" },
  { name: "JWT Auth & Dio", category: "Security", icon: jwtIcon, level: "Advanced" },
  { name: "HTML5 & CSS3", category: "Frontend", icon: htmlIcon, level: "Advanced" },
  { name: "Figma", category: "Design", icon: figmaIcon, level: "Design-to-Code" },
  { name: "GitHub", category: "Tooling", icon: githubIcon, level: "32+ Repositories" },
];

export const services = [
  {
    number: "01",
    title: "Cross-Platform Mobile Apps",
    tagline: "Single codebase, all 6 Flutter platforms",
    detail:
      "Engineering pixel-perfect, 60fps Flutter applications targeting Android, iOS, Web, Windows, Linux, and macOS. Equipped with Hive offline caching, Dio networking, and Provider/BLoC state management.",
    deliverables: ["Android & iOS production builds", "Desktop (macOS, Windows, Linux) & Web", "Offline-first Hive data caching", "Firebase Auth & cloud storage pipelines"],
  },
  {
    number: "02",
    title: "Robust REST API & Backends",
    tagline: "Dependable, scalable server logic",
    detail:
      "Architecting modular Node.js/Express (MVC pattern) and PHP/Laravel backends. Designing clean RESTful endpoints, relational databases (MySQL/PostgreSQL), and cloud deployments.",
    deliverables: ["MVC RESTful API design", "Node.js/Express & Laravel architectures", "Relational database schema & migrations", "Vercel & cloud server deployment"],
  },
  {
    number: "03",
    title: "Responsive React.js Web Platforms",
    tagline: "Fluid, high-converting interfaces",
    detail:
      "Designing and developing responsive frontend web applications that delivered a 20% uplift in user engagement, featuring modern UI/UX design and accessible components.",
    deliverables: ["Modern React.js component architectures", "Mobile-first responsive styling", "Design system & Figma implementation", "High-performance asset optimization"],
  },
  {
    number: "04",
    title: "Figma to Pixel-Perfect Code",
    tagline: "Bridging product vision and code",
    detail:
      "Translating complex Figma mockups into maintainable, component-driven production UI across web and mobile platforms with attention to layout, typography, and micro-interactions.",
    deliverables: ["Accurate Figma component translation", "Carousel sliders, shimmer states & animations", "Design system consistency", "Cross-browser and cross-device testing"],
  },
];

export const capabilities = {
  Mobile: ["Flutter (All 6 Platforms)", "Dart (Advanced)", "Provider & BLoC", "Hive Local Caching", "Dio REST Client", "Firebase Services"],
  Backend: ["Node.js & Express (MVC)", "PHP & Laravel", "MySQL & PostgreSQL", "RESTful API Design", "JWT Authentication", "DB Migrations"],
  Frontend: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Bootstrap", "Responsive Web Design"],
  Tooling: ["Git & GitHub (32+ Repos)", "Figma to Code", "Docker & CI/CD", "Vercel Cloud Deploy", "Postman", "TDD Practices"],
};

export const experience = [
  {
    periodYear: "2024 — PRESENT",
    date: "2024 — PRESENT",
    role: "Lead Full-Stack Developer",
    company: "Stylay (stylay.com)",
    location: "Remote",
    badgeType: "Solo Creator",
    detail:
      "Architected and deployed a full-stack premium fashion e-commerce platform. Engineered a mobile-first responsive React.js frontend, integrated Node.js REST API workflows for catalog and order management, and launched production live at stylay.com.",
    highlights: [
      "Built complete full-stack e-commerce architecture (React.js + Node.js)",
      "Implemented responsive mobile-first shopping experience & checkout",
      "Live production deployment with real-world users at stylay.com",
    ],
  },
  {
    periodYear: "2022 — PRESENT",
    date: "Jan 2022 — PRESENT",
    role: "Cross-Platform Mobile Developer",
    company: "Project-Based & Collaborative",
    location: "Remote",
    badgeType: "Remote Lead",
    detail:
      "Lead Flutter developer across multiple production applications targeting all six Flutter platforms (Android, iOS, Web, Windows, Linux, and macOS) from a unified codebase in async, remote-first environments.",
    highlights: [
      "Targeted all 6 Flutter platforms from a single clean codebase",
      "Translated complex Figma designs into pixel-perfect responsive UIs",
      "Implemented Firebase Auth, Hive local persistence, and Dio REST clients",
      "Delivered ChurchPorch and store_hive e-commerce apps with rich UI states",
    ],
  },
  {
    periodYear: "2022 — PRESENT",
    date: "Jan 2022 — PRESENT",
    role: "Full-Stack Developer",
    company: "Alusoft Technologies Ltd",
    location: "Ibadan, Nigeria",
    badgeType: "Core Team",
    detail:
      "Engineered full-stack web solutions utilizing Node.js/Express, Laravel, MySQL, and React.js. Contributed to structured codebases, delivered APIs powering both web and mobile clients, and deployed production solutions to Vercel.",
    highlights: [
      "Delivered React.js front-ends contributing to a 20% uplift in user engagement",
      "Developed modular Node.js/Express backends following MVC patterns",
      "Deployed production e-commerce REST APIs to Vercel with MySQL layer",
      "Mentored junior developers through structured code reviews",
    ],
  },
];

export const education = [
  {
    periodYear: "2021 — 2025",
    date: "April 2021 — November 2025",
    degree: "B.Sc. Computer Science",
    institution: "National Open University of Nigeria",
    location: "Nigeria",
    detail: "Focused on software engineering principles, algorithms, data structures, and database systems architecture.",
  },
];

export const certifications = [
  { year: "2022", title: "Flutter Development Certification", issuer: "Alusoft Technologies" },
  { year: "2022", title: "Dart Programming Fundamentals", issuer: "Alusoft Technologies" },
  { year: "2022", title: "Mobile Development Principles", issuer: "Alusoft Technologies" },
  { year: "2021", title: "React Developer Certification", issuer: "Alusoft Technologies" },
  { year: "2021", title: "Node.js Fundamentals", issuer: "Alusoft Technologies" },
  { year: "2021", title: "JavaScript Fundamentals", issuer: "Alusoft Technologies" },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Olatunji is one of the most talented and dedicated developers I have worked with. He adapts quickly to requirements, communicates with utmost clarity, and consistently goes the extra mile to deliver dependable, high-quality work on time.",
    name: "Mr. Olutayo Olatunji",
    role: "Client & Project Lead",
    company: "Alusoft Technologies",
    rating: 5,
    tag: "Full-Stack Web & Mobile",
    avatar: "OO",
  },
  {
    id: 2,
    quote:
      "Abass single-handedly architected our e-commerce platform with precision. The mobile shopping flow is fast, the UI feels world-class, and our users frequently compliment how effortless checkout is.",
    name: "Abayomi Agboluaje",
    role: "Product Founder",
    company: "Stylay",
    rating: 5,
    tag: "React & Node.js E-Commerce",
    avatar: "AA",
  },
  {
    id: 3,
    quote:
      "His Flutter and cross-platform mobile engineering skills are exceptional. He turned complex Figma mockups into offline-first, fluid mobile applications on schedule with clean state management.",
    name: "Dr. E. Babatunde",
    role: "Project Coordinator",
    company: "ChurchPorch & Mobile Systems",
    rating: 5,
    tag: "Cross-Platform Flutter",
    avatar: "EB",
  },
];

export const testimonial = testimonials[0];

