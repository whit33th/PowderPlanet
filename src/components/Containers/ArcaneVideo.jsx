
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ArcaneVideo() {
  return (
    <div className="w-full sm:h-fit group sm:hover:pt-64 transition-all duration-300 ease-in-out  relative   rounded-sm">
      <video
        autoPlay
        disablePictureInPicture
        loop
        muted
        className="w-full h-full  absolute top-0  blur-xl group-hover:blur-none transition left-0 object-cover object-center brightness-50 z-[-1] [mask-image:linear-gradient(180deg,#d9d9d9_0%,rgba(115,115,115,0.4)_100%)]"
      >
        <source src="/assets/video/ArcaneTrailer.mp4" type="video/mp4" />
      </video>
      {/* <Link className=' z-10 text-3xl text-[#ffffff] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' href="/arcane" >Watch on Netflix</Link> */}
      <div className="px-8 py-8 h-full  ">
        <div className=" flex flex-col sm:flex-row items-end transition-all duration-300 ease-in-out  h-full gap-6 justify-between  ">
          <Image
            className=" group-hover:block group-hover:opacity-100 transition-all duration-300 ease-in-out  opacity-0 drop-shadow-2xl"
            src="/assets/img/NetflixSerial.png"
            width={100}
            height={200}
            alt="netflix"
          />

          <div className="flex flex-col gap-4">
            <Image
              className="opacity-100 drop-shadow-2xl "
              src="/assets/img/ArcaneText.png"
              width={250}
              height={200}
              alt="arcane"
            />
            <Link
              href="https://www.netflix.com/pl/title/81435684"
              className="w-full text-center hidden group-hover:block p-3 rounded-full text-sm bg-[#ffffff] text-black  hover:opacity-70 transition"
            >
              Watch on Netflix
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArcaneVideo;
