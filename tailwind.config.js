/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FFA500",
      },
      boxShadow: {
        customRed: "0 3px 3px 3px #F22020", // Adding the custom shadow
      },
    },
  },
  plugins: [],
};
