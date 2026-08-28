import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f7f3eb',
        parchment: '#eee5d7',
        champagne: '#d8bd8b',
        gold: '#91652c',
        espresso: '#2d241f',
        ink: '#463a32',
        linen: '#fbf8f2',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 30px 80px rgba(56, 43, 31, 0.16)',
        float: '0 16px 45px rgba(45, 36, 31, 0.22)',
      },
      letterSpacing: {
        luxury: '0.28em',
      },
    },
  },
  plugins: [],
} satisfies Config
