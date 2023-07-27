/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      text: ["Roboto Condensed", "ui-sans-serif"],
    },
    extend: {
      boxShadow: {
        header:
          "rgba(0, 0, 0, 0.5) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 7px 13px -3px, rgba(0, 0, 0, 0.3) 0px -3px 0px inset",
        project:
          "rgba(15, 15, 15, 0.5) 5px 5px 4px, rgba(0, 0, 0, 0.4) 10px 7px 13px -3px, rgba(0, 0, 0, 0.3) 0px -3px 0px inset",
      },
    },
  },
  plugins: [],
};
