"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Code } from "lucide-react";

/**
 * About Section Component
 * Displays personal background and quick facts
 */
export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const quickFacts = [
    {
      icon: MapPin,
      label: "Location",
      value: "Dinajpur Sadar, Bangladesh",
    },
    {
      icon: Award,
      label: "Education",
      value: "Diploma in CSE, Thakurgaon Polytechnic Institute",
    },
    {
      icon: Code,
      label: "Specialization",
      value: "MERN Stack Developer",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science
            and web technologies
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Background */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
                Background
              </h3>
              <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                I'm a Computer Science Engineering graduate from Thakurgaon
                Polytechnic Institute, based in Dinajpur Sadar, Bangladesh. I
                have completed my diploma and am passionate about creating
                innovative web solutions using modern technologies.
              </p>
            </motion.div>

            {/* What I Do */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
                What I Do
              </h3>
              <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                I specialize in full-stack web development using the MERN stack
                (MongoDB, Express.js, React.js, Node.js). I love building
                responsive, user-friendly applications that solve real-world
                problems and provide excellent user experiences.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Quick Facts */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-light-card dark:bg-dark-card rounded-lg p-6 border border-gray-200 dark:border-gray-800 sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">
                Quick Facts
              </h3>

              <div className="space-y-5">
                {quickFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex gap-3 items-start"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-light-muted dark:text-dark-muted mb-1">
                          {fact.label}
                        </p>
                        <p className="text-light-text dark:text-dark-text font-medium">
                          {fact.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
