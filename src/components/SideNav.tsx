import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { type FunctionComponent } from "react";
import Icon from "../core/components/Icon";
import { NavbarCoreItem, type Config } from "../core/lib/config";

interface SideNavProps {
  config: Config;
}

const SideNav: FunctionComponent<SideNavProps> = ({ config }) => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="sticky top-0 z-20 flex items-center gap-2 px-4 py-2">
        <div className="font-title inline-flex text-lg text-base-content transition-all duration-200 md:text-3xl">
          <Link
            href="#top"
            aria-current="page"
            aria-label="Homepage"
            className="flex-0 btn-ghost btn px-2 text-3xl normal-case no-underline"
          >
            {config.site.title}
          </Link>
        </div>
      </div>
      <div className="h-4" />
      <ul className="menu menu-compact flex flex-col p-0 px-4 sm:hidden">
        {config.navbar.items
          .filter((item): item is NavbarCoreItem => item.type !== "separator")
          // .filter((item) => item.mobile || item.mobile === undefined)
          .map((item, i) => {
            if (item.type === "theme") {
              return (
                <li key={i}>
                  <button
                    onClick={(event: { preventDefault: CallableFunction }) => {
                      event.preventDefault();
                      const nextMode = theme === "light" ? "dark" : "light";
                      setTheme(nextMode);
                    }}
                  >
                    <SunMoon /> Theme
                  </button>
                </li>
              );
            }
            return (
              <li key={i}>
                <a href={item.href} className="flex gap-4">
                  {item.icon && (
                    <span className="flex-none">
                      <Icon value={item.icon} />
                    </span>
                  )}
                  <span className="flex-1">{item.value}</span>
                </a>
              </li>
            );
          })}
      </ul>
      <div className="flex items-center justify-center sm:hidden">
        <div className="divider w-9/12" />
      </div>

      <ul className="menu menu-compact flex flex-col p-0 px-4">
        {config.sideNav?.items.map((item, i) => {
          if (item.type === "separator") {
            return (
              <div
                key={item.type + String(i)}
                className="divider divider-vertical"
              ></div>
            );
          }
          if (item.type === "text") {
            return (
              <li key={item.href}>
                <a href={item.href} className="flex gap-4">
                  {item.icon && (
                    <span className="flex-none">
                      <Icon value={item.icon} />
                    </span>
                  )}
                  <span className="flex-1">{item.value}</span>
                </a>
              </li>
            );
          }
          return <></>;
        })}
      </ul>
      {/* <div className="pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t from-base-200 to-transparent"></div> */}
    </>
  );
};

export default SideNav;
