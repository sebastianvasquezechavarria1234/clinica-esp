/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clinic-green': '#00d084',
        'clinic-blue': '#52C1DB',
        'clinic-rose': '#E894AD',
        'clinic-yellow': '#EDB801',
        'clinic-purple': '#9b51e0',
      }
    },
  },
  plugins: [],
}
