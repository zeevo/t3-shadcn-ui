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
    defaultTitle: "",
    description: "A Next.js Starter Project",
  },
  navbar: {
    spacing: true,
    colorModeToggle: {
      tooltip: true,
    },
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
  colorModeToggle?: {
    tooltip?: boolean;
  };
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
