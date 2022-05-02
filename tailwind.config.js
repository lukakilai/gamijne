module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nusx: ["BPG Algeti Compact", "sans-serif"],
        caps: ["ArchyEDT-Bold", "sans-serif"],
      },
      colors: {
        fb: "#3A5996",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
