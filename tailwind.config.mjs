/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          'green-900': '#0a1f13',
          'green-800': '#0d2b1a',
          'green-700': '#134023',
          'gold-300': '#e2c06a',
          'gold-400': '#d4a843',
          'gold-500': '#c9952a',
        }
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      animation: {
        'ticker-left': 'tickerLeft 30s linear infinite',
        'ticker-right': 'tickerRight 30s linear infinite',
        'ping-gold': 'pingGold 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        tickerLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pingGold: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9952a, #e2c06a, #c9952a)',
        'hero-radial': 'radial-gradient(ellipse at 70% 50%, #134023 0%, #0d2b1a 40%, #0a1f13 100%)',
      }
    },
  },
  plugins: [],
}