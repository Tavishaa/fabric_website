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
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #13505B, #119DA4)',
        'gradient-primary-vertical': 'linear-gradient(to bottom, #13505B, #119DA4)',
        'gradient-accent': 'linear-gradient(to right, #119DA4, #14B3BB)',
        'gradient-dark': 'linear-gradient(to right, #0C7489, #13505B)',
        'gradient-light': 'linear-gradient(to right, #D7D9CE, #FFFFFF)',
        'gradient-teal-deep': 'linear-gradient(135deg, #13505B, #119DA4, #0C7489)',
        'gradient-ocean': 'linear-gradient(to right bottom, #13505B, #119DA4, #D7D9CE)',
        'gradient-fade': 'linear-gradient(to right, rgba(19, 80, 91, 0.9), rgba(17, 157, 164, 0.9))',
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