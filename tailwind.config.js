// eslint-disable-next-line @typescript-eslint/no-var-requires
const { slate, slateDark, blue, blueDark } = require("@radix-ui/colors");

const LIGHT_COLORS = [slate, "slate"];
const LIGHT_COLOR_TEXT = [slate, "slate"];
const DARK_COLORS = [slateDark, "slate"];
const DARK_COLOR_TEXT = [slateDark, "slate"];

const getColors = (colors, other) => {
  const keys = [
    "base-100",
    "base-content",
    "primary",
    "secondary",
    "primary-focus",
    "accent",
    "neutral",
  ];

  const base = keys.reduce((prev, curr, i) => {
    prev[curr] = Object.keys(colors).reduce((colorMap, mode) => {
      const name = colors[mode]?.name;
      colorMap[mode] = colors[mode]?.colors[`${name}${i + 1}`];
      return colorMap;
    }, {});
    return prev;
  }, {});

  return { ...base, ...other };
};

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
          "base-100": blueDark.blue1,
          "base-content": blueDark.blue12, // optional
          primary: blueDark.blue11,
          secondary: blueDark.blue6,
          accent: blueDark.blue5,
          neutral: slateDark.slate7,
        },
        light: {
          "base-100": blue.blue1,
          "base-content": blue.blue12,
          primary: blue.blue11,
          secondary: blue.blue6,
          accent: blue.blue5,
          neutral: slate.slate7,
        },
      },
    ],
  },
};
