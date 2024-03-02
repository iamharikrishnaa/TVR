/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'space-grotesk': ['Space Grotesk'],
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#2F6C6D",
        Velvet:"#4D0C44",
        Svelvet:"#940057",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gold: "#CCA000",
        grey:"#94a3b8"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}