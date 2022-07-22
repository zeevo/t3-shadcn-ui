import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Globals from "../core/components/Globals";
import Layout from "../core/components/Layout";
import { lightTheme } from "../theme";
import "../styles/globals.css";

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
