/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './details.html',
    './vehicles.html',
    './src/**/*.{js,ts,jsx,tsx,html}', // Adjust according to your project structure
  ],
  theme: {
    extend: {
      
      spacing: {
        '120': '120px',
        '70': '70px',
      },
      
    },
    fontFamily: {
        'grandis': ['Grandis-rg', 'sans-serif'],
        'grandis-lg': ['Grandis-lg', 'sans-serif'],
        'grandis-md': ['Grandis-md', 'sans-serif'],
        'grandis-bold': ['Grandis-Bold', 'sans-serif'],
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: '25px',
          xs: '25px' , 
          sm: '40px',   
          lg: '60px',
          xl: '104px',
        },
        screens : {
        },
        
      },
      screens: {
        xs: '360px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
       
      },
      colors: {
        'orange': {
          500:'#FF5F01',
        },
        'gray': {
          500:'#959595',
        },
        black:'#000',
        white:'#fff',
        transparent: 'transparent',
      },
  },
  plugins: [
  ],
}