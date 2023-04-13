import * as Tooltip from "@radix-ui/react-tooltip";
import cls from "classnames";
import {
  Github,
  Home,
  type LucideIcon,
  Menu,
  Twitter,
  User,
} from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";
import type { Config, NavbarItem } from "../lib/config";
import ColorModeToggle from "./ColorModeToggle";
import IconLabel from "./IconLabel";
import IconLink from "./IconLink";
import Link from "./Link";
import MobileMenu from "./MobileMenu";
import StyledSeparator from "./Separator";

const icons = {
  Home: Home,
  Github: Github,
  User: User,
  Twitter: Twitter,
};

export const NavItem: React.FC<{ item: NavbarItem; page?: string }> = ({
  item,
  page,
}) => {
  if (item.type === "separator") {
    return (
      <StyledSeparator orientation="vertical" className={item.className} />
    );
  } else if (item.type === "icon") {
    let Icon: LucideIcon;
    const id = item.href;
    const active = item.href == page;
    if (item.icon) {
      Icon = icons[item.icon];
      return (
        <IconLink
          key={id}
          active={active}
          data-tip={item.value}
          tooltip={item.value}
          href={item.href}
          aria-label={`${item.value} button`}
        >
          {Icon && <Icon size={20} />}
        </IconLink>
      );
    }
  } else if (item.type === "text") {
    const active = item.href == page;
    const id = item.href;
    return (
      <Link
        key={id}
        className="text-xl font-bold no-underline hover:opacity-90"
        active={active}
        href={item.href}
      >
        {item.value}
      </Link>
    );
  } else if (item.type == "theme") {
    return <ColorModeToggle tooltip={item.tooltip} />;
  }

  return null;
};

const Navbar: React.FC<{
  config: Config;
  page?: string;
  layout?: "sidenav" | "default";
}> = ({ config, page }) => {
  return (
    <Tooltip.Provider>
      <nav className="navbar flex p-0">
        {/* Normal  Left */}
        {config.layout?.type === "sidenav" && (
          <div className="navbar-left flex-0 flex gap-4">
            <IconLabel htmlFor="drawer" className="flex sm:hidden">
              <Menu />
            </IconLabel>
            <Link
              href="/"
              className="text-2xl font-bold no-underline sm:hidden sm:text-4xl"
            >
              {config.site.title}
            </Link>
          </div>
        )}

        {config.layout?.type === "default" && (
          <Link
            href="/"
            className="justify-start whitespace-nowrap text-2xl font-bold no-underline sm:text-4xl"
          >
            {config.site.title}
          </Link>
        )}

        {/* Normal */}
        <div
          className={cls("hidden w-full gap-4 sm:flex", config.navbar.justify)}
        >
          {config.navbar.items.map((item, i) => (
            <NavItem key={i} item={item} page={page} />
          ))}
        </div>

        {/* Default Mobile */}
        {config.layout?.type === "default" && (
          <>
            <div className="flex w-full justify-end sm:hidden">
              <MobileMenu config={config} />
            </div>
          </>
        )}
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
