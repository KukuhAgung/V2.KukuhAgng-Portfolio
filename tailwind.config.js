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
      backgroundColors: {
        box1: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
      backgroundImage: {
        cursor: "url('/image/cursor.svg')",
      },
    },
  },
  plugins: [],
};
