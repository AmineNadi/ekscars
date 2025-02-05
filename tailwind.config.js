/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './index.html', 
    './**/*.php',
    './assets/**/*.{html,js,php}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        grandis: ['Grandis-rg', 'sans-serif'],
        'grandis-lg': ['Grandis-lg', 'sans-serif'],
        'grandis-md': ['Grandis-md', 'sans-serif'],
        'grandis-bold': ['Grandis-Bold', 'sans-serif'],
      },
      fontSize: {
        h1: ['41px', { lineHeight: '53.3px' }],
        'h1-md': ['36px', { lineHeight: '48.2px' }],
        'h1-sm': ['28px', { lineHeight: '42.2px' }],
        h2: ['42px', { lineHeight: '54.6px' }],
        'h2-md': ['36px', { lineHeight: '47.4px' }],
        'h2-sm': ['30px', { lineHeight: '41.6px' }],
      },
      colors: {
        primary: '#FF5F01',
        secondary: '#959595',
      },
      container: {
        center: true,
      },
      spacing: {
        '120': '120px',
        '70': '70px',
      },
      boxShadow: {
        'custom-light': '0px 1px 8px rgba(0, 0, 0, 0.16)',
      },
      
      
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}