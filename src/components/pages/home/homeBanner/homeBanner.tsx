import React from "react";
import Image from "next/image";

import heroImg from "../../../../../public/assets/home/bannerSection/heroImg.svg";
import heroImgAngleBg from "../../../../../public/assets/home/bannerSection/heroImgAngleBg.svg";

function HomeBanner() {
  return (
    <div className="">
      <div className="grid md:grid-cols-2  w-full justify-between mx-auto  items-center pt-14 pb-36">
        <div className="" data-aos='fade-right'>
          <h2 className="md:text-[67px] text-[38px] text-[#fff] md:leading-[70px] leading-[50px] font-[600]  font-serif">
            Revitalize Your
            <br /> Ride with FlashFix
          </h2>

         {/*for desktop  */}
          <p className="text-white md:text-[18px] text-[16px] mt-7 font-sans md:block hidden">
            Secure payment solutions for sellers. Enjoy hassle-free
            <br /> transactions, instant processing, and no hidden fees.
            <br /> Simplify your sales and get paid faster.
          </p>

         {/*for Mobile  */}
          <p className="text-white md:text-[18px] text-[16px] mt-4 font-sans md:hidden block">
            Secure payment solutions for sellers. Enjoy hassle-free
             transactions, instant processing, and no hidden fees.
             Simplify your sales and get paid faster.
          </p>

        </div>


        <div className="w-full h-full md:mt-0 mt-10" data-aos='fade-left' data-aos-duration='1000'>
          {/* <Image src={heroImgAngleBg} alt="bannerImg" className="absolute" /> */}
          <Image src={heroImg} alt="bannerImg" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
