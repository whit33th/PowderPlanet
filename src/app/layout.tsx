import type { Metadata } from "next";
import "./globals.css";

import QueryProvide from "./../helpers/QueryProvide";
import React from "react";
import { beaufort } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "PowderPlanet",
  description:
    "We strive to become Wikipedia about Jinx, and in the future, about the entire Arcane lore.",
  abstract:
    "We strive to become Wikipedia about Jinx, and in the future, about the entire Arcane lore.",
  icons: {
    icon: "/favicon.ico",
  },
  category: "Games, Wiki, Arcane",
  keywords:
    "Jinx / Powder wiki, arcane lore, jinx lore, jinx wiki, jinx wiki arcane, jinx wiki arcane lore, jinx wiki arcane lore",
  authors: [{ name: "dkaminskyi", url: "https://github.com/whit33th" }],
  creator: "Daniil Kaminskyi / whit33th",
  applicationName: "PowderPlanet",
  appleWebApp: {
    title: "PowderPlanet",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${beaufort.className}  antialiased`}>
        <QueryProvide>{children}</QueryProvide>
      </body>
    </html>
  );
}
