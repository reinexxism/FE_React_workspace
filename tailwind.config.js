/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "extreme-dark-black": "#1f1f1f",
        "dark-black": "#000000",
        "main-black": "#252525",
        "light-black": "#2d2d2d",
        "extreme-light-black": "#333333",
        "extreme-light-light-black": "#3c3c3c",
        "text-white": "#d5d5d5",
        "dark-green": "#506651",
        "main-green": "#7e987d",
        "light-green": "#778974",
        "pale-red": "#ac6363",
        "pale-yellow": "#d5ce81",
        "pale-green": "#6ca46e",
      },
    },
  },
  plugins: [],
};
