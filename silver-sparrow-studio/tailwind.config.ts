import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        new: "0px 4px 4px 0px #00000040",
      },
      colors: {
        primary: "var(--color-primary)",
        lightPrimary: "#CCE6E6",
        bluePrimary: "#0890FF",
        indigoPrimary: "#455EED",
        lightBluePrimary: "#0498B3",
      },
      screens: {
        xs: "420px",
        xxl: "1320px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xs: "420px",
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px",
          "3xl": "1580px",
        },
      },
      borderRadius: {
        4: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
