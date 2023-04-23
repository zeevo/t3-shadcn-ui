import * as Tooltip from "@radix-ui/react-tooltip";
import cls from "classnames";
import {
  Github,
  Home,
  Menu,
  Twitter,
  User,
  type LucideIcon,
} from "lucide-react";
import React from "react";
import ColorModeToggle from "../core/components/ColorModeToggle";
import IconLabel from "../core/components/IconLabel";
import IconLink from "../core/components/IconLink";
import Link from "../core/components/Link";
import StyledSeparator from "../core/components/Separator";
import type { Config, NavbarItem } from "../core/lib/config";

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
}> = ({ config, page }) => {
  return (
    <Tooltip.Provider>
      <nav className="navbar flex bg-transparent p-0">
        {/* Normal  Left */}
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

        {/* Normal */}
        <div
          className={cls("hidden w-full gap-4 sm:flex", config.navbar.justify)}
        >
          {config.navbar.items.map((item, i) => (
            <NavItem key={i} item={item} page={page} />
          ))}
        </div>
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
