// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
  serverLink?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Swift Express Cargo",
    description:
      "Responsive Multi page built using HTML, Tailwind CSS & JavaScript. This project includes a courier service landing page with animated UI sections, fully mobile friendly layouts and optimized loading performance.",
    technologies: ["HTML5", "Css3", "JavaScript", "Figma"],
    image: "/images/swift-express.png",
    liveLink: "https://bd-calling-project-03.vercel.app",
    githubLink: "https://github.com/ranaIslam01/swift-express-cargo",
    featured: true,
  },
  {
    id: 2,
    title: "Dragon News",
    description:
      "Responsive news web app built with React, Tailwind CSS, and Firebase Authentication, featuring private routes, reusable components, and real-time toast notifications. Includes dynamic category-based news browsing.",
    technologies: ["React", "Firebase", "Figma", "Tailwind CSS"],
    image: "/images/dragon-news.png",
    liveLink: "https://dragon-news-2-1d8e0.web.app/category/0",
    githubLink: "https://github.com/ranaIslam01/dragon-news",
    featured: false,
  },
  {
    id: 3,
    title: "Motor Garage",
    description:
      "A modern and fully responsive auto-service website built with React and Tailwind CSS. It features dynamic service pages, a booking modal, blog section, contact form, and Google Maps integration — optimized for clean UI, fast performance, and seamless user experience.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Figma"],
    image: "/images/motor-garage.png",
    liveLink: "https://motor-garage.vercel.app/",
    githubLink: "https://github.com/ranaIslam01/motor-garage",
    featured: true,
  },
  {
    id: 4,
    title: "Book Vibe",
    description:
      "Book collection web app with API integration, clean UI & reusable components. Users can explore books with detailed pages, wishlist options, and dynamic page routing.",
    technologies: ["React", "TailwindCss", "Axios", "Figma"],
    image: "/images/book-vibe.png",
    liveLink: "https://book-vibe-blush.vercel.app/",
    githubLink: "https://github.com/ranaIslam01/book-vibe",
    featured: false,
  },
  {
    id: 5,
    title: "Peddy",
    description:
      "Clean & responsive pet adoption website built using HTML, CSS & JavaScript. Includes pets listing, filtering options, and beautiful UI animations.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/peddy.png",
    liveLink: "https://peddy-xi.vercel.app/",
    githubLink: "https://github.com/ranaIslam01/peddy",
    featured: false,
  },
  {
    id: 6,
    title: "Countries Viewer",
    description:
      "Simple interactive countries viewer using REST Countries API. Includes search system and clean layout for browsing country details.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/country-viewer.png",
    liveLink: "https://countries-viewer.vercel.app/",
    githubLink: "https://github.com/ranaIslam01/countries-viewer",
    featured: false,
  },
  {
    id: 7,
    title: "Coffee Store",
    description:
      "A modern, responsive Coffee Store application built with React, Firebase, and Tailwind CSS. Browse, add, update, and manage your favorite coffee products with an intuitive user interface.",
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Figma",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
    ],
    image: "/images/coffee.png",
    liveLink: "https://coffee-store-client-eta-one.vercel.app/",
    githubLink: "https://github.com/ranaIslam01/coffee-store-client",
    serverLink: "https://github.com/ranaIslam01/coffee-store-server",
    featured: false,
  },
  {
    id: 8,
    title: "Career Code",
    description:
      "A modern, full-featured job portal application built with React that connects job seekers with employers. This platform offers a seamless experience for job searching, application management, and job posting with Bengali language support.",
    technologies: [
      "React",
      "Firebase",
      "Axios",
      "Tailwind CSS",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
    ],
    image: "/images/carrer-code.png",
    liveLink: "https://job-portal-client-rana.vercel.app/",
    githubLink: "https://github.com/ranaIslam01/job-portal-client",
    serverLink: "https://github.com/ranaIslam01/job-portal-server",
    featured: true,
  },
  // {
  //   id: 9,
  //   title: "Zap Shift - Client",
  //   description:
  //     "A modern parcel delivery and logistics platform built with React that provides seamless service for both customers and riders.",
  //   technologies: [
  //     "React",
  //     "Firebase",
  //     "Axios",
  //     "Tailwind CSS",
  //     "MongoDB",
  //     "ExpressJS",
  //     "NodeJS",
  //   ],
  //   image: "/images/carrer-code.png",
  //   liveLink: "https://job-portal-client-rana.vercel.app/",
  //   githubLink: "https://github.com/ranaIslam01/job-portal-client",
  //   serverLink: "https://github.com/ranaIslam01/job-portal-server",
  //   featured: true,
  // },
  

];