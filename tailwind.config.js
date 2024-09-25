/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'WorkSans': ['Work Sans','sans-serif']
      },
      colors:{
        'Primary':'#2B2B2B',
        'Button':'#A259FF',
      },
      backgroundImage:{
        'Nft':'url(assets/images/NFT.png)'
      }
    },
  },
  plugins: [],
}