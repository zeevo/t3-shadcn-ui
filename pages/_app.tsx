import { Theme, ThemeProvider } from "@emotion/react";
import get from "lodash.get";
import merge from "lodash.merge";
import type { AppProps } from "next/app";
import ThemeContextProvider, {
  Consumer as ThemeContextConsumer,
} from "../client/context/ThemeContext";
import baseTheme from "../client/theme";
import Globals from "../components/Globals";
import Layout from "../components/Layout";
import "../styles/globals.css";

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode: string): Theme => {
  const theme = merge({}, baseTheme, {
    colors: { ...get(baseTheme.colors.modes, mode, baseTheme.colors), mode },
  });
  console.log(theme);
  return theme;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <ThemeContextConsumer>
        {([mode]) => (
          <ThemeProvider theme={getTheme(mode)}>
            <Globals />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        )}
      </ThemeContextConsumer>
    </ThemeContextProvider>
  );
}

export default MyApp;
