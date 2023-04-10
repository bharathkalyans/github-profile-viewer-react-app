/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ys,tsx}"],
  theme: {
    fontSize: {},
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
