"use client";

import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";

/**
 * Education Section Component
 * Displays educational background and achievements
 */
export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2020",
      gpa: "3.8/4.0",
      description: "Specialized in Web Development and Software Engineering",
      highlights: ["Dean's List", "Best Final Project Award"],
    },
    {
      id: 2,
      degree: "Diploma in Web Development",
      institution: "Tech Training Institute",
      year: "2019",
      gpa: "9.5/10",
      description: "Comprehensive training in MERN Stack",
      highlights: ["Certified", "100% Attendance"],
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate",
      institution: "City College",
      year: "2018",
      gpa: "4.0/4.0",
      description: "Science stream with distinction in Mathematics and Physics",
      highlights: ["Scholarship Recipient", "Merit Award"],
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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-light-card/50 dark:bg-dark-card/50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            My academic journey and accomplishments
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="bg-light-bg dark:bg-dark-bg rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border-2 border-primary">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-light-text dark:text-dark-text">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-light-muted dark:text-dark-muted text-sm mt-1 sm:mt-0">
                      <span className="font-semibold">{edu.year}</span>
                      {edu.gpa && <span className="block">GPA: {edu.gpa}</span>}
                    </div>
                  </div>

                  <p className="text-light-muted dark:text-dark-muted mb-4">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1 px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          <Award size={14} />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
