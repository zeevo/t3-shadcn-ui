import fs from "fs";
import path from "path";

export const getRootDir = () => {
  let cur = __dirname;
  let i = 0;
  while (!fs.readdirSync(cur).includes("next.config.js")) {
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
  const configPath = path.join(getRootDir(), "config.json");
  try {
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, "utf-8")) as Config;
    }
  } catch (e) {
    console.log("Unable to parse config");
  }
  return DEFAULT_CONFIG;
};

export { getConfig };

export default getConfig;
