"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

/**
 * Experience Section Component
 * Displays work experience with neon card design
 */
export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Web Design and Development Course",
      company: "Programming Hero Batch-10",
      period: "July-24 -- Dec-24",
      description: "Comprehensive web development training",
      technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React",
        "etc",
      ],
    },
    {
      id: 2,
      title: "Web Design and Development Internship",
      company: "Bd Calling Academy",
      period: "Sep-09 -- Nov-29",
      description: "Hands-on internship experience in web development",
      technologies: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "React",
        "Redux",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            My journey in the tech industry
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-dark-bg border-2 border-primary/30 rounded-lg p-8 hover:border-primary/70 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/50">
                {/* Date */}
                <div className="mb-4">
                  <p className="text-cyan-400 text-sm font-semibold tracking-widest">
                    {exp.period}
                  </p>
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 border-2 border-primary/50">
                  <Briefcase size={24} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h3>

                {/* Company */}
                <p className="text-light-muted dark:text-dark-muted font-medium mb-4">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-light-muted dark:text-dark-muted mb-6 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/40 rounded-full hover:bg-primary/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
