// eslint-disable-next-line @typescript-eslint/no-var-requires
const { slate, slateDark, blue, blueDark } = require("@radix-ui/colors");

const LIGHT_COLORS = [blue, "blue"];
const LIGHT_COLOR_TEXT = [slate, "slate"];
const DARK_COLORS = [blueDark, "blue"];
const DARK_COLOR_TEXT = [slateDark, "slate"];

const getColors = (colors, other) => {
  const keys = [
    "bg",
    "subtleBg",
    "uiBg",
    "uiHovered",
    "uiActive",
    "subtle",
    "uiBorder",
    "uiHover",
    "solid",
    "solidHover",
    "lowContrastText",
    "highContrastText",
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
  safelist: [
    // {
    //   pattern:
    //     /.*-(bg|subtleBg|uiBg|uiHovered|uiActive|subtle|uiBorder|uiHover|solid|solidHover|lowContrastText|highContrastText|subtext|text)-(light|dark)/,
    //   variants: [
    //     "hover",
    //     "active",
    //     "focus",
    //     "dark",
    //     "dark:hover",
    //     "hover:dark",
    //   ],
    // },
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: [
        `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      ],
      scale: {
        15: "0.15",
      },
      colors: getColors(
        {
          light: { colors: LIGHT_COLORS[0], name: LIGHT_COLORS[1] },
          dark: { colors: DARK_COLORS[0], name: DARK_COLORS[1] },
        },
        {
          subtext: {
            light: LIGHT_COLOR_TEXT[0][`${LIGHT_COLOR_TEXT[1]}11`],
            dark: DARK_COLOR_TEXT[0][`${DARK_COLOR_TEXT[1]}11`],
          },
          text: {
            light: LIGHT_COLOR_TEXT[0][`${LIGHT_COLOR_TEXT[1]}12`],
            dark: DARK_COLOR_TEXT[0][`${DARK_COLOR_TEXT[1]}12`],
          },
        }
      ),
    },
  },
  plugins: [],
};
