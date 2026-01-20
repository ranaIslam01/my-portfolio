"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Facebook, Heart } from "lucide-react";
import Link from "next/link";

/**
 * Footer Component
 * Contains social links, quick navigation and copyright information
 */
export default function Footer() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/ranaislam01",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rana-islam-23166139b/",
      icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com",
      icon: Facebook,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/8801840248746",
      icon: Phone,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Email",
      href: "mailto:dev.rana.cse@gmail.com",
      icon: Mail,
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Rana Islam
              </h3>
              <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed mb-6">
                Full-stack developer passionate about creating beautiful and
                functional web experiences.
              </p>
              <p className="text-light-muted dark:text-dark-muted text-xs">
                MERN Stack Specialist | Bangladesh
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6 text-light-text dark:text-dark-text">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.slice(0, 4).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-light-muted dark:text-dark-muted hover:text-primary transition-colors text-sm font-medium block"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* More Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6 text-light-text dark:text-dark-text">
                More
              </h4>
              <nav className="space-y-3">
                {quickLinks.slice(4).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-light-muted dark:text-dark-muted hover:text-primary transition-colors text-sm font-medium block"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-lg mb-6 text-light-text dark:text-dark-text">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.target || "_blank"}
                      rel={social.rel || "noopener noreferrer"}
                      className="p-3 rounded-lg bg-light-card dark:bg-dark-card border border-gray-200 dark:border-gray-800 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-light-muted dark:text-dark-muted text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-bold text-light-text dark:text-dark-text">
                Rana Islam
              </span>
              . All rights reserved.
            </p>

            {/* Made with Love */}
            <div className="flex items-center justify-center gap-2 text-light-muted dark:text-dark-muted text-sm">
              <span>Made with</span>
              <Heart
                size={16}
                className="text-red-500 fill-red-500 animate-pulse"
              />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
