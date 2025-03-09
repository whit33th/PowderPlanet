"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import { motion } from "motion/react";

export default function ConceptArt() {
  const conceptArts = [
    { src: "/assets/img/Concept/concept1.png" },
    { src: "/assets/img/Concept/concept10.jpg" },
    { src: "/assets/img/Concept/concept11.jpg" },
    { src: "/assets/img/Concept/concept9.jpg" },
    { src: "/assets/img/Concept/concept2.png" },
    { src: "/assets/img/Concept/concept3.jpg" },
    { src: "/assets/img/Concept/concept5.jpg" },
    { src: "/assets/img/Concept/concept6.jpg" },
    { src: "/assets/img/Concept/concept8.jpg" },
    { src: "/assets/img/Concept/concept4.jpg" },
  ];

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 50, x: 50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5}}
        className="math-auto text-4xl md:text-6xl font-bold neon-text mb-8 text-center "
      >
        <span>Grade-</span>
        <span className="text-pink-500">A</span>
        <span className="text-blue-600">r</span>
        <span className="text-green-600">t</span> <span>Gallery</span>
      </motion.h1>
      <motion.div
        className="w-full max-w-4xl px-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          pagination={{ type: "fraction", clickable: true }}
          className="jinx-swiper"
        >
          {conceptArts.map((art, index) => (
            <SwiperSlide
              key={index}
              className="bg-black  shadow-xl relative aspect-video rounded-sm h-fit "
            >
              <Image
                src={art.src}
                alt={"Concept Art" + index}
                className=" object-contain h-full rounded-sm "
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
