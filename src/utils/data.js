import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiCpu,
} from "react-icons/fi";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiPostman,
  SiVsco,
  SiFigma,
  SiRender,
  SiVercel,
} from "react-icons/si";

import { TbBrandCpp } from "react-icons/tb";

import GreenCartLogo from "../assets/ProjectLogo/GreenCartLogo.webp";
import interviewPlatform from "../assets/ProjectLogo/Interview-Platform.webp";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const SOCIALS = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/shubhamk-83",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shubham-kumar-31354836b/",
  },
  {
    icon: FiMail,
    label: "Email",
    href: "mailto:shubhamrajput5641@gmail.com",
  },
];

export const ABOUT_STATS = [
  {
    label: "Real World Projects",
    value: 10,
    suffix: "+",
  },
  {
    label: "Technologies",
    value: 15,
    suffix: "+",
  },
  {
    label: "LeetCode Problems",
    value: 100,
    suffix: "+",
  },
  {
    label: "Certifications",
    value: 5,
    suffix: "+",
  },
];

export const SKILLS = {
  Frontend: [
    {
      name: "HTML5",
      icon: SiHtml5,
      level: 95,
    },
    {
      name: "CSS3",
      icon: SiCss,
      level: 92,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 88,
    },
    {
      name: "React.js",
      icon: SiReact,
      level: 90,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 90,
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      level: 84,
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 82,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 82,
    },
    {
      name: "REST API",
      icon: FiExternalLink,
      level: 84,
    },
    {
      name: "JWT Authentication",
      icon: SiJsonwebtokens,
      level: 80,
    },
    {
      name: "Cloudinary",
      icon: SiCloudinary,
      level: 78,
    },
  ],

  Programming: [
    {
      name: "C++",
      icon: TbBrandCpp,
      level: 85,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 88,
    },
  ],

  Tools: [
    {
      name: "Git",
      icon: SiGit,
      level: 85,
    },
    {
      name: "GitHub",
      icon: SiGithub,
      level: 88,
    },
    {
      name: "Postman",
      icon: SiPostman,
      level: 82,
    },
    {
      name: "VS Code",
      icon: SiVsco,
      level: 95,
    },
    {
      name: "Figma",
      icon: SiFigma,
      level: 70,
    },
    {
      name: "Render",
      icon: SiRender,
      level: 80,
    },
    {
      name: "Vercel",
      icon: SiVercel,
      level: 82,
    },
  ],

  AI: [
    {
      name: "Generative AI",
      icon: FiCpu,
      level: 80,
    },
    {
      name: "Prompt Engineering",
      icon: FiCpu,
      level: 82,
    },
  ],
};

export const PROJECTS = [
  {
    id: "ai-interview",
    title: "AI Interview Preparation Platform",
    description:
      "An AI-powered interview preparation platform that helps candidates practice mock interviews, generate role-specific questions, analyze resumes, receive AI-powered feedback, and improve their interview performance through personalized sessions and progress tracking.",

    image: interviewPlatform,

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Google Gemini API",
      "JWT",
      "Axios",
    ],

    live: "https://ai-interview-platform-beta-seven.vercel.app/",

    github: "https://github.com/shubhamk-83/Ai-Interview-Platform",

    features: [
      "AI-generated interview questions based on job role, experience, and topics",
      "AI-powered mock interview practice with personalized questions",
      "Resume analysis with AI-generated strengths, weaknesses, and improvement suggestions",
      "AI-powered concept explanations for interview preparation",
      "Personalized interview sessions with question and answer tracking",
      "Automated evaluation and actionable AI feedback",
      "Session history and interview progress tracking",
      "Secure authentication using JWT",
      "Responsive and modern UI built with React and Tailwind CSS",
    ],

    architecture:
      "The React frontend communicates with a Node.js and Express.js REST API using Axios. The backend handles authentication, interview sessions, questions, resume processing, and AI operations. Google Gemini 2.5 Flash is integrated for generating interview questions, evaluating responses, explaining concepts, and analyzing resume data. MongoDB with Mongoose is used to persist users, interview sessions, questions, and related data.",

    challenges:
      "Designing a reliable AI-powered interview workflow while maintaining fast response times, generating relevant questions for different roles and experience levels, handling structured AI responses, and keeping interview session data synchronized between the frontend and backend.",

    solutions:
      "Implemented structured Gemini prompts for consistent AI responses, separated AI operations into dedicated backend controllers, used reusable API and authentication middleware, validated request data before processing, and stored interview sessions and generated questions in MongoDB for persistent progress tracking.",
  },

  {
    id: "greencart",
    title: "GreenCart — MERN Grocery Delivery Platform",
    description:
      "A modern full-stack grocery delivery platform built with the MERN stack, featuring secure authentication, online payments, an admin dashboard, inventory management, and a seamless shopping experience.",

    image: GreenCartLogo,

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Cloudinary",
      "JWT",
    ],

    live: "https://green-cart-steel-eta.vercel.app/",

    github: "https://github.com/shubhamk-83/Green-cart",

    features: [
      "Secure JWT authentication with role-based access (User & Admin)",
      "Browse, search, and filter grocery products",
      "Persistent shopping cart with quantity management",
      "Stripe-powered secure online payments",
      "Address management and order tracking",
      "Admin dashboard for products, orders, and inventory",
      "Cloudinary integration for optimized image uploads",
      "Responsive design optimized for desktop and mobile",
    ],

    architecture:
      "Built using a React frontend with an Express.js REST API and MongoDB database. JWT handles authentication, Stripe powers secure payments, and Cloudinary manages product images, resulting in a scalable and production-ready MERN architecture.",

    challenges:
      "Maintaining cart consistency across devices, implementing secure payment processing, handling image uploads efficiently, and ensuring reliable order management.",

    solutions:
      "Implemented server-side cart persistence with synchronization after login, integrated Stripe Checkout with webhook verification, stored media on Cloudinary to reduce server load, and designed a modular REST API for scalable product and order management.",
  },
];

