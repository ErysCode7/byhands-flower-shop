/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        laptop: "992px",
        // => @media (min-width: 992px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1800px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        main: "#333",
        secondary: "#6B7280",
        "light-gray": "#F3F4F6",
      },
    },
  },
  plugins: [],
};
