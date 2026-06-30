/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Photrail brand — derived directly from the app's SwiftUI palette.
        ink: {
          // Deep indigo "tile" gradient used by the app icon / brand badge.
          900: '#0b0e1f',
          800: '#12173d', // LogoBadge top
          700: '#1c1f4a',
          600: '#38216b', // LogoBadge bottom
        },
        brand: {
          // Accent indigo → violet used throughout the app.
          50: '#eef0ff',
          100: '#e0e2ff',
          200: '#c4c7ff',
          300: '#a3a6ff',
          400: '#7d7bf5',
          500: '#4f45e6', // primary accent (rgb 0.31, 0.27, 0.9)
          600: '#4338ca',
          700: '#372fa6',
        },
        violet2: {
          400: '#a366e6',
          500: '#8c4dd9', // secondary accent (rgb 0.55, 0.3, 0.85)
          600: '#6d35b3',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Inter',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        rounded: [
          'SF Pro Rounded',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(79, 69, 230, 0.55)',
        card: '0 20px 60px -25px rgba(8, 10, 30, 0.45)',
        phone: '0 50px 120px -30px rgba(8, 10, 30, 0.65)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-pan': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-4%, 3%) scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 7s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 18s ease-in-out infinite',
        shimmer: 'shimmer 2.2s linear infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
