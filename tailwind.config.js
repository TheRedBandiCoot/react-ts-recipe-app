/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        mountAnimation: {
          from: { width: '40rem', height: '20rem', opacity: '0' },
          to: { width: '50rem', height: '30rem', opacity: '1' },
        },
        unmountAnimation: {
          from: { width: '50rem', height: '30rem', opacity: '1' },
          to: { width: '40rem', height: '20rem', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
