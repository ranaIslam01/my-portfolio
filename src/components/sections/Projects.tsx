"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { projectsData, Project } from "@/data/projects"; // Path অনুযায়ী পরিবর্তন করুন

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const moreProjects = projectsData.filter((p) => !p.featured);

  const totalSlides = Math.ceil(moreProjects.length / itemsPerSlide);

  // Responsive logic
  useEffect(() => {
    const updateItems = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerSlide(1);
      else if (w < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const visibleProjects = moreProjects.slice(
    currentSlide * itemsPerSlide,
    currentSlide * itemsPerSlide + itemsPerSlide,
  );

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Showcasing my best work and creative solutions
          </p>
        </motion.div>

        {/* Featured List */}
        <div className="space-y-20 mb-24">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Projects Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                More Creations
              </h3>
              <p className="text-light-muted dark:text-dark-muted">
                Explore more of my recent projects and experiments
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/50"
                aria-label="Previous projects"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/50"
                aria-label="Next projects"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>

          {/* AnimatePresence for smooth sliding */}
          <div className="relative min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {visibleProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentSlide(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? "bg-primary w-8"
                    : "bg-gray-300 dark:bg-gray-700 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Sub-components for better organization ---

function FeaturedCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <motion.div className="relative h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-800 group-hover:border-primary/50 transition-all duration-300">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"
        ></motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h3
          className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-light-muted dark:text-dark-muted mb-6 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-primary/15 text-primary rounded-full text-sm font-semibold border border-primary/30 hover:border-primary/70 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            <ExternalLink size={20} />
            View Live Demo
          </motion.a>

          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Github size={20} />
            View Code
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Card Container */}
      <div className="h-full rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-light-card dark:bg-dark-card hover:border-primary/50 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end justify-center p-4 gap-3"
          >
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              title="View Live Demo"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
              title="View Source Code"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col h-[calc(100%-14rem)]">
          {/* Title */}
          <h4 className="text-xl font-bold mb-3 text-light-text dark:text-dark-text group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {project.title}
          </h4>

          {/* Description */}
          <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-2 mb-4 flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 text-xs font-semibold bg-primary/15 text-primary rounded-full border border-primary/30 hover:border-primary/70 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2.5 py-1 text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex-1 flex items-center justify-center gap-2 text-primary font-semibold text-sm hover:bg-primary/10 py-2 rounded-lg transition-colors duration-300"
            >
              <ExternalLink size={16} />
              Demo
            </motion.a>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex-1 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 font-semibold text-sm hover:text-primary hover:bg-primary/10 py-2 rounded-lg transition-colors duration-300"
            >
              <Github size={16} />
              Code
            </motion.a>
          </div>
        </div>

        {/* Gradient Border on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))",
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
