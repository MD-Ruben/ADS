module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md}'], // Just use `content`, no need for `purge`
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'heading': ['Fira Sans Condensed', 'serif'],
        'sans': ['Overpass', 'sans-serif'],
      },
      fontWeight: {
        '700': '700', // Custom font weight definition (optional)
      },
      colors: {
        adsblue:'#165ee7',
      },
    },
  },

  variants: {},
  plugins: [
    require('@tailwindcss/typography'), // Include typography plugin
  ],
};
