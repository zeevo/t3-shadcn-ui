import * as Tooltip from "@radix-ui/react-tooltip";
import { Github, Home, LucideIcon, Twitter, User } from "lucide-react";
import React from "react";
import type { Config } from "../lib/config";
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

const Navbar: React.FC<{ config: Config; page?: string }> = ({
  config,
  page,
}) => {
  return (
    <Tooltip.Provider>
      <nav className="navbar justify-between p-0">
        <div className="navbar-start flex gap-2">
          {/* Normal */}
          {config.navbar.items.map((item, i) => {
            if (item.type === "separator") {
              const id = i;
              return (
                <div key={id} className="flex min-w-[45px] justify-center">
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
          })}
        </div>

        <div className="hidden sm:inline">
          {config.navbar.colorModeToggle && (
            <ColorModeToggle
              tooltip={config.navbar.colorModeToggle.tooltip}
              variant="text"
            />
          )}
        </div>

        {/* Mobile */}
        <MobileMenu config={config} />
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
