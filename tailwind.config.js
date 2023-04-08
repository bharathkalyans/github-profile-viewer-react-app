/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ys,tsx}"],
  theme: {
    fontSize: {
      xl: "2rem",
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
