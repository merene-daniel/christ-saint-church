import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: "#8B1A1A",
          dark: "#6B1111",
          light: "#A52020",
        },
        "church-blue": {
          DEFAULT: "#1E6CB8",
          dark: "#155A9E",
          light: "#2A7FCC",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
          pale: "#F5E8C0",
        },
        cream: "#FFFFFF",
        parchment: "#F5EDD8",
        "deep-blue": "#0D1B3E",
        "church-dark": "#0D1B3E",
        "text-warm": "#1B3A5C",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Noto Serif Ethiopic", "serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.15)" },
          "50%": { boxShadow: "0 0 80px rgba(201,168,76,0.7), 0 0 160px rgba(201,168,76,0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #071428 0%, #0D1B3E 40%, #155A9E 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C, #E8C97A)",
        "crimson-gradient": "linear-gradient(135deg, #8B1A1A, #6B1111)",
        "blue-gradient": "linear-gradient(135deg, #1E6CB8, #155A9E)",
      },
    },
  },
  plugins: [],
};

export default config;
