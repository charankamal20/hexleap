import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        tada: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9) rotate(-3deg)",
          },
          "20%": {
            transform: "scale(0.9) rotate(-3deg)",
          },
          "30%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "40%": {
            transform: "scale(1.1) rotate(-3deg)",
          },
          "50%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "60%": {
            transform: "scale(1.1) rotate(-3deg)",
          },
          "70%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "80%": {
            transform: "scale(1.1) rotate(-3deg)",
          },
          "90%": {
            transform: "scale(1.1) rotate(3deg)",
          },
          "100%": {
            transform: "scale(1) rotate(0)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        tada: "tada 1s ease-in-out",
        float: "float infinite ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        "background-dark": "#292b32",
        "background-dark-secondary": "#3b3e47",
        "dark-accent": "#292b32",
        "dark-gradient-top": "#18282a",
        "dark-gradient-bottom": "#221b2c",
        "purple-line": "#738FFF",
        "light-blue": "#2c9cf0",
        background: "#f7f7f8",
        "background-secondary": "#ffffff",
        accent: "#f7f7f8",
        "gradient-top": "#f9f8ff",
        "gradient-bottom": "#f3f9ff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config