/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6FB1FF',      // Bleu Glacier
        secondary: '#0F2B46',     // Bleu Nuit Oisans
        accent: '#22c55e',       // Vert Vif (au lieu de Vert Sapin)
        neutralLight: '#F7FAFC',  // Blanc Neige
        neutralDark: '#2D3748',   // Gris Pierre
        highlight: '#A3D4FF',     // Bleu Brume
        warning: '#FFB347',       // Orange Énergie
        white: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}