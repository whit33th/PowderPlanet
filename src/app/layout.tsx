import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const league = localFont({
  src: "./fonts/League.otf",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "PowderPlanet",
  description: "We strive to become Wikipedia about Jinx, and in the future, about the entire Arcane lore.",
  icons: {
    icon: '/favicon.ico', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body
        className={`${league} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
