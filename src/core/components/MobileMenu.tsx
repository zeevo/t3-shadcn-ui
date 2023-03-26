import { Menu } from "lucide-react";
import { type NavbarItem, type Config } from "../lib/config";
import IconButton from "./IconButton";
import IconDropdown from "./IconDropdown";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import ColorModeToggle from "./ColorModeToggle";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  config: Config;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ config }) => {
  const [active, setActive] = useState(false);
  const { theme, setTheme } = useTheme();

  const items = config.navbar.items.filter(
    (item): item is NavbarItem => item.type === "item"
  );

  if (config.navbar.colorModeToggle) {
    items.push({
      icon: "Colormode",
      tooltip: theme as string,
    });
  }

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

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          className="menu flex w-52 items-center rounded bg-base-100 p-2 shadow"
        >
          <>
            {config.navbar.items
              .filter((item): item is NavbarItem => item.type === "item")
              .map((item) => (
                <DropdownMenu.Item key={item.tooltip} asChild={true}>
                  <Link
                    href={item.href}
                    className="w-full outline-accent hover:bg-accent"
                    style={{
                      gap: ".75rem",
                      padding: ".75rem 1rem",
                    }}
                  >
                    {item.tooltip}
                  </Link>
                </DropdownMenu.Item>
              ))}

            {/* {config.navbar.colorModeToggle && (
              <DropdownMenu.Item asChild={true}>
                <ColorModeToggle
                  tooltip={config.navbar.colorModeToggle.tooltip}
                  variant="text"
                />
                {theme}
              </DropdownMenu.Item>
            )} */}
          </>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MobileMenu;
