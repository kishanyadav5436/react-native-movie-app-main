/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
