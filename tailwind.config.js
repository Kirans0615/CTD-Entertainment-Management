/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E4C76B',
        'gold-dark': '#9B7B2A',
        warm: '#D4722A',
        'ctd-black': '#080808',
        'ctd-dark': '#0D0D0D',
        'ctd-card': '#111111',
        'ctd-border': 'rgba(201,168,76,0.15)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #D4722A 100%)',
        'gold-shine': 'linear-gradient(135deg, #E4C76B 0%, #C9A84C 50%, #9B7B2A 100%)',
      },
    },
  },
  plugins: [],
}
