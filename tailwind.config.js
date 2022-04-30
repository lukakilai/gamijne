module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        input: ["ALK Tommaso", "sans-serif"],
        gen: ["ALK Life", "sans-serif"],
      },
      fontSize: {
        gen: "24px",
      },
      colors: {
        fb: "#3A5996",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
