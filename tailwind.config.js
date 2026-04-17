/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#10b981',
        'dark-green': '#047857',
      },
    },
  },
  plugins: [],
}
