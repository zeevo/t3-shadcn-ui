export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next Starter",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "T3 App",
          href: "https://create.t3.gg/",
          items: [],
        },
        {
          title: "Shadcn UI",
          href: "https://ui.shadcn.com/docs",
          items: [],
        },
      ],
    },
  ],
  links: {
    twitter: "https://twitter.com/zeevosec",
    github: "https://github.com/zeevosec/next-starter",
  },
};
