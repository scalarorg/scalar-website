import { DISCORD_URL, TELEGRAM_URL, X_URL } from "@/lib/constants/links";
import Discord from "@/public/icon/discord.svg";
import Telegram from "@/public/icon/telegram.svg";
import XTwitter from "@/public/icon/x-twitter.svg";
import { StaticImageData } from "next/image";

export interface FooterLink {
  name: string;
  link: string;
}

export interface FooterContent {
  title: string;
  links: FooterLink[];
}

export const FooterContent: FooterContent[] = [
  // {
  //   title: "platform",
  //   links: [
  //     {
  //       name: "consensus",
  //       link: "/404",
  //     },
  //     {
  //       name: "interoperable layer",
  //       link: "/404",
  //     },
  //     {
  //       name: "EVM compatibility",
  //       link: "/404",
  //     },
  //     {
  //       name: "network scan",
  //       link: "/404",
  //     },
  //   ],
  // },
  // {
  //   title: "projects",
  //   links: [
  //     {
  //       name: "decentralized API's",
  //       link: "/404",
  //     },
  //     {
  //       name: "wallet",
  //       link: "/404",
  //     },
  //     {
  //       name: "bridge",
  //       link: "/404",
  //     },
  //     {
  //       name: "RWA protocol",
  //       link: "/404",
  //     },
  //   ],
  // },
  // {
  //   title: "build",
  //   links: [
  //     {
  //       name: "get started",
  //       link: "/404",
  //     },
  //     {
  //       name: "docs",
  //       link: "/404",
  //     },
  //     {
  //       name: "examples & tutorials",
  //       link: "/404",
  //     },
  //     {
  //       name: "grants",
  //       link: "/404",
  //     },
  //   ],
  // },
  // {
  //   title: "community",
  //   links: [
  //     {
  //       name: "governance",
  //       link: "/404",
  //     },
  //     {
  //       name: "social",
  //       link: "/404",
  //     },
  //     {
  //       name: "blog",
  //       link: "/404",
  //     },
  //     {
  //       name: "whitepaper",
  //       link: "/404",
  //     },
  //     {
  //       name: "careers",
  //       link: "/404",
  //     },
  //     {
  //       name: "contact us",
  //       link: "/404",
  //     },
  //   ],
  // },
  {
    title: '',
    links: [
      {
        name: "Community",
        link: "https://discord.com/invite/7FFhERZwB7",
      },
      {
        name: "News",
        link: "https://scalarprotocolnews.substack.com/",
      },
      {
        name: "Docs V1",
        link: "https://scalar.gitbook.io/scalar",
      },
    ]
  }
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
