import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

import QueryProvide from './../helpers/QueryProvide';
const league = localFont({
  src: "./fonts/League.otf",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "PowderPlanet",
  short_name: 'PP'
  description: "We strive to become Wikipedia about Jinx, and in the future, about the entire Arcane lore.",
  icons: {
    icon: '/favicon.ico',
  },
  "start_url": "/"
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
        <QueryProvide>
          {children}
        </QueryProvide>
      </body>

    </html>

  )
}
