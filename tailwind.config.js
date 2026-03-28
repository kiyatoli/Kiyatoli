/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7fb",
          100: "#e9ecf5",
          200: "#cfd6ea",
          300: "#a9b4d4",
          400: "#7c8bbb",
          500: "#58679f",
          600: "#435083",
          700: "#364067",
          800: "#2b334f",
          900: "#1e2337"
        },
        accent: {
          400: "#33c3f0",
          500: "#1ea4d8",
          600: "#0f86b5"
        },
        ember: {
          400: "#ffb347",
          500: "#ff9f1c",
          600: "#f27d00"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["Manrope", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 12px 40px -20px rgba(30, 35, 55, 0.35)",
        glow: "0 0 0 1px rgba(51, 195, 240, 0.25), 0 18px 50px -30px rgba(51, 195, 240, 0.65)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
