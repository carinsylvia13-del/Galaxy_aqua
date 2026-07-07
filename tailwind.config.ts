import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aqua: {
          deep: "#075E68",
          blue: "#2D9CDB",
          leaf: "#6BAA75",
          mist: "#F7FAF8",
          ink: "#182326",
          line: "#DDE8E4"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(24, 35, 38, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
