/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg': "#232222",
        'primary': "#e5e5e5",
        'second': "#444547",
        'toggle': "#292D32",
        'stroke': "#3D3D3D",
      },
      backgroundImage: {
        'cursor': "url('/image/cursor.svg')",
      }
    },
  },
  plugins: [],
};
