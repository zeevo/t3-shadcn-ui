import { slate, slateDark, blue, blueDark } from "@radix-ui/colors";

const getColors = (
  color: any,
  name: string,
  grayScale: any,
  grayName: string
) => ({
  bg: color[`${name}1`],
  subtleBg: color[`${name}2`],
  uiBg: color[`${name}3`],
  uiHovered: color[`${name}4`],
  uiActive: color[`${name}5`],
  subtle: color[`${name}6`],
  uiBorder: color[`${name}7`],
  uiHover: color[`${name}8`],
  solid: color[`${name}9`],
  solidHover: color[`${name}10`],
  subtext: color[`${name}11`],
  text: grayScale[`${grayName}12`],
});

const theme = {
  space: [0, 4, 8, 15, 32, 64],
  fonts: {
    body: 'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 550,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    modes: {
      dark: getColors(blueDark, "blue", slateDark, "slate"),
      light: getColors(blue, "blue", slate, "slate"),
    },
  },
};

export default theme;
