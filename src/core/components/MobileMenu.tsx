import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";
import { NavbarIconItem, NavbarTextItem, type Config } from "../lib/config";
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

      <DropdownMenu.Portal>
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
              .map((item) => (
                <DropdownMenu.Item key={item.value} asChild={true}>
                  <Link
                    href={item.href}
                    className="w-full outline-accent hover:bg-accent"
                    style={{
                      gap: ".75rem",
                      padding: ".75rem 1rem",
                    }}
                  >
                    {item.value}
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
