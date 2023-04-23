import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import type { Config } from "../core/lib/config";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Layout: React.FC<
  PropsWithChildren<{
    config: Config;
    page?: string;
  }>
> = ({ config, page, children }) => {
  return (
    <div className="drawer-mobile drawer">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="duration-0 animation-none drawer-content">
        <div className={twMerge("m-auto w-full px-6", config.main.className)}>
          <div
            className="sticky top-0 z-30 flex h-16 w-full justify-center bg-transparent bg-opacity-90 
  text-base-content backdrop-blur transition-all duration-100 "
          >
            <Navbar config={config} page={page} />
          </div>
          <main>{children}</main>
        </div>
      </div>
      <div
        className="drawer-side"
        style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
      >
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <aside className={twMerge("w-80 bg-accent", config.sideNav?.className)}>
          <SideNav config={config} />
        </aside>
      </div>
    </div>
  );
};

export default Layout;
