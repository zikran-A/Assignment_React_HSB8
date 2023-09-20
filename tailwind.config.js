/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#192690",
        secondaryBlue: "#3272BD",
        thirdBlue: "#89B1E6",
        cardShadow: "#292424",
        textColor: "#100F0F",
      },
    },
  },
  plugins: [],
};
