module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
    '3xl': {'max': '21250px'},
       // => @media (max-width: 1535px) { ... } 
      
    '2xl': {'max': '1640px'},
      // => @media (max-width: 1535px) { ... } 

    'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

    'lg': {'max': '1000px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'max': '768px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '640px'},
    // => @media (max-width: 639px) { ... }

    'xs': {'max': '430px'},
    // => @media (max-width: 639px) { ... }
    },
  }
}