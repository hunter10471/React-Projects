module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FCF2C3',
        secondary:'#7171EB',
        tertiary:'#1A1D1D',
        button:'#2C2D9E',
        clicked:'#EBD471',
        background:'#000103',
      },
      fontFamily:{
        sans:['Source Sans Pro', 'sans-serif'],
        heading:['Barlow', 'sans-serif'],
        central:['Russo One', 'sans-serif']
      },

    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
