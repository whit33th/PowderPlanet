import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

function Footer() {
  return (
    <motion.div
      className="flex  flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 p-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="sm:text-7xl text-5xl uppercase"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Whit33th
      </motion.h1>
      <motion.div
        className="flex flex-col gap-4 justify-between"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="flex justify-center sm:justify-end gap-1"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all duration-300 ease-in-out"
            href={"https://t.me/whit33th"}
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="invert"
                src={"/assets/icons/telegram.svg"}
                width={30}
                height={30}
                alt="logo"
              />
            </motion.div>
          </Link>
        </motion.div>
        <motion.p
          className="text-sm text-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          All rights reserved © 2025
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
