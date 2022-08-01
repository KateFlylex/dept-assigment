/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      "2xl": '1140px',
    },
    extend: {
      height: {
        '568': '568px',
        '484': '484px',
      },
      maxHeight: {
        '568': '568px',
      },
      colors: {
        'dept-grey': '#121212'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
