import type { Metadata } from "next";
import "@/styles/globals.css";
import { dm_sans } from "@/fonts";
import { WEBSITE_URL } from "@/lib/constants/links";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

const title = "Scalar | Next Gen L1 Blockchain";
const description =
  "Scalar unifies and shares security and liquidity to secure blockchains and aggregate siloed TVL.";
const openGraphImage = {
  images: [
    {
      url: "/scalar-protocol.png",
      alt: "Scalar Protocol",
      width: 558,
      height: 373,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  metadataBase: new URL(WEBSITE_URL),
  alternates: {
    canonical: "/",
  },
  generator: "Scalar",
  icons: {
    apple: [
      {
        url: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    icon: [
      {
        url: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    ...openGraphImage,
    type: "website",
    title,
    description,
    url: "/",
  },
  twitter: {
    ...openGraphImage,
    title,
    description,
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} font-dm bg-neutral-900 text-neutral-1 scrollbar-thumb-primary-blue-900 scrollbar-track-accent-info-900/90 scrollbar-thin`}
      >
        {children}
        <Toaster />
        <GoogleAnalytics gaId="G-RDKX0ZPEQH" />
      </body>
    </html>
  );
}
