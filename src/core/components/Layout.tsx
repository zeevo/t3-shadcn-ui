import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import type { Config } from "../lib/config";
import Navbar from "./Navbar";

const Layout: React.FC<
  PropsWithChildren<{ config: Config; page?: string; mainClasses?: string }>
> = ({ config, page, children, mainClasses = "" }) => {
  return (
    <div className="m-4">
      <div className="m-auto mb-12 w-full max-w-2xl">
        <Navbar config={config} page={page} />
      </div>
      <main className={twMerge("m-auto w-full max-w-2xl", mainClasses)}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
