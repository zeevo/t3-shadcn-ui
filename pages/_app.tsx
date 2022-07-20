import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Globals from "../client/components/Globals";
import Layout from "../client/components/Layout";
import "../client/styles/globals.css";
import { lightTheme } from "../client/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: "dark",
        light: lightTheme.className,
      }}
    >
      <Globals />
      <Layout config={pageProps.config} page={pageProps.page}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
