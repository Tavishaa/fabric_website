export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {  
        'primary': '#284B63',
        'primary-light': '#3A617D',
        'primary-dark': '#1A3344',
        'secondary': '#eaf2f7',
        'secondary-light': '#eaf2f7',
        'accent': '#A8DADC',
        'background': '#eaf2f7',
        'text': '#284B63',
        'text-light': '#3A617D',
        'text-secondary': '#90e0ef',
        'highlight': '#00b4d8',
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
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #284B63, #3A617D)',
        'gradient-light': 'linear-gradient(to right, #F8F9FA, #FFFFFF)',
      }
    },
  },
  plugins: [],
}