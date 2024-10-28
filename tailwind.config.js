const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  
  theme: {
    extend: {
      animation: {
        'zoom-pulse': 'zoom-pulse 3s infinite',
      },
      keyframes: {
        'zoom-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      textIn: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      textIn: 'textIn 0.5s ease-out forwards',
    },
  },
  plugins: [flowbite.plugin(),],
}

