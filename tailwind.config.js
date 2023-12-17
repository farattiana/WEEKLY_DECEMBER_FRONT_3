export default {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'black' : '#000000',
        'gray' : '#4d4d4d',
        'blue' : '#8adc8',
        'champagne' : '#f7ede8',
        'red' : '#cd4631',
        'white' : '#edf3f7'
      },
      fontFamily: {
        montserrat:['MontserratAlternate', 'sans-serif'],
        bold : ['Bold','sans-serif']
      },
      boxShadow: {
        'md': '6px 6px 0px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}