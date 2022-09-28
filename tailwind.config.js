module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        main: 'calc(100vh - 64px)'
      },
      height: {
        result: 'calc(100vh - 185px)'
      },
      fontSize: {
        smm: '0.6rem',
      }
    },
  },
  plugins: [],
}
