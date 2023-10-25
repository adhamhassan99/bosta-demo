/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linkItemColor: "#4f5665",
        brandRed: "#e30613",
        brandBlack: "##111619",
      },
    },
  },
  plugins: [],
};
