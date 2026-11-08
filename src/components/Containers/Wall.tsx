"use client";

import Image from "next/image";
import { Reveal } from "@/components/UI/Reveal";

function Wall() {
  return (
    <Reveal className="relative -mt-12 h-44 overflow-hidden md:h-60">
      <Image
        className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        src="/assets/img/wallScreen2.png"
        width={1980}
        height={1080}
        sizes="100vw"
        alt="Wanted posters on a Zaun wall"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"
      />
    </Reveal>
  );
}

export default Wall;
