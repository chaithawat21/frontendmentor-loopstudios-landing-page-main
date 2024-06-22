/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        JosefinSans: ["Josefin Sans", "sans-serif"]
      },
      colors: {
        White: 'var(--White)',
        Black: 'var(--Black)',
        DarkGray: 'var(--DarkGray)',
        VeryDarkGray: 'var(--VeryDarkGray)',
      },
      backgroundImage: {
        'hero-desktop': "url('./src/assets/images/desktop/image-hero.jpg')",
        'hero-mobile': "url('./src/assets/images/mobile/image-hero.jpg')"

      },
      screens: {
        'sm': {'max':'375px'},

  
        'md': {'max':'768px'},

  
      }
    },
  },
  plugins: [],
}

