import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import type { Config } from "../lib/config";
import Navbar from "./Navbar";

const Layout: React.FC<
  PropsWithChildren<{ config: Config; page?: string }>
> = ({ config, page, children }) => {
  return (
    <div className="m-4">
      <div className={twMerge("m-auto mb-12 w-full", config.navbar.className)}>
        <Navbar config={config} page={page} />
      </div>
      <main className={twMerge("m-auto w-full", config.main.className)}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
