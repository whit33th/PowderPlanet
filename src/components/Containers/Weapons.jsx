"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Weapons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const weapons = [
    {
      title: "Pow-pow",
      src: "https://sketchfab.com/models/3fb58687aa084c4b8714c424a0639828/embed?autospin=1&autostart=1&transparent=1&camera=0",
    },
    {
      title: "Fishbones",
      src: "https://sketchfab.com/models/70685ce683de48a484f8fe068949db3f/embed?autospin=1&autostart=1&transparent=1&camera=0",
    },
    {
      title: "Chomper",
      src: "https://sketchfab.com/models/6ea7c6ba4da94a35afbc1405342a7c76/embed?autospin=1&autostart=1&transparent=1&camera=0",
    },
    {
      title: "Sheriff",
      src: "https://sketchfab.com/models/b91268c9a1a946949aaa3608d2bd3fd6/embed?autospin=1&autostart=1&transparent=1&camera=0",
    },
  ];

  return (
    <div className="w-full py-14 relative">
      <motion.div
        className="grid wrap gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center */:w-[250px] */:h-[250px] */:border *:border-[#262626] */:rounded-xl */:bg-[#ff373764] */:bg-cover */:bg-center */:relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px 0px" }}
      >
        {weapons.map((weapon, index) => (
          <motion.div key={index} className="relative" variants={itemVariants}>
            <iframe
              className="w-full h-full rounded-xl"
              title={weapon.title}
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src={weapon.src}
              alt={weapon.title}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      <Image
        className="absolute object-cover object-left top-0 left-0 w-full h-full z-[-1] opacity-100 hue-rotate-[120deg] brightness-125 blur-2xl"
        src={"/assets/img/shooting_gallery.png"}
        width={1920}
        height={1050}
        alt="shooting_gallery"
      />
    </div>
  );
}

export default Weapons;
