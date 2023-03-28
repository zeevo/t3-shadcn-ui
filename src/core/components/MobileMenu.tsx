import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import {
  type Config,
  type NavbarIconItem,
  type NavbarTextItem,
} from "../lib/config";
import Icon from "./Icon";
import IconButton from "./IconButton";

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
        <>
          {config.navbar.items
            .filter(
              (item): item is NavbarIconItem | NavbarTextItem =>
                item.type !== "separator"
            )
            .filter((item) => item.icon !== "Home")
            .map((item) => (
              <DropdownMenu.Item key={item.value} asChild={true}>
                <Link
                  href={item.href}
                  className="flex w-full rounded outline-accent hover:bg-accent"
                  style={{
                    gap: ".75rem",
                    padding: ".75rem 1rem",
                  }}
                >
                  {item.icon && <Icon value={item.icon} />}
                  {item.value}
                </Link>
              </DropdownMenu.Item>
            ))}

          {config.navbar.colorModeToggle && (
            <DropdownMenu.Item
              asChild={true}
              onSelect={(event) => {
                event.preventDefault();
              }}
            >
              <button
                className="flex w-full rounded outline-accent hover:bg-accent"
                style={{
                  gap: ".75rem",
                  padding: ".75rem 1rem",
                }}
                onClick={() => {
                  const nextMode = theme === "light" ? "dark" : "light";
                  setTheme(nextMode);
                }}
              >
                <SunMoon /> Theme
              </button>
            </DropdownMenu.Item>
          )}
        </>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
