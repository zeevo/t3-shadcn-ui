import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import type { Config } from "../lib/config";
import Navbar from "./Navbar";

const Layout: React.FC<
  PropsWithChildren<{
    config: Config;
    page?: string;
    sideNav: React.ReactElement;
  }>
> = ({ config, page, sideNav, children }) => {
  return (
    <div className="drawer-mobile drawer">
      <input
        type="checkbox"
        className="btn-ghost drawer-toggle drawer-button btn-square btn lg:hidden"
      ></input>
      <div className="drawer-content">
        <div className={twMerge("m-auto w-full px-6", config.main.className)}>
          <Navbar config={config} page={page} />
          <main>{children}</main>
        </div>
      </div>
      <div
        className="drawer-side"
        style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
      >
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <aside className="w-80 bg-base-200 px-4 py-2">{sideNav}</aside>
      </div>
    </div>
  );
};

export default Layout;
