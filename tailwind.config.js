/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'white': 'hsl(0, 0%, 100%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        'orange': 'hsl(25, 97%, 53%)',
        'dark-blue-bg':'hsl(213, 19%, 20%)',


      }
    },
  },
  plugins: [],
}

