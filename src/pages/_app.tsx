import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/core/utils/api";

import { ThemeProvider } from "next-themes";
import "~/core/styles/globals.css";
import { ConfigProvider } from "~/core/context/config";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ConfigProvider>
      <SessionProvider session={session}>
        <ThemeProvider attribute="data-theme" defaultTheme="system">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </ConfigProvider>
  );
};

export default api.withTRPC(MyApp);
