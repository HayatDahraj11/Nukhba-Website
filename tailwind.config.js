/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nukhba-orange': '#ff6b00',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}