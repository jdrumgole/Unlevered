/* eslint-disable prettier/prettier */
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Mke beautiful websites regardless of your design experience.",
  menuItems: [
    {
      label: "Portfolio",
      href: "/",
    },
    {
      label: "Market",
      href: "/market",
    },
     {
      label: "News",
      href: "/news",
    },
    
  ],
  navItems: [
 
  ],
  navMenuItems: [
     {
      label: "Portfolio",
      href: "/",
    },
    {
      label: "Market",
      href: "/market",
    },
     {
      label: "News",
      href: "/news",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
