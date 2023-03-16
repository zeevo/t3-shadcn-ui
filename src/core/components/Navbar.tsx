import * as Tooltip from "@radix-ui/react-tooltip";
import { Github, Home, Menu, Twitter, User } from "lucide-react";
import React from "react";
import type { Config, NavbarConfig } from "../lib/config";
import ColorModeToggle from "./ColorModeToggle";
import IconButton from "./IconButton";
import Link from "./Link";
import StyledSeparator from "./Separator";

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
          <Link
            href="/"
            className="pr-2 text-2xl font-bold no-underline hover:text-primary"
          >
            {config.site.title}
          </Link>
          {/* Normal */}
          {config.navbar.items.map((item, i) => {
            let id;
            let ele;
            let Icon;
            if (item.type === "separator") {
              id = i;
              ele = (
                <div className="flex min-w-[45px] justify-center">
                  <StyledSeparator orientation="vertical" />
                </div>
              );
            } else {
              id = item.href;
              const active = item.href == page;
              if (item.icon) {
                Icon = icons[item.icon];
              }
              ele = (
                <IconButton
                  active={active}
                  data-tip={item.tooltip}
                  href={item.href}
                  aria-label={`${item.tooltip || ""} button`}
                >
                  {Icon && <Icon size={20} />}
                </IconButton>
              );
            }

            return ele;
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
        <div className="sm:hidden">
          <button className="btn">
            <Menu />
          </button>
        </div>
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
