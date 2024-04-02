/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      md: "1440px",
    },
    colors: {
      primary: "#003459",
      secondary: "#FCEED5",
      black: "#000000",
      neutral_100: "#00171F",
      neutral_60: "#667479",
      neutral_80: "#242B33",
      white: "#FFFFFF",
      blue: "#00A7E7",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
