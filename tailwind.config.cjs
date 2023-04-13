const {
  slate,
  slateDark,
  blue,
  blueDark,
  green,
  greenDark,
  red,
  redDark,
  sky,
  skyDark,
  yellow,
  yellowDark,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "config.json"],
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
          "base-100": slateDark.slate1,
          "base-content": blueDark.blue12, // optional
          primary: blueDark.blue8,
          secondary: blueDark.blue6,
          accent: slateDark.slate4,
          neutral: slateDark.slate7,
          success: greenDark.green8,
          info: skyDark.sky8,
          warning: yellowDark.yellow8,
          error: redDark.red8,
        },
        light: {
          "base-100": slate.slate1,
          "base-content": slate.slate12,
          primary: blue.blue8,
          secondary: blue.blue6,
          accent: blue.blue4,
          neutral: slate.slate7,
          success: green.green8,
          info: sky.sky8,
          warning: yellow.yellow8,
          error: red.red8,
        },
      },
    ],
  },
};
