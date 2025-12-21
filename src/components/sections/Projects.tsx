"use client";
import swift from "../../../public/images/Swift Express.png";
import Dragon from "../../../public/images/Dragon News.png";
import Motor from "../../../public/images/Motor Garage.png";
import Book from "../../../public/images/Book Vibe.png";
import Peddy from "../../../public/images/Peddy.png";
import Country from "../../../public/images/Country Viewer.png";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { features } from "process";

/**
 * Projects Section Component
 * Showcase real-world projects with live demo and GitHub links
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Swift Express Cargo",
      description:
        "Responsive Multi page built using HTML, Tailwind CSS & JavaScript. This project includes a courier service landing page with animated UI sections, fully mobile friendly layouts and optimized loading performance.",
      technologies: ["HTML5", "Tailwind", "JavaScript", "Figma"],
      image: swift,
      liveLink: "https://bd-calling-project-03.vercel.app",
      githubLink: "https://github.com/ranaIslam01/swift-express-cargo",
      featured: false,
    },
    {
      id: 2,
      title: "Dragon News",
      description:
        "Responsive news web app built with React, Tailwind CSS, and Firebase Authentication, featuring private routes, reusable components, and real-time toast notifications. Includes dynamic category-based news browsing.",
      technologies: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
      image: Dragon,
      liveLink: "https://dragon-news-2-1d8e0.web.app/category/0",
      githubLink: "https://github.com/ranaIslam01/dragon-news",
      featured: true,
    },
    {
      id: 3,
      title: "Motor Garage",
      description:
        "A modern and fully responsive auto-service website built with React and Tailwind CSS. It features dynamic service pages, a booking modal, blog section, contact form, and Google Maps integration — optimized for clean UI, fast performance, and seamless user experience.",
      technologies: ["React", "Tailwind CSS", "Firebase", "Figma"],
      image: Motor,
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
      image: Book,
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
      image: Peddy,
      liveLink: "https://peddy-xi.vercel.app/",
      githubLink: "https://github.com/ranaIslam01/peddy",
    },
    {
      id: 6,
      title: "Countries Viewer",
      description:
        "Simple interactive countries viewer using REST Countries API. Includes search system and clean layout for browsing country details.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: Country,
      liveLink: "https://countries-viewer.vercel.app/",
      githubLink: "https://github.com/ranaIslam01/countries-viewer",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-card dark:bg-dark-card"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            <p className="text-light-muted dark:text-dark-muted mt-4 max-w-2xl">
              Here are some of my recent projects showcasing my skills and
              expertise in web development.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={containerVariants} className="space-y-12 mb-16">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                >
                  <div className="relative h-80 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-light-muted dark:text-dark-muted mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center gap-2 glow-effect"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all flex items-center gap-2"
                      >
                        <Github size={20} />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* All Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8">More Projects</h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="group bg-light-bg dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-gray-800 p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
                  >
                    <div className="relative h-48 rounded-lg overflow-hidden mb-4 border border-gray-200 dark:border-gray-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-light-muted dark:text-dark-muted text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-primary text-white rounded text-sm font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-1"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border border-primary text-primary rounded text-sm font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-1"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
