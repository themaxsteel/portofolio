/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bali-gold': '#D4AF37',       // Metallic Gold
        'bali-brick': '#B35A2B',      // Terracotta
        'bali-nature': '#2E5D4B',     // Deep Green
        'bali-sand': '#F5E6CA',       // Light Sand/Off-white
        'poleng-black': '#1a1a1a',    // Deep charcoal/black
        'poleng-white': '#f0f0f0',    // Soft white
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'poleng-pattern': "repeating-linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 75%, #1a1a1a 75%, #1a1a1a), repeating-linear-gradient(45deg, #1a1a1a 25%, #f0f0f0 25%, #f0f0f0 75%, #1a1a1a 75%, #1a1a1a)",
      }
    },
  },
  plugins: [],
}
