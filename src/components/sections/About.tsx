"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Award } from "lucide-react";

/**
 * About Section Component
 * Professional bio and career highlights
 */
export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "5+ Years Experience",
      description:
        "Building scalable web applications with modern technologies",
    },
    {
      icon: Briefcase,
      title: "Full Stack Developer",
      description: "Proficient in frontend, backend, and database design",
    },
    {
      icon: Award,
      title: "Industry Recognized",
      description: "Certified and awarded for innovative solutions",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-card dark:bg-dark-card"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Bio Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-lg text-light-muted dark:text-dark-muted leading-relaxed mb-6">
              I'm a passionate full-stack developer with a keen eye for design
              and a commitment to writing clean, maintainable code. With 5+
              years of professional experience, I've worked on diverse projects
              ranging from startups to enterprise solutions.
            </p>
            <p className="text-lg text-light-muted dark:text-dark-muted leading-relaxed">
              My approach combines technical excellence with user-centric
              design, ensuring that every project not only meets technical
              requirements but also delivers an exceptional user experience. I'm
              constantly learning and staying updated with the latest industry
              trends.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-light-bg dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-light-muted dark:text-dark-muted">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
