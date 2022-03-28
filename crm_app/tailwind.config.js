module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#DA0037',
        secondary:'#1B262C',
        click:'#0F4C75',
      },
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
        heading:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}