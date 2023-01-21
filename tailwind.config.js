// eslint-disable-next-line @typescript-eslint/no-var-requires
const { slate, slateDark, blue, blueDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: [
        `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      ],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "base-100": "#000",
          "base-content": blueDark.blue12, // optional
          primary: blueDark.blue9,
          secondary: blueDark.blue6,
          accent: blueDark.blue4,
          neutral: slateDark.slate7,
        },
        light: {
          "base-100": slate.slate1,
          "base-content": slate.slate12,
          primary: blue.blue10,
          secondary: blue.blue6,
          accent: blue.blue4,
          neutral: slate.slate7,
        },
      },
    ],
  },
};
