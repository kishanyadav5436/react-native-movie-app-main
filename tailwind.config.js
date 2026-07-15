/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "System"],
        display: ["Inter", "System"],
      },
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C7FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
          300: "#1A1730",
        },
        accent: "#AB8BFF",
        "accent-light": "#C4ABFF",
        "accent-dark": "#7B5FD4",
        gold: "#FFD700",
        "gold-dark": "#B8960F",
        "rating-green": "#4CAF50",
        "rating-yellow": "#FFC107",
        "rating-red": "#F44336",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      fontSize: {
        hero: ["32px", { lineHeight: "40px", fontWeight: "800" }],
        "section-title": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        caption: ["11px", { lineHeight: "14px", fontWeight: "500" }],
      },
      spacing: {
        13: "52px",
        15: "60px",
        18: "72px",
        22: "88px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(171, 139, 255, 0.3)",
        "glow-sm": "0 0 10px rgba(171, 139, 255, 0.2)",
        "glow-gold": "0 0 15px rgba(255, 215, 0, 0.25)",
        card: "0 4px 12px rgba(0, 0, 0, 0.4)",
        "card-lg": "0 8px 24px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
