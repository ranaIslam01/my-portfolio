import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0f172a",
          card: "#1e293b",
          text: "#f1f5f9",
          muted: "#94a3b8",
        },
        light: {
          bg: "#f8fafc",
          card: "#ffffff",
          text: "#0f172a",
          muted: "#64748b",
        },
        primary: "#3b82f6",
        secondary: "#8b5cf6",
        accent: "#ec4899",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        gradient: "gradient 3s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

module.exports = config;
