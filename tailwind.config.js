const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { sans: ["DM Sans", ...defaultTheme.fontFamily.sans] },
    extend: {
      colors: {
        dark: "#121212",
        primary: "#e0ff00",
      },
    },
  },
  plugins: [],
};
