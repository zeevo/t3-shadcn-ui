import * as Tooltip from "@radix-ui/react-tooltip";
import cls from "classnames";
import { Github, Home, Twitter, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { NavbarConfig } from "../lib/config";
import ColorModeToggle from "./ColorModeToggle";
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
  "bg-base-100",
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
          {config.items.map((item) => {
            const active = item.href == page;
            const id = item.href || item.type;
            let ele;
            let Icon;
            if (item.type === "separator") {
              ele = (
                <StyledSeparator orientation="vertical" className="mr-0 ml-0" />
              );
            } else {
              if (item.icon) {
                Icon = icons[item.icon];
              }
              ele = (
                <Link
                  className={cls(buttonStyles, { "bg-accent": active })}
                  data-tip={item.tooltip}
                  href={item.href}
                  aria-label={`${item.tooltip || ""} button`}
                >
                  {Icon && <Icon size={20} />}
                </Link>
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
