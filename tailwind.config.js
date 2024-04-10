/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        'grey1':'#939393'
      },
      fontSize: {
        sm: ['9px', '12px'],
        base: ['16px', '24px'],
        lg: ['14px', '18px'],
        xl: ['22px', '28px'],
        xxl: ['30px', '38px'],
        xxxl: ['48px', '56px'],
      }
    },
  },
  plugins: [],
};
