"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { m, useReducedMotion } from "motion/react";
import { AmbientVideo } from "@/components/UI/AmbientVideo";
import { InViewMount } from "@/components/UI/InViewMount";
import Hr from "@/components/UI/myHr";
import { MaskHeading, Reveal, RevealGroup, RevealItem } from "@/components/UI/Reveal";
import { imageSettle } from "@/lib/motion";

const FlexCarousel = dynamic(() => import("@/components/bits/FlexCarousel"), {
  ssr: false,
});

const traits = [
  { label: "Industrial oligarchy", detail: "Chem-barons keep the factories" },
  { label: "Advanced tech", detail: "Machines built with the safeties off" },
  { label: "Exploit magic", detail: "Shimmer, chem, and stolen hextech" },
  { label: "Urbanized, toxic", detail: "A city stacked under the smog" },
];

const legends = Array.from({ length: 14 }, (_, index) => ({
  src: `/assets/img/ZaunHeroes/hero${index + 1}.jpg`,
  alt: `Zaun legend ${index + 1}`,
}));

const terms = [
  {
    title: "Chemtech",
    description:
      "A technology blending alchemy, toxic chemicals, and machinery to create powerful tools, weapons, and augmentations. Often unstable, Chemtech fuels innovation and chaos alike.",
    img: "/assets/img/ZaunTerms/chemtech2.png",
  },
  {
    title: "Shimmer",
    description:
      "A volatile, luminescent substance used to enhance physical abilities and endurance. It comes at a terrible cost, often causing addiction and physical degradation in its users.",
    img: "/assets/img/ZaunTerms/shimmer.png",
  },
  {
    title: "Chem-Barons",
    description:
      "The powerful and ruthless industrial leaders of Zaun. They rule through fear, wealth, and violence, overseeing both commerce and crime. Their influence stretches across all aspects of Zaunite life.",
    img: "/assets/img/ZaunTerms/barons.png",
  },
  {
    title: "City of Iron and Glass",
    description:
      "Most of Zaun’s structures are crafted from lattice ironwork, either forged in the many seething foundries or wrought from scavenged material discarded from above. Though there is brutal functionality to the bolts and rivets, its inhabitants still craft wonders that pierce the smog.",
    img: "/assets/img/ZaunTerms/city.png",
  },
  {
    title: "Zaun Gray",
    description:
      "The perpetual toxic smog that fills Zaun’s air, a byproduct of uncontrolled industry. It stains the skies and poisons its people, but they have adapted to survive and thrive in its shadow.",
    img: "/assets/img/ZaunTerms/zaunGray.png",
  },
  {
    title: "Lines",
    description:
      "A subterranean transportation network of pneumatic tubes and tunnels that ferry goods, resources, and sometimes people across Zaun. Powered by Chemtech and steam, it keeps commerce moving through the undercity.",
    img: "/assets/img/ZaunTerms/lines.png",
  },
];

function Zaun() {
  const reduce = useReducedMotion();

  return (
    <section className="scroll relative -mt-12 overflow-x-hidden px-6 pt-24 pb-28 sm:px-12 md:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-background to-transparent"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16">
        <div className="grid items-end gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Reveal>
              <Image
                src="/assets/img/zaun_emblem.png"
                width={140}
                height={176}
                sizes="140px"
                alt="Zaun emblem"
                className="h-auto w-[140px]"
              />
            </Reveal>
            <MaskHeading className="text-7xl text-zaun sm:text-8xl">ZAUN</MaskHeading>
            <Reveal>
              <p className="text-center text-2xl text-zaun/70 sm:text-3xl md:text-left">
                Polluted undercity
              </p>
            </Reveal>
            <RevealGroup className="mt-4 grid w-full grid-cols-2 gap-3">
              {traits.map((trait) => (
                <RevealItem
                  key={trait.label}
                  className="rounded-2xl border border-zaun/20 bg-[#10140e]/80 px-4 py-3"
                >
                  <p className="text-[11px] tracking-[0.16em] text-zaun uppercase">
                    {trait.label}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-[#d7e6c4]/80">
                    {trait.detail}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Reveal>
            <p className="max-w-prose text-base leading-7 text-[#d5e4c2]/90">
              Zaun is a large, undercity district, lying in the deep canyons and
              valleys threading Piltover. What light reaches below is filtered
              through fumes leaking from the tangles of corroded pipework and
              reflected from the stained glass of its industrial architecture.
              Zaun and Piltover were once united, but are now separate, yet
              symbiotic societies. Though it exists in perpetual smogged
              twilight, Zaun thrives, its people vibrant and its culture rich.
              Piltover’s wealth has allowed Zaun to develop in tandem; a dark
              mirror of the city above. Many of the goods coming to Piltover
              find their way into Zaun’s black markets, and hextech inventors
              who find the restrictions placed upon them in the city above too
              restrictive often find their dangerous researches welcomed in
              Zaun. Unfettered development of volatile technologies and reckless
              industry has rendered whole swathes of Zaun polluted and
              dangerous. Streams of toxic runoff stagnate in the city’s lower
              reaches, but even here people find a way to exist and prosper.
            </p>
          </Reveal>
        </div>

        <div>
          <Hr>
            <h2>Local Legends</h2>
          </Hr>
          <InViewMount className="h-[46vh] min-h-[280px] w-full">
            <FlexCarousel
              items={legends}
              preset="ribbon"
              intro="none"
              fit="landscape"
              cardHeight={0.58}
              gap={14}
              radius={14}
              autoplay
              interval={3.2}
              captions={false}
              className="h-full"
            />
          </InViewMount>
        </div>

        <div>
          <Hr>
            <h2>Innovations and Terminologies</h2>
          </Hr>
          <div className="flex flex-col gap-14">
            {terms.map((item, index) => (
              <RevealGroup
                key={item.title}
                className="grid items-center gap-5 md:grid-cols-2 md:gap-8"
              >
                <RevealItem className={index % 2 ? "md:order-2" : ""}>
                  <m.div
                    variants={reduce ? undefined : imageSettle}
                    className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"
                  >
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </m.div>
                </RevealItem>
                <RevealItem>
                  <div className="rounded-2xl border border-white/10 bg-[#161616]/80 p-6 backdrop-blur-md md:p-8">
                    <p className="text-xs tracking-[0.2em] text-zaun/80 uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-3xl text-[#efe4cf]">{item.title}</h3>
                    <p className="mt-3 max-w-prose text-base leading-7 text-[#b7ad9f]">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              </RevealGroup>
            ))}
          </div>
        </div>
      </div>
      <AmbientVideo
        src="/assets/video/ZaunBg.mp4"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40 blur-md brightness-50 hue-rotate-90"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}

export default Zaun;
