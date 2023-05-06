export interface NavbarIconItem {
  href: string;
  icon: "Home" | "Github" | "User" | "Twitter";
  value: string;
  type: "text" | "icon";
}

export interface NavbarThemeToggleItem {
  type: "theme";
  tooltip: boolean;
}

export interface NavbarTextItem {
  href: string;
  value: string;
  icon: "Home";
  type: "text";
}

export interface Separator {
  type: "separator";
  className: string;
}

export type NavbarItemType = "text" | "icon" | "separator" | "theme";

export type NavbarItem = NavbarCoreItem | Separator;

export type NavbarCoreItem =
  | NavbarIconItem
  | NavbarTextItem
  | NavbarThemeToggleItem;

export interface NavbarConfig {
  className?: string;
  spacing: boolean;
  justify?: string;
  colorModeToggle?: {
    tooltip?: boolean;
  };
  items: NavbarItem[];
}

export interface SiteConfig {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface MainConfig {
  className?: string;
}

export type LayoutType = "sidenav" | "default";

export interface LayoutConfig {
  type: LayoutType;
  showTitle?: boolean;
}
export interface Config {
  navbar: NavbarConfig;
  sideNav?: NavbarConfig;
  layout?: LayoutConfig;
  main: MainConfig;
  site: SiteConfig;
  providers?: {
    [key: string]: {
      id: string;
      name: string;
      type: string;
      signinUrl: string;
      callbackUrl: string;
    };
  };
}
