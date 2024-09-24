/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    color: {
      "primary": "#F5F5F5",
      secondaryButton: {
        100: "#FF6600",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      logo: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
