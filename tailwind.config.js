/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#232222",
        primary: "#e5e5e5",
        second: "#444547",
        toggle: "#292D32",
        stroke: "#3D3D3D",
        grad1: "rgba(56,56,56,1) 30%",
        grad2: "rgba(56,56,56,1) 41%",
      },
      backgroundImage: {
        cursor: "url('/image/cursor.svg')",
        bgimg: "url('../image/bg.png')"
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
