/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {fontFamily:{
      body:['Merriweather',"serif"]
    },
    backgroundImage:{
      'background': "url('/images/bg.png')",
    }
  },
  },
  plugins: [],
}
