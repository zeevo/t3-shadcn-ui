import "@emotion/react";
import { Theme as LibTheme } from "styled-system";
export type SimpleColors = { [key: string]: string };
export type NestedColors = { [key: string]: { [key: string]: string } };
export type Colors = SimpleColors | NestedColors;

declare module "@emotion/react" {
  export interface Theme {
    space: number[];
    fonts: {
      body: string;
    };
    colors: Colors;
    fontSizes: number[];
    fontWeights: {
      body: number;
      heading: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
  }
}
