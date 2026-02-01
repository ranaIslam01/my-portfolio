"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

/**
 * Contact Section Component
 * Contact form with validation and email integration
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "dev.rana.cse@gmail.com",
      href: "mailto:dev.rana.cse@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01840248746",
      href: "tel:+8801840248746",
    },

    {
      icon: MapPin,
      label: "Location",
      value: "Dinajpur Sadar, Bangladesh",
      href: "https://www.google.com/maps/place/Rangpur,+Bangladesh",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send form data to API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "ইমেইল পাঠাতে ব্যর্থ হয়েছে");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error instanceof Error ? error.message : "ইমেইল পাঠাতে সমস্যা হয়েছে",
      );
    } finally {
      setIsLoading(false);
    }
  };

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
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-lg text-light-muted dark:text-dark-muted mt-4 max-w-2xl mx-auto">
              Have a question or want to collaborate? Feel free to reach out.
              I'm always open to discussing new projects and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <motion.div variants={containerVariants} className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.target}
                    rel={method.rel}
                    variants={itemVariants}
                    className="group p-6 bg-light-card dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon
                          size={24}
                          className="text-primary group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1 text-light-text dark:text-dark-text">
                          {method.label}
                        </h4>
                        <p className="text-light-muted dark:text-dark-muted text-sm">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={itemVariants}
              className="lg:col-span-2 bg-light-card dark:bg-dark-card p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary/30 transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-semibold mb-2 text-light-text dark:text-dark-text"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg border border-gray-200 dark:border-gray-800 focus:border-primary outline-none transition-colors text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold mb-2 text-light-text dark:text-dark-text"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg border border-gray-200 dark:border-gray-800 focus:border-primary outline-none transition-colors text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-semibold mb-2 text-light-text dark:text-dark-text"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg border border-gray-200 dark:border-gray-800 focus:border-primary outline-none transition-colors text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-2 text-light-text dark:text-dark-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-light-bg dark:bg-dark-bg border border-gray-200 dark:border-gray-800 focus:border-primary outline-none transition-colors resize-none text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted"
                    placeholder="Tell me more about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading || submitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg text-green-700 dark:text-green-400 text-center font-semibold"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
