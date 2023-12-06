/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          white: "#F1F1F1",
          black: "#011627",
          primary: "#B2DDF7",
          secondary: "#6D98BA",
          tertiary: "#386641",
        },
      },
    },
  },
  plugins: [],
};
