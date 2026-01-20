"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Scroll to Top Component
 * Floating button that appears when scrolling down
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 group"
          aria-label="Scroll to top"
          title="Back to top"
        >
          {/* Glow effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(59, 130, 246, 0.8)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
          ></motion.div>

          {/* Icon */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative z-10"
          >
            <ArrowUp
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </motion.div>

          {/* Hover effect background */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
          ></motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
