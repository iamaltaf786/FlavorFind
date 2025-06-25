/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#FFA500",
        customErrorColor: "rgba(175, 255, 181, 0.81)",
        customInputBg: "#e7e7e7",
      },
      boxShadow: {
        customRed: "#f0ca62 0px 0px 0px 3px", // Adding the custom shadow
      },
      fontFamily: {
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
// box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;