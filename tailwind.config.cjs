/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'space-grotesk': ['Space Grotesk'],
      'f37': ['F37 Grotesc'],
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        bgrey: "#D3D3D3",
        Velvet:"#4D0C44",
        Svelvet:"#940057",
        Solitude: "#e9e9ea",
        gold: "#CCA000",
        grey:"#C1C9D1"
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