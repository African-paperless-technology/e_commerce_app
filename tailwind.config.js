/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        100: "25rem", // 100
        110: "27.5rem",
        120: "30rem",
        150: "37.5rem", // 150
        180: "45rem",
        200: "50rem", // 200
        220: "55rem",
        240: "60rem",
      },
    },
  },
  plugins: [],
};
