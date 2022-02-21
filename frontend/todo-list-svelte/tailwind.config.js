const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
    ],
    enabled: production, // disable purge in dev
  },
}
