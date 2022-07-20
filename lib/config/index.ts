import fs from "fs";

const CONFIG_PATH = "../../config";

const DEFAULT_CONFIG: Config = {
  site: {
    title: "Next Starter",
    defaultTitle: "",
    description: "A Next.js Starter Project",
  },
  navbar: {
    spacing: true,
    colorModeToggle: true,
    colorModeTooltip: true,
    items: [
      {
        icon: "HomeIcon",
        href: "/",
        tooltip: "Home",
      },
      {
        type: "separator",
      },
      {
        icon: "GithubIcon",
        href: "https://github.com/zeevo/next-starter",
        tooltip: "Github",
      },
    ],
  },
};

export interface NavbarItem {
  href?: string;
  icon?: "HomeIcon" | "GithubIcon" | "MixIcon" | "PersonIcon";
  tooltip?: string;
  type?: "separator";
}

type NavbarItemOrSeparator = NavbarItem;

export interface NavbarConfig {
  spacing: boolean;
  colorModeToggle: boolean;
  colorModeTooltip: boolean;
  items: NavbarItemOrSeparator[];
}

export interface SiteConfig {
  title?: string;
  defaultTitle?: string;
  description?: string;
  image?: string;
  url?: string;
}

export interface Config {
  navbar: NavbarConfig;
  site: SiteConfig;
}

const getConfig = (): Config => {
  if (fs.existsSync(CONFIG_PATH)) {
    return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8")) as Config;
  }
  return DEFAULT_CONFIG;
};

export { getConfig };

export default getConfig;
