import React from "react";
import Image from "next/image";

import heroImg from "../../../../../public/assets/home/bannerSection/heroImg.svg";
import heroImgAngleBg from "../../../../../public/assets/home/bannerSection/heroImgAngleBg.svg";

function HomeBanner() {
  return (
    <div className="">
      <div className="grid grid-cols-2  w-full justify-between mx-auto  items-center pt-14 pb-36">
        <div className="">
          <h2 className="text-[67px] text-[#fff] leading-[70px] font-[600]  font-serif">
            Revitalize Your
            <br /> Ride with FlashFix
          </h2>
          <p className="text-white text-[18px] mt-5 font-sans">
            Secure payment solutions for sellers. Enjoy hassle-free
            <br /> transactions, instant processing, and no hidden fees.
            <br /> Simplify your sales and get paid faster.
          </p>
        </div>
        <div className="w-full h-full">
          {/* <Image src={heroImgAngleBg} alt="bannerImg" className="absolute" /> */}
          <Image src={heroImg} alt="bannerImg" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
