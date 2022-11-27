import { slate, slateDark, blue, blueDark } from "@radix-ui/colors";

const LIGHT_COLORS = blue;
const LIGHT_COLOR_TEXT = slate;
const DARK_COLORS = blueDark;
const DARK_COLOR_TEXT = slateDark;

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

console.log(
  getColors(
    {
      light: { colors: LIGHT_COLORS, name: "blue" },
      dark: { colors: DARK_COLORS, name: "blue" },
    },
    {
      subtext: {
        light: LIGHT_COLOR_TEXT.slate11,
        dark: DARK_COLOR_TEXT.slate11,
      },
      text: {
        light: LIGHT_COLOR_TEXT.slate12,
        dark: DARK_COLOR_TEXT.slate12,
      },
    }
  )
);
