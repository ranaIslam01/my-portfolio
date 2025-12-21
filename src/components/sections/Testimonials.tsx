"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * Testimonials Section Component
 * Client testimonials and reviews
 */
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStartup Inc",
      image: "https://via.placeholder.com/64x64?text=SJ",
      quote:
        "Working with this developer was exceptional. They delivered a high-quality product ahead of schedule and were great to communicate with throughout the project.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "Digital Solutions Co",
      image: "https://via.placeholder.com/64x64?text=MC",
      quote:
        "Incredibly talented developer with a keen eye for detail. The code quality is excellent, and they always go the extra mile to ensure client satisfaction.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Watson",
      role: "Design Lead",
      company: "Creative Agency",
      image: "https://via.placeholder.com/64x64?text=EW",
      quote:
        "Great to collaborate with! They have strong technical skills and understand design principles well. Always willing to iterate and improve the product.",
      rating: 5,
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
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What People Say
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-light-muted dark:text-dark-muted mt-4 max-w-2xl mx-auto">
              Don't just take my word for it – here's what clients and
              colleagues have to say about working with me.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-light-card dark:bg-dark-card p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-light-muted dark:text-dark-muted mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-light-muted dark:text-dark-muted">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
