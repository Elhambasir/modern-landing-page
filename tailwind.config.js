/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px'
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
          quaternary: '#E7F1F2'
        },
        grey: '#e8f0f1'
      },
      fontFamily: {
        primary: 'Poppins'
      },
      boxShadow: {
        custom1: '0px 2px 4px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)'
      },
      backgroundImage: {
        services: 'url(../assets/img/services.jpg)',
        testimonials: 'url(../assets/images/testimonials-bg.png)',
        departments: 'url(../assets/images/departments-bg.png)',
        quoteLeft: 'url(../assets/img/double-quotes-l.png)',
        quoteRight: 'url(../assets/img/double-quotes-r.png)'
      },
    },
  },
  plugins: [],
}