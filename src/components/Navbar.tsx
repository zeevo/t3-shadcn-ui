import * as Tooltip from "@radix-ui/react-tooltip";
import cls from "classnames";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Icon from "~/core/components/Icon";
import IconButton from "~/core/components/IconButton";
import { useConfig } from "~/core/context/config";
import ColorModeToggle from "../core/components/ColorModeToggle";
import IconLabel from "../core/components/IconLabel";
import StyledSeparator from "../core/components/Separator";

const Navbar: React.FC = () => {
  const config = useConfig();
  const { pathname } = useRouter();

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
        <div className="navbar-end hidden w-full gap-4 sm:flex">
          {config.navbar.items.map((item, i) => {
            if (item.type === "separator") {
              return (
                <div key={i} className="flex min-w-[45px] justify-center">
                  <StyledSeparator orientation="vertical" />
                </div>
              );
            }

            if (item.type === "theme") {
              return <ColorModeToggle key="theme" tooltip={item.tooltip} />;
            }

            const active = item.href === pathname;

            if (item.type === "icon") {
              return (
                <IconButton
                  active={active}
                  key={`${i}${item.icon}`}
                  tooltip={item.tooltip}
                  href={item.href}
                  aria-label={`${item.tooltip || ""} button`}
                >
                  <Icon value={item.icon} />
                </IconButton>
              );
            }

            return (
              <Link
                key={`${i}${item.value}`}
                href={item.href}
                aria-label={`${item.value || ""} link`}
                className="text-xl font-bold opacity-70 hover:opacity-100"
              >
                {item.value}
              </Link>
            );
          })}
        </div>
      </nav>
    </Tooltip.Provider>
  );
};

export default Navbar;
