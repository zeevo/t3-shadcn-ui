import { Menu } from "lucide-react";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import type { Config, LayoutType } from "../lib/config";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Layout: React.FC<
  PropsWithChildren<{
    config: Config;
    page?: string;
    layout?: LayoutType;
  }>
> = ({ config, page, layout: layoutProp, children }) => {
  const layout = layoutProp ?? config.layout?.type ?? "default";
  if (layout === "sidenav") {
    return (
      <div className="drawer-mobile drawer">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className={twMerge("m-auto w-full px-6", config.main.className)}>
            <div
              className="90 sticky top-0 z-30 flex h-16 w-full justify-center bg-base-100 text-base-content 
  transition-all duration-100"
            >
              <Navbar config={config} page={page} layout={layout} />
            </div>
            <main>{children}</main>
          </div>
        </div>
        <div
          className="drawer-side"
          style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
        >
          <label htmlFor="drawer" className="drawer-overlay"></label>
          <aside
            className={twMerge("w-80 bg-accent", config.sideNav?.className)}
          >
            <SideNav config={config} />
          </aside>
        </div>
      </div>
    );
  } else {
    return (
      <div className={twMerge("m-auto w-full px-6", config.main.className)}>
        <Navbar config={config} page={page} />
        <main>{children}</main>
      </div>
    );
  }
};

export default Layout;
