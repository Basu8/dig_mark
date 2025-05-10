// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./app/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       transitionProperty: {
//         'height': 'height',
//         'spacing': 'margin, padding',
//         'transform-opacity': 'transform, opacity', // Added this line
//       },
//       animation: {
//         'fade-in': 'fadeIn 1s ease-in-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//       opacity: {
//         '90': '0.9',
//       },
//       maxHeight: {
//         'screen': '100vh',
//         'menu': 'calc(100vh - 4rem)',
//       },
//       scale: {
//         '95': '0.95', // Added this new scale value
//       }
//     },
//     screens: {
//       'sm': '640px',
//       'md': '768px',
//       'lg': '1024px',
//       'xl': '1280px',
//     }
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform-opacity': 'transform, opacity',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      opacity: {
        '90': '0.9',
      },
      maxHeight: {
        'screen': '100vh',
        'menu': 'calc(100vh - 4rem)',
      },
      scale: {
        '95': '0.95',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.06)',
      },
      fontSize: {
        'xxs': '0.65rem',
        'tiny': '0.75rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}
