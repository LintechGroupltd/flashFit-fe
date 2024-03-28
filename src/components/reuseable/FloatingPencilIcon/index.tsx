import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function FloatingPencilIcon() {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        rotate: 360,
        transition: {
          duration: 0.5,
        },
      }}
      href="/contact-us"
      className="fixed bottom-[40px] right-[34px] sm:bottom-[50px] z-10 right-padding-vertical-screen cursor-pointer   rounded-[40px] "
      style={{}}>
      <Image
        width="80"
        alt="alt"
        height="80"
        className="h-[clamp(60px,calc(70/1420*100vw),90px)] w-[clamp(60px,calc(70/1420*100vw),90px)] cursor-pointer z-10 relative"
        src={"/assets/icons/pencil_icon.svg"}
      />
    </motion.a>
  );
}

export default FloatingPencilIcon;
