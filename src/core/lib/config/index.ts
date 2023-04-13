import fs from "fs";
import path from "path";

export const getRootDir = () => {
  let cur = __dirname;
  let i = 0;
  while (
    !(
      fs.readdirSync(cur).includes("next.config.js") ||
      fs.readdirSync(cur).includes("next.config.mjs")
    )
  ) {
    cur = path.join(cur, "..");
    if (i > 500) {
      throw new Error("Could not find root dir");
    }
    i++;
  }
  return cur;
};

const DEFAULT_CONFIG: Config = {
  site: {
    title: "Next Starter",
    description: "A Next.js Starter Project",
    defaultTitle: "",
    image: "",
    url: "",
  },
  main: {},
  layout: {
    type: "default",
  },
  navbar: {
    spacing: true,
    colorModeToggle: {
      tooltip: true,
    },
    items: [
      {
        icon: "Home",
        href: "/",
        value: "Next Starter",
        type: "text",
      },
      {
        type: "separator",
        className: "h-7",
      },
      {
        icon: "Github",
        href: "https://github.com/zeevo/next-starter",
        value: "Github",
        type: "icon",
      },
    ],
  },
};

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
  defaultTitle: string;
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

const getConfig = (): Config => {
  const configPath = path.join(getRootDir(), "config.json");
  try {
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, "utf-8")) as Config;
      return Object.assign(DEFAULT_CONFIG, config);
    }
  } catch (e) {
    console.log("Unable to parse config");
  }
  return DEFAULT_CONFIG;
};

export { getConfig };

export default getConfig;
