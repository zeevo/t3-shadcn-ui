import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";

import Layout from "../core/components/Layout";
import type { Config } from "../core/lib/config";
import { trpc } from "../core/utils/trpc";

import "../core/styles/globals.css";

const MyApp: AppType<{
  session: Session | null;
  config: Config;
  page: string;
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Layout config={pageProps.config} page={pageProps.page}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
