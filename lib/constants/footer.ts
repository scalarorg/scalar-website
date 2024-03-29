import XTwitter from "@/public/icon/x-twitter.svg";
import Discord from "@/public/icon/discord.svg";
import Telegram from "@/public/icon/telegram.svg";
import { StaticImageData } from "next/image";
import { DISCORD_URL, TELEGRAM_URL, X_URL } from "@/lib/constants/links";

export interface FooterLink {
  name: string;
  link: string;
}

export interface FooterContent {
  title: string;
  links: FooterLink[];
}

export const FooterContent: FooterContent[] = [
  {
    title: "platform",
    links: [
      {
        name: "consensus",
        link: "/",
      },
      {
        name: "interoperable layer",
        link: "/",
      },
      {
        name: "EVM compatibility",
        link: "/",
      },
      {
        name: "network scan",
        link: "/",
      },
    ],
  },
  {
    title: "projects",
    links: [
      {
        name: "decentralized API's",
        link: "/",
      },
      {
        name: "wallet",
        link: "/",
      },
      {
        name: "bridge",
        link: "/",
      },
      {
        name: "RWA protocol",
        link: "/",
      },
    ],
  },
  {
    title: "build",
    links: [
      {
        name: "get started",
        link: "/",
      },
      {
        name: "docs",
        link: "/",
      },
      {
        name: "examples & tutorials",
        link: "/",
      },
      {
        name: "grants",
        link: "/",
      },
    ],
  },
  {
    title: "community",
    links: [
      {
        name: "governance",
        link: "/",
      },
      {
        name: "social",
        link: "/",
      },
      {
        name: "blog",
        link: "/",
      },
      {
        name: "whitepaper",
        link: "/",
      },
      {
        name: "careers",
        link: "/",
      },
      {
        name: "contact us",
        link: "/",
      },
    ],
  },
];

export interface FooterSocialLink {
  icon: StaticImageData;
  link: string;
}

export const FooterSocialLink: FooterSocialLink[] = [
  {
    icon: XTwitter,
    link: X_URL,
  },
  // {
  //   icon: Github,
  //   link: "/",
  // },
  {
    icon: Discord,
    link: DISCORD_URL,
  },
  // {
  //   icon: Medium,
  //   link: "/",
  // },
  {
    icon: Telegram,
    link: TELEGRAM_URL,
  },
];
