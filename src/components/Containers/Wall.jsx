import Image from "next/image";
import * as motion from "motion/react-client";

function Wall() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className=" h-48 md:h-64 relative [mask-image:linear-gradient(360deg,#d9d9d9_70.62%,rgba(115,115,115,0.3)_100%)] opacity-70 border-[#21231C] border-y  wall"
    >
      <Image
        className="absolute inset-0 w-full h-full border-[#21231C] border-y   object-cover object-center  z-[-1]  [mask-image:linear-gradient(180deg,#d9d9d9_70.62%,rgba(115,115,115,0.3)_100%)]"
        src="/assets/img/wallScreen2.png"
        width={1980}
        height={1080}
        alt="mostWanted"
      />
    </motion.div>
  );
}

export default Wall;
