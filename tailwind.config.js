/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '48.75rem',
      },
      weight: {
        '96': '31.25rem',
      },
      backgroundImage: {
        'my-img': "url('src/assets/background.png')",
      },
      colors: {
        'primary': '#647233',
        'secondary': '#B0D52B',
      },
      fontFamily: {
        'sans': ['Manrope', 'sans-serif', ]
      },
      fontSize: {
        'lg': '1.25rem',
        'xl': '5.625rem',
        '2xl': '1.5rem',

      },
    },
  },
  plugins: [],
}