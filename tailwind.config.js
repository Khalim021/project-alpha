/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      girloy: ['gilroy'],
      girloybold: ['gilroy-bold']

    },
    colors: {
      'purple': '#685ED6',
      'white': '#fff',
      'white-light': '#F1E4FF',
      'light-black': '#1D2530',
      'bg-light': '#F2F7FF80',
      'card-bg': '#685ED60D',
      'white-bg': '#FCFEFF',
      'black': '#18191F' ,
      'light-balck': '#1D2530' ,
      'twhite': '#F4F5F7'
    },
    extend: {
      borderRadius: {
        '6': '6px',
      },

      boxShadow: {
        'card': '0px 10px 20px 0px #00000012'
      },

      spacing: {
        '72': '72px',
        '224': '224px',
        '350': '350px',
        '390': '390px',
        '70': '70px',
        '84': '84px' ,
        '400': '400px' ,
        '420': '420px' ,
        '288': '288px'
      },

      fontSize: {
        '15': '12px' ,
      }
    },
  },
  plugins: [],
}
