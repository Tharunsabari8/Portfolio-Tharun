/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Quattrocento', 'serif'],
      },
      colors: {
        primary: {
          50: '#f6f8fd',
          100: '#f1f4f9',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};