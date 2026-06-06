/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            900: '#0a1f13',
            800: '#0d2b1a',
            700: '#134023',
            600: '#1a5c30',
            500: '#1e6b38',
          },
          gold: {
            500: '#c9952a',
            400: '#d4a843',
            300: '#e2c06a',
            200: '#f0d898',
          },
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-2xl': 'clamp(2rem, 5vw, 3rem)',
        'fluid-3xl': 'clamp(2.5rem, 7vw, 4.5rem)',
        'fluid-4xl': 'clamp(3rem, 9vw, 6rem)',
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'ticker-left': 'tickerLeft 30s linear infinite',
        'ticker-right': 'tickerRight 30s linear infinite',
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
      },
    },
  },
  plugins: [],
};
