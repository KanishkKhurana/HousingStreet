/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ownerBg': 'url("/images/owner.png")',
        'heroBg': 'url("/images/hero.png")',
        'hero2Bg': 'url("/images/hero2.png")',
        'hero3Bg': 'url("/images/hero3.png")',
        'hero4Bg': 'url("/images/hero4.png")',
        'areasBg': 'url("/images/areas.png")',
      },
    },
    fontFamily:{
      primary:['Archivo', "sans-serif"],
      secondary:['Lalezar', "cursive"]
    }
  },
  plugins: [],
}
