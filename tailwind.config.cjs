/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',     
        hoverwhite: 'hsl(12, 88%, 69%)',     
      },
      fontFamily: {
        body: ['Be Vietnam Pro'],
      },
      screens: {
        sm:'480px',
      },
      backgroundImage: {
        'banner-mobile': "url('/images/bg-simplify-section-mobile.svg')",
        'banner-desktop': "url('/images/bg-simplify-section-desktop.svg')",
    },
  },
  plugins: [],
}
}