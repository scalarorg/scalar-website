const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: "#FFFFFF",
          100: "#F3F3F3",
          200: "#EDEEF2",
          400: "#BBBBCC",
          500: "#8C8C99",
          800: "#35353A",
          900: "#0D0D0D",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        baumans: ["var(--font-baumans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
