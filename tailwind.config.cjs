/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "2000px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Playfair Display", 'serif'],
    },
    extend: {
      colors: {
        green: {
          lightest: "#cbd3bd",
          light: "#a3b18a",
          DEFAULT: "#283618"
        },
        offWhite: {
          DEFAULT: "#f5ebe0",
        },
        peach: {
          DEFAULT: "#e5989b",
        }
      },
      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
}
