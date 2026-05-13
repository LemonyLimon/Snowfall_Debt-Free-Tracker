/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488", // Teal
        secondary: "#06B6D4", // Sky Blue
        accent: "#A5B4FC", // Lavender
        snowWhite: "#F3FAFA", // Soft Mist White
      },
    },
  },
  plugins: [],
};
