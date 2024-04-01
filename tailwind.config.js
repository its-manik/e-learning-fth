/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: "1rem",
      // default breakpoints but with 40px removed
      //
      // notice how the color changes at 768px but
      // the container size changes at 728px
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1040px",
        "2xl": "1196px",
      },
    },
  },
  plugins: [],
};
