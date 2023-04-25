import * as Tooltip from "@radix-ui/react-tooltip";
import cls from "classnames";
import { Github, Home, Menu, Twitter, User } from "lucide-react";
import React from "react";
import ColorModeToggle from "../core/components/ColorModeToggle";
import IconLabel from "../core/components/IconLabel";
import IconLink from "../core/components/IconLink";
import Link from "../core/components/Link";
import StyledSeparator from "../core/components/Separator";
import type { Config, NavbarItem } from "../core/lib/config";
import Icon from "~/core/components/Icon";

export const NavItem: React.FC<{ item: NavbarItem; page?: string }> = ({
  item,
  page,
}) => {
  if (item.type === "separator") {
    return (
      <StyledSeparator orientation="vertical" className={item.className} />
    );
  } else if (item.type === "icon") {
    const id = item.href;
    const active = item.href == page;
    return (
      <IconLink
        key={id}
        active={active}
        data-tip={item.value}
        tooltip={item.value}
        href={item.href}
        aria-label={`${item.value} button`}
      >
        <Icon value={item.icon} />
      </IconLink>
    );
  } else if (item.type === "text") {
    const active = item.href == page;
    const id = item.href;
    return (
      <IconLink
        key={id}
        className="pl-2 pr-2 text-xl font-bold normal-case"
        active={active}
        href={item.href}
      >
        {item.value}
      </IconLink>
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
