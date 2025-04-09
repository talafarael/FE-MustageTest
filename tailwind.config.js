/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-lg": { max: "850px" },
      },
      colors: {
        mainBlue: "#203C8F",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
