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
    currentSlide * itemsPerSlide + itemsPerSlide
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-light-card dark:bg-dark-card overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Featured List */}
        <div className="space-y-20 mb-24">
          {featuredProjects.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>

        {/* More Projects Slider */}
        <div className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">More Creations</h3>
            <div className="flex gap-2">
               <button onClick={handlePrev} className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={handleNext} className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* AnimatePresence for smooth sliding */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Sub-components for better organization ---

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <div className="group relative h-80 rounded-xl overflow-hidden shadow-xl">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-light-muted dark:text-dark-muted mb-6 text-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.liveLink} target="_blank" className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            <ExternalLink size={18} /> Live Demo
          </a>
          <a href={project.githubLink} target="_blank" className="flex items-center gap-2 border border-primary text-primary px-6 py-2 rounded-lg font-medium hover:bg-primary/5 transition-colors">
            <Github size={18} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-44 rounded-lg overflow-hidden mb-4">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
      <p className="text-sm text-light-muted dark:text-dark-muted line-clamp-2 mb-4">{project.description}</p>
      <div className="flex gap-3 mt-auto">
        <a href={project.liveLink} className="text-primary hover:underline text-sm font-bold flex items-center gap-1">
          Demo <ExternalLink size={14} />
        </a>
        <a href={project.githubLink} className="text-gray-500 hover:text-primary text-sm font-bold flex items-center gap-1">
          Code <Github size={14} />
        </a>
      </div>
    </div>
  );
}