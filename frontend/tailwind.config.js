/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1ABC9C',
        'secondary-color': '#16A085',
        'accent-color': '#F39C12',
        'text-color': '#2C3E50',
        'background-color': '#ECF0F1',
        'dark-background-color': '#2C3E50',
        'dark-text-color': '#ECF0F1',
      },
    },
  },
  plugins: [],
}

