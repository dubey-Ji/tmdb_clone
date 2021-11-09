module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      primary: "rgba(3,35,67)",
      secondary: "#ffed4a",
      danger: "#e3342f",
      tmdbLightGreen: "rgb(30,213,169)",
      tmdbLightBlue: "rgb(1,180,228)",
      black: "#000",
    }),
    fontFamily: {
      display: ["Source Sans Pro", "Arial", "sans-serif"],
    },
    gradientColorStops: {
      tmdbLightGreen: "rgb(30,213,169)",
      tmdbLightBlue: "rgb(1,180,228)",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