export const EXPERIENCE = [
  {
    company: "Personal Projects",
    role: "Full Stack MERN Developer",
    duration: "2024 – Present",
    logo: "💻",
    responsibilities: [
      "Built multiple full-stack MERN applications including AI Interview Preparation Platform, GreenCart, and many other.",
      "Designed responsive user interfaces using React.js, Tailwind CSS, and Framer Motion.",
      "Developed RESTful APIs with Express.js and MongoDB.",
      "Integrated authentication, Cloudinary, Gemini AI, and deployment using Render and Vercel.",
    ],
  },

  {
    company: "Learning Journey",
    role: "Computer Science Student",
    duration: "2023 – Present",
    logo: "🎓",
    responsibilities: [
      "Pursuing B.Tech in Computer Science with focus on Software Development.",
      "Learning Data Structures & Algorithms using C++.",
      "Practicing problem solving on LeetCode.",
      "Continuously exploring Generative AI, React ecosystem, and backend development.",
    ],
  },
];

export const EDUCATION = [
  {
    type: "education",
    title: "Bachelor of Technology (B.Tech) - Computer Science",
    place: "Sagar Institute of Research & Technology (SIRT), Bhopal",
    period: "2023 - 2027",
    detail:
      "Currently pursuing B.Tech in Computer Science. Building strong foundations in Full Stack Development, Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, and Artificial Intelligence.",
  },

  {
    type: "certification",
    title: "MERN Stack Development",
    place: "Self Learning",
    period: "2024 - Present",
    detail:
      "Hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, Node.js, JWT Authentication, Cloudinary, Stripe, and REST APIs.",
  },

  {
    type: "learning",
    title: "Data Structures & Algorithms",
    place: "LeetCode | C++",
    period: "2025 - Present",
    detail:
      "Regularly solving coding problems and improving problem-solving skills for software engineering interviews.",
  },
];

export const ACHIEVEMENTS = [
  {
    label: "Projects Built",
    value: 10,
    suffix: "+",
  },

  {
    label: "LeetCode Problems",
    value: 100,
    suffix: "+",
  },

  {
    label: "GitHub Repositories",
    value: 20,
    suffix: "+",
  },

  {
    label: "Technologies Learned",
    value: 15,
    suffix: "+",
  },

  {
    label: "Learning Journey",
    value: 3,
    suffix: "+ Yrs",
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    description:
      "Fast, accessible, production-grade websites built with modern React tooling.",
  },

  {
    title: "UI Design",
    description:
      "Interface design systems that feel considered — spacing, type, and motion working together.",
  },

  {
    title: "MERN Development",
    description:
      "End-to-end full-stack apps: MongoDB, Express, React, and Node, deployed and monitored.",
  },

  {
    title: "API Development",
    description:
      "REST APIs with clean auth, validation, and documentation your team can actually build on.",
  },

  {
    title: "AI Integration",
    description:
      "Practical AI features — chat, scoring, generation — wired into real product workflows.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Working with Shubham has been a great experience. He consistently writes clean, well-structured code, pays attention to UI details, and always looks for ways to improve the user experience. His dedication and problem-solving skills make him a reliable developer and teammate.",
    name: "Arnav",
    role: "Friend & Full Stack Developer",
  },
];

export const MARQUEE_WORDS = [
  "MERN Stack",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "C++",
  "Tailwind CSS",
  "REST APIs",
  "JWT",
  "Stripe",
  "Cloudinary",
  "Gemini AI",
  "Git & GitHub",
  "Responsive UI",
  "Framer Motion",
];