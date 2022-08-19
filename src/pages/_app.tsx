import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Globals from "../core/components/Globals";
import Layout from "../core/components/Layout";
import "../styles/globals.css";
import { lightTheme } from "../theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
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
    </SessionProvider>
  );
}

export default MyApp;
