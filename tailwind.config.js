const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class', // or 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Optional: Define palette colors here if you want custom names
      // colors: {
      //   'primary': {
      //     light: '#2563EB', // blue-600
      //     dark: '#3B82F6' // blue-500
      //   },
      //   // ... other custom colors
      // }
    },
  },
  plugins: [],
}