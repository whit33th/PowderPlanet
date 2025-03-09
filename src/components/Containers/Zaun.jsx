"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";

import "swiper/css";
import Hr from "../UI/myHr";
import { Tilt } from "react-tilt";

function Zaun() {
  const optionsTerms = {
    reverse: true, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const optionsSwiper = {
    reverse: true,
    max: 20,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative p-6 sm:p-20 flex flex-col gap-8 scroll overflow-x-hidden ">
      <div className="flex flex-col md:flex-row gap-8 justify-between *:flex-1">
        <motion.div
          className="flex flex-col items-center md:items-start justify-end gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideIn}
        >
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  className="fancy-animation"
                  src="/assets/img/zaun_emblem.png"
                  width={160}
                  height={200}
                  alt="Zaun Emblem"
                />
              </motion.div>

              <motion.h1
                className="z-10 text-[#c2e29c] fancy-animation text-8xl"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                ZAUN
              </motion.h1>
            </div>
            <motion.h2
              className="z-10 text-[#bddb98a9] fancy-animation text-4xl text-center sm:text-left"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Polluted undercity
            </motion.h2>
            <motion.div
              className="mt-8"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-2 *:text-center">
                {[
                  "Industrial oligarchy",
                  "Advanced Tech",
                  "Exploit magic",
                  "Urbanized (toxic)",
                ].map((text, i) => (
                  <motion.div
                    key={i}
                    className="border border-[#544c3d] p-4 rounded"
                    variants={fadeIn}
                  >
                    <p className="text-xs">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center gap-8 w-full *:w-full *:text-center relative text-[#b3d08f] max-w-3xl fancy-animation group"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0  ">
            <figure className="relative">
              <div className="border-t border-[#c2e29c]  ml-[18px] mr-[18px] "></div>
              <div className="h-4 w-4 border rotate-45 absolute top-0 left-0 transform -translate-y-1/2 border-[#c2e29c] ">
                <div className="flex items-center justify-center h-full group-hover:opacity-90 transition opacity-0">
                  <div className="border bg-[#c2e29c] h-2 w-2 "></div>
                </div>
              </div>
              <div className="h-4 w-4 border rotate-45 absolute  top-0 right-0 transform -translate-y-1/2 border-[#c2e29c] ">
                <div className="flex items-center justify-center h-full group-hover:opacity-90 transition opacity-0">
                  <div className="border bg-[#c2e29c] h-2 w-2 "></div>
                </div>
              </div>
            </figure>
          </div>
          <p className="text-sm/7 py-6 ">
            Zaun is a large, undercity district, lying in the deep canyons and
            valleys threading Piltover. What light reaches below is filtered
            through fumes leaking from the tangles of corroded pipework and
            reflected from the stained glass of its industrial architecture.
            Zaun and Piltover were once united, but are now separate, yet
            symbiotic societies. Though it exists in perpetual smogged twilight,
            Zaun thrives, its people vibrant and its culture rich. Piltover’s
            wealth has allowed Zaun to develop in tandem; a dark mirror of the
            city above. Many of the goods coming to Piltover find their way into
            Zaun’s black markets, and hextech inventors who find the
            restrictions placed upon them in the city above too restrictive
            often find their dangerous researches welcomed in Zaun. Unfettered
            development of volatile technologies and reckless industry has
            rendered whole swathes of Zaun polluted and dangerous. Streams of
            toxic runoff stagnate in the city’s lower reaches, but even here
            people find a way to exist and prosper.
          </p>
          <div className="absolute bottom-0 right-0">
            <figure className="relative">
              <div className="border-t border-[#c2e29c]  ml-[18px] mr-[18px] "></div>
              <div className="h-4 w-4 border rotate-45 absolute top-0 left-0 transform -translate-y-1/2 border-[#c2e29c] ">
                <div className="flex items-center justify-center h-full group-hover:opacity-90 transition opacity-0">
                  <div className="border bg-[#c2e29c] h-2 w-2 "></div>
                </div>
              </div>
              <div className="h-4 w-4 border rotate-45 absolute  top-0 right-0 transform -translate-y-1/2 border-[#c2e29c] ">
                <div className="flex items-center justify-center h-full group-hover:opacity-90 transition opacity-0">
                  <div className="border bg-[#c2e29c] h-2 w-2 "></div>
                </div>
              </div>
            </figure>
          </div>

          <div className="group-hover:!w-5/6 !w-4/6 transition-all transform -translate-x-1/2 h-full absolute top-0 left-1/2 bg-[#c2e29c] z-[-1] opacity-5 "></div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hr>
          <h1 className="text-2xl"> Local Legends </h1>
        </Hr>
      </motion.div>

      <motion.div
        className="w-full"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          slidesPerView={4}
          loop
          spaceBetween={30}
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{
            enabled: true,
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: true,
          }}
          breakpoints={{
            200: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          speed={3000}
          noSwipingClass="swiper-slide"
        >
          {Array(14)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <Tilt
                  options={optionsSwiper}
                  className="transition-transform duration-[100ms] ease-in-out"
                >
                  <div className="relative h-full flex items-center justify-center">
                    <Image
                      className=" w-full h-full object-contain rounded  aspect-video"
                      src={`/assets/img/ZaunHeroes/hero${index + 1}.jpg`}
                      width={1920}
                      height={1080}
                      loading="eager"
                      alt={`Hero ${index + 1}`}
                      onDragStart={(e) => e.preventDefault()}
                    />
                  </div>
                </Tilt>
              </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hr>
          <h1 className="text-2xl"> Innovations and Terminologies</h1>
        </Hr>
      </motion.div>

      <div className="relative flex flex-col gap-16 z-10">
        <div className="relative flex flex-col gap-12">
          {[
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
                "Most of Zaun’s structures are crafted from lattice ironwork, either forged in the many seething foundries or wrought from scavenged material discarded from above.Though there is brutal functionality to the bolts- and - rivets of Zaun's structures, its inhabitants still manage to craft breathtaking wonders that pierce the smog and reach for the sky.",
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
                "A subterranean transportation network of pneumatic tubes and tunnels that ferry goods, resources, and sometimes people across Zaun. This ingenious system highlights Zaunite innovation, powered by Chemtech and steam engineering, enabling survival and commerce in a polluted and industrialized undercity.",
              img: "/assets/img/ZaunTerms/lines.png",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex gap-4 transition-all hover:gap-0 flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center group relative`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemFadeIn}
            >
              {/* Изображение */}
              <Tilt
                options={optionsTerms}
                className="relative w-full transition-transform duration-[100ms] ease-in-out md:w-1/2 h-64 md:h-96"
              >
                <div>
                  <Image
                    src={item.img}
                    alt={`Term ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded shadow-lg "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent opacity-90 rounded"></div>
                </div>
              </Tilt>

              {/* Текст */}
              <div
                className={`relative w-full h-full md:w-1/2 p-6 md:p-8 bg-[#202020b3] rounded shadow-md border border-[#786d5e] backdrop-blur-lg transition-all group-hover:border-t-0 md:group-hover:border-t   ${
                  index % 2 === 0
                    ? "md:mr-[-3rem] border-r-0 md:group-hover:border-l-0"
                    : "md:ml-[-3rem] border-l-0 md:group-hover:border-r-0 group-hover:border-t-0 "
                } transition-transform duration-500 `}
              >
                <h1 className="text-2xl text-[#dccdb0] font-semibold  mb-4">
                  {item.title}
                </h1>
                <p className="text-sm  text-[#9e968b] leading-relaxed">
                  {item.description}
                </p>

                {/* Декоративный квадрат */}
                <div
                  className={`absolute  w-5 h-5 border border-[#938469] bg-[#414141] rotate-45 ${
                    index % 2 === 0
                      ? "right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
                      : "left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent opacity-90 rounded flex align-center justify-center"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <video
        className="w-full h-full object-cover z-[-2] absolute top-0 left-0 brightness-50 blur-md hue-rotate-90"
        src="/assets/video/ZaunBg.mp4"
        disablePictureInPicture
        preload="auto"
        autoPlay
        playsInline
        loop
        muted
      ></video>
    </div>
  );
}

export default Zaun;
