import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";

import Layout from "../core/components/Layout";
import type { Config } from "../core/lib/config";
import { trpc } from "../core/utils/trpc";

import "../core/styles/globals.css";
import Head from "../core/components/Head";

const MyApp: AppType<{
  session: Session | null;
  config: Config;
  page: string;
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Head
        title={pageProps.config.site.title}
        defaultTitle={pageProps.config.site.defaultTitle}
        description={pageProps.config.site.description}
        canonical={pageProps.config.site.url}
        image={pageProps.config.site.image}
        site={pageProps.config.site.url}
      />
      <ThemeProvider attribute="class" defaultTheme="system">
        <Layout config={pageProps.config} page={pageProps.page}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
