/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "576px", // Small devices (landscape phones, 576px and up)
        md: "768px", // Medium devices (tablets, 768px and up)
        lg: "992px", // Large devices (desktops, 992px and up)
        xl: "1200px", // Extra large devices (large desktops, 1200px and up)
        "2xl": "1400px", // Extra extra large devices (larger desktops, 1400px and up)
        "3xl": "1900px",
      },
      backgroundColor: {
        search: "#3c86f1",
      },
    },
  },
  plugins: [],
};
