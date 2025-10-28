import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A7D7F",
        secondary: "#1A2F4F",
        accent: "#FF6B35",
      },
    },
  },
  plugins: [],
} satisfies Config;
