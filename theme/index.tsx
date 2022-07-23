import { slate, slateDark, blue, blueDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

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
  subtext: grayScale[`${grayName}11`],
  text: grayScale[`${grayName}12`],
});

export const { styled, getCssText, createTheme, globalCss, keyframes } =
  createStitches({
    theme: {
      fonts: {
        body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
      },
      colors: getColors(blueDark, "blue", slateDark, "slate"),
    },
    media: {
      small: "(min-width: 425px)",
      medium: "(min-width: 768px)",
      large: "(min-width: 1024px)",
    },
  });

export const lightTheme = createTheme({
  colors: getColors(blue, "blue", slate, "slate"),
});

export default styled;
