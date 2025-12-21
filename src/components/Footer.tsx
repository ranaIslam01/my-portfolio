"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";

/**
 * Footer Component
 * Contains social links and copyright information
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

  return (
    <footer className="bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-light-muted dark:text-dark-muted">
              Crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#about"
                className="block hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="block hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-primary hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-light-muted dark:text-dark-muted">
          <p>
            &copy; {new Date().getFullYear()} Rana Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
