import { Baumans, DM_Sans, Inter } from "next/font/google";

export const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const baumans = Baumans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-baumans",
});

export const dm_sans = DM_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-dm",
});
