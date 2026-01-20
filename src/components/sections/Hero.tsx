"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Phone,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * Hero Section Component
 * Landing page with advanced animations and interactions
 */
export default function Hero() {
  const [displayText, setDisplayText] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const roles = [
    "MERN Stack Specialist",
    "Web Designer",
    "Full Stack Developer",
  ];

  // Typing animation
  useEffect(() => {
    const currentRole = roles[displayText];
    let index = 0;
    let timer: NodeJS.Timeout;

    if (isTyping) {
      timer = setInterval(() => {
        if (index < currentRole.length) {
          setTypedText(currentRole.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => (prev + 1) % roles.length);
        setTypedText("");
        setIsTyping(true);
      }, 2500);
    }

    return () => clearInterval(timer) || clearTimeout(timer);
  }, [displayText, isTyping]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Social media links
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/ranaislam01",
      icon: Github,
      color: "hover:text-gray-400",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rana-islam-23166139b/",
      icon: Linkedin,
      color: "hover:text-blue-400",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/8801840248746",
      icon: Phone,
      target: "_blank",
      rel: "noopener noreferrer",
      color: "hover:text-green-400",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/RanaFacebook01",
      icon: Facebook,
      color: "hover:text-blue-600",
    },
    {
      label: "Email",
      href: "mailto:dev.rana.cse@gmail.com",
      icon: Mail,
      color: "hover:text-red-400",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, 2, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -2, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-40 right-1/4 w-20 h-20 bg-cyan-400 rounded-full opacity-20"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-40 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-20"
      ></motion.div>

      <motion.div
        className="max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="z-10">
            {/* Headline with animated words */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {["Hi, I'm", "Rana Islam"].map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      delay: index * 0.2 + 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
                      index === 1
                        ? "gradient-text"
                        : "text-light-text dark:text-dark-text"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Animated Typing Subtitle */}
            <motion.div
              className="h-12 sm:h-14 lg:h-16 mb-6 flex items-center"
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold gradient-text min-h-[2rem]">
                {typedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-light-muted dark:text-dark-muted mb-8 leading-relaxed"
            >
              I'm a passionate developer with expertise in modern web
              technologies. Passionate about turning ideas into reality through
              clean, efficient code.
            </motion.p>

            {/* CTA Buttons with Glow */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse"></div>
                <span className="relative">View My Work</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform relative"
                />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Enhanced Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.target || "_blank"}
                    rel={social.rel || "noopener noreferrer"}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    onHoverStart={() => setHoveredSocial(social.label)}
                    onHoverEnd={() => setHoveredSocial(null)}
                    className={`p-3 border-2 border-light-border dark:border-dark-border rounded-lg transition-all duration-300 relative group ${social.color}`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <Icon size={20} className="relative z-10" />
                    {hoveredSocial === social.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-primary text-white text-xs rounded whitespace-nowrap"
                      >
                        {social.label}
                      </motion.div>
                    )}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Animations */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end z-10"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Rotating Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border"
              ></motion.div>

              {/* Floating Image Container */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="/images/rana.jpg"
                    alt="Rana Islam"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Decorative Circles */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, linear: true }}
                className="absolute inset-0 rounded-full border-2 border-primary/10 -m-4"
              ></motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-sm text-light-muted dark:text-dark-muted font-medium">
            Scroll to explore
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
