/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'accent': '#BF6330',
      'light': '#F6F8FA',
      'dark': '#121212',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        Primary: ["Mina", "sans-serif"],
        Secondary: ["DM Sans", "sans-serif"]
       },
    },
    
  },
  plugins: [],
}