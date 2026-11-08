"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "motion/react";
import { GraffitiCollage } from "@/components/Containers/GraffitiCollage";
import { AmbientVideo } from "@/components/UI/AmbientVideo";
import { enterEase } from "@/lib/motion";

function HomePage() {
  const [musicStatus, setMusicStatus] = useState(false);
  const reduce = useReducedMotion();
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const audioSourceRef = useRef<HTMLAudioElement | null>(null);
  const maxVolume = 0.2;

  useEffect(() => {
    return () => {
      audioSourceRef.current?.pause();
      audioContextRef.current?.close().catch(() => undefined);
    };
  }, []);

  const playMusic = async () => {
    if (!audioContextRef.current) {
      const audioContext = new AudioContext();
      const gainNode = audioContext.createGain();
      const audioElement = new Audio("/assets/audio/music.mp3");
      const source = audioContext.createMediaElementSource(audioElement);

      source.connect(gainNode).connect(audioContext.destination);

      audioContextRef.current = audioContext;
      gainNodeRef.current = gainNode;
      audioSourceRef.current = audioElement;
      audioElement.loop = true;
    }

    const audioContext = audioContextRef.current;
    const gainNode = gainNodeRef.current;
    const audioElement = audioSourceRef.current;
    if (!audioContext || !gainNode || !audioElement) return;

    if (musicStatus) {
      const currentTime = audioContext.currentTime;
      gainNode.gain.setValueAtTime(gainNode.gain.value, currentTime);
      gainNode.gain.linearRampToValueAtTime(0, currentTime + 0.2);
      window.setTimeout(() => {
        audioElement.pause();
        setMusicStatus(false);
      }, 200);
    } else {
      await audioElement.play();
      const currentTime = audioContext.currentTime;
      gainNode.gain.setValueAtTime(0, currentTime);
      gainNode.gain.linearRampToValueAtTime(maxVolume, currentTime + 0.2);
      setMusicStatus(true);
    }
  };

  return (
    <section className="@container relative isolate min-h-svh overflow-hidden">
      <AmbientVideo
        src="/assets/video/JinxBackground.mp4"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-30 blur-[6px]"
      />
      <div className="relative z-10 grid min-h-svh grid-cols-4 grid-rows-6 gap-2 px-4 py-6 sm:grid-cols-6 sm:grid-rows-5 sm:px-8">
        <div className="col-start-1 row-start-1 z-30 self-start justify-self-start">
          <button
            type="button"
            onClick={playMusic}
            aria-pressed={musicStatus}
            aria-label={musicStatus ? "Pause music" : "Play music"}
            className="relative cursor-pointer rounded-full border-8 border-[#2E4630] shadow-xl transition duration-200 hover:opacity-80 active:scale-105"
          >
            <Image
              className={
                musicStatus && !reduce
                  ? "opacity-80 motion-safe:animate-spin [animation-duration:4s]"
                  : "opacity-70"
              }
              width={75}
              height={75}
              sizes="75px"
              src="/assets/img/vinyl.png"
              alt=""
            />
            <Image
              className={`absolute top-1 left-1 transition duration-200 ${
                musicStatus ? "opacity-80" : "opacity-45"
              }`}
              width={20}
              height={20}
              sizes="20px"
              src="/assets/img/note.png"
              alt=""
            />
          </button>
        </div>

        <GraffitiCollage />

        <m.div
          className="z-20 col-span-2 col-start-2 row-span-2 row-start-3 flex items-center justify-center sm:col-start-3 sm:row-start-2"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduce ? 0.2 : 0.42, ease: enterEase }}
        >
          <Image
            className="h-auto w-[clamp(14rem,70cqi,32rem)] opacity-90"
            width={500}
            height={120}
            sizes="(max-width: 768px) 78vw, 32rem"
            src="/assets/img/JinxNameGrafity.png"
            alt="Jinx"
            priority
          />
        </m.div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}

export default HomePage;
