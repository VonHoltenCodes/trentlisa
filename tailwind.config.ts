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
        'mountain-blue': '#5B7C99',
        'forest-green': '#4A6741',
        'lake-blue': '#7CA3CC',
        'snow-white': '#FFFFFF',
        'rock-gray': '#8B8680',
        'warm-beige': '#F5E6D3',
        'deep-navy': '#2C3E50',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config