/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'custom-1': '620px',
        'custom-2': '900px',
        'custom-3': '1180px',
        'custom-4': '1460px',
        'custom-5': '1740px',
        'custom-6': '2020px',
        'custom-7': '2300px'
      },
      colors:{
        customColors:{
          primary: '#AD8B73',
          accent: '#FFFBE9',
          secondary: '#CEAB93',
          complementary: '#E3CAA5',
          chatImageBg: '#5b332b',
          homeImageBg: '#e5c8a0'
        }
      }
    },
  },
  plugins: [],
}