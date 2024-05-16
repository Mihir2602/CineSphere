/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Inconsolata', 'monospace'],
        cursive: ['Dancing Script', 'cursive'],
        handwriting: ['Indie Flower', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        lora: ['lora', 'sans-serif'], 
        baskerville: ['Baskerville', 'serif'],
        calibri: ['Calibri', 'sans-serif'],
        cambria: ['Cambria', 'serif'],
        georgia: ['Georgia', 'serif'],
        lucidaGrande: ['Lucida Grande', 'sans-serif'],
        tahoma: ['Tahoma', 'sans-serif'],
        trebuchetMS: ['Trebuchet MS', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
        arialBlack: ['Arial Black', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        garamond: ['Garamond', 'serif'],
        palatino: ['Palatino', 'serif'],
        optima: ['Optima', 'sans-serif'],
        notoSans: ['Noto Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
        crimsonPro: ['Crimson Pro', 'serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
        lobster: ['Lobster', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [],
}

