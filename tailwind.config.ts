import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
export default config;
