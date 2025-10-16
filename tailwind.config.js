/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        comicYellow: '#FFD93D',
        comicOrange: '#FF8C00',
        comicRed: '#E63946',
        comicBlue: '#0077B6',
        comicWhite: '#FFF8E6',
        comicBlack: '#111111',
      },
      boxShadow: {
        comic: '4px 4px 0px #000',
      },
      dropShadow: {
        comic: '3px 3px 0px #000',
      },
      backgroundImage: {
        'halftone-yellow': 'radial-gradient(#000 1px, transparent 1px)',
        'comic-burst': "url('/comic-burst.svg')",
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        pop: 'pop 0.4s ease-in-out',
        float: 'float 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
}
