import Image from "next/image";

const stickers = [
  {
    src: "/assets/img/boom.gif",
    place: "col-start-4 row-start-1 justify-self-end self-start sm:col-start-6",
    frame: "w-[clamp(4.25rem,28cqi,12rem)] rotate-6 opacity-75",
  },
  {
    src: "/assets/img/what.gif",
    place: "col-start-1 row-start-2 self-end",
    frame: "w-[clamp(4rem,22cqi,9rem)] -rotate-12 opacity-70",
  },
  {
    src: "/assets/img/cool.gif",
    place: "col-start-4 row-start-2 justify-self-end self-center sm:col-start-5",
    frame: "w-[clamp(3.75rem,18cqi,8rem)] rotate-[18deg] opacity-55",
  },
  {
    src: "/assets/img/arrow2.png",
    place: "col-start-1 row-start-3 hidden self-center md:flex",
    frame: "w-[clamp(3.5rem,10cqi,6.5rem)] rotate-[18deg] opacity-80",
  },
  {
    src: "/assets/img/yay.gif",
    place: "col-start-1 row-start-5 self-end md:row-start-4",
    frame: "w-[clamp(3.75rem,16cqi,7.5rem)] -rotate-6 opacity-80",
  },
  {
    src: "/assets/img/heart.webp",
    place: "col-start-6 row-start-3 hidden self-center lg:flex",
    frame: "w-[clamp(3rem,8cqi,5rem)] -rotate-12 opacity-45",
  },
  {
    src: "/assets/img/what.gif",
    place: "col-start-2 row-start-5 hidden self-start md:flex",
    frame: "w-[clamp(5rem,18cqi,10rem)] rotate-3 opacity-40 blur-[1px]",
  },
  {
    src: "/assets/img/boom.gif",
    place:
      "col-start-4 row-start-6 justify-self-end self-end sm:col-start-6 sm:row-start-5",
    frame: "w-[clamp(4.5rem,24cqi,13rem)] -rotate-12 opacity-65",
  },
  {
    src: "/assets/img/cool.gif",
    place: "col-start-3 row-start-1 hidden self-start lg:flex",
    frame: "w-[clamp(4rem,12cqi,7rem)] rotate-[32deg] opacity-35 blur-[2px]",
  },
  {
    src: "/assets/img/arrow3.png",
    place: "col-start-5 row-start-4 hidden self-center lg:flex",
    frame: "w-[clamp(3.25rem,9cqi,5.5rem)] -rotate-[24deg] opacity-75",
  },
];

export function GraffitiCollage() {
  return (
    <>
      {stickers.map((sticker) => (
        <div
          key={`${sticker.src}-${sticker.place}`}
          aria-hidden
          className={`pointer-events-none flex ${sticker.place}`}
        >
          <Image
            src={sticker.src}
            alt=""
            width={320}
            height={140}
            sizes="(max-width: 768px) 28vw, 14rem"
            className={`h-auto max-w-full object-contain ${sticker.frame}`}
          />
        </div>
      ))}
    </>
  );
}
