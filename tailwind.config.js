/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        "orange": '#EC6933',
        'body-background': '#1E2629',
        'comBg': '#5A6171',
        "search-bar-color": "#2C353E",
        "sidebar-box": "#262D35",
        "search-bar-text-color": "#717986",
        "date": "#6995D2",
        "month": "#E3EBED",
        "month-bg": "#2C3638",
        
      }
    },
  },
  plugins: [],
}

