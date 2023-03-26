import * as Tooltip from "@radix-ui/react-tooltip";
import { Github, Home, LucideIcon, Twitter, User } from "lucide-react";
import React from "react";
import type {
  Config,
  NavbarIconItem,
  NavbarItem,
  NavbarTextItem,
} from "../lib/config";
import ColorModeToggle from "./ColorModeToggle";
import IconLink from "./IconLink";
import MobileMenu from "./MobileMenu";
import StyledSeparator from "./Separator";
import Link from "./Link";

const icons = {
  Home: Home,
  Github: Github,
  User: User,
  Twitter: Twitter,
};

const NavItem: React.FC<{ item: NavbarItem; page?: string }> = ({
  item,
  page,
}) => {
  if (item.type === "separator") {
    return (
      <div className="flex min-w-[45px] justify-center">
        <StyledSeparator orientation="vertical" />
      </div>
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
        className="pr-2 text-2xl font-bold no-underline hover:text-primary"
        active={active}
        href={item.href}
      >
        {item.value}
      </Link>
    );
  }

  return null;
};

const Navbar: React.FC<{ config: Config; page?: string }> = ({
  config,
  page,
}) => {
  const homeItem = config.navbar.items
    .filter(
      (item): item is NavbarIconItem | NavbarTextItem =>
        item.type !== "separator"
    )
    .find((item) => item.icon === "Home");

  return (
    <Tooltip.Provider>
      <nav className="navbar justify-between p-0">
        <div className="navbar-start hidden gap-2 sm:flex">
          {/* Normal */}
          {config.navbar.items.map((item, i) => (
            <NavItem key={i} item={item} page={page} />
          ))}
        </div>

        <div className="hidden sm:flex">
          {config.navbar.colorModeToggle && (
            <ColorModeToggle
              tooltip={config.navbar.colorModeToggle.tooltip}
              variant="text"
            />
          )}
        </div>

        {/* Mobile */}
        <div className="sm:hidden">
          {homeItem && <NavItem item={homeItem} page={page} />}
        </div>

        <MobileMenu config={config} />
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
