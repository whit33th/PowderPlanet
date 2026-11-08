"use client";

import Image from "next/image";
import Link from "next/link";
import { RevealGroup, RevealItem } from "@/components/UI/Reveal";

function Footer() {
  return (
    <footer className="relative -mt-12 px-8 pt-20 pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent"
      />
      <RevealGroup className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <RevealItem>
          <p className="text-5xl uppercase sm:text-7xl">Whit33th</p>
        </RevealItem>
        <RevealItem className="flex flex-col items-center gap-3 sm:items-end">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:opacity-80"
            href="https://t.me/whit33th"
            aria-label="Telegram"
          >
            <Image
              className="invert"
              src="/assets/icons/telegram.svg"
              width={30}
              height={30}
              alt=""
            />
          </Link>
          <p className="text-sm text-white/70">All rights reserved © 2026</p>
        </RevealItem>
      </RevealGroup>
    </footer>
  );
}

export default Footer;
