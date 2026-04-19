import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        surface: "#FFFFFF",
        ink: "#1A1A1A",
        taupe: "#6B6256",
        champagne: "#8B6F47",
        hairline: "#E8E1D5",
        chip: "#F5EFE5",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "920px",
        grid: "1120px",
        page: "1280px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 500ms ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
