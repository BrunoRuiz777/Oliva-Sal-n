/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple-light': '#f7f3f9', // Un fondo blanco/lila súper suavecito y elegante
        'brand-magenta': '#861c71',      // El color exacto de la corona de tu logo
        'brand-dark': '#241f26',         // Un gris carbón muy oscuro para que los textos resalten
        'brand-gold': '#c19c5c',         // Mantenemos el dorado para detalles pequeños
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}