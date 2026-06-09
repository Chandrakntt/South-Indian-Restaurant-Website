import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',      // Brown (South Indian theme)
        secondary: '#D4A574',    // Light brown
        accent: '#FF6B35',       // Orange (spice theme)
        dark: '#2C1810',         // Dark brown
      },
      fontFamily: {
        sans: ['Segoe UI', 'Segoe UI Emoji', 'Segoe UI Symbol', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
