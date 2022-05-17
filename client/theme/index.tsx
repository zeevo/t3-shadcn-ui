import { slate, slateDark, blue, blueDark } from "@radix-ui/colors";

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
      dark: {
        text: slateDark.slate12,
        background: slateDark.slate1,
        primary: blueDark.blue3,
        secondary: slateDark.slate2,
      },
      light: {
        text: slate.slate12,
        background: slate.slate1,
        primary: blue.blue3,
        secondary: slate.slate4,
      },
    },
  },
};

export default theme;
