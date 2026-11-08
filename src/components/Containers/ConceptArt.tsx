"use client";

import dynamic from "next/dynamic";
import { InViewMount } from "@/components/UI/InViewMount";
import { MaskHeading, Reveal } from "@/components/UI/Reveal";

const MorphSlider = dynamic(() => import("@/components/bits/MorphSlider"), {
  ssr: false,
});

const conceptArts = [
  "/assets/img/Concept/concept1.png",
  "/assets/img/Concept/concept10.jpg",
  "/assets/img/Concept/concept11.jpg",
  "/assets/img/Concept/concept9.jpg",
  "/assets/img/Concept/concept2.png",
  "/assets/img/Concept/concept3.jpg",
  "/assets/img/Concept/concept5.jpg",
  "/assets/img/Concept/concept6.jpg",
  "/assets/img/Concept/concept8.jpg",
  "/assets/img/Concept/concept4.jpg",
].map((image, index) => ({
  image,
  caption: `Concept ${index + 1}`,
}));

export default function ConceptArt() {
  return (
    <section className="relative -mt-12 px-4 pt-28 pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-background to-transparent"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
        <MaskHeading className="mb-8 text-center text-4xl sm:text-6xl">
          <span>Grade-</span>
          <span className="text-pink-500">A</span>
          <span className="text-blue-500">r</span>
          <span className="text-emerald-500">t</span>
          <span> Gallery</span>
        </MaskHeading>
        <Reveal className="aspect-video w-full">
          <InViewMount className="h-full w-full">
            <MorphSlider
              items={conceptArts}
              duration={0.7}
              radius={18}
              showCaptions={false}
              autoplay
              autoplayDelay={4.2}
              overlayColor="#0a0a0a"
            />
          </InViewMount>
        </Reveal>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
