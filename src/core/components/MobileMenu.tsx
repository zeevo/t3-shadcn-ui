import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  type NavbarThemeToggleIcon,
  type Config,
  type NavbarIconItem,
  type NavbarTextItem,
  NavbarItem,
  NavbarCoreItem,
} from "../lib/config";
import Icon from "./Icon";
import IconButton from "./IconButton";

const MobileDropdownItem = React.forwardRef<
  any,
  {
    item: NavbarCoreItem;
    onClick?: CallableFunction;
  }
>(({ item, onClick }, ref) => {
  switch (item.type) {
    case "text":
      return (
        <Link
          href={item.href}
          className="flex w-full rounded outline-accent hover:bg-accent"
          style={{
            gap: ".75rem",
            padding: ".75rem 1rem",
          }}
          ref={ref}
        >
          {item.icon && <Icon value={item.icon} />}
          {item.value}
        </Link>
      );
    case "icon":
      return (
        <Link
          href={item.href}
          className="flex w-full rounded outline-accent hover:bg-accent"
          style={{
            gap: ".75rem",
            padding: ".75rem 1rem",
          }}
          ref={ref}
        >
          <Icon value={item.icon} />
          {item.value}
        </Link>
      );

    case "theme":
      console.log(item);
      return (
        <button
          className="flex w-full rounded outline-accent hover:bg-accent"
          style={{
            gap: ".75rem",
            padding: ".75rem 1rem",
          }}
          onClick={onClick}
          ref={ref}
        >
          <SunMoon /> Theme
        </button>
      );

    default:
      return <div></div>;
  }
});

MobileDropdownItem.displayName = "MobileDropdownItem";

interface MobileMenuProps {
  config: Config;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ config }) => {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root onOpenChange={() => setActive(!active)}>
      <DropdownMenu.Trigger asChild>
        <IconButton
          className="sm:hidden"
          active={active}
          onClick={() => setActive(!active)}
          aria-label="Navbar mobile menu"
        >
          <Menu />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        side="bottom"
        align="end"
        className="menu flex w-52 items-center rounded bg-base-100 p-2 shadow"
      >
        {config.navbar.items
          .filter((item): item is NavbarCoreItem => item.type !== "separator")
          .filter((item) => item.mobile !== false)
          .map((item, i) => {
            return (
              <DropdownMenu.Item key={i} asChild={true}>
                <MobileDropdownItem
                  item={item}
                  onClick={(event: { preventDefault: CallableFunction }) => {
                    event.preventDefault();
                    const nextMode = theme === "light" ? "dark" : "light";
                    setTheme(nextMode);
                  }}
                />
              </DropdownMenu.Item>
            );
          })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
