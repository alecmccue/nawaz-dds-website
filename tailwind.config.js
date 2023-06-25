/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'turquoise': '#015D67',
      'dark-cyan': '#00ACB1',
      'light-aqua':  "#87E4DB",
      'tea-green': '#CAF0C1',
      'greyser': '#D5E4E6',
      'light-grey': '#EBF2F3',
      'azure': '#FAFCFC',
      'white': '#FEFEFE',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
