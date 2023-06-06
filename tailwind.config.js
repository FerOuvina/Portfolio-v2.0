/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      aquaGreen: '#CFDACC',
      aquaBlue: '#749FA8',
      darkBrown: '#483E49',
      brown: '#8B575B',
      pink: '#E8BDC4',
      white: '#F2EAE7',
      black: '#0F0F0F',
    },
    plugins: [],
  },
};
