/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          beige: '#f5f4f0',
          dark: '#1a1a1a',
          muted: '#6b6b6b'
        }
      }
    },
  },
  plugins: [],
}
