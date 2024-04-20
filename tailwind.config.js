/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sukhumvit: ['"Sukhumvit set"'],
      },
      colors: {
        'greenapp': '#9CB97B',
        'green1':'#8FA477',
        'greenbg':'#F8FBF4',
        'grey1':'#939393',
        'lightgrey': '#F7F5F5'

      },
      fontSize: {
        sm: ['8px', '12px'],
        base: ['12px', '14px'],
        lg: ['14px', '16px'],
        l:['16px', '18px'],
        xl: ['22px', '30px'],
        xxl: ['30px', '38px'],
        xxxl: ['48px', '56px'],
      }
    },
  },
  plugins: [],
};