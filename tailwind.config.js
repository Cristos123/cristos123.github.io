module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xsm: "320px",
      },
      width: {
        w74: "300",
      },
      colors: {
        green: {
          mainColor: "#606b56",
          secondaryColor: "#515a48",

          borderColor: "#161914",

          mainText: "#fff",
          secondaryText: "#eeeeee",

          themeDotBorder: "#fff",

          previewBg: "rgb(81, 90, 72, 0.8)",
          previewShadow: "#2a2f25",

          buttonColor: "#669966",
        },
        blue: {
          mainColor: "#15202b",
          secondaryColor: "#192734",

          borderColor: "#164d56",

          mainText: "#fff",
          secondaryText: "#eeeeee",

          themeDotBorder: "#fff",

          previewBg: "rgb(25, 39, 52, 0.8)",
          previewShadow: "#111921",

          buttonColor: "#17a2b8",
        },
        purple: {
          mainColor: "#46344e",
          secondaryColor: "#382a3f",

          borderColor: "#1d1520",

          mainText: "#fff",
          secondaryText: "#eeeeee",

          themeDotBorder: "#fff",

          previewBg: "rgb(29, 21, 32, 0.8)",
          previewShadow: "#2b202f",

          buttonColor: "#8534a3",
        },
        defaultTheme: {
          mainColor: "#eaeaea",
          secondaryColor: "#fff",

          borderColor: "#c1c1c1",

          mainText: "black",
          secondaryText: "#4b5156",

          themeDotBorder: "#24292e",

          previewBg: "rgb(251, 249, 243, 0.8)",
          previewShadow: "#f0ead6",

          buttonColor: "black",
        },

        mainColor: "var(--mainColor) ",
        secondaryColor: "var(--secondaryColor) ",
        borderColor: "var(--borderColor) ",
        mainText: "var(--mainText) ",
        secondaryText: "var(--secondaryText) ",
        themeDotBorder: "var(--themeDotBorder) ",
        previewBg: "var(--previewBg) ",
        previewShadow: "var(--previewShadow) ",
        buttonColor: "var(--buttonColor) ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
