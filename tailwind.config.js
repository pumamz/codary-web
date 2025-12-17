/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        codary: {
          red: '#E63946', // Vibrant corporate red
          black: '#1D1D1D',
          gray: '#F3F4F6',
          dark: '#121212', // Darker background for dark mode
          darker: '#0A0A0A',
        },
        pastel: {
          mint: '#A7F3D0',
          blue: '#BFDBFE',
          lavender: '#E9D5FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite', // Slower speed (was 25s)
        marquee2: 'marquee2 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
