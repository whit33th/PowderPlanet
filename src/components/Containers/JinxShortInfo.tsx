"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "motion/react";
import { MaskHeading, Reveal } from "@/components/UI/Reveal";
import { hoverTransition } from "@/lib/motion";

const copy = {
  jinx: {
    kicker: "The Loose",
    title: "Cannon",
    line: "Volatile explosives are a girl's best friend!",
    body: "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom, and gleefully brings her own chaotic brand of pandemonium wherever she goes.",
    accent: "text-jinx",
    rule: "border-jinx",
    wash: "from-jinx via-[#59cfea] to-[#9859ea]",
    ring: "border-pink-500",
    video: "/assets/video/JinxAvatar.mp4",
  },
  powder: {
    kicker: "The Little",
    title: "Inventor",
    line: "Ingenious gadgets for her family.",
    body: "Once a shy and brilliant inventor, Powder loved crafting ingenious gadgets to help her family. But after a tragic accident and feeling abandoned, she embraced chaos and became Jinx, leaving behind the kind-hearted girl she once was.",
    accent: "text-powder",
    rule: "border-powder",
    wash: "from-powder via-[#596fea] to-[#ea59e5]",
    ring: "border-blue-400",
    video: "/assets/video/Powder.mp4",
  },
} as const;

function Portrait({
  active,
  onToggle,
}: {
  active: keyof typeof copy;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const jinxRef = useRef<HTMLVideoElement>(null);
  const powderRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const sync = (inView: boolean) => {
      const play = (video: HTMLVideoElement | null, on: boolean) => {
        if (!video) return;
        if (inView && on) video.play().catch(() => undefined);
        else video.pause();
      };
      play(jinxRef.current, active === "jinx");
      play(powderRef.current, active === "powder");
    };

    const observer = new IntersectionObserver(
      ([entry]) => sync(Boolean(entry?.isIntersecting)),
      { rootMargin: "120px" },
    );
    observer.observe(node);
    sync(true);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div ref={frameRef} className="relative">
      <m.button
        type="button"
        onClick={onToggle}
        aria-label={active === "jinx" ? "Switch to Powder" : "Switch to Jinx"}
        className="relative h-[280px] w-[280px] cursor-pointer sm:h-[340px] sm:w-[340px]"
        whileHover={reduce ? undefined : { scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={hoverTransition}
      >
      <div
        aria-hidden
        className={`pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-colors duration-200 ${
          active === "jinx" ? "bg-jinx/35" : "bg-powder/35"
        }`}
      />
      <video
        ref={jinxRef}
        className={`absolute inset-0 h-full w-full rounded-full border-8 object-cover transition-opacity duration-200 ${copy.jinx.ring} ${
          active === "jinx" ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
      >
        <source src={copy.jinx.video} type="video/mp4" />
      </video>
      <video
        ref={powderRef}
        className={`absolute inset-0 h-full w-full rounded-full border-8 object-cover transition-opacity duration-200 ${copy.powder.ring} ${
          active === "powder" ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
      >
        <source src={copy.powder.video} type="video/mp4" />
      </video>
      </m.button>
    </div>
  );
}

function JinxShortInfo() {
  const [active, setActive] = useState<keyof typeof copy>("jinx");
  const persona = copy[active];

  return (
    <section className="relative -mt-16 overflow-hidden px-6 pt-28 pb-24 sm:px-12 md:px-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-background to-transparent"
      />
      <Image
        className={`pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.07] blur-sm ${
          active === "powder" ? "hue-rotate-[290deg]" : ""
        }`}
        width={1920}
        height={1080}
        sizes="100vw"
        src="/assets/img/CoolBack.webp"
        alt=""
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
        <div className="flex w-full max-w-xl flex-1 flex-col gap-6">
          <MaskHeading
            key={active}
            level="h1"
            className="text-5xl leading-[1.05] sm:text-6xl"
          >
            {persona.kicker}
            <br />
            <span
              className={`bg-gradient-to-r ${persona.wash} bg-clip-text text-transparent`}
            >
              {persona.title}
            </span>
          </MaskHeading>
          <Reveal key={`${active}-quote`}>
            <blockquote
              className={`border-l-2 ${persona.rule} max-w-xl pl-5 transition-colors duration-200`}
            >
              <p className={`mb-3 text-xl ${persona.accent}`}>{persona.line}</p>
              <p className="text-sm leading-7 text-white/75">{persona.body}</p>
            </blockquote>
            <Image
              src="/assets/img/blow2.webp"
              width={56}
              height={36}
              alt=""
              className="mt-5 h-auto w-14"
            />
          </Reveal>
        </div>
        <div className="flex flex-1 justify-center">
          <Portrait
            active={active}
            onToggle={() =>
              setActive((current) => (current === "jinx" ? "powder" : "jinx"))
            }
          />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}

export default JinxShortInfo;
