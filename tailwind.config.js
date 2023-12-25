/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {

        // lightMode
        'primaryColor': '#60A5FA',
        'whiteColor': '#fff',
        'blackColor': "#000",

        // darkmode

      }

    },
  },
  plugins: [],
}

