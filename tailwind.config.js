/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#282c34",
        secondary: "#333840",
        tertiary: "#212429",
        quaternary: "#000000",
        quinary: "#000000",
        senary: "#000000",
        septenary: "#000000",
        octonary: "#000000",
        nonary: "#000000",
        denary: "#000000",
        undecary: "#000000",
        duodecary: "#000000",
        tredecary: "#000000",
        quattuordecary: "#000000",
        quindecary: "#000000",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Ejemplo de fuentes personalizadas
      },
    }
  },
  plugins: [],
}

