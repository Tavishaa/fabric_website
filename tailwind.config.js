export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {  
        'primary': '#13505B',
        'primary-light': '#119DA4',
        'primary-dark': '#0C7489',
        'secondary': '#D7D9CE',
        'secondary-light': '#E5E6E1',
        'accent': '#119DA4',
        'accent-light': '#14B3BB',
        'background': '#FFFFFF',
        'text': '#040404',
        'highlight': '#0C7489',
      },
      
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'primary': ['DM Sans', 'sans-serif'],
        'heading': ['Cormorant Garamond', 'serif'],
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 1000,
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.02em',
      }
    },
  },
  plugins: [],
}