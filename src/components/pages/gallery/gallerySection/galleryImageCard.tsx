"use client";
import React from "react";



import Image from "next/image";
import { galleyData } from "./galleryData";

const GalleryImageCard = () => {
  return (
    <>
      <div className="md:columns-2 sm:columns-2 gap-[24px] space-y-[24px] mx-auto">
        {galleyData?.map((item, index) => (
          <div key={index} className="break-inside-avoid w-full ">
            <Image src={item?.image} alt="gallery_Image" className="mx-auto"/>
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryImageCard;
