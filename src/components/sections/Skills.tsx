"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Skills Section Component
 * Technical skills displayed in grid cards
 */
export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Redux",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Figma", "Vercel", "Firebase"],
    },
    {
      title: "Other Skills",
      skills: [
        "SEO",
        "Performance Optimization",
        "Linux",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-light-card dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles size={24} className="text-primary" />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Proficiency Bars */}
          <motion.div variants={itemVariants} className="mt-16 space-y-8">
            <h3 className="text-2xl font-bold">Proficiency Levels</h3>
            {[
              { label: "React & Next.js", percentage: 95 },
              { label: "TypeScript", percentage: 20 },
              { label: "Backend Development", percentage: 50 },
              { label: "UI/UX Design", percentage: 80 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.label}</span>
                  <span className="text-primary font-bold">
                    {skill.percentage}%
                  </span>
                </div>
                <motion.div
                  className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
