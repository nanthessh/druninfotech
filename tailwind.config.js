/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        brand: {
          DEFAULT: '#38BDF8',
          dark:    '#0EA5E9',
          mid:     '#7DD3FC',
          light:   '#BAE6FD',
          pale:    '#F0F9FF',
        },
        dark: {
          DEFAULT: '#0D0D1A',
          card:    '#13131F',
          card2:   '#1A1A2E',
          border:  '#252540',
        },
        light: {
          DEFAULT: '#F8F9FF',
          card:    '#FFFFFF',
          card2:   '#F0F2FF',
          border:  '#E2E5F0',
          text:    '#0D0D1A',
          muted:   '#6B7280',
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'slide-in':   'slideIn 0.3s ease forwards',
        'shimmer':    'shimmer 2.5s linear infinite',
        'spin-slow':  'spin 8s linear infinite',
        'blob':       'blob 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:  { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        slideIn: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(0)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        blob:    { '0%,100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }, '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' } },
      },
    },
  },
  plugins: [],
}
