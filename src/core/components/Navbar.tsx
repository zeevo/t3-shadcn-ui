import * as Tooltip from "@radix-ui/react-tooltip";
import { Github, Home, Twitter, User } from "lucide-react";
import React from "react";
import type { NavbarConfig } from "../lib/config";
import ColorModeToggle from "./ColorModeToggle";
import IconButton from "./IconButton";
import StyledSeparator from "./Separator";

const icons = {
  Home: Home,
  Github: Github,
  User: User,
  Twitter: Twitter,
};

const buttonStyles = [
  "btn",
  "btn-ghost",
  "h-auto",
  "pl-0",
  "pr-0",
  "normal-case",
  "hover:bg-accent",
  "flex",
  "font-semibold",
  "duration-200",
  "min-h-[45px]",
  "min-w-[45px]",
  "items-center",
  "justify-center",
  "tooltip",
  "tooltip-bottom",
  "tooltip-accent",
  "bg-transparent",
].join(" ");

const Navbar: React.FC<{ config: NavbarConfig; page?: string }> = ({
  config,
  page,
}) => {
  return (
    <Tooltip.Provider>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex items-center justify-center">
          {config.items.map((item, i) => {
            let id;
            let ele;
            let Icon;
            if (item.type === "separator") {
              id = i;
              ele = (
                <StyledSeparator orientation="vertical" className="mr-0 ml-0" />
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

            return (
              <div key={id} className="[&:not(:last-child)]:mr-4">
                {ele}
              </div>
            );
          })}
        </div>

        {config.colorModeToggle && (
          <ColorModeToggle
            tooltip={config.colorModeToggle.tooltip}
            variant="text"
          />
        )}
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
